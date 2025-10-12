"use client";

import Image from "next/image";
import logo from "../../public/logo.webp";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/button";
import Link from "next/link";

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="py-5 flex items-center justify-between relative mb-10">
      <AnimatePresence>
        {menuIsOpen && <MobileMenuNavbar setMenuIsOpen={setMenuIsOpen} />}
      </AnimatePresence>

      <Link href="/" className="flex items-center gap-2 select-none">
        <Image
          src={logo}
          alt="logo"
          className="rounded-full"
          width={60}
          height={60}
        />
        <div className="-space-y-1 text-lg">
          <div>BAMBOO</div>
          <div className="font-bold">HIBACHI</div>
        </div>
      </Link>

      <DesktopNavbar />

      <Link href={"/estimate"}>
        <Button className="hidden md:block" variant="outlined-red">
          Estimate
        </Button>
      </Link>

      <button
        className="block md:hidden z-[60]"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        {menuIsOpen ? <CgClose size={35} /> : <FiMenu size={35} />}
      </button>
    </header>
  );
}

function DesktopNavbar() {
  return (
    <nav className="hidden md:block select-none">
      <ul className="font-medium flex items-center gap-10 text-lg">
        <li>
          <Link href={"/locations"}>Locations</Link>
        </li>
        <li className="relative">
          <Link href={"/food-truck"} className="relative z-10">
            Food Truck
          </Link>
          <div className="absolute -bottom-2.5 -right-5 bg-main-red text-xs pathway font-black px-2 py-0.5 rounded-[4px] -rotate-12">
            NEW
          </div>
        </li>
        <li>
          <Link href={"/#menu"}>Menu</Link>
        </li>
        <li>
          <Link href={"/about-us"}>About Us</Link>
        </li>
        <li>
          <Link href={"/faq"}>FAQ</Link>
        </li>
        <li>
          <Link href={"/#contacts"}>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

function MobileMenuNavbar({
  setMenuIsOpen,
}: {
  setMenuIsOpen: (v: boolean) => void;
}) {
  const links = [
    { name: "Locations", href: "/locations" },
    { name: "Food Truck", href: "/food-truck", badge: "NEW" },
    { name: "Menu", href: "/#menu" },
    { name: "About Us", href: "/about-us" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/#contacts" },
  ];

  const closeMenu = () => setMenuIsOpen(false);

  return (
    <motion.nav
      className="fixed inset-0 z-50 flex justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeMenu}
    >
      {/* Background overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Sidebar menu */}
      <motion.div
        className="relative w-4/5 max-w-sm bg-background shadow-2xl p-10 flex flex-col justify-between z-50"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ul className="grid gap-6 font-medium text-lg">
          {links.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.05 * i }}
              className="flex items-center gap-2"
            >
              <Link
                href={link.href}
                onClick={closeMenu}
                className="hover:text-main-red transition"
              >
                {link.name}
              </Link>
              {link.badge && (
                <div className="bg-main-red text-xs font-black px-2 py-0.5 rounded-[4px]">
                  {link.badge}
                </div>
              )}
            </motion.li>
          ))}
        </ul>

        <Link href={"/estimate"} onClick={closeMenu}>
          <Button variant="outlined-red" className="w-full mt-8">
            Estimate
          </Button>
        </Link>
      </motion.div>
    </motion.nav>
  );
}
