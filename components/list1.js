import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity, ScrollView, FlatList, StatusBar} from 'react-native';
import IconA from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'
import React, { useState, useEffect } from 'react';


// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';
const DATA = [
  {
    id: '1',
    title: 'Ca nấu lẩu, nấu mì mini',
    img: require('../assets/34107db4b55a13044a4b.jpg'),
    shopName: 'Devang',
  },
  {
    id: '2',
    title: '1 KG khô gà bơ tỏi',
    img: require('../assets/e755e6f32e1d8843d10c.jpg'),
    shopName: 'LTD Food',
  },
  {
    id: '3',
    title: 'Xe cần cẩu đa năng',
    img: require('../assets/c27297db5f35f96ba024.jpg'),
    shopName: 'Thế giới đồ chơi',
  },
  {
    id: '4',
    title: 'Đồ chơi dạng mô hình',
    img: require('../assets/8d3b0393cb7d6d23346c.jpg'),
    shopName: 'Thế giới đồ chơi',
  },
  {
    id: '5',
    title: 'Lãnh đạo đơn giản',
    img: require('../assets/816089d81936bf68e627.jpg'),
    shopName: 'Minh Long Book',
  },
  {
    id: '6',
    title: 'Hiểu lòng trẻ con',
    img: require('../assets/5e7c2ad6e23844661d29.jpg'),
    shopName: 'Minh Long Book',
  },

];

 const Item = ({item}) => (
  <View style={styles.vitem}>
   <Image source={item.img}/>
   <View style={styles.info}>
    <Text style={styles.title}>{item.title}</Text>
    <Text>Shop <Text style={styles.txtshopName}>{item.shopName}</Text></Text>
   </View>
   <TouchableOpacity style={styles.chat}>
     <Text>Chat</Text>
   </TouchableOpacity>
    
    
  </View>
);

export default function Screen01() {
  const renderItem = ({item}) => {
    return (
      <Item item={item}/>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.vtxt}>
      <Text style={styles.text}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
     </View>
      
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  info:{
    flex: 1,
    marginLeft: 10,
    marginTop: -30,
  },
  chat:{
    backgroundColor: 'red',
    height: 30,
    alignItems: 'center',
    justifyContent:'center',
    width: 70,
  },
  txtshopName:{
    color: 'red'
  },
  vitem: {
    backgroundColor: '#EEEEEE',
    // padding: 20,
    marginVertical: 1,
    // marginHorizontal: 16,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'gray'
  },
  txtTitle: {
    fontSize: 15,
  },
  text:{
    width: '80%',
    
  },
  vtxt:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});