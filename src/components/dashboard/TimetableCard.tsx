import { motion } from "framer-motion";
import { Clock, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface Period {
  time: string;
  subject: string;
  teacher: string;
  room: string;
  isActive?: boolean;
  isBreak?: boolean;
}

const periods: Period[] = [
  { time: "8:00 - 8:45", subject: "Mathematics", teacher: "Mr. Johnson", room: "101" },
  { time: "8:45 - 9:30", subject: "Physics", teacher: "Mrs. Smith", room: "Lab 2", isActive: true },
  { time: "9:30 - 10:00", subject: "Break", teacher: "", room: "", isBreak: true },
  { time: "10:00 - 10:45", subject: "English", teacher: "Ms. Davis", room: "203" },
  { time: "10:45 - 11:30", subject: "Chemistry", teacher: "Mr. Wilson", room: "Lab 1" },
  { time: "11:30 - 12:15", subject: "History", teacher: "Mrs. Brown", room: "105" },
];

export function TimetableCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="bg-card rounded-xl shadow-card p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Clock className="h-4 w-4 text-primary" />
          </div>
          <h3 className="font-semibold text-lg">Today's Timetable</h3>
        </div>
        <span className="text-sm text-muted-foreground">Wednesday, Jan 22</span>
      </div>

      <div className="space-y-2">
        {periods.map((period, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
            className={cn(
              "flex items-center gap-4 p-3 rounded-lg transition-all",
              period.isActive && "bg-primary/10 border border-primary/20",
              period.isBreak && "bg-accent/10",
              !period.isActive && !period.isBreak && "hover:bg-muted/50"
            )}
          >
            <div className="w-24 shrink-0">
              <span className={cn(
                "text-sm font-medium",
                period.isActive && "text-primary"
              )}>
                {period.time}
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                {!period.isBreak && (
                  <BookOpen className={cn(
                    "h-4 w-4",
                    period.isActive ? "text-primary" : "text-muted-foreground"
                  )} />
                )}
                <span className={cn(
                  "font-medium",
                  period.isActive && "text-primary",
                  period.isBreak && "text-accent"
                )}>
                  {period.subject}
                </span>
              </div>
              {!period.isBreak && (
                <p className="text-sm text-muted-foreground">
                  {period.teacher} • Room {period.room}
                </p>
              )}
            </div>
            {period.isActive && (
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Now
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}