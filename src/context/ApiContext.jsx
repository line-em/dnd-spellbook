import { createContext, useEffect, useState } from "react";
import { sanitizeClasses } from "../utils/utils";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
	const [apiData, setApiData] = useLocalStorage("api", "testing");

	const fetchSpells = async (url) => {
		if (localStorage.getItem("api") && localStorage.getItem("api") !== undefined) {
			console.log("got it already");
			return apiData;
		} else {
			console.log("fetching the api");
			const data = [];
			try {
				do {
					const response = await axios.get(url);
					const res = await response.data;
					res.results.forEach(
						(result) => (result.dnd_class = sanitizeClasses(result.dnd_class))
					);
					data.push(...res.results);
					url = res.next;
				} while (url);
				return setApiData(data);
			} catch (err) {
				console.log(err);
			}
		}
	};

	fetchSpells("https://api.open5e.com/spells/");

	console.log("context loaded");

	return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
};
