import React from 'react';
import {View, Text, Image, TouchableHighlight, FlatList} from 'react-native';
import {global} from '../../styles/Global';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Data} from '../Data/Data';

export default function App() {
  const renderItem = ({item}) => (
    <TouchableHighlight underlayColor={'transparent'}>
      <View style={global.chatCard}>
        <View style={global.leftSection}>
          <Image
            source={require('../../assets/default.png')}
            style={global.userImg}
          />
          <View>
            <Text style={global.userText}>{item.name}</Text>
            <View style={global.leftSection}>
              {item.callType === 'incoming' ? (
                <Icon
                  name="call-made"
                  size={20}
                  color={'#25D366'}
                  style={{marginRight: 5, marginTop: 3}}
                />
              ) : (
                <Icon
                  name="call-received"
                  size={20}
                  color={'red'}
                  style={{marginRight: 5}}
                />
              )}
              <Text style={global.infoText}>{item.lastCall}</Text>
            </View>
          </View>
        </View>
        <Icon name="phone" size={22} color={'#25D366'} style={{margin: 15}} />
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
