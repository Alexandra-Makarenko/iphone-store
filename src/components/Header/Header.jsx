import { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import { Container } from '../Container/Container';
// import { Link } from "./SharedLayout.styled";

export const Header = () => {
  return (
    <Container>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/auth">User</Link>          
        </nav>
    </Container>
  );
};