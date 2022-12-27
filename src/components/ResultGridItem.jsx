import { ClassInfo, WhiteSectionBackdropLeft } from "../styled-components/SearchUtils.jsx";
import {
	FlexColumnWrapper,
	FlexRowSpacedWrapper,
	FlexRowWrapper,
	WhiteSection
} from "../styled-components/FlexStyles";
import { StyledLinkButton } from "../styled-components/StyledButton.jsx";
import Heading from "../styled-components/Heading.jsx";
import { Pill, PillBox } from "../styled-components/Pills.jsx";
import { capitalize } from "../utils/utils.jsx";

const ResultGridItem = ({ slug, name, description, classes, school, level }) => {
	const shortDesc =
		description.length > 132 ? description.substr(0, 135) + "..." : description + "...";
	const upperSchool = capitalize(school);

	return (
		<WhiteSection key={slug}>
			<WhiteSectionBackdropLeft school={upperSchool}></WhiteSectionBackdropLeft>
			<Heading type="4">{name}</Heading>
			<FlexRowSpacedWrapper nowrap>
				<p>{shortDesc}</p>
				<StyledLinkButton path={`/spell/${slug}`}>Read more</StyledLinkButton>
			</FlexRowSpacedWrapper>
			<ClassInfo>
				<PillBox>
					{classes.map((item) => (
						<Pill>{item}</Pill>
					))}
				</PillBox>
				<Pill>
					<strong>{upperSchool}</strong> <br /> {level}
				</Pill>
			</ClassInfo>
		</WhiteSection>
	);
};

export default ResultGridItem;
