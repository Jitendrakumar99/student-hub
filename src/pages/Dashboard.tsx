import { motion } from "framer-motion";
import {
  BookOpen,
  ClipboardCheck,
  Trophy,
  TrendingUp,
} from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { TimetableCard } from "@/components/dashboard/TimetableCard";
import { HomeworkCard } from "@/components/dashboard/HomeworkCard";
import { AnnouncementsCard } from "@/components/dashboard/AnnouncementsCard";
import { AttendanceChart } from "@/components/dashboard/AttendanceChart";
import { UpcomingEventsCard } from "@/components/dashboard/UpcomingEventsCard";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Good Morning, John! 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's what's happening with your academics today.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card rounded-lg px-4 py-2 shadow-card">
          <span>Class 10-A</span>
          <span className="text-border">|</span>
          <span>Roll No. 24</span>
          <span className="text-border">|</span>
          <span>2025-26</span>
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Attendance Rate"
          value="85%"
          subtitle="This month"
          icon={TrendingUp}
          trend={{ value: 3, positive: true }}
          variant="primary"
          delay={0.05}
        />
        <StatCard
          title="Pending Homework"
          value="4"
          subtitle="Due this week"
          icon={ClipboardCheck}
          variant="default"
          delay={0.1}
        />
        <StatCard
          title="Subjects"
          value="8"
          subtitle="Active courses"
          icon={BookOpen}
          variant="default"
          delay={0.15}
        />
        <StatCard
          title="Achievements"
          value="12"
          subtitle="This year"
          icon={Trophy}
          variant="accent"
          delay={0.2}
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Timetable & Homework */}
        <div className="lg:col-span-2 space-y-6">
          <TimetableCard />
          <HomeworkCard />
        </div>

        {/* Right Column - Attendance & Events */}
        <div className="space-y-6">
          <AttendanceChart />
          <UpcomingEventsCard />
        </div>
      </div>

      {/* Announcements */}
      <AnnouncementsCard />
    </div>
  );
};

export default Dashboard;