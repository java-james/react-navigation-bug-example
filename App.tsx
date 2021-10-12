/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import {Button, StyleSheet, Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

const MainStack = createStackNavigator();

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Hello</Text>
      <Button
        title={'Open modal'}
        onPress={() => navigation.navigate('Modal')}
      />
    </View>
  );
};

/**
 * Pulling this screen down on android even just a bit will result in it becoming suddenly fully transparent
 */
const ModalScreen: React.FC = () => {
  return (
    <View style={styles.modalBg}>
      <Text>This is the modal</Text>
    </View>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={'Setup'}
        screenOptions={{headerShown: false}}>
        <MainStack.Group>
          <MainStack.Screen name="Home" component={HomeScreen} />
        </MainStack.Group>
        <MainStack.Group
          screenOptions={{
            presentation: 'modal',
            gestureEnabled: true,
          }}>
          <MainStack.Screen name="Modal" component={ModalScreen} />
        </MainStack.Group>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    backgroundColor: 'red',
  },
});
