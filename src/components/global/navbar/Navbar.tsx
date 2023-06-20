"use client";
import useFirebase from "@/hooks/useFirebase";
import logo from "../../../assets/images/logo.png";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarWithCTAButton() {
  const { user, logOut } = useFirebase();
  const loc = usePathname();
  console.log(user);
  return (
    <Navbar fluid rounded>
      <Link href="/" className="flex">
        <Image
          width={0}
          height={0}
          alt="ROBU Logo"
          className="w-auto mr-3 h-8 sm:h-9"
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          ROBU
        </span>
      </Link>
      <div className="flex md:hidden">
        {user?.email ? (
          <div className="mx-0 md:hidden">
            <Dropdown
              inline
              label={
                <Image
                  className="rounded-full"
                  width={40}
                  height={40}
                  alt="User settings"
                  src={user?.photoURL as string}
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
        ) : null}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          className={`
            ${
              loc == "/" ? "text-primary font-semibold" : ""
            } m-2 hover:text-primary
          `}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`
            ${
              loc == "/about" ? "text-primary font-semibold" : ""
            } m-2 hover:text-primary
          `}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`
            ${
              loc == "/contact" ? "text-primary font-semibold" : ""
            } m-2 hover:text-primary
          `}
          href="/contact"
        >
          Contact
        </Link>
        {user?.email ? null : (
          <Link href="/login" className="md:hidden">
            <Button className=" bg-primary hover:bg-secondary">Login</Button>
          </Link>
        )}
      </Navbar.Collapse>
      {user?.email ? null : (
        <Link href="/login" className="md:flex hidden ">
          <Button className="bg-primary hover:bg-secondary">Login</Button>
        </Link>
      )}

      {user?.email ? (
        <div className="md:flex md:order-2 hidden">
          <Dropdown
            inline
            label={
              <Image
                className="rounded-full"
                width={40}
                height={40}
                alt="User settings"
                src={user?.photoURL as string}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={logOut}>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      ) : null}
    </Navbar>
  );
}
