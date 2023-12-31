import styled from "styled-components";
import { colors } from "../../color/colors.js";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: white;

  padding: 0px 12px;
  color: ${colors.background};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.07);
  transition: color 0.3s;
  border-top: 1px double ${colors.line};
  border-bottom: 1px double ${colors.line};

  &:hover,
  &:focus {
    color: #4d4d4d;
  }

  &.dark {
    background-color: #3d3d3d;
  }

  @media (max-width: 768px) {
    padding: 0 12px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 10px;
  }

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  flex-grow: 1;
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const ButtonToggle = styled.button`
  font-size: 20px;
  display: block;
  border: 0;
  background-color: transparent;
  padding: 0 8px;
  color: #4f709c;
  outline: none;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }

  &.dark {
    color: #c0c0c0;
  }
  @media (max-width: 768px) {
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const VisibleContainer = styled.div`
  display: none;
  flex-grow: 1;
  flex-basis: 100%;
  align-items: center;
  margin-top: 2rem;
  flex-grow: 1;

  @media (min-width: 1024px) {
    display: flex;
    flex-basis: auto;
    margin-top: 0;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin-right: auto;
  display: flex;

  &.lg {
    flex-direction: row;
  }
`;

export const NavItem = styled.li`
  margin: 16px 0 16px 8px;

  &.lg {
    margin: 0 8px 0 4px;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
`;

export const NavLink = styled(Link)`
  color: #4f709c;
  transition: color 0.3s;
  text-decoration: none;
  font-size: 30px;
  font-weight: bolder;

  &:hover,
  &:focus {
    color: #4f709c;
  }

  &.disabled {
    color: rgba(0, 0, 0, 0.3);
  }

  &.dark {
    color: #c0c0c0;

    &:hover,
    &:focus {
      color: #666666;
    }

    &.active {
      color: #666666;
    }
  }

  &.active {
    color: rgba(0, 0, 0, 0.9);
  }
`;

export const IconFlex = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 25px;
  }
`;
