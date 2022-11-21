import SpellbookLogo from "./assets/book.png";
import styled from "styled-components";
import Heading from "./styled-components/Heading";

const LogoImage = styled.div`
	background-image: url(${SpellbookLogo});
	width: 250px;
	height: 250px;
	background-size: cover;
	filter: invert(70%) drop-shadow(5px 5px 5px #000);

	@media screen and (max-width: 500px) {
		width: 200px;
		height: 200px;
	}
`;

const FlexColumnWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: "var(--s)";
`;

const CenterFlexColumn = styled(FlexColumnWrapper)`
	place-items: center;
	text-align: center;
`;

function App() {
	return (
		<CenterFlexColumn>
			<LogoImage />
			<Heading type="1">DnD Spellbook</Heading>
			<Heading type="2">DnD Spellbook</Heading>
			<Heading type="3">How do you want to inspect this tome?</Heading>
			<Heading type="4">DnD Spellbook</Heading>
			<Heading type="5">DnD Spellbook</Heading>
			<Heading type="6">DnD Spellbook</Heading>
			{/* <h1>DnD Spellbook</h1> */}
			<p>
				You can filter through classes and schools, or use the advanced feature to type or
				check mana costs and duration.
			</p>
			<button>Begin</button>
		</CenterFlexColumn>
	);
}

export default App;
