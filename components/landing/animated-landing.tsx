"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Store, Code, Sparkle, SmilePlus } from "lucide-react";
import appConfig from "@/lib/app.config";
import { Icons } from "@/components/icons";

import { buttonVariants } from "@/components/ui/button";
import { MinamalDock } from "../minimal-dock";

import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";

const MotionLink = motion(Link);

// @ts-ignore
const FeatureCard = ({ feature, icon: Icon, description }) => (
	<motion.div
		className="aspect-video rounded-xl w-80 shadow-lg ring-1 ring-black/5 bg-white/5 backdrop-blur-xl p-6 hover:shadow-xl transition-all duration-300 ease-in border border-white/10 "
		whileHover={{
			scale: 1.05,
			rotateY: 15,
			borderColor: "rgba(255,255,255,0.2)",
		}}
		whileTap={{ scale: 0.95 }}
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, ease: "easeOut" }}
	>
		<Icon className="w-6 h-6 mb-4 text-black dark:text-slate-300" />
		<h3 className="text-xl font-bold mb-2 text-black dark:text-slate-300">
			{feature}
		</h3>
		<p className="text-black dark:text-slate-300">{description}</p>
	</motion.div>
);

export default function AnimatedLanding() {
	return (
		<div className="relative min-h-screen overflow-hidden text-white">
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
				<div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-700 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full filter blur-[100px] animate-spin-slow"></div>
			</div>

			{/* Content */}
			<div className="relative z-10 mt-5 lg:mt-0">
				<section className="container min-h-screen flex flex-col justify-center items-center gap-8 pb-8 pt-6 md:py-10">
					<motion.div
						className="flex max-w-[980px] flex-col items-center gap-4 text-center"
						initial={{ opacity: 0, y: -50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
					>
						<AnimatedGradientText>
							🚧{" "}
							<span className="text-black dark:text-white">
								Under Construction{" "}
							</span>
							<hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
							<span
								className={cn(
									`inline animate-gradient bg-gradient-to-r from-[#408cff] via-[#9c40ff] to-[#408cff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
								)}
							>
								v1.0.0
							</span>{" "}
						</AnimatedGradientText>
						<br />
						<Image
							src="/imgs/paninv-tracker-logo.png"
							width={100}
							height={100}
							alt="Paninv Tracker Logo"
						/>
						<motion.h1
							className="text-5xl font-extrabold leading-tight tracking-tighter md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
						>
							Paninv Tracker
						</motion.h1>
						<motion.p
							className="max-w-[700px] text-xl text-gray-500 mt-2 font-normal"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.6 }}
						>
							The best dashboard to keep track of your inventory, manage your
							recipes, and more.
						</motion.p>
					</motion.div>

					<motion.div
						className="flex gap-6"
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.8 }}
					>
						<MotionLink
							href="/dashboard"
							className={
								buttonVariants({ variant: "default", size: "lg" }) +
								" bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-full"
							}
							whileHover={{
								scale: 1.05,
								boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
							}}
							whileTap={{ scale: 0.95 }}
						>
							Get Started
							<ArrowRight className="ml-2 h-5 w-5" />
						</MotionLink>
						<MotionLink
							target="_blank"
							rel="noreferrer"
							href={appConfig.appGithubLink}
							className={
								buttonVariants({ variant: "default", size: "lg" }) +
								" bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-full"
							}
							whileHover={{
								scale: 1.05,
								boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
							}}
							whileTap={{ scale: 0.95 }}
						>
							<Icons.github className="mr-2 h-5 w-5" />
							<span>GitHub</span>
						</MotionLink>
					</motion.div>

					<motion.div
						className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
					>
						<FeatureCard
							feature="Fast"
							icon={Store}
							description="Recipe management, inventory tracking, and more, all in one place."
						/>
						<FeatureCard
							feature="Secure"
							icon={SmilePlus}
							description="Easy to use, secure, and reliable, this pantry tracker is easy to setup with minimal configuration required."
						/>
						<FeatureCard
							feature="Open Source"
							icon={Code}
							description={
								<>
									<span>
										The code is completely free and available on Github, simply
										click on the link to check it out the following link:{" "}
									</span>
									<Link
										href={appConfig.links.github}
										className="text-indigo-400 hover:underline"
									>
										Github Link <Sparkle className="h-4 w-4 inline" />
									</Link>
								</>
							}
						/>
					</motion.div>
					<MinamalDock />
				</section>
			</div>
		</div>
	);
}
