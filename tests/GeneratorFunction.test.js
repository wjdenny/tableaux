const { expect } = require('chai')
const { GeneratorFunction } = require('../index.js')

// Get permutations of an array
// from https://stackoverflow.com/a/43260158
function perm(xs) {
	let ret = [];

	for (let i = 0; i < xs.length; i = i + 1) {
		let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

		if (!rest.length) { ret.push([xs[i]]) } 
		else { for(let j = 0; j < rest.length; j = j + 1) { ret.push([xs[i]].concat(rest[j])) } }
	}

	return ret;
}

const students = [
	{ score: 25, gender: 'male' },
	{ score: 23, gender: 'male' },
	{ score: 21, gender: 'male' },
	{ score: 19, gender: 'male' },
	{ score: 17, gender: 'male' },
	{ score: 15, gender: 'male' },
	{ score: 13, gender: 'male' },
	{ score: 11, gender: 'male' },
	{ score: 9, gender: 'male' },
	{ score: 14, gender: 'male' },
	{ score: 25, gender: 'female' },
	{ score: 23, gender: 'female' },
	{ score: 21, gender: 'female' },
	{ score: 19, gender: 'female' },
	{ score: 17, gender: 'female' },
	{ score: 15, gender: 'female' },
	{ score: 13, gender: 'female' },
	{ score: 11, gender: 'female' },
	{ score: 9, gender: 'female' },
	{ score: 14, gender: 'female' }
]

suite('GeneratorFunction', () => {
	it('returns an array', () => {
		const g = new GeneratorFunction(perm.call(this, students))
		expect(g).to.be.an('array')
	}
}
