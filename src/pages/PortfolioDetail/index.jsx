import { Link, useParams } from "react-router-dom"
import { useGetProjectById } from "../../hooks/useGetProjectById"
import DiscussSection from "../ContactusPage/ContactusSections/DiscussSection"
import FormSection from "../ContactusPage/ContactusSections/FormSection"
import { Image } from "./ui/Image"
import { Video } from "./ui/Video"

export const PortfolioDetail = () => {
	const params = useParams()
	const { project } = useGetProjectById({ id: params.id })

	return (
		<>
			<section className="pt-[198px] lg:pt-[130px]">
				<div className="container px-[16px] md:px-[36px] lg:px-[48px]">
					<div className="py-10">
						<div className="flex flex-col gap-y-4 sm:flex-row sm:items-center sm:justify-between">
							<div>
								<h2 className="text-xl md:text-5xl mb-1 md:mb-2">
									{project?.title}
								</h2>
								{/* <span className="text-sm md:text-lg text-[#575757]">
									{project?.category}
								</span> */}
							</div>
							<Link
								to={project?.url}
								className="text-2xl font-semibold underline hover:text-amber-400"
							>
								Ko'rish
							</Link>
						</div>

						<div className="pt-6 md:pt-8">
							<p className="text-sm md:text-lg whitespace-pre-line">
								{project?.description}
							</p>

							<div className="pt-5 md:pt-10 flex flex-col gap-y-10">
								<Image src={project?.image1} />
								<Image src={project?.image2} />
								<Image src={project?.image3} />

								{project?.video && <Video src={project?.video} />}
							</div>
						</div>
					</div>
				</div>
			</section>
			<DiscussSection />
			<FormSection />
		</>
	)
}
