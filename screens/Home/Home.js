import React,{Component} from "react"

import {View, StatusBar,Text, TextInput,StyleSheet,Dimensions,Image} from "react-native"

import {withNavigation, ScrollView} from "react-navigation"
import Header from "../../components/Header/Header";
import ProductItem from "../../components/ProductItem/ProductItem";
import { Icon } from "native-base";
import Footer from "../../components/Footer/Footer";


const array=[
    {
       "Name":"chevrolet chevelle malibu",
       "Miles_per_Gallon":18,
       "Cylinders":8,
       "Displacement":307,
       "Horsepower":130,
       "Weight_in_lbs":3504,
       "Acceleration":12,
       "Year":"1970-01-01",
       "Origin":"USA",
       "price":"27005.00"
    },
    {
       "Name":"buick skylark 320",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":350,
       "Horsepower":165,
       "Weight_in_lbs":3693,
       "Acceleration":11.5,
       "Year":"1970-01-01",
       "Origin":"USA",
       "price":"27005.00"
    },
    {
       "Name":"plymouth satellite",
       "Miles_per_Gallon":18,
       "Cylinders":8,
       "Displacement":318,
       "Horsepower":150,
       "Weight_in_lbs":3436,
       "Acceleration":11,
       "Year":"1970-01-01",
       "Origin":"USA",
       "price":"27005.00"
    },
    {
       "Name":"amc rebel sst",
       "Miles_per_Gallon":16,
       "Cylinders":8,
       "Displacement":304,
       "Horsepower":150,
       "Weight_in_lbs":3433,
       "Acceleration":12,
       "Year":"1970-01-01",
       "Origin":"USA",
       "price":"27005.00"
    },
    {
       "Name":"ford torino",
       "Miles_per_Gallon":17,
       "Cylinders":8,
       "Displacement":302,
       "Horsepower":140,
       "Weight_in_lbs":3449,
       "Acceleration":10.5,
       "Year":"1970-01-01",
       "Origin":"USA",
       "price":"27005.00"
    },
    {
       "Name":"ford galaxie 500",
       "Miles_per_Gallon":15,
       "Cylinders":8,
       "Displacement":429,
       "Horsepower":198,
       "Weight_in_lbs":4341,
       "Acceleration":10,
       "Year":"1970-01-01",
       "Origin":"USA",
       "price":"27005.00"
    },
    {
       "Name":"chevrolet impala",
       "Miles_per_Gallon":14,
       "Cylinders":8,
       "Displacement":454,
       "Horsepower":220,
       "Weight_in_lbs":4354,
       "Acceleration":9,
       "Year":"1970-01-01",
       "Origin":"USA",
       "price":"27005.00"
    },
  
 ]

  class Home extends Component {

    constructor(props){
        super(props)

        this.state={
            searchedKeyWord:'',
            dataArray:array,
            filterDataArray:[]
        }
    }

    componentDidMount = () => {
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
        if (text != '') {
            let data = this.state.dataArray.filter((item) =>
              item.Name.toLowerCase().includes(text.toLowerCase()),
            );
            this.setState({dataArray: data});
          } else {
           
              this.setState({dataArray: array});
            
          }
    }}
    > </TextInput>
  
    </View>
    <View>
    <Icon style={styles.icon} type="FontAwesome" name="filter" size={20} onPress={()=>{
        this.search()
    }}></Icon>
    </View>
    </View>
    
    
    <ScrollView>
        {this.state.dataArray.map((item,key)=> <ProductItem item={item} {...this.props}></ProductItem>)}

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

