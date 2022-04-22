import Background2 from 'App/assets/svg-components/Background2';
import {Box, Center, Modal} from 'native-base';
import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {heightPercentageToDP, widthPercentageToDP} from 'Utils/helpers';
import Spinner from 'react-native-spinkit';
import InputCustom from 'App/components/Input';
import SendIcon from 'App/assets/svg-components/SendIcon';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {ColorStyles} from 'App/theme/colors';
import {IAppState} from 'Utils/stores/state';
import {
  addChatRequest,
  clearChat,
  getChatRequest,
} from 'Utils/stores/chat/chat.creator';
import {Controller, useForm} from 'react-hook-form';
import {IChat} from 'Utils/stores/chat/chat.dto';
import {io} from 'socket.io-client';
import {textStyles} from 'App/theme/textStyles';
import ButtonCustom from 'App/components/Button';
import {useNavigation} from '@react-navigation/native';
import {NameScreen} from 'App/constants';
import {BaseUrl} from 'App/constants/handleRequest';

const ChatScreen = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef<any>();
  const {control, setValue, handleSubmit} = useForm();
  const heightScreen = Dimensions.get('window').height;
  const navigation = useNavigation<any>();

  const {loading, chat} = useSelector((state: IAppState) => state.chatState);
  const {profile} = useSelector((state: IAppState) => state.profileState);

  const [conversation, setConversation] = useState<IChat[]>([]);
  const [arrivalMsg, setArrivalMsg] = useState<any>();

  const socket = useRef<any>();

  const renderItemChat = (item: IChat) => (
    <View
      style={[
        styles.itemChat,
        {
          alignSelf:
            item.sender_id === profile?._id ? 'flex-end' : 'flex-start',
          backgroundColor:
            item.sender_id === profile?._id ? ColorStyles.primary : '#f5f5f5',
        },
      ]}>
      <Text style={{color: item.sender_id === profile?._id ? '#fff' : '#000'}}>
        {item.text}
      </Text>
    </View>
  );

  useEffect(() => {
    dispatch(getChatRequest(profile?._id || ''));
    return () => {
      dispatch(clearChat());
    };
  }, []);

  useEffect(() => {
    setConversation(chat);
  }, [chat]);

  useEffect(() => {
    socket.current = io(BaseUrl.dev);
    return () => {
      handleLeaveRoom();
    };
  }, []);

  useEffect(() => {
    arrivalMsg &&
      profile?._id !== arrivalMsg?.sender_id &&
      setConversation(prevConversations => [...prevConversations, arrivalMsg]);
  }, [arrivalMsg, profile]);

  useEffect(() => {
    socket.current.on('getConversations', (newMsgSocket: IChat) => {
      if (newMsgSocket) {
        setArrivalMsg({
          ...newMsgSocket,
        });
      }
    });
  }, []);

  useEffect(() => {
    if (profile?._id) {
      let dataUser = {
        userId: profile?._id,
        roomId: profile?._id,
        userName: profile.name,
      };
      //join and get user in room
      socket.current.emit('addUser', dataUser);
    }
  }, [profile]);

  const handleLeaveRoom = () => {
    let dataUser = {
      userId: profile?._id,
      roomId: profile?._id,
    };
    socket.current.emit('leaveRoom', dataUser);
  };

  const onSendMsg = (value: any) => {
    const chat: IChat = {
      sender_id: profile?._id || '',
      customer_name: profile?.name || '',
      customer_avt: profile?.avt_url || '',
      text: value.msg,
      room_id: profile?._id || '',
    };
    dispatch(addChatRequest(chat));
    setValue('msg', '');
    socket.current.emit('msgToServer', chat);
    setConversation([...conversation, chat]);
  };

  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background2 />
      </View>
      <SafeAreaView style={{flex: 1, width: '100%'}}>
        {profile ? (
          <>
            <Box
              flex={1}
              style={{height: heightScreen - getStatusBarHeight() * 3}}>
              <Box
                style={{
                  flex: 1,
                  paddingHorizontal: widthPercentageToDP(2),
                  paddingVertical: heightPercentageToDP(1),
                }}>
                <FlatList
                  ref={ref => (scrollRef.current = ref)}
                  showsVerticalScrollIndicator={false}
                  data={conversation}
                  onContentSizeChange={() =>
                    scrollRef.current?.scrollToEnd({animated: false})
                  }
                  renderItem={({item}) => renderItemChat(item)}
                  keyExtractor={(_item, index) => index.toString()}
                  onLayout={() =>
                    scrollRef.current?.scrollToEnd({animated: false})
                  }
                />
              </Box>
              <Box display="flex" flexDirection="row" width="100%">
                <Box flex={1}>
                  <Controller
                    control={control}
                    name="msg"
                    render={({field: {onChange, value}}) => (
                      <InputCustom
                        onChangeText={onChange}
                        value={value}
                        placeholder="Abc"
                      />
                    )}
                  />
                </Box>
                <Box
                  width={widthPercentageToDP(11)}
                  height={widthPercentageToDP(11)}>
                  <TouchableOpacity
                    onPress={handleSubmit(onSendMsg)}
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
            <Modal isOpen={loading}>
              <Spinner
                isVisible
                size={40}
                color={ColorStyles.primary}
                type="9CubeGrid"
              />
            </Modal>
          </>
        ) : (
          <Box flex={1} alignItems="center" justifyContent="center" px={4}>
            <Center>
              <Text style={[textStyles.p, {textAlign: 'center'}]}>
                Bạn chưa đăng nhập. Hãy đăng nhập hoặc tạo tài khoản để bắt đầu
                cuộc trò chuyện với chúng tôi
              </Text>
            </Center>
            <Center mt={2}>
              <ButtonCustom
                onPress={() => navigation.navigate(NameScreen.profile_screen)}
                title="Tiếp tục"
              />
            </Center>
          </Box>
        )}
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
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 5,
    borderRadius: 15,
    maxWidth: '80%',
  },
});

export default ChatScreen;
