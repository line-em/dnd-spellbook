import { StyledFilter } from "../styled-components/ClassBubble";
import { FilterFlexGrid } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";

const FilterGrid = ({ filterArray, title, setFilters, filters }) => {
	const currentFilter = title === "Classes" ? filters.classes : filters.schools;
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
				const type = title === "Classes" ? "classes" : "schools";
				return {
					...prev,
					[type]: {
						...prev[type],
						[filter]: !prev[type][filter]
					}
				};
			});
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
