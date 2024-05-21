import Image from "next/image";
import Link from "next/link";
import { Carbon, IOT, SmartHome, NavArrow1, NavArrow2, Frame, Union, BSX } from "./(components)/Svg";

export default function Home() {
	return (
		<main className="">
			<section className=" flex flex-col items-center text-center gap-4 p-4">
				<h5 className=" font-bold leading-[21.6px] text-[#71B941]">Welcome to the HiveClique</h5>
				<h1 className=" leading-[86.4px] font-medium text-[64px]">Empowering Your Future with Sustainable Technology</h1>
				<p className=" leading-[27px] font-normal text-[20px]">
					Discover the future of energy and connectivity with HiveClique. From renewable energy solutions to smart home automation and IoT
					innovations, we&apos;re revolutionizing the way you live, one sustainable step at a time.
				</p>
				<button className=" text-white font-medium leading-[21.6px] rounded-lg bg-[#71B941] p-[10px]">Explore More</button>
				<Image src="/unsplash_WvusC5M-TM8.png" width={1240} height={414} alt="hero-image" />
			</section>
			<section className=" space-y-4">
				<h5 className=" text-center  font-medium leading-[27px] text-[20px] text-[#0E4B61]">Our Services</h5>
				<h3 className=" text-center font-medium leading-[64.8px] text-[48px] text-[#2C2C2C]">What We Have to Offer</h3>
				<div className=" flex gap-4 px-8 flex-wrap md:flex-nowrap">
					<div className=" border rounded-lg border-solid border-[#f1f1f1] p-4 items-center text-center   flex flex-col space-y-2">
						<Carbon />
						<h5 className=" text-[#141414] text-[24px] font-medium leading-[32px]">Renewable Energy Solutions</h5>
						<p className="text-[#818181] text-[20px] font-normal leading-[27px]">
							Looking to reduce your carbon footprint, lower your energy bills, or gain energy independence, we have the expertise and technology to
							make it happen. From solar panel installation to wind energy systems and energy storage solutions, we&apos;ll help you harness the power
							of nature for a brighter tomorrow.
						</p>
					</div>
					<div className=" border rounded-lg border-solid border-[#f1f1f1] items-center text-center p-4 flex flex-col space-y-2">
						<IOT />
						<h5 className=" text-[#141414] text-[24px] font-medium leading-[32px]">IoT Innovations</h5>
						<p className="text-[#818181] text-[20px] font-normal leading-[27px]">
							From smart sensors to connected appliances and energy monitoring systems, we&apos;e revolutionizing the way you interact with your home
							and the world around you. Monitor, control, and optimize your energy usage with ease, and take the first step towards a more connected
							and sustainable future.
						</p>
					</div>
					<div className=" border rounded-lg border-solid items-center text-center border-[#f1f1f1] p-4 flex flex-col space-y-2">
						<SmartHome />
						<h5 className=" text-[#141414] text-[24px] font-medium leading-[32px]">Smart Home Automation</h5>
						<p className="text-[#818181] text-[20px] font-normal leading-[27px]">
							Say goodbye to outdated, inefficient systems and hello to a home that adapts to your lifestyle. With features like smart lighting,
							thermostats, security systems, and voice-controlled assistants, you&apos;ll enjoy enhanced comfort, security, convenience, and peace of
							mind all at the touch of a button.
						</p>
					</div>
				</div>
			</section>
			<section className=" flex items-center flex-col py-8">
				<h5 className=" text-[#0E4B61] font-medium text-[20px] leading-[27px]">What we&apos;ve been up to</h5>
				<h3 className=" text-5xl font-medium leading-[64.8px]">Take a look at HiveCLique</h3>
				<Image src="/Frame 28.png" width={1045} height={526} alt="" />
			</section>
			<section className=" bg-[#0E4B61] text-white p-4 flex flex-col items-center text-center">
				<h6 className=" font-medium text-[20px] leading-[27px]">Our Testimonials</h6>
				<h3 className="text-5xl font-medium leading-[64.8px]">What Our Clients Have to Say</h3>
				<section className=" flex justify-center items-center">
					<NavArrow1 />
					<div className=" flex flex-col items-center w-1/2">
						<div className="w-16 h-16 rounded-[50%] bg-white flex justify-center items-center">
							<BSX />
						</div>
						<p className="">
							Working with Hive Clique was a game-changer for our business. Their expertise in renewable energy and technology was evident throughout
							the project. We&apos;re thrilled with the results.
						</p>
						<span className="">CEO Ekefa investments Limited</span>
						<Link href="#">View Twitter post</Link>
					</div>
					<NavArrow2 />
				</section>
			</section>
			<section className=" flex flex-col items-center gap-4 p-8">
				<h5 className=" text-[#0E4B61] font-medium text-[20px] leading-[27px]">SDG Alignment</h5>
				<h3 className=" text-5xl text-[#2c2c2c] font-medium leading-[64.8px]">How Our Company Aligns with SDGs</h3>
				<section className=" flex flex-wrap gap-4 justify-center">
					<Image src="/6418e45ba853dd689edfec30_TheGlobalGoals_Icons_Color_Goal_8.png " className=" rounded-lg" alt="" width={300} height={300} />
					<Image src="/6418e45be769df520b7c9ac6_TheGlobalGoals_Icons_Color_Goal_10.png " className=" rounded-lg" alt="" width={300} height={300} />
					<Image src="/6418e45be769dfb3437c9ac5_TheGlobalGoals_Icons_Color_Goal_13.png " className=" rounded-lg" alt="" width={300} height={300} />
					<Image src="/6418e45be769dfc34b7c9ac7_TheGlobalGoals_Icons_Color_Goal_1.png" className=" rounded-lg" alt="" width={300} height={300} />
					<Image src="/6418e45bea064656e47dda96_TheGlobalGoals_Icons_Color_Goal_5.png " className=" rounded-lg" alt="" width={300} height={300} />
					<Image src="/6418e45b1474b65846802369_TheGlobalGoals_Icons_Color_Goal_7 1.png " className=" rounded-lg" alt="" width={300} height={300} />
				</section>
			</section>
			<section className="p-8 flex bg-[#f4f4f4] flex-col items-center gap-4">
				<h5 className=" text-center  font-medium leading-[27px] text-[20px] text-[#0E4B61]">Coming Soon!!!</h5>
				<h3 className=" text-center font-medium leading-[64.8px] text-[48px] text-[#2C2C2C]">What We&apos;re Cooking Up for You</h3>
				<div className=" w-4/5 p-8 flex gap-8 items-center bg-white rounded-lg">
					<Image src="/Frame 53.png" width={377} height={323} alt="" />
					<div className="">
						<h4 className=" font-medium text-[28px] leading-[37.8px] text-[#0E4B61]">Electric Bike (E-Bike)</h4>
						<p className=" text-[20px] text-[#636363] leading-[27px] font-medium">
							Get ready to revolutionize your commute with our upcoming Electric Bike (E-Bike) project. Say goodbye to traffic jams and hello to
							eco-friendly, efficient transportation. Our sleek and powerful E-Bike combines cutting-edge technology with sustainable design, offering
							a smooth and enjoyable ride for urban commuters and outdoor enthusiasts alike. Stay tuned for updates as we gear up to launch this
							exciting project and transform the way you move!
						</p>
						<span className=" text-[#202020] italic">Coming Soon!!</span>
					</div>
				</div>
				<div className="w-4/5 p-8 flex gap-8 items-center bg-white rounded-lg">
					<div className="">
						<h4 className=" font-medium text-[28px] leading-[37.8px] text-[#0E4B61]">Auto Hive</h4>
						<p className=" text-[20px] text-[#636363] leading-[27px] font-medium">
							Introducing Auto Hive, our latest innovation in smart parking solutions. With Auto Hive, finding parking has never been easier. Our
							intelligent system uses advanced sensors and real-time data to locate available parking spaces and guide drivers to their destination
							effortlessly. Say goodbye to circling the block in search of a spot – with Auto Hive, parking frustration becomes a thing of the past.
							Stay tuned for updates as we roll out this game-changing project and revolutionize the parking experience!
						</p>
						<span className=" text-[#202020] italic">Coming Soon!!</span>
					</div>
					<Image src="/Frame 52.png" width={377} height={323} alt="" />
				</div>
				<button className=" rounded-lg bg-[#71B941] text-white py-[10px] px-4 font-medium ">View our products</button>
			</section>
			<section className="bg-[#0E4B61] p-8 gap-4 text-white flex flex-col items-center">
				<h5 className=" text-center  font-medium leading-[27px] text-[20px] ">Call For Investors</h5>
				<h3 className=" text-center font-medium leading-[64.8px] text-[48px] ">Ready to be Part of Something Groundbreaking?</h3>
				<p className=" text-center w-1/2 text-[20px] leading-[27px] font-normal">
					HiveClique is seeking visionary investors to join us in shaping the future of sustainable technology. As we embark on our journey to
					revolutionize the way we live, work, and connect, we invite forward-thinking investors to partner with us. Together, we&apos;ll unlock new
					opportunities, drive meaningful impact, and pave the way for a brighter, greener tomorrow.
				</p>
				<div className=" gap-2 flex items-center flex-col mt-4">
					<p className="text-center  font-medium leading-[27px] text-[20px]">
						Invest today and be at the forefront of the next wave of technological innovation.
					</p>
					<button className=" rounded-lg bg-[#71B941] text-white py-[10px] px-4 font-medium ">reach out to us</button>
				</div>
			</section>
		</main>
	);
}
