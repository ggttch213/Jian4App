import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddMainItemScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [note, setNote] = useState('');

  const handleAddMainItem = () => {
    const newItem = { id: Date.now().toString(), name, note, subItems: [] };
    route.params.handleAddMainItem(newItem);
    navigation.navigate('AddSubItem', { mainItem: newItem, handleAddSubItem: route.params.handleAddSubItem });
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32 }}>新增主要菜單項目</Text>
      <TextInput
        style={styles.input}
        placeholder="菜單名稱"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="備註"
        value={note}
        onChangeText={setNote}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddMainItem}>
        <Text style={styles.buttonText}>新增</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>取消</Text>
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
  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    padding: 10,
    backgroundColor: '#00f',
    borderRadius: 5,
    margin: 10,
  },
  cancelButton: {
    backgroundColor: '#f00',
  },
  buttonText: {
    color: 'white',
  },
});

export default AddMainItemScreen;
