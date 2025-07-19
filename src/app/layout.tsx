import './globals.css'
import { Header } from '@/features/header'
import { Container } from '@/shared/components'
import { MainProvider } from '@/shared/providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
	subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
	title: 'Таблица пользователей',
	description: ''
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
				<MainProvider>
					<Header />
					<main className='relative mb-4 flex-grow px-2'>
						<Container>{children}</Container>
					</main>
					{/* <Footer /> */}
				</MainProvider>
			</body>
		</html>
	)
}
