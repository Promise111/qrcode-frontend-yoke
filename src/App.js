import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Movies from "./pages/Movies";
import QrCode from "./pages/QrCode";
import NotFound from "./components/NotFound";
import RootLayout from "./pages/RootLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <QrCode /> },
        { path: "scan/:id", element: <Movies /> },
      ],
      errorElement: <NotFound />,
    },
    { path: "/scan/:id", element: <Movies /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
