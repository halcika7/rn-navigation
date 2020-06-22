import React, { FC } from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

interface Props {
  title?: string;
  iconName?: string;
  onPress: () => void;
}

export const headerButton: FC<Props> = ({
  title = 'Menu',
  iconName = 'ios-menu',
  onPress,
}) => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title={title} iconName={iconName} onPress={onPress} />
  </HeaderButtons>
);
