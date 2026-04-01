import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ExpertAdManagement from "./pages/ExpertAdManagement.tsx";
import EventsIntoAssets from "./pages/EventsIntoAssets.tsx";
import SocialMediaSalesFlow from "./pages/SocialMediaSalesFlow.tsx";
import VideoAds from "./pages/VideoAds.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/expert-ad-management" element={<ExpertAdManagement />} />
          <Route path="/events-into-assets" element={<EventsIntoAssets />} />
          <Route path="/social-media-sales-flow" element={<SocialMediaSalesFlow />} />
          <Route path="/video-ads" element={<VideoAds />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
