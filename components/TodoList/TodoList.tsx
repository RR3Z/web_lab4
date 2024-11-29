"use client"

import TodoCard from "@/components/TodoCard/TodoCard"
import { editCard, getCards, removeCard } from "@/data/dataRequests"
import { useEffect, useState } from "react"
import { CardData } from "../TodoCard/CardData"
import "./TodoList.css"

export default function TodoList() {
	const [cards, setCards] = useState<CardData[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function loadCards() {
			try {
				setLoading(true)
				const cards: CardData[] = await getCards()
				setCards(cards)
			} catch (error) {
				console.error(error)
			} finally {
				setLoading(false)
			}
		}

		loadCards()
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
						onRemove={removeCard}
						editCard={editCard}
					/>
				))
			)}
		</div>
	)
}
