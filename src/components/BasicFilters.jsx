import { StyledFilter } from "../styled-components/ClassBubble";
import { FilterGrid } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";
import { Info } from "../styled-components/SearchUtils";

const BasicFilters = ({
	filterArray,
	title,
	info,
	setFilterSchools,
	setFilterClasses,
	filterSchools,
	filterClasses
}) => {
	const clear = "🧼 Clear Filters";
	const currentFilter = filterClasses || filterSchools;
	const filtersLength = Object.values(currentFilter).filter((element) => element === true).length;

	if (currentFilter.hasOwnProperty(clear)) {
		delete currentFilter[clear];
	}

	const handleSelected = (filter) => {
		if (filter === clear) {
			// if (setFilterClasses) {
			// 	filterArray.map((item) =>
			// 		setFilterClasses((prev) => ({
			// 			...prev,
			// 			[item.class]: false
			// 		}))
			// 	);
			// } else {
			// 	filterArray.map((item) =>
			// 		setFilterSchools((prev) => ({
			// 			...prev,
			// 			[item.class]: false
			// 		}))
			// 	);
			// }
			filterArray.map((item) =>
				setFilterClasses
					? setFilterClasses((prev) => ({
							...prev,
							[item.class]: false
					  }))
					: setFilterSchools((prev) => ({
							...prev,
							[item.class]: false
					  }))
			);
		} else {
			if (setFilterClasses) {
				setFilterClasses((prev) => ({
					...prev,
					[filter]: !prev[filter]
				}));
			} else {
				setFilterSchools((prev) => ({
					...prev,
					[filter]: !prev[filter]
				}));
			}
		}
	};

	return (
		<>
			<Heading type="4">
				{title} <Info title={info}>Info</Info>
			</Heading>
			<FilterGrid>
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
			</FilterGrid>
		</>
	);
};

export default BasicFilters;
