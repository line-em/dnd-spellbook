import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
	const [apiData, setApiData] = useState([]);

	useEffect(() => {
		if (localStorage.getItem("api")) {
			setApiData(JSON.parse(localStorage.getItem("api")));
		} else {
			console.log("FETCHING THE API!");
			setApiData(fetchAllPages("https://api.open5e.com/spells/"));
			localStorage.setItem("api", JSON.stringify(apiData));
		}
	}, []);

	return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
};

const sanitizeClasses = (string) => {
	const split = string.split(",");
	const trim = split.map((item) => item.trim());
	return trim;
};

async function fetchAllPages(url) {
	const data = [];
	try {
		do {
			const response = await axios.get(url);
			const res = await response.data;
			res.results.forEach((result) => (result.dnd_class = sanitizeClasses(result.dnd_class)));
			data.push(...res.results);
			url = res.next;
		} while (url);
		return data;
	} catch (err) {
		console.log(err);
	}
}