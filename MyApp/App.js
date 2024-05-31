import React from 'react';
import { StyleSheet, View, Image, ScrollView } from 'react-native';
import OngoingTask from './OngoingTask';
import Categories from './Categories';

const Picture = require('./assets/Frame 1.png');
const Search = require('./assets/Search.png');

const DATA = [
  {
    title: 'Ongoing Task',
    data: [
      "Mobile App Development", "Web Development", "Push Ups", "Cyber Security", "Networking",
      "Software Engineering", "Artificial Intelligence", "Robotics", "Mechanical Engineering", "System Administration",
      "Database Management", "Data Science", "Data Analysis", "Python", "Project Management", "Agile"
    ]
  }
];

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
          <OngoingTask />
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

