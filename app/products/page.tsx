import Image from "next/image";
import Link from "next/link";


const page = () => {
	return (
		<section className=" flex flex-col items-center justify-center">
			<h5 className=" text-center  font-medium leading-[27px] text-[20px] ">Explore our products</h5>
			<h3 className=" text-center font-medium leading-[64.8px] text-[48px] ">Products</h3>
			<p className=" text-[#636363] text-[28px] text-center">
				Welcome to Hive Clique&apos;s products page! Discover our innovative offerings that are shaping the future of renewable energy and technology.
			</p>
			<section className="">
				<h3 className=" text-center font-medium text-[#141414] text-[40px]   ">Upcoming Products - Coming Soon</h3>
				<div className=" w-4/5 p-8 flex gap-8 mx-auto items-center bg-white rounded-lg">
					<Image src="/Frame 53.png" width={377} height={323} alt="" />
					<div className="flex flex-col gap-4">
						<h4 className=" font-medium text-[28px] leading-[37.8px] text-[#0E4B61]">Auto-Hive Tracking Device</h4>
						<p className=" text-[20px] text-[#636363] leading-[27px] font-medium">
							Monitor and track energy consumption with our cutting-edge Auto-Hive tracking device. Stay informed about energy usage and optimize
							efficiency.
						</p>
						<span className=" text-[#202020] italic">Coming Soon!!</span>
					</div>
				</div>
				<div className=" w-4/5 mx-auto p-8 flex-row-reverse flex  gap-8 items-center bg-white rounded-lg">
					<Image src="/Frame 53.png" width={377} height={323} alt="" />
					<div className="flex flex-col gap-4">
						<h4 className=" font-medium text-[28px] leading-[37.8px] text-[#0E4B61]">Hive Mobile App</h4>
						<p className=" text-[20px] text-[#636363] leading-[27px] font-medium">
							Control smart devices and manage energy systems on the go with the Hive mobile app. Access real-time data and receive alerts for
							optimized energy management.
						</p>
						<span className=" text-[#202020] italic">Coming Soon!!</span>
					</div>
				</div>
				<div className=" w-4/5 p-8 mx-auto flex gap-8 items-center bg-white rounded-lg">
					<Image src="/Frame 53.png" width={377} height={323} alt="" />
					<div className="flex flex-col gap-4">
						<h4 className=" font-medium text-[28px] leading-[37.8px] text-[#0E4B61]">E-Bike - Innovation in Motion</h4>
						<p className=" text-[20px] text-[#636363] leading-[27px] font-medium">
							Get ready for an electrifying ride with our Hive Clique E-Bike! Features: Stylish design with eco-friendly electric motor Enhanced range
							and performance Sustainable transportation solution for urban mobility
						</p>
						<span className=" text-[#202020] italic">Coming Soon!!</span>
					</div>
				</div>
				<div className="">
					<h3 className=" text-center leading-[54px] text-[#141414] text-[40px] font-medium ">Deployed Projects</h3>
					<div className=" w-4/5 p-8 mx-auto flex  gap-8 items-center bg-white rounded-lg">
						<Image src="/Frame 40.png" width={377} height={323} alt="" />
						<div className="flex flex-col gap-4">
							<h4 className=" font-medium text-[28px] leading-[37.8px] text-[#0E4B61]">Solar Installation Projects</h4>
							<p className=" text-[20px] text-[#636363] leading-[27px] font-medium">
								Explore our deployed solar installation projects across various locations. See how solar energy is powering businesses and homes
								sustainably.
							</p>
							<Link href="#" className=" text-[#71B941]">
								View Projects
							</Link>
						</div>
					</div>
				</div>
				<div className=" w-4/5 p-8 mx-auto flex flex-row-reverse gap-8 items-center bg-white rounded-lg">
					<Image src="/wind turbines.png" width={377} height={323} alt="" />
					<div className=" flex flex-col gap-4">
						<h4 className=" font-medium text-[28px] leading-[37.8px] text-[#0E4B61]">Wind Turbines</h4>
						<p className=" text-[20px] text-[#636363] leading-[27px] font-medium">
							Learn about our wind turbine installations harnessing clean, renewable wind energy. Discover the benefits of wind power for sustainable
							electricity generation.
						</p>
						<Link href="#" className=" text-[#202020] italic">
							View Turbines
						</Link>
					</div>
				</div>
			</section>
		</section>
	);
};

export default page;
