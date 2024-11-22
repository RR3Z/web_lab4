"use client"

import {
	lucide_eye_off,
	lucide_eye_on,
	lucide_pencil,
	lucide_trash,
} from "@/public/img/todo-card-icons"
import { useState } from "react"
import { CardData } from "./CardData"
import "./TodoCard.css"

export default function TodoCard({
	id,
	title,
	description,
	completed,
	onRemove,
}: CardData & {
	onRemove: (id: Number) => void
}) {
	const [isCompleted, setIsCompleted] = useState(completed)

	async function handleRemove() {
		onRemove(id)
	}

	async function editCard(newCard: CardData) {
		const response = await fetch(`/api/cards/${newCard.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newCard),
		})

		if (!response.ok) {
			console.error("Failed to update card with id = " + newCard.id)
		}
	}

	function handleUpdateStatus() {
		setIsCompleted(prevState => !prevState)
		editCard({ id, title, description, completed: !isCompleted })
	}

	return (
		<div className="todo-card">
			<div className="card-body">
				<h2 className="card-title">{title}</h2>
				<div className="card-desc">
					<strong>Описание: </strong>
					<span className="card-desc-text">{description}</span>
				</div>
				<div className="card-status">
					<strong>Статус: </strong>
					{isCompleted ? (
						<span className="status-done">Сделано</span>
					) : (
						<span className="status-undone">Не сделано</span>
					)}
				</div>
			</div>
			<div className="card-icons">
				<button className="btn-icon status-btn" onClick={handleUpdateStatus}>
					{isCompleted ? lucide_eye_on : lucide_eye_off}
				</button>
				<button className="btn-icon edit-btn">{lucide_pencil}</button>
				<button className="btn-icon remove-btn" onClick={handleRemove}>
					{lucide_trash}
				</button>
			</div>
		</div>
	)
}
