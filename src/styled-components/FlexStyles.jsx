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

export const WhiteSection = styled(FlexColumnWrapper)`
	background-color: var(--transparent-white);
	padding: var(--s) var(--sm);
	border-radius: 8px;
`;
