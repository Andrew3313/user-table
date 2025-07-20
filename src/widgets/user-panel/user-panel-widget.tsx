'use client'

import { PostsSidebar } from '@/features/sidebar/ui'
import { UserTable } from '@/features/user-table/ui'
import { HydrationBoundary } from '@tanstack/react-query'
import { useCallback, useState } from 'react'

interface IUserPanelWidgetProps {
	dehydratedState: unknown
}

export function UserPanelWidget({ dehydratedState }: IUserPanelWidgetProps) {
	const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	const handleUserSelect = useCallback((userId: number) => {
		setSelectedUserId(userId)
		setIsSidebarOpen(true)
	}, [])

	const handleSidebarClose = useCallback(() => {
		setIsSidebarOpen(false)
		setSelectedUserId(null)
	}, [])

	return (
		<HydrationBoundary state={dehydratedState}>
			<UserTable onUserSelect={handleUserSelect} />
			<PostsSidebar
				userId={selectedUserId}
				isOpen={isSidebarOpen}
				onClose={handleSidebarClose}
			/>
		</HydrationBoundary>
	)
}
