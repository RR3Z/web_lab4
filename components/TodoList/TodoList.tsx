"use client"

import TodoCard from "@/components/TodoCard/TodoCard"
import { useEffect, useState } from "react"
import { CardData } from "../TodoCard/CardData"

export default function TodoList({}) {
	const [cards, setCards] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function loadData() {
			try {
				const response = await fetch("/api/cards")
				if (!response.ok) throw new Error("Failed to load data")
				setCards((await response.json()).cards)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		loadData()
	}, [])

	return (
		<div className="todo-list">
			{loading ? (
				<p>Loading data...</p>
			) : cards.length === 0 ? (
				<p>Список пуст!</p>
			) : (
				cards.map((card: CardData) => (
					<TodoCard
						key={card.id}
						id={card.id}
						title={card.title}
						description={card.description}
						completed={card.completed}
					/>
				))
			)}
		</div>
	)
}
