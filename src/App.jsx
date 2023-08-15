import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UserProfile, Search, Home, HomeLayout } from "./pages";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 1000 * 60 * 5,
//     },
//   },
// });

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "profile",
        element: <UserProfile />,
      },
      // {
      //   path: "register",
      //   element: <Register />,
      //   action: registerAction,
      // },
      // {
      //   path: "login",
      //   element: <Login />,
      //   action: loginAction,
      // },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

// <QueryClientProvider client={queryClient}>
//   <RouterProvider router={router} />
//   <ReactQueryDevtools initialIsOpen={false} />
// </QueryClientProvider>
