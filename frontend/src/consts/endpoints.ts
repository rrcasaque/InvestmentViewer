const API_URL = "http://localhost:3000";

export const API = {
  AUTH: {
    REGISTER: API_URL + "/auth/register", //POST
    LOGIN: API_URL + "/auth/login", //POST
    RECOVERY_CODE: API_URL + "/auth/recoveryCode", //GET /:userEmail
    VALIDATE_TOKEN: API_URL + "/auth/validateToken", //GET
  },
  STOCK: {
    GET_CATEGORIES: API_URL + "/stock/getCategories", //GET protected
    GET_STOCKS: API_URL + "/stock", //GET protected /:userId
    CREATE_STOCKS: API_URL + "/stock", //POST protected
    EDIT_STOCKS: API_URL + "/stock", //PUT protected
    DELETE_STOCKS: API_URL + "/stock", //DELETE protected /:stockId
  },
  USER: {
    EDIT_USER: API_URL + "/user", //PUT protected
    RECOVERY_USER_PASSWORD: API_URL + "/user/recoveryPassword", //PATCH protected
  },
};
