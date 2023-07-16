const texts = new Array(100).fill(' ');

const textsLetters = texts
	.map((str, blockIndex) => {
		return str.split('')
			.map((s) => ({ letter: s, blockIndex }));
	})
	.reduce((acc, cur) => acc.concat(cur), [])
	.map((ltr, index) => {
		ltr.index = index;
		return ltr;
	});

console.log(textsLetters, textsLetters.length);

const html = textsLetters.reduce((acc, item) => {
	const view = `
	<div class="letter"style="--i: ${item.index};">&nbsp;</div>
`;
	return acc + view;
}, '');

document.querySelector('.circle').innerHTML = html
