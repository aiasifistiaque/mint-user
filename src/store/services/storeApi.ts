// import { BASE_LIMIT } from '../constants';
import mainApi from './mainApi';

export const storeApi = mainApi.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		getStore: builder.query({
			query: () => ({
				url: `/store`,
			}),

			// providesTags: (_result, _error, { path }) => [path],
		}),
		getAllStore: builder.query({
			query: () => ({
				url: `/store/hongo`,
			}),
		})
	}),
});

export const { useGetStoreQuery, useGetAllStoreQuery } = storeApi;
