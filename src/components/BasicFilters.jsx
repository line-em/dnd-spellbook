import { useState } from "react";
import { StyledFilter } from "../styled-components/ClassBubble";
import { FilterGrid } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";

const BasicFilters = ({ filterArray, title, getClasses, getSchool }) => {
	const [isOpen, setIsOpen] = useState(true);
	const [selectedFilters, setSelectedFilters] = useState({});

	const handleSelected = (filter) => {
		const everyFilter = "♾️ All Filters";
		if (filter === everyFilter) {
			filterArray.map((item) =>
				setSelectedFilters((prev) => ({
					...prev,
					[item.class]: !prev[everyFilter]
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
			<Heading type="4">
				<div onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
					{title} {isOpen ? "➖" : "✖️"}
				</div>
			</Heading>
			{isOpen && (
				<FilterGrid>
					{filterArray.map((filter, index) => (
						<div onClick={() => handleSelected(filter.class)} key={index}>
							<StyledFilter
								isImg={!filter.icon}
								selected={selectedFilters[filter.class]}
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
