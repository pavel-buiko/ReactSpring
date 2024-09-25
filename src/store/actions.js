export function setSearchTerm(searchTerm) {
  return {
    type: "SET_SEARCH_TERM",
    value: searchTerm,
  };
}

export function loginAction(user) {
  return {
    type: "LOGIN",
    value: user,
  };
}

export function logoutAction() {
  return {
    type: "LOGOUT",
  };
}
