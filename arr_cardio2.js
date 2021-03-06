// ## Array Cardio Day 2

const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
  ];

  const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
  const isadult = people.some(function (person) {
    const now = new Date();
    const y = now.getFullYear();
    if (y - person.year >= 19) return 1;
    else return 0;
  });

  console.log({ isadult });
  // Array.prototype.every() // is everyone 19 or older?

  const isadult1 = people.every(function (person) {
    const now = new Date();
    const y = now.getFullYear();
    if (y - person.year >= 19) return 1;
    else return 0;
  });

  console.log({ isadult1 });

  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423

  const findid = comments.find((ide) => ide.id === 823423);
  console.log(findid);

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423

  const findind = comments.findIndex((ide) => ide.id === 823423);
  console.log(findind);

  comments.splice(findind, 1);
  console.table(comments);