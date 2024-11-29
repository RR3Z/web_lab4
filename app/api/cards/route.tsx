import { CardData } from "@/components/TodoCard/CardData"
import fs from "fs"
import { NextResponse } from "next/server"
import path from "path"

const dataFilePath = path.join(process.cwd(), "data", "cards.json")

export async function GET(request: Request) {
	try {
		const data = fs.readFileSync(dataFilePath, "utf8")
		let cards = JSON.parse(data)

		// Фильтрация
		const url = new URL(request.url)
		const filter = url.searchParams.get("status")

		if (filter === "all" || filter === null) {
			return NextResponse.json({ cards }, { status: 200 })
		} else if (filter === "true") {
			cards = cards.filter(
				(card: CardData) => card.completed.toString() === "true"
			)
		} else if (filter === "false") {
			cards = cards.filter(
				(card: CardData) => card.completed.toString() === "false"
			)
		}

		return NextResponse.json({ cards }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Failed to load cards" }, { status: 500 })
	}
}
