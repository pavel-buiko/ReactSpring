import projectItems from "../../public/assets/dataArrays/projectItems";

const defaultState = {
  searchTerm: "",
  projectItems: projectItems,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "set_search_term":
      return { ...state, searchTerm: action.value };

    default:
      return state;
  }
};

const userState = {
  isAuthenticated: false,
  user: null,
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("Congrats");
      return { ...state, isAuthenticated: true, user: action.value };

    default:
      return state;
  }
};
