# AcmeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

#Requirements:
1. Node JS
2. MongoDB
3. Angular
4. Bootstrap
and few others that will be installed using > npm install

Node js:
1. Install dependencies > npm install
2. Run the server in one terminal by > node server/index.js

Angluar:
1. Build angular project by > npm start
2. In the browser go to : localhost:4200

Note: Angular is running at port 4200 and express server is running at port 3000


To get email:
1. In app.post('/api/v1/buynow') change transporter value to your email, pass and use gmail service instead of ethereal:

    const transporter = nodemailer.createTransport({
            service: 'gmail'
            auth: {
                user: 'ora.collins@ethereal.email',
                pass: 'YGE9B5jaNCAJSTaevC'
            }
        });
