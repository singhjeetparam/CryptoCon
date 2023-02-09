import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'd83895413amsh0d053cfa54a14e0p10b92cjsnf6c9002a5090'
 
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';



const createRequest = (url) => ({url, headers : cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (currencyUuid) => createRequest(`/coin/${currencyUuid}`)
        }),
        getCryptoHistory: builder.query({
            query: ({currencyUuid, timePeriod}) => createRequest(`/coin/${currencyUuid}/history?timePeriod=${timePeriod}`)
           
        }),
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery
} = cryptoApi;