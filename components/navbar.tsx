import React from 'react'

export type NavbarRoute = {
    title: string;
    href: string;
  };
  
  export type NavbarRoutes = NavbarRoute[];
  
  export interface NavbarProps {
    routes: NavbarRoutes;
  }

const Navbar = (props: NavbarProps) => {
  return (
    <div>Navbar</div>
  )
}

export default Navbar