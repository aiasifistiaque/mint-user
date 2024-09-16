import { BASE_LIMIT } from '../constants';
import mainApi from './mainApi';

export const userApi = mainApi.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		getCount: builder.query({
			query: ({ path, filters = {} }: { path: string; filters?: {} }) => ({
				url: `${path}/get/count`,
				params: { ...filters },
			}),
			providesTags: (_result, _error, { path }) => [path],
		}),

		getAll: builder.query({
			query: ({
				sort = '-createdAt',
				page = 1,
				limit = BASE_LIMIT,
				search = '',
				isActive,
				filters = {},
				path,
			}) => ({
				url: path,
				params: { sort, page, limit, search, isActive, ...filters },
			}),
			providesTags: (_result, _error, { path }) => [path],
		}),

		getById: builder.query({
			query: ({ path, id, invalidate = [] }): any => `${path}/${id}?invalidate=${invalidate}`,
			providesTags: (_result, _error, { path, invalidate = [] }) => [path, ...invalidate],
		}),

		post: builder.mutation({
			query: ({ path, body }): any => ({
				url: path,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: (_result, _error, { path, invalidate = [] }) => [
				'filters',
				path,
				...invalidate,
			],
		}),
	}),
});

export const { useGetByIdQuery, useGetAllQuery, usePostMutation, useGetCountQuery } = userApi;
