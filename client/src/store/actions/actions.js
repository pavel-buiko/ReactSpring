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
