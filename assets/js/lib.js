export const getBooks = async () => {
  const response = await fetch("https://gutendex.com/books/");
  if (!response.ok) {
    throw new Error(`Error in fetching books.`);
  }
  const data = await response.json();
  return data;
};
