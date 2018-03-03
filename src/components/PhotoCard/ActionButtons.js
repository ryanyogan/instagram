import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Touchable from '@appandflow/touchable';
import Ionicon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { makeHitSlop } from '../../utils/themes';

const styles = StyleSheet.create({
  root: {
    height: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  actionsWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  actionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionsSpacer: {
    flex: 1.4,
  },
  bookmarkWrapper: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class ActionButtons extends Component {
  getLikedIcons = () => {
    if (this.props.viewerLiked) {
      return <Ionicon name="ios-heart" size={30} color="red" />;
    }

    return <Ionicon name="ios-heart-outline" size={30} />;
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.actionsWrapper}>
          <Touchable
            onPress={this.props.onLikedPress}
            hitSlop={makeHitSlop(10)}
            feedback="opacity"
            style={styles.actionButton}
          >
            {this.getLikedIcons()}
          </Touchable>
          <Touchable
            hitSlop={makeHitSlop(10)}
            feedback="opacity"
            style={styles.actionButton}
          >
            <EvilIcons name="comment" size={35} />
          </Touchable>
          <Touchable
            hitSlop={makeHitSlop(10)}
            feedback="opacity"
            style={styles.actionButton}
          >
            <Ionicon name="ios-send-outline" size={35} />
          </Touchable>
        </View>
        <View style={styles.actionsSpacer} />
        <View />
        <Touchable feedback="opacity" style={styles.bookmarkWrapper}>
          <Ionicon name="ios-bookmark-outline" size={35} />
        </Touchable>
      </View>
    );
  }
}

export default ActionButtons;
