import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@/styles/globals.css';
import { ArweaveWalletKit } from "@arweave-wallet-kit/react";
import ArConnectStrategy from "@arweave-wallet-kit/arconnect-strategy";
import { Homepage } from './components/Homepage';
import  {BrowserRouter , Routes , Route} from 'react-router-dom'
import { Writeblog } from './components/Writeblog';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  
  <ArweaveWalletKit
      config={{
        permissions: [
          "ACCESS_ADDRESS",
          "ACCESS_PUBLIC_KEY",
          "SIGN_TRANSACTION",
          "DISPATCH",
        ],
        ensurePermissions: true,
        strategies: [new ArConnectStrategy()],
      }}
      
    >

  <BrowserRouter>
          <Navbar />
           <Routes>
         
           <Route path="/" element={<Home/>}/>
            <Route path="/view" element={<Homepage />} />

              <Route path="/writeblog" element={<Writeblog />} />
           </Routes>
     </BrowserRouter>
     
     
    </ArweaveWalletKit>
   
  </React.StrictMode>
);
