import DashboardPanelLayout from "@/components/panel/admin-panel-layout";

export default function DemoLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <DashboardPanelLayout>{children}</DashboardPanelLayout>;
}