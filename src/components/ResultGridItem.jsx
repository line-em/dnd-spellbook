import {
	ClassInfo,
	SearchGrid,
	WhiteSectionBackdropLeft
} from "../styled-components/SearchUtils.jsx";
import { WhiteSection } from "../styled-components/FlexStyles";
import { StyledLinkButton } from "../styled-components/StyledButton.jsx";
import Heading from "../styled-components/Heading.jsx";
import { Pill, PillBox } from "../styled-components/Pills.jsx";
import { capitalize } from "../utils/utils.jsx";

const ResultGridItem = ({ slug, name, description, classes, school, level }) => {
	const shortDesc = description.substr(0, 25) + "...";
	const upperSchool = capitalize(school);

	return (
		<SearchGrid>
			<WhiteSection>
				<WhiteSectionBackdropLeft school={upperSchool}></WhiteSectionBackdropLeft>
				<Heading type="4">{name}</Heading>
				<p>{shortDesc}</p>
				<ClassInfo>
					<PillBox>
						{classes.map((item) => (
							<Pill>{item}</Pill>
						))}
					</PillBox>
					<Pill>
						{upperSchool} <br /> {level}
					</Pill>
				</ClassInfo>
				<StyledLinkButton path={`/spell/${slug}`}>read more</StyledLinkButton>
			</WhiteSection>
		</SearchGrid>
	);
};

export default ResultGridItem;
