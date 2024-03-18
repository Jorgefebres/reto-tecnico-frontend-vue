// de momento enviare en este getter la data, normalmente aca se trabaja data modificada o filtrada.
export const getTopEntries = (state) => () => {
  return state.entries;
};
