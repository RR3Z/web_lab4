import ThemeSwitcher from "../Theme/ThemeSwitcher/ThemeSwitcher"
import "./PageTitle.css"

export default function PageTitle({ title }: { title: string }) {
	return (
		<div className="page-title">
			<h1>{title}</h1>
			<ThemeSwitcher />
		</div>
	)
}
