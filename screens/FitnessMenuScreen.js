import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const FitnessMenuScreen = ({ navigation }) => {
  const [mainItems, setMainItems] = useState([]);

  const handleAddMainItem = (item) => {
    setMainItems((prevItems) => [...prevItems, item]);
  };

  const handleAddSubItem = (mainItemId, subItem) => {
    setMainItems((prevItems) => 
      prevItems.map(item => 
        item.id === mainItemId ? { ...item, subItems: [...item.subItems, subItem] } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={mainItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.mainItemContainer}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => navigation.navigate('MainItemDetail', { item })}
            >
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
            {item.subItems.map(subItem => (
              <View key={subItem.id} style={styles.subItem}>
                <Text>{subItem.name} - {subItem.reps}次</Text>
                <Text>{subItem.note}</Text>
              </View>
            ))}
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>尚無課表</Text>}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddMainItem', { handleAddMainItem, handleAddSubItem })}
      >
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8d7da' },
  mainItemContainer: { marginBottom: 20 },
  item: { 
    padding: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc', 
    backgroundColor: '#f8d7da' 
  },
  itemText: {
    fontSize: 18,
    color: '#000',
  },
  subItem: {
    padding: 10,
    marginLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addButton: {
    width: 60,
    height: 60,
    backgroundColor: '#61dafb',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
  },
  emptyText: {
    marginTop: 20,
    fontSize: 18,
    color: '#888',
  },
});

export default FitnessMenuScreen;
