import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import { createDataItemSigner, message, result } from "@permaweb/aoconnect";
import 'react-quill/dist/quill.snow.css'; // Import the theme you want to use
import { ConnectButton, useConnection } from "@arweave-wallet-kit/react";

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

  const { connected ,connect } = useConnection();
   const processId ='53BwioJZRXB3FQrSPMqjjwzTAcAYCD_gOI-pzNL5Uwo' 
   const createPost = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!connected) {
      return;
    }

    setIsPosting(true);

    try {
      const res = await message({
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
            style={{ height: '50px', width: '100%' }}
             />

            <ReactQuill theme="snow" value={text} onChange={setText} style={{ height: '100%', width: '100%' }} />
            {isPosting && <div>Posting...</div>}
           
          <Button className='self-end mt-16 w-full'
          type="submit"
          disabled={isPosting || (title == "" && text == "")}
          onClick={(e) => createPost(e)}>
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