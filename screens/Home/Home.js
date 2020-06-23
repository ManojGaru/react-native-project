import React,{Component} from "react"

import {View, StatusBar,Text, TextInput,StyleSheet,Dimensions,Image} from "react-native"

import {withNavigation, ScrollView} from "react-navigation"
import Header from "../../components/Header/Header";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Icon } from "native-base";
import Footer from "../../components/Footer/Footer";


const array=[
    {
        key:1,
        name:'Shirt',
        price:'0.00',
        ggprice:'0.00',
        qty:'54',
        total:'12.00'
    },
    {
        key:2,
        name:'T Shirt',
        price:'0.00',
        ggprice:'0.00',
        qty:'54',
        total:'12.00'
    },
    {
        key:3,
        name:'Trouser',
        price:'0.00',
        ggprice:'0.00',
        qty:'54',
        total:'12.00'
    },
    {
        key:4,
        name:'Hooders',
        price:'0.00',
        ggprice:'0.00',
        qty:'54',
        total:'12.00'
    },
    {
        key:5,
        name:'Saree',
        price:'0.00',
        ggprice:'0.00',
        qty:'54',
        total:'12.00'
    },
    {
        key:6,
        name:'Saree',
        price:'0.00',
        ggprice:'0.00',
        qty:'54',
        total:'12.00'
    },
    {
        key:7,
        name:'Saree',
        price:'0.00',
        ggprice:'0.00',
        qty:'54',
        total:'12.00'
    },
    {
        key:8,
        name:'Saree',
        price:'0.00',
        ggprice:'0.00',
        qty:'54',
        total:'12.00'
    }
]

  class Home extends Component {

    constructor(props){
        super(props)

        this.state={
            searchedKeyWord:'',
            dataArray:[],
            filterDataArray:[]
        }
    }

    componentDidMount = () => {
        fetch('http://innovious-websolutions.com/ecommerce-api/api.php', {
           method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
           console.log(responseJson);
           this.setState({
            dataArray: responseJson
           })
        })
        .catch((error) => {
           console.error(error);
        });
     }
     search=()=>{
        fetch('http://innovious-websolutions.com/ecommerce-api/search.php?search_param="'+this.state.searchedKeyWord.trim()+'"', {
            method: 'GET'
         })
         .then((response) => response.json())
         .then((responseJson) => {
            console.log(responseJson);
            this.setState({
                dataArray: responseJson,
                filterDataArray : responseJson
            })
         })
         .catch((error) => {
            console.error(error);
         });
        
     }
    render() {
    return (
    <>
    <StatusBar barStyle="dark-content" />
    <Header></Header>
    <View style={styles.search}>
        <View>
       
    <TextInput 
    style={styles.input} 
    placeholder="Enter Keyword to search"  
    onChangeText={(text)=>{
        this.setState({
            searchedKeyWord:text
        })
        // if(this.state.searchedKeyWord === ""){
        //     this.setState({
        //         dataArray:this.state.filterDataArray
        //     })
        // }

    }}
   
    
    > </TextInput>
  
    </View>
    <View>
    <Icon style={styles.icon} name="search" size={20} onPress={()=>{
        this.search()
    }}></Icon>
    </View>
    </View>
    
    
    <ScrollView>
        {this.state.dataArray.map((item,key)=> <ProductItem item={item}></ProductItem>)}

    </ScrollView>
        <View>
        <Footer></Footer>
        </View>
    
    </>
    );
    }
}

const styles = StyleSheet.create({
    input:{
        alignSelf:'center',
        borderWidth:1,
        borderRadius:5,
        height:40,
       // marginTop:-10,
        width:Dimensions.get('screen').width*0.77
    },
    search:{
        flexDirection:'row',
       // flex:1,
        justifyContent:'flex-start',
        alignSelf:'center'
    },
    icon:{
        // borderWidth:1,
        paddingLeft:10,
        paddingRight:10,
         padding:5,
         marginLeft:5,
         borderRadius:5,
         alignSelf:'center',
         backgroundColor:'#0079fe',
         color:'#FFF'
    }
})

export default withNavigation(Home)

