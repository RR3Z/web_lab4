"use client"

import {
	lucide_eye_off,
	lucide_eye_on,
	lucide_pencil,
	lucide_trash,
} from "@/public/img/todo-card-icons"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { CardData } from "./CardData"
import "./TodoCard.css"

export default function TodoCard({
	id,
	title,
	description,
	completed,
	onRemove,
	editCard,
}: CardData & {
	onRemove: (id: Number) => void
	editCard: (cardData: CardData) => void
}) {
	const [isCompleted, setIsCompleted] = useState(completed)

	const router = useRouter()
	function handleEdit() {
		router.push("/edit/" + id)
	}

	function handleRemove() {
		onRemove(id)
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
				<button className="btn-icon edit-btn" onClick={handleEdit}>
					{lucide_pencil}
				</button>
				<button className="btn-icon remove-btn" onClick={handleRemove}>
					{lucide_trash}
				</button>
			</div>
		</div>
	)
}
