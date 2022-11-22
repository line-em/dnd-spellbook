import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Ripples } from "@uiball/loaders";
import { CenterFlexColumn } from "./styled-components/FlexStyles";
import Home from "./pages/Home";
import Filters from "./pages/Filters";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 3000);
	}, []);

	return (
		<CenterFlexColumn>
			{isLoading ? (
				<Ripples size={50} color="var(--lilac)" />
			) : (
				<Routes>
					<Route index element={<Home />} />
					<Route path="/" element={<Home />} />
					<Route path="/filters" element={<Filters />} />
					{/* <Route path="/results" element={<Results />} /> */}
				</Routes>
			)}
			<footer>
				Created with tea and love by{" "}
				<a href="https://github.com/line-em" target="_blank" rel="noopener noreferrer">
					@line-em
				</a>
				.
			</footer>
		</CenterFlexColumn>
	);
}

export default App;
