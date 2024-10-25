import {APIConfig} from './APIConfig';
import {Client} from './Client';

export const GetAddress = ({UserLatitude, UserLongitude}) => {
  return new Promise((resolve, reject) => {
    Client.get(`${APIConfig.FETCH_ADDRESS}${UserLatitude}&lon=${UserLongitude}`)
      .then(res => resolve(res.data))
      .catch(error => {
        reject(error);
      });
  });
};
