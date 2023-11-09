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
    case 'PUT':
      if (!id || !body) {
        throw new Error('Id måste skickas och namn måste fyllas i!');
      }
      await updateDoc(doc(db, url, id), body);
      return { data: body };
    case 'DELETE':
      if (!id) {
        throw new Error('Id måste skickas');
      }
      await deleteDoc(doc(db, url, id));
      return { data: { id } };
    default:
      throw new Error(`Unhandled method ${method}`);
  }
};

export const usersApi = createApi({
  tagTypes: ['Users'],
  reducerPath: 'usersApi',
  baseQuery: firebaseBaseQuery,
  endpoints: (builder) => ({
    updateUser: builder.mutation({
      query: ({ user }) => {
        return {
          baseUrl: '',
          url: 'users',
          method: 'PUT',
          body: user,
          id: user.id,
        };
      },
      invalidatesTags: ['Users'],
    }),
    createUser: builder.mutation({
      query: ({ user }) => ({
        baseUrl: '',
        url: 'users',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
    getUsers: builder.query({
      query: () => ({
        url: 'users',
        method: 'GET',
      }),
      providesTags: ['Users'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: 'users',
        id: id,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = usersApi;
