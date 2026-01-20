# Sprint 3 – Jokes App

## Overview

This project is part of **Sprint 3 of the Frontend Bootcamp at IT Academy**.

The objective is to build the base of a web application that consumes data from external APIs using **TypeScript** and **modern JavaScript (ES6+)**, focusing especially on asynchronous logic and API consumption.

The application displays jokes to users before starting their workday, as part of an experiment measuring the impact of humor on productivity.

This sprint focuses on logic and data handling rather than visual complexity.

---

## Motivation

In previous sprints, all data was hardcoded into the application.  
In this project, data is fetched dynamically from external APIs, which reflects real-world frontend development scenarios.

This sprint is designed to practice:

- Consuming REST APIs
- Handling asynchronous operations
- Working with TypeScript
- Writing clean, maintainable frontend logic

These skills are essential before moving on to frameworks and larger-scale applications.

---

## Features

The application allows users to:

- Fetch and display jokes from a public API
- Load a new joke on demand
- Track user interaction and joke ratings
- Store joke reports with score and timestamp
- Optionally display additional contextual data (weather)
- Alternate jokes from different APIs

All logic is implemented using ES6 array methods and asynchronous patterns.

---

## Project Structure

├── src/
│ ├── scripts/ # Application logic
│ ├── styles/ # Stylesheets
│ └── index.ts # Entry point
├── public/
│ └── index.html
├── README.md
├── package.json
└── tsconfig.json

---

## Tech Stack

- TypeScript
- JavaScript (ES6+)
- REST APIs
- Fetch API
- Promises and async / await
- HTML & CSS

---

## API Usage

This project consumes data from free public APIs that do not require authentication.

### Joke API

- Endpoint: Random dad joke
- Method: GET
- Headers:
    Accept: application/json

The `Accept` header is required to receive the response in JSON format.

---

## How to Run the Project

1. Clone the repository
2. Install dependencies
 ```bash
 npm install
 ```
3. Run the project (depending on setup)
4. Open the application in the browser

## Exercises Breakdown

### Level 1

Exercise 1

- Display a joke on initial load
- Fetch and display a new joke when clicking a button
- Show the joke in both console and UI

Exercise 2

- Create a basic layout for the application
- Position elements without focusing on final design

Exercise 3

- Implement a reportJokes array with objects containing:
    {
    joke: string,
    score: number,
    date: string
    }

- Score ranges from 1 to 3
- Date must be stored in ISO format
- Voting is optional and editable before loading a new joke
- Log the report array to the console on each update

### Level 2

Exercise 4

- Consume a weather API
- Display current weather information when the app loads

Exercise 5

- Integrate an additional jokes API
- Alternate jokes between different sources

### Level 3

Exercise 6

- Fully style the application
- Create a responsive layout
- Represent weather conditions using icons instead of text

Bonus

- Use SVG blobs for the joke container
- Randomly change container shapes to enhance user experience

## Development Notes

- All loops and logic must use ES6 array methods (map, filter, reduce, sort)
- Traditional for loops are not allowed
- The project must be written entirely in TypeScript
- API calls must be handled asynchronously

## Learning Outcomes

Through this sprint, the following skills are reinforced:

- API consumption and async programming
- TypeScript project setup
- Clean separation of logic
- Writing code based on functional requirements
- Preparing a project for professional environments

## License

This project is developed for educational purposes as part of the IT Academy Frontend Bootcamp.