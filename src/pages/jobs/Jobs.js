import React, {useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import JobCard from '../../components/Job/JobCard';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import Button from '../../components/Button/Button';
import styles from './Jobs.style';

const Jobs = ({navigation}) => {
  const [page, setPage] = useState(1);

  const {data, error, loading} = useFetch(
    `${Config.API_URL}?page=${page}`,
    'results',
  );

  const renderKey = item => item.id;

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  const handleJobItemPress = (id, name) => {
    navigation.navigate('JobsDetail', {id, name});
  };

  const renderJobsItem = ({item}) => (
    <JobCard
      job={item}
      onSelect={() => handleJobItemPress(item.id, item.name)}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderJobsItem}
        keyExtractor={renderKey}
      />
      <View style={styles.button_container}>
        <Button
          icon="arrow-left-bold"
          text="Previous Page"
          onPress={() => {
            setPage(prevState => {
              if (prevState <= 0) {
                return (prevState = 50);
              } else {
                return prevState - 1;
              }
            });
          }}
        />
        <Button
          icon="arrow-right-bold"
          text="Next Page"
          onPress={() => {
            setPage(prevState => {
              if (prevState >= 50) {
                return (prevState = 0);
              } else {
                return prevState + 1;
              }
            });
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Jobs;
