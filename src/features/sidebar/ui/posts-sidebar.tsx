'use client'

import { useUserPosts } from '@/entities/post/hooks'
import {
	Badge,
	ScrollArea,
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle
} from '@/shared/components'

interface PostsSidebarProps {
	userId: number | null
	isOpen: boolean
	onClose: () => void
}

export function PostsSidebar({ userId, isOpen, onClose }: PostsSidebarProps) {
	const { data, isLoading, isError, error } = useUserPosts(userId)

	return (
		<Sheet open={isOpen} onOpenChange={onClose}>
			<SheetContent
				side='right'
				className='flex w-full flex-col sm:max-w-md'
			>
				<SheetHeader className='px-4 pt-4'>
					<SheetTitle>Пользователь {userId}</SheetTitle>
					<SheetDescription>
						{'Посты выбранного пользователя'}
					</SheetDescription>
				</SheetHeader>
				<ScrollArea className='flex-1 overflow-y-auto px-4 pb-4'>
					{isLoading && (
						<div className='py-4 text-center'>
							Загрузка постов...
						</div>
					)}
					{isError && (
						<div className='py-4 text-center text-red-500'>
							{'Ошибка: '}
							{error?.message}
						</div>
					)}
					{data?.posts && data.posts.length > 0 ? (
						<div className='space-y-4'>
							{data.posts.map(post => (
								<div
									key={post.id}
									className='border p-4 shadow-sm'
								>
									<h3 className='mb-2 text-lg font-semibold'>
										{post.title}
									</h3>
									<p className='text-muted-foreground mb-3 text-sm'>
										{post.body}
									</p>
									<div className='mb-2 flex flex-wrap gap-2'>
										{post.tags.map(tag => (
											<Badge
												key={tag}
												variant='secondary'
											>
												{tag}
											</Badge>
										))}
									</div>
									<div className='text-xs text-gray-500'>
										Лайки: {post.reactions.likes}, Дизлайки:{' '}
										{post.reactions.dislikes}
									</div>
								</div>
							))}
						</div>
					) : (
						!isLoading &&
						!isError && (
							<div className='text-muted-foreground py-4 text-center'>
								Постов не найдено.
							</div>
						)
					)}
				</ScrollArea>
			</SheetContent>
		</Sheet>
	)
}
