import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import { createDataItemSigner, message, dryrun, result, connect } from "@permaweb/aoconnect";
import 'react-quill/dist/quill.snow.css'; // Import the theme you want to use
import { useActiveAddress, ConnectButton, useConnection } from "@arweave-wallet-kit/react";

declare global {
  interface Window {
    arweaveWallet: {
      connect: (foo: string[]) => void;
      disconnect: () => void;
      getActiveAddress: () => void;
    };
  }
}

export function Writeblog() {
  const navigate = useNavigate();
  const [text, setText] = React.useState('');
  const [title, setTitle] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const { connected  } = useConnection();
  const ao = connect();
   const processId ="53BwioJZRXB3FQrSPMqjjwzTAcAYCD_gOI-pzNL5Uwo" 
  

  
   const createPost = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!connected) {
      return;
    }

    setIsPosting(true);

    try {
      const res = await ao.message({
        process: processId,
        tags: [
          { name: "Action", value: "Create-Post" },
          { name: "Content-Type", value: "text/html" },
          { name: "Title", value: title },
        ],
        data: text,
        signer: createDataItemSigner(window.arweaveWallet),

      });
      console.log("Post result", res);

      const postResult = await result({
        process: processId,
        message: res,
      });
      console.log("Post Created successfully", postResult);
      setText("");
      setTitle("");
    } catch (error) {
      console.log(error);
    }
    setIsPosting(false);
  };
  const handleButtonClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const register = async () => {
      try {
        const res = await ao.message({
          process: processId,
          tags: [{ name: "Action", value: "Register" }],
          data: "",
          signer: createDataItemSigner(window.arweaveWallet),
        });
        console.log("Register result", res);
        const registerResult = await result({
          process: processId,
          message: res,
        });
        console.log("Registered successfully", registerResult);
      } catch (error) {
        console.log(error);
      }
      // Call createPost after register completes
      await createPost(e);
    };

    // Call register, which will then call createPost
    await register();
  };
  
  
  return (
    connected ? 
    (
      <div className="max-w-6xl mx-auto mt-8 pt-16">
        <h1 className="text-4xl font-bold mb-4">Share your thoughts</h1>
        <p className="text-gray-600 mb-8">share your thoughts on the perma web.</p>
        <div className="flex flex-col items-center">
          <div style={{ height: '500px', width: '100%' }}>
          <form>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            style={{ backgroundColor: '#f3f3f3', color: '#333', height: '50px', width: '100%' }}
             />

            <ReactQuill theme="snow" value={text} onChange={setText} style={{ height: '30rem', width: '100%' }} />
            {isPosting && <div>Posting...</div>}
           
          <Button className='self-end mt-16 w-full'
          type="submit"
          disabled={isPosting || (title == "" && text == "")}
          onClick={handleButtonClick}>
            Post
          </Button>
          </form>
        </div>
      </div>
    </div>
    ) : 
    (
      <div className="max-w-6xl mx-auto mt-8 pt-16">
      <div className="text-center mt-8 text-4xl font-bold mb-4">
        <p>Please connect your wallet to create posts.</p>
      </div>
      </div>
    )
  );
} 