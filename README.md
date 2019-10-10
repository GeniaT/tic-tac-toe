This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Before seeing the app on your screen, please clone this repo localy by using `git clone https://github.com/GeniaT/2019_DEV_203_tic-tac-toe.git`
Once done, move to the cloned repo by `cd 2019_DEV_203_tic-tac-toe` and finally run `npm install`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### A few dev decisions explained
- When rendering the 9 Tiles in Board component, it's better to not use index as a key but a UUID but since a tile is never added or removed, we don't risk to have the key messed up, uuid seemed overkill.
- The state init should usually be done in a constructor but since I don't use any props in Board component, I decided the declare it in a shorter way.
- constants.js file: On a bigger project I wouldn't have set this constant in a separate file but since here the scope was small, I did so to reduce the Board code a bit.
- I could have used Jest for rendering tests as well but find Enzyme syntax cleaner for that.
