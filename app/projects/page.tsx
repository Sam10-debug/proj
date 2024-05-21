import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
		<section className=" flex flex-col items-center p-8 space-y-4">
			<h3 className=" text-[48px] font-medium leading-[64px] text-[#141414]">Projects</h3>
			<section className=" flex ">
				<div className="w-3/5 space-y-2">
					<h4 className=" text-[#71B941] text-[36px] font-normal leading-[48px]">Ekefa Oil & Gas Solar Powered Fuelling Station Ibadan</h4>
					<p className=" text-[20px] leading-[27px] font-normal text-[#636363]">
						Welcome to Hive Clique&apos;s project showcase! Learn more about our successful implementation of Ekefa Oil Solar Installation, where we
						leveraged innovative technology and sustainable practices to achieve remarkable results
					</p>
					<Image src="/Frame 70.png" width={715} height={550} alt="" />
				</div>
				<div className="w-2/5 space-y-2">
					<h3 className=" text-[28px] font-medium leading-[37.8px] text-[#141414]">Project Overview</h3>
					<p className="text-[20px] leading-[27px] font-normal text-[#636363]">
						Ekefa Oil Project exemplifies our commitment to renewable energy and smart technology. We collaborated closely with our client to design
						and deploy a customized solution that met their energy needs while minimizing environmental impact. Key Features Integration of solar
						panels for clean energy generation Implementation of IoT devices for remote monitoring and control Energy-efficient building design to
						optimize resource utilization
					</p>
					<h3 className="text-[28px] font-medium leading-[37.8px] text-[#141414]">Project Benefits</h3>
					<p className="text-[20px] leading-[27px] font-normal text-[#636363]">
						The Ekefa Oil Project yielded significant benefits, including: Reduced carbon footprint Cost savings on energy bills Enhanced operational
						efficiency and control
					</p>
				</div>
			</section>
			<h3 className=" text-[36px] font-medium leading-[48.6px] text-[#141414]">Project Video </h3>
			<p className=" text-[#636363] font-normal leading-[19.36px]">
				Watch our Renewable projects successes in action Check out the video below to see how Hive Clique&apos;s solutions are making a positive
				impact:
			</p>
			<Image src="/Frame 28.png" alt="" width={741} height={406} />
			<h3 className=" text-[36px] font-medium leading-[48.6px] text-[#141414]">Get Started</h3>
			<p className="text-[#636363] font-normal leading-[19.36px]">
				Ready to embark on your own sustainable journey?{" "}
				<Link href="#" className="text-[#71B941]">
					Contact Hive Clique
				</Link>{" "}
				today to discuss how we can tailor a solution to meet your unique needs and goals.
			</p>
		</section>
	);
}

export default page
