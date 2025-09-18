import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import FitnessMenuScreen from './screens/FitnessMenuScreen';
import AddMainItemScreen from './screens/AddMainItemScreen';
import MainItemDetailScreen from './screens/MainItemDetailScreen';
import AddSubItemScreen from './screens/AddSubItemScreen';
import CustomDrawerContent from './screens/CustomDrawerContent';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import RecordBMIScreen from './screens/RecordBMIScreen'
import ForgotPasswordScreen1 from './screens/ForgotPasswordScreen1';
import ForgotPasswordScreen2 from './screens/ForgotPasswordScreen2';
import ForgotPasswordScreen3 from './screens/ForgotPasswordScreen3';
import BMIDiaryScreen from './screens/BMIDiaryScreen';
import UpdateProfileScreen from './screens/UpdateProfileScreen';
import UpdatePasswordScreen from './screens/UpdatePasswordScreen';
import { BMIProvider } from './context/BMIContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="FitnessMenu" component={FitnessMenuScreen} />
      <Drawer.Screen name="BMIDiary" component={BMIDiaryScreen} />
      <Drawer.Screen name="UpdateProfile" component={UpdateProfileScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <BMIProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="AddMainItem" component={AddMainItemScreen} />
          <Stack.Screen name="MainItemDetail" component={MainItemDetailScreen} />
          <Stack.Screen name="AddSubItem" component={AddSubItemScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="RecordBMI" component={RecordBMIScreen} />
          <Stack.Screen name="ForgotPassword1" component={ForgotPasswordScreen1} />
          <Stack.Screen name="ForgotPassword2" component={ForgotPasswordScreen2} />
          <Stack.Screen name="ForgotPassword3" component={ForgotPasswordScreen3} />
          <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
          <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BMIProvider>
  );
}
