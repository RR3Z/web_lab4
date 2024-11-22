"use client"

import TodoCard from "@/components/TodoCard/TodoCard"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { CardData } from "../TodoCard/CardData"
import "./TodoList.css"

export default function TodoList({}) {
	const router = useRouter()

	const [cards, setCards] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getCards()
	}, [])

	async function getCards() {
		try {
			setLoading(true)
			const response = await fetch("/api/cards")
			if (!response.ok) throw new Error("Failed to load data")
			setCards((await response.json()).cards)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	async function removeCard(id: Number) {
		const response = await fetch(`/api/cards/${id}`, { method: "DELETE" })

		if (response.ok) {
			getCards()
		} else {
			console.error("Failed to delete card with id = " + id)
		}
	}

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
						onRemove={removeCard}
					/>
				))
			)}
		</div>
	)
}
