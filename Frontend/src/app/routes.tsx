import { createBrowserRouter } from "react-router-dom";

import { Root } from "./components/Root";
import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { Exhibition } from "./components/Exhibition";
import { PaintingDetailPage } from "./components/PaintingDetailPage";
import { Cart } from "./components/Cart";
import { Payment } from "./components/Payment";
import { About } from "./components/About";
import { Commissions } from "./components/Commissions";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";
import { SignUp } from "./components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // Home
      { index: true, Component: Hero },

      // Navigation Pages
      { path: "menu", Component: Menu },
      { path: "exhibition", Component: Exhibition },

      // Painting Details
      { path: "painting/:id", Component: PaintingDetailPage },

      // Cart & Checkout Flow
      { path: "cart", Component: Cart },
      { path: "payment", Component: Payment },
      
      { path: "signup", Component: SignUp },   

      // Static Pages
      { path: "about", Component: About },
      { path: "commissions", Component: Commissions },
      { path: "contact", Component: Contact },

      // 404
      { path: "*", Component: NotFound },
    ],
  },
]);