import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "../../components/molecules/DataTable";
import {
	Container,
	Box,
	Text,
	Button,
	List,
	ListItem,
	ListIcon,
	UnorderedList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
	const BASE_URL = "https://pokeapi.co/api/v2/";
	const [pokemons, setPokemons] = useState([]);
	const [next, setNext] = useState("");

	const getPokemons = async () => {
		try {
			const response = await axios.get(`${BASE_URL}pokemon/`);

			setPokemons(response.data.results);
			setNext(response.data.next);
		} catch (error) {
			console.log(error.message);
		}
	};

	const getPokeSprites = async () => {
		const response = axios.get();
	};

	const fetchNextData = async () => {
		const response = await axios.get(next);
		setPokemons(response.data.results);
	};

	useEffect(() => {
		getPokemons();
	}, []);

	return (
		<section>
			<Box>
				<Container>
					<Text>Pokémon Pokédex</Text>
				</Container>
			</Box>
			<Box>
				<Container>
					<UnorderedList>
						{pokemons.map((pokemon) => (
							<ListItem key={pokemon.name}>
								<Link to={`pokemon/${pokemon.name}`}>
									{pokemon.name}
								</Link>
							</ListItem>
						))}
					</UnorderedList>
				</Container>
			</Box>
		</section>
	);
};

export default Home;
