import { ClassInfo, WhiteSectionBackdropLeft } from "../styled-components/SearchUtils.jsx";
import { FlexRowSpacedWrapper, WhiteSection } from "../styled-components/FlexStyles";
import { StyledLinkButton } from "../styled-components/StyledButton.jsx";
import Heading from "../styled-components/Heading.jsx";
import { capitalize } from "../utils/utils.jsx";
import Pills from "./Pills.jsx";

const ResultGridItem = ({ slug, name, description, classes, school, level }) => {
	const shortDesc =
		description.length > 132 ? description.substr(0, 135) + "..." : description + "...";
	const upperSchool = capitalize(school);

	return (
		<WhiteSection>
			<WhiteSectionBackdropLeft school={upperSchool}></WhiteSectionBackdropLeft>
			<Heading type="4">{name}</Heading>
			<FlexRowSpacedWrapper nowrap>
				<p key={slug}>
					<strong>{upperSchool}. </strong>
					{shortDesc}
				</p>
			</FlexRowSpacedWrapper>
			<ClassInfo>
				<Pills items={classes} />
				<StyledLinkButton path={`/results/spell/${slug}`}>Read more</StyledLinkButton>
			</ClassInfo>
		</WhiteSection>
	);
};

export default ResultGridItem;
