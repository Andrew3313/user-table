'use client'

import { UserTable } from '@/features/user-table/ui'
import { useCallback, useState } from 'react'

export function UserPanelWidget() {
	const [selectedUserId, setSelectedUserId] = useState<number | null>(null)

	const handleUserSelect = useCallback((userId: number) => {
		setSelectedUserId(userId)
	}, [])

	console.log(selectedUserId)

	return <UserTable onUserSelect={handleUserSelect} />
}
