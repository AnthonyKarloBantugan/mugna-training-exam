import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";
import TableDetails from "../../atoms/TableDetails";

const DataTable = ({ pokemons }) => {
	const names = pokemons.map((pokemon) => pokemon.name);

	return (
		<TableContainer>
			<Table variant="striped" colorScheme="red" size="sm">
				<TableCaption></TableCaption>
				<Thead>
					<Tr>
						<Th textAlign="center">#</Th>
						<Th textAlign="center">Name</Th>
						<Th textAlign="center">Type</Th>
						<Th textAlign="center">HP</Th>
						<Th textAlign="center">Attack</Th>
						<Th textAlign="center">Defence</Th>
						<Th textAlign="center">Sp.Atk</Th>
						<Th textAlign="center">Sp.Def</Th>
						<Th textAlign="center">Speed</Th>
					</Tr>
				</Thead>
				<Tbody>
					{names.map((name) => (
						<TableDetails name={name} key={name} />
					))}
				</Tbody>
				<Tfoot></Tfoot>
			</Table>
		</TableContainer>
	);
};

export default DataTable;
