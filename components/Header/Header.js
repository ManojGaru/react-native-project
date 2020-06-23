import React,{Component} from "react"

import {View, StatusBar,Text,StyleSheet,TouchableOpacity,Image,TextInput,Dimensions} from "react-native"

import {withNavigation} from "react-navigation";
import Icon from 'react-native-vector-icons/dist/FontAwesome';



  class Header extends Component {
    render() {
    return (
    
    <View style={styles.main}>
        <TouchableOpacity>
            <Image style={styles.image} source={require('../../assets/images/logo.jpg')}></Image>
        </TouchableOpacity>
        <View style={styles.mainTitle}>
            <Text style={styles.text1}> Groce </Text>
            <Text style={styles.text2}> Genie </Text>
        </View>
        <Icon name="cart-plus" size={25} style={styles.icon} color="#0079fe"></Icon>
    </View>
   
    );
    }
}

const styles= StyleSheet.create({
    main:{
        flexDirection:'row',
       // flex:1,
        justifyContent:'space-between',
        margin:25
    },
    mainTitle:{
        flexDirection:'row',
       // flex:1,
        justifyContent:'flex-start',
        margin:15
    },
    image:{
        height:60,
        width:60
    },
    input:{
        borderWidth:1,
        borderRadius:10,
        marginBottom:5,
        marginTop:5,
        marginLeft:5,
        width:Dimensions.get('screen').width*0.75
    },
    text1:{
        fontSize:25,
        fontWeight:'bold',
        color:'#0079fe'
    },
    text2:{
        fontSize:25,
        fontWeight:'bold',
        
        color:'#ff5f01'
    },
    icon:{
        margin:15
    }
})

export default withNavigation(Header)

