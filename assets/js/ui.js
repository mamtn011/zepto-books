import { getBooks } from "./lib.js";

export const ui = () => {
  const booksContainer = document.querySelector("#book-list");

  return {
    booksContainer,
  };
};

// showing books
export const showBooks = async () => {
  const { booksContainer } = ui();
  const books = await getBooks();
  const booksElms = books.results
    .map(
      (book) => `
    <div>
      <figure>
        <img src=${book?.formats["image/jpeg"]} alt="book" />
      </figure>
      <h3 class="book-title">
        <a href="./book_single.html"> ${book.title} </a>
      </h3>
      <div>
        <p><strong>Id:</strong> ${book.id}</p>
        <p><strong>Author:</strong> ${book.authors[0]?.name}</p>
        <p><strong>Genre:</strong> ${book.bookshelves[0]}</p>
      </div>
    </div>
  `
    )
    .join("");
  booksContainer.insertAdjacentHTML("afterbegin", booksElms);
};
