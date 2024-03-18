// de momento enviare en este getter la data, normalmente aca se trabaja data modificada o filtrada.
export const getTopEntries = (state) => () => {
  return state.entries;
};

export const getEntryById =
  (state) =>
  (id = "") => {
    const entry = state.entries.find((entry) => entry.id === id);
    if (!entry) return;
    return { ...entry };
  };
