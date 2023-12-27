import App from "./App";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import Genres from "./pages/Genres";
import ErrorPage from "./pages/ErrorPage";

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
                element: <Shows />
            },
            {
                path: "/genres",
                element: <Genres />
            }
        ]
    }
];

export default routes;