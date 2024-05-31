import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import Categories from './Categories';


const Picture = require('./assets/Frame 1.png');
const Search = require('./assets/Search.png');


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Image source={Picture} style={styles.mainImage} />
          <View style={styles.searchContainer}>
            <Image source={Search} />
          </View>

          <Categories />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
  },
  content: {
    marginLeft: 25,
    marginRight: 12,
  },
  mainImage: {
    marginBottom: 30,
  },
  searchContainer: {
    alignItems: 'center',
  },
});

