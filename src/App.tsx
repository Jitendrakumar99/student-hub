import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { ParentLayout } from "./components/layout/ParentLayout";
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

// Parent Pages
import ParentDashboard from "./pages/parent/ParentDashboard";
import ChildProfile from "./pages/parent/ChildProfile";
import ParentSubjects from "./pages/parent/academics/ParentSubjects";
import ParentTimetable from "./pages/parent/academics/ParentTimetable";
import ParentStudyMaterial from "./pages/parent/academics/ParentStudyMaterial";
import ParentHomework from "./pages/parent/ParentHomework";
import ParentAttendance from "./pages/parent/ParentAttendance";
import ExamSchedule from "./pages/parent/exams/ExamSchedule";
import ExamResults from "./pages/parent/exams/ExamResults";
import ParentCommunication from "./pages/parent/ParentCommunication";
import ParentFees from "./pages/parent/ParentFees";
import ParentTransport from "./pages/parent/ParentTransport";
import ParentNotices from "./pages/parent/ParentNotices";
import ParentEvents from "./pages/parent/ParentEvents";
import ParentAchievements from "./pages/parent/ParentAchievements";
import ParentDownloads from "./pages/parent/ParentDownloads";
import ParentSettings from "./pages/parent/ParentSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Student Portal */}
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

          {/* Parent Portal */}
          <Route element={<ParentLayout />}>
            <Route path="/parent" element={<ParentDashboard />} />
            <Route path="/parent/child-profile" element={<ChildProfile />} />
            <Route path="/parent/academics" element={<ParentSubjects />} />
            <Route path="/parent/academics/subjects" element={<ParentSubjects />} />
            <Route path="/parent/academics/timetable" element={<ParentTimetable />} />
            <Route path="/parent/academics/study-material" element={<ParentStudyMaterial />} />
            <Route path="/parent/homework" element={<ParentHomework />} />
            <Route path="/parent/attendance" element={<ParentAttendance />} />
            <Route path="/parent/exams" element={<ExamSchedule />} />
            <Route path="/parent/exams/schedule" element={<ExamSchedule />} />
            <Route path="/parent/exams/results" element={<ExamResults />} />
            <Route path="/parent/communication" element={<ParentCommunication />} />
            <Route path="/parent/fees" element={<ParentFees />} />
            <Route path="/parent/transport" element={<ParentTransport />} />
            <Route path="/parent/notices" element={<ParentNotices />} />
            <Route path="/parent/events" element={<ParentEvents />} />
            <Route path="/parent/achievements" element={<ParentAchievements />} />
            <Route path="/parent/downloads" element={<ParentDownloads />} />
            <Route path="/parent/settings" element={<ParentSettings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;