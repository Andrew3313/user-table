import { ToggleTheme } from '@/shared/components'

export function Header() {
	return (
		<header className='mb-8 flex flex-col gap-4 px-4 pt-4'>
			<div className='flex flex-wrap items-center justify-center gap-4'>
				<h1 className='text-4xl font-bold text-gray-800 transition-colors duration-300 dark:text-gray-100'>
					Таблица пользователей
				</h1>

				<ToggleTheme />
			</div>
			<h2 className='text-center text-gray-600 transition-colors duration-300 dark:text-gray-300'>
				Нажмите на пользователя, чтобы посмотреть его посты
			</h2>
		</header>
	)
}
