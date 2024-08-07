"use client";
import { Skeleton } from "@/components/ui/skeleton";

type Props = {};

export default function Loading({}: Props) {
	return (
		<div className="flex flex-wrap">
			<Skeleton className="aspect-square" />
		</div>
	);
}
