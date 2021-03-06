import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'Userdb.db', createFromLocation : 1});
 
export default class RegisterUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      user_password:'',
      user_contact: '',
      user_address: '',
    };
  }
 
  register_user = () => {
    var that = this;
    const { user_name } = this.state;
    const { user_password } = this.state;
    const { user_contact } = this.state;
    const { user_address } = this.state;
    //alert(user_name, user_contact, user_address);
    if (user_name) {
      if(user_password){
      if (user_contact) {
        if (user_address) {
            debugger
          db.transaction(function(tx) {
            tx.executeSql(
              'INSERT INTO tbl_user (user_name,user_password ,user_contact, user_address) VALUES (?,?,?,?)',
              [user_name,user_password, user_contact, user_address],
            
              (tx, results) => {
                console.log('Results', results.rowsAffected);
               debugger
                if (results.rowsAffected > 0) {
                  
                  Alert.alert(
                    'Success',
                    'You are Registered Successfully',
                    [
                      {
                        text: 'Ok',
                        onPress: () =>
                          that.props.navigation.navigate('HomeScreen'),
                      },
                    ],
                    { cancelable: false }
                  );
                } else {
                  alert('Registration Failed');
                }
              }
            );
          });
        } else {
          alert('Please fill Address');
        }
      } else {
        alert('Please fill Contact Number');
      }
    }else{
        alert('please fill password');
      }
    } else {
      alert('Please fill Name');
    }
  };

  render() {
    return (
      <View style={{ backgroundColor: '#E3F2FD', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Enter Name"
              onChangeText={user_name => this.setState({ user_name })}
              style={{ padding:10 }}
            />
              <Mytextinput
              placeholder="Enter Password"
              onChangeText={user_password => this.setState({ user_password })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Enter Contact No"
              onChangeText={user_contact => this.setState({ user_contact })}
              maxLength={10}
              keyboardType="numeric"
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Enter Address"
              onChangeText={user_address => this.setState({ user_address })}
              style={{ textAlignVertical: 'top',padding:10 }}
            />
            <Mybutton
              title="Register"
              customClick={this.register_user.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}