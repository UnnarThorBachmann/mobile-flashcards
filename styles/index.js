import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
  btnAdd: {
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
  btnQuiz: {
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
   subtitle:  {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
  subtitle2:  {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },
  btnText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
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
  
  textInputLabel: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'left',
  },
  btnSubmit: {
     backgroundColor: 'black',
     padding: 10,
     borderWidth: 1,
     color: 'white',
     fontSize: 22,
   },
  
});
