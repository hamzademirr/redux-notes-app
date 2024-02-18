import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: localStorage.getItem('notes') ? JSON.parse(localStorage.getItem('notes')) : [],
    serachTerm: '',
  },
  reducers: {
    addNotes: {
      reducer(state, action) {
        state.notes.push(action.payload);
        localStorage.setItem('notes', JSON.stringify(state.notes));
      },
      prepare: ({ title, content, color }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            color,
          }
        }
      }
    },
    destroy: (state, action) => {
      const id = action.payload;
      const filtered = state.notes.filter((item) => item.id !== id);
      state.notes = filtered;
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },
    serachTerm: (state, action) => {
      state.serachTerm = action.payload;
    }
  }
})
export const selectNotes = (state) => state.notes.notes;
export const selectSearchTerm = (state) => state.notes.serachTerm;
export const { addNotes, destroy, serachTerm } = notesSlice.actions;
export default notesSlice.reducer;
