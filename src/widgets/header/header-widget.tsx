import { ToggleTheme } from '@/shared/components'

export function HeaderWidget() {
	return (
		<header className='mb-6 flex flex-wrap items-center justify-center gap-4 px-4 pt-4'>
			<h1 className='text-3xl font-bold text-gray-800 transition-colors duration-300 dark:text-gray-100'>
				Пользователи
			</h1>

			<ToggleTheme />
		</header>
	)
}
