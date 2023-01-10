import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
	<HashRouter>
		<GlobalStyle />
		<App />
	</HashRouter>
);
