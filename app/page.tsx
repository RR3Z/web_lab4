import TodoList from "@/components/TodoList/TodoList"
import { Metadata } from "next"
import Title from "../components/PageTitle/PageTitle"

export const metadata: Metadata = {
	title: "TODO List",
	description: "VSTU - Web - Lab 4",
}

export default function Home() {
	return (
		<>
			<Title title="Список дел"></Title>
			{/* Фильтры */}
			<TodoList />
		</>
	)
}
