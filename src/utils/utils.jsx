export const paginate = (arr, pageSize, pageNumber) => {
	const startIndex = (pageNumber - 1) * pageSize;
	if (arr) return arr.slice(startIndex, startIndex + pageSize);
};

export const capitalize = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

export const sanitizeClasses = (string) => {
	const split = string.split(",");
	const trim = split.map((item) => item.trim());
	return trim;
};

export const getClasses = (data, condition, keyword) =>
	data.filter((spell) => condition.every((element) => spell[keyword].includes(element)));

export const getSchools = (data, condition, keyword) =>
	data.filter((spell) => condition.some((element) => spell[keyword].includes(element)));

export const transformObj = (obj) => {
	const unparsedObj = Object.keys(obj);
	const newArray = unparsedObj.filter((item) => obj[item]);
	return newArray;
};
