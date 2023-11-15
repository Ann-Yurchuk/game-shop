import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Loader } from "../loader";
import { Container } from "../container";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
