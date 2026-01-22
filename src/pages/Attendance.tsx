import { motion } from "framer-motion";
import { CalendarCheck, Check, X, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const attendanceData = {
  present: 85,
  absent: 10,
  late: 5,
  total: 100,
};

// Generate mock calendar data
const generateCalendarData = () => {
  const days = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    days.push({ day: null, status: null });
  }

  for (let day = 1; day <= daysInMonth; day++) {
    if (day > today.getDate()) {
      days.push({ day, status: "future" });
    } else if (day % 7 === 0) {
      days.push({ day, status: "holiday" });
    } else if (Math.random() > 0.85) {
      days.push({ day, status: "absent" });
    } else if (Math.random() > 0.9) {
      days.push({ day, status: "late" });
    } else {
      days.push({ day, status: "present" });
    }
  }

  return days;
};

const calendarData = generateCalendarData();

const statusColors = {
  present: "bg-success text-success-foreground",
  absent: "bg-destructive text-destructive-foreground",
  late: "bg-warning text-warning-foreground",
  holiday: "bg-muted text-muted-foreground",
  future: "bg-muted/30 text-muted-foreground",
};

const Attendance = () => {
  const percentage = ((attendanceData.present / attendanceData.total) * 100).toFixed(1);
  const currentMonth = months[new Date().getMonth()];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Attendance</h1>
        <p className="text-muted-foreground mt-1">
          Track your attendance and view monthly reports
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <Card className="shadow-card">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Present Days</p>
                <p className="text-3xl font-bold text-success">{attendanceData.present}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-success/10 flex items-center justify-center">
                <Check className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Absent Days</p>
                <p className="text-3xl font-bold text-destructive">{attendanceData.absent}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="h-6 w-6 text-destructive" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Late Arrivals</p>
                <p className="text-3xl font-bold text-warning">{attendanceData.late}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-warning/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Attendance %</p>
                <p className="text-3xl font-bold text-primary">{percentage}%</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CalendarCheck className="h-6 w-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Calendar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarCheck className="h-5 w-5 text-primary" />
              {currentMonth} {new Date().getFullYear()}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-muted-foreground py-2"
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {calendarData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.01 }}
                  className={cn(
                    "aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all",
                    item.day ? statusColors[item.status as keyof typeof statusColors] : "",
                    item.day && item.status !== "future" && "cursor-pointer hover:scale-105"
                  )}
                >
                  {item.day}
                </motion.div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-success" />
                <span className="text-sm text-muted-foreground">Present</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-destructive" />
                <span className="text-sm text-muted-foreground">Absent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-warning" />
                <span className="text-sm text-muted-foreground">Late</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded bg-muted" />
                <span className="text-sm text-muted-foreground">Holiday</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Attendance;