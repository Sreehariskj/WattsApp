import {StyleSheet} from 'react-native';

export const global = StyleSheet.create({
  darkContainer:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    padding:20,
    backgroundColor:'#00202F'
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  bottomGreen: {
    // alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'green',
    padding: 5,
    justifyContent: 'center',
      // backgroundColor:'green',
  },
  nextBtn:{
    width:100,
    height:40,
    marginBottom:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25d366',
    borderRadius:5
  },
  nextText:{
    color:'#00202F',
    fontWeight:'bold',
    fontSize:16,
  },
  chatCard: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 5,
    // backgroundColor:'red'
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor:'red'
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    marginRight: 25,
  },
  userText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  infoText: {
    color: 'grey',
  },
  dateText: {
    color: 'grey',
    margin:11,
    fontSize:12
  },
  rightIconBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightIcon: {
    marginLeft: 10,
    width:35,
    height:20,
    textAlign:'center',
    // backgroundColor:'red',
  },
});
