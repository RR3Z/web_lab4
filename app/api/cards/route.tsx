import fs from "fs"
import { NextResponse } from "next/server"
import path from "path"

const dataFilePath = path.join(process.cwd(), "data", "cards.json")

export async function GET() {
	try {
		const data = fs.readFileSync(dataFilePath, "utf8")
		const cards = JSON.parse(data)

		return NextResponse.json({ cards }, { status: 200 })
	} catch (error) {
		console.error(error)
		return NextResponse.json({ error: "Failed to load cards" }, { status: 500 })
	}
}
