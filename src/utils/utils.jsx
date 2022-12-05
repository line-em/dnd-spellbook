export const paginate = (arr, pagination) => {
	const sliced = [];
	const arrCopy = arr;

	for (let i = 0; i < arr.length; i++) {
		sliced.push([arrCopy.slice(0, pagination)]);
		arrCopy.splice(0, pagination);
	}

	if (arrCopy.length !== 0) {
		sliced.push([arrCopy]);
	}
	return sliced;
};

export const sanitizeFilter = (obj) => {
	const filterObj = Object.keys(obj);
	const chosenFilters = filterObj.filter((item) => obj[item]);
	return chosenFilters;
};
