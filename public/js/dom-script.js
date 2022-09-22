/* -------------------------------------------------------------------------- */
/* DOM API + ES(JS)                                                           */
/* -------------------------------------------------------------------------- */

{
  const app = document.createElement('div');
  app.classList.add('app');

  const headline = document.createElement('h2');
  headline.textContent = 'DOM 스크립트';

  const list = document.createElement('ul');

  let items = '명령형 프로그래밍, 실제 DOM을 사용해 UI 업데이트'.split(', ');

  items = items.map((item) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;

    // 삭제 버튼 생성
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('type', 'button');
    deleteButton.setAttribute('aria-label', '삭제');
    deleteButton.setAttribute('title', '삭제');
    deleteButton.style.marginLeft = '8px';
    deleteButton.textContent = '×';
    deleteButton.addEventListener('click', (e) => {
      e.target.parentElement.remove();
    });

    listItem.append(deleteButton);

    return listItem;
  });

  items.forEach((listItemElement) => {
    list.append(listItemElement);
  });

  app.append(headline);
  app.append(list);

  const root = document.getElementById('dom-js-root');
  root.append(app);
}
