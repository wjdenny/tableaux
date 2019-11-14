const faker = require('faker')

function gaussianRand() {
	  var rand = 0;

	  for (var i = 0; i < 6; i += 1) {
		      rand += Math.random();
		    }

	  return rand / 6;
}

const students = []

for (let i = 0; i < 13; i++) {
	let student = {
		name: { 
			family: faker.name.lastName(),
			given: faker.name.firstName()
		},
		grade: gaussianRand().toFixed(2),
		gender: faker.random.number(2) === 1 ? 'male' : 'female'
	}

	students.push(student)
}

module.exports = students
