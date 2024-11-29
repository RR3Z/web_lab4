"use client"

import { editCard, getCardById } from "@/data/dataRequests"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import "./CardEditForm.css"

export default function CardEditForm({ cardId }: { cardId: Number }) {
	const [hasError, setHasError] = useState<boolean>(false)
	const [title, setTitle] = useState<string>("")
	const [description, setDescription] = useState<string>("")
	const [status, setStatus] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)

	const router = useRouter()

	useEffect(() => {
		async function loadCard() {
			setLoading(true)
			const cardData = await getCardById(Number(cardId))

			if (cardData) {
				setTitle(cardData.title)
				setDescription(cardData.description)
				setStatus(cardData.completed)
				setLoading(false)
			}
		}

		loadCard()
	}, [])

	const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		editCard({
			id: Number(cardId),
			title: title,
			description: description,
			completed: status,
		})
		event.preventDefault()

		router.push("/")
	}

	const handleTittleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value)
		setHasError(event.target.value.trim().length === 0)
	}

	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : (
				<form onSubmit={handleFormSubmit} className="form-container">
					<div className="card-title-field form-input-container">
						<label htmlFor="title">Название</label>
						<input
							type="text"
							id="title"
							className="custom-input"
							value={title}
							style={{ border: hasError ? "1px solid red" : "" }}
							onChange={handleTittleChange}
						/>
					</div>

					<div className="card-desc-field form-input-container">
						<label htmlFor="description">Описание</label>
						<textarea
							id="description"
							className="custom-textarea"
							value={description}
							onChange={event => setDescription(event.target?.value)}
						/>
					</div>

					<div className="card-status-select form-input-container">
						<label htmlFor="status">Статус</label>
						<select
							className="custom-select"
							name="status"
							value={status.toString()}
							onChange={event => setStatus(event.target?.value === "true")}
						>
							<option value="true">Сделано</option>
							<option value="false">Не cделано</option>
						</select>
					</div>
					<button className="custom-btn" disabled={hasError} type="submit">
						Изменить
					</button>
				</form>
			)}
		</>
	)
}
