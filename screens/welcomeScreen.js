import React from 'react'
import {Component} from 'react' 
import {Text,View,TouchableOpacity, TextInput, Alert} from 'react-native'
import db from '../config'
import firebase from 'firebase'

export default class welcomeScreen extends Component{
    constructor(){
        super()
        this.state={
            emailId:'',
            password:'',
        }
    }
    userlogin =(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId, password)
         .then(()=>{
             return Alert.alert('Login Successful')
         }
         )
         .catch(function(error){
             var errorCode = error.code
             var errorMessage = error.message
             return Alert.alert(errorMessage)
         }
         )
    }
    usersignup =(emailId,password)=>{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
         .then((response)=>{
             return Alert.alert('User Added Successfully')
         }
         )
         .catch(function(error){
             var errorCode = error.code
             var errorMessage = error.message
             return Alert.alert(errorMessage)
         }
         ) 
    }
    render(){
        return(
            <View>
              <View>
                 <Text>Book Santa</Text>
              </View>
              <View>
                  <TextInput
                  placeholder ="abc@booksanta.com"
                  placeholderTextColor = 'orange'
                  keyboardType = 'email-address'
                  onChangeText = {(text)=>{
                    this.setState({
                        emailId:text
                    })
                  }} 
                  >

                  </TextInput>
                  <TextInput
                  placeholder ="password"
                  placeholderTextColor = 'orange'
                  secureTextEntry = {true}
                  onChangeText = {(text)=>{
                    this.setState({
                        password:text
                    })
                  }} 
                  ></TextInput>
                  <TouchableOpacity 
                  onPress = {()=>{this.userlogin(this.state.emailId,this.state.password)}}>
                   <Text>Login</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress = {()=>{this.usersignup(this.state.emailId,this.state.password)}}>
                      <Text>Sign Up</Text>
                  </TouchableOpacity>
              </View>
            </View>
        )
    }
  
}