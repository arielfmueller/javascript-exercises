const getTheTitles = function(books) {
  return books.map(book => book.title)
};

// const getTheTitles = function(books) {
//   let titles = [];
//   for (let i = 0; i < books.length; i++) {
//     titles.push(books[i].title);
//   }
//   return titles;
// };

const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
