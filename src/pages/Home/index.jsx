import { useEffect, useState } from "react";
import axios from "axios";

import {
	Container,
	Box,
	Text,
	Button,
	ListItem,
	UnorderedList,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	FormControl,
	FormLabel,
	Input,
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	SliderMark,
	SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import DataGrid from "../../components/molecules/DataGrid";
import DataTable from "../../components/molecules/DataTable";

const Home = () => {
	const BASE_URL = "https://pokeapi.co/api/v2/";
	const [pokemons, setPokemons] = useState([]);
	const [next, setNext] = useState("");
	const [prev, setPrev] = useState("");

	const getPokemons = async () => {
		try {
			const response = await axios.get(`${BASE_URL}pokemon/`);

			setPokemons(response.data.results);
			setNext(response.data.next);
		} catch (error) {
			console.log(error.message);
		}
	};

	const fetchNextData = async () => {
		try {
			const response = await axios.get(next);
			setPokemons(response.data.results);
			setNext(response.data.next);
			setPrev(response.data.previous);
		} catch (error) {
			console.log(error.message);
		}
	};

	const fetchPrevData = async () => {
		try {
			const response = await axios.get(prev);
			setPokemons(response.data.results);
			setNext(response.data.next);
			setPrev(response.data.previous);
		} catch (error) {
			console.log(error.message);
		}
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		getPokemons();
	}, []);

	return (
		<section>
			<Box>
				<Container maxWidth="container.xl">
					<Text fontSize="4xl" textAlign="center">
						Pokémon Pokédex
					</Text>
				</Container>
			</Box>
			<Box>
				<Container maxWidth="container.xl">
					<DataGrid />
				</Container>
			</Box>
			<Box>
				<Container maxWidth="container.xl">
					<Text fontSize="4xl">ORIGINAL POKEMONS</Text>
					{/* <DataTable /> */}
					<UnorderedList>
						{pokemons.map((pokemon) => (
							<ListItem key={pokemon.name}>
								<Link to={`pokemon/${pokemon.name}`}>
									{pokemon.name}
								</Link>
							</ListItem>
						))}
					</UnorderedList>
					<Box>
						<Container textAlign="center" maxWidth="container.xl">
							<Button
								padding="10px 20px"
								mr="20px"
								onClick={fetchPrevData}
								isDisabled={prev === "" ? true : false}
							>
								Prev
							</Button>
							<Button padding="10px 20px" onClick={fetchNextData}>
								Next
							</Button>
						</Container>
					</Box>
				</Container>
			</Box>
		</section>
	);
};

export default Home;
