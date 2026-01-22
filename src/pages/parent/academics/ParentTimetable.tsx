import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ParentTimetable = () => {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  const timetable = {
    Monday: [
      { time: "8:00 - 8:45", subject: "Mathematics", teacher: "Mr. Sharma" },
      { time: "8:45 - 9:30", subject: "Physics", teacher: "Mrs. Gupta" },
      { time: "9:30 - 10:15", subject: "English", teacher: "Ms. Johnson" },
      { time: "10:15 - 10:30", subject: "Break", teacher: "" },
      { time: "10:30 - 11:15", subject: "Chemistry", teacher: "Dr. Patel" },
      { time: "11:15 - 12:00", subject: "Hindi", teacher: "Mrs. Verma" },
      { time: "12:00 - 12:45", subject: "Computer Science", teacher: "Mr. Kumar" },
    ],
    Tuesday: [
      { time: "8:00 - 8:45", subject: "English", teacher: "Ms. Johnson" },
      { time: "8:45 - 9:30", subject: "Mathematics", teacher: "Mr. Sharma" },
      { time: "9:30 - 10:15", subject: "Physics Lab", teacher: "Mrs. Gupta" },
      { time: "10:15 - 10:30", subject: "Break", teacher: "" },
      { time: "10:30 - 11:15", subject: "Social Studies", teacher: "Mrs. Singh" },
      { time: "11:15 - 12:00", subject: "Chemistry", teacher: "Dr. Patel" },
      { time: "12:00 - 12:45", subject: "Physical Education", teacher: "Mr. Rao" },
    ],
    Wednesday: [
      { time: "8:00 - 8:45", subject: "Chemistry", teacher: "Dr. Patel" },
      { time: "8:45 - 9:30", subject: "Mathematics", teacher: "Mr. Sharma" },
      { time: "9:30 - 10:15", subject: "Hindi", teacher: "Mrs. Verma" },
      { time: "10:15 - 10:30", subject: "Break", teacher: "" },
      { time: "10:30 - 11:15", subject: "English", teacher: "Ms. Johnson" },
      { time: "11:15 - 12:00", subject: "Physics", teacher: "Mrs. Gupta" },
      { time: "12:00 - 12:45", subject: "Computer Science", teacher: "Mr. Kumar" },
    ],
    Thursday: [
      { time: "8:00 - 8:45", subject: "Physics", teacher: "Mrs. Gupta" },
      { time: "8:45 - 9:30", subject: "English", teacher: "Ms. Johnson" },
      { time: "9:30 - 10:15", subject: "Mathematics", teacher: "Mr. Sharma" },
      { time: "10:15 - 10:30", subject: "Break", teacher: "" },
      { time: "10:30 - 11:15", subject: "Chemistry Lab", teacher: "Dr. Patel" },
      { time: "11:15 - 12:00", subject: "Social Studies", teacher: "Mrs. Singh" },
      { time: "12:00 - 12:45", subject: "Hindi", teacher: "Mrs. Verma" },
    ],
    Friday: [
      { time: "8:00 - 8:45", subject: "Mathematics", teacher: "Mr. Sharma" },
      { time: "8:45 - 9:30", subject: "Chemistry", teacher: "Dr. Patel" },
      { time: "9:30 - 10:15", subject: "Computer Science", teacher: "Mr. Kumar" },
      { time: "10:15 - 10:30", subject: "Break", teacher: "" },
      { time: "10:30 - 11:15", subject: "Physics", teacher: "Mrs. Gupta" },
      { time: "11:15 - 12:00", subject: "English", teacher: "Ms. Johnson" },
      { time: "12:00 - 12:45", subject: "Physical Education", teacher: "Mr. Rao" },
    ],
    Saturday: [
      { time: "8:00 - 8:45", subject: "Hindi", teacher: "Mrs. Verma" },
      { time: "8:45 - 9:30", subject: "Mathematics", teacher: "Mr. Sharma" },
      { time: "9:30 - 10:15", subject: "Social Studies", teacher: "Mrs. Singh" },
      { time: "10:15 - 10:30", subject: "Break", teacher: "" },
      { time: "10:30 - 11:15", subject: "English", teacher: "Ms. Johnson" },
      { time: "11:15 - 12:00", subject: "Library", teacher: "" },
    ],
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Timetable</h1>
        <p className="text-muted-foreground">Your child's weekly class schedule</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Tabs defaultValue="Monday">
          <TabsList className="flex flex-wrap h-auto gap-1 mb-4">
            {weekDays.map((day) => (
              <TabsTrigger key={day} value={day} className="text-xs sm:text-sm">
                {day}
              </TabsTrigger>
            ))}
          </TabsList>
          {weekDays.map((day) => (
            <TabsContent key={day} value={day}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    {day}'s Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {timetable[day as keyof typeof timetable].map((period, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-4 p-3 rounded-lg ${
                          period.subject === "Break" 
                            ? "bg-amber-100/50 dark:bg-amber-900/20" 
                            : "bg-muted/50 hover:bg-muted transition-colors"
                        }`}
                      >
                        <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-[120px]">
                          <Clock className="h-4 w-4" />
                          {period.time}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{period.subject}</p>
                          {period.teacher && (
                            <p className="text-sm text-muted-foreground">{period.teacher}</p>
                          )}
                        </div>
                        {period.subject.includes("Lab") && (
                          <Badge variant="secondary">Lab</Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
};

export default ParentTimetable;
