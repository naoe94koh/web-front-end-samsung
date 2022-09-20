const {
  localStorage: storage,
  JSON: { parse, stringify },
} = globalThis;

function saveStorage(key, value) {
  storage.setItem(key, value);
  // storage.setItem(key, stringify(value));
}

function loadStorage(key) {
  return storage.getItem(key);
}

// 기본 내보내기
export default {
  load: loadStorage,
  save: saveStorage,
};
