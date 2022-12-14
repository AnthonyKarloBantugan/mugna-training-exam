import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Box, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const PokemonDetails = () => {
	const BASE_URL = "https://pokeapi.co/api/v2/";
	const { name } = useParams();
	const [pokemon, setPokemon] = useState({});
	const [types, setTypes] = useState([]);
	const [stats, setStats] = useState({});

	const getDetails = async () => {
		try {
			const response = await axios.get(`${BASE_URL}pokemon/${name}`);
			setPokemon(response.data);
			console.log(response.data);
			setTypes(response.data.types);
			setStats({
				hp: response.data.stats[0].base_stat,
				attack: response.data.stats[1].base_stat,
				defence: response.data.stats[2].base_stat,
				sp_atk: response.data.stats[3].base_stat,
				sp_def: response.data.stats[4].base_stat,
				speed: response.data.stats[5].base_stat,
			});
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getDetails();
	}, []);

	return pokemon ? (
		<section>
			<Container maxW="container.lg">
				<Text fontSize="6xl">{pokemon?.name}</Text>
				<Box textAlign="center">
					<Image
						src={pokemon?.sprites?.other.dream_world.front_default}
						marginBlock="30px"
						marginInline="auto"
						textAlign="center"
					/>
				</Box>
				<Box>
					<Text>PokeDex Data</Text>
				</Box>

				<Box>
					<Container maxW="container.lg">
						<Box>
							<Text>National No: {pokemon?.id}</Text>
							<Text>
								Type:{" "}
								{types.map((type) => type.type.name).join(",")}
							</Text>

							<Text>Species: {pokemon?.id}</Text>
							<Text>Height: {pokemon?.height}</Text>
							<Text>Weight: {pokemon?.weight}</Text>
						</Box>
						<Box marginBlock="20px">
							<Text>BASE STATS:</Text>
							<Text>HP: {stats.hp}</Text>
							<Text>HP: {stats.attack}</Text>
							<Text>HP: {stats.defence}</Text>
							<Text>HP: {stats.sp_atk}</Text>
							<Text>HP: {stats.sp_def}</Text>
							<Text>HP: {stats.speed}</Text>
						</Box>
						<Box>
							<Button>
								<Link to="/">Back</Link>
							</Button>
						</Box>
					</Container>
				</Box>
			</Container>
		</section>
	) : null;
};

export default PokemonDetails;
