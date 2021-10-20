import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

export default function Splash({navigation}) {
  function goToHome() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/images/logo.png')}
      />
      <View style={sliderStyles.container}>
        <View style={[sliderStyles.item, sliderStyles.itemActive]}></View>
        <View style={sliderStyles.item}></View>
        <View style={sliderStyles.item}></View>
      </View>
      <Text style={contentStyles.title}>Pet Near Me</Text>
      <Text style={contentStyles.description}>
        {'Join and discover your favorite\npet in your locality'}
      </Text>
      <TouchableOpacity onPress={() => goToHome()}>
        <Text style={contentStyles.button}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 170,
    height: 170,
    marginBottom: 20,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
});

const sliderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  item: {
    width: 25,
    height: 10,
    marginEnd: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  itemActive: {
    backgroundColor: '#4daefe',
  },
});

const contentStyles = StyleSheet.create({
  title: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 24,
  },
  description: {
    color: '#ababab',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4daefe',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    color: '#fff',
  },
});
