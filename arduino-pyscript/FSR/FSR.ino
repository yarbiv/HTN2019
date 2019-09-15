int fsrPin = 0;     // the FSR and 10K pulldown are connected to a0
int fsrReading;     // the analog reading from the FSR resistor divider
int fsrVoltage;     // the analog reading converted to voltage
unsigned long fsrResistance;  // The voltage converted to resistance, can be very big so make "long"
unsigned long fsrConductance; 
long fsrForce;
long fsrMass;// Finally, the resistance converted to force
 
void setup(void) {
  Serial.begin(9600);   // We'll send debugging information via the Serial monitor
}
 
void loop(void) {
  fsrReading = analogRead(fsrPin);  
  // analog voltage reading ranges from about 0 to 1023 which maps to 0V to 5V (= 5000mV)
  fsrVoltage = map(fsrReading, 0, 1023, 0, 5000); 
 
  if (fsrVoltage == 0) {
    Serial.println(0);  
  } else {
    // The voltage = Vcc * R / (R + FSR) where R = 10K and Vcc = 5V
    // so FSR = ((Vcc - V) * R) / V        yay math!
    fsrResistance = 5000 - fsrVoltage;     // fsrVoltage is in millivolts so 5V = 5000mV
    fsrResistance *= 10000;                // 10K resistor
    fsrResistance /= fsrVoltage;
//    Serial.print("FSR resistance in ohms = ");
//    Serial.println(fsrResistance);
 
    fsrConductance = 1000000;           // measurement in micromhos so 
    fsrConductance /= fsrResistance;
 
    // Use the two FSR guide graphs to approximate the force
    if (fsrConductance <= 1000) {
      fsrForce = fsrConductance / 80;
      fsrMass= fsrForce/9.81*1000;
      //Serial.print("Mass in g: ");
      Serial.println(fsrMass);       
    } else {
      fsrForce = fsrConductance - 1000;
      fsrForce /= 30;
      fsrMass= fsrForce/9.81*1000;
      //Serial.print("Mass in g: ");
      Serial.println(fsrMass);         
    }
  }
  delay(1000);
}
