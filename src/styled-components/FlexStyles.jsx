import styled from "styled-components";

export const FlexColumnWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: var(--s);
`;

export const CenterFlexColumn = styled(FlexColumnWrapper)`
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const WhiteSection = styled.section`
	background-color: var(--transparent-white);
	padding: var(--m);
	border-radius: 8px;
`;
