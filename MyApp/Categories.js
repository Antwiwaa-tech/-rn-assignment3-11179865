import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import OngoingTask from './OngoingTask';

const Picture = require('./assets/Frame 1.png');
const Search = require('./assets/Search.png');
const Exercise = require('./assets/Group 9.png');
const Cook = require('./assets/image.png');
const Code = require('./assets/code.png');
const Eat = require('./assets/eat.png');
const Clean = require('./assets/clean.png');
const Walk = require('./assets/walk.png');
const Sleep = require('./assets/sleep.png');

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
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const handlePress = (taskName) => {
    console.log($,{taskName} ,pressed);
  
  };

  const toggleCategories = () => {
    setCategoriesVisible(!categoriesVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Image source={Picture} style={styles.mainImage} />
          <View style={styles.searchContainer}>
            <Image source={Search} />
          </View>

          <TouchableHighlight onPress={toggleCategories} underlayColor="#ddd">
            <Text style={styles.categoriesTitle}>Categories</Text>
          </TouchableHighlight>

          {categoriesVisible && (
            <>
              <Image source={Exercise} style={styles.exerciseImage} />

              <View style={styles.cookCodeContainer}>
                <TouchableHighlight onPress={() => handlePress('Code')} underlayColor="#ddd">
                  <View style={styles.taskBox}>
                    <Text style={styles.taskTitle}>Code</Text>
                    <Text style={{fontSize:13, marginBottom:18,fontWeight:'bold' }}>12 Tasks</Text>
                    <Image style={styles.image} source={Code} />
                  </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => handlePress('Cook')} underlayColor="#ddd">
                  <View style={styles.taskBox}>
                    <Text style={styles.taskTitle}>Cook</Text>
                    <Text style={{fontSize:13, marginBottom:20,fontWeight:'bold' }}>4 Tasks</Text>
                    <Image style={styles.image} source={Cook} />
                  </View>
                </TouchableHighlight>
              </View>

              <View style={styles.cookCodeContainer}>
                <TouchableHighlight onPress={() => handlePress('Clean')} underlayColor="#ddd">
                  <View style={styles.taskBox}>
                    <Text style={styles.taskTitle}>Clean</Text>
                    <Text style={{fontSize:13, marginBottom:18,fontWeight:'bold' }}>2 Tasks</Text>
                    <Image style={styles.image} source={Clean} />
                  </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => handlePress('Eat')} underlayColor="#ddd">
                  <View style={styles.taskBox}>
                    <Text style={styles.taskTitle}>Eat</Text>
                    <Text style={{fontSize:13, marginBottom:20,fontWeight:'bold' }}>3 Tasks</Text>
                    <Image style={styles.image} source={Eat} />
                  </View>
                </TouchableHighlight>
              </View>

              <View style={styles.cookCodeContainer}>
                <TouchableHighlight onPress={() => handlePress('Walk')} underlayColor="#ddd">
                  <View style={styles.taskBox}>
                    <Text style={styles.taskTitle}>Walk</Text>
                    <Text style={{fontSize:13, marginBottom:18, fontWeight:'bold'}}>1 Task</Text>
                    <Image style={styles.image} source={Walk} />
                  </View>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => handlePress('Sleep')} underlayColor="#ddd">
                  <View style={styles.taskBox}>
                    <Text style={styles.taskTitle}>Sleep</Text>
                    <Text style={{fontSize:13, marginBottom:20,fontWeight:'bold' }}>1 Task</Text>
                    <Image style={styles.image} source={Sleep} />
                  </View>
                </TouchableHighlight>
              </View>
            </>
          )}

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
  categoriesTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
  },
  exerciseImage: {
    marginTop: 12,
    marginBottom: 20,
  },
  cookCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  taskBox: {
    width: 170,
    height: 180,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'right',
    padding: 10,
  },
  taskTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 2,
  },
  image: {
    width: 120,
    height: 110,
    borderRadius: 8,
    alignSelf: 'flex-end',
  },
});