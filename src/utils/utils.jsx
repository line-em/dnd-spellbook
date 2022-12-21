export const paginate = (arr, pageSize, pageNumber) => {
	console.log(arr);
	const sliced = [];
	const arrCopy = arr;

	for (let i = 0; i < arr.length; i++) {
		sliced.push([arrCopy.slice(0, pageSize)]);
		arrCopy.splice(0, pageSize);
	}

	if (arrCopy.length !== 0) {
		sliced.push([arrCopy]);
	}
	return sliced;
};

// export const paginate = (items, pageNumber, pageSize) => {
// 	const startIndex = (pageNumber - 1) * pageSize;
// 	return items.slice(startIndex, startIndex + pageSize);
// };

export const sanitizeFilter = (obj) => {
	const filterObj = Object.keys(obj);
	const chosenFilters = filterObj.filter((item) => obj[item]);
	return chosenFilters;
};
