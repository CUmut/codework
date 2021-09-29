import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 8,
    margin: 3,
    marginHorizontal: 5,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb4d4b',
    width: Dimensions.get('window').width / 2 - 35,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});
