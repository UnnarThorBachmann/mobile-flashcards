import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,TextInput} from 'react-native';
import {addCardToDeck} from '../utils/api.js';
import { connect } from 'react-redux';
import {addCard} from '../actions';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {question: '',
                  answer: '',
                  title: this.props.navigation.state.params.title, 
    };

  }
  addCardToDeck() {
    addCardToDeck({key: this.state.title, question: this.state.question, answer: this.state.answer});
    this.props.dispatch(addCard({title: this.state.title, question: this.state.question, answer: this.state.answer}));
    this.props.navigation.goBack();
  }
	render() {
    const {title} = this.props.navigation.state.params;
		return (
      <View style={styles.container}>
        <Text style={styles.header}>{title}</Text>
        <View style={styles.textInputView}>
          <Text style={styles.textInputLabel}>Question:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
          />
        </View>
        <View style={styles.textInputView}>
          <Text style={styles.textInputLabel}>Answer:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
          />
        </View>
        <View style={styles.textInputView}>
        <TouchableOpacity onPress={() => this.addCardToDeck()}>
          <Text style={[styles.androidBtnSubmit]}>Submit</Text>
        </TouchableOpacity>
        </View>
        <Text>{this.state.submit}</Text>
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
  textInputView: {
    padding: 10
  },
  textInput: {
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
  textInputLabel: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
  },
  subtitle:  {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },

  androidBtnSubmit: {
     backgroundColor: 'black',
     padding: 10,
     borderWidth: 1,
     color: 'white',
     fontSize: 22,
   },
});

export default connect()(AddCard)