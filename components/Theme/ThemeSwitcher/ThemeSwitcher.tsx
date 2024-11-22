"use client"
import { lucide_moon, lucide_sun } from "@/public/img/theme-icons"
import { useTheme } from "next-themes"
import { useEffect } from "react"
import "./ThemeSwitcher.css"
import { Themes } from "./Themes"

const availableThemes: Themes = {
	light: "light-theme",
	dark: "dark-theme",
}

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setTheme(localStorage.getItem("theme") || availableThemes.light)
	}, [])

	function switchTheme() {
		setTheme(
			theme === availableThemes.dark
				? availableThemes.light
				: availableThemes.dark
		)

		document.documentElement.classList.toggle(availableThemes.light)
		document.documentElement.classList.toggle(availableThemes.dark)
	}

	return (
		<button className="theme-switcher" onClick={switchTheme}>
			{theme === availableThemes.dark ? lucide_sun : lucide_moon}
		</button>
	)
}
