import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header";
import store from "./utils/store";
import Body from "./components/Body";
import VideoContainer from "./components/VideoContainer";
import WatchPage from "./components/WatchPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import necessary functions
import Main from "./components/Main";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header /> 
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
