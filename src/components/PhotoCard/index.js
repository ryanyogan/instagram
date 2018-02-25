import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { human, iOSColors } from 'react-native-typography';
import Touchable from '@appandflow/touchable';

import Header from './Header';
import ActionButtons from './ActionButtons';
import Meta from './Meta';
import { CommentInput } from '../TextInputs';

const styles = StyleSheet.create({
  root: {
    minHeight: 600,
    paddingBottom: 10,
  },
  img: {
    flex: 1,
  },
  commentsWrapper: {
    height: 50,
    paddingHorizontal: 16,
  },
  viewAllComments: {
    ...human.calloutObject,
    color: iOSColors.midGray,
  },
  timeAgoWrapper: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  timeAgo: {
    ...human.footnoteObject,
    color: iOSColors.midGray,
  },
});

const PhotoCard = () => (
  <View style={styles.root}>
    <Header />
    <Image
      style={styles.img}
      source={{
        uri:
          'https://lh3.googleusercontent.com/NrQGlvzsbNkOelK5OfdPg5OwI17W3ahb4mQGNWycWcTLxURuyxYeaSAo6XerZgJU8INo2OQ9bhP67LrvH2GGzSxFBn5TCo3h7EHPZchWG3fqbaL40kStSHduwvDr1lBM6ZQf8M9erMl74F2pQBiymCrJb-9-UALal28u5eRomcvD7JuBNgpP4YbJLUd-NAKcpFJGfrRQqv97e3sEk7TptHG3rm74QzAMu1wz_-b6ihBOH8Tugnb3sYPmo7WrOl8VwkrshGBrL_RHU4EWyDDNq5feYciJTfy74b_8wywGXeBI5WHJpCcDSCbtjKuJ4HY5nFhN2ikdvjWhur0extqMH-k4nA1k-iIm31sKNbT4sVFAR-rlqi9UFWPjwT5zyU3MmVns2iy7TJp6UhGpBw2sJnjL98U7ouVick2GM6Q6WmZGPD0A6Jarqi3eODhVeNU6yxRBTskEzqr9jpLWJgWJBV1FC2utPDzcasfd86ofSucdno7hzT1e_EHkciXhIkJdNz_NWou-xTbs4fttbYhCxv1uGdlCNYN9KWUm8xhLqBGrW2t4sfMdSL1F6_aEngeB6wFA_3f6PzkvqyznYl8PzdFIQDQP-jAI2_HFG7RjJRwg6rDItegsraMOtQqPDahOltkSnorpR_w6oFq5F-jToFAEDTg6nt_6vw=w648-h864-no',
      }}
    />
    <ActionButtons />
    <Meta />
    <View style={styles.commentsWrapper}>
      <Touchable feedback="opacity">
        <Text style={styles.viewAllComments}>View all 13 comments</Text>
      </Touchable>
      <CommentInput />
    </View>
    <View style={styles.timeAgoWrapper}>
      <Text style={styles.timeAgo}>6 HOURS AGO</Text>
    </View>
  </View>
);

export default PhotoCard;
