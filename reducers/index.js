
 import {ADD_DECK, ADD_CARD, SET_DECKS} from '../actions'
 
 export default function entries (state = {}, action) {
  switch (action.type) {
     case ADD_DECK :
       return {
         ...state,
         [action.deck.title]: {title: action.deck.title, questions: []},
       }
     case ADD_CARD:
       return {
         ...state,
         [action.card.title]: {
         	title: action.card.title,
         	questions: state[action.card.title].questions.concat([{question: action.card.question, answer: action.card.answer}])
         }
       }
     case SET_DECKS:
       return {
         ...action.decks
       }
     default :
       return state
   }
 }