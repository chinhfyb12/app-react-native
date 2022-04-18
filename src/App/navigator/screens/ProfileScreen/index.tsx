import React from 'react';
import {useSelector} from 'react-redux';
import {IAppState} from 'Utils/stores/state';
import InformationScreen from './InformationScreen';
import * as _ from 'lodash';
import NotLogin from './NotLogin';

const ProfileScreen = () => {
  const {profile} = useSelector((state: IAppState) => state.profileState);
  return <>{_.isEmpty(profile) ? <NotLogin /> : <InformationScreen />}</>;
};

export default ProfileScreen;
