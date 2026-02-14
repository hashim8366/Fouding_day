'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const links = [
  { href: '/', label: 'الرئيسية' },
  { href: '/journey', label: 'رحلة التاريخ' },
  { href: '/culture', label: 'التراث الثقافي' },
  { href: '/gallery', label: 'المعرض' },
  { href: '/events', label: 'الاحتفالات' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-clarity/90 backdrop-blur-md border-b border-land dir-rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="relative w-12 h-12">
                <Image src="/images/logo.png" alt="يوم التأسيس" fill className="object-contain" />
            </div>
            <span className="font-harir text-2xl font-bold text-authenticity hidden sm:block">يوم التأسيس</span>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4 space-x-reverse">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-lg font-medium transition-colors duration-300 ${
                      isActive ? 'text-authenticity font-bold' : 'text-determination hover:text-authenticity hover:bg-land/10'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-authenticity"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
