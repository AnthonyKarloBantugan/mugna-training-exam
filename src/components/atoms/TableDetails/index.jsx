import { Tr, Td, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TableDetails = ({ name }) => {
	const [pokemon, setPokemon] = useState({});
	const [stats, setStats] = useState({
		hp: "",
		atk: "",
		def: "",
		sp_atk: "",
		sp_def: "",
		speed: "",
		type: "",
	});
	const BASE_URL = "https://pokeapi.co/api/v2/";

	const getData = async () => {
		const response = await axios.get(`${BASE_URL}pokemon/${name}`);
		setPokemon(response.data);
		const types = response.data.types
			.map((pokemon) => pokemon.type.name)
			.join(" , ");
		setStats({
			hp: response.data.stats[0].base_stat,
			atk: response.data.stats[1].base_stat,
			def: response.data.stats[2].base_stat,
			sp_atk: response.data.stats[3].base_stat,
			sp_def: response.data.stats[4].base_stat,
			speed: response.data.stats[5].base_stat,
			type: types,
		});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Tr>
			<Td
				display="flex"
				justifyContent="center"
				alignItems="center"
				textAlign="center"
				fontWeight="700"
			>
				<Image src={pokemon?.sprites?.front_default} />
				{pokemon.id}
			</Td>
			<Td textAlign="center" fontWeight="500">
				<Link to={`/pokemon/${pokemon.id}`}>{pokemon.name}</Link>
			</Td>
			<Td textAlign="center">{stats.type}</Td>
			<Td textAlign="center">{stats.hp}</Td>
			<Td textAlign="center">{stats.atk}</Td>
			<Td textAlign="center">{stats.def}</Td>
			<Td textAlign="center">{stats.sp_atk}</Td>
			<Td textAlign="center">{stats.sp_def}</Td>
			<Td textAlign="center">{stats.speed}</Td>
		</Tr>
	);
};

export default TableDetails;
