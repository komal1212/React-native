import React from 'react';
import { View ,StyleSheet,TouchableHighlight,Text } from 'react-native';
import LoginUser from '../pages/LoginUser';
import { openDatabase } from 'react-native-sqlite-storage';


var db = openDatabase({ name: 'Userdb.db', createFromLocation : 1});
 
export default class HomeScreen extends React.Component {
  static navigationOptions ={
    header:null,
}
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='tbl_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
           txn.executeSql('DROP TABLE IF EXISTS tbl_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS tbl_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20),user_password VARCHAR(20),user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }
 
  render() {
    return (
      <View style={{ backgroundColor: '#E3F2FD', flex: 1 }}>
        
        <LoginUser navigation={this.props.navigation}/>
       
        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.Text} >SIGN UP </Text>
        </TouchableHighlight>
        {/* <Mybutton
          title="View"
          customClick={() => this.props.navigation.navigate('View')}
        />  */}

      </View>
     
    );
  }
}
const styles = StyleSheet.create({
 
 
  buttonContainer: {
    height:60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,
    width:180,
    
    marginLeft:120, 
   
  },
  Text: {
    color: '#1565C0',
    fontSize:15,
  }
});
 