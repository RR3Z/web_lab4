import Header from "@/components/Header/Header"
import TodoList from "@/components/TodoList/TodoList"

export default function Home() {
	return (
		<>
			<Header />
			{/* Фильтры */}
			<TodoList />
		</>
	)
}
