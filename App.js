import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  // Underground Resistance related URLs
  const urLinks = [
    'https://www.youtube.com/watch?v=qiCEGXGm-r0', // UR - Transition
    'https://www.youtube.com/watch?v=s5MogMGLWAA', // UR - The Final Frontier
    'https://www.youtube.com/watch?v=EDrRrVUZCQE', // Galaxy 2 Galaxy - Hi-Tech Jazz
    'https://www.youtube.com/watch?v=W3sGJRUJLJc', // Underground Resistance - Inspiration
    'https://www.youtube.com/watch?v=eFNBnVmHRio'  // The Punisher - Covert Action
  ];
  
  const handleResistPress = () => {
    // Choose a random UR track from the array
    const randomLink = urLinks[Math.floor(Math.random() * urLinks.length)];
    
    // Open the link
    Linking.openURL(randomLink);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DETROIT TECHNO</Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleResistPress}
      >
        <Text style={styles.buttonText}>RESIST</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
    letterSpacing: 3,
  },
  button: {
    backgroundColor: '#ff0000',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 0,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
}); 