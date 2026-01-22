import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExamSchedule = () => {
  const unitTests = [
    { subject: "Mathematics", date: "Feb 10, 2026", time: "9:00 AM - 11:00 AM", venue: "Room 101" },
    { subject: "Physics", date: "Feb 11, 2026", time: "9:00 AM - 11:00 AM", venue: "Room 102" },
    { subject: "Chemistry", date: "Feb 12, 2026", time: "9:00 AM - 11:00 AM", venue: "Lab 1" },
    { subject: "English", date: "Feb 13, 2026", time: "9:00 AM - 11:00 AM", venue: "Room 101" },
    { subject: "Hindi", date: "Feb 14, 2026", time: "9:00 AM - 11:00 AM", venue: "Room 103" },
  ];

  const midTermExams = [
    { subject: "Mathematics", date: "Mar 10, 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
    { subject: "Physics", date: "Mar 12, 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
    { subject: "Chemistry", date: "Mar 14, 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
    { subject: "English", date: "Mar 16, 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
    { subject: "Hindi", date: "Mar 18, 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
    { subject: "Computer Science", date: "Mar 20, 2026", time: "9:00 AM - 12:00 PM", venue: "Computer Lab" },
  ];

  const finalExams = [
    { subject: "Mathematics", date: "Apr 15, 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
    { subject: "Physics", date: "Apr 17, 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
    { subject: "Chemistry", date: "Apr 19, 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
    { subject: "English", date: "Apr 21, 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
    { subject: "Hindi", date: "Apr 23, 2026", time: "9:00 AM - 12:00 PM", venue: "Main Hall" },
  ];

  const ExamList = ({ exams }: { exams: typeof unitTests }) => (
    <div className="space-y-3">
      {exams.map((exam, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{exam.subject}</p>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exam.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {exam.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {exam.venue}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Exam Schedule</h1>
        <p className="text-muted-foreground">View upcoming exam dates and venues</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Tabs defaultValue="unit">
          <TabsList>
            <TabsTrigger value="unit">Unit Tests</TabsTrigger>
            <TabsTrigger value="midterm">Mid-Term</TabsTrigger>
            <TabsTrigger value="final">Final Exams</TabsTrigger>
          </TabsList>

          <TabsContent value="unit" className="mt-4">
            <Card className="mb-4 bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">Unit Test 3 - February 2026</span>
                </div>
              </CardContent>
            </Card>
            <ExamList exams={unitTests} />
          </TabsContent>

          <TabsContent value="midterm" className="mt-4">
            <Card className="mb-4 bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">Mid-Term Examinations - March 2026</span>
                </div>
              </CardContent>
            </Card>
            <ExamList exams={midTermExams} />
          </TabsContent>

          <TabsContent value="final" className="mt-4">
            <Card className="mb-4 bg-primary/5 border-primary/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="font-medium">Final Examinations - April 2026</span>
                </div>
              </CardContent>
            </Card>
            <ExamList exams={finalExams} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default ExamSchedule;
