# Resolve

- [Full Stack Project](#Full-Stack-Project)
  - [Overview](#Overview)
    - [Team Members](#Team-Members)
    - [Team Expectations](#Team-Expectations)
    - [Permissions](#Permissions)
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP Libraries](#MVP-Libraries)
    - [MVP Client (Front End)](#MVP-Client-Front-End)
      - [Wireframes](#Wireframes)
      - [Component Hierarchy](#Component-Hierarchy)
      - [Component Breakdown](#Component-Breakdown)
      - [Component Estimates](#Component-Estimates)
    - [MVP Server (Back End)](#MVP-Server-Back-End)
      - [ERD Model](#ERD-Model)
      - [Data Heirarchy](#Data-Heirarchy)
  - [Post-MVP](#Post-MVP)
  - [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


<br>

## Overview

_**Resolve** is an app that helps users track personal goals. Users can create a profile where they can add new goals, list their motivation for achieving said goal, and outline a plan for success. Users can view the goals of others who have created a Resolve profile. In addition to adding new goals, they can also delete and edit the goals associated with their own profile._

### Team Members

Created, designed, and developed by [Abir Tawfique](https://github.com/atawfique21) (Git Czar), [Revati Rajabhathor](https://github.com/revatir/), and [Hannah Reilly.](https://github.com/hannahreilly) for the General Assembly Software Engineering Immersive (November '19 Cohort) Unit 3 Project. 

### Team Expectations

Team values and expectations can be found on our project's [Google document](https://docs.google.com/document/d/1XQoBhwaGt2R_0uzK4zXX5aQ1t1idnjkVGZ2qIJdyLV4/edit?usp=sharing).

### Permissions

Digital assets stored locally and on [Imgur](https://imgur.com/).

<br>

## MVP

_**Resolve** is an app that helps users track personal goals. Users can create a profile where they can add new goals, list their motivation for achieving said goal, and outline a plan for success. Users can view the goals of others who have created a Resolve profile. In addition to adding new goals, they can also delete and edit the goals associated with their own profile._


<br>

### MVP Goals

- _Allow users to log-in/log-out._
- _Allow users to register for the website and create a new profile._
- _Allow users to add, delete, and edit the goals on their own profile._
-_Allow users to mark goals as complete._
-_Have completed goals change color._
- _Once logged in, allow users to click on other user profiles and view their goals (without power to add, edit, or delete)._

<br>

### MVP Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _The front-end will be programmed using React._ |
|   React Router Dom  | _React Router will be used to route users between profiles._ |
|     Express      | _The back-end will be programmed using Express._ |
|  Express Router  | _Express Router will be used to create API routes to hit with the frontend._ |

<br>

### MVP Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Desktop Landing](https://i.imgur.com/ORTvEld.jpg)

- Desktop Landing

![Desktop Login/Register](https://i.imgur.com/6fEHbRX.jpg)

- Desktop Login/Register

![Resource Index](https://i.imgur.com/kJyq9k1.jpg)

- Resource Index

![Resource Profile](https://i.imgur.com/UuHXfDd.jpg)

- Resource Profile

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

``` structure

src
|__ components/
      |__ Header.js
      |__ LandingPage.js
      |__ Login.js
      |__ Register.js
      |__ Goal.js
      |__ CreateGoal.js
      |__ UpdateGoal.js
      |__ Profile.js
|__ services/
      |__ apiHelper.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   y   | _Reusable component. Depending on if the user is logged in or not, the header will contain the logo, login/register buttons or logo and profile picture + logout._               |
|  Landing Page  | functional |   n   |   n   | _The landing page is a static body element that is plugged into App.JS to create a landing page.._       |
|   Login    |   class    |   y   |   y   | _Login form. We’ll save the username and password to state that way we can send it to the api call._      |
| Register | class |   y   |   y   | _Register form. Very similar to login form._                 |
|    CreateGoal    | class |   y   |   y   | _Form that allows user to add a new goal._ |
|    CreateGoal    | class |   y   |   y   | _Form that allows user to update a goal._ |
|    Goal    | class |   y   |   y   | _Reusable component. Will render the goal information through api calls. And depending on if user is logged in, we will show completed, edit, delete buttons._ |
|    Profile    | functional |   n   |   y   | _Reusable component. Will render profile for each user and will render their goals._ |

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Header    |    M     |     1 hrs      |     TBD     |    TBD    |
| Landing Page |    M    |     3 hrs      |     TBD     |     TBD     |
| Login    |    H     |     3 hrs      |    TBD     |    TBD    |
| Register    |    H     |     3 hrs      |     TBD     |    TBD    |
| CreateGoal    |    M     |     3 hrs      |     TBD     |    TBD    |
| UpdateGoal    |    M     |     5 hrs      |     TBD     |    TBD    |
| Goal    |    M     |     4 hrs      |     TBD     |    TBD   |
| Profile    |    M     |     5 hrs      |     TBD     |   TBD    |
| TOTAL               |     28 hrs     |    TBD      |     TBD     |     TBD     |

<br>

### MVP Server (Back End)


#### ERD Model


![ERD Model](https://i.imgur.com/Hbp63cx.png)

- ERD Model


#### Data Hierarchy

> Use this section to display the database, table, and attribute hierarchy.

``` structure

database_db
|__ users/
|__ goals/

```

<br>

***

## Post-MVP

-_Register Page: Add typewriter css to say “Get...cooking/running/healthy/git/etc/”_
- _Landing Page: Allow users to associate themselves with “groups” so they can first see the user profiles from their own group at the top of the page and the user profiles of other groups at bottom of page._
-_Landing Page: Make user profiles appear as a pop-up on click, as opposed to redirecting to a new page._
-_Landing Page: Add search-bar functionality to search other users_.
- _User Profile: Add “member since” date to user profile._
- _Goals Page: when an in-progress goal is completed, push goal to “Done” section. 
- _Goals Page: Incorporate “created date” of goal in each goal card._



<br>

***

## Project Delivery

> The Delivery section should be expanded and revised as you work on your project.

<br>

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

<br>

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

***
