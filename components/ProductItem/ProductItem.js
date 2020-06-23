import React,{Component} from "react"

import {View,Text, TextInput,StyleSheet,Dimensions} from "react-native"

import {withNavigation} from "react-navigation"
import { Card,Content, CardItem,Thumbnail, Left, Body, Right } from "native-base";


  class ProductItem extends Component {
      constructor(props){
          super(props)
      }
    render() {
        console.log(this.props.item);
        
    return (
    <>
    <Content >
   <Card style={styles.content}>
            <CardItem style={styles.carditem}>
            <View style={styles.item}>
            <Text style={styles.headtext}>Name</Text>
    <Text>{this.props.item.name}</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.headtext}>Price</Text>
    <Text>{this.props.item.price}</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.headtext}>GG Price</Text>
            <Text>{this.props.item.gg_price}</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.headtext}>Qty</Text>
            <Text>0</Text>
            </View>
            <View style={styles.item}>
            <Text style={styles.headtext}>Total</Text>
            <Text>0.00</Text>
            </View>
            </CardItem>
            </Card>
  
    </Content>
    </>
    );
    }
}

const styles = StyleSheet.create({
    content:{
        marginRight:18,
        marginLeft:18

    },
    carditem:{
        flexDirection:'row',
        flex:1,
        justifyContent:'space-evenly',
        
    },
    item:{
        flexDirection:'column',
        flex:1,
        justifyContent:'space-around',
        alignItems:'center'
    },
    headtext:{
        fontWeight:'bold'
    }
})

export default withNavigation(ProductItem)

