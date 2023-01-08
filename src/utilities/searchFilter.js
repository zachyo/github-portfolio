
export const searchFilter = (searchKey, data) => {
  let newData = data.filter((each) => each?.name.toLowerCase().indexOf(searchKey.toLowerCase()) === 0);
  return newData;
};


