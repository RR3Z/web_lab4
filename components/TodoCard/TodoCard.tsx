"use client"

import {
	lucide_eye_off,
	lucide_eye_on,
	lucide_pencil,
	lucide_trash,
} from "@/public/img/todo-card-icons"
import { useEffect, useState } from "react"
import { CardData } from "./CardData"
import "./TodoCard.css"

export default function TodoCard({
	id,
	title,
	description,
	completed,
	onRemove,
}: CardData & { onRemove: (id: Number) => void }) {
	const [isCompleted, setIsCompleted] = useState(false)

	useEffect(() => {
		setIsCompleted(completed)
	}, [])

	async function handleRemove() {
		onRemove(id)
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
				<button
					className="btn-icon status-btn"
					onClick={() => setIsCompleted(!isCompleted)}
				>
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
