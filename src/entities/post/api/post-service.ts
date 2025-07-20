import { IPostsResponse } from '../model'
import { apiClient } from '@/shared/api'

class PostService {
	async getUserPosts(userId: number): Promise<IPostsResponse> {
		try {
			return apiClient<IPostsResponse>(`/users/${userId}/posts`)
		} catch (error) {
			console.error(error)
			throw error
		}
	}
}

export const postService = new PostService()
