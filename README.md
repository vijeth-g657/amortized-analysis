# Amortized Analysis Project

This project demonstrates the amortized analysis of stack operations and a binary counter, with visualizations and an interactive quiz that fetches random questions from a database.

## Features

1. **Amortized Cost Calculation**:
   - **Stack Operations**: Calculates the amortized cost of push and pop operations.
   - **Binary Counter**: Calculates the amortized cost of increment operations.

2. **Visualization**:
   - Visualizes the amortized cost analysis for both stack and binary counter operations.

3. **Quiz**:
   - Fetches random questions from a database.
   - Allows users to take a test and submit answers.

## Technologies Used

- **Frontend**: React.js, Chart.js
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB

## Installation

```bash
# Make sure you have your own url for mongodb cluster add it in the .env file to store data in your databases for Ex-
mongodb+srv://<Name>:<Password>@cluster0.4u4rtje.mongodb.net/

# Install dependencies for server in the root directory
npm install
# and run the server
npm start

# open the another terminal and go to the client directory and install the dependencies for client
cd .\client\
npm install
# after installation run the client
npm start


# Server runs on  http://localhost:3000
```
