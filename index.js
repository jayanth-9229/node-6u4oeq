let students = [
  {
    name: 'John',
    chemistry: 70,
    biology: 80,
    dob: '01-01-2000',
  },
  {
    name: 'Jane',
    chemistry: 90,
    biology: 90,
    dob: '01-01-2000',
  },
  {
    name: 'Jim',
    chemistry: 70,
    biology: 80,
    dob: '02-01-2000',
  },
  {
    name: 'Jake',
    chemistry: 60,
    biology: 70,
    dob: '01-01-2000',
  },
];

students.sort((a, b) => {
  let totalA = a.chemistry + a.biology;
  let totalB = b.chemistry + b.biology;

  if (totalA !== totalB) {
    return totalB - totalA;
  } else if (a.biology !== b.biology) {
    return b.biology - a.biology;
  } else {
    return 0;
  }
});

console.log(students);
