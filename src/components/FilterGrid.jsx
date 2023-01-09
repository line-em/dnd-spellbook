import { StyledFilter } from "../styled-components/ClassBubble";
import { FilterFlexGrid } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";

const FilterGrid = (props) => {
	const { filterArray, title, setFilters, filters } = props;
	// const { filterArray, title, setFilterSchools, setFilterClasses, filterSchools, filterClasses } =
	// 	props;
	// filterArray.filter((item) => item.class.includes("Bard"))
	const currentFilter = title === "Classes" ? filters.classes : filters.schools;
	console.log(currentFilter);
	const filtersLength = Object.values(currentFilter).filter((element) => element === true).length;
	const clear = "🧼 Clear Filters";

	if (currentFilter.hasOwnProperty(clear)) {
		delete currentFilter[clear];
	}

	const handleSelected = (filter) => {
		if (filter === clear) {
			filterArray.map((item) => {
				setFilters((prev) => ({
					...prev,
					classes: { ...prev.classes, [item.class]: false },
					schools: { ...prev.schools, [item.class]: false }
				}));
			});
		} else {
			setFilters((prev) => {
				return {
					...prev,
					[title === "Classes" ? "classes" : "schools"]: {
						...currentFilter,
						[filter]: !filter
					}
				};
			});
		}
	};

	// if (filter === clear) {
	// 	filterArray.map((item) =>
	// 		setFilterClasses
	// 			? setFilterClasses((prev) => ({
	// 					...prev,
	// 					[item.class]: false
	// 			  }))
	// 			: setFilterSchools((prev) => ({
	// 					...prev,
	// 					[item.class]: false
	// 			  }))
	// 	);
	// } else {
	// 	if (setFilterClasses) {
	// 		setFilterClasses((prev) => ({
	// 			...prev,
	// 			[filter]: !prev[filter]
	// 		}));
	// 	} else {
	// 		setFilterSchools((prev) => ({
	// 			...prev,
	// 			[filter]: !prev[filter]
	// 		}));
	// 	}
	// }

	return (
		<>
			<Heading type="4">{title}</Heading>
			<FilterFlexGrid>
				{filterArray.map((filter, index) => (
					<div onClick={() => handleSelected(filter.class)} key={index}>
						<StyledFilter
							isClear={filter.class === clear}
							isImg={!filter.icon}
							selected={currentFilter[filter.class]}
							disabled={filter.class === clear && filtersLength === 0}
						>
							{filter.icon && <img src={filter.icon} alt={filter.class} />}
							{!filter.icon && <p>{filter.class}</p>}
						</StyledFilter>
						{filter.icon ? <p>{filter.class}</p> : ""}
					</div>
				))}
			</FilterFlexGrid>
		</>
	);
};

export default FilterGrid;
