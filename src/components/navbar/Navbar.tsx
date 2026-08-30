"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FaRegUser } from "react-icons/fa"
import { FiMenu, FiX } from "react-icons/fi"
import { IoBagOutline, IoSearch } from "react-icons/io5"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="border-b border-border bg-background">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* logo */}
        <Link
          href="/"
          className="text-2xl font-medium tracking-tight text-foreground"
        >
          C2<span className="text-amber-600">Fashions</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium uppercase transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {/* Search Icon */}
            <button className="rounded-full p-2 text-foreground transition-colors hover:bg-surface">
              <IoSearch size={22} />
            </button>
            {/* User Icon */}
            <button className="rounded-full p-2 text-foreground transition-colors hover:bg-surface">
              <FaRegUser size={22} />
            </button>
            {/* Cart Icon */}
            <button className="rounded-full p-2 text-foreground transition-colors hover:bg-surface">
              <IoBagOutline size={23} />
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-foreground md:hidden"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                className="rounded-md px-2 py-3 text-muted-foreground transition hover:bg-surface hover:text-foreground"
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <button
              className="mt-4 rounded-lg bg-primary py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-hover"
              onClick={() => router.push("/sign-in")}
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
