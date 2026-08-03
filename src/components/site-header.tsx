"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { contact, navigation } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  const navLinkClass = (active: boolean, compact: boolean) =>
    cn(
      "relative rounded-full py-3 font-medium transition-colors duration-200",
      compact
        ? "px-2.5 text-[16px]"
        : "px-3 text-[17px] 2xl:px-4 2xl:text-[18px]",
      solid ? "text-charcoal/80 hover:text-deep" : "text-cream/85 hover:text-white",
      active && (solid ? "text-deep" : "text-white"),
    );

  const navLinks = (compact = false) =>
    navigation.map((item) => {
      const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

      return (
        <Link
          key={item.href}
          href={item.href}
          aria-current={active ? "page" : undefined}
          className={navLinkClass(active, compact)}
        >
          {item.label}
          {active ? (
            <span
              aria-hidden="true"
              className={cn(
                "absolute -bottom-0.5 h-px bg-gold",
                compact ? "inset-x-2.5" : "inset-x-3 2xl:inset-x-4",
              )}
            />
          ) : null}
        </Link>
      );
    });

  const phoneLinkClass = cn(
    "link-underline shrink-0 font-bold transition-colors",
    solid ? "text-charcoal/80 hover:text-deep" : "text-cream/85 hover:text-white",
  );

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="scrim"
            className="fixed inset-0 z-[60] bg-charcoal/45 nav:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        ) : null}

        {menuOpen ? (
          <motion.div
            key="panel"
            id="mobile-menu"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(92vw,22rem)] flex-col overflow-y-auto overscroll-contain bg-deep bg-bubbles-soft px-5 pb-10 pt-[max(1.25rem,env(safe-area-inset-top))] shadow-lifted sm:px-6 nav:hidden"
            initial={{ x: reduceMotion ? 0 : "100%", opacity: reduceMotion ? 0 : 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: reduceMotion ? 0 : "100%", opacity: reduceMotion ? 0 : 1 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between gap-3">
              <Logo variant="menu" tone="light" />
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  toggleRef.current?.focus();
                }}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10"
              >
                <span className="sr-only">Close menu</span>
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="mt-8 flex flex-col sm:mt-10">
              {navigation.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "border-b border-cream/10 py-3.5 text-[1.35rem] font-semibold transition-colors sm:py-4 sm:text-2xl",
                      active ? "text-gold-light" : "text-cream hover:text-gold-light",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto space-y-3 pt-8 sm:space-y-4 sm:pt-10">
              <ButtonLink href={contact.phoneHref} variant="gold" size="lg" className="w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {contact.phone}
              </ButtonLink>
              <ButtonLink
                href="/contact-us"
                variant="goldOutline"
                size="lg"
                className="w-full text-gold-light"
              >
                Contact Us
              </ButtonLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>,
      document.body,
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-gentle",
        solid
          ? "border-b border-gold/30 bg-cream/95 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container width="wide" className="min-[1130px]:max-[1279px]:pr-[52px]">
        <div
          className={cn(
            "flex items-center justify-between gap-3 transition-[height] duration-300 ease-gentle sm:gap-4",
            scrolled ? "h-[64px] sm:h-[72px] lg:h-[88px] xl:h-[96px]" : "h-[72px] sm:h-[88px] lg:h-[120px] xl:h-[168px]",
          )}
        >
          <Logo
            variant="header"
            compact={scrolled}
            tone={solid ? "dark" : "light"}
            href="/"
            priority
            className="min-w-0"
          />

          {/* 1130px–1279px: menu + call grouped on the right */}
          <div className="hidden items-center nav:flex xl:hidden">
            <nav aria-label="Primary" className="flex items-center gap-0.5 pr-5">
              {navLinks(true)}
            </nav>
            <a href={contact.phoneHref} className={cn(phoneLinkClass, "text-[16px]")}>
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
              <span className="sr-only">Call us at </span>
              {contact.phone}
            </a>
          </div>

          {/* 1280px+: standard desktop menu */}
          <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
            {navLinks(false)}
          </nav>
          <a
            href={contact.phoneHref}
            className={cn(phoneLinkClass, "hidden text-[18px] xl:inline-flex")}
          >
            <Phone className="h-4 w-4 text-gold" aria-hidden="true" />
            <span className="sr-only">Call us at </span>
            {contact.phone}
          </a>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={cn(
              "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors nav:hidden",
              solid
                ? "border-deep/20 text-deep hover:bg-deep hover:text-cream"
                : "border-cream/30 text-cream hover:bg-cream/10",
            )}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {mobileMenu}
    </header>
  );
}
