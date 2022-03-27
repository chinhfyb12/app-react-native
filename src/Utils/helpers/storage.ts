import AsyncStorage from '@react-native-async-storage/async-storage';

const tokenKeyName = 'token';
const authUserKeyName = 'authUser';
const i18nLocale = 'i18nLocale';
const refreshTokenName = 'refresh_token';

const getStorageToken = async () => AsyncStorage.getItem(tokenKeyName);

const getStorageAuthUser = async () => {
  const authUser = await AsyncStorage.getItem(authUserKeyName);
  JSON.parse(authUser || '');
};

const setStorageToken = async (token = null) => {
  if (token) {
    AsyncStorage.setItem(tokenKeyName, token);
  } else {
    AsyncStorage.removeItem(tokenKeyName);
  }
};

const getStorageRefreshToken = async () =>
  AsyncStorage.getItem(refreshTokenName);

const setStorageRefreshToken = async (refreshToken = null) => {
  if (refreshToken) {
    AsyncStorage.setItem(refreshTokenName, refreshToken);
  } else {
    AsyncStorage.removeItem(refreshTokenName);
  }
};

const setStorageAuthUser = async (authUser = null) => {
  if (authUser) {
    AsyncStorage.setItem(authUserKeyName, JSON.stringify(authUser));
  } else {
    AsyncStorage.removeItem(authUserKeyName);
  }
};

const clearStorage = () => {
  AsyncStorage.clear();
};

const clearStorageAuthUser = () => {
  AsyncStorage.removeItem(tokenKeyName);
  AsyncStorage.removeItem(authUserKeyName);
  AsyncStorage.removeItem(refreshTokenName);
};

const setLocale = async (locale: string) => {
  if (locale) {
    await AsyncStorage.setItem(i18nLocale, locale.slice(0, 2));
  } else {
    await AsyncStorage.removeItem(i18nLocale);
  }
};

const getLocale = async () => AsyncStorage.getItem(i18nLocale);

export {
  clearStorageAuthUser,
  getStorageToken,
  setStorageToken,
  setStorageAuthUser,
  getStorageAuthUser,
  setLocale,
  getLocale,
  clearStorage,
  setStorageRefreshToken,
  getStorageRefreshToken,
};
