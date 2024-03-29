import React, { Component } from 'react';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroImage,
  //ViroConstants
} from '@viro-community/react-viro';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import moment from 'moment';

const HelloWorldSceneAR = (props) => {
  const {image} = props;
  return (
    // placing the image in the scene
    <ViroARScene>
      <ViroImage source = {image}
        scale={[0.5,0.5,0.5]}
        position={[0,0,-1]} />
    </ViroARScene>
  );
};

export default class CameraScreen extends Component {
  constructor(props) {
    super(props);
    this.navigatorRef = React.createRef();
    const {image} = props;
    this.image = image;
    const {imageHandler} = props;
    this.imageHandler = imageHandler;
    that = this;
  }
  componentDidMount() {
    var navRef = this.navigatorRef;
    this.setState({navigator: navRef});
  }

  render() {
    return (
      <View style = {{flex: 1}}>
        <View style = {style.goBack}>
          <TouchableOpacity onPress = {() => this.imageHandler(null)} /* Go back to Galleries.js*/>
            <Text style = {style.goBackButton}>Go back</Text>
          </TouchableOpacity>
        </View>
        <ViroARSceneNavigator
        style = {{flex: 1}}
        ref = {this.navigatorRef}
        autofocus={true}
        initialScene={{
          scene: HelloWorldSceneAR,
          passProps: {image: that.image /*passes image callback function*/}
        }}
        />
        <View style = {style.takePic}>
          <TouchableOpacity onPress = {this.takeScreenshot}>
            <Text style = {style.buttonText}></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takeScreenshot() {
    //var curDate = new Date();
    var curDateFormat = moment().format('dd_MM_yyyy_HH_mm_ss');
    that.navigatorRef.current._takeScreenshot('Viro' + curDateFormat, true); 
    //picture stored and  named according to date
    //_takeScreenshot is a function under Viro AR Navigator
  }
}

const style = StyleSheet.create({
  takePic: {
    //width:'50%',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'lightblue',
  },

  goBackButton: {
    width: 100,
    height: 40,
    padding: 10,
    backgroundColor: 'lightblue',
    marginLeft: 10,
    paddingBottom: 10,
  },

  goBack: {
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: 'transparent',
  },
});