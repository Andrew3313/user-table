import { IGetUsersParams, IUsersResponse } from '@/entities/user/model'
import { apiClient } from '@/shared/api'

class UserService {
	async getUsers({
		limit = 10,
		skip = 0,
		sortBy,
		order
	}: IGetUsersParams): Promise<IUsersResponse> {
		try {
			const queryParams: Record<string, string | number | boolean> = {
				limit,
				skip
			}
			if (sortBy) {
				queryParams.sortBy = sortBy
			}
			if (order) {
				queryParams.order = order
			}
			return apiClient<IUsersResponse>('/users', { queryParams })
		} catch (error) {
			console.error(error)
			throw error
		}
	}
}

export const userService = new UserService()
