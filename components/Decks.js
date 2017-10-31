import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Deck from './Deck.js';
import {getDecks} from '../utils/api.js';
import { AsyncStorage } from 'react-native'
import {connect} from 'react-redux';
import {setDecks} from '../actions';

class Decks extends Component {
   

    componentDidMount() {
        //AsyncStorage.clear();
        getDecks((data)=> {
          let decks = JSON.parse(data);
          if (decks === null)
            decks = {};
          
          this.props.dispatch(setDecks(decks));
        });

    }

  render() {
    const db = this.props.decks;
    return (
      <View style={[styles.container]}>
      
      {
        Object.keys(db).map((key) => 
        <TouchableOpacity style={styles.deck} key={key} onPress={() => this.props.navigation.navigate('Deck',{key: key})}>
          <Text style={[styles.header]}>{db[key].title}</Text>
          <Text style={[styles.subtitle]}>{db[key].questions.length} cards</Text>
        </TouchableOpacity>
      )
      }
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
	justifyContent: 'flex-start',
    backgroundColor: '#fff',
    alignItems: 'stretch',  
  },
  header: {
  	fontWeight: 'bold',
  	fontSize: 40,
  	textAlign: 'center',
  },
  subtitle:  {
  	fontSize: 20,
  	color: 'gray',
  	textAlign: 'center',
  },
  deck: {
    borderWidth: 1,
    borderColor: '#d6d7da',
  }
});
const mapStateToProps = (state)=> ({
    decks: state

});
export default connect(mapStateToProps)(Decks)