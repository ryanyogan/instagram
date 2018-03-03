import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { human, iOSColors } from 'react-native-typography';
import Touchable from '@appandflow/touchable';
import { graphql } from 'react-apollo';
import { defaultDataIdFromObject } from 'apollo-cache-inmemory';

import Header from './Header';
import ActionButtons from './ActionButtons';
import Meta from './Meta';
import { CommentInput } from '../TextInputs';
import { likePhotoMutation } from '../../graphql/mutations';
import { FeedsPhotoFragment } from '../../screens/Feeds/fragments';

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

class PhotoCard extends Component {
  onLikedPress = () => this.props.onLikedPhotoMutation();

  render() {
    return (
      <View style={styles.root}>
        <Header />
        <Image
          style={styles.img}
          source={{
            uri: this.props.data.imageUrl,
          }}
        />
        <ActionButtons
          viewerLiked={this.props.data.viewerLiked}
          onLikedPress={this.onLikedPress}
        />
        <Meta caption={this.props.data.caption} />
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
  }
}

export default graphql(likePhotoMutation, {
  props: ({ mutate, ownProps }) => ({
    onLikedPhotoMutation: () =>
      mutate({
        variables: {
          photoId: ownProps.data.id,
        },
        update: (store, { data: { likePhoto } }) => {
          const id = defaultDataIdFromObject({
            __typename: 'Photo',
            id: ownProps.data.id,
          });

          const photo = store.readFragment({
            id,
            fragment: FeedsPhotoFragment,
          });

          store.writeFragment({
            id,
            fragment: FeedsPhotoFragment,
            data: {
              ...photo,
              viewerLiked: likePhoto,
            },
          });
        },
      }),
  }),
})(PhotoCard);
