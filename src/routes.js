import App from "./App";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import ErrorPage from "./pages/ErrorPage";
import ShowDetails from "./pages/ShowDetails";
import AddAShow from "./pages/AddAShow";

const routes =[
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/shows",
                element: <Shows />,
                children: [
                    {
                        path: "/shows/:id",
                        element: <ShowDetails />
                    }
                ]
            },
            {
                path: "/AddNew",
                element: <AddAShow />
            }
        ]
    }
];

export default routes;