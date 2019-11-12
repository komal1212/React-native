import React from 'react';
import { StatusBar , View , Text , Image,ActivityIndicator } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';


export default class SplashScreen extends React.Component {
    static navigationOptions ={
        header:null,
    }
    componentDidMount(){
        setTimeout(
            ()=>{
                this.props.navigation.navigate('HomeScreen')

            },
            4*1000
        );
    }
    render() {
        return (
            <View style={{ flex: 1 , justifyContent: 'center' , alignItems: 'center' , backgroundColor : '#34495e'}}>
                <StatusBar backgroundColor="#2c3e50" barStyle="light-content"/> 

               <Image style={{ flex: 1 }} source={require('../pages/assets/images/React_Native_Logo.png')}>

               </Image>
                {/*<ActivityIndicator color={'red'}/>  */}
            </View>
        )
    }
}