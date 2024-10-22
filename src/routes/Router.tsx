import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { ListagemDePonto } from "../pages/Ponto/ListagemDePonto";
import { Nav } from "../components/Nav/Nav";

export function Router() {
    const router = createBrowserRouter([
        {
            element: (
                <>
                    <Nav />
                    <Outlet />
                </>
            ),
            path: "/",
            children: [
                {
                    path: "/ponto",
                    element: <ListagemDePonto />,
                    children: [
                        {
                            path: "/ponto/cadastro",
                            element: <>Cadastro de ponto</>,
                        },
                    ],
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
