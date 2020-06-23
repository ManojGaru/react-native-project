import React, {Component} from 'react';

import {
  View,
  StatusBar,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

import {withNavigation, ScrollView} from 'react-navigation';
import Header from '../../components/Header/Header';
import ProductItem from '../../components/ProductItem/ProductItem';
import {Icon} from 'native-base';
import Footer from '../../components/Footer/Footer';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedKeyWord: '',
      dataArray: [],
      filterDataArray: [],
    };
  }

  componentDidMount = () => {
    console.log(this.props.navigation.state.params);
  };
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Header />

        <View>
          <Image
            style={{
              height: Dimensions.get('screen').height * 0.3,
              width: Dimensions.get('screen').width * 0.9,
              alignSelf: 'center',
            }}
            source={{
              uri:
                'https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Audi-Q7-2020/6997/1561541127408/front-left-side-47.jpg?tr=h-140',
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              color: '#0079fe',
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            {this.props.navigation.state.params.item.Name}
          </Text>
          <View style={{flexDirection:'row',justifyContent:'flex-start', marginLeft:'20%',marginTop:10}}>
              <Text style={{fontSize:18, color:'#ff5f01'}}>Acceleration :</Text>
              <Text style={{marginLeft:20, fontSize:18}}>{this.props.navigation.state.params.item.Acceleration}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start', marginLeft:'20%',marginTop:10}}>
              <Text style={{fontSize:18, color:'#ff5f01'}}>Cylinders :</Text>
              <Text style={{marginLeft:20, fontSize:18}}>{this.props.navigation.state.params.item.Cylinders}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start',marginLeft:'20%',marginTop:10}}>
              <Text style={{fontSize:18, color:'#ff5f01'}}>Horsepower :</Text>
              <Text style={{marginLeft:20, fontSize:18}}>{this.props.navigation.state.params.item.Horsepower}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start',marginLeft:'20%',marginTop:10}}>
              <Text style={{fontSize:18, color:'#ff5f01'}}>Year :</Text>
              <Text style={{marginLeft:20, fontSize:18}}>{this.props.navigation.state.params.item.Year}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start', marginLeft:'20%',marginTop:10}}>
              <Text style={{fontSize:18, color:'#ff5f01'}}>Origin :</Text>
              <Text style={{marginLeft:20, fontSize:18}}>{this.props.navigation.state.params.item.Origin}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'flex-start', marginLeft:'20%',marginTop:10}}>
              <Text style={{fontSize:18, color:'#ff5f01'}}>Price :</Text>
              <Text style={{marginLeft:20, fontSize:18}}>{this.props.navigation.state.params.item.price}</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    // marginTop:-10,
    width: Dimensions.get('screen').width * 0.77,
  },
  search: {
    flexDirection: 'row',
    // flex:1,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  icon: {
    // borderWidth:1,
    paddingLeft: 10,
    paddingRight: 10,
    padding: 5,
    marginLeft: 5,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#0079fe',
    color: '#FFF',
  },
});

export default withNavigation(Details);
