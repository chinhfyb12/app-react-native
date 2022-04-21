import {useNavigation} from '@react-navigation/native';
import Background2 from 'App/assets/svg-components/Background2';
import {textStyles} from 'App/theme/textStyles';
import {Box, Center, Modal, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import Spinner from 'react-native-spinkit';
import BackIcon from 'App/assets/svg-components/BackIcon';
import InputCustom from 'App/components/Input';
import ButtonCustom from 'App/components/Button';
import SendIcon from 'App/assets/svg-components/SendIcon';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ColorStyles} from 'App/theme/colors';

interface IChats {
  _id: string;
  sender_name?: string;
  sender_id?: string;
  text?: string;
}

const ChatScreen = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const heightScreen = Dimensions.get('window').height;

  const tempData: IChats[] = [
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '5',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
    {
      _id: '1',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'Hello',
    },
    {
      _id: '2',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Hi',
    },
    {
      _id: '3',
      sender_name: 'Nguyễn Văn A',
      sender_id: '1',
      text: 'How are you?',
    },
    {
      _id: '4',
      sender_name: 'Nguyễn Văn B',
      sender_id: '2',
      text: 'Fine',
    },
  ];

  const renderItemChat = (item: IChats) => (
    <Text style={styles.itemChat}>{item.text}</Text>
  );

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        <KeyboardAwareScrollView>
          <Box
            flex={1}
            style={{height: heightScreen - getStatusBarHeight() * 3}}>
            <Box style={{flex: 1}}>
              <FlatList
                data={tempData}
                renderItem={({item}) => renderItemChat(item)}
                keyExtractor={item => item._id}
              />
            </Box>
            <Box display="flex" flexDirection="row" width="100%">
              <Box flex={1}>
                <InputCustom />
              </Box>
              <Box
                width={widthPercentageToDP(11)}
                height={widthPercentageToDP(11)}>
                <TouchableOpacity
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <SendIcon />
                </TouchableOpacity>
              </Box>
            </Box>
          </Box>
        </KeyboardAwareScrollView>
        {/* <Modal>
          <Spinner
            isVisible
            size={40}
            color={ColorStyles.primary}
            type="9CubeGrid"
          />
        </Modal> */}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F7F8FE',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    opacity: 0.3,
  },
  itemChat: {
    display: 'flex',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: ColorStyles.primary,
    width: 'fit-content',
  },
});

export default ChatScreen;
