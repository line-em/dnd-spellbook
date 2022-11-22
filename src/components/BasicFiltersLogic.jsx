import { useState } from "react";
import { StyledFilter } from "../styled-components/ClassBubble";
import { FilterGrid } from "../styled-components/FlexStyles";
import Heading from "../styled-components/Heading";

const BasicFiltersLogic = ({ filterArray, title, initialState = false }) => {
	const [isOpen, setIsOpen] = useState(initialState);

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
						<div>
							<StyledFilter isImg={!filter.icon} selected={false}>
								{filter.icon && (
									<img src={filter.icon} alt={filter.class} key={index} />
								)}
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

export default BasicFiltersLogic;
