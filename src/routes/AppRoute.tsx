import { Routes, Route } from "react-router-dom";
import { MainLayouts } from "../layouts/MainLayouts";
import { AppointmentPage } from "../pages/AppointmentPage";
import { CatalogPage } from "../pages/CatalogPage";
import { MainPage } from "../pages/MainPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { MyPetsPage } from "../pages/PetsPage";
import { ServicesPage } from "../pages/ServicesPage";
import { SignPage } from "../pages/SignPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayouts />}>
        <Route index element={<MainPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="signIn" element={<SignPage />} />
        <Route path="signUp" element={<SignPage />} />
        <Route path="pets" element={<MyPetsPage />} />
        <Route path="appointment" element={<AppointmentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
