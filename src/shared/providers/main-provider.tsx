'use client'

import { TanstackQueryProvider } from './tanstack-query-provider'
import { ThemeProvider } from './theme-provider'
import { type PropsWithChildren } from 'react'

export function MainProvider({ children }: PropsWithChildren<unknown>) {
	return (
		<TanstackQueryProvider>
			<ThemeProvider
				attribute='class'
				defaultTheme='dark'
				enableSystem
				disableTransitionOnChange
				storageKey='user-table-theme'
			>
				{children}
			</ThemeProvider>
		</TanstackQueryProvider>
	)
}
