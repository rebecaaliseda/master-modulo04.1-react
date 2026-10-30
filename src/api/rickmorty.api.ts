export interface CharacterEntity {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  origin: {
    name: string;
  };
  gender: string;
  location: {
    name: string;
  };
}

export const getCharacters = async (page: number, search: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`,
  );

  return response.json();
};

export const getCharacter = async (id: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  return response.json();
};
