import { CardData } from "@/components/TodoCard/CardData"
import fs from "fs"
import { NextRequest, NextResponse } from "next/server"
import path from "path"

const dataFilePath = path.join(process.cwd(), "data", "cards.json")

export async function GET(
	req: NextRequest,
	{ params }: { params: { id: Number } }
) {
	const { id } = await params

	try {
		const data = fs.readFileSync(dataFilePath, "utf8")

		if (id) {
			const card = JSON.parse(data).find(
				(card: CardData) => card.id === Number(id)
			)

			if (!card) {
				return NextResponse.json({ error: "Card not found" }, { status: 404 })
			}

			return NextResponse.json(card, { status: 200 })
		}
		return NextResponse.json({ error: "Wrong id" }, { status: 404 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Failed to load cards" }, { status: 500 })
	}
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: number } }
) {
	const { id } = await params

	try {
		const data = JSON.parse(fs.readFileSync(dataFilePath, "utf8"))
		const updatedCards = data.filter((card: CardData) => card.id !== Number(id))
		fs.writeFileSync(dataFilePath, JSON.stringify(updatedCards, null, 2))
		console.log(JSON.parse(fs.readFileSync(dataFilePath, "utf8")))
		return NextResponse.json({ message: "Card deleted" }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: "Failed to delete card" },
			{ status: 500 }
		)
	}
}

export async function PUT(
	req: NextRequest,
	{ params }: { params: { id: Number } }
) {
	const { id } = await params

	try {
		const data = fs.readFileSync(dataFilePath, "utf8")
		const cards = JSON.parse(data)

		const updatedData = await req.json()

		const index = cards.findIndex((card: CardData) => card.id === Number(id))

		if (index === -1) {
			return NextResponse.json({ error: "Card not found" }, { status: 404 })
		}
		cards[index] = updatedData
		fs.writeFileSync(dataFilePath, JSON.stringify(cards, null, 2))

		return NextResponse.json({ message: "Card updated" }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json(
			{ error: "Failed to update card" },
			{ status: 500 }
		)
	}
}
