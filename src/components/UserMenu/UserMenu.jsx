export const UserMenu = ({ email }) => {

	return (
		<>
			<div>
				<p>{email}</p>
				<button type="button">Logout</button>
			</div>
		</>
	)
}