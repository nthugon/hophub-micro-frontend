# hophub-micro-frontend
Micro-frontend using single-spa to route between Angular and React apps on a single UI

## Running the app
Each top level repo is its own app that needs to be started.
Go though the list of repos starting each one in its own terminal tab:
- If it is an Angular app, use `npm i` and then `npm start`
- If it is a React app, use `yarn` and then `yarn start`
After starting the content apps, start `hophub-single-spa-root` by running `yarn` and then `yarn start`

Each of the app's start scripts specify a port, and these ports are mapped with the router inside of
`hophub-single-spa-root`. After starting `hophub-single-spa-root`, visit `localhost:9000` to see the
app running.

## Development process
The intial boilerplate was setup using the [create-single-spa](https://single-spa.js.org/docs/create-single-spa/) CLI.
All this skeleton setup is done in the first commit. The next commit contains the changes needed to connect the various
apps with the parent router. Following these two setup commits, are the fleshing out of the content.
