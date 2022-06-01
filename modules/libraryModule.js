// Creating book and library classes
export class Library {
  constructor(books = []) {
    this.books = books;
  }

  add(book) {
    this.books.push(book);
  }

  remove(index) {
    this.books.splice(this.getBook(index), 1);
  }

  getBook(index) {
    for (let i = 0; i < this.books.length; i += 1) {
      if (Number(this.books[i].index) === Number(index)) {
        return i;
      }
    }
    return -1;
  }
}
export const library = new Library();