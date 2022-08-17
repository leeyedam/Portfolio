import axiosInstance from './index'

export const latestApi = ()=> axiosInstance.get('/tv/latest');

export const airingTodayApi = ()=> axiosInstance.get('/tv/airing_today');

export const onTheAirApi = ()=> axiosInstance.get('/tv/on_the_air');

export const popularApi = ()=> axiosInstance.get('/tv/popular');

export const topRatedApi = ()=> axiosInstance.get('/tv/top_rated');

export const detailApi = (tvId:string)=> axiosInstance.get(`/tv/${tvId}`);

export const similarApi = (tvId:string)=> axiosInstance.get(`/movie/${tvId}/similar`);

export const searchApi = (query:string)=> axiosInstance.get(`/search/tv?query=${query}`);