import axios from "axios";
import { createContext, useEffect, useState } from "react";

const ApiContext = createContext();

const sanitizeClasses = (string) => {
	const split = string.split(",");
	const trim = split.map((item) => item.trim());
	return trim;
};

const ApiContextProvider = ({ children }) => {
	const [apiData, setApiData] = useState([]);
	useEffect(() => {
		if (localStorage.getItem("api")) {
			setApiData(JSON.parse(localStorage.getItem("api")));
		} else {
			console.log("FETCHING THE API!");
			async function fetchAllPages(url) {
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
					setApiData(data);
				} catch (err) {
					console.log(err);
				}
			}
			fetchAllPages("https://api.open5e.com/spells/");
			localStorage.setItem("api", JSON.stringify(apiData));
		}
	}, []);

	return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
};

export { ApiContext, ApiContextProvider };
