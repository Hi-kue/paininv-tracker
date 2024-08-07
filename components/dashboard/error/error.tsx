"use client";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {};

export default function Error({}: Props) {
	return (
		<Alert variant="destructive">
			<ExclamationTriangleIcon className="h-4 w-4" />
			<AlertTitle>Error</AlertTitle>
			<AlertDescription>Unknown Error Occurred</AlertDescription>
		</Alert>
	);
}
