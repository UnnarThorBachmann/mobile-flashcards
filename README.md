30th of October 2017

# Mobile Flashcards for Androids

This Android App is the work of Unnar Thor Bachmann.

This is a project in the Udacity's React Nanodegree program.

This project is a React-Native app implemented using AsyncStorage and Redux. It is a learning app. The user can add a deck to the app and cards to each deck. The user can quiz himself on the deck- marking each question correct or incorrect. The app keeps the total score.

## How this project is implemented.

This projected is implemented in React using JSX, React Native, React Redux and React Navigation (TabNavigation and StackNavigation). The development environment was YARN and Expo and React Native. Together AsyncStore and Redux were used to store the decks. The app was tested on Android Xperia using Expo.


Files added to the project:

### Inside reducers

* reducer.js - A single reducer for this project

### Inside actions 

* index.js - File with all the action reducers.

### Inside components.
* button.js - functional component to render a single link to the /new route.
* AddCard.js - A component for adding card to a deck.
* Deck.js - A component for rendering a deck.
* Decks.js - A component for rendering the main view of a stack of decks.
* New.js - A component rendering a form for adding a new deck.
* Quiz.js - A component for rendering the quiz from a single deck.

### utils
* helper.js - Handles the function calls to the AsyncStore as well as functions for the local notifications. The Notification calls were influenced heavily by class videos.

### styles
* index.js - Added all styles to a single file to seperate concerns.


## How to run on a computer

1. Make sure [YARN](https://yarnpkg.com/lang/en/docs/install/) is installed.
2. Get [Expo](https://play.google.com/store/apps/details?id=host.exp.exponent) from the Google Play.
2. Clone and download this repository and save in a directory.
3. To start the server and run: In the root directory write `yarn install` and `yarn start`
4. Follow the instruction on screen to start viewing the app.




