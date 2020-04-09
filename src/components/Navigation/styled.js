import { Link as ReactRouterLink } from "react-router-dom";
import styled from "styled-components";

export const List = styled.div`
  text-align: center;
`;

export const Link = styled.a`
  display: inline-block;
  text-decoration: none;
  margin: 0 20px;
  color: ${({ theme }) => theme.colors.primary};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

export const NavItem = Link.withComponent(ReactRouterLink);
