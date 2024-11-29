This is a backend project made with Node Js , MongoDB and jsonwebtoken on Authentication , Authorization and Role Based Access Controll . The main goal of this project is to authenticate users and control their access for different pages(Admin , Moderator and User).
The main program starts at index.js file . There are multiple folder defining the MVC structure .
The command to start the project is - "node index.js"
Whenever a new user comes , he/she has to sign up first whith their unique email and usernames . To increase security , jsonwebtoken and bcrypt is used to hash and store the password .
After that a token is generated with an expiry time of 24 hours . If the same user again comes , he/she has to sign in . No need to sign up .
After signin/signup , if a user wants to access admin/moderator/user page , he/she will be granted the access based on the role . The role by dafualt is user , but it can be altered from the database .
The admin can access all the pages , moderator can access only moderator and user page and User can access only user page . To implement these facilities , appropriate middlewares are used .
** To test the project , tester has to use api testing softwares (eg. Postman , Thunderclient) .
** While signing up (/api/auth/signup) , username , email id and password has to be passed as request body.
** While signing in (/api/auth/signin) , only email id and password has to be passed as request body.
** After that , the generated token shown as a response of authentications has to be copied and passed as a custom header called "auth-token" , which will verify the user and their roles .
** Depending upon the token , the user data will be fetched and roles will be matched and role based access control will be performed . The apis of different pages are - /api/users/user , /api/users/moderator , /api/users/admin . 
