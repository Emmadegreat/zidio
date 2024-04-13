import Dashboard from "../components/dashboard/dashboard";
import Login from "../components/login/login";
import Register from "../components/register/register";

const indexRoutes = [
  {
    name: "Register",
    path: "/",
    component: Register
  },
  {
    name: "Login",
    path: "/login",
    component: Login
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard
  }

];

export { indexRoutes };
