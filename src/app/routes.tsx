import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CompanionRegister from "./pages/CompanionRegister";
import BookingFlow from "./pages/BookingFlow";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import LiveDashboard from "./pages/LiveDashboard";
import UserDashboard from "./pages/UserDashboard";
import CompanionDashboard from "./pages/CompanionDashboard";
import MobileChat from "./pages/MobileChat";
import WebChat from "./pages/WebChat";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "signup", Component: SignUp },
      { path: "login", Component: Login },
      { path: "companion/register", Component: CompanionRegister },
      { path: "booking", Component: BookingFlow },
      { path: "payment", Component: Payment },
      { path: "payment/success", Component: PaymentSuccess },
      { path: "live/:sessionId", Component: LiveDashboard },
      { path: "dashboard/user", Component: UserDashboard },
      { path: "dashboard/companion", Component: CompanionDashboard },
      { path: "chat/mobile", Component: MobileChat },
      { path: "chat", Component: WebChat },
      { path: "*", Component: NotFound },
    ],
  },
]);
