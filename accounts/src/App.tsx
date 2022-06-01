import { Box } from "@chakra-ui/react";
import React from "react";
import Accounts from "./components/accounts";

const App = () => (
	<Box margin="1.2rem">
		<Box>Accounts</Box>
		<Box>
			<Accounts />
		</Box>
	</Box>
);

export default App;
