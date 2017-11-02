import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity,TextInput} from 'react-native';
import {saveDeckTitle} from '../utils/api.js';
import {connect} from 'react-redux';
import {addDeck} from '../actions';
import styles from '../styles/';
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
          <Text style={[styles.btnSubmit]}>Submit</Text>
        </TouchableOpacity>
        </View>
        <Text>{this.state.submit}</Text>
    </View>
		)
	}

}

export default connect()(New)