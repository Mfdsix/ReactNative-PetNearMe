import React from 'react';
import {View, StyleSheet, Image, Text, Button} from 'react-native';

export default function Splash({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/images/logo.png')}
        />
        <View style={sliderStyles.container}>
          <View style={sliderStyles.item}></View>
          <View style={sliderStyles.item}></View>
          <View style={sliderStyles.item}></View>
        </View>
        <Text style={contentStyles.title}>Pet Near Me</Text>
        <Text style={contentStyles.description}>
          Find your favorite pet close to you
        </Text>
        <Button style={contentStyles.button}>Get Started</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});

const sliderStyles = StyleSheet.create({
  container: {},
  item: {},
});

const contentStyles = StyleSheet.create({
  title: {},
  description: {},
  button: {},
});
