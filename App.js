import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button ,TextInput} from 'react-native';
import React,{useState} from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function App() {
  const [name,setName]=useState('shaun');
  const [age,setAge]=useState(30);

  return(
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <Text style={{alignItems:'center'}}>Enter Name:</Text>
        <TextInput style={styles.input} 
                    multiline={true} 
                    placeholder='type name'
                    placeholderTextColor={'red'} 
                    onChangeText={(val)=>setName(val)}
                    //autoCapitalize='characters'
                    //autoComplete='name-middle'
                    cursorColor={'pink'}     
                    autoFocus  ={true}             
                    blurOnSubmit
                    rows={3}
                    selectionColor={'green'}
                    
                    />
      </View>

      <View style={{flexDirection:'row'}}>
        <Text>Enter age:</Text>
        <TextInput style={styles.input} keyboardType='numeric' keyboardAppearance='default' placeholder='type age' onChangeText={(val)=>setAge(val)}/>
      </View>
      
      <Text>Your Name : {name} </Text>
      <Text>Your age  : {age}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    borderColor:'#000000',
    margin:10,
    padding:10,
    width:200,

  }
});
