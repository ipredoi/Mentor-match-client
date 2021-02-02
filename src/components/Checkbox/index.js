import React from "react";

export default function Checkbox({ chosenFn, name, chosenArray }) {

	function handleClick(e) {
		if (e.target.checked) {
			chosenFn([...chosenArray, name]);
		} else {
			let idx = chosenArray.indexOf(name);
			if (idx !== -1) {
				chosenFn([...chosenArray.slice(0, idx), ...chosenArray.slice(idx + 1)]);
			}
		}
	}

	return <input type="checkbox" onClick={handleClick} />;
}
