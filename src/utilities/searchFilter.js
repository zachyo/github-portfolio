
export const searchFilter = (searchKey, data) => {
  let newData = data.filter((each) => each?.name.toLowerCase().indexOf(searchKey) === 0);
  return newData;
};


