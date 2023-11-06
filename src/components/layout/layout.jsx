import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { Loader } from "../loader/loader";
import { Container } from "../container/container";

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
