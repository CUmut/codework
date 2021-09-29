import React from 'react';
import {FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Button from '../../components/Button/Button';
import JobCard from '../../components/Job/JobCard';
import styles from './Favorite.style';

const Favorite = ({navigation}) => {
  const job = useSelector(state => state.favoriteJobs);
  const dispatch = useDispatch();

  const removeJobItems = item => {
    dispatch({type: 'REMOVE_FAVORITE', payload: {job: item}});
  };

  const handleJobItemPress = (id, name) => {
    navigation.navigate('JobsDetail', {id, name});
  };

  const renderItems = ({item}) => (
    <View style={styles.inner_container}>
      <JobCard
        job={item}
        onPress={() => handleJobItemPress(item.id, item.name)}
      />
      <View style={styles.button_container}>
        <Button
          icon="delete"
          text="Remove Job"
          onPress={() => removeJobItems(item)}
        />
      </View>
    </View>
  );

  return (
    <FlatList data={job} renderItem={renderItems} style={styles.container} />
  );
};

export default Favorite;
