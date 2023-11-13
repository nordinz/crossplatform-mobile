import { createApi } from '@reduxjs/toolkit/query/react';
import { db } from '../../../firebase-config';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';

const firebaseBaseQuery = async ({
  url,
  method,
  body,
  id,
}: {
  baseUrl?: string;
  url: string;
  method: string;
  body?: any;
  id?: string;
}) => {
  console.log(method);

  switch (method) {
    case 'GET':
      const snapshot = await getDocs(collection(db, url));
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      return { data };
    case 'POST':
      const docRef = await addDoc(collection(db, url), body);
      return { data: { id: docRef.id, ...body } };
  }
};

export const postsApi = createApi({
  tagTypes: ['Posts'],
  reducerPath: 'postsApi',
  baseQuery: firebaseBaseQuery,
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: ({ post }) => ({
        baseUrl: '',
        url: 'posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Posts'],
    }),
    getPosts: builder.query({
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
      providesTags: ['Posts'],
    }),
  }),
});

export const { useCreatePostMutation, useGetPostsQuery } = postsApi;
