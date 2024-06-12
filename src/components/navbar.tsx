import { Link, useNavigate} from "react-router-dom";
import { Button } from "@/components/ui/button"
import React, { SVGProps } from 'react';
import { ConnectButton, useConnection } from "@arweave-wallet-kit/react";




export function Navbar() {
  const navigate = useNavigate();
  const { connected ,connect } = useConnection();
  

  
  return (
    <header className="bg-gray-950 text-white py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between fixed top-0 left-0 right-0 z-10">
    <Link className="flex items-center gap-2 text-lg font-semibold" to="#">
      <FeatherIcon className="h-6 w-6" />
      <span> The AO Blog </span>
    </Link>
    
    <nav className="hidden md:flex items-center gap-6">
    <Link className="hover:underline underline-offset-4" to="/">
        Home
    
      </Link>
      <Link className="hover:underline underline-offset-4" to="/view">
        View
    
      </Link>
      <Link className="hover:underline underline-offset-4" to="/writeblog">
        Write
      </Link>
      <ConnectButton
      accent="rgb(32, 32, 32)"
        profileModal={true}
        showBalance={false}
        showProfilePicture={true}
      />
    </nav>
    <Button className="md:hidden" size="icon" variant="ghost">
      <MenuIcon className="h-6 w-6" />
      <span className="sr-only">Toggle menu</span>
    </Button>
  </header>
  )
}

function FeatherIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  )
}


function MenuIcon(props: SVGProps<SVGSVGElement>) {
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


function PlusIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}
