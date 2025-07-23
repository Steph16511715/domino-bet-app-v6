import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import i18n from './i18n/translations';
import { Audio } from 'expo-av';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    // Jwe mizik de fon (music.mp3 nan assets)
    async function playMusic() {
      const { sound } = await Audio.Sound.createAsync(require('./assets/music.mp3'));
      await sound.playAsync();
    }
    playMusic();
    i18n.locale = 'fr';
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: i18n.t('homeTitle') }} />
        <Stack.Screen name="Game" component={GameScreen} options={{ title: i18n.t('gameTitle') }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
