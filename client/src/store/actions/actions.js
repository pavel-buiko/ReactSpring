import { login, logout, searchTerm as searchType } from "./types";

export function setSearchTerm(searchTerm) {
  return {
    type: searchType,
    value: searchTerm,
  };
}

export function loginAction(user) {
  return {
    type: login,
    value: user,
  };
}

export function logoutAction() {
  return {
    type: logout,
  };
}

export function fetchSearchItems(searchTerm) {
  return async (dispatch) => {
    try {
      const response = await fetch(`/api/cards?search=${searchTerm}`);
      const data = await response.json();
      dispatch({
        type: "set_filtered_objects",
        value: data,
      });
    } catch (error) {
      alert("Happend error: \n", error);
    }
  };
}
