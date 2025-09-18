import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function UpdatePasswordScreen({ navigation }) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const savePassword = () => {

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>舊密碼</Text>
      <TextInput style={styles.input} value={currentPassword} onChangeText={setCurrentPassword} secureTextEntry />
      <Text style={styles.label}>新密碼</Text>
      <TextInput style={styles.input} value={newPassword} onChangeText={setNewPassword} secureTextEntry />
      <Text style={styles.label}>確認密碼</Text>
      <TextInput style={styles.input} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      <Button title="完成" onPress={savePassword} />
      <Button title="取消" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 , backgroundColor: '#f8d7da'},
  label: { fontSize: 18, marginVertical: 10 },
  input: { borderWidth: 1, padding: 10, borderRadius: 5 },
});
