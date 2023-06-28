export const makeRanges = (borders, values) => {

	let borderIndex = 0;
	let valueIndex = 0;
	let border;
	let value;

	const ranges = [[]];

	while (valueIndex < values.length) {
		value = values[valueIndex];
		border = borders[borderIndex];

		if (value <= border) {
			ranges[borderIndex].push(value);
			valueIndex++;
		} else {
			ranges.push([]);
			borderIndex++;
		}
	}

	return ranges;
};

// export const makeRanges = (borders, values) => {

// 	const ranges = [];
// 	let borderIndex = 0;
// 	let valueIndex = 0;
	
// 	let range = [];
// 	ranges.push(range);

// 	while (borders.length > borderIndex || values.length > valueIndex) {
// 		let border = borders[borderIndex];
// 		let value = values[valueIndex];

// 		if (value <= border) {
// 			range.push(value);
// 			valueIndex++;
// 		} else {
// 			range = [];
// 			ranges.push(range);

// 			borderIndex++;
// 		}

// 		console.log(borderIndex, valueIndex);
// 	}

// 	return ranges;
// };
