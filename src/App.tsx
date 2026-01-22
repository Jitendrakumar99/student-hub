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
import Exams from "./pages/Exams";
import Results from "./pages/Results";
import Attendance from "./pages/Attendance";
import Notices from "./pages/Notices";
import Communication from "./pages/Communication";
import Transport from "./pages/Transport";
import Fees from "./pages/Fees";
import Events from "./pages/Events";
import Achievements from "./pages/Achievements";
import Downloads from "./pages/Downloads";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

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
            <Route path="/exams" element={<Exams />} />
            <Route path="/results" element={<Results />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/fees" element={<Fees />} />
            <Route path="/events" element={<Events />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;