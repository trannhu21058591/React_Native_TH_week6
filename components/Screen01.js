import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'
import React, { useState, useEffect } from 'react';
import List1 from './list1';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';

export default function Screen01({ navigation, route }) {

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.vtxt}>
      <Text style={styles.text}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
     </View>
     <ScrollView>
       <List1/>
     </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
    
  },
  text:{
    width: '80%',
    
  },
  vtxt:{
    height: 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list:{
    backgroundColor: 'gray',
    flex: 1,
  },
  
});
