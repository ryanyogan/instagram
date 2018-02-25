import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Touchable from '@appandflow/touchable';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { human, systemWeights } from 'react-native-typography';

import { makeCircle, makeHitSlop } from '../../utils/themes';
import { mockAvatar } from '../../utils/constants';

const styles = StyleSheet.create({
  root: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  userMetaWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  btnWrapper: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarWrapper: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImg: {
    ...makeCircle(40),
  },
  userInfoWrapper: {
    justifyContent: 'center',
    flex: 1,
    paddingLeft: 10,
  },
  username: {
    ...human.subheadObject,
  },
  location: {
    ...human.footnoteObject,
    ...systemWeights.light,
  },
});

const Header = ({
  avatar = mockAvatar,
  username = 'ryanyogan',
  location = 'Santa Barbara, CA',
}) => (
  <View style={styles.root}>
    <View style={styles.userMetaWrapper}>
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: avatar }} style={styles.avatarImg} />
      </View>
      <View style={styles.userInfoWrapper}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </View>
    <Touchable
      feedback="opacity"
      hitSlop={makeHitSlop(20)}
      style={styles.btnWrapper}
    >
      <MaterialCommunityIcons name="dots-horizontal" size={25} />
    </Touchable>
  </View>
);

export default Header;
