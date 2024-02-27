import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './dropdown.styles';
import {colors} from '../../theme';
import {TextView} from '..';

interface IDropdown {
  placeholder?: string;
  setItems?: React.Dispatch<
    React.SetStateAction<
      {
        label: string;
        value: string;
      }[]
    >
  >;
  setValue: (e: string) => any;
  items?: {
    label: string;
    value: string;
  }[];
  value: string;
  error?: string;
  listMode?: 'DEFAULT' | 'FLATLIST' | 'MODAL' | 'SCROLLVIEW';
  searchPlaceholder?: string;
}

export function Dropdown({
  placeholder,
  items,
  setItems,
  value,
  setValue,
  error,
  listMode,
  searchPlaceholder,
}: IDropdown) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropDownPicker
        zIndex={100}
        open={open}
        value={value}
        items={items ?? []}
        setOpen={setOpen}
        setValue={e => {
          setValue(e(''));
        }}
        setItems={setItems}
        placeholder={placeholder}
        listMode={listMode ?? 'MODAL'}
        searchable
        searchPlaceholder={searchPlaceholder ?? 'Type Something...'}
        style={[
          styles.border,
          {
            marginVertical: 10,
            paddingVertical: 10,
            height: 50,
          },
        ]}
        searchContainerStyle={{padding: 10, borderBottomWidth: 0.4}}
        dropDownContainerStyle={[styles.border]}
        searchTextInputStyle={styles.searchTextInputStyle}
        searchPlaceholderTextColor={colors.black}
        listItemLabelStyle={{
          fontSize: 16,
        }}
        itemSeparator
        itemSeparatorStyle={{height: 0.4}}
      />
      {error && <TextView style={styles.error}>{error}</TextView>}
    </>
  );
}
