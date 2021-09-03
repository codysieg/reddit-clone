import React from "react";
import Wrapper, { WrapperVariant } from "../pages/wrapper";
import NavBar from "./NavBar";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ variant, children }) => {
  return (
    <>
      <NavBar />
      <Wrapper variant={variant}>{children}</Wrapper>
    </>
  );
};
