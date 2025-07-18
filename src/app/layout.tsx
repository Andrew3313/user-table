import './globals.css'
import { Container } from '@/shared/ui'
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
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>
				{/* <Header /> */}
				<main className='relative mb-4 flex-grow px-2'>
					<Container>{children}</Container>
				</main>
				{/* <Footer /> */}
			</body>
		</html>
	)
}
