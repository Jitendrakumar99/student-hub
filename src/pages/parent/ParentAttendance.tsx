import { motion } from "framer-motion";
import {
  CalendarCheck,
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ParentAttendance = () => {
  const attendanceStats = {
    totalDays: 180,
    present: 153,
    absent: 15,
    late: 8,
    leave: 4,
    percentage: 85,
    trend: 3,
  };

  const monthlyData = [
    { month: "January", present: 22, absent: 2, late: 1, percentage: 92 },
    { month: "December", present: 20, absent: 3, late: 2, percentage: 80 },
    { month: "November", present: 21, absent: 2, late: 1, percentage: 88 },
    { month: "October", present: 23, absent: 1, late: 0, percentage: 96 },
  ];

  const recentAttendance = [
    { date: "Jan 22, 2026", day: "Wednesday", status: "present", time: "7:55 AM" },
    { date: "Jan 21, 2026", day: "Tuesday", status: "present", time: "7:50 AM" },
    { date: "Jan 20, 2026", day: "Monday", status: "late", time: "8:15 AM" },
    { date: "Jan 17, 2026", day: "Friday", status: "present", time: "7:48 AM" },
    { date: "Jan 16, 2026", day: "Thursday", status: "absent", time: "-" },
    { date: "Jan 15, 2026", day: "Wednesday", status: "present", time: "7:52 AM" },
  ];

  const leaveHistory = [
    { from: "Jan 16, 2026", to: "Jan 16, 2026", reason: "Medical", status: "approved" },
    { from: "Dec 24, 2025", to: "Dec 26, 2025", reason: "Family Function", status: "approved" },
    { from: "Nov 15, 2025", to: "Nov 15, 2025", reason: "Sick", status: "approved" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "present":
        return <CheckCircle2 className="h-4 w-4 text-emerald-500" />;
      case "absent":
        return <XCircle className="h-4 w-4 text-red-500" />;
      case "late":
        return <Clock className="h-4 w-4 text-amber-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Attendance</h1>
        <p className="text-muted-foreground">Monitor your child's attendance and punctuality</p>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-200">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-emerald-600">{attendanceStats.percentage}%</p>
              <p className="text-sm text-muted-foreground">Attendance Rate</p>
              <div className="flex items-center justify-center gap-1 mt-1 text-xs text-emerald-600">
                <TrendingUp className="h-3 w-3" />
                +{attendanceStats.trend}% this month
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
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-emerald-600">{attendanceStats.present}</p>
              <p className="text-sm text-muted-foreground">Days Present</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-red-600">{attendanceStats.absent}</p>
              <p className="text-sm text-muted-foreground">Days Absent</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-amber-600">{attendanceStats.late}</p>
              <p className="text-sm text-muted-foreground">Days Late</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-primary">{attendanceStats.leave}</p>
              <p className="text-sm text-muted-foreground">Leaves Taken</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Alert if attendance is low */}
      {attendanceStats.percentage < 90 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-900/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <div>
                  <p className="font-medium text-amber-800 dark:text-amber-400">
                    Attendance Alert
                  </p>
                  <p className="text-sm text-amber-700 dark:text-amber-500">
                    Your child's attendance is below 90%. Minimum 75% attendance is required for exam eligibility.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Attendance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarCheck className="h-5 w-5 text-primary" />
                Recent Attendance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAttendance.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      {getStatusIcon(item.status)}
                      <div>
                        <p className="font-medium text-sm">{item.date}</p>
                        <p className="text-xs text-muted-foreground">{item.day}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant={item.status === "present" ? "default" : "secondary"}
                        className={
                          item.status === "absent" 
                            ? "bg-red-100 text-red-700" 
                            : item.status === "late"
                            ? "bg-amber-100 text-amber-700"
                            : ""
                        }
                      >
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Monthly Report */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Monthly Report</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Month</TableHead>
                    <TableHead className="text-center">Present</TableHead>
                    <TableHead className="text-center">Absent</TableHead>
                    <TableHead className="text-right">%</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {monthlyData.map((month, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{month.month}</TableCell>
                      <TableCell className="text-center text-emerald-600">{month.present}</TableCell>
                      <TableCell className="text-center text-red-600">{month.absent}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center gap-2 justify-end">
                          <Progress value={month.percentage} className="w-16 h-2" />
                          <span className="text-sm font-medium">{month.percentage}%</span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Leave History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Leave History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>From</TableHead>
                  <TableHead>To</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {leaveHistory.map((leave, index) => (
                  <TableRow key={index}>
                    <TableCell>{leave.from}</TableCell>
                    <TableCell>{leave.to}</TableCell>
                    <TableCell>{leave.reason}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant="default" className="bg-emerald-100 text-emerald-700">
                        {leave.status.charAt(0).toUpperCase() + leave.status.slice(1)}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default ParentAttendance;
