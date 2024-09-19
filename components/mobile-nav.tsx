"use client"
import React, { Dispatch, Fragment, SetStateAction } from 'react'
import { NavbarProps } from './navbar';
import { Dialog,DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';
import ThemeToggle from './ui/theme-toggle';
export interface MobileMenuProps extends NavbarProps {
    openMenu: boolean;
    setOpenMenu: Dispatch<SetStateAction<boolean>>;
  }

const MobileNav = ({
    openMenu,
    routes,
    setOpenMenu,
  }: MobileMenuProps) => {
    const pathName = usePathname();
    const router = useRouter();

    const handleClick = (href: string) => {
        setOpenMenu(false);
        router.push(href);
      };
  return (
    <Transition show={openMenu} as={Fragment}>
      <Dialog as="div" className="z-50" onClose={setOpenMenu}>
        <div className="fixed inset-0 flex items-center justify-center">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 bottom-full"
            enterTo="opacity-100 bottom-[15%]"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 bottom-[15%]"
            leaveTo="opacity-0 bottom-full"
          >
            <DialogPanel className="pointer-events-none absolute flex min-h-[85%] w-full flex-col items-center justify-center overflow-y-auto rounded-b-2xl  border-accent/20 bg-background px-6 py-8 text-accent shadow-lg shadow-accent/10 md:px-10 md:py-16">
              <div className="pointer-events-auto flex flex-col items-center gap-6 text-center">
                {routes.map((link, i) => (
                  <button
                    key={i}
                    className="group relative py-2 text-3xl font-medium"
                    onClick={() => handleClick(link.href)}
                  >
                    <span
                      className={cn(
                        pathName === link.href ? "w-full" : "w-0",
                        "absolute -bottom-1 left-0 h-1 rounded-lg bg-accent transition-[width] duration-300 group-hover:w-full",
                      )}
                    ></span>
                    {link.title}
                  </button>
                ))}
                <ThemeToggle setClose={setOpenMenu} />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MobileNav