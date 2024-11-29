"use client"

import TodoCard from "@/components/TodoCard/TodoCard"
import { getCards, getCardsWithFilter, removeCard } from "@/data/dataRequests"
import { useEffect, useState } from "react"
import Filters from "../Filters/Filters"
import { CardData } from "../TodoCard/CardData"
import "./TodoList.css"

export default function TodoList() {
	const [cards, setCards] = useState<CardData[]>([])
	const [loading, setLoading] = useState(true)

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

	useEffect(() => {
		loadCards()
	}, [])

	function onRemove(id: Number) {
		removeCard(id)
		setCards(prevCards => prevCards.filter(card => card.id !== id))
	}

	async function loadCardsWithFilter(filter: string) {
		try {
			setLoading(true)
			const cards: CardData[] = await getCardsWithFilter(filter)
			setCards(cards)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="inline-container">
			<Filters onFiltersSubmit={loadCardsWithFilter} />
			<div className="todo-list">
				{loading ? (
					<p>Loading data...</p>
				) : cards.length === 0 ? (
					<p>Список пуст!</p>
				) : (
					cards.map((card: CardData) => (
						<TodoCard
							key={card.id.toString()}
							id={card.id}
							title={card.title}
							description={card.description}
							completed={card.completed}
							removeCardFunc={onRemove}
						/>
					))
				)}
			</div>
		</div>
	)
}
