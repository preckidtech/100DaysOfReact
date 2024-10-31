const userData = [
  {
    firstName: "Patrick",
    lastName: "Oyebode",
    id: 1,
    course: "Civil Engineering",
  },

  {
    firstName: "Precious",
    lastName: "Oyebode",
    id: 2,
    course: "Computer Science",
  },

  {
    firstName: "Patricia",
    lastName: "Oyebode",
    id: 3,
    course: "Nursing Science",
  },

  {
    firstName: "Promise",
    lastName: "Oyebode",
    id: 4,
    course: "Pilot",
  },
];

function getUserData() {
  return userData;
}

function getUserData(id) {
  return userData.find((d) => d.id === id);
}

const data = getUserData(2);
const course = data.firstName;
course;
