# MEAN Playground

To use TypeScript
    npm install -g concurrently
    npm install -g lite-server
    npm install -g typescript

run "npm run start" under /client, the script "start" in /client/package.js will 
keep watching the changing of ts and compile ts to js

Reference:
    MEAN App From Scratch - MongoDB, Express, Angular 2 & NodeJS
    github https://github.com/andersontr15/Angular2MEANStack

Step1:
    npm init              # create package.json

Step2:
    npm install express body-parser ejs mongojs --save

Step3:
    server.js

Step4:
    node server
    npm install -g nodemon   # avoid restart server
    nodemon                  # use modemon to update server

Step5:
    create db on mlab
    create user/user123 in db