import { userService } from '@/entities/user/api'
import { UserPanelWidget } from '@/widgets/user-panel'
import { dehydrate, QueryClient } from '@tanstack/react-query'

export default async function Home() {
	const queryClient = new QueryClient()

	try {
		await queryClient.prefetchQuery({
			queryKey: ['users', 1, 10, null, null],
			queryFn: () => userService.getUsers({ limit: 10, skip: 0 })
		})
	} catch (error) {
		console.error('Ошибка предзагрузки пользователей:', error)
	}

	const dehydratedState = dehydrate(queryClient)

	return <UserPanelWidget dehydratedState={dehydratedState} />
}
