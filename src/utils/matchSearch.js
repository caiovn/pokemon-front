/* eslint-disable no-plusplus */
const matchSearch = (apiArray, search) => {
  const arrayAuxiliar = [];

  for (let i = 0; i < apiArray.length; i++) {
    for (let j = 0; j < search.length; j++) {
      const pokemonName = apiArray[i].info.name.toLowerCase();
      if (search === pokemonName.slice(0, j + 1)) {
        arrayAuxiliar.push(apiArray[i]);
      }
    }
  }

  return arrayAuxiliar;
};

export default matchSearch;
