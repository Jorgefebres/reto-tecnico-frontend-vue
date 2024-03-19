export const setEntries = (state, entries) => {
  state.entries = entries;
  state.isLoading = false;
};

export const updateEntriesReadState = (state, updatedEntries) => {
  state.entries.forEach((entry) => {
    const updatedEntry = updatedEntries.find((item) => {
      return item.id === entry.id;
    });
    if (updatedEntry) {
      entry.read = updatedEntry.read;
    }
  });
  state.isLoading = false;
};

export const setReadEntries = (state, readEntries) => {
  state.readEntries = readEntries;
  state.isLoading = false;
};

export const setNewReadEntry = (state, readEntry) => {
  state.readEntries = [...state.readEntries, readEntry];
  state.isLoading = false;
};
