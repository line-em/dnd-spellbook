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
		console.log(apiData);
	}, []);

	// const arrClasses = res.results.forEach((result) => {
	// 	const split = result.dnd_class.split(",");
	// 	const trim = split.map((item) => item.trim());
	// 	result.dnd_class = trim;
	// 	return result;
	// });
	// axios.request(options).then((res) => {
	// 		console.log(res.data);
	// 		console.log(`Now it's running. Results num ${res.data.results.length}`);
	// 		console.log(filterSchool);
	// 		console.log(res.data.results);
	// 		console.log("Now with the class filter.");
	// 		const queryClasses = res.data.results.filter((result) => {
	// 			const splitClasses = result.dnd_class.split(",");
	// 			const trimClasses = splitClasses.map((item) => item.trim());

	// 			return filterClasses.every((element) => trimClasses.includes(element));
	return <ApiContext.Provider value={apiData}>{children}</ApiContext.Provider>;
};

export { ApiContext, ApiContextProvider };
