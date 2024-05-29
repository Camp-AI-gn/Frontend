
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-gray-950 py-4 shadow-lg dark:bg-gray-950">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
          href="#"
        >
          Home
        </Link>
        <Link className="flex items-center gap-2 text-white mx-auto" href="#">
          <GamepadIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">GG3</span>
        </Link>
        <Link
          className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white"
          href="/playground"
        >
          Games
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-gray-950 text-white" side="left">
            <div className="grid gap-4 p-6">
              <Link className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800" href="#">
                Home
              </Link>
              <Link href="/playground">
                <a className="rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-800">
                  Games
                </a>
              </Link>
 
 
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function GamepadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function MenuIcon(props) {
  return (


    
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}