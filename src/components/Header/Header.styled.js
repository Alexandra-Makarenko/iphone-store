import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const HeaderBox = styled.section`{
//   position: fixed;
  }
`;

export const StyledLink = styled(NavLink)`{
   color: teal;
   display: flex;
  &.active {
    font-weight: 900;
  }
  }
`;