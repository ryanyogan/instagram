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

const PhotoCard = props => (
  <View style={styles.root}>
    <Header />
    <Image
      style={styles.img}
      source={{
        uri: props.data.imageUrl,
      }}
    />
    <ActionButtons />
    <Meta caption={props.data.caption} />
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
