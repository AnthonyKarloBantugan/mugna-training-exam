import { useState } from "react";
import {
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
	Box,
	Button,
} from "@chakra-ui/react";

import { db } from "../../../http/firebase";
import { collection, addDoc } from "firebase/firestore";

const Create = () => {
	const COLLECTION = "pokemons";
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [poke, setPoke] = useState({
		name: "",
		hp: 0,
		atk: 0,
		def: 0,
		sp_atk: 0,
		sp_def: 0,
		speed: 0,
	});

	const handleInput = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPoke({
			...poke,
			[name]: value,
		});
	};

	const addDocument = async (col, doc) => {
		const docRef = await addDoc(collection(db, col), doc);
		onClose();
	};

	return (
		<>
			<Box>
				<Button onClick={onOpen}>Create a Pokemon</Button>
			</Box>
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
							/>
						</FormControl>
						<FormControl>
							<FormLabel>HP: Max 99</FormLabel>
							<NumberInput defaultValue={0} min={0} max={99}>
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
							<NumberInput defaultValue={0} min={0} max={99}>
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
							<NumberInput defaultValue={0} min={0} max={99}>
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
							<NumberInput defaultValue={0} min={0} max={99}>
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
							<NumberInput defaultValue={0} min={0} max={99}>
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
							<NumberInput defaultValue={0} min={0} max={99}>
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
							onClick={() => addDocument(COLLECTION, poke)}
						>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Create;
