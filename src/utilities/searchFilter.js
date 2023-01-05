const stringify = (val) => {
    return `${val}`
}
export const searchFilter = (searchKey, data) => {
  let newData = data.filter((each) => each?.name.indexOf(searchKey) == 0);
  return newData;
};


