## -------------------------------------------------------------------------------------------------
## ------------------------------  MERN Knowledge Learnt: ------------------------------------------
## -------------------------------------------------------------------------------------------------

## -------------------------------------------------------------------------------------------------
## ---------------------  1.   API's, RESTful routing & securing Endpoints  ------------------------
## -------------------------------------------------------------------------------------------------


## What is an API?

- Short for 'application-programming-interface'

- An API is the code RESPONSIBLE FOR HANDLING REQUESTS. It is the messenger that delivers a users request to the application (provider) that you're requesting it from and then delivers the response back. In the big picture... API's (the process of requests and responses) are responsiblle for all the inter-connectivity of the web.

- In a MERN application, the **rest** API it uses is built using a combination of EXPRESS.js and NODE.js. This is called my **internal** API.

- Alternatively, my app could also use an **EXTERNAL** API. This is 3rd party API intergrated into my app,  that my application makes requests to. It's a resource my application uses to connect services (such as PayPal, Google Maps, etc...) and transfer data.


## What is a rest API?

- 'REST' is short for 'restful routes'

- A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb AND the URL.

- It's the same routing practices used in my previous rails appications. (see below line)

- 1. Route matches HTTP verb   2. HTTP verb matches CRUD method I have written inside a controller   3. Which then decides the 'action' to take      4. sends back that action to the users end!!


## What are rest API Endpoints?

- Simply... an endpoint is the URL sent from the users browser (the request)

- It is called an 'endpoint' because it's effectively one END of the communication channel (between the user and my application)

- At this endpoint, the URL is then mapped to a HTTP verb which is then mapped to a CRUD action I defined in a controller.

- IF MY API ENDPOINTS ARE NOT 'SECURE' IT MEANS THAT UNAUTHORIZED / MALICIOUS USERS COULD PEFORM CRUD ACTIONS THERE NOT ALLOWED TO **OR** EVEN MAKE A REQUEST TO MY SERVER AND TELL IT TO CALL MY DATABASE & GIVE THEM ALL OF MY USERS INFORMATION (Credit card info, identifiable info, classified records, etc, etc...)

resource-link: [](https://smartbear.com/learn/performance-monitoring/api-endpoints/)

## What is **SECURING** API endpoints? Secure How & Why Is It Important??

- IF MY API ENDPOINTS ARE NOT 'SECURE' IT MEANS THAT UNAUTHORIZED / MALICIOUS USERS COULD PEFORM CRUD ACTIONS THERE NOT ALLOWED TO **OR** EVEN MAKE A REQUEST TO MY SERVER AND TELL IT TO CALL MY DATABASE & GIVE THEM ALL OF MY USERS INFORMATION (Credit card info, identifiable info, classified records, etc, etc...)

- Businesses use APIs to connect services and to transfer data. Broken, exposed, or hacked APIs are behind major data breaches. They expose sensitive medical, financial, and personal data for public consumption.

- In addition, if a commercial application dealing with sensitive user information, uses exposed API endpoints then they can be compliant and have to pay big fines if found out.

## How to secure these endpoints:

- There are multiple ways to secure a RESTful API e.g. basic auth, OAuth etc.

- MOST IMPORTANTLY THOUGH, is to ensure that RESTful APIs are **STATELESS** – (to make sure that the request is coming from the person it says it's coming from) 

- ....a stateless rest route is a route that does NOT depend on cookies or sessions. Instead, each API request should come with some sort authentication credentials which must be validated on the server for each and every request. JWT (Json Web Tokens is how this is done!!!!!!!!!!!!!!!!!!)

- Other wise if i knew the url respsonible for displaying a logged-in users bank account.... If the API's restful routes were NOT stateless (not using JWT) I could simply: 1. Use a users cookies I attained from wireshark and go to that route/web-page without a problem because these cookies will be verified in session storage and i'll have access no problem.

## ------------------------------------------ END -------------------------------------------------------









# -------------------------------------------------------------------------------------------------
# --------------------------------------- MongoDB -------------------------------------------------

- Data Schemas are very close to JSON syntax, this is why it is used along with javascript applications


# --------------------- MongoDB - Atlas ---------------------

- Is a **cloud** database

## Reasons to use a cloud database rather then **locally** stored Mongo Database????

- Faster to setup: Don't have to go through the steps to setup locally
- Works across ALL operating systems
- EASIER TO DEPLOY: Local setups can't be installed on deployment platforms **easily**, would have to use 'Digital Ocean' type service to install a local instance of the DB on the deployment platform