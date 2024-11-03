const x = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) => element * 2);
x;

const userData = [
  { name: "precious", age: 20, course: "computer science" },
  {
    name: "isaac",
    age: 28,
    course: "cyber security",
  },
  {
    name: "Dayo",
    age: 29,
    coure: "mechanical engineering",
  },
];

const userMap = userData.map((item) => item.name);
userMap;

const book = [
  { id: 1, title: "New York City", author: "Harry Porter" },
  {
    id: 2,
    title: "Alabama",
    author: "New cityo",
  },
  {
    id: 3,
    title: "Alaienkad new model",
    author: "Semiu",
  },
];

const newBook = {
  id: 4,
  title: "New book added",
  author: "Precious Oyebode ",
};

const booksAfterAdd = [...book, newBook];
booksAfterAdd;

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 1);
booksAfterDelete;

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}
