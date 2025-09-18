import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function UpdateProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const saveProfile = () => {

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>名稱</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>電子郵件</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" />
      <Button title="完成" onPress={saveProfile} />
      <Button title="取消" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 , backgroundColor: '#f8d7da'},
  label: { fontSize: 18, marginVertical: 10 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5 },
});
