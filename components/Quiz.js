import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/';
import {setLocalNotification,clearLocalNotification} from '../utils/api.js'

export default class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      flip: false,
      n: this.props.navigation.state.params.questions.length,
      score: 0
    };
  }

  componentDidUpdate() {
    //alert(`index=${this.state.index} n=${this.state.n} equal=${}`)

    if (this.state.index === this.state.n) {
      clearLocalNotification();
      setLocalNotification(Date.now() + 5*60*1000,'minute');
      
    }

  }

  render() {
    const disp_index = this.state.index + 1;
    const questions =this.props.navigation.state.params.questions;
    let {index,flip,n,score} = this.state;
    const finished = (n===index)? true:false;


    if (n === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>No cards in the deck!</Text>
           
         <TouchableOpacity style={styles.btnBack} onPress={()=> this.props.navigation.goBack()}>
          <Text style={styles.btnText}>Back to Deck</Text>
        </TouchableOpacity>
        </View>
      )

    }
    else if (finished) {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Finished! {score} of {n}</Text>
           <TouchableOpacity style={styles.btnBack} onPress={()=> this.setState({index: 0,
              flip: false,
              n: this.props.navigation.state.params.questions.length,
              score: 0
            })}>
          <Text style={styles.btnText}>Restart Quiz</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.btnBack} onPress={()=> this.props.navigation.goBack()}>
          <Text style={styles.btnText}>Back to Deck</Text>
        </TouchableOpacity>
        </View>
      )
    }
    else {
      return(
        <View style={styles.container}>

          <View><Text style={styles.header}>{disp_index}/{n}</Text></View>
          <View>
          {
            !flip  &&<Text style={styles.question}>{questions[index].question}</Text>

          }
          {
            flip && <Text style={styles.answer}>{questions[index].answer}</Text>

          }
          <TouchableOpacity onPress={() => this.setState({flip: !flip})}>
          {
            flip && <Text style={[styles.subtitle]}>Question</Text>
          }
          {
            !flip && <Text style={[styles.subtitle]}>Answer</Text>
          }
        </TouchableOpacity>
      </View>
      <View >
        <TouchableOpacity style={styles.btnCorrect} onPress={()=> this.setState({
          index: index + 1,
          score: score + 1,
          flip: false 
          })
        }>
          <Text style={styles.btnText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnIncorrect} onPress={()=> this.setState({
          index: index + 1,
          flip: false
        })
        }>
          <Text style={styles.btnText}>Inorrect</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }

}
}