
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'


const STORAGE_KEY = '1aff148nvm3493ma6';
const NOTIFICATION_KEY = '14jafdmmanc4k';
const db = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

 export function getDeck(loadDeck) {
 	return AsyncStorage.getItem(STORAGE_KEY).then(loadDeck).catch(function(err){console.log(err)});
 }
 export const getDecks =(loadDecks) => {
		return AsyncStorage.getItem(STORAGE_KEY).then(loadDecks)
		.then((data)=>{AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))}).catch(function(err){alert(err)});
 }

 // Under influence from class.
 export function addCardToDeck({key,question,answer}) {
 	return AsyncStorage.getItem(STORAGE_KEY)
     .then((results) => {
       const data = JSON.parse(results)
       
       data[key].questions.push({question: question, answer: answer})
       AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
     }).catch(function(err){console.log(err)});
 }
 
 export function saveDeckTitle({key,deck}) {

 	AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
 		[key]: deck
 	}))
 }

// Functions from class.

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'From mobile flashcards.',
    body: "Take one quiz each day.",
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification (dateObject,repeatStatus) {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        
              Notifications.cancelAllScheduledNotificationsAsync();

            
              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: dateObject,
                  repeat: repeatStatus
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
        
      }
    })
}