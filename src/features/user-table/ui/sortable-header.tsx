'use client'

import { TSortOrder, TUserSortKey } from '@/entities/user/model'
import { Button } from '@/shared/components'
import { ArrowUp, ArrowDown, ArrowUpDown } from 'lucide-react'
import type React from 'react'

interface ISortableHeaderProps {
	sortKey: TUserSortKey
	currentSortKey: TUserSortKey | undefined
	currentSortOrder: TSortOrder | undefined
	onSortChange: (key: TUserSortKey) => void
	children: React.ReactNode
}

export function SortableHeader({
	children,
	sortKey,
	currentSortKey,
	currentSortOrder,
	onSortChange
}: ISortableHeaderProps) {
	const isActive = currentSortKey === sortKey
	const isAsc = isActive && currentSortOrder === 'asc'

	return (
		<Button
			variant='ghost'
			onClick={() => onSortChange(sortKey)}
			className='flex h-auto items-center gap-1 px-2 py-1'
		>
			{children}
			{isActive ? (
				isAsc ? (
					<ArrowUp className='ml-2 h-4 w-4' />
				) : (
					<ArrowDown className='ml-2 h-4 w-4' />
				)
			) : (
				<ArrowUpDown className='ml-2 h-4 w-4 opacity-50' />
			)}
			<span className='sr-only'>Отсортировать по {sortKey}</span>
		</Button>
	)
}
