import projectItems from "../../public/assets/dataArrays/projectItems";

const defaultState = {
  searchTerm: "",
  projectItems: projectItems,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "set_search_term":
      return { ...state, searchTerm: action.value };

    default:
      return state;
  }
};

export default reducer;
