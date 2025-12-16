import Layout from "../layout/Layout";
import Homepage from "../pages/Homepage";
import Quiz from "../pages/Quiz";
import Result from "../pages/Result";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "quiz/:id",
        element: <Quiz />,
      },
      {
        path: "result",
        element: <Result />,
      },
    ],
  },
];
