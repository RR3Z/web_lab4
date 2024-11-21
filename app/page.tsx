import Header from "@/components/Header/Header"
import TodoList from "@/components/TodoList/TodoList"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "TODO List",
	description: "VSTU - Web - Lab 4",
}

export default function Home() {
	return (
		<>
			<Header />
			{/* Фильтры */}
			<TodoList />
		</>
	)
}
