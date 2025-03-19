BeginMotionis a React fitness stopwatch that caters to runners and individuals beginning their fitness journey. The goal of BeginMotion is to time a variety of workouts while keeping a record of sessions over time.  The core functionality includes a timer that displays minutes, seconds and milliseconds. The app also includes control buttons that enable users to start, pause, reset, and record an interval split. The recorded intervals will be displayed in a list .BeginMotion will have a responsive interface that displays different levels of detail depending if the user is viewing on mobile vs desktop.  Mapbox API has been integrated in the app to be further improved by adding real time routing.

How to Run Locally

To set up the React environment, install Node.js along with an IDE such as VS Code and follow the instructions below.
1.	Verify installation of Node.js by opening the built-in terminal in VS code and typing the command “node --version”
2.	Run the command “npm install -D vite” to install the Node.js packages.
3.	To set up the boilerplate project using Vite by running command 
“npm create vite@latest <nameofproject>”
4.	Change the directory of the terminal using cd <nameofproject>
5.	Select “React” from the framework dropdown list in the terminal and “JavaScript” as the variant.
6.	Run the command “npm install” to install the dependencies for the base project
7.	Type “npm run dev” to start the development server
8.	Download code via a zip file and transfer the source code into the new boilerplate project
9.	Type “npm run dev” and open a web browser on your system to the web address specified on the command line.
    
How to Deploy

To deploy BeginMotion in GitHub pages follow the steps below:
1.	Create a Public Repository in GitHub
2.	Once the repository is created, open your app using VS Code
3.	Verify that you are in the correct directory by typing “cd <nameofproject>” in the terminal.
4.	Run the following commands in the VS Code terminal to initialize the git repository
$ git init
$ git add .
$ git commit -m "initial-commit"
$ git branch -M main
$ git remote add origin http://github.com/{username}/{repo-name}.git
$ git push -u origin main
5.	Update and save the vite.config.js to setting the base as “/{repositoryname}/”
6.	Run npm install gh-pages --save-dev in the terminal
7.	Update and save the package.json file by adding the following to the Scripts portion: "predeploy" : "npm run build",
    "deploy" : "gh-pages -d dist",
8.	Include "homepage": "https://{username}.github.io/{repo-name}/" in the package.json file.
9.	Run in the terminal: npm run deploy
10.	Visit GitHub -> Settings -> Pages . Verify source as “Deploy from branch” and branch as “gh-pages”
11.	After a few minutes visit https://{username}.github.io/{repo-name}/

Use Case 1: Beginners Starting their Fitness Journey

Users  who want to utilize the basic stopwatch functionality that includes starting, pausing, and resetting the timer . 
•	Users press the Start button and then have  the option to pause or reset during a variety of workouts.
•	User clicks progress page to see the displayed total time for the session

Use Case 2: Runners Tracking their Progress

Runners can track their runs by recording intervals for every mile or km. Users can view their progress over time and total running time for each session.
•	Users Start the stopwatch and press pause when completing an interval.
•	Press the interval button to record and display the interval number, time, and total time.
•	Users repeat interval tracking as needed and track their progress by viewing their historical total time in the progress page.

Shortcomings/Project Improvement/Functionality

To further improve the visualization of the historical data, external libraries such as D3.js can be imported to enhance display of data or for future reporting. Additional visualizations such as bar graphs, pivot tables and line charts can be used to track interval progress and total time for a variety of workouts over a specified period of time. 
The shortcoming with the external Mapbox API integration for this project was not being able to implement real time location. Currently, the map displayed in the progress page includes coordinates or Philadelphia, PA. The routing can be further improved to display current location using the GeolocateControl plugin from Mapbox GL LS which uses browser's Geolocation API to determine a user’s position. The distance can also be measured using Mapbox API.
BeginMotion excelled in functionality by including the interval list and the listing of historical sessions. This enhances the app by tracking progress overtime by incorporating data from the interval list and total time for each session. All types of users can use both functionalities to improve endurance and learn more about their fitness journey.


