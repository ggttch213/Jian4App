import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { BMIContext } from '../context/BMIContext';

export default function RecordBMIScreen({ navigation }) {
  const [date, setDate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const { addBMIRecord } = useContext(BMIContext);

  useEffect(() => {
    if (height && weight) {
      calculateBMI();
    }
  }, [height, weight]);

  const calculateBMI = () => {
    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);
    return bmiValue;
  };

  const saveBMI = () => {
    const bmiValue = calculateBMI();
    const newRecord = { date, bmi: bmiValue };
    addBMIRecord(newRecord);
    navigation.navigate('BMIDiary');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>日期</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} placeholder="YYYY/MM/DD" />
      <Text style={styles.label}>身高 (cm)</Text>
      <TextInput style={styles.input} value={height} onChangeText={setHeight} keyboardType="numeric" />
      <Text style={styles.label}>體重 (kg)</Text>
      <TextInput style={styles.input} value={weight} onChangeText={setWeight} keyboardType="numeric" />
      <Button title="完成" onPress={saveBMI} />
      <Button title="取消" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20,backgroundColor: '#f8d7da', },
  label: { fontSize: 18, marginVertical: 10 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5 },
});
