import React, {useCallback, useEffect, useState} from 'react';
import {Container, HomeCard} from '../../common';
import {Loader, TextField, TextView} from '../../components';
import styles from './styles';
import {SeacrhIcon} from '../../assets';
import {FlatList, View} from 'react-native';
import {useAuthContext} from '../../context';
import {getLeftOversByIdApi} from '../../api';
import {ILeftOver} from '../../interfaces';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {MainStackNavigationProps} from '../../navigation';
import {useDebounce} from '../../hooks';
import {Customer} from '../../constants';

export const Home = () => {
  const [authContext] = useAuthContext();
  const [leftOverData, setLeftOverData] = useState<ILeftOver[]>([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<MainStackNavigationProps>();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const isFocused = useIsFocused();

  const fetchLeftOvers = () => {
    setLoading(true);
    getLeftOversByIdApi(
      authContext?._id,
      authContext?.userType,
      debouncedSearchTerm,
    )
      .then(res => {
        setLoading(false);
        const {result} = res;
        setLeftOverData(result);
      })
      .catch(err => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isFocused && authContext?._id) {
      setLeftOverData([]);
      fetchLeftOvers();
    }

    return () => {};
  }, [isFocused, authContext, debouncedSearchTerm]);
  const _renderSearchBar = () => {
    return (
      <TextField
        label={
          authContext?.userType == Customer
            ? 'Search here by Brand Name'
            : 'Search here by Customer Name'
        }
        leading={<SeacrhIcon />}
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
    );
  };

  const _listEmptyComponent = () => {
    return (
      <View style={styles.emptryRecordView}>
        {loading ? <Loader /> : <TextView>No Record Found</TextView>}
      </View>
    );
  };

  const _renderCard = useCallback(() => {
    return (
      <FlatList
        ListEmptyComponent={_listEmptyComponent}
        showsVerticalScrollIndicator={false}
        data={leftOverData}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => (
          <HomeCard
            data={item}
            authContext={authContext}
            navigation={navigation}
          />
        )}
        style={styles.flatListContentContainer}
      />
    );
  }, [leftOverData, loading]);

  return (
    <Container styles={styles.container}>
      {_renderSearchBar()}
      {_renderCard()}
    </Container>
  );
};
