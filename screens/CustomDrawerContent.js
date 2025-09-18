import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CustomDrawerContent({ navigation }) {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>選單</Text>
      {loggedIn ? (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text>首頁</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('FitnessMenu')}><Text>健身菜單</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('RecordBMI')}><Text>健身日記BMI</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text>登入/登出</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')}><Text>編輯會員資料</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('UpdatePassword')}><Text>更改密碼</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setLoggedIn(false)}><Text>登出</Text></TouchableOpacity>
        </>
      ) : (
        <>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text>首頁</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setLoggedIn(true)}><Text>登入/註冊</Text></TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20,backgroundColor: '#f8d7da', },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 20 },
});
