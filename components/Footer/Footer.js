import React,{Component} from "react"

import {View,Text, TextInput,StyleSheet,Dimensions} from "react-native"

import {withNavigation} from "react-navigation";
import { Card,Content, CardItem,Thumbnail, Left, Body, Right, Tabs, Tab, Footer, FooterTab, Button } from "native-base";


  class CustomFooter extends Component {
      constructor(props){
          super(props)
      }
    render() {
        console.log(this.props);
        
    return (
    <>
   <Footer style={styles.footermain} >
          <FooterTab style={styles.footer}>
            <Button>
              <Text>Checkout</Text>
            </Button>
            <Button>
              <Text>Total</Text>
            </Button>
            
          </FooterTab>
        </Footer>
    </>
    );
    }
}

const styles = StyleSheet.create({
    footermain:{
        backgroundColor:'#FFF',
        borderWidth:1,
        
    },
   footer:{
       backgroundColor:'#FFF',
   }
})

export default withNavigation(CustomFooter)

