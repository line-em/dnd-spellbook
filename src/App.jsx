import styled from "styled-components";
import { Ripples } from "@uiball/loaders";
import { useEffect, useState } from "react";
import Home from "./pages/Home";

const FlexColumnWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: var(--sm);
`;

const CenterFlexColumn = styled(FlexColumnWrapper)`
	place-items: center;
	text-align: center;
`;

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 3000);
	}, []);

	return (
		<CenterFlexColumn>
			{isLoading ? <Ripples size={50} color="var(--lilac)" /> : <Home />}
		</CenterFlexColumn>
	);
}

export default App;
