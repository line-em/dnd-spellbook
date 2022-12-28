import axios from "axios";
import { useState } from "react";
import { sanitizeClasses } from "./utils";

export const fetchUniqueSlugSpell = async (slug) => {
	let spell;
	try {
		const url = `${import.meta.env.VITE_URL}?slug=${slug}`;
		const response = await axios.get(url);
		const results = response.data.results;
		results[0].dnd_class = sanitizeClasses(results[0].dnd_class);
		spell = results;
		return spell;
	} catch (error) {
		console.log(error);
	}
};

export const fetchAllSpells = async (url) => {
	const [apiData, setApiData] = useLocalStorage("api", {});

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

	fetchSpells(import.meta.env.VITE_URL);
	return apiData;
};
