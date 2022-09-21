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
