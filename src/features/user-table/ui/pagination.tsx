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
				variant='outline'
				size='sm'
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1 || isPending}
			>
				<ChevronLeft className='h-4 w-4' />
				<span className='sr-only'>Предыдущая страница</span>
			</Button>
			<span className='text-muted-foreground text-sm'>
				{currentPage} из {totalPages}
			</span>
			<Button
				variant='outline'
				size='sm'
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages || isPending}
			>
				<ChevronRight className='h-4 w-4' />
				<span className='sr-only'>Следующая страница</span>
			</Button>
		</div>
	)
}
