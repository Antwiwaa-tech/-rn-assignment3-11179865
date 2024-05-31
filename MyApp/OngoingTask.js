import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';

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

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const OngoingTask = () => {
  return (
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor:'#fff',
    borderWidth:2.5,
    borderColor:'#f0e2d3',
    padding: 40,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:15,
  },
  title: {
    fontSize: 20,
     backgroundColor:'#fff',
     textAlign:'left',
     fontWeight:'500',
     
    
  },
  header: {
    fontSize: 23,
    backgroundColor: '#f7f0e8',
    padding: 10,
    fontWeight:'bold'
  },
});

export default OngoingTask;
