import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseUrl = createApi({
  reducerPath: 'user/register',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({}),
});
