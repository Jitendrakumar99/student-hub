import { motion } from "framer-motion";
import {
  CalendarCheck,
  ClipboardCheck,
  CreditCard,
  TrendingUp,
  BookOpen,
  Bell,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ParentDashboard = () => {
  const childInfo = {
    name: "John Smith",
    class: "10-A",
    rollNo: "24",
    academicYear: "2025-26",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=student",
  };

  const todayTimetable = [
    { time: "8:00 AM", subject: "Mathematics", teacher: "Mr. Sharma" },
    { time: "9:00 AM", subject: "Physics", teacher: "Mrs. Gupta" },
    { time: "10:00 AM", subject: "English", teacher: "Ms. Johnson" },
    { time: "11:00 AM", subject: "Chemistry", teacher: "Dr. Patel" },
  ];

  const homeworkDue = [
    { subject: "Mathematics", title: "Chapter 5 Problems", dueDate: "Tomorrow", status: "pending" },
    { subject: "English", title: "Essay Writing", dueDate: "In 2 days", status: "pending" },
    { subject: "Physics", title: "Lab Report", dueDate: "In 3 days", status: "submitted" },
  ];

  const latestNotices = [
    { title: "Annual Sports Day", date: "Jan 25, 2026", type: "event" },
    { title: "PTM Schedule", date: "Jan 28, 2026", type: "meeting" },
    { title: "Fee Reminder", date: "Feb 1, 2026", type: "fee" },
  ];

  const upcomingExams = [
    { subject: "Mathematics", date: "Feb 10, 2026", type: "Unit Test" },
    { subject: "Science", date: "Feb 12, 2026", type: "Unit Test" },
    { subject: "English", date: "Feb 15, 2026", type: "Mid-Term" },
  ];

  return (
    <div className="space-y-6">
      {/* Header with Child Info */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 border-4 border-primary/20">
            <AvatarImage src={childInfo.avatar} />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Welcome, Parent! 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              Viewing {childInfo.name}'s academic progress
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-card rounded-lg px-4 py-2 shadow-card">
          <span className="font-medium text-foreground">{childInfo.name}</span>
          <span className="text-border">|</span>
          <span>Class {childInfo.class}</span>
          <span className="text-border">|</span>
          <span>Roll No. {childInfo.rollNo}</span>
        </div>
      </motion.div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Attendance</p>
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-xs text-emerald-600 flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3" /> +3% this month
                  </p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <CalendarCheck className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Homework Due</p>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-xs text-muted-foreground mt-1">This week</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ClipboardCheck className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Fee Status</p>
                  <p className="text-2xl font-bold text-amber-600">Pending</p>
                  <p className="text-xs text-muted-foreground mt-1">₹15,000 due</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-amber-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Upcoming Exams</p>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-xs text-muted-foreground mt-1">Next 2 weeks</p>
                </div>
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Today's Timetable */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Today's Timetable
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-primary">
                  View Full <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todayTimetable.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-[80px]">
                        <Clock className="h-4 w-4" />
                        {item.time}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{item.subject}</p>
                        <p className="text-sm text-muted-foreground">{item.teacher}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Homework Due */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <ClipboardCheck className="h-5 w-5 text-primary" />
                  Homework Due
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {homeworkDue.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-3">
                        {item.status === "submitted" ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-amber-500" />
                        )}
                        <div>
                          <p className="font-medium">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.subject}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={item.status === "submitted" ? "default" : "secondary"}>
                          {item.status === "submitted" ? "Submitted" : "Pending"}
                        </Badge>
                        <p className="text-xs text-muted-foreground mt-1">{item.dueDate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Latest Notices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  Latest Notices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {latestNotices.map((notice, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                    >
                      <p className="font-medium text-sm">{notice.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notice.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Exams */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Upcoming Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingExams.map((exam, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-sm">{exam.subject}</p>
                        <Badge variant="outline" className="text-xs">
                          {exam.type}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{exam.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Fee Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <Card className="border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-orange-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-amber-600" />
                  Fee Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Fee</span>
                    <span className="font-semibold">₹75,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Paid</span>
                    <span className="font-semibold text-emerald-600">₹60,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Pending</span>
                    <span className="font-semibold text-amber-600">₹15,000</span>
                  </div>
                  <Progress value={80} className="h-2" />
                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                    Pay Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ParentDashboard;
