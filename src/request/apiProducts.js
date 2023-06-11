import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from './constant';
import { buildUrl } from '../utils/common';

export const ProductApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Products'],
    endpoints: builder => ({
        getCategory: builder.query({
            query: () => `/products/categories`,
        }),
        getTrending: builder.query({
            query: () => `/products`,
        }),
        getWithCategory: builder.query({
            query: ({ name }) => `/products/category/${name}`,
        }),
        getSingleProduct: builder.query({
            query: ({ id }) => `/products/${id}`,
        }),
        getSearch: builder.query({
            query: params => buildUrl(`/products/search`, params),
        }),
    }),
});

export const {
    useGetCategoryQuery,
    useGetTrendingQuery,
    useGetWithCategoryQuery,
    useGetSingleProductQuery,
    useGetSearchQuery,
} = ProductApi;