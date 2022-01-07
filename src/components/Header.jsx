import * as React from "react";

import Container from "./Container";
import NavBar from "./NavBar";

const Header = () => (
  <header className="shadow-lg bg-white sticky top-0 z-50">
    {/* bg-white/70 backdrop-blur-lg */}
    <Container>
      <NavBar />
    </Container>
  </header>
);

export default Header;
