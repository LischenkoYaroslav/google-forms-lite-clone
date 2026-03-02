import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "@/App";
import { Home } from "@/pages/Home/Home";
import { FormBuilder } from "@/pages/FormBuilder/FormBuilder";

export const routerConfig = (
  <Route element={<App />}>
    <Route index element={<Home />} />
    <Route path="*" element={<FormBuilder />} />
  </Route>
);

export const router = createBrowserRouter(
  createRoutesFromElements(routerConfig),
);
