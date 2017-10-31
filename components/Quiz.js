import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {index: 0,
                  flip: false,
                  n: this.props.navigation.state.params.questions.length,
                  score: 0
    };


  }
  
  answer() {
    this.setState((state)=> {index: state.index + 1})
  }
	render() {
    const disp_index = this.state.index + 1;
    const questions =this.props.navigation.state.params.questions;
    let {index,flip,n,score} = this.state;
    const finished = (n===index)? true:false;
    if (finished) {
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
        <TouchableOpacity style={styles.btnCorrect} onPress={()=> this.setState({index: index + 1,
          score: score + 1,
          flip: false 
        })}
        >
          <Text style={styles.btnText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnIncorrect} onPress={()=> this.setState({index: index + 1,
          flip: false
        })}>
          <Text style={styles.btnText}>Inorrect</Text>
        </TouchableOpacity>
      </View>
      </View>
    )
  }

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
   marginLeft: 10,
   fontWeight: 'bold',
   fontSize: 30
  },
  question: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
  answer: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  subtitle:  {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
  btnText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  btnCorrect: {
     marginTop: 10,
     marginBottom: 10,
     marginLeft: 30,
     marginRight: 30,
     backgroundColor: 'green',
     padding: 10,
     borderWidth: 1,
   },
   btnIncorrect: {
     marginTop: 10,
     marginBottom: 10,
     marginLeft: 30,
     marginRight: 30,
     backgroundColor: 'red',
     padding: 10,
     borderWidth: 1,
   },
   btnBack: {
     marginTop: 10,
     marginBottom: 10,
     marginLeft: 30,
     marginRight: 30,
     backgroundColor: 'black',
     padding: 10,
     borderWidth: 1,
   },
  
});
