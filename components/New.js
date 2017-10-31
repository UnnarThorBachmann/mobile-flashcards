import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,TextInput} from 'react-native';
import {saveDeckTitle} from '../utils/api.js';
import {connect} from 'react-redux';
import {addDeck} from '../actions';

 class New extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};

  }
  saveDeckTitle() {
    saveDeckTitle({key: this.state.name, 
      deck: {title: this.state.name, questions: []} 
    });
    this.props.dispatch(addDeck({title: this.state.name}));
    this.props.navigation.navigate('Deck', {key: this.state.name});
    this.setState({name: ''});
  }
	render() {
    
		return (
      <View style={styles.container}>
        <Text style={styles.header}>New Deck</Text>
        <View style={styles.textInputView}>
          <Text style={styles.textInputLabel}>Name:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
        </View>
        
        <View style={styles.textInputView}>
        <TouchableOpacity onPress={()=> this.saveDeckTitle()}>
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

export default connect()(New)