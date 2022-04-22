# Rank-A-Hack(athon)
A small project designed to cover a full-stack webapp implementation.
The stack is based around React and Redux for the frontend, and Express and mongoose for backend and database handling.
Test data is generated via [rank-a-hack-datagen](https://github.com/francodml/rank-a-hack-datagen) using faker and sent as POST requests to the API endpoints on the backend.

## Running this project
1. Clone the repository locally
    
    `git clone https://github.com/francodml/rank-a-hack.git`
    
2. Head into the `rank-a-hack/server` directory
    
    `cd rank-a-hack/server`

3. Run `npm run first-run` to execute the setup script.

    The setup script will guide you through setting up your connection string to MongoDB, install deps on client and server, and perform an initial client build.

4. Run `npm run start` to begin serving the built React app and the API.

## Env variables
This project uses a few environment variables to provide database connection details, as well as the desired listen port. For convenience's sake, I've used `dotenv` to load these from a file, so you can do that too.

### Valid env variables

* `PORT`: Defines the listen port. By default, it's 3001. Both the React client and the backend server will run on here.
* `DB_USER` & `DB_PASS`: MongoDB database user username and password.
* `DB_NAME`: Database name. This is the database & collection that Mongoose will use to store the data.
* `DB_URL`: Remote database URL. This is where the MongoDB Atlas Cluster URL goes.
* `DB_CONNECTION`: In case you don't want to parametrise the entire thing, you can just slap the connection URL right into here.

## Data generation
Data generation is provided via `francodml/rank-a-hack-datagen`, provided as a submodule in this repository. If found, the first start will set up a `cron` job to run every five minutes and generate random hackathons, entries, and users.