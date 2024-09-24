export function setSearchTerm(term) {
  return {
    type: "set_search_term",
    value: term,
  };
}

export function loginAction(user) {
  return {
    type: "LOGIN",
    value: user,
  };
}
