// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'f877bea268msh061a527e3d8b062p17f85fjsnb74d7871ea3d',
//     'X-RapidAPI-Host': 'spotify117.p.rapidapi.com'
//   }
// };

// fetch('https://spotify117.p.rapidapi.com/new_releases/?country=us', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyNewApi = createApi({
  reducerPath: 'spotifyApiNew',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify117.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'f877bea268msh061a527e3d8b062p17f85fjsnb74d7871ea3d'
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNewRealeases: builder.query({
      query: () => '/new_releases/?country=in',
    }),
    // getTop20MonthlyListenersSongs: builder.query({
    //   query: () => '/top_20_by_monthly_listeners',
    // }),
  }),
});

export const { useGetNewRealeasesQuery } = spotifyNewApi;
// export const { useGetTop20MonthlyListenersSongsQuery } = spotifyApi;
