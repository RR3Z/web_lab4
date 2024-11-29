import "./Filters.css"

export default function Filters() {
	return (
		<form className="filters-form" action="">
			<div className="card-status-select form-input-container">
				<label htmlFor="status">Статус</label>
				<select className="custom-select" name="status">
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
