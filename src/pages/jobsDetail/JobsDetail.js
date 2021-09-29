import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import Config from 'react-native-config';
import styles from './JobsDetail.style';
import RenderHtml from 'react-native-render-html';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../components/Button/Button';
import {Alert} from 'react-native';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';

const JobsDetail = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_URL}/${id}`);

  const source = {
    html: `${data.contents}`,
  };

  const handleSubmitJob = () => {
    Alert.alert('Başvurunuz başarıyla alınmıştır.!');
  };

  const dispatch = useDispatch();

  const handleFavoriteJob = favoriteJobs => {
    dispatch(
      {type: 'ADD_FAVORITE', payload: {favoriteJobs}},
      Alert.alert('Favori İş İlanı Kayıt Edildi'),
    );
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.locations_container}>
          <Text style={styles.header_location}>Locations : </Text>
          <Text style={styles.location_title}>
            {data.locations && data.locations.length > 0
              ? data.locations[0].name
              : 'Unknown Location'}
          </Text>
        </View>
        <View style={styles.levels_container}>
          <Text style={styles.levels}>Job Level : </Text>
          <Text style={styles.levels_title}>
            {data.levels && data.levels.length > 0
              ? data.levels[0].name
              : 'Unknown Levels'}
          </Text>
        </View>
        <Text style={styles.header}>Job Detail</Text>
      </View>
      <View style={styles.info_container}>
        <RenderHtml
          baseStyle={styles.info_container_text}
          source={source}
          contentWidth={Dimensions.get('window').width}
        />
      </View>
      <View style={styles.button_container}>
        <Button text="Submit" onPress={handleSubmitJob} icon="send" />
        <Button
          text="Favorite Job"
          onPress={() => handleFavoriteJob(data)}
          icon="heart"
        />
      </View>
    </ScrollView>
  );
};

export default JobsDetail;
