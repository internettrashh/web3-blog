import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { ConnectButton, useConnection } from "@arweave-wallet-kit/react";
import { useNavigate } from "react-router-dom";


export function Writeblog() {
  const navigate = useNavigate();
  const { connected ,connect, disconnect } = useConnection();
  
  return (
    <div className="max-w-6xl mx-auto mt-8 pt-16
    ">
      <h1 className="text-4xl font-bold mb-4">Welcome to Vercel Blog</h1>
      <p className="text-gray-600 mb-8">Discover the latest news, insights, and updates from the Vercel team.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <img
              alt="Featured Image"
              className="rounded-t-md object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
          </CardHeader>
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-2">Introducing Vercel Analytics</h2>
            <p className="text-gray-600 mb-4">
              Gain deeper insights into your web application's performance and user behavior with our new analytics
              platform.
            </p>
            <Link className="text-blue-500 hover:underline" to="#">
              Read More
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <img
              alt="Featured Image"
              className="rounded-t-md object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
          </CardHeader>
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-2">Optimizing Your Next.js Application</h2>
            <p className="text-gray-600 mb-4">
              Learn best practices and techniques to improve the performance and scalability of your Next.js-powered web
              applications.
            </p>
            <Link className="text-blue-500 hover:underline" to="#">
              Read More
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <img
              alt="Featured Image"
              className="rounded-t-md object-cover"
              height={225}
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/225",
                objectFit: "cover",
              }}
              width={400}
            />
            <div className="absolute top-4 right-4">
              <Button size="sm"  onClick={ () =>
                connected ? disconnect() : console.log('disconnected')
              }>
                logout
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-2">Deploying to Vercel: A Step-by-Step Guide</h2>
            <p className="text-gray-600 mb-4">
              Follow our comprehensive guide to seamlessly deploy your web application to the Vercel platform.
            </p>
            <Link className="text-blue-500 hover:underline" to="#">
              Read More
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

type SVGProps = React.SVGProps<SVGSVGElement>;

function FrameIcon(props: SVGProps) {
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
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  );
}

function MenuIcon(props: SVGProps) {
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
  );
}