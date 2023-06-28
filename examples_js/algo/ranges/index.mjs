import { makeRanges } from './ranges.mjs';

const test = [
	// { borders: [], values: [] },
	// { borders: [], values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },

	{ borders: [-1, 0, 1], values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
	// { borders: [2, 4, 6, 8], values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
	// { borders: [11, 12, 13], values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },

	// { borders: [1, 2, 3, 4], values: [5, 10, 15, 20, 25, 30, 35, 40, 45] },
	// { borders: [21, 22, 23, 24], values: [5, 10, 15, 20, 25, 30, 35, 40, 45] },
	// { borders: [41, 42, 43, 44], values: [5, 10, 15, 20, 25, 30, 35, 40, 45] },
];

test.forEach((iTest) => {
	const result = makeRanges(iTest.borders, iTest.values);

	console.log(
		'= = =\nRanges: %o \nValues: %o \nResult: %o',
		JSON.stringify(iTest.borders),
		JSON.stringify(iTest.values),
		JSON.stringify(result),
	);
});
