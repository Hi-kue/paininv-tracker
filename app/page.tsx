import AnimatedLanding from "@/components/landing/animated-landing";
import { SiteBanner } from "@/components/site-banner";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
	return (
		<main>
			<SiteHeader />
			<SiteBanner />
			<AnimatedLanding />
		</main>
	);
}
