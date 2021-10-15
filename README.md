# DevCamper API

> Backend API for DevCamper application, which is a bootcamp directory website

> Made by following a highly rated Node.js course from [udemy](https://www.udemy.com/course/nodejs-api-masterclass/)

## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Demo

The API is live at [heroku](https://adnan-api-demo.herokuapp.com)

Extensive documentation with examples [here](https://documenter.getpostman.com/view/15226010/UV5UjJt4)

- Version: 1.0.0
- License: MIT
- Author: Brad Traversy
