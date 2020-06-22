import React, { FC } from 'react';
import { View, Text, Switch, StyleSheet, Platform } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15,
  },
});

const FilterSwitch: FC<{
  label: string;
  value: boolean;
  setValue: (val: boolean) => void;
}> = ({ label, value, setValue }) => (
  <View style={styles.filterContainer}>
    <Text>{label}</Text>
    <Switch
      value={value}
      onValueChange={setValue}
      trackColor={{ true: colors.primary, false: 'default' }}
      thumbColor={Platform.OS === 'android' ? colors.primary : 'default'}
    />
  </View>
);

export default FilterSwitch;
