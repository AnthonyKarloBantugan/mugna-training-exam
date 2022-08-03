import PokeCard from "../PokeCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../http/firebase";
import { SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Create from "../Create";

const DataGrid = () => {
	const [customPokemons, setCustomPokemons] = useState([]);
	const getData = async () => {
		let pokemons = [];
		try {
			const querySnapshot = await getDocs(collection(db, "pokemons"));
			querySnapshot.forEach((doc) =>
				pokemons.push({
					id: doc.id,
					...doc.data(),
				})
			);
			setCustomPokemons(pokemons);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getData();
	}, [Create]);

	return (
		<>
			<Create />
			<SimpleGrid minChildWidth="120px" spacing="40px">
				{customPokemons.map((pokemon) => (
					<PokeCard key={pokemon.id} {...pokemon} />
				))}
			</SimpleGrid>
		</>
	);
};

export default DataGrid;
