'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components'

export function LoadingState() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Загрузка пользователей...</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='flex h-40 items-center justify-center'>
					<div className='h-12 w-12 animate-spin rounded-full border-b-2 border-gray-900' />
				</div>
			</CardContent>
		</Card>
	)
}
