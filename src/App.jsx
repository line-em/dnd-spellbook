import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { CenterFlexColumn } from "./styled-components/FlexStyles";
import Home from "./pages/Home";
import Filters from "./pages/Filters";
import Results from "./pages/Results";
import ErrorPage from "./pages/ErrorPage";
import Spell from "./pages/Spell";
import { QueryClient, QueryClientProvider } from "react-query";
import Loader from "./components/Loader";

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
		setTimeout(() => setIsLoading(false), 1000);
	}, []);

	return (
		<CenterFlexColumn>
			{isLoading ? (
				<Loader size={50} />
			) : (
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
