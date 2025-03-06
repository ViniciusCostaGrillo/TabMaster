
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TheoryPage from "./pages/TheoryPage";
import SongDetailPage from "./pages/SongDetailPage";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import { ThemeLanguageProvider } from "./contexts/ThemeLanguageContext";
import React from 'react';
import Tuner from '../components/Tuner'; // Importe o componente Tuner

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeLanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/song/:id" element={<SongDetailPage />} />
            <Route 
              path="/theory" 
              element={
                <Layout>
                  <TheoryPage />
                </Layout>
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeLanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
