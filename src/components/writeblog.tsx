import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the theme you want to use
import { ConnectButton, useConnection } from "@arweave-wallet-kit/react";

export function Writeblog() {
  const navigate = useNavigate();
  const [text, setText] = React.useState('');
  const { connected ,connect } = useConnection();
  
  
  return (
    connected ? 
    (
      <div className="max-w-6xl mx-auto mt-8 pt-16">
        <h1 className="text-4xl font-bold mb-4">Share your thoughts</h1>
        <p className="text-gray-600 mb-8">Discover the latest news, insights, and updates from the Vercel team.</p>
        <div className="flex flex-col items-center">
          <div style={{ height: '500px', width: '100%' }}>
            <ReactQuill theme="snow" value={text} onChange={setText} style={{ height: '100%', width: '100%' }} />
          </div>
          <Button className='self-end mt-16 w-full'>
            Post
          </Button>
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