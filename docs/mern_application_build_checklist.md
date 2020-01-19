# -------------------------------------------------------------------------------------------------
# ----------------------  STEPS 2 FOLLOW TO SETUP A MERN APPLICATION: -----------------------------
# -------------------------------------------------------------------------------------------------
# ------- from the DB, to EXPRESS Server + NODE API, and finally to the REACT Frontend ------------
# --------------------------------------- (see below) ---------------------------------------------




# -------------------------------------------------------------------------------------------------
# ---------------------------- MongoDB - 'Atlas / Cloud Version'  ------------------------------------

## CONFIGURATION STEPS:

(assuming I already have an account created with 'cloud.MongoDB')

1. Click 'Create New Cluster'
2. Create an initial database user (username: JohnDoe / password: JohnDoe123)
3. Whitelist IP address
4. Connect the application to the cluster



# -------------------------------------------------------------------------------------------------
# ----------------------------------- APPLICATION -------------------------------------------------

1. Open new/empty project folder
2. Create '.gitignore' file
3. Initialize and/or connect to GIT repository
4. $ npm init (& set application entry point to 'server.js'), (everything else can be default)

Install All Dependicies (so they are ready for use later on) :

## REQUIRED APPLICATION **DEPENDINCIES**: 

- express (main web framework for backend)
- express-validator (data validation, when making POST requests to apps API, if there a missing required fields, this package will ensure an error is raised before it can be accepted)
- bcryptjs (used for password hashing and encrypts saved passwords stored in my database)
- config (where i store GLOBAL variables)
- jsonwebtoken (restful route validations)
- mongoose (interface for interacting with Mongo Database)
- request (this package allows me to make HTTP requests to external api's... lets me hide my api key when making these external api requests)

## ADD-ON / OPTIONAL **DEPENDINCIES**:

- gravitar (used for profile avatars / images.... If a user signs up to my app, they can use an Email associated with a gravatar account ndd it will AUTOMATICALLY grab and show their profile image)

## COMMAND TO INSTALL ALL OF THE ABOVE **APPLICATION** DEPENDENCY PACKAGES:

5. npm i express express-validator bcryptjs config gravatar jsonwebtoken mongoose request

# -------------------------------------------------------------------------------------------------

'After that I need to install some 'DEV' dependency node modules' -------------->

- nodemon (to constantly watch server so i dont have to refresh after every change)
- concurrently (this module allows me to RUN the backend express server AND the frontend react dev server at the same time with **one single command**)

## COMMAND TO INSTALL ALL OF THE ABOVE:

6. $ npm i -D nodemon concurrently





# -------------------------------------------------------------------------------------------------
# ----------------------------------- Setup Server -------------------------------------------------

1. Create the file that i specified as the MAIN ENTRY POINT for my application (this is where i will bring in my express server 'require' and all other packages i 'require' from node_modules & external)

2. Bring EXPRESS into the application: 'const express = require('express');'

3. Initialize my app variable with express: 'const app = express();'
