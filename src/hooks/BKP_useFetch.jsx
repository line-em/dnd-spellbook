import axios from "axios";
import { sanitizeClasses } from "../utils/utils";
import { useEffect, useState } from "react";

const useFetch = (props) => {
	const getAllSpells = true;
	const [results, setResults] = useState({});
	console.log(props);
	const getSpells = async () => {
		try {
			const response = await axios.get(props);
			const data = [];
			if (getAllSpells) {
				console.log("getallspells");
				do {
					const res = await response.data;
					res.results.forEach(
						(result) => (result.dnd_class = sanitizeClasses(result.dnd_class))
					);
					data.push(...res.results);
					props = res.next;
					console.log(data);
				} while (props);
				setResults(data);
			} else {
				const results = await response.data.results;
				results[0].dnd_class = sanitizeClasses(results[0].dnd_class);
				setResults(results[0]);
			}
			console.log(results);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => getSpells(), []);

	return results;
};

export default useFetch;

// UseContext w/ useFetch

import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import useFetch from "../hooks/BKP_useFetch";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
	const [apiData, setApiData] = useLocalStorage("api", {});
	if (localStorage.getItem("api") && localStorage.getItem("api") !== undefined) {
		console.log("got it already");
		apiData;
	} else {
		console.log("fetching the api");
		const results = useFetch(import.meta.env.VITE_URL);
		console.log("useFetch");
		setApiData(results);
	}

	return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
};
