import { fetchBooks } from './utils/index.js';

const state = Object.freeze({
  loading: false,
  error: null,
  data: null,
});

const setState = (newState) => {
  return {
    ...state,
    ...newState,
  };
};

// Promise
function getBooks() {
  setState({ loading: true });

  fetchBooks(1000)
    .then((books) => {
      setState({ data: books });
    })
    .catch((error) => {
      setState({ error });
    })
    .finally(() => {
      setState({ loading: false });
    });
}

// getBooks();

// Async Function
const requestBooks = async () => {
  setState({ loading: true });
  try {
    const books = await fetchBooks(1000);
    setState({ data: books });
  } catch (error) {
    setState({ error });
  } finally {
    setState({ loading: false });
  }
};

// async function asyncGetBooks() {
//   setState({ loading: true });

//   try {
//     const books = await fetchBooks(1000);
//     setState({ data: books });
//   } catch (error) {
//     setState({ error });
//   } finally {
//     setState({ loading: false });
//   }

// }
