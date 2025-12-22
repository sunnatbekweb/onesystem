import axios from "axios"
import { useEffect, useState } from "react"

export const useGetCategories = () => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_BASE_URL}/categories/`
				)
				setCategories(response.data)
			} catch (error) {
				console.error(error)
			}
		}

		fetchCategories()
	}, [])

	return { categories }
}
