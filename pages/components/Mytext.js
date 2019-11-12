/*Custom Text*/
import React from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
const Mytext = props => {
  return <Text style={styles.text}>{props.text}</Text>;
};
const styles = StyleSheet.create({
  text: {
    color: '#1E88E5',
    fontSize: 18,
    marginTop: 16,
    marginLeft: 165,
   
    marginRight: 35,
  },
});
export default Mytext;