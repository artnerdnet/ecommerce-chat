import fs from 'fs';

export const write = (filename, data, format = 'utf-8') => {
  return fs.writeFileSync(filename, JSON.stringify(data), format);
}

export const read = (filename, format = 'utf-8') => {
  return JSON.parse(fs.readFileSync(filename, format));
}

export const findById = (arr, id) => arr.find(
  (item) => item.id == id
);

export const generateId = (arr) => {
  let newId;
  
  if (!arr.length) {
    newId = 0
  } else {
    const maxId = arr.reduce(
      (max, product) => (product.id > max ? product.id : max),
      arr[0].id
    );
    newId = maxId+1
  }

  return newId
}