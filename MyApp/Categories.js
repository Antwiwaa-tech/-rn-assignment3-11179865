import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Exercise = require('./assets/Group 9.png');
const Cook = require('./assets/image.png');
const Code = require('./assets/code.png');
const Eat = require('./assets/eat.png');
const Clean = require('./assets/clean.png');
const Walk = require('./assets/walk.png');
const Sleep = require('./assets/sleep.png');

const Categories = () => {
  return (
    <View>
      <Text style={styles.categoriesTitle}>Categories</Text>
      <Image source={Exercise} style={styles.exerciseImage} />

      <View style={styles.cookCodeContainer}>
        <View style={styles.taskBox}>
          <Text style={styles.taskTitle}>Code</Text>
          <Text style={{ fontSize: 13, marginBottom: 18, fontWeight: 'bold' }}>12 Tasks</Text>
          <Image style={styles.image} source={Code} />
        </View>

        <View style={styles.taskBox}>
          <Text style={styles.taskTitle}>Cook</Text>
          <Text style={{ fontSize: 13, marginBottom: 20, fontWeight: 'bold' }}>4 Tasks</Text>
          <Image style={styles.image} source={Cook} />
        </View>
      </View>

      <View style={styles.cookCodeContainer}>
        <View style={styles.taskBox}>
          <Text style={styles.taskTitle}>Clean</Text>
          <Text style={{ fontSize: 13, marginBottom: 18, fontWeight: 'bold' }}>2 Tasks</Text>
          <Image style={styles.image} source={Clean} />
        </View>
        <View style={styles.taskBox}>
          <Text style={styles.taskTitle}>Eat</Text>
          <Text style={{ fontSize: 13, marginBottom: 20, fontWeight: 'bold' }}>3 Tasks</Text>
          <Image style={styles.image} source={Eat} />
        </View>
      </View>

      <View style={styles.cookCodeContainer}>
        <View style={styles.taskBox}>
          <Text style={styles.taskTitle}>Walk</Text>
          <Text style={{ fontSize: 13, marginBottom: 18, fontWeight: 'bold' }}>1 Task</Text>
          <Image style={styles.image} source={Walk} />
        </View>
        <View style={styles.taskBox}>
          <Text style={styles.taskTitle}>Sleep</Text>
          <Text style={{ fontSize: 13, marginBottom: 20, fontWeight: 'bold' }}>1 Task</Text>
          <Image style={styles.image} source={Sleep} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Categories;
