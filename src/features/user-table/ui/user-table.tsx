'use client'

import { USERS_PER_PAGE } from '../model'
import { ErrorState } from './error-state'
import { LoadingState } from './loading-state'
import { TableContent } from './table-content'
import { useUsers } from '@/entities/user/hooks'
import { TSortOrder, TUserSortKey } from '@/entities/user/model'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components'
import { useState, useTransition } from 'react'

interface IUserTableProps {
	onUserSelect: (userId: number) => void
}

export function UserTable({ onUserSelect }: IUserTableProps) {
	const [page, setPage] = useState(1)
	const [sortBy, setSortBy] = useState<TUserSortKey>()
	const [order, setOrder] = useState<TSortOrder>()
	const [isPending, startTransition] = useTransition()

	const { data, isLoading, isError, error } = useUsers({
		page,
		limit: USERS_PER_PAGE,
		sortBy,
		order
	})

	const totalUsers = data?.total || 0
	const totalPages = Math.ceil(totalUsers / USERS_PER_PAGE)

	const handleSortChange = (newSortKey: TUserSortKey) => {
		startTransition(() => {
			if (sortBy === newSortKey) {
				setOrder(order === 'asc' ? 'desc' : 'asc')
			} else {
				setSortBy(newSortKey)
				setOrder('asc')
			}
			setPage(1)
		})
	}

	const handlePageChange = (newPage: number) => {
		startTransition(() => {
			setPage(newPage)
		})
	}

	if (isLoading && !data && !isPending) {
		return <LoadingState />
	}

	if (isError) {
		return <ErrorState message={error?.message} />
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Список пользователей</CardTitle>
			</CardHeader>
			<CardContent>
				<TableContent
					users={data?.users || []}
					isPending={isPending}
					sortBy={sortBy}
					order={order}
					onSortChange={handleSortChange}
					onUserSelect={onUserSelect}
					page={page}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			</CardContent>
		</Card>
	)
}
