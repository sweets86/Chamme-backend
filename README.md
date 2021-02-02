# Chamme Backend
* Node.js & Express
* Stripe API

# Innehåll
* För att connecta med Stripe API byggdes denna backendservern med Express och Node.js. HTTP-requests hämtas och skickas med REST-API: POST & GET. 
Från och till frontend-applikationen med data som behövs för att koppla upp till Stripe och verifiera köpet innan orderbekräftelse skickas och json.fil med ordern skapas i servern.

* Länk till Github-repo Backend
https://github.com/sweets86/Chamme-backend

* Länk till Github-repo Frontend
https://github.com/sweets86/Chamme

# För att köra applikationen
Ladda ner filerna från länkarna ovan från Github.
Du behöver ha node.js installerat på datorn.

För backend:
Kopiera innehållet från backend mappen i en ny egen backend mapp och öppna mappen i VSC.
Öppna terminalen och skriv in npm install. Du kommer se att node_modules mappen läggs till.
Skapa en .env fil och klistra in din STRIPE_SECRET_KEY från ditt Stripe konto och spara filen.
Därefter skriver du in node app.js i terminalen.
Nu bör du fått igång applikationen till port localhost:5000.

För frontend:
Kopiera innehållet från frontend mappen i en ny egen frontend mapp och öppna mappen i VSC.
Öppna terminalen och skriv in npm install. Du kommer se att node_modules mappen läggs till.
Gå sedan in i mappen components och öppna Payment, i index.tsx filen hitta funktionen: proceedToCheckout()
Ersätt och klistra in din PUBLIC_KEY från ditt Stripe konto mellan situationstecken och spara filen.
Därefter skriver du in npm start i terminalen. Nu bör du fått igång applikationen till port localhost:3000.

<<<--- ENGLISH --->>>

# Chamme Backend
* Node.js & Express
* Stripe API

# Contents
* To connect with the Stripe API, this backend server was built with Express and Node.js. HTTP requests are retrieved and sent with REST-API: POST & GET.
From and to the front-end application with the data needed to connect to Stripe and verify the purchase before order confirmation is sent and json.fil with the order is created in the server.

* Link to Github repo Backend
https://github.com/sweets86/Chamme-backend

* Link to Github repo Frontend
https://github.com/sweets86/Chamme

# To run the application
Download the files from the links above from Github.
You need to have node.js installed on your computer.

For backend:
Copy the contents of the backend folder to a new custom backend folder and open the folder in VSC.
Open the terminal and enter npm install. You will see that the node_modules folder is added.
Create a .env file and paste your STRIPE_SECRET_KEY from your Stripe account and save the file.
Then type node app.js in the terminal.
Now you should have started the application to port localhost: 5000.

For frontend:
Copy the contents of the frontend folder into a new custom frontend folder and open the folder in VSC.
Open the terminal and enter npm install. You will see that the node_modules folder is added.
Then go to the components folder and open Payment, in the index.tsx file find the function: proceedToCheckout ()
Replace and paste your PUBLIC_KEY from your Stripe account between situation characters and save the file.
Then enter npm start in the terminal. Now you should have started the application to port localhost: 3000.