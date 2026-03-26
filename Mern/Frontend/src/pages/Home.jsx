
function Home({ username, changeUsername }) {

	return (
		<div>
			<h2>Home Page</h2>
			<p>Welcome, {username}!</p>

			<button className="bg-green-600 p-3 gap-4 rounded" onClick={() => changeUsername("Jane Smith")}>Change Username</button>
		</div>
	);
}
export default Home;