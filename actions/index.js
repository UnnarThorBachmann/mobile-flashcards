export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD';
export const SET_DECKS = 'GET_DECKS';

export function addDeck (deck) {
   return {
     type: ADD_DECK,
     deck,
   }
 }
 
 export function addCard (card) {
   return {
     type: ADD_CARD,
     card,
   }
 }

export function setDecks (decks) {
   return {
     type: SET_DECKS,
     decks,
   }
 }