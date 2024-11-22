import ThemeProvider from "@/components/Theme/ThemeProvider"
import "@/styles/globals.css"
import { Roboto_Mono } from "next/font/google"

const font_roboto = Roboto_Mono({ subsets: ["cyrillic"] })

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ru">
			<body className={font_roboto.className}>
				<ThemeProvider>
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	)
}
