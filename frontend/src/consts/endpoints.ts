const API_URL = "http://localhost:3000";

export const API = {
  AUTH: {
    REGISTER: API_URL + "/register", //POST
    LOGIN: API_URL + "/login", //POST
    RECOVERY_CODE: API_URL + "/recoveryCode", //GET /:userEmail
  },
  STOCK: {
    GET_CATEGORIES: API_URL + "/getCategories", //GET protected
    GET_STOCKS: API_URL + "/", //GET protected /:userId
    CREATE_STOCKS: API_URL + "/", //POST protected
    EDIT_STOCKS: API_URL + "/", //PUT protected
    DELETE_STOCKS: API_URL + "/", //DELETE protected /:stockId
  },
  USER: {
    EDIT_USER: API_URL + "/", //PUT protected
    RECOVERY_USER_PASSWORD: API_URL + "/recoveryPassword", //PATCH protected
  },
};
