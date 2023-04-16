import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Ripples } from "@uiball/loaders";
import { CenterFlexColumn } from "./styled-components/FlexStyles";
import Home from "./pages/Home";
import Filters from "./pages/Filters";
import Results from "./pages/Results";
// import { ApiContextProvider } from "./context/ApiContext";
import ErrorPage from "./pages/ErrorPage";
import Spell from "./pages/Spell";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
			staleTime: Infinity
		}
	}
});

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2000);
	}, []);

	return (
		<CenterFlexColumn>
			{isLoading ? (
				<Ripples size={50} color="var(--lilac)" />
			) : (
				// <ApiContextProvider>
				<QueryClientProvider client={queryClient}>
					<Routes>
						<Route index element={<Home />} />
						<Route path="/" element={<Home />} />
						<Route path="/filters" element={<Filters />} />
						<Route path="/results" element={<Results />} />
						<Route path="/results/spell/:slug" element={<Spell />} />
						<Route path="*" element={<ErrorPage />} />
					</Routes>
				</QueryClientProvider>
				// </ApiContextProvider>
			)}
			<footer>
				Created with tea and love by{" "}
				<a
					href="https://github.com/line-em"
					target="_blank"
					rel="noopener noreferrer"
				>
					@line-em
				</a>
				.
			</footer>
		</CenterFlexColumn>
	);
}

export default App;
