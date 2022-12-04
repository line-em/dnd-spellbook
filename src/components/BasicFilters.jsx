import { useState } from "react";
import useToggle from "../hooks/useToggle";
import { StyledFilter } from "../styled-components/ClassBubble";
import { FilterGrid } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";
import { Info } from "../styled-components/SearchUtils";

const BasicFilters = ({ filterArray, title, info, getClasses, getSchool }) => {
	const [isOpen, setIsOpen] = useToggle();
	const [selectedFilters, setSelectedFilters] = useState({});
	const filtersLength = Object.values(selectedFilters).filter(
		(element) => element === true
	).length;
	const clear = "🧼 Clear Filters";

	const handleSelected = (filter) => {
		if (filter === clear) {
			filterArray.map((item) =>
				setSelectedFilters((prev) => ({
					...prev,
					[item.class]: false
				}))
			);
		} else {
			setSelectedFilters((prev) => ({
				...prev,
				[filter]: !prev[filter]
			}));
		}

		if (getClasses) {
			getClasses(selectedFilters);
		}

		if (getSchool) {
			getSchool(selectedFilters);
		}
	};
	return (
		<>
			<div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
				<Heading type="4">
					{title} {isOpen ? "➖" : "✖️"} <Info title={info}>Info</Info>
				</Heading>
			</div>
			{isOpen && (
				<FilterGrid>
					{filterArray.map((filter, index) => (
						<div onClick={() => handleSelected(filter.class)} key={index}>
							<StyledFilter
								isClear={filter.class === clear}
								isImg={!filter.icon}
								selected={selectedFilters[filter.class]}
								disabled={filter.class === clear && filtersLength === 0}
							>
								{filter.icon && <img src={filter.icon} alt={filter.class} />}
								{!filter.icon && <p>{filter.class}</p>}
							</StyledFilter>
							{filter.icon ? <p>{filter.class}</p> : ""}
						</div>
					))}
				</FilterGrid>
			)}
		</>
	);
};

export default BasicFilters;
