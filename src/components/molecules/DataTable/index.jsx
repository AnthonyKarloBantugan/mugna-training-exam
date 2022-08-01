import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
	Image,
} from "@chakra-ui/react";
import TableDetails from "../../atoms/TableDetails";

const DataTable = (pokemon) => {
	console.log(pokemon);
	return (
		<TableContainer>
			<Table variant="simple">
				<TableCaption>
					{/* Imperial to metric conversion factors */}
				</TableCaption>
				<Thead>
					<Tr>
						<Th>#</Th>
						<Th>Name</Th>
						<Th>Type</Th>
						<Th>HP</Th>
						<Th>Attack</Th>
						<Th>Defence</Th>
						<Th>Special Attack</Th>
						<Th>Special Defence</Th>
						<Th>Speed</Th>
					</Tr>
				</Thead>
				<Tbody>
					<TableDetails />
				</Tbody>
				<Tfoot>
					{/* <Tr>
						<Th>To convert</Th>
						<Th>into</Th>
						<Th isNumeric>multiply by</Th>
					</Tr> */}
				</Tfoot>
			</Table>
		</TableContainer>
	);
};

export default DataTable;
