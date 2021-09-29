import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './JobCard.style';

const JobCard = ({job, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.name}></Text>
        <Text style={styles.job}>{job.name}</Text>
        <Text style={styles.company_name}>{job.company.name}</Text>
        <View style={styles.locations_container}>
          <Text style={styles.locations}>
            {job.locations && job.locations.length > 0
              ? job.locations[0].name
              : 'Unknown Location'}
          </Text>
        </View>
        <Text style={styles.levels}>
          {job.levels && job.levels.length > 0
            ? job.levels[0].name
            : 'Unknown Level'}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
