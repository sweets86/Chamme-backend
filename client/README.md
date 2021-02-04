# Chamme - Y3SS
* Frontend: React, TypeScript
* Backend: Node.js & Express
* API: Stripe
* Host: Netlify

# Innehåll

* Frontend: En webbshop, galleri, blogg applikation där jag får möjlighet att sälja produkter  samt dela med mig av min konst.
Startsida ger en inblick av vad som finns i applikationen, härifrån kan man nå alla sidor.

Vad som erbjuds att besöka:

    * Gallery
    * News
    * Blog
    * Products


Väl vid hantering av köp:
Vid betalning av VISA som är valt by default, har Stripe API implementerats och du får upp en orderbekäftelse efter genomfört köp.
Swish är ännu ej tillgänglig för betalning.
För att uppdatera dina validerade kontaktuppgifter, vänligen tryck på spara.

* Backend: I servern vid uppkoppling till Stripe API valideras köpet och orderbekäftesle kan skickas.

* Länk till Github-repo Frontend
https://github.com/sweets86/Chamme


* Länk till Github-repo Backend
https://github.com/sweets86/Chamme-backend

# För att köra applikationen
Ladda ner filerna från länkarna ovan från Github.
Du behöver ha node.js installerat på datorn.

För frontend:
Kopiera innehållet från frontend mappen i en ny egen frontend mapp och öppna mappen i VSC.
Öppna terminalen och skriv in npm install. Du kommer se att node_modules mappen läggs till.
Gå sedan in i mappen components och öppna Payment, i index.tsx filen hitta funktionen: proceedToCheckout()
Ersätt och klistra in din STRIPE_PUBLIC_KEY från ditt Stripe konto mellan situationstecken och spara filen.
Därefter skriver du in npm start i terminalen. Nu bör du fått igång applikationen till port localhost:3000.
Väl vid köp via VISA/Stripe använd test-kontonr: 4242 4242 4242 4242.

För backend:
Kopiera innehållet från backend mappen i en ny egen backend mapp och öppna mappen i VSC.
Öppna terminalen och skriv in npm install. Du kommer se att node_modules mappen läggs till.
Skapa en .env fil och klistra in din STRIPE_SECRET_KEY från ditt Stripe konto och spara filen.
Därefter skriver du in node app.js i terminalen.
Nu bör du fått igång applikationen till port localhost:5000.

<<<--- ENGLISH --->>>

# Chamme - Y3SS
* Frontend: React, TypeScript
* Backend: Node.js & Express
* API: Stripe
* Host: Netlify

# Contents

* Frontend: A web shop, gallery, blog application where I get the opportunity to sell products and share my art.
Home page gives an insight into what is in the application, from here you can reach all pages.

What is offered to visit:

    * Gallery
    * News
    * Blog
    * Products


Well when handling purchases:
When paying for VISA, which is selected by default, the Stripe API has been implemented and you will receive an order confirmation after the purchase has been completed.
Swish is not yet available for payment.
To update your validated contact information, please press save.

* Backend: In the server when connecting to the Stripe API, the purchase is validated and the order can be sent.

* Link to Github repo Frontend
https://github.com/sweets86/Chamme


* Link to Github repo Backend
https://github.com/sweets86/Chamme-backend

# To run the application
Download the files from the links above from Github.
You need to have node.js installed on your computer.

For front end:
Copy the contents of the frontend folder into a new custom frontend folder and open the folder in VSC.
Open the terminal and enter npm install. You will see that the node_modules folder is added.
Then go to the components folder and open Payment, in the index.tsx file find the function: proceedToCheckout ()
Replace and paste your "public-key" from your Stripe account between situation characters and save the file.
Then enter npm start in the terminal. Now you should have started the application to port localhost: 3000.

For backend:
Copy the contents of the backend folder to a new custom backend folder and open the folder in VSC.
Open the terminal and enter npm install. You will see that the node_modules folder is added.
Create a .env file and paste your "secret-key" from your Stripe account and save the file.
Then type node app.js in the terminal.
Now you should have started the application to port localhost: 5000.