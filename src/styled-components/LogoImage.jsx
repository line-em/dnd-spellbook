import SpellbookLogo from "../assets/book.png";
import styled from "styled-components";

const LogoImage = styled.div`
	background-image: url(${SpellbookLogo});
	background-size: cover;
	filter: invert(70%) drop-shadow(5px 5px 5px #000);
`;

export const LogoImage250 = styled(LogoImage)`
	width: 250px;
	height: 250px;

	@media screen and (max-width: 500px) {
		width: 200px;
		height: 200px;
	}
`;
