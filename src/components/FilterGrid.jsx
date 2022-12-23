import { StyledFilter } from "../styled-components/ClassBubble";
import { FilterFlexGrid } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";

const FilterGrid = (props) => {
	const { filterArray, title, setFilterSchools, setFilterClasses, filterSchools, filterClasses } =
		props;
	const currentFilter = filterClasses || filterSchools;
	const filtersLength = Object.values(currentFilter).filter((element) => element === true).length;
	const clear = "🧼 Clear Filters";

	if (currentFilter.hasOwnProperty(clear)) {
		delete currentFilter[clear];
	}

	const handleSelected = (filter) => {
		if (filter === clear) {
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
