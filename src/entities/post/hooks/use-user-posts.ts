import { postService } from '../api'
import { useQuery } from '@tanstack/react-query'

export function useUserPosts(userId: number | null) {
	return useQuery({
		queryKey: ['userPosts', userId],
		queryFn: () => {
			if (!userId) {
				throw new Error('Не указан id пользователя')
			}
			return postService.getUserPosts(userId)
		},
		enabled: !!userId
	})
}
