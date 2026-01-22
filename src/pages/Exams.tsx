import { motion } from "framer-motion";
import { FlaskConical, Calendar, Clock, FileText, Play, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Exam {
  id: string;
  subject: string;
  type: "unit" | "midterm" | "final" | "online";
  date: string;
  time: string;
  duration: string;
  venue: string;
  status: "upcoming" | "ongoing" | "completed";
  marks?: { obtained: number; total: number };
}

const exams: Exam[] = [
  { id: "1", subject: "Mathematics", type: "midterm", date: "Feb 1, 2026", time: "9:00 AM", duration: "3 hours", venue: "Hall A", status: "upcoming" },
  { id: "2", subject: "Physics", type: "midterm", date: "Feb 3, 2026", time: "9:00 AM", duration: "3 hours", venue: "Hall A", status: "upcoming" },
  { id: "3", subject: "Chemistry", type: "midterm", date: "Feb 5, 2026", time: "9:00 AM", duration: "3 hours", venue: "Hall B", status: "upcoming" },
  { id: "4", subject: "English", type: "midterm", date: "Feb 7, 2026", time: "9:00 AM", duration: "3 hours", venue: "Hall A", status: "upcoming" },
  { id: "5", subject: "Biology", type: "unit", date: "Jan 20, 2026", time: "10:00 AM", duration: "1 hour", venue: "Room 101", status: "completed", marks: { obtained: 42, total: 50 } },
  { id: "6", subject: "History", type: "unit", date: "Jan 18, 2026", time: "10:00 AM", duration: "1 hour", venue: "Room 102", status: "completed", marks: { obtained: 38, total: 50 } },
];

interface OnlineTest {
  id: string;
  title: string;
  subject: string;
  questions: number;
  duration: string;
  deadline: string;
  status: "available" | "attempted" | "expired";
  score?: number;
}

const onlineTests: OnlineTest[] = [
  { id: "1", title: "Calculus Quiz - Chapter 5", subject: "Mathematics", questions: 20, duration: "30 min", deadline: "Jan 25, 2026", status: "available" },
  { id: "2", title: "Wave Mechanics MCQ", subject: "Physics", questions: 15, duration: "20 min", deadline: "Jan 24, 2026", status: "available" },
  { id: "3", title: "Organic Chemistry Test", subject: "Chemistry", questions: 25, duration: "45 min", deadline: "Jan 22, 2026", status: "attempted", score: 88 },
  { id: "4", title: "Grammar & Vocabulary", subject: "English", questions: 30, duration: "25 min", deadline: "Jan 20, 2026", status: "attempted", score: 92 },
];

const typeColors = {
  unit: "bg-info/10 text-info",
  midterm: "bg-warning/10 text-warning",
  final: "bg-destructive/10 text-destructive",
  online: "bg-primary/10 text-primary",
};

const Exams = () => {
  const upcomingExams = exams.filter(e => e.status === "upcoming");
  const completedExams = exams.filter(e => e.status === "completed");

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Exams & Tests</h1>
        <p className="text-muted-foreground mt-1">
          View exam schedules and take online tests
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Tabs defaultValue="schedule" className="w-full">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="schedule" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Exam Schedule
            </TabsTrigger>
            <TabsTrigger value="online" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              Online Tests
            </TabsTrigger>
            <TabsTrigger value="results" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Past Results
            </TabsTrigger>
          </TabsList>

          <TabsContent value="schedule" className="mt-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-warning" />
                  Upcoming Exams
                </h2>
                <div className="grid gap-4">
                  {upcomingExams.map((exam, index) => (
                    <motion.div
                      key={exam.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                    >
                      <Card className="shadow-card hover:shadow-card-hover transition-all border-l-4 border-l-warning">
                        <CardContent className="p-5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="h-14 w-14 rounded-xl bg-warning/10 flex flex-col items-center justify-center">
                                <span className="text-lg font-bold text-warning">{exam.date.split(" ")[1].replace(",", "")}</span>
                                <span className="text-xs text-warning">{exam.date.split(" ")[0]}</span>
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Badge className={typeColors[exam.type]}>
                                    {exam.type.charAt(0).toUpperCase() + exam.type.slice(1)}
                                  </Badge>
                                </div>
                                <h3 className="font-semibold text-lg">{exam.subject}</h3>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                  <span className="flex items-center gap-1">
                                    <Clock className="h-3.5 w-3.5" />
                                    {exam.time} • {exam.duration}
                                  </span>
                                  <span>{exam.venue}</span>
                                </div>
                              </div>
                            </div>
                            <Button variant="outline">View Syllabus</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="online" className="mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {onlineTests.map((test, index) => (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Card className={cn(
                    "shadow-card hover:shadow-card-hover transition-all",
                    test.status === "attempted" && "border-l-4 border-l-success"
                  )}>
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary">{test.subject}</Badge>
                        {test.status === "attempted" && (
                          <Badge className="bg-success/10 text-success gap-1">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Score: {test.score}%
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-semibold">{test.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <span>{test.questions} questions</span>
                        <span>{test.duration}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="text-sm text-muted-foreground">
                          Deadline: {test.deadline}
                        </span>
                        {test.status === "available" ? (
                          <Button className="gradient-primary">
                            <Play className="h-4 w-4 mr-2" />
                            Start Test
                          </Button>
                        ) : (
                          <Button variant="outline">View Answers</Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="results" className="mt-6">
            <div className="grid gap-4">
              {completedExams.map((exam, index) => (
                <motion.div
                  key={exam.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Card className="shadow-card border-l-4 border-l-success">
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge className={typeColors[exam.type]}>
                              {exam.type.charAt(0).toUpperCase() + exam.type.slice(1)}
                            </Badge>
                            <Badge variant="secondary">{exam.date}</Badge>
                          </div>
                          <h3 className="font-semibold text-lg">{exam.subject}</h3>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-success">
                            {exam.marks?.obtained}/{exam.marks?.total}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {((exam.marks!.obtained / exam.marks!.total) * 100).toFixed(0)}%
                          </p>
                        </div>
                      </div>
                      <Progress 
                        value={(exam.marks!.obtained / exam.marks!.total) * 100} 
                        className="h-2 mt-4" 
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Exams;