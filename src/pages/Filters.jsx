import Heading from "../styled-components/Heading";
import { WhiteSection } from "../styled-components/FlexStyles";
import classesData from "../assets/classes/classesData.js";
import Artificer from "../assets/classes/Class Icon - Artificer.svg";

const Filters = (props) => {
	const classMap = classesData.map((clss, index) => (
		<img src={clss.symbol} alt={clss.class} key={index} />
	));
	return (
		<WhiteSection>
			<Heading type="2">The Spellbook</Heading>
			<p>Please select the filters you'd like to apply, and click on Search.</p>
			<section>
				<div>Classes</div>
				{classMap}
				<div>Schools</div>
			</section>
		</WhiteSection>
	);
};

export default Filters;
