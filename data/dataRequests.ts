import { CardData } from "@/components/TodoCard/CardData"

export async function getCards() {
	const response = await fetch("/api/cards")
	if (!response.ok) {
		throw new Error("Failed to load data")
	} else {
		return (await response.json()).cards
	}
}

export async function getCardsWithFilter(filter: string) {
	const response = await fetch(`/api/cards?status=${filter}`)
	if (!response.ok) {
		throw new Error("Failed to load data")
	} else {
		return (await response.json()).cards
	}
}

export async function getCardById(id: Number) {
	const response = await fetch(`/api/cards/${id}`, { method: "GET" })

	if (!response.ok) {
		return null
	}

	return await response.json()
}

export async function editCard(newCard: CardData): Promise<void> {
	try {
		const response = await fetch(`/api/cards/${newCard.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newCard),
		})

		if (!response.ok) {
			const errorData = await response.json()
			console.error("Failed to update card with id = " + newCard.id, errorData)
			throw new Error(`Error: ${errorData.error || "Unknown error"}`)
		}
	} catch (error) {
		console.error("An error occurred while updating the card:", error)
	}
}

export async function removeCard(id: Number) {
	const response = await fetch(`/api/cards/${id}`, { method: "DELETE" })

	if (!response.ok) {
		console.error("Failed to delete card with id = " + id)
	}
}
