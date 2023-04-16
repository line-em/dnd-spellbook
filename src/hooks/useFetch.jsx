import { useQuery } from "react-query";
import { sanitizeClasses } from "../utils/utils";
import axios from "axios";

const fetchSpells = async () => {
	let url = import.meta.env.VITE_URL;
	if (localStorage.getItem("api") && localStorage.getItem("api") !== undefined && []) {
		console.log("got it already");
		return JSON.parse(localStorage.getItem("api"));
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
			localStorage.setItem("api", JSON.stringify(data));
			return data;
		} catch (err) {
			console.log(err);
		}
	}
};

export const useFetchSpells = () => {
	const { data, isLoading } = useQuery("spells", fetchSpells);
	const apiData = Array.isArray(data) ? [...data] : [];
	return { apiData: apiData, isLoading: isLoading };
};
