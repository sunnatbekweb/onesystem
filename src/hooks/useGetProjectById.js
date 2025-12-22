import axios from "axios"
import { useEffect, useState } from "react"

export const useGetProjectById = ({ id }) => {
	const [project, setProject] = useState({})

	useEffect(() => {
		const fetchProject = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_BASE_URL}/osprojects/${id}/`
				)

				setProject(response.data)
			} catch (e) {
				console.error(e)
			}
		}

		fetchProject()
	}, [id])

	return { project }
}
