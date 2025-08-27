import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />
    }
])

export default router;