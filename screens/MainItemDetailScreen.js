import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const MainItemDetailScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const [subItems, setSubItems] = React.useState(item.subItems || []);

  const handleAddSubItem = (subItem) => {
    setSubItems([...subItems, subItem]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{item.name}</Text>
      <FlatList
        data={subItems}
        keyExtractor={subItem => subItem.id}
        renderItem={({ item }) => (
          <View style={styles.subItem}>
            <Text style={styles.subItemText}>{item.name}</Text>
            <Text style={styles.subItemText}>{item.reps} 次</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddSubItem', { handleAddSubItem })}
      >
        <Text style={styles.addButtonText}>新增細項</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8d7da',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  subItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  subItemText: {
    fontSize: 18,
    color: '#000',
  },
  addButton: {
    padding: 10,
    backgroundColor: '#00f',
    borderRadius: 5,
    margin: 10,
  },
  addButtonText: {
    color: '#fff',
  },
});

export default MainItemDetailScreen;
