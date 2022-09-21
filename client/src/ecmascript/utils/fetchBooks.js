// src/api/books.json 모듈을 불러와 booksApi 이름으로 사용합니다.

const booksApi = {
  version: '0.0.2',
  author: 'yamoo9@euid.dev',
  books: [
    {
      id: 'ISBN-9791191209563',
      title: '나의 친구 레베카',
      author: '케이트 더글러스 위긴',
      price: 13500,
    },
    {
      id: 'ISBN-9788943310141',
      title: '레베카의 작은 극장',
      author: '레베카 도트르메르',
      price: 54000,
    },
    {
      id: 'ISBN-9791158888367',
      title: '연애의 행방',
      author: '히가시노 게이고',
      price: 13320,
    },
    {
      id: 'ISBN-9788937434051',
      title: '파랑의 역사',
      author: '미셸 파스투로',
      price: 15120,
    },
    {
      id: 'ISBN-9791166113239',
      title: '산책과 연애',
      author: '유진목',
      price: 13500,
    },
    {
      id: 'ISBN-9791158888367',
      title: '불온한 파랑',
      author: '정이담',
      price: 12420,
    },
    {
      id: 'ISBN-9788983451170',
      title: '천 개의 파랑',
      author: '천선란',
      price: 12600,
    },
  ],
};

export const fetchBooks = (timeout = 1000, shouldReject = false) => {
  // Promise 객체를 반환합니다.
  return new Promise((resolve, reject) => {
    // 비동기 처리
    // timeout 초가 흐른 뒤, 타이머가 작동하도록 설정합니다.
    setTimeout(() => {
      if (!shouldReject) {
        // booksApi.books 값을 전송합니다.
        resolve(booksApi.books);
      } else {
        // shouldReject 값에 따라 오류 객체를 전송하거나,
        reject({ message: '알 수 없는 오류가 발생되었습니다.' });
      }
    }, timeout);
  });
};
