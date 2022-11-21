import styled from "styled-components";

const FlexColumnWrapper = styled.section`
	display: flex;
	flex-direction: column;
	gap: var(--sm);
`;

export const CenterFlexColumn = styled(FlexColumnWrapper)`
	place-items: center;
	text-align: center;
`;

export const WhiteSection = styled.section`
	background-color: var(--transparent-white);
	padding: var(--m);
	border-radius: 8px;
`;
