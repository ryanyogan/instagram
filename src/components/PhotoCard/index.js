import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import Header from './Header';
import ActionButtons from './ActionButtons';

const styles = StyleSheet.create({
  root: {
    minHeight: 600,
    paddingBottom: 10,
  },
  img: {
    flex: 1,
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
  </View>
);

export default PhotoCard;
