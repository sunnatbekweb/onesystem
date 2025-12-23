import birds from "@/assets/images/birds.jpg"
import cars from "@/assets/images/cars.jpg"
import corridor from "@/assets/images/corridor.jpg"
import footer__image from "@/assets/images/footer__image.jpg"
import newspaper from "@/assets/images/newspaper.jpg"
import newspaperman from "@/assets/images/newspaperman.jpg"
import sofa from "@/assets/images/sofa.jpg"
import tennis__players from "@/assets/images/tennis__players.jpg"
import three__mercedesbBenz from "@/assets/images/three__mercedesbBenz.jpg"
import water from "@/assets/images/water.jpg"
import { useEffect, useRef, useState } from "react"
import "./RoarSection.css"
export default function RoarSection() {
	const [isScrolled, setIsScrolled] = useState(false)
	const titleRef = useRef(null)
	const data = [
		{ images: sofa },
		{ images: three__mercedesbBenz },
		{ images: corridor },
		{ images: newspaper },
		{ images: tennis__players },
		{ images: cars },
		{ images: newspaperman },
		{ images: water },
		{ images: birds }
	]
	useEffect(() => {
		const title = titleRef.current
		if (!title) return

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsScrolled(entry.isIntersecting)
			},
			{
				root: null,
				threshold: 0.6 // 60% элемента в зоне видимости
			}
		)

		observer.observe(title)

		return () => observer.disconnect()
	}, [])

	return (
		<div>
			<section className="roar relative bg-[#FAC125] pt-[20px]">
				<h2
					ref={titleRef}
					className={`roar__title sticky top-[40%] pb-[48px] text-center w-full font-black text-[24px] leading-[26px] tracking-tighter-[-2%] uppercase md:pb-0 md:mt-[159px] md:text-[80px] md:leading-[60px] transition-all duration-500 ${
						isScrolled ? "text-white" : "text-[#2F2F34]"
					}`}
				>
					{isScrolled ? (
						<>
							Yoqgan narsalarni
							<span className="roar__span-title md:block">kashf qilamiz</span>
						</>
					) : (
						<>
							Kashf qilingan
							<span className="roar__span-title md:block">
								narsalarni yoqtiramiz
							</span>
						</>
					)}
				</h2>
				<img
					className="roar__more-images w-full hidden md:block"
					src={footer__image}
					alt="footer__image"
				/>
				<div className="roar__bottom-box flex flex-col justify-center items-center bg-[#FAC125] md:hidden">
					{data.map((item, index) => (
						<div
							className="roar__box-image flex flex-col justify-center items-center"
							key={index}
						>
							<img
								className="roar__images w-full rounded-[48px]"
								src={item.images}
								alt="images"
							/>
						</div>
					))}
				</div>
				<div className="roar__last-box w-full h-[100vh] bg-[#2F2F34] md:hidden"></div>
			</section>
		</div>
	)
}
