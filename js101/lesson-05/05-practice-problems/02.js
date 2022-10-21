// Launch School, JS101 - Programming Foundations
// Lesson 05 / Advanced JavaScript Collections / Practice Problems / 02

/**
 * 02. How would you order the following array of objects based on the year of
 *     publication of each book, from the earliest to the latest?
 * 
 *     let books = [
 *       { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
 *       { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
 *       { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
 *       { title: 'Ulysses', author: 'James Joyce', published: '1922' },
 *       { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
 *     ];
 */

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

let sortedBooksByPubYear = books.sort((a, b) => Number(a.published) - Number(b.published));
console.log(sortedBooksByPubYear);
// => [
//      { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
//      { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//      { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//      { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//    ];