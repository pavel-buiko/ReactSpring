export function setSearchTerm(term) {
  return {
    type: "set_search_term",
    value: term,
  };
}
