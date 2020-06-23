import React, {Component} from 'react';

import {View, Text, TextInput, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';

import {withNavigation} from 'react-navigation';
import {
  Card,
  Content,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Right,
} from 'native-base';

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.item);

    return (
      <>
        <Content>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Details',{item:this.props.item})
            }}>
          <Card style={styles.content}>
            <CardItem style={styles.carditem}>
                <Image style={{height:50,width:50,borderRadius:25}} source={{uri:"https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Audi-Q7-2020/6997/1561541127408/front-left-side-47.jpg?tr=h-140"}}></Image>
              <View style={styles.item}>
                
                <Text>{this.props.item.Name}</Text>
              </View>
              <View style={styles.item}>
                
                <Text>{this.props.item.price}</Text>
              </View>

            </CardItem>
          </Card>
          </TouchableOpacity>
        </Content>
      </>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    marginRight: 18,
    marginLeft: 18,
  },
  carditem: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  item: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headtext: {
    fontWeight: 'bold',
  },
});

export default withNavigation(ProductItem);
