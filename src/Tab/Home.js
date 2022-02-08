import React from 'react';
import {View, Text, Image, TouchableHighlight, FlatList} from 'react-native';
import {global} from '../../styles/Global';
import {Data} from '../Data/Data';

export default function App({navigation}) {
  const renderItem = ({item}) => (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('Chat', {
          name: item.name,
          isActive: item.isActive,
          lastSeen: item.lastSeen,
          chatDate: item.chatDate,
          message: item.lastText,
        })
      }
      underlayColor={'transparent'}>
      <View style={global.chatCard}>
        <View style={global.leftSection}>
          <Image
            source={require('../../assets/default.png')}
            style={global.userImg}
          />
          <View>
            <Text style={global.userText}>{item.name}</Text>
            <Text style={global.infoText}>{item.lastText}</Text>
          </View>
        </View>
        <Text style={global.dateText}>{item.chatDate}</Text>
      </View>
    </TouchableHighlight>
  );
  return (
    <View style={global.container}>
      <FlatList
        data={Data}
        keyExtractor={item => item.id}
        renderItem={renderItem}></FlatList>
    </View>
  );
}
