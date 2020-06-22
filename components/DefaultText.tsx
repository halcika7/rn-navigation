import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
  },
});

interface Props {
  style?: { [key: string]: string | number };
}

const DefaultText: FC<Props> = ({ style = {}, children }) => (
  <Text style={{ ...styles.text, ...style }}>{children}</Text>
);

export default DefaultText;
