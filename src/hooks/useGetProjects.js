import axios from "axios"
import { useEffect, useState } from "react"

export const useGetProjects = ({ category }) => {
	const [projects, setProjects] = useState([])
	const [errorMessage, setErrorMessage] = useState("")

	useEffect(() => {
		const fetchProjects = async () => {
			const url = category
				? `${import.meta.env.VITE_BASE_URL}/osprojects/?category=${category}`
				: `${import.meta.env.VITE_BASE_URL}/osprojects/`

			try {
				const response = await axios.get(url)

				setProjects(response.data)
				setErrorMessage("")
			} catch (error) {
				setErrorMessage(error.message)
			}
		}

		fetchProjects()
	}, [category])

	return { projects, errorMessage }
}
