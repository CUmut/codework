import React, {useState} from 'react';
import {FlatList, SafeAreaView, View, Text} from 'react-native';
import JobCard from '../../components/Job/JobCard';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch/useFetch';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';

const Jobs = ({navigation, route}) => {
  const [page, setPage] = useState(1);

  const {data, error, loading} = useFetch(
    `${Config.API_URL}?page=${page}`,
    'results',
  );

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
    <SafeAreaView>
      <FlatList data={data} renderItem={renderJobsItem} />
    </SafeAreaView>
  );
};

export default Jobs;
