import Link from "next/link";

const page = () => {
	return (
		<section className=" flex flex-col items-center text-center p-8 gap-4 bg-[#f1f1f1]">
			<h5 className=" text-[20px] leading-[27px] font-medium">Join Our Team</h5>
			<h3 className=" text-[48px] font-medium leading-[64px]">Careers</h3>
			<p className=" text-[28px] leading-[37px] font-normal text-[#636363]">
				At Hive Clique, we believe in fostering a dynamic work environment where innovation, collaboration, and sustainability thrive. Join our team
				and be part of a mission-driven company that is shaping the future of renewable energy and sustainable technology.
			</p>
			<div className=" flex gap-4 w-4/5">
				<div className="rounded-lg text-left space-y-2 bg-white p-4 ">
					<h4 className="text-[32px]  font-medium leading-[43px] text-[#141414]">Our Work Culture</h4>
					<p className="text-[20px] leading-[27px] font-normal text-[#636363]">
						Innovation: We encourage creativity and innovation, empowering our team to explore new ideas and push boundaries. Collaboration:
						Collaboration is at the heart of what we do. We work together across departments to deliver exceptional solutions to our clients.
						Sustainability: Sustainability is not just a buzzword for us; it&apos;s a way of life. We are committed to making a positive impact on the
						environment through our work.
					</p>
				</div>
				<div className="rounded-lg text-left space-y-2 bg-white p-4">
					<h4 className="text-[32px] font-medium leading-[43px] text-[#141414]">Why Work with Us?</h4>
					<p className="text-[20px] leading-[27px] font-normal text-[#636363]">
						Career Growth: Join a growing company where you can develop your skills and advance your career in the renewable energy and technology
						sector. Impactful Projects: Be part of projects that make a difference. Contribute to creating a greener, more sustainable future. Diverse
						Team: Join a diverse and inclusive team of passionate individuals who are dedicated to making a positive impact.
					</p>
				</div>
			</div>
			<section className=" w-4/5 bg-white rounded-lg p-4 space-y-2">
				<h3 className=" text-[32px] font-medium text-[#141414] leading-[43px]">Current Job Openings</h3>
				<p className="text-[#636363] text-[20px] leading-[27px] ">We are currently hiring for the following positions</p>
				<h4 className=" text-[#0E4B61] text-[28px] leading-[37px]">Senior Renewable Energy Engineer</h4>
				<p className="text-[#636363] text-[20px] leading-[27px]">Lead the design and implementation of renewable energy products</p>
				<p className="text-[#636363] text-[20px] leading-[27px]">
					Requirements: Bachelor&apos;s ddegree in Engineering, 5+ years of experience in renewable energy field{" "}
				</p>
				<h4 className="text-[#0E4B61] text-[28px] leading-[37px]">IoT Solutions Architect</h4>
				<p className="text-[#636363] text-[20px] leading-[27px]">Design and develop IoT solutions for smart automation projects.</p>
				<p className="text-[#636363] text-[20px] leading-[27px]">
					Requirements: Bachelor&apos;s degree in Computer Science or related field, experience in IoT development.
				</p>
			</section>
			<section className=" w-4/5 bg-white rounded-lg p-4 space-y-2">
				<h4 className=" text-[32px] leading-[43px] font-medium text-[#141414]">How to Apply</h4>
				<p className=" text-[28px] leading-[37px] font-normal">
					Interested in joining our team? View detailed job descriptions and submit your application through our{" "}
					<Link className=" text-[#71B941]" href="#">
						Careers Portal.
					</Link>{" "}
					We look forward to welcoming talented individuals who share our passion for sustainability and innovation. Join Hive Clique and Make an
					Impact!
				</p>
			</section>
		</section>
	);
};

export default page;
