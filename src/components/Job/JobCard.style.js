import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: '#efefef',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  job: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  locations: {
    borderRadius: 10,
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    backgroundColor: 'red',
    paddingHorizontal: 5,
    paddingVertical: 3,
    marginVertical: 3,
    overflow: 'hidden',
  },
  locations_container: {
    flexWrap: 'wrap',
  },
  levels: {
    textAlign: 'right',
    color: '#FF5C58',
    borderRadius: 10,
    fontWeight: '900',
  },

  company_name: {
    fontSize: 15,
    marginVertical: 2,
  },
});
