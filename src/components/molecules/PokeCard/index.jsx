import {
	Box,
	Text,
	Image,
	Button,
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
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../../http/firebase";
import { useState } from "react";

const PokeCard = ({ id, name, atk, def, sp_atk, sp_def, speed, hp }) => {
	const COLLECTION = "pokemons";
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [pokemon, setPokemon] = useState({
		name: "",
		hp: 0,
		atk: 0,
		def: 0,
		sp_atk: 0,
		sp_def: 0,
		speed: 0,
	});

	const removeDocument = async (id, col) => {
		try {
			await deleteDoc(doc(db, col, `${id}`));
		} catch (error) {
			console.log(error.message);
		}
	};

	const updateDocument = async (id, col) => {
		try {
			const pokemonRef = doc(db, col, `${id}`);
			await updateDoc(pokemonRef, pokemon);
			onClose();
		} catch (error) {
			console.log(error);
		}
	};

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPokemon({
			[name]: value,
			...pokemon,
		});
	};

	return (
		<Box minHeight="200px" padding="20px">
			<Box>
				<Image
					width="150px"
					marginInline="auto"
					src="https://www.freeiconspng.com/uploads/pokeball-icon-4.png"
				/>
				<Text textAlign="center" fontWeight="bold" fontSize="1.3rem">
					Name: {name}
				</Text>
			</Box>
			<Box textAlign="center">
				<Text fontWeight="700" mt="10px" fontSize="1.5rem">
					Base Stats
				</Text>
				<Text fontWeight="500">HP: {hp}</Text>
				<Text fontWeight="500">Attack: {atk}</Text>
				<Text fontWeight="500">Defence: {def}</Text>
				<Text fontWeight="500">Special Attack: {sp_atk}</Text>
				<Text fontWeight="500">Special Defence: {sp_def}</Text>
				<Text fontWeight="500">Speed: {speed}</Text>
			</Box>
			<Box display="flex" justifyContent="space-evenly" p="20px">
				<Button onClick={onOpen}>Edit</Button>
				<Button
					colorScheme="red"
					onClick={() => removeDocument(id, COLLECTION)}
				>
					Delete
				</Button>
				<Modal isOpen={isOpen} onClose={onClose}>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Create Pokemon</ModalHeader>
						<ModalCloseButton />
						<ModalBody pb={6}>
							<FormControl>
								<FormLabel>Name</FormLabel>
								<Input
									name="name"
									required
									onChange={handleInput}
									placeholder={name}
								/>
							</FormControl>
							<FormControl>
								<FormLabel>HP: Max 99</FormLabel>
								<NumberInput defaultValue={hp} min={0} max={99}>
									<NumberInputField
										name="hp"
										onChange={handleInput}
									/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>
							<FormControl>
								<FormLabel>Attack: Max 99</FormLabel>
								<NumberInput
									defaultValue={atk}
									min={0}
									max={99}
								>
									<NumberInputField
										name="atk"
										onChange={handleInput}
									/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>
							<FormControl>
								<FormLabel>Defence: Max 99</FormLabel>
								<NumberInput
									defaultValue={def}
									min={0}
									max={99}
								>
									<NumberInputField
										name="def"
										onChange={handleInput}
									/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>
							<FormControl>
								<FormLabel>Sp. Attack: Max 99</FormLabel>
								<NumberInput
									defaultValue={sp_atk}
									min={0}
									max={99}
								>
									<NumberInputField
										name="sp_atk"
										onChange={handleInput}
									/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>
							<FormControl>
								<FormLabel>Sp. Defence: Max 99</FormLabel>
								<NumberInput
									defaultValue={sp_def}
									min={0}
									max={99}
								>
									<NumberInputField
										name="sp_def"
										onChange={handleInput}
									/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>
							<FormControl>
								<FormLabel>Speed: Max 99</FormLabel>
								<NumberInput
									defaultValue={speed}
									min={0}
									max={99}
								>
									<NumberInputField
										name="speed"
										onChange={handleInput}
									/>
									<NumberInputStepper>
										<NumberIncrementStepper />
										<NumberDecrementStepper />
									</NumberInputStepper>
								</NumberInput>
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button
								colorScheme="blue"
								mr={3}
								onClick={() => updateDocument(id, COLLECTION)}
							>
								Save
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</Box>
	);
};

export default PokeCard;
