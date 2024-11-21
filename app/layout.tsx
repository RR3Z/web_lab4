import "@/styles/globals.css"
import { Metadata } from "next"
import { Roboto_Mono } from "next/font/google"

const font_roboto = Roboto_Mono({ subsets: ["cyrillic"] })

export const metadata: Metadata = {
	title: "TODO List",
	description: "VSTU - Web - Lab 4",
}

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ru">
			<body className={font_roboto.className}>{children}</body>
		</html>
	)
}
