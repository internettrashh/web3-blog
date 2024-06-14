
import { Link, useNavigate} from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ConnectButton, useConnection } from "@arweave-wallet-kit/react";
import { useState , useEffect} from "react";
import { connect, createDataItemSigner } from "@permaweb/aoconnect";
import { dryrun } from "@permaweb/aoconnect";






interface IconProps {
  className?: string;
}

export function Homepage() {
  
  const { connected ,connect } = useConnection();
  //const processId ='53BwioJZRXB3FQrSPMqjjwzTAcAYCD_gOI-pzNL5Uwo'
  const processId = "53BwioJZRXB3FQrSPMqjjwzTAcAYCD_gOI-pzNL5Uwo";

  const [isFetching, setIsFetching] = useState(false);
  

  const [postList, setPostList] = useState(); 
  const fetchPosts = async () => {
    if (!connected) {
      return;
    }
    try {
      const addr = await window.arweaveWallet.getActiveAddress();
      const result = await dryrun({
        process: processId,
        data: "",
        tags: [{ name: "Action", value: "List" }],
        anchor: "1234",
      });
      console.log("Dry run result", result);
      const filteredResult = result.Messages.map((message) => {
        const parsedData = JSON.parse(message.Data);
        return parsedData;
      });
      console.log("Filtered result", filteredResult);
      setPostList(filteredResult[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsFetching(true);
    fetchPosts();
    setIsFetching(false);
  }, [connected]);

  return (
    
    <div>
      <main className="flex-1 py-12 px-4 md:px-8 lg:px-12 mt-8 pt-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Welcome to AO Blog</h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              Discover the latest insights and trends in web development, design, and more anonimously.
            </p>
          </div>
         
            {isFetching && <div>Fetching posts...</div>}
     
            <Card >
              {postList &&
                postList.map((post, index) => (
                  <Link to="#" key={index}>
  {/* Added key prop for list */}
  {/* Dynamic alt text */}
  <img
    alt={`Blog Post ${index + 1}`}
    className="rounded-t-lg object-cover w-full h-48"
    src="/placeholder.svg"
    style={{
      aspectRatio: "500/300",
      objectFit: "cover",
    }}
  />
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-2">{post.Title}</h2>
    <p className="text-gray-500 dark:text-gray-400 mb-4">
     {post.Data}
    </p>
    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
      <CalendarDaysIcon className="h-4 w-4 mr-2" />
      <span>{post.Author}</span>
    </div>
  </div>
</Link>
                ))}
            </Card>
            
          </div>
       
      </main>
      <footer className="bg-gray-950 text-white py-11 px-4 md:px-8 lg:px-12 flex items-center justify-between">
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
  );
};

function CalendarDaysIcon(props: IconProps) {
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
  );
}

function FeatherIcon(props: IconProps) {
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
  );
}

function MenuIcon(props: IconProps) {
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

function PlusIcon(props: IconProps) {
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
  );
}