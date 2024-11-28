import CardEditForm from "@/components/CardEditForm/CardEditForm"
import PageTitle from "@/components/PageTitle/PageTitle"
import { Metadata } from "next"
import Link from "next/link"
import { Props } from "./Props"

export const metadata: Metadata = {
	title: "Edit TODO Card",
	description: "VSTU - Web - Lab 4",
}

export default async function EditCard({ params }: Props) {
	const { id } = await params

	return (
		<>
			<Link href="/">
				<button className="small-custom-btn">Вернуться</button>
			</Link>
			<PageTitle title="Редактирование карточки" />
			<CardEditForm cardId={id} />
		</>
	)
}
