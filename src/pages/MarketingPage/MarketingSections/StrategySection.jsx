import AOS from "aos"
import "aos/dist/aos.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { IoGrid } from "react-icons/io5"
import { Link } from "react-router-dom"
import "./StrategySection.css"
import React from "react"

export default function StrategySection() {
	const [projects, setProjects] = useState([])
	const [errorMessage, setErrorMessage] = useState("")
	const [categories, setCategories] = useState([])
	const [categoryTab, setCategoryTab] = useState("")

	const getProjects = async (category = "") => {
		try {
			const url = category
				? `${import.meta.env.VITE_BASE_URL}/osprojects/?category=${category}`
				: `${import.meta.env.VITE_BASE_URL}/osprojects/`

			const response = await axios.get(url)
			setProjects(response.data)
			setErrorMessage("")
		} catch (error) {
			setErrorMessage(error.message)
		}
	}

	const getCategories = async () => {
		try {
			const response = await axios.get(
				`${import.meta.env.VITE_BASE_URL}/categories/`
			)
			setCategories(response.data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		AOS.init({ duration: 350, once: false })
		getCategories()
		getProjects()
	}, [])

	useEffect(() => {
		getProjects(categoryTab)
	}, [categoryTab])

	return (
		<section className="strategy bg-[#EAEAEA] pt-[214px] md:pt-[214px] lg:pt-[130px] xl:pt-[130px]">
			<div className="container strategy__container px-[16px] md:px-[36px] lg:px-[48px]">
				<div className="py-16">
					<h2 className="text-4xl font-bold mb-10">Bizning loyihalar</h2>

					<div className="mb-9 flex items-center gap-4 md:gap-6 overflow-x-auto">
						<button
							onClick={() => setCategoryTab("")}
							className={`tab_button ${categoryTab === "" ? "active_tab" : ""}`}
						>
							<IoGrid className="text-2xl text-gray-500" />
						</button>

						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setCategoryTab(category.id)}
								className={`tab_button ${
									categoryTab === category.id ? "active_tab" : ""
								}`}
							>
								{category.name}
							</button>
						))}
					</div>

					<div
						className={`grid grid-cols-1 ${
							!errorMessage && "md:grid-cols-2"
						} gap-y-6`}
					>
						{errorMessage ? (
							<div className="text-2xl text-red-500 font-bold text-center">
								{errorMessage}
							</div>
						) : (
							projects.map((project) => (
								<div key={project.id} className="project_card px-3">
									<Link to={`/portfolio/${project.id}`}>
										<div className="relative">
											<img
												src={project?.image1}
												alt="Project image"
												width={678}
												height={452}
												className="aspect-square object-cover"
											/>
											<button className="navigate_button">Ko'rish</button>
										</div>
										<div className="pt-5 pb-2.5 flex items-center justify-between">
											<p className="font-medium text-2xl">{project?.title}</p>
											<div className="icon">
												<svg
													width="14"
													height="15"
													viewBox="0 0 14 15"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fillRule="evenodd"
														clipRule="evenodd"
														d="M0.704601 0.929259C0.704601 0.6868 0.901167 0.490234 1.14363 0.490234H13.3192C13.5617 0.490234 13.7583 0.6868 13.7583 0.929259V13.1049C13.7583 13.3474 13.5617 13.5439 13.3192 13.5439C13.0768 13.5439 12.8802 13.3474 12.8802 13.1049V1.98918L0.946708 13.9226C0.775254 14.0941 0.497299 14.0941 0.325851 13.9226C0.154404 13.7512 0.154404 13.4732 0.325851 13.3018L12.2593 1.36828H1.14363C0.901167 1.36828 0.704601 1.17178 0.704601 0.929259Z"
														fill="#000000"
													/>
												</svg>
											</div>
										</div>
										<span className="text-lg">{project?.category?.name}</span>
									</Link>
								</div>
							))
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
