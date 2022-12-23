export const paginate = (arr, pageSize, pageNumber) => {
	const startIndex = (pageNumber - 1) * pageSize;
	return arr.slice(startIndex, startIndex * pageSize);
};

export const sanitizeFilter = (obj) => {
	const filterObj = Object.keys(obj);
	const chosenFilters = filterObj.filter((item) => obj[item]);
	return chosenFilters;
};

export const sanitizeClasses = (string) => {
	const split = string.split(",");
	const trim = split.map((item) => item.trim());
	return trim;
};
