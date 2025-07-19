import { userService } from '../api'
import { TSortOrder, TUserSortKey } from '../model'
import { useQuery } from '@tanstack/react-query'

interface UseUsersParams {
	page: number
	limit: number
	sortBy?: TUserSortKey
	order?: TSortOrder
}

export function useUsers({ page, limit, sortBy, order }: UseUsersParams) {
	const skip = (page - 1) * limit
	return useQuery({
		queryKey: ['users', page, limit, sortBy, order],
		queryFn: () => userService.getUsers({ limit, skip, sortBy, order }),
		placeholderData: previousData => previousData
	})
}
