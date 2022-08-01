import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PokemonDetails from "./pages/PokemonDetails";

function App() {
	return (
		<main className="App">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route
					exact
					path="/pokemon/:name"
					element={<PokemonDetails />}
				/>
			</Routes>
		</main>
	);
}

export default App;
