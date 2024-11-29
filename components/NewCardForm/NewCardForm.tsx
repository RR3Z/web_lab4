"use client"

import { createCard } from "@/data/dataRequests"
import { useRouter } from "next/navigation"
import { useState } from "react"
import "./NewCardForm.css"

export default function NewCardForm() {
	const [hasError, setHasError] = useState<boolean>(false)
	const [title, setTitle] = useState<string>("")
	const [description, setDescription] = useState<string>("")
	const [status, setStatus] = useState<boolean>(false)

	const router = useRouter()

	function handleTittleChange(event: React.ChangeEvent<HTMLInputElement>) {
		setTitle(event.target.value)
		setHasError(event.target.value.trim().length === 0)
	}

	function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
		createCard({
			id: -1,
			title: title,
			description: description,
			completed: status,
		})
		event.preventDefault()

		router.push("/")
	}

	return (
		<form onSubmit={handleFormSubmit} className="form-container">
			<div className="card-title-field form-input-container">
				<label htmlFor="title">Название</label>
				<input
					type="text"
					id="title"
					className="custom-input"
					style={{ border: hasError ? "1px solid red" : "" }}
					onChange={handleTittleChange}
				/>
			</div>

			<div className="card-desc-field form-input-container">
				<label htmlFor="description">Описание</label>
				<textarea
					id="description"
					className="custom-textarea"
					onChange={event => setDescription(event.target?.value)}
				/>
			</div>

			<div className="card-status-select form-input-container">
				<label htmlFor="status">Статус</label>
				<select
					className="custom-select"
					name="status"
					onChange={event => setStatus(event.target?.value === "true")}
				>
					<option value="true">Сделано</option>
					<option value="false">Не cделано</option>
				</select>
			</div>
			<button className="custom-btn" disabled={hasError} type="submit">
				Создать
			</button>
		</form>
	)
}
