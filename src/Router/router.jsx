import { createBrowserRouter, useLocation, useNavigation } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import AllClasses from "../Pages/Classes/AllClasses";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SelectedClasses from "../Pages/UserDashboard/SelectedClasses/SelectedClasses";
import EnrolledClasses from "../Pages/UserDashboard/EnrolledClasses/EnrolledClasses";
import Payment from "../Pages/UserDashboard/Payment/Payment";
import PaymentHistory from "../Pages/UserDashboard/PaymentHistory/PaymentHistory";
import ManageClass from "../Pages/AdminDashboard/ManageClass/ManageClass";
import ManageUsers from "../Pages/AdminDashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import AddClass from "../Pages/InstructorsDashboard/addClass/AddClass";
import MyClasses from "../Pages/InstructorsDashboard/MyClasses/MyClasses";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UpdateClass from "../Pages/InstructorsDashboard/UpdateClass/UpdateClass";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path:"/signIn",
                element:<SignIn></SignIn>
            },
            {
                path:"/signUp",
                element:<SignUp></SignUp>
            },
            {
                path:"/instructors",
                element:<Instructors></Instructors>
            },
            {
                path:"/classes",
                element:<AllClasses></AllClasses>
            },
            {
                path:"/profile",
                element:<PrivateRouter><UserProfile></UserProfile></PrivateRouter>
            }
        ]
    },
    {
        path: "/dashboard",
        element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"selectedClass",
                element:<PrivateRouter><SelectedClasses></SelectedClasses></PrivateRouter>
            },
            {
                path:"enrolled",
                element:<PrivateRouter><EnrolledClasses></EnrolledClasses></PrivateRouter>
            },
            {
                path:"payment",
                element:<PrivateRouter><Payment></Payment></PrivateRouter>
            },
            {
                path:"paymentHistory",
                element:<PrivateRouter><PaymentHistory></PaymentHistory></PrivateRouter>
            },
            {
                path:"manageClass",
                element:<AdminRoute><ManageClass></ManageClass></AdminRoute>
            },
            {
                path:"manageUsers",
                element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path:"addClass",
                element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path:"myClass",
                element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            {
                path: "updateClass/:id",
                element:<InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>
            }
        ]
    }
])

export default router;