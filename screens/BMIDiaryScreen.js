import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { BMIContext } from '../context/BMIContext';

export default function BMIDiaryScreen() {
  const { bmiRecords, deleteBMIRecord } = useContext(BMIContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={bmiRecords}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.recordContainer}>
            <Text style={styles.recordText}>{item.date}</Text>
            <Text style={styles.recordText}>{item.bmi}</Text>
            <TouchableOpacity onPress={() => deleteBMIRecord(index)}>
              <Text style={styles.deleteText}>刪除</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('RecordBMI')}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 ,backgroundColor: '#f8d7da',},
  recordContainer: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 },
  recordText: { fontSize: 18 },
  deleteText: { color: 'red' },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
