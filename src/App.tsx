import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Subjects from "./pages/academics/Subjects";
import Timetable from "./pages/academics/Timetable";
import StudyMaterial from "./pages/academics/StudyMaterial";
import Homework from "./pages/Homework";
import Results from "./pages/Results";
import Attendance from "./pages/Attendance";
import Notices from "./pages/Notices";
import Fees from "./pages/Fees";
import Settings from "./pages/Settings";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";
import { FlaskConical, MessageCircle, Bus, PartyPopper, Trophy, Download } from "lucide-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/academics" element={<Subjects />} />
            <Route path="/academics/subjects" element={<Subjects />} />
            <Route path="/academics/timetable" element={<Timetable />} />
            <Route path="/academics/study-material" element={<StudyMaterial />} />
            <Route path="/homework" element={<Homework />} />
            <Route path="/exams" element={<PlaceholderPage title="Exams & Tests" description="View exam schedules and take online tests" icon={<FlaskConical className="h-10 w-10 text-primary" />} />} />
            <Route path="/results" element={<Results />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/communication" element={<PlaceholderPage title="Communication" description="Chat with teachers and view messages" icon={<MessageCircle className="h-10 w-10 text-primary" />} />} />
            <Route path="/transport" element={<PlaceholderPage title="Transport" description="View bus routes and timings" icon={<Bus className="h-10 w-10 text-primary" />} />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/events" element={<PlaceholderPage title="Events & Activities" description="View upcoming events and participate in activities" icon={<PartyPopper className="h-10 w-10 text-primary" />} />} />
            <Route path="/achievements" element={<PlaceholderPage title="Achievements" description="View your awards and certificates" icon={<Trophy className="h-10 w-10 text-primary" />} />} />
            <Route path="/downloads" element={<PlaceholderPage title="Downloads" description="Download ID cards, certificates, and documents" icon={<Download className="h-10 w-10 text-primary" />} />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;