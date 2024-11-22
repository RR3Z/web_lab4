import { Metadata } from "next"
import { Props } from "./Props"

export const metadata: Metadata = {
	title: "Edit TODO Card",
	description: "VSTU - Web - Lab 4",
}

export default async function EditCard({ params }: Props) {
	const { id } = await params

	return <div>Edit card with ID = {id}</div>
}
