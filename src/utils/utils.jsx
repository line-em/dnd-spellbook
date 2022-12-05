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

// export const someFilter = (filterArr, query, data) => {
// 	console.log(filterArr, query, data);
// 	return filterArr.length > 0
// 		? [data].filter((spell) => filterArr.some((element) => spell[query].includes(element)))
// 		: data;
// };

// export const everyFilter = (filterArr, query, data) =>
// 	filterArr.length > 0
// 		? [data].filter((spell) => filterArr.every((element) => spell[query].includes(element)))
// 		: data;
