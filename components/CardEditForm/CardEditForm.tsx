"use client"

import { useEffect, useState } from "react"

export default function CardEditForm({ cardId }: { cardId: Number }) {
	const [hasError, setHasError] = useState<boolean>(false)
	const [title, setTitle] = useState<string>("")
	const [description, setDescription] = useState<string>("")
	const [status, setStatus] = useState<boolean>(false)

	useEffect(() => {
		async function getCard() {
			const response = await fetch(`/api/cards/${cardId}`)
			const cardData = await response.json()

			if (cardData) {
				setTitle(cardData.title)
				setDescription(cardData.description)
				setStatus(cardData.completed)
			}
		}

		getCard()
	}, [])

	// const handleFormSubmit = event => {
	// 	onFormSubmit({
	// 		id: cardId,
	// 		title: title,
	// 		description: description,
	// 		status: status,
	// 	})
	// 	event.preventDefault()
	// }

	// const handleTittleChange = event => {
	// 	setTitle(event.target.value)
	// 	setHasError(event.target.value.trim().length === 0)
	// }

	return (
		// <form onSubmit={handleFormSubmit} className="form-container">
		// 	<div className="card-title-field form-input-container">
		// 		<label htmlFor="title">Название</label>
		// 		<input
		// 			type="text"
		// 			id="title"
		// 			className="custom-input"
		// 			value={title}
		// 			style={{ border: hasError ? "1px solid red" : "" }}
		// 			onChange={handleTittleChange}
		// 		/>
		// 	</div>

		// 	<div className="card-desc-field form-input-container">
		// 		<label htmlFor="description">Описание</label>
		// 		<textarea
		// 			type="text"
		// 			id="description"
		// 			className="custom-textarea"
		// 			value={description}
		// 			onChange={event => setDescription(event.target.value)}
		// 		/>
		// 	</div>

		// 	<div className="card-status-select form-input-container">
		// 		<label htmlFor="status">Статус</label>
		// 		<select
		// 			className="custom-select"
		// 			name="status"
		// 			value={status}
		// 			onChange={event => setStatus(event.target.value)}
		// 		>
		// 			<option value="true">Сделано</option>
		// 			<option value="false">Не cделано</option>
		// 		</select>
		// 	</div>
		// 	<button disabled={hasError} type="submit">
		// 		Изменить
		// 	</button>
		// </form>
	)
}
