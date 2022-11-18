import { useState } from "react";
import reactLogo from "./assets/react.svg";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>DnD Spellbook</h1>
			<h1>Avronin’s Astral Assembly</h1>
			<h3>How do you want to inspect this tome?</h3>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores,
				repudiandae nisi veniam esse odit vitae rerum temporibus necessitatibus similique
				accusantium molestiae ducimus molestias mollitia. Numquam alias modi in adipisci.
			</p>
			<p>
				You point toward a creature that you can see and twist strands of chaotic energy
				around its fate. If the target gets a failure on a Charisma saving throw, the next
				attack roll or ability check the creature attempts within 10 minutes is made with
				disadvantage.
			</p>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;
