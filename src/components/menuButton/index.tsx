import React, {useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';
import {colors} from '../../theme';
import {OptionIcon} from '../../assets';

interface Iprops {
  options: {
    label?: string | React.JSX.Element;
    onPress?: () => any;
    divider?: boolean;
  }[];
}

export function MenuButton({options}: Iprops) {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <>
      <TouchableOpacity onPress={showMenu}>
        <OptionIcon />
      </TouchableOpacity>

      <Menu visible={visible} onRequestClose={hideMenu}>
        {options?.map((data, index) => {
          if (data.divider) return <MenuDivider key={index} />;
          return (
            <MenuItem
              style={{borderBottomWidth: 0.4}}
              textStyle={{color: colors.black, textAlign: 'center'}}
              key={index}
              onPress={() => {
                hideMenu();
                data?.onPress && data.onPress();
              }}>
              {data.label ?? ''}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
