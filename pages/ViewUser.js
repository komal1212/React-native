 import React from 'react';
 import { Text, View, StyleSheet } from 'react-native';
 import Mytextinput from './components/Mytextinput';
// import Mybutton from './components/Mybutton';
// import { openDatabase } from 'react-native-sqlite-storage';
// var db = openDatabase({ name: 'Userdb.db', createFromLocation : 1});
 export default class ViewUser extends React.Component {
  static navigationOptions ={
     header:null,
 }
  constructor(props) {
     super(props);
     this.state = {
       
      userData:'',
    };
  }
//   searchUser = () => {
//     const { input_user_id } = this.state;
//     console.log(this.state.input_user_id);
//     db.transaction(tx => {
//       tx.executeSql(
//         'SELECT * FROM tbl_user where user_id = ?',
//         [input_user_id],
      
//         (tx, results) => {
//           debugger
//           var len = results.rows.length;
//         debugger
//           console.log('len', len);
//           if (len > 0) {
//             this.setState({
//               userData: results.rows.item(0),
//             });
//           } else {
//             alert('No user found');
//             this.setState({
//               userData: '',
//             });
//           }
//         }
//       );
//     });
//   };
 render() {
    return (
     

<View style={styles.MainContainer}>
        <Text style={styles.textStyle}/>
        <Text>Welcome
        {/* <Text>User Name: {this.state.userData.user_name}</Text> */}
        </Text>
     
</View>       
//  <Mytextinput
//           placeholder="Enter User Id"
//           onChangeText={input_user_id => this.setState({ input_user_id })}
//           style={{ padding:10 }}
//         />
//         <Mybutton
//           title="Search User"
//           customClick={this.searchUser.bind(this)}
//         />
//         <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
//           <Text>User Id: {this.state.userData.user_id}</Text>
        
//           <Text>User Contact: {this.state.userData.user_contact}</Text>
//           <Text>User Address: {this.state.userData.user_address}</Text>
//         </View>
 
  );
 }
 }
 const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
});