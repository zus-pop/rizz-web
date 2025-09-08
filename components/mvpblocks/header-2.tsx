"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import { Menu, X, ArrowRight, Zap, Search } from "lucide-react";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Header2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.header
        // Màu nền và viền header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 border-b border-border/50 ${
          isScrolled
            ? "bg-background/80 shadow-sm backdrop-blur-md" // Màu nền khi cuộn
            : "bg-background" // Màu nền mặc định
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Link
                prefetch={false}
                href="/"
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  {/* Logo màu gradient */}
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-lg dark:bg-primary">
                    <Zap className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full bg-green-400"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground text-2xl font-bold font-lobster">
                    Rizz
                  </span>
                </div>
              </Link>
            </motion.div>

            <nav className="hidden items-center space-x-1 lg:flex">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    prefetch={false}
                    href={item.href}
                    // Màu chữ cho Nav Items
                    className="text-foreground/80 hover:text-foreground relative rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {hoveredItem === item.name && (
                      <motion.div
                        className="bg-muted absolute inset-0 rounded-lg"
                        layoutId="navbar-hover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="hidden items-center space-x-3 lg:flex"
              variants={itemVariants}
            >
              <motion.button
                // Màu icon search
                className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg p-2 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Search className="h-5 w-5" />
              </motion.button>

              <Link
                prefetch={false}
                href="/login"
                // Màu chữ và viền cho Sign In
                className="text-foreground/80 hover:text-foreground border border-border rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                Sign In
              </Link>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  prefetch={false}
                  href="/signup"
                  // Màu nền và chữ cho Get Started
                  className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center space-x-2 rounded-lg px-5 py-2.5 text-sm font-medium shadow-sm transition-all duration-200"
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.button
              // Màu icon menu mobile
              className="text-foreground hover:bg-muted rounded-lg p-2 transition-colors duration-200 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              variants={itemVariants}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 dark:bg-card-foreground/20 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              // Màu nền và viền của menu mobile
              className="border-border bg-background fixed top-16 right-4 z-50 w-80 overflow-hidden rounded-2xl border shadow-2xl lg:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="space-y-6 p-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={mobileItemVariants}>
                      <Link
                        prefetch={false}
                        href={item.href}
                        // Màu chữ cho nav item mobile
                        className="text-foreground hover:bg-muted block rounded-lg px-4 py-3 font-medium transition-colors duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  // Viền trên của phần nút mobile
                  className="border-border space-y-3 border-t pt-6"
                  variants={mobileItemVariants}
                >
                  <Link
                    prefetch={false}
                    href="/login"
                    // Màu chữ cho Sign In mobile
                    className="text-foreground hover:bg-muted block w-full rounded-lg py-3 text-center font-medium transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                  <Link
                    prefetch={false}
                    href="/signup"
                    // Màu nền và chữ cho Get Started mobile
                    className="bg-primary text-primary-foreground hover:bg-primary/90 block w-full rounded-lg py-3 text-center font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
