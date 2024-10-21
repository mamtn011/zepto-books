const api = "https://gutendex.com/books/";

// get books
export const getBooks = async () => {
  const response = await fetch(api);
  if (!response.ok) {
    throw new Error(`Error in fetching books.`);
  }
  const data = await response.json();
  return data;
};

// get books by id
export const getBookById = async (id) => {
  const response = await fetch(`${api}?ids=${id}`);
  if (!response.ok) {
    throw new Error(`Error in fetching books.`);
  }
  const data = await response.json();
  return data;
};
// get books by page number
export const getBooksByPage = async (pageNum) => {
  const response = await fetch(`${api}?page=${pageNum}`);
  if (!response.ok) {
    throw new Error(`Error in fetching books.`);
  }
  const data = await response.json();
  return data;
};

// get books by genre/topic
export const getBooksByGenre = async (genre) => {
  const response = await fetch(`${api}?topic=${genre}`);
  if (!response.ok) {
    throw new Error(`Error in fetching books.`);
  }
  const data = await response.json();
  return data;
};

// get books by genre/topic
export const getBooksByTitle = async (title) => {
  const modifiedTitle = title.trim().split(" ").join("%20");
  const response = await fetch(`${api}?search=${modifiedTitle}`);
  if (!response.ok) {
    throw new Error(`Error in fetching books.`);
  }
  const data = await response.json();
  return data;
};
