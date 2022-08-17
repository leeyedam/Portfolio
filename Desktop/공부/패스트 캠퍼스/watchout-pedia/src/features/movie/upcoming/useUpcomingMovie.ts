import { useQuery } from 'react-query';
import { upcomingApi } from '../../../apis/movieApi';
import { ListResponse, MovieDetail } from '../../../types';
import { AxiosError, AxiosResponse } from 'axios';

const useLatestMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('upcomingMovie', upcomingApi);
}

export default useLatestMovie;
