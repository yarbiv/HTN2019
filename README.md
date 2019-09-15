## Inspiration
Canada currently ranks 5th worldwide in municipal waste generation, producing 640kg of garbage per person every year. This weekend, we asked ourselves how we can cut down on our daily waste footprint. We examined Fitbit and Pokemon Go for inspiration — specifically, the way they gamify fitness. By offering small rewards and keeping users engaged, they motivate users to finish menial tasks. What if we could channel that “gotta get my 10,000 steps in” mentality towards reducing our waste footprint?

## What it does
Waste Minus weighs your garbage and tracks changes in your waste footprint. Using personal challenges, leaderboards, and week-by-week tracking, we hope that our app can gently nudge users into being more mindful of their impact. 

Features include:
- Dashboard: users can see waste their waste production on the current day, as well as a handy comparison to their records a week ago. They can also see their progression of waste production over the past 7 days, in comparison to the previous week’s data. The circle in the middle of the dashboard also acts as a progress bar that signals whether you are making improvements or exceeding previous records of waste production. 
- Personal challenges
- Leaderboard synced with users' friends
- Account page to manage logistics 

## How we built it
We created the mobile client using React Native, our backend with Firebase, and the IoT receiver using an Arduino. 

## Challenges we ran into
We had difficulties across the stack, as we all learned new technologies (React Native and Firebase, mainly) and struggled to integrate with one another. In particular, we struggled with communication between our Arduino and our Firebase backend. We also attempted to use Firebase functions to format and incorporate triggers in our backend, but had difficulty working with the API. 

## Accomplishments that we're proud of
We’re proud of our vision and the speed with which we picked up brand-new tools to help realize our vision. React Native and Firebase were totally new, and none of us had worked with IoT applications before.

## What we learned
We learned to work with new technologies (React Native, Expo, Firebase) and how far we could stretch ourselves on 4 hours of sleep.

## What's next for Waste Minus
Facebook/contacts integration to dynamically generate lists of friends and improve the social network aspect of Waste Minus. We also toyed with the idea of using Bluetooth transmission of our data from the hardware component, but didn’t have enough time to implement it. Additionally, we hope to incorporate trash classification (and factors aside from weight) to create a more holistic waste tracking application.
