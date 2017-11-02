import React, {Component} from 'react';
import {StyleSheet, ScrollView,View, Text, TouchableOpacity} from 'react-native';
import Deck from './Deck.js';
import {getDecks,db,STORAGE_KEY} from '../utils/api.js';
import { AsyncStorage } from 'react-native'
import {connect} from 'react-redux';
import {setDecks} from '../actions';
import styles from '../styles/';

class Decks extends Component {
   

    componentDidMount() {
        //AsyncStorage.clear();
        getDecks((data)=> {
          let decks = JSON.parse(data);
          if (decks === null) {
            decks = db
          }
          
          this.props.dispatch(setDecks(decks));
          return decks;
        });

    }

  render() {
    const db = this.props.decks;
    return (
      <View style={[styles.container]}>
      <ScrollView>
      
      {
        Object.keys(db).map((key) => 
        <TouchableOpacity style={styles.deck} key={key} onPress={() => this.props.navigation.navigate('Deck',{key: key})}>
          <Text style={[styles.header]}>{db[key].title}</Text>
          <Text style={[styles.subtitle2]}>{db[key].questions.length} cards</Text>
        </TouchableOpacity>
      )
      }
      </ScrollView>
      </View>
    )
  }

}


const mapStateToProps = (state)=> ({
    decks: state

});
export default connect(mapStateToProps)(Decks)