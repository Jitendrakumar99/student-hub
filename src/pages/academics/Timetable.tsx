import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const timetableData: Record<string, { time: string; subject: string; teacher: string; room: string }[]> = {
  Monday: [
    { time: "8:00 - 8:45", subject: "Mathematics", teacher: "Mr. Johnson", room: "101" },
    { time: "8:45 - 9:30", subject: "English", teacher: "Ms. Davis", room: "203" },
    { time: "9:45 - 10:30", subject: "Physics", teacher: "Mrs. Smith", room: "Lab 2" },
    { time: "10:30 - 11:15", subject: "Chemistry", teacher: "Mr. Wilson", room: "Lab 1" },
    { time: "11:30 - 12:15", subject: "History", teacher: "Mrs. Brown", room: "105" },
    { time: "12:15 - 1:00", subject: "Geography", teacher: "Mr. Anderson", room: "106" },
  ],
  Tuesday: [
    { time: "8:00 - 8:45", subject: "Physics", teacher: "Mrs. Smith", room: "Lab 2" },
    { time: "8:45 - 9:30", subject: "Mathematics", teacher: "Mr. Johnson", room: "101" },
    { time: "9:45 - 10:30", subject: "Biology", teacher: "Dr. Brown", room: "Lab 3" },
    { time: "10:30 - 11:15", subject: "English", teacher: "Ms. Davis", room: "203" },
    { time: "11:30 - 12:15", subject: "Computer Science", teacher: "Mr. Lee", room: "Computer Lab" },
    { time: "12:15 - 1:00", subject: "Physical Education", teacher: "Mr. Coach", room: "Ground" },
  ],
  Wednesday: [
    { time: "8:00 - 8:45", subject: "Mathematics", teacher: "Mr. Johnson", room: "101" },
    { time: "8:45 - 9:30", subject: "Physics", teacher: "Mrs. Smith", room: "Lab 2" },
    { time: "9:45 - 10:30", subject: "English", teacher: "Ms. Davis", room: "203" },
    { time: "10:30 - 11:15", subject: "Chemistry", teacher: "Mr. Wilson", room: "Lab 1" },
    { time: "11:30 - 12:15", subject: "History", teacher: "Mrs. Brown", room: "105" },
    { time: "12:15 - 1:00", subject: "Art", teacher: "Ms. Artist", room: "Art Room" },
  ],
  Thursday: [
    { time: "8:00 - 8:45", subject: "Biology", teacher: "Dr. Brown", room: "Lab 3" },
    { time: "8:45 - 9:30", subject: "Chemistry", teacher: "Mr. Wilson", room: "Lab 1" },
    { time: "9:45 - 10:30", subject: "Mathematics", teacher: "Mr. Johnson", room: "101" },
    { time: "10:30 - 11:15", subject: "Geography", teacher: "Mr. Anderson", room: "106" },
    { time: "11:30 - 12:15", subject: "English", teacher: "Ms. Davis", room: "203" },
    { time: "12:15 - 1:00", subject: "Computer Science", teacher: "Mr. Lee", room: "Computer Lab" },
  ],
  Friday: [
    { time: "8:00 - 8:45", subject: "English", teacher: "Ms. Davis", room: "203" },
    { time: "8:45 - 9:30", subject: "Physics", teacher: "Mrs. Smith", room: "Lab 2" },
    { time: "9:45 - 10:30", subject: "Chemistry", teacher: "Mr. Wilson", room: "Lab 1" },
    { time: "10:30 - 11:15", subject: "Mathematics", teacher: "Mr. Johnson", room: "101" },
    { time: "11:30 - 12:15", subject: "History", teacher: "Mrs. Brown", room: "105" },
    { time: "12:15 - 1:00", subject: "Music", teacher: "Mr. Melody", room: "Music Room" },
  ],
  Saturday: [
    { time: "8:00 - 8:45", subject: "Mathematics", teacher: "Mr. Johnson", room: "101" },
    { time: "8:45 - 9:30", subject: "English", teacher: "Ms. Davis", room: "203" },
    { time: "9:45 - 10:30", subject: "Physics", teacher: "Mrs. Smith", room: "Lab 2" },
    { time: "10:30 - 11:15", subject: "Extra Classes", teacher: "Various", room: "As Assigned" },
  ],
};

const subjectColors: Record<string, string> = {
  Mathematics: "bg-primary/10 text-primary border-primary/20",
  Physics: "bg-info/10 text-info border-info/20",
  Chemistry: "bg-success/10 text-success border-success/20",
  English: "bg-accent/10 text-accent border-accent/20",
  Biology: "bg-destructive/10 text-destructive border-destructive/20",
  History: "bg-warning/10 text-warning border-warning/20",
  Geography: "bg-primary/10 text-primary border-primary/20",
  "Computer Science": "bg-info/10 text-info border-info/20",
  "Physical Education": "bg-success/10 text-success border-success/20",
  Art: "bg-accent/10 text-accent border-accent/20",
  Music: "bg-warning/10 text-warning border-warning/20",
  "Extra Classes": "bg-muted text-muted-foreground border-muted",
};

const Timetable = () => {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const defaultDay = weekDays.includes(today) ? today : "Monday";

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Timetable</h1>
        <p className="text-muted-foreground mt-1">
          Your weekly class schedule
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Tabs defaultValue={defaultDay} className="w-full">
          <TabsList className="w-full justify-start overflow-x-auto flex-nowrap bg-muted/50 p-1 h-auto">
            {weekDays.map((day) => (
              <TabsTrigger
                key={day}
                value={day}
                className={cn(
                  "px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
                  day === today && "font-bold"
                )}
              >
                {day}
                {day === today && <span className="ml-1 text-xs">(Today)</span>}
              </TabsTrigger>
            ))}
          </TabsList>

          {weekDays.map((day) => (
            <TabsContent key={day} value={day} className="mt-6">
              <div className="grid gap-3">
                {timetableData[day].map((period, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border bg-card shadow-card hover:shadow-card-hover transition-all",
                      subjectColors[period.subject]
                    )}
                  >
                    <div className="flex items-center gap-2 w-32 shrink-0">
                      <Clock className="h-4 w-4" />
                      <span className="font-medium text-sm">{period.time}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{period.subject}</h3>
                      <p className="text-sm opacity-80">
                        {period.teacher} • Room {period.room}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Timetable;