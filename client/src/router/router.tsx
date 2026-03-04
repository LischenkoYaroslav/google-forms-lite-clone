import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "@/App";
import { Home } from "@/pages/Home/Home";
import { Responses } from "@/pages/Responses/Responses";
import { FormBuilder } from "@/pages/FormBuilder/FormBuilder";
import { PageNotFound } from "@/pages/PageNotFound/PageNotFound";
import { FormFiller } from "@/pages/FormFiller/FormFiller";

export const routerConfig = (
  <Route element={<App />}>
    <Route index element={<Home />} />
    <Route path="forms/:formId/responses" element={<Responses />} />
    <Route path="forms/:id/fill" element={<FormFiller />} />
    <Route path="forms/new" element={<FormBuilder />} />
    <Route path="*" element={<PageNotFound />} />
  </Route>
);

export const router = createBrowserRouter(
  createRoutesFromElements(routerConfig),
);
