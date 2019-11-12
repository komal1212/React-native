import React from 'react';
import { View, ScrollView,StyleSheet, Text,KeyboardAvoidingView, Alert,TouchableHighlight } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'Userdb.db', createFromLocation : 1});
 
export default class LoginUser extends React.Component {
  static navigationOptions ={
    header:null,
}
  constructor(props) {
    super(props);
    this.state = {
      input_user_name: '',
      input_user_password:'',
       userData:'',
    };
   global.MyVar='';
  }
 
Login_user = () => {
    var that = this;
  
    const {  input_user_name} = this.state;
    const {  input_user_password } = this.state;
   // console.log(this.state. input_user_name);
    
    if (input_user_name) {
if(input_user_password){
            debugger
          db.transaction(function(tx) {
            debugger
            tx.executeSql(
                'SELECT * FROM  tbl_user where user_name=? and user_password=?',
                [input_user_name,input_user_password],
            
              (tx, results) => {
                var len = results.rows.length;
        
                console.log('Results', results);
              debugger
                if (len>0) {
                         
                
                  Alert.alert(
                    'Success',
                    'You successfully login',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('View'),
                          
                      },
                    ],
                    { cancelable: false }
                  );
                  
                } else {
                  alert('Username  or Password is Wrong');
                }
              }
            );
          });
        
      }else{
          alert('please fill password');
        }
      } else {
        alert('Please fill Username');
      }
};
  render() {
    return (
      <View >
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex:1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Enter Name"
              onChangeText={ input_user_name => this.setState({  input_user_name })}
              style={{ padding:10 }}
            /> 
            <Mytextinput
            placeholder="Enter Password"
            onChangeText={ input_user_password => this.setState({  input_user_password })}
            style={{ padding:10 }}
          />
            <Mybutton
              title="Login"
              customClick={this.Login_user.bind(this)}
            />
           

       
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}
