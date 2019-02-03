export const setStorage = (name, item) => {
  let data = JSON.stringify(item);
  localStorage.setItem(name, data);
};

export const getStorage = (name) => {
  let json = localStorage.getItem(name);
  if (!json) {
    json = "";
  }

  if (json) {
    console.log(JSON.parse(json));
  }

  console.log("json length", json.length);

  return json ? JSON.parse(json) : null;
};
