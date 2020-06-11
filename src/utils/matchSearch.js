/* eslint-disable no-plusplus */
const matchSearch = (apiArray, search) => {
  const searchArray = apiArray;
  const arrayAuxiliar = [];

  for (let i = 0; i < searchArray.length; i++) {
    for (let j = 0; j < search.length; j++) {
      const pokemonName = searchArray[i].info.name.toLowerCase();
      if ((pokemonName.charAt(j) === search.charAt(j))
          && (search === pokemonName.slice(0, j + 1))) {
        arrayAuxiliar.push(searchArray[i]);
      }
    }
  }

  return arrayAuxiliar;
};

export default matchSearch;
