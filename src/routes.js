import App from "./App";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Genres from "./pages/Genres";
import ErrorPage from "./pages/ErrorPage";
import ShowDetails from "./pages/ShowDetails";

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
                path: "/genres",
                element: <Genres />
            }
        ]
    }
];

export default routes;