import React from "react";
import { Ripples } from "@uiball/loaders";

function Loader({ size = 30, color = "var(--lilac)", text = "" }) {
	return (
		<>
			<Ripples size={size} color={color} />
			{text}
		</>
	);
}

export default Loader;
