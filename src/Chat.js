import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
  TextInput,
  TouchableHighlight,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {global} from '../styles/Global';

export default function Chat({navigation, route}) {
  const {name, isActive, lastSeen, chatDate, message} = route.params;
  const [sendMessage, setSendMessage] = useState();
  const [inputMessage, setInputMessage] = useState();

  const submitMessage = () => {
    setSendMessage(inputMessage);
    setInputMessage('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.wallpaper}
        source={require('../assets/chatWallpaper.png')}>
        <StatusBar backgroundColor="#075E54" />
        <View style={styles.chatHeader}>
          <View style={global.chatCard}>
            <View style={global.leftSection}>
              <TouchableHighlight
                onPress={() => navigation.navigate('Chats')}
                underlayColor={'transparent'}>
                <Icon name="arrow-left" size={20} color={'#fff'} />
              </TouchableHighlight>
              <Image
                source={require('../assets/default.png')}
                style={styles.userImg}
              />
              <View>
                <Text style={styles.userText}>{name}</Text>
                {isActive ? (
                  <Text style={styles.infoText}>online</Text>
                ) : (
                  <Text style={styles.infoText}>
                    last seen today at {lastSeen}
                  </Text>
                )}
              </View>
            </View>
            <View style={global.rightIconBox}>
              <Icon
                name="phone"
                size={20}
                color={'#fff'}
                style={styles.rightIcon}
              />
              <Icon
                name="ellipsis-v"
                size={16}
                color={'#fff'}
                style={styles.rightIcon}
              />
            </View>
          </View>
        </View>
        <View style={styles.messageBox}>
          <View style={styles.messages}>
            <View style={styles.chatDate}>
              <Text style={styles.dateText}>{chatDate}</Text>
            </View>
            <View style={styles.receive}>
              <Text style={styles.messageText}>{message}</Text>
            </View>
            {sendMessage && (
              <View style={styles.send}>
                <Text style={styles.messageText}>{sendMessage}</Text>
              </View>
            )}
          </View>
          <View style={styles.form}>
            <View style={styles.inputBox}>
              <Icon name="smile-o" size={22} color={'grey'} />
              <TextInput
                placeholder="Message"
                placeholderTextColor={'grey'}
                onChangeText={message => setInputMessage(message)}
                value={inputMessage}
                style={styles.messageInput}></TextInput>
              <Icon name="paperclip" size={22} color={'grey'} />
            </View>
            <TouchableHighlight style={styles.audioBtn} onPress={submitMessage}>
              {inputMessage ? (
                <Icon name="paper-plane" size={20} color={'#fff'} />
              ) : (
                <Icon name="microphone" size={18} color={'#fff'} />
              )}
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  wallpaper: {
    width: '100%',
    height: '100%',
  },
  chatHeader: {
    width: '100%',
    height: 70,
    backgroundColor: '#075E54',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  rightIcon: {
    marginRight: 15,
  },

  userImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    marginRight: 20,
    marginLeft: 10,
  },
  userText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
  infoText: {
    color: '#fff',
  },
  messageBox: {
    width: '100%',
    height: '90%',
    justifyContent: 'space-between',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  inputBox: {
    width: '80%',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 30,
    margin: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  messageInput: {
    width: '70%',
    paddingLeft: 10,
    fontSize: 18,
    color: '#000',
    alignSelf: 'flex-end',
  },
  audioBtn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#128C7E',
  },
  messages: {
    width: '100%',
    padding: 20,
  },
  chatDate: {
    alignSelf: 'center',
    minWidth: 85,
    height: 26,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
    // padding:10
  },
  dateText: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 14,
  },
  receive: {
    maxWidth: '45%',
    minHeight: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 12,
  },
  send: {
    minWidth: 100,
    maxWidth: '70%',
    minHeight: 30,
    backgroundColor: '#DCF8C6',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 12,
    paddingRight: 15,
  },
  messageText: {
    fontSize: 16,
    color: '#000',
    margin: 10,
  },
});
