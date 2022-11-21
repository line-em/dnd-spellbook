import Heading from "../styled-components/Heading";
import StyledButton from "../styled-components/StyledButton";
import { LogoImage250 as LogoImage } from "../styled-components/LogoImage";
import { CenterFlexColumn } from "../styled-components/FlexStyles";

function Home() {
	return (
		<CenterFlexColumn>
			<LogoImage />
			<Heading type="1">DnD Spellbook</Heading>
			<Heading type="3">How do you want to inspect this tome?</Heading>
			<p>
				You can filter through classes and schools, or use the advanced feature to type or
				check mana costs and duration.
			</p>
			<StyledButton func={(e) => console.log("oi")}>Begin</StyledButton>
		</CenterFlexColumn>
	);
}

export default Home;
