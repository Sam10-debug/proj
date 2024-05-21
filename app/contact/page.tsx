import Image from "next/image";
import { Address, Facebook, Instagram, Mail, Phone, Threads, Tiktok, Twitter } from "../(components)/Svg";
const page = () => {
  return (
		<section className=" flex flex-col items-center gap-4">
			<h5 className=" text-[20px] leading-[27px] font-medium text-[#0E4B61]">Reach Out to us</h5>
			<h3 className=" text-[48px] font-medium leading-[64px]">Contact</h3>
			<p className="text-[28px] text-center w-1/2 leading-[37px] font-normal text-[#636363]">
				Thank you for your interest in Hive Clique! Whether you have inquiries about our services, want to collaborate on a project, or simply have
				questions, we&apos;re here to help.
			</p>
			<div className=" w-full">
				<Image src="/Frame 127.png" width={100} height={400} alt="" />
			</div>
			<div className=" flex items-center gap-1">
				<Address />
				<h5 className=" text-[#0E4B61] text-[28px] font-medium">Address:</h5>
				<span className="text-[#000000] text-[28px] font-normal">158, Ojota Road, Ogudu, Lagos.</span>
			</div>
			<div className=" flex items-center gap-1">
				<Mail />
				<h5 className=" text-[#0E4B61] text-[28px] font-medium">Email:</h5>
				<span className="text-[#000000] text-[28px] font-normal"> info@hiveclique.com</span>
			</div>
			<div className=" flex items-center gap-1">
				<Phone />
				<h5 className=" text-[#0E4B61] text-[28px] font-medium">Phone:</h5>
				<span className="text-[#000000] text-[28px] font-normal">2347010864635</span>
			</div>
			<section className=" flex flex-col items-center text-center bg-white rounded-lg border border-[#f1f1f1]  p-2">
				<h3 className=" text-[48px] leading-[64px] font-medium">Send us a Message</h3>
				<p className="text-[28px] leading-[37px] font-normal w-1/2">
					Have a question or need assistance? Fill out the form below and we&apos;ll get back to you promptly.
				</p>
				<form className=" space-y-2 w-1/2">
					<div className=" flex flex-col gap-1">
						<label htmlFor="" className=" text-left text-[20px] leading-[27px] text-[#141414]">
							Name:
						</label>
						<input type="text" placeholder="Enter Name" className="h-[69px] px-2 border border-[#f1f1f1] rounded-lg" />
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="" className="text-left text-[20px] leading-[27px] text-[#141414]">
							Email:
						</label>
						<input type="email" placeholder="Enter Email" className="h-[69px] px-2 border border-[#f1f1f1] rounded-lg" />
					</div>
					<div className="flex flex-col gap-1">
						<label htmlFor="" className="text-left text-[20px] leading-[27px] text-[#141414]">
							Message:
						</label>
						<textarea className=" px-2 border border-[#f1f1f1] rounded-lg" name="" id="" cols="30" rows="10"></textarea>
					</div>
					<button className=" rounded-lg bg-[#71B941] text-white px-4 py-2">Send Message</button>
				</form>
			</section>
			<div className=" text-center space-y-4">
				<h3 className=" text-[40px] leading-[54px] font-medium text-[#141414]">Connect with Us</h3>
				<p className="text-[28px] leading-[37px] font-normal text-[#636363]">You can also reach us on our social media accounts</p>
				<div className=" flex items-center gap-4">
					<div className=" flex flex-col gap-2 items-center">
						<Twitter />
						<span className="text-[28px] leading-[37px] font-normal text-[#0e4b61]">Twitter</span>
					</div>
					<div className=" flex flex-col gap-2 items-center">
						<Instagram />
						<span className="text-[28px] leading-[37px] font-normal text-[#0e4b61]">Instagram</span>
					</div>
					<div className=" flex flex-col gap-2 items-center">
						<Threads />
						<span className="text-[28px] leading-[37px] font-normal text-[#0e4b61]">Threads</span>
					</div>
					<div className=" flex flex-col gap-2 items-center">
						<Facebook />
						<span className="text-[28px] leading-[37px] font-normal text-[#0e4b61]">Facebook</span>
					</div>
					<div className=" flex flex-col gap-2 items-center">
						<Tiktok />
						<span className="text-[28px] leading-[37px] font-normal text-[#0e4b61]">Tiktok</span>
					</div>
				</div>
			</div>
			<div className=" bg-[#0E4B61] w-full text-center flex flex-col gap-4 p-4 items-center">
				<h3 className=" text-[48px] text-white font-medium leading-[54px] ">Let&apos;s Collaborate!</h3>
				<p className="text-[20px] w-1/2 font-normal text-white leading-[27px] ">
					Interested in partnering with Hive Clique? Reach out to us to explore potential collaborations and business opportunities.
				</p>
				<button className=" bg-[#71B941] rounded-lg px-4 py-2 text-white">Reach Out to us</button>
			</div>
		</section>
	);
}

export default page
