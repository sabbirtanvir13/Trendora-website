import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Details from "../pages/Details";
import AllCategoryGallery from "../pages/AllCategoryGallery";
import AddToCart from "../pages/AddToCart";
import ContactSection from "../pages/ContactSection";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },

            {
             path:'/details/:id',
             element:<Details></Details>
            },
            {
             path:'/allcetagory',
             element:<AllCategoryGallery></AllCategoryGallery>
            },
            {
             path:'/cart',
             element:<AddToCart></AddToCart>
            },
            {
             path:'/contact',
             element:<ContactSection></ContactSection>
            }

        ]
    },
    {
        path: "/auth",
        element: <h2>auth</h2>
    },
    {
        path: "/",
        element: <h2>i am home</h2>
    },
    {
        path: "*",
        element: <h2>erroor </h2>
    },
])
export default router