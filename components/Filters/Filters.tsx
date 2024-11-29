import "./Filters.css"

export default function Filters({
	onFiltersSubmit,
}: {
	onFiltersSubmit: (filter: string) => void
}) {
	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		const formData = new FormData(event.currentTarget)
		const status = formData.get("status") as string
		onFiltersSubmit(status)
	}

	return (
		<form className="filters-form" action="GET" onSubmit={handleSubmit}>
			<div className="card-status-select form-input-container">
				<label htmlFor="status">Статус</label>
				<select className="custom-select" name="status">
					<option value="all">Все</option>
					<option value="true">Сделано</option>
					<option value="false">Не cделано</option>
				</select>
			</div>
			<button className="small-custom-btn" type="submit">
				Применить
			</button>
		</form>
	)
}
