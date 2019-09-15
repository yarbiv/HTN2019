import serial
import firebase_admin
import datetime
from firebase_admin import credentials
from firebase_admin import db
import time

# Fetch the service account key JSON file contents
cred = credentials.Certificate('C:/Users/jessy/Desktop/Arduino/FSR2/wasteless-ad0ff-firebase-adminsdk-xxoxz-01b3f94ece.json')

# Initialize the app with a service account, granting admin privileges
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://wasteless-ad0ff.firebaseio.com/'
})

dateList = ['2019-9-1', '2019-9-2','2019-9-3','2019-9-4','2019-9-5','2019-9-6',
           '2019-9-7','2019-9-8','2019-9-9','2019-9-10','2019-9-11','2019-9-12',
           '2019-9-13','2019-9-14','2019-9-15']

hour = 0

def toFirebase(mass, hour, ref):
    timeNow = datetime.datetime.now().time()
    ref.update({hour : mass})

ser = serial.Serial('COM3', baudrate=9600, timeout=1)

for date in dateList:
    ref = db.reference(date)
    while hour <= 24:
        data = ser.readline()[:-2].decode("utf-8")
        castdata = 0
        try: 
            castdata = float(data)
        except ValueError:
            pass 
        time.sleep(1)
        data_waste = ser.inWaiting()

        print(castdata)
        toFirebase(castdata, hour, ref)
        hour += 1

        if(hour == 24):
            hour = 0
            break 
            

