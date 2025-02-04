import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="signOut"
        options={{
          title: 'Sign Out',
          tabBarIcon: ({ color, size }) => <Ionicons  size={28} name="power-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="data"
        options={{
          title:'Base de datos',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="server-outline" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout
