import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  upper_container: {
    backgroundColor: '#eeeeee',
    padding: 8,
    margin: 5,
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  inner_container: {
    color: '#bdbdbd',
  },
  locations_container: {
    flexDirection: 'row',
    margin: 2,
    marginVertical: 2,
  },
  header_location: {
    fontWeight: 'bold',
    color: 'red',
  },
  location_title: {
    fontWeight: 'bold',
  },
  levels: {
    color: 'red',
    fontWeight: 'bold',
  },
  levels_container: {
    flexDirection: 'row',
  },
  levels_title: {
    fontWeight: 'bold',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  info_container: {
    flex: 1,
    padding: 10,
  },
  info_container_text: {
    fontSize: 16,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
    padding: 20,
  },
});
