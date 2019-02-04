export const setStorage = (name, item) => {
  let data = JSON.stringify(item);
  localStorage.setItem(name, data);
};

export const getStorage = (name) => {
  let json = localStorage.getItem(name);
  if (!json) {
    json = "";
  }

  return json ? JSON.parse(json) : null;
};

export const clearStorage = (item) => {
  if (item) {
    localStorage.removeItem(item);
  } else {
    localStorage.clear();
  }
};
