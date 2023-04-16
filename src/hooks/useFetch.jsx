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

const fetchUniqueSpell = async (slug) => {
	if (localStorage.getItem("api") && localStorage.getItem("api") !== undefined && []) {
		const localSpells = JSON.parse(localStorage.getItem("api"));
		const spellObj = localSpells.find((spell) => spell.slug === slug);
		console.log(spellObj);
		return spellObj;
	} else {
		let url = `${import.meta.env.VITE_URL}?slug=${slug}`;
		try {
			const response = await axios.get(url);
			const results = await response.data.results;
			results[0].dnd_class = sanitizeClasses(results[0].dnd_class);
			return results[0];
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

export const useFetchUniqueSpell = (slug) => {
	const { data, isLoading } = useQuery(["spell", slug], () => fetchUniqueSpell(slug));
	return { spellObj: data, isLoading: isLoading };
};
