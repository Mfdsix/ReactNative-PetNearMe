import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import CATEGORIES from '../datas/categories';
import PETS from '../datas/pets';

export default function Home({navigation}) {
  return (
    <ScrollView style={styles.container}>
      {/* header */}
      <View style={headerStyles.container}>
        <View style={headerStyles.userContainer}>
          <View style={headerStyles.photoContainer}>
            <Icon name="person-outline" type="ionicon" color={'white'} />
          </View>
          <View>
            <Text style={headerStyles.name}>Ma Puth</Text>
            <View style={headerStyles.userInfoContainer}>
              <Icon
                style={headerStyles.userLocationIcon}
                name="location-outline"
                type="ionicon"
                size={15}
                color={'#4daefe'}
              />
              <Text style={headerStyles.location}>Bekasi bagian bubrah</Text>
            </View>
          </View>
        </View>
        <View style={headerStyles.notifContainer}>
          <Icon name="notifications-outline" type="ionicon" />
          <View style={headerStyles.notifBadge}></View>
        </View>
      </View>
      {/* search and filter */}
      <View style={searchStyles.container}>
        <View style={searchStyles.searchContainer}>
          <Icon name="search-outline" type="ionicon" color={'#ababab'} />
          <Text style={searchStyles.searchText}>Search Pet</Text>
        </View>
        <View style={searchStyles.filterContainer}>
          <Icon name="options-outline" type="ionicon" color={'#fff'} />
        </View>
      </View>
      {/* categories */}
      <View style={categoryStyles.container}>
        <Text style={categoryStyles.title}>Categories</Text>
        <ScrollView horizontal={true}>
          {CATEGORIES.map((category, index) => (
            <View
              style={[
                categoryStyles.item,
                category.title == 'Dogs' ? categoryStyles.itemActive : {},
              ]}
              key={index}>
              <View>
                <Image style={categoryStyles.photo} source={category.photo} />
              </View>
              <Text style={categoryStyles.categoryName}>{category.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* pet list */}
      <View>
        <ScrollView horizontal={true} style={listStyles.container}>
          {PETS.map((pet, index) => (
            <View style={listStyles.item} key={index}>
              <View style={listStyles.photoContainer}>
                <Image style={listStyles.photo} source={pet.photo} />
              </View>
              <View style={listStyles.infoContainer}>
                <View>
                  <Text style={listStyles.petName}>{pet.name}</Text>
                  <View style={listStyles.distanceContainer}>
                    <Icon
                      name="location-outline"
                      type="ionicon"
                      size={15}
                      color={'#4daefe'}
                    />
                    <Text style={listStyles.distance}>
                      Distance ({pet.distance})
                    </Text>
                  </View>
                </View>
                <Icon
                  name={pet.favorite ? 'heart' : 'heart-outline'}
                  color={'#4daefe'}
                  type="ionicon"
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* nearby pets */}
      <View style={nearbyStyles.container}>
        <Text style={nearbyStyles.title}>Nearby Pets</Text>

        {PETS.map((pet, index) => (
          <View style={listStyles.item} key={index}>
            <View style={listStyles.photoContainer}>
              <Image style={listStyles.photo} source={pet.photo} />
            </View>
            <View style={listStyles.infoContainer}>
              <View>
                <Text style={listStyles.petName}>{pet.name}</Text>
                <View style={listStyles.distanceContainer}>
                  <Icon
                    name="location-outline"
                    type="ionicon"
                    size={15}
                    color={'#4daefe'}
                  />
                  <Text style={listStyles.distance}>
                    Distance ({pet.distance})
                  </Text>
                </View>
              </View>
              <Icon
                name={pet.favorite ? 'heart' : 'heart-outline'}
                color={'#4daefe'}
                type="ionicon"
              />
            </View>
          </View>
        ))}
      </View>
      {/*  */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoContainer: {
    backgroundColor: '#4daefe',
    borderRadius: 8,
    padding: 10,
    marginEnd: 10,
  },
  photo: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userLocationIcon: {
    marginEnd: 3,
  },
  name: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: -2,
  },
  location: {
    color: '#ababab',
    fontSize: 13,
  },
  notifContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    position: 'relative',
    elevation: 10,
    shadowColor: '#4daefe',
  },
  notifBadge: {
    position: 'absolute',
    right: 8,
    top: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4daefe',
  },
});

const searchStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchContainer: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  searchText: {
    marginStart: 10,
    color: '#ababab',
  },
  filterContainer: {
    marginStart: 20,
    backgroundColor: '#4daefe',
    padding: 15,
    borderRadius: 8,
  },
});

const categoryStyles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    marginEnd: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 10,
    shadowColor: '#4daefe',
    alignItems: 'center',
  },
  itemActive: {
    backgroundColor: '#4daefe',
  },
  photo: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
    marginEnd: 10,
  },
  categoryName: {
    color: '#333',
    fontWeight: 'bold',
  },
});

const listStyles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingLeft: 20,
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    marginEnd: 20,
    elevation: 10,
    shadowColor: '#4daefe',
  },
  photoContainer: {
    backgroundColor: '#8eccff',
    padding: 30,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: 'center',
  },
  photo: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 10,
  },
  petName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  distanceContainer: {
    flexDirection: 'row',
  },
  distance: {
    marginStart: 3,
    color: '#ababab',
  },
});

const nearbyStyles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
