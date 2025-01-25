import Login from "./AuthPages/Login/Index";
import Otp from "./AuthPages/Otp/Index";
import SignUp from "./AuthPages/Signup/Index";
import ForgotPassword from "./AuthPages/forgotPassword/Index";
import ResetPassword from "./AuthPages/resetPassword/Index";
import CharacterSetting from "./SideTabPages/CharacterSetting";
import CharacterView from "./SideTabPages/CharacterSetting/View";
import ContentPage from "./SideTabPages/ContentPage";
import Dashboard from "./SideTabPages/Dashboard";
import FAQ from "./SideTabPages/FAQ";
import Language from "./SideTabPages/Language";
import Profile from "./SideTabPages/Profile";
import Setting from "./SideTabPages/Setting";
import Subscsription from "./SideTabPages/Subscription";
import TokenPackage from "./SideTabPages/TokenPackage";
import ManageUsers from "./SideTabPages/Users";
import AddSubscription from "./SideTabPages/Subscription/add";
import SubscriptionDetail from "./SideTabPages/Subscription/detail";
import EditSubscription from "./SideTabPages/Subscription/edit";
import Transaction from "./SideTabPages/Transaction";
import UserView from "./SideTabPages/Users/detail";
import PublicCharacter from "./SideTabPages/CharacterManage/PublicCharacter";
import PersionalCharacter from "./SideTabPages/CharacterManage/PersionalCharacter";

export const routes = [
  { path: "/login", component: <Login /> },
  { path: "/signup", component: <SignUp /> },
  { path: "/forgot-password", component: <ForgotPassword /> },
  { path: "/otp", component: <Otp /> },
  { path: "/reset-password", component: <ResetPassword /> },
];

export const privateRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/subscription-plan", component: <Subscsription /> },
  { path: "/user", component: <ManageUsers /> },
  { path: "/user/:id", component: <UserView/> },
  { path: "/page", component: <ContentPage/> },
  { path: "/faq", component: <FAQ/> },
  { path: "/subscription-plan/add", component: <AddSubscription /> },
  { path: "/subscription-plan/:id", component: <EditSubscription /> },
  { path: "/subscription-plan/detail/:id", component: <SubscriptionDetail /> },
  // { path: "/page", component: <ContentPage /> },
  { path: "/profile", component: <Profile /> },
  { path: "/setting", component: <Setting/> },
  { path: "/token", component: <TokenPackage/> },
  { path: "/character-setting", component: <CharacterSetting/> },
  { path: "/public-character", component: <PublicCharacter/> },
  { path: "/persional-character", component: <PersionalCharacter/> },
  { path: "/transaction", component: <Transaction/> },
  { path: "/character-setting/:id", component: <CharacterView/> },
  { path: "/language", component: <Language/> },

];
