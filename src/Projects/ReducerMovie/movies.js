import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
  name: "movies",
  initialState: {
    list: [],
    title: "",
    rating: "",
    srno: 0,
    editBool: false,
    tempSrno: 0,
  },
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setRatings: (state, action) => {
      state.rating = action.payload;
    },

    editBoolFunc: (state, action) => {
      state.editBool = true;
      console.log(action.payload);
      state.title = action.payload.title;
      state.rating = action.payload.rating;
      state.tempSrno = action.payload.srno;
    },

    UpdateMovie: (state, action) => {
      state.editBool = false;
      let upd_obj = state.list.findIndex((obj) => obj.srno == state.tempSrno);
      state.list[upd_obj].title = state.title;
      state.list[upd_obj].rating = state.rating;
      state.title = "";
      state.rating = "";
    },

    deleteMovie: (state, action) => {
      state.list.splice(action.payload, 1);
      state.title = "";
      state.rating = "";
      state.editBool = false;
      // return {
      //   ...state,
      //   list: state.list.filter((val) => {
      //     return val.srno !== action.payload;
      //   }),
      // };
    },
    addMovie: (state, action) => {
      //   state.list = [...state.list, action.payload];
      state.srno = state.srno + 1;
      state.list = [
        ...state.list,
        { srno: state.srno, title: state.title, rating: state.rating },
      ];
      state.title = "";
      state.rating = "";
    },
  },
});
export const {
  addMovie,
  setTitle,
  setRatings,
  deleteMovie,
  editBoolFunc,
  UpdateMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
