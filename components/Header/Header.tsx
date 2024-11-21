import ThemeSwitcher from "../Theme/ThemeSwitcher/ThemeSwitcher"
import "./Header.css"

export default function Header() {
	return (
		<header>
			<h1>Список дел</h1>
			<ThemeSwitcher />
		</header>
	)
}
