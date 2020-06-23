import React, { Component } from "react";
import { View, StatusBar, Animated, Easing } from "react-native";
import { createStackNavigator } from 'react-navigation-stack';
import Home from "./Home/Home";
import { createAppContainer } from "react-navigation";


const LoginStack = createStackNavigator({

Home: Home,

}, {
initialRouteName: 'Home',
headerMode: 'none',
// transitionConfig: nav => handleCustomTransition(nav)

});





const AppContainer = createAppContainer(LoginStack);

export default class AppRoot extends Component {
render() {
return (
<>
<StatusBar barStyle="dark-content" />
<View style={{ flex: 1 }}>
<AppContainer />
</View>
</>
);
}
}