"use client";
import { AuthContext } from "@contexts";
import styled from "@emotion/styled";
import logo from "@images/Genesis_logo.png";
import {
  AuthenticatedTemplate,
  SignInButton,
  SignOutButton,
  UnauthenticatedTemplate,
} from "@src/components";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const StyledHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #e2efff;
  color: #000;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  color: #0070f3;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #003366;
  }

  &:active {
    color: #0000ff;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #0070f3;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    visibility: visible;
    width: 100%;
  }
`;

export const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <StyledHead>
      <Image
        src={logo}
        width={75}
        height={75}
        style={{ width: "100px", height: "auto" }}
        alt='GenesisX Logo'
      />
      <h1 className='text-5xl font-extrabold text-emerald-700 text-center mt-4 mb-4'>
        {/* Alternative to AuthenticatedTemplate and UnauthenticatedTemplate */}
        {isAuthenticated ? "My Account" : "Sample App"}
      </h1>
      <StyledNav>
        <AuthenticatedTemplate>
          <SignOutButton />
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
          <SignInButton />
        </UnauthenticatedTemplate>

        {isAuthenticated && (
          <StyledLink href='/' className='my-2'>
            Home
          </StyledLink>
        )}
        <StyledLink href='/profile' className='my-2'>
          Profile
        </StyledLink>
        {/* <a href="/profile">Profile</a> */}
      </StyledNav>
    </StyledHead>
  );
};
