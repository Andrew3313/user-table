import { cn } from '../lib/css'

interface Props {
	className?: string
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
	className,
	children
}) => {
	return (
		<div className={cn('mx-auto max-w-[1560px]', className)}>
			{children}
		</div>
	)
}
