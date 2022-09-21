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

// TDD(BDD) - Testing Library / React (Jest)
// vs.
// CDD - Storybook / React

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

// Jest 테스트 수행

// test('desc', () => {
//   // 비동기 처리
//   return fetchBooks()
//     .then((response)=> response.json())
//     .then(json => {
//       expect(received).toBe(expected);
//     })
//     .catch(error => console.error(error.message));
// })

// test('desc', async () => {
//   // 비동기 처리
//   try {
//     const response = await fetchBooks();
//     const json = await response.json();
//     expect(received).toBe(expected);
//   } catch (error) {
//     console.error(error.message)
//   }
// })
