import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {HStack, VStack} from '@react-native-material/core';
import {Image, TextView} from '../../components';
import {colors} from '../../theme';
import {ILeftOver} from '../../interfaces';
import {EditIcon, ExpiryIcon, QuantityIcon, UserIcon} from '../../assets';
import moment from 'moment';
import {Button} from '..';
import {Bartender} from '../../constants';
import {MainStackNavigationProps} from '../../navigation';

interface HomeCard {
  data: ILeftOver;
  authContext: any;
  navigation: MainStackNavigationProps;
}

export const HomeCard = ({data, authContext, navigation}: HomeCard) => {
  const _renderDataWithIcons = (icon: React.JSX.Element, text: string) => {
    return (
      <HStack style={styles.iconStack}>
        {icon} <TextView style={styles.valText}>{text}</TextView>
      </HStack>
    );
  };

  const _renderEditBtn = () => {
    if (
      authContext?.userType == Bartender &&
      data.uploadedBy == authContext?._id
    ) {
      return (
        <View style={styles.footerBtn}>
          <Button
            btnType="buttonWithIcon"
            style={styles.editBtn}
            onPress={() => {
              navigation.navigate('editLeftOver', {data});
            }}
            label="Edit"
            rightIcon={<EditIcon />}
          />
        </View>
      );
    }
    return <></>;
  };

  const _renderBottomView = () => {
    return (
      <VStack style={styles.bottomView}>
        <TextView style={styles.brandName}>{data.brandName}</TextView>
        <HStack justify="evenly" style={styles.iconsMainStack}>
          {_renderDataWithIcons(
            <UserIcon color={colors.skyBlue} />,
            data.customerName ?? '',
          )}
          {_renderDataWithIcons(
            <QuantityIcon fill={colors.skyBlue} />,
            data.quantity ?? '',
          )}
          {_renderDataWithIcons(
            <ExpiryIcon fill={colors.skyBlue} />,
            data.expiryDate ? moment(data?.expiryDate).format('DD/MM/YY') : '',
          )}
        </HStack>
        <VStack style={styles.comment}>
          <TextView style={styles.commentHeader}>Comments:</TextView>
          <TextView textAlign="center" style={styles.commentText}>
            {data.comments}
          </TextView>
        </VStack>
        {_renderEditBtn()}
      </VStack>
    );
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('imagViewer', {url: data.image});
        }}>
        <Image useFastImage uri={data.image} style={styles.image} />
      </TouchableOpacity>
      {_renderBottomView()}
    </View>
  );
};
