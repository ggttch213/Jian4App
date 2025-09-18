import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddSubItemScreen = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [note, setNote] = useState('');

  const handleAddSubItem = () => {
    const newSubItem = { id: Date.now().toString(), name, reps, note };
    route.params.handleAddSubItem(route.params.mainItem.id, newSubItem);
    navigation.navigate('FitnessMenu');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32 }}>新增細項</Text>
      <TextInput
        style={styles.input}
        placeholder="項目名稱"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="次數"
        value={reps}
        onChangeText={setReps}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="備註"
        value={note}
        onChangeText={setNote}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddSubItem}>
        <Text style={styles.buttonText}>完成</Text>
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

export default AddSubItemScreen;
