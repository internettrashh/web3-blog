
import {  Link , Navigate , useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import  { SVGProps } from "react"

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-950 text-white py-4 px-6 md:px-8 lg:px-12 flex items-center justify-between">
        <Link className="flex items-center gap-2 text-lg font-semibold" to="#">
          <FeatherIcon className="h-6 w-6" />
          <span>Vercel Blog</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="hover:underline underline-offset-4" to="#">
            Blog
          </Link>
          <Link className="hover:underline underline-offset-4" to="#">
            Write
          </Link>
          <Button>
            <PlusIcon className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </nav>
        <Button className="md:hidden" size="icon" variant="ghost">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="bg-gray-950 text-white py-12 md:py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Welcome to TheAO Blog</h1>
            <p className="text-lg md:text-xl lg:text-2xl">
              Discover the latest insights and trends in web development, design, and more.
            </p>
            <div className="flex gap-4">
              <Link
                className="inline-flex items-center justify-center rounded-md bg-white text-gray-950 px-6 py-3 text-lg font-medium shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
                to="view"
              >
                Read Blog
              </Link>
              <Link
                className="inline-flex items-center justify-center rounded-md bg-transparent border border-white text-white px-6 py-3 text-lg font-medium hover:bg-white hover:text-gray-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-950"
                to="/writeblog"
              >
                Write a Post
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-12 space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Featured Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <Link to="#">
                    <img
                      alt="Blog Post 1"
                      className="rounded-t-lg object-cover w-full h-48"
                      height={300}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "500/300",
                        objectFit: "cover",
                      }}
                      width={500}
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">Mastering Next.js: A Comprehensive Guide</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        Dive into the world of Next.js and learn how to build lightning-fast, SEO-friendly React
                        applications.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CalendarDaysIcon className="h-4 w-4 mr-2" />
                        <span>May 1, 2023</span>
                      </div>
                    </div>
                  </Link>
                </Card>
                <Card>
                  <Link to="#">
                    <img
                      alt="Blog Post 2"
                      className="rounded-t-lg object-cover w-full h-48"
                      height={300}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "500/300",
                        objectFit: "cover",
                      }}
                      width={500}
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">Designing for Accessibility: Best Practices</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        Learn how to create inclusive and accessible web experiences that cater to users of all
                        abilities.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CalendarDaysIcon className="h-4 w-4 mr-2" />
                        <span>April 15, 2023</span>
                      </div>
                    </div>
                  </Link>
                </Card>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Latest Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <Link to="#">
                    <img
                      alt="Blog Post 3"
                      className="rounded-t-lg object-cover w-full h-48"
                      height={300}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "500/300",
                        objectFit: "cover",
                      }}
                      width={500}
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">Optimizing Web Performance: Strategies and Tools</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        Discover effective techniques to improve the speed and responsiveness of your web applications.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CalendarDaysIcon className="h-4 w-4 mr-2" />
                        <span>March 28, 2023</span>
                      </div>
                    </div>
                  </Link>
                </Card>
                <Card>
                  <Link to="#">
                    <img
                      alt="Blog Post 4"
                      className="rounded-t-lg object-cover w-full h-48"
                      height={300}
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "500/300",
                        objectFit: "cover",
                      }}
                      width={500}
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">Embracing the Jamstack: Building Modern Web Apps</h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        Explore the benefits of the Jamstack architecture and how it can transform your web development
                        workflow.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CalendarDaysIcon className="h-4 w-4 mr-2" />
                        <span>February 10, 2023</span>
                      </div>
                    </div>
                  </Link>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-950 text-white py-6 px-4 md:px-8 lg:px-12 flex items-center justify-between">
        <p className="text-sm">© 2024 AO Blog. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link className="hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="hover:underline underline-offset-4" to="#">
            Privacy Policy
          </Link>
          <Link className="hover:underline underline-offset-4" to="#">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CalendarDaysIcon(props:SVGProps<SVGSVGElement>) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  )
}


function FeatherIcon(props:SVGProps<SVGSVGElement>) {
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


function MenuIcon(props:SVGProps<SVGSVGElement>) {
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


function PlusIcon(props:SVGProps<SVGSVGElement>) {
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
