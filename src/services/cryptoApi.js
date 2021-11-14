//this is little complicated to understand ....(just requesting query from rapid api...standard process)
//consider this as a blackbox which return/exports something which is used in components..
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f317ebd4b3msh25f937d11c94c78p171401jsn1734573d2ec2'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', //name
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),

        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),

        getExchanges: builder.query({
            query: () => createRequest(`/exchanges`),
        }),
    })
})

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetExchangesQuery
} = cryptoApi; //this runs cryptoApi and stores result in useGetCryptosQuery
