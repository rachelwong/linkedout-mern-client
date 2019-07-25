## LinkedOut :sparkles: <!-- omit in toc -->

### Table of Contents
- [Table of Contents](#table-of-contents)
    - [LinkedOut can be found here](#linkedout-can-be-found-here)
    - [Server can be found here](#server-can-be-found-here)
    - [Client repo here](#client-repo-here)
    - [For advanced server configuration see individual file comments](#for-advanced-server-configuration-see-individual-file-comments)
- [Functions & Features :clipboard:](#functions--features-clipboard)
  - [Original stretch goals :hatching_chick:](#original-stretch-goals-hatchingchick)
- [Tech Stack :computer:](#tech-stack-computer)
- [Design Process](#design-process)
  - [Style Guide](#style-guide)
  - [Workflow of Users Journey](#workflow-of-users-journey)
  - [Wireframes](#wireframes)
  - [ERD](#erd)
  - [DFD](#dfd)
  - [Object Orientated Design component](#object-orientated-design-component)
- [Project Management and Planning](#project-management-and-planning)
  - [Project Plan and Timeline](#project-plan-and-timeline)
  - [Client Diary and Communication](#client-diary-and-communication)
  - [Project Charter](#project-charter)
  - [Planning](#planning)
  - [Sprint 1 (2 days)](#sprint-1-2-days)
  - [Sprint 2](#sprint-2)
  - [Sprint 3](#sprint-3)
  - [Sprint 4](#sprint-4)
  - [Sprint 5](#sprint-5)
  - [Project requirement Changes](#project-requirement-changes)
  - [Source control process](#source-control-process)
  - [Product Handover](#product-handover)
    - [What are the most important aspects of quality software?](#what-are-the-most-important-aspects-of-quality-software)
    - [Several key benefits of software built with Continuous Delivery/Continuous Deployment in mind:](#several-key-benefits-of-software-built-with-continuous-deliverycontinuous-deployment-in-mind)
  - [What libraries are being used in the app and why?](#what-libraries-are-being-used-in-the-app-and-why)
    - [Front End Dependencies](#front-end-dependencies)
    - [Back end dependencies](#back-end-dependencies)
  - [A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?](#a-team-is-about-to-engage-in-a-project-developing-a-website-for-a-small-business-what-knowledge-and-skills-would-they-need-in-order-to-develop-the-project)

##### LinkedOut can be found [here](https://linkedout.netlify.com/) 
##### Server can be found [here](https://github.com/jackdwalker/mern-assignment-server)
##### Client repo [here](https://github.com/jackdwalker/mern-assignment-client)

### Config & Installation <!-- omit in toc -->

* To set up a development environment on your local computer
* Git clone the backend
* Git clone the frontend
* In terminal, run npm install on both
* Install nodemon to run the server (npm install -g nodemon) 
* Cd into the backend folder, run terminal command ‘nodemon’
* Run terminal command ‘mongod’ to initialise the mongoDB (if this is not already running)
* Create a new terminal window to cd into the frontend folder, run terminal command ‘npm start’
* The application will initialise on your default browser for ‘localhost:3000’ 
  
##### For advanced server configuration see individual file comments 


###Problem Definition & Purpose :bulb:

Coder Academy has been teaching students full-stack web development in Australia for approximately three years, and the Brisbane campus is its latest expansion. In this period, the organisation has built up a reputation within the local tech scene for graduating job-ready junior developers.

Operating within the same further education market, many tertiary education providers often hold graduate showcases and exhibitions to display what students have achieved in the course of their studies. The Academy at present does not have any external-facing resource that formally showcases its graduating cohort. Graduates instead rely on their own portfolio work, class assessments and reaching out to companies in an ad hoc fashion via meetups, social media and internship interviews.

Our MERN assignment project therefore aims to deliver a minimal viable product (MVP) that prototypes a professional platform for students to present their best work to prospective employers with the view of securing internship opportunities. 

The portal can also incidentally raise the public profile of Coder Academy within the tech industry as a trainer of quality junior developers.




### Functions & Features :clipboard:

* Displays a list of profiles to Guests (non-account holders) and Users   (authorised account holders)
* Guests and users can search for an account by name, tech stack and bio
* Users with an account can create an account 
* Users can edit their own account. (They cannot do this for any other    profiles)
* Users can delete their own account. (They cannot do that for any        other profiles)
* Email and password authentication for account holders
* Session management for logged in users (users stay logged in for a      reasonable period of time after successful authentication)
* Basic data validation in the sign up and edit profile forms
 
#### Original stretch goals :hatching_chick:
* Allow employers to create a “employer” type of account, which has similar profile fields (bio, website, twitter, tech stack, hiring?)
* Employer account-holders will have the additional functionality of      being able to engage in direct messaging with student account holders
* Only users with an email address with the domain of coderacademy.edu.au can sign up for an account
 

### Tech Stack :computer:
* HTML/CSS3 for visual styling the user interface
* Heroku for hosting the server application
* Netlify for hosting the client-side application
* NodeJS as Javascript runtime environment 
* ExpressJS open source framework for creating the server application     on NodeJS
* ReactJS framework for creating the client side application that handles page routing, page rendering, searching 
* MongoDB and MongoAtlas for the student detail database hosted on the    cloud


### Design Process 

#### Style Guide
The font families, font weights, colour palette to be used as standard in the application can be viewed [here](https://docs.google.com/document/d/1iM8JI7sCzEalgNGBUJXbwQizQ2EEFjuER4mN0veOTWA/edit)

####User Stories 
*Coder Academy current student*

Tom is currently studying the Gen Tech stream in Sydney and has been attending hackathons. He is active on the meetup scene and attends classes regularly to keep up with the work. He will be graduating in six months (February 2020). He already has a few linkedin contacts from attending meetups. 

*Coder Academy past student*

Jane graduated from the Fast Track stream in February 2019 and is looking for work either in Melbourne or Sydney. She does have a github account and is working on her own web portfolio. She wants to network with other junior developers to get her name out there.

*Start-up founder*

A start up found based in River City Labs is interested in getting some interns to participate as part of the co-working space’s initiative. He is not sure where to start looking but has heard of the TechBytes event that are regularly held in the same space.  

*Recruiter for software development company in Melbourne*

A recruiter who regularly attends Women Who Code Melbourne meetup has met a few developer students from Coder Academy. She is looking to broaden her contact networks and she is interested to see what these students are capable of and their tech stack exposure. Unfortunately, she has forgotten their names unfortunately and want to get in touch with them again. 


#### Workflow of Users Journey
![Image of User Journey](/docs/Design-process/User_journey.png)

#### Wireframes
*Homescreen*
![Image of Homescreen](/docs/wireframes/Home&#32;-&#32;public.png)
*Profile View*
![Image of Profile View page](/docs/wireframes/Student&#32;Profile&#32;View&#32;(public_private).png)
*Browse Profiles*
![Image of Browse Profile View page](/docs/wireframes/Alternate&#32;Browse&#32;Student&#32;-&#32;(Admin_Private).png)
*Edit Profile View*
![Image of Edit/Signup View page](/docs/wireframes/Edit&#32;Profile&#32;-STudent.png)
*Future iteration to include a messenger feature*
![Image of messaging feature for future iteration](/docs/wireframes/Messaging&#32;-&#32;Stretch.png)


#### ERD
*Entity Relationship Diagram*
![Image of the entity relationship diagram](/docs/Design-process/ERD.png)


#### DFD
*Data Flow Diagram*
![Image of the Data Flow Diagram](/docs/Design-process/New&#32;User&#32;DFD&#32;LinkedOut.png)

#### Object Orientated Design component


### Project Management and Planning 

#### Project Plan and Timeline

Link to the Gantt Chart used to projected timeframes and planning can be found [here](/docs/GanttChart.xlsx)

#### Client Diary and Communication

Once our client was found we decided on conducted standups daily with the client through Slack. All communication with the client was through Slack.

*Day 1*
* Discuss with client what the brief would be and decide on MVP
*  Investigate what the challenges we might face
* Decide on how we would communicate and conduct standups with client
* Show proposed wireframes to client for approval
  
*Day 2*
* Create and share with client our Trello board to ensure user stories matched with the brief
* Conduct standup with Client 
* Propose the creation of a style guide
  
*Day 3*
* Send client the project charter for approval 
* Client asked about which sections of the project were being currently worked on and advised that he was happy with the current status
* Client sent back signed and approved charter

*Day 4*
* Advised client that a prelim server and front end has been deployed 
* CLient advised that he couldn't see any red flags going forward at this stage 
  

*Day 6*
* Client advised that Trello needed to be updated and that the team should discuss the work going forward to ensure the work was being allocated
* Client also advised the use of Gravatar over Cloundinary which we took up 
* Client advised that Jack work on Auth and Rachel and Raph begin working on React
  
*Day 7 - 13*
* Conducted client standup through Slack 
* Work was going ahead as scheduled 

*Day 14 - 16*
* Client advised he was very happy with the project 
* Client was sent questionnaire for feedback on the project 
* Client advised that he would like to meet to talk about the project as a post project debrief and congratulations on a job well done


#### Project Charter
Project Charter can be found [here](/docs/ProjectCharter_signed.pdf)


####Trello Screenshots
*image of trello board 1*
![image of trello](docs/trello/Screen&#32;Shot&#32;2019-07-16&#32;at&#32;1.57.10&#32;pm.png)

*image of trello board 2*
![image of trello](/docs/trello/Screen&#32;Shot&#32;2019-07-17&#32;at&#32;4.36.30&#32;pm.png)

*image of trello board 3*
![image of trello](/docs/trello/Screen&#32;Shot&#32;2019-07-22&#32;at&#32;12.03.03&#32;pm.png)

#### Planning
The project had less than 17 full days to deliver the project, starting from 9 July through to 25 July. The team worked roughly in 3-day sprints, with some room for flexibility. 

The team reported daily to the client, Mr Damian Maclennan via Slack with standups discussing progress made, the day’s backlog and any roadblocks. The team also reported to the class using a physical kanban board. 

#### Sprint 1 (2 days)
Identifying business need - What is a gap within the Coder Academy graduate placement program that a web application can help solve. 
Liaising with client, Mr Damian Maclennan
Wireframes and construct user stories → map out user journeys
Develop a data flow diagram as a map of API calls, routing - basically how the whole application functions together

#### Sprint 2 
Work on initial deployment to get basic routes working from server through to client-side and to deploy both on separate platforms. 
Develop project charter and achieve sign-off
Research on visual inspiration on the market and set up a style guide

#### Sprint 3
Configure user account authentication on express JS to allow user sign up, log-in functionalities
Construct and design front-end react components using Bulma css framework
Research and Build on documentation

#### Sprint 4
Construct and design front-end react components using Bulma css framework
Configure data interpolation to populate profiles with user data
Configured a global, case-insensitive search profile function
Enable edit profile and delete functionalities
Conduct testing across both front and back end functionalities
Research and Build on documentation

#### Sprint 5
Final Debugging and testing
Tighten up documentation including ERD, data flow diagrams, client diary 
Conduct product sign off with client 

#### Project requirement Changes
As the project progressed, some adjustments were made to make sure the project deliverables fit within the timeframe and resource limits:
The database entity relational diagram was modified from a single ‘User’ table to a one-to-one relationship a ‘User’ model and ‘Student’ model to allow for initial account creation.
Some fields including graduation date field, hireable boolean field were removed to streamline the profile design and reduce the number of input fields on the signup form. 
The style guide and wireframe designs underwent some visual revisions.
At the recommendation of our client Damian MacLennan, we opted to use an external service Gravatar, instead of setting up a dedicated static assets cloud storage (Cloudinary) for uploading avatar images.

#### Source control process

The server-side and client-side of the web application are stored in separate Github repositories to allow for separate deployment on Heroku (backend) and Netlify(frontend). The team practiced feature-branching workflow where team members build on a local feature branch based on their allocating trello card, commit and push changes to the remote repository before review by another team member prior to merging. 

Image courtesy of Atlassian (https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) 

Merged branches have been retained to evidence work allocation, code reviews to satisfy academic rubric.


The team did experience some issues with git source control
properly manage merge conflicts between commits
practicing appropriate pull request etiquette
just gaining general familiarity with git pulling/pushing commits in a 3-man team scenario.
Some work was written over or lost because merge conflicts were not properly resolved in the browser. This was resolved and improved by working with the tutor to identify better workflow procedures for Rachel who did not sufficient experience with git in team situations. 

#### Product Handover
While this project is largely a proof-of-concept, if Coder Academy does wish to proceed to a market-facing product, the team will need to do the following for CA to hand over the current prototype: 
Change the account credentials to the deployment services Netlify, Heroku and the MongoAtlas user account. Possibly set up fresh deployments on these services under an Coder Academy account  
There are no static assets generated specifically for this project (i.e. logo, images, fonts)
All copyrights and licenses to the codebase can be passed along to the product owner upon sign-off
Any changes to the codebase will require a new project arrangement

####Short answer questions
##### What are the most important aspects of quality software?

I referred to this wiki article as starting point 
https://en.wikipedia.org/wiki/List_of_system_quality_attributes

ISO/IEC 25000 series of international industry-recognised standards (also known as System and Software Quality Requirements and Evaluation) provides a series of non-functional requirements as guidance on what constitutes quality software. 

Image courtesy of http://iso25000.com/index.php/en/iso-25000-standards/iso-25010?source=post_page--------------------------- 

Some high-level quality attributes in brief include: 

__Performance__
This refers to how well a piece of software performs a certain number intended functions over a period of time under a spectrum of operating environment factors and testing heuristics. Some things to consider include average page load time, how long does it take for the server to respond, how many users can be logged into a system at the same time. 
 
__Interoperability__
Interoperability refers to the ability of an application or software to interact with other systems, such as external APIs, cloud services, deployment platforms. For example, in this assignment, the team discovered that the React client-end application is better suited for deployment on Netlify while the NodeJS application is better suited for Heroku. 

Development teams need to consider factors such as handling and interpolating different data formats returned from external APIs (i.e. gravatar), managing future changes and legacy compatibility of external services and products (i.e. hosting platforms). 

__Usability__
A quality application or software should not only have features that cater for target demographic, but also accommodate user devices (i.e. responsiveness, browsers), accessibility. This is where scoping for MVP functionalities, market research and an understanding of industry best practices will be essential.  

__Reliability/Availability__
This criteria refers to a system or a software’s ability to operate under predefined conditions, particularly factors that could lead to latency, system compromises, downtime, failed network connections. 

__Security__
A software -- particularly an application like this project that stores sensitive data such as security credentials, user details -- must be able to protect against accidental or intentional loss of data (i.e. DDOS, restricting unauthorised user access to certain resources, admin rights)

__Maintainability/Scalability (Reducing technical debt)__
Codebase that is built with maintainability and scalability in mind means that it would be easier and cost effective to change functionalities to accommodate customer or business needs over time. It would also be easier to onboard new developers to the project if the codebase follows best practices, recommended linting guidelines. 


Setting down the Minimum Viable Product functionalities and features is important to building quality software because 
Team can focus their efforts on meeting their users’ needs first 
The functions that they built will actually be useful, instead of wasting resources on a feature that no one would use. 
The functions can be improved upon and even expanded based on the feedback on the focussed set of functionalities built, rather than combating scope creep.  
 
__Test Driven Development__
Having short development cycles and regular testing - build, refactor and test -  means the coding satisfies specification, use cases -- essentially does what it’s supposed to do.
Ensures best coding practices are followed 
Reduce bugs, unexpected outputs.

Good build practices can lead to good quality code and happy users. Quality software meets audiences needs.

Readable code with good comments - scalability. Scaling involves more people to get involved in the codebase quickly. 

Continuous Delivery and Continuous Deployment - Deploy early, deploy often

In a prototyping project scenario within a compressed timeframes, it is important to ensure that functions are built and tested by order of priority/needs, deployed as early as possible for user feedback. This way, Even from the earliest stages of prototype development, the end-user is exposed to a product with baseline functionalities. 

##### Several key benefits of software built with Continuous Delivery/Continuous Deployment in mind:
Development Work is compartmentalised and subsequent releases are smaller increments and easier to understand for users
The user feedback loop is tighter which in turn allows for more tweaks to features 
Early deployment means problems and deficiencies can be identified early

#### What libraries are being used in the app and why?
##### Front End Dependencies
__React-router-dom__
Sets up routes, nested routes to allow user to traverse to different parts of the react application. It binds routes to the Document Object Model (browser tree). This allows us to set up routes within the react-side of the application.

__Bulma__
An open-source CSS component framework with fixed styles and appearances for the most commonly used components of a web application (i.e. forms, buttons, lists, cards). Using a pre-existing CSS framework shortened our development time and we were able to quickly prototype different visual looks to UI within the compressed two-week timeframe. 

__Bloomer__
A set of open-source set of React components that are extended from the Bulma framework that further shortened our development time by passing HTML/CSS of Bulma. This allows us to make only focussed changes in SCSS to tailor the framework to our styleguide. 

__Dotenv__
Enables the use of a “.env” file to store credentials such as mongoDB path and deployment variables. Ideally we should use .env to store the jwt secret as well for decoding authentication tokens and payloads. 
 
__Font-awesome__
We used the open-source font-awesome suite of icons for logo and user interface on the react-side of the application. 
 
__Node-sass__
Node-sass package works in tandem with the bloomer packages to allow writing custom styles over the existing bulma framework. This is essential for bloomer to work on our client-side of the application. 
 
__Axios__
This package handles requests between the client-side (React) and the NodeJS server.
 
__Moxios__
Mocking the axios tests without actually hitting the API endpoints. For example, this was used to test logging using test user data. 

__Enzyme__
We used this javascript testing framework to test whether the output for React components we used in our web application.
 
__Jest__
We wanted to use the snapshot testing capabilities in Jest native to Create React App  to ensure the user interface of our web application perform as expected. 

__React-Gravatar__
We took advantage of Gravatar as an external service to render an avatar image for the profile page by passing a hashed user email. Gravatar allows users to create a profile including an avatar-image that follows 

##### Back end dependencies
__Dotenv__
We used a “.env” file to store environment variables such as API keys, MongoDB connection strings, jwt secrets and deployment variables. The ‘.env’ file is hidden from public git using .gitignore and this package enables the deployed application to access the secured information inside .env.
 
__Body-parser__
A middleware package that exposes data in an incoming request stream as ‘req.body’ in forms such as the signup, edit profile and log in pages. This package is essential for this application as the server will send POST requests from the forms to the MongoDB database.
 
__Cookie-parser__
We used this middleware package to enables cookies to be persisted on client requests. Once a JWT token has been created a cookie is registered on the browser headers, which allows our authenticated user to remain logged in (open a session) on the application for a stipulated period of time.
 
__Cors__
Cors (Cross Origin Resource Sharing) is a middleware package that allows the browser and server to interact and request for resources outside of their origin (cross-origin requests). It specifies which origins can safely access assets on the server and through which routes.
 
During testing, a resource such as appending https://cors-anywhere.herokuapp.com/ to the front of the URL of any fetch or axios request is also possible.

__Js-md5__
We used JS-MD5 to encrypt user email to gravatar. MD5 is not a dependency for Gravatar. 

__ExpressJS__
Our project’s server is built upon the open-source web application framework that runs on the NodeJS runtime environment.
 
__Jsonwebtoken__
We used this npm package created by Auth0 to enables site authentication, authorisation by generating a ‘token’ that is encrypted with a JWT secret, includes a payload of user information (i.e id, username)
 
__Morgan__
Morgan is used for us for logging HTTP request details automatically from server, such as request logs. It helps us save time from manually create and standardize common logs. 
 
__Passport__
Authentication middleware for NodeJS runtime environment. It uses “strategy” to authenticate requests and serialises users to maintain persistent sessions on the application. It works in tandem with passport-jwt and passport-local-mongoose to manage registration, logging in and out.
 
__Passport-jwt__
Works in tandem with passport npm package to authenticate endpoints.
 
__Passport-local-mongoose__
A mongoose plugin that works between Passport and Mongoose packages

__Mongoose__
Mongoose provides modelling (schema, model) to work with data stored in MongoDB. Mongoose uses object data model that represents data as Javascript objects and then mapped to the underlying Mongo database.
 
__Super Test__



__Nodemon__

#### A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

To develop a functional product to fulfil business needs and end-user preferences, a team needs a balance of business development skills, project management and technical proficiency. 

__Technical Skills__
HTML/CSS3 to write responsive, semantic UI mark-up
Understanding of authentication and authorisation, particularly JWToken, headers in api calls, salting, secret hashing of passwords, how payloads can be decoded and user details withdrawn to authenticate for protected routes
Javascript basics particularly callback functions, prototype and native methods, asynchronous functions
Setting API endpoints on server 
Server-side data validation
Understand the structure of No-SQL nature of Mongo database and Mongoose methods
Structuring the client-side of a web application using props, data interpolation and components on ReactJS 
Test driven development using framework-specific packages such as Jest, Supertest, Enzyme, Jasmine, 
Clear grasp of pull request etiquette, commit history practices using git source control 

__Business Development Skills__
Market research and user needs discovery
Understanding prevailing trends on what the tech industry looks for in junior graduates, the profile of Coder Academy student cohorts, and the overall business direction for Coder Academy helped the team flesh out the MVP functionalities - what information should the student profile contain, style guide and visual direction, to name a few.

__Client liaison to ensure everyone has shared understanding of delivery on expectations__
The team kept the client regularly updated on project progress, difficulties and roadblocks with daily standups. The client was also able to provide workaround solutions to roadblocks, for example Damian suggested the Gravatar service when the team experienced persistent issues with setting up a Cloudinary connection with the NodeJS server.

__Project management (both technical and client) Skills__
Ability to identify resource-appropriate MVP features
Recognise and constrain scope creep of MVP features as development and discussions with client progress 
Documenting “nice-to-have” features, identify extensible features (unresolved issues) for future improvement
Equally distribute work amongst team members, and keeping track of time spent on a specific feature or problem.
Communication skills to mesh well with team member personalities, different communication styles and work practices. 













