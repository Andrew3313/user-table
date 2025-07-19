type RequestOptions<
	TBody = unknown,
	TQueryParams extends Record<string, string | number | boolean> = Record<
		string,
		string | number | boolean
	>
> = {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
	body?: TBody
	headers?: HeadersInit
	queryParams?: TQueryParams
	nextOptions?: NextFetchRequestConfig
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://dummyjson.com'

export async function apiClient<
	TResponse = unknown,
	TBody = unknown,
	TQueryParams extends Record<string, string | number | boolean> = Record<
		string,
		string | number | boolean
	>
>(
	endpoint: string,
	options: RequestOptions<TBody, TQueryParams> = {}
): Promise<TResponse> {
	const {
		method = 'GET',
		body,
		headers = {},
		queryParams,
		nextOptions
	} = options

	const url = new URL(`${BASE_URL}${endpoint}`)

	if (queryParams) {
		Object.entries(queryParams).forEach(([key, value]) => {
			url.searchParams.append(key, String(value))
		})
	}

	const res = await fetch(url.toString(), {
		method,
		headers: {
			'Content-Type': 'application/json',
			...headers
		},
		body: body ? JSON.stringify(body) : undefined,
		...('nextOptions' in options ? { next: nextOptions } : {})
	})

	if (!res.ok) {
		throw new Error(`Ошибка ${res.status}`)
	}

	return res.json()
}
