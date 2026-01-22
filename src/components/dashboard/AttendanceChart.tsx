import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export function AttendanceChart() {
  const attendanceData = {
    present: 85,
    absent: 10,
    late: 5,
  };

  const total = attendanceData.present + attendanceData.absent + attendanceData.late;
  const presentPercent = (attendanceData.present / total) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.35 }}
      className="bg-card rounded-xl shadow-card p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-lg bg-success/10 flex items-center justify-center">
          <CalendarCheck className="h-4 w-4 text-success" />
        </div>
        <h3 className="font-semibold text-lg">Attendance Overview</h3>
      </div>

      <div className="flex items-center justify-center py-4">
        <div className="relative h-40 w-40">
          <svg className="h-40 w-40 -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="12"
            />
            {/* Progress circle */}
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="hsl(var(--success))"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${presentPercent * 2.51} 251`}
              initial={{ strokeDasharray: "0 251" }}
              animate={{ strokeDasharray: `${presentPercent * 2.51} 251` }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-3xl font-bold text-success"
            >
              {presentPercent.toFixed(0)}%
            </motion.span>
            <span className="text-sm text-muted-foreground">Present</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="text-center p-3 rounded-lg bg-success/10">
          <p className="text-2xl font-bold text-success">{attendanceData.present}</p>
          <p className="text-xs text-muted-foreground">Present</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-destructive/10">
          <p className="text-2xl font-bold text-destructive">{attendanceData.absent}</p>
          <p className="text-xs text-muted-foreground">Absent</p>
        </div>
        <div className="text-center p-3 rounded-lg bg-warning/10">
          <p className="text-2xl font-bold text-warning">{attendanceData.late}</p>
          <p className="text-xs text-muted-foreground">Late</p>
        </div>
      </div>
    </motion.div>
  );
}