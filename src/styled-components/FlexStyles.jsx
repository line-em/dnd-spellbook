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
