'use client'

import { USER_TABLE_COLUMNS } from '../model'
import { Pagination } from './pagination'
import { SortableHeader } from './sortable-header'
import { TSortOrder, TUserSortKey, TUsersList } from '@/entities/user/model'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from '@/shared/components'
import { cn } from '@/shared/lib'

interface TableContentProps {
	users: TUsersList
	isPending: boolean
	page: number
	totalPages: number
	onSortChange: (key: TUserSortKey) => void
	onUserSelect: (userId: number) => void
	onPageChange: (page: number) => void
	sortBy?: TUserSortKey
	order?: TSortOrder
}

export function TableContent({
	users,
	isPending,
	sortBy,
	order,
	onSortChange,
	onUserSelect,
	page,
	totalPages,
	onPageChange
}: TableContentProps) {
	return (
		<>
			<div className='mb-4 overflow-x-auto'>
				<Table>
					<TableHeader>
						<TableRow>
							{USER_TABLE_COLUMNS.map(({ key, label }) => (
								<TableHead key={key}>
									<SortableHeader
										sortKey={key as TUserSortKey}
										currentSortKey={sortBy}
										currentSortOrder={order}
										onSortChange={onSortChange}
									>
										{label}
									</SortableHeader>
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map(user => (
							<TableRow
								key={user.id}
								onClick={() => onUserSelect(user.id)}
								className={cn(
									'cursor-pointer',
									isPending &&
										'pointer-events-none opacity-50'
								)}
							>
								<TableCell>{user.firstName}</TableCell>
								<TableCell>{user.lastName}</TableCell>
								<TableCell>{user.age}</TableCell>
								<TableCell>{user.gender}</TableCell>
								<TableCell>{user.email}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<div className='flex w-full justify-center'>
				<Pagination
					currentPage={page}
					totalPages={totalPages}
					onPageChange={onPageChange}
					isPending={isPending}
				/>
			</div>
		</>
	)
}
