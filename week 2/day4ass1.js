class Book {
    title;
    author;
    pages;
    isAvailable=true;
  constructor(title, author, pages, isAvailable ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = isAvailable;
  }

  // methods
  borrowBook() {
    this.isAvailable = false;
  }

  returnBook() {
    this.isAvailable = true;
  }

  getInfo() {
    console.log(
      `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Available: ${this.isAvailable}`
    );
  }

  isLongBook() {
    return this.pages > 300;
  }
}

// Example usage
let b = new Book("C Programming", "Dennis Ritchie", 200, true);
b.getInfo(); // shows info
b.borrowBook();
b.getInfo(); // now availability is false