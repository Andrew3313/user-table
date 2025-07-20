'use client'

import { IPost } from '../model'
import { Badge } from '@/shared/components'

interface IPostCardProps {
	post: IPost
}

export function PostCard({ post }: IPostCardProps) {
	return (
		<div className='border p-4 shadow-sm'>
			<h3 className='mb-2 text-lg font-semibold'>{post.title}</h3>
			<p className='text-muted-foreground mb-3 text-sm'>{post.body}</p>
			<div className='mb-2 flex flex-wrap gap-2'>
				{post.tags.map(tag => (
					<Badge key={tag} variant='secondary'>
						{tag}
					</Badge>
				))}
			</div>
			<div className='text-xs text-gray-500'>
				Лайки: {post.reactions.likes}, Дизлайки:{' '}
				{post.reactions.dislikes}
			</div>
		</div>
	)
}
