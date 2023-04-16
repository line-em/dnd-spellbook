import { createContext, useEffect, useState } from "react";
import { sanitizeClasses } from "../utils/utils";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";
import { useFetchSpells } from "../hooks/useFetch";

// export const ApiContext = createContext();

// export const ApiContextProvider = ({ children }) => {
// const [apiData, setApiData] = useLocalStorage("api", {});

// const { data, isLoading, isError } = useFetchSpells();

// if (isLoading) {
// 	console.log("loading");
// }

// if (isError) {
// 	// Render error state
// 	console.log("error");
// }

// const fetchSpells = async (url) => {
// 	if (localStorage.getItem("api") && localStorage.getItem("api") !== undefined) {
// 		console.log("got it already");
// 		return apiData;
// 	} else {
// 		console.log("fetching the api");
// 		const data = [];
// 		try {
// 			do {
// 				const response = await axios.get(url);
// 				const res = await response.data;
// 				res.results.forEach(
// 					(result) => (result.dnd_class = sanitizeClasses(result.dnd_class))
// 				);
// 				data.push(...res.results);
// 				url = res.next;
// 			} while (url);
// 			return setApiData(data);
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	}
// };

// useEffect(() => {
// 	const url = import.meta.env.VITE_URL;
// 	if (!localStorage.getItem("api")) {
// 		fetchSpells(url);
// 	} else {
// 		setApiData(JSON.parse(localStorage.getItem("api")));
// 	}
// }, [apiData]);

// console.log("context loaded");

// 	return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
// };
