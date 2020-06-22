import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton as Button } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import colors from '../constants/colors';

interface Props {
  iconName: string;
  title: string;
  onPress: () => void;
  renderButtonElement: () => JSX.Element;
}

const HeaderButton = (props: Props) => {
  return (
    <Button
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : colors.primary}
    />
  );
};

export default HeaderButton;
