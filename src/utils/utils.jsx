export const paginate = (arr, pageSize, pageNumber) => {
	console.log(typeof pageSize);
	console.log(typeof pageNumber);
	const startIndex = (pageNumber - 1) * pageSize;
	console.log(typeof startIndex);
	console.log(startIndex + " startIndex");
	console.log(startIndex + pageSize + " startIndex + pageSize");
	const sliced = arr.slice(startIndex, startIndex + pageSize);
	return sliced;
};

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
