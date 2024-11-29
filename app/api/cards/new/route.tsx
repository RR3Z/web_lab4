import fs from "fs"
import { NextResponse } from "next/server"
import path from "path"

const dataFilePath = path.join(process.cwd(), "data", "cards.json")

export async function POST(request: Request) {
	try {
		const newCard = await request.json()

		const data = fs.readFileSync(dataFilePath, "utf8")
		let cards = JSON.parse(data)

		cards.push(newCard)

		fs.writeFileSync(dataFilePath, JSON.stringify(cards, null, 2))

		return NextResponse.json(
			{ message: "Card added successfully" },
			{ status: 200 }
		)
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Failed to load cards" }, { status: 500 })
	}
}
