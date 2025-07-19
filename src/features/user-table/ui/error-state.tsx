'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components'

interface IErrorStateProps {
	message?: string
}

export function ErrorState({ message }: IErrorStateProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Ошибка загрузки пользователей</CardTitle>
			</CardHeader>
			<CardContent>
				<p className='text-red-500'>
					{'Произошла ошибка: '}
					{message}
				</p>
			</CardContent>
		</Card>
	)
}
