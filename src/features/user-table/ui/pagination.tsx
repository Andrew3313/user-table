'use client'

import { Button } from '@/shared/components'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface IPaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
	isPending: boolean
}

export function Pagination({
	currentPage,
	totalPages,
	onPageChange,
	isPending
}: IPaginationProps) {
	return (
		<div className='flex items-center justify-end gap-2 py-4'>
			<Button
				className='cursor-pointer disabled:cursor-not-allowed'
				variant='outline'
				size='sm'
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1 || isPending}
			>
				<ChevronLeft />
				<span className='sr-only'>Предыдущая страница</span>
			</Button>
			<span className='text-muted-foreground text-sm'>
				{currentPage} из {totalPages}
			</span>
			<Button
				className='cursor-pointer disabled:cursor-not-allowed'
				variant='outline'
				size='sm'
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages || isPending}
			>
				<ChevronRight />
				<span className='sr-only'>Следующая страница</span>
			</Button>
		</div>
	)
}
