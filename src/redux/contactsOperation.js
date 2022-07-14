import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://62c6da0874e1381c0a6a9f47.mockapi.io/contacts' }),
    tagTypes: ['Contacts'],
   endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
     addContacts: builder.mutation({
       query: ({ name, phone }) => ({
         url: '/contacts',
         method: 'POST',
         body: {name, phone}
       }),
       invalidatesTags: ['Contacts'],
     }),
     deleteContacts: builder.mutation({
       query: (id) => ({
         url: `/contacts/${id}`,
         method: 'DELETE',
       }),
       invalidatesTags: ['Contacts'],
     })
  }),
})

export const { useGetContactsQuery, useAddContactsMutation, useDeleteContactsMutation } = contactsApi;
