import SpellbookLogo from "./assets/book.png";
import styled from "styled-components";

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
	gap: 1rem;
`;

const CenterFlexColumn = styled(FlexColumnWrapper)`
	place-items: center;
	text-align: center;
`;

function App() {
	return (
		<CenterFlexColumn>
			<LogoImage />
			<h1>DnD Spellbook</h1>
			<h3>How do you want to inspect this tome?</h3>
			<p>
				You can filter through classes and schools, or use the advanced feature to type or
				check mana costs and duration.
			</p>
			<button>Begin</button>
		</CenterFlexColumn>
	);
}

export default App;
