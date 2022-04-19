import {BaseUrl, Endpoint} from 'App/constants/handleRequest';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getStorageToken, setStorageToken} from 'Utils/helpers/storage';
import {getProfileSuccess} from 'Utils/stores/profile/profile.creator';
import {IAppState} from 'Utils/stores/state';

export const useCheckToken = () => {
  const [result, setresult] = useState({loading: true, resultCheck: false});
  const dispatch = useDispatch();
  const tokenAuth = useSelector(
    (state: IAppState) => state.loginState?.user?.access_token,
  );

  const checkToken = async () => {
    const getToken = getStorageToken();
    getToken.then((res: any) => {
      if (!res) {
        setresult({loading: false, resultCheck: false});
      } else {
        const apiUrl = BaseUrl.dev + Endpoint.profile;
        axios({
          method: 'get',
          url: apiUrl,
          headers: {
            Authorization: `Bearer ${res}`,
          },
        })
          .then(res => {
            if (res.data) {
              dispatch(getProfileSuccess(res.data.data));
              setresult({resultCheck: true, loading: false});
            }
          })
          .catch(_err => {
            setStorageToken(null);
            setresult({resultCheck: false, loading: false});
          });
      }
    });
  };

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenAuth]);

  return result;
};
