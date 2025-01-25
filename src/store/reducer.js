import { combineReducers } from "@reduxjs/toolkit";
//reducers
import authReducer from "./auth/reducers";
import subscriptionReducer from "./subscription/reducers";
import profileReducer from "./profile/reducers";
import characterReducer from "./characterSetting/reducers";
import languageReducer from "./language/reducers";
import tokenReducer from "./tokenpackage/reducers";
import faqReducer from "./faq/reducers";
import pageReducer from "./pages/reducers";
import userReducer from "./users/reducers";
import settingReducer from "./settings/reducer"
import transactionReducer from "./transaction/reducers"


const rootReducer = combineReducers({
  Auth: authReducer,
  Profile: profileReducer,
  Character: characterReducer,
  Language: languageReducer,
  Token: tokenReducer,
  Faq: faqReducer,
  Pages: pageReducer,
  User: userReducer,
  Subscription: subscriptionReducer,
  Setting:settingReducer,
  Transaction:transactionReducer
  
});

export default rootReducer;
