# Quiz App

## Introduction

The Quiz Game is a web application built using React and Zustand, designed to provide an engaging quiz experience with customizable difficulty levels and a scoring system.

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js v22.16.0 or more
- npm 
- React js


### Setup Steps

1. *Clone the repository:*

   
   git clone https://github.com/aleenaalbert/Quiz-Game.git
   cd quiz
    

2. *Install dependencies:*
   
   npm install
   
### Project Structure:
 
quiz/
├── node_modules/
├── public/
├── src/
│   ├── Components/
│   │   ├── Option.js
│   │   ├── Question.js
│   │   ├── QuestionBank.js
│   │   ├── Quiz.js
│   │   ├── Score.js
│   │   ├── Settings.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md


## Folder structure

This template follows a very simple project structure:

- src: This folder is the main container of all the code inside your application.
- Components: Contains all reusable components used throughout the application.
- Option.js: Handles the display and selection of quiz options.
- Question.js: Displays the current question.
- QuestionBank.js: Contains the set of questions used in the quiz.
- Quiz.js: Main quiz component that manages quiz logic.
- Score.js: Displays the final score.
- Settings.js: Allows users to adjust quiz settings such as difficulty level.
- App.css: Contains styles for the application.
- App.js: Main component that starts your whole app.
- index.css: Contains global styles.
- index.js: Entry point of your application as per React standards.


*Scripts:*
   While specific commands are detailed in the package.json file, here are a few useful scripts and their purposes:

*start:*
 Starts the development server.

npm start

*test:*
 Runs the test suite.

npm test

*build:*
 Builds the app for production.

npm run build

## Contributing

1. Clone the repository:

      git clone https://github.com/aleenaalbert/Quiz-Game.git
cd quiz

2. npm install (to install the necessary modules required)

3. npm start (to run the app)
