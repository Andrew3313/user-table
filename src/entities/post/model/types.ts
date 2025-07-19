export type TPostsList = IPost[]

export interface IPost {
	id: number
	title: string
	body: string
	userId: number
	tags: string[]
	reactions: {
		likes: number
		dislikes: number
	}
}
