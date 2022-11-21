import SpellbookLogo from "../assets/book.png";
import styled from "styled-components";

export const LogoImage250 = styled.div`
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
