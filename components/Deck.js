import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Quiz from './Quiz.js';
import AddCard from './AddCard.js';
import {getDeck} from '../utils/api.js';
import {connect} from 'react-redux';

class Deck extends Component {
  
  constuctor(props) {
      this.state = {}
    }
  
  /*
  componentDidMount() {
    getDeck((data)=> {
        let decks = JSON.parse(data);
        let deck = decks[this.props.navigation.state.params.key];
        if (deck === null)
          deck = {};
    this.setState(deck)});
  }*/
  
	render() {
    const deck = this.props.decks[this.props.navigation.state.params.key];
    const {title,questions} = deck;
    //const {questions,title} = (this.state) ? this.state:{title: '',questions:[]};
    //alert(JSON.stringify(this.props));
		return (
      <View style={styles.container}>
       <Text style={[styles.header]}>{title}</Text>
        <Text style={[styles.subtitle]}>{questions.length} cards</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddCard',{title: title})}>
          <Text style={[styles.androidBtnAdd]}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Quiz',{questions: questions})}>
          <Text style={[styles.androidBtnQuiz]}>Start Quiz</Text>
        </TouchableOpacity>
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
    fontSize: 50,
    textAlign: 'center',
  },
  subtitle:  {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },
  androidBtnAdd: {
     marginTop: 10,
     marginBottom: 10,
     marginLeft: 30,
     marginRight: 30,
     backgroundColor: 'white',
     padding: 10,
     borderWidth: 1,
     color: 'black',
     fontSize: 22,
   },
  androidBtnQuiz: {
     marginTop: 10,
     marginBottom: 10,
     marginLeft: 30,
     marginRight: 30,
     backgroundColor: 'black',
     padding: 10,
     borderWidth: 1,
     color: 'white',
     fontSize: 22,
   },
});

const mapStateToProps = (state)=> ({
    decks: state

});

export default connect(mapStateToProps)(Deck)