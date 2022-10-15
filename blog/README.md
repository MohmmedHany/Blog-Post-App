Hello My Mohmmed From the Future.
This is your 101 guide on how to use this amazing simple app.
This is a Simple Blog Post App where you can CRUD (Create-Read-Update-Delete) Posts.
---------------------------------------------------------------------------------------
This app uses JSON-Server as Database and Ngrok to make server public as mobile emulator can't
communicate with http and only with https.
---------------------------------------------------------------------------------------
For this app to work, kindly follow the following guide lines :
- Navigate into /blog and npm run start
- Open another Terminal and navigate into /jsonserver and npm run db
- Open Ngrok and run - ngrok authtoken YOUR_AUTHTOKEN
- Then ngrok http PORT_NUMBER (Use any port no. like 3000 for example)
- AND REMEMBER every time you run ngrok link that is provided to you changes so
you must go to /blog/src/api/JsonServer.js and  change baseURL to correct one

And You Should be all ready and set to go. Good Luck With your Job Interview.