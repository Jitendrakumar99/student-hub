import { motion } from "framer-motion";
import { ClipboardCheck, Upload, Clock, CheckCircle2, AlertCircle, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Assignment {
  id: string;
  subject: string;
  title: string;
  description: string;
  dueDate: string;
  submittedDate?: string;
  status: "pending" | "submitted" | "overdue" | "graded";
  grade?: string;
  remarks?: string;
}

const assignments: Assignment[] = [
  {
    id: "1",
    subject: "Mathematics",
    title: "Calculus - Integration Problems Ch. 5",
    description: "Solve all problems from exercise 5.1 to 5.4",
    dueDate: "Jan 22, 2026",
    status: "pending",
  },
  {
    id: "2",
    subject: "Physics",
    title: "Lab Report - Wave Mechanics",
    description: "Write a detailed lab report on the wave mechanics experiment",
    dueDate: "Jan 23, 2026",
    status: "pending",
  },
  {
    id: "3",
    subject: "English",
    title: "Essay on Shakespeare's Hamlet",
    description: "Write a 1000-word essay analyzing the character of Hamlet",
    dueDate: "Jan 24, 2026",
    submittedDate: "Jan 21, 2026",
    status: "submitted",
  },
  {
    id: "4",
    subject: "Chemistry",
    title: "Organic Chemistry Worksheet",
    description: "Complete the worksheet on organic compounds",
    dueDate: "Jan 19, 2026",
    status: "overdue",
  },
  {
    id: "5",
    subject: "History",
    title: "World War II Research Paper",
    description: "Research paper on any aspect of WWII",
    dueDate: "Jan 15, 2026",
    submittedDate: "Jan 14, 2026",
    status: "graded",
    grade: "A",
    remarks: "Excellent research and analysis!",
  },
];

const statusConfig = {
  pending: { icon: Clock, color: "bg-warning text-warning-foreground", label: "Pending" },
  submitted: { icon: CheckCircle2, color: "bg-info text-info-foreground", label: "Submitted" },
  overdue: { icon: AlertCircle, color: "bg-destructive text-destructive-foreground", label: "Overdue" },
  graded: { icon: CheckCircle2, color: "bg-success text-success-foreground", label: "Graded" },
};

const Homework = () => {
  const filterAssignments = (status: string) => {
    if (status === "all") return assignments;
    return assignments.filter((a) => a.status === status);
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Homework & Assignments</h1>
          <p className="text-muted-foreground mt-1">
            Track and submit your assignments
          </p>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Pending", count: 2, color: "bg-warning/10 text-warning" },
          { label: "Submitted", count: 1, color: "bg-info/10 text-info" },
          { label: "Graded", count: 1, color: "bg-success/10 text-success" },
          { label: "Overdue", count: 1, color: "bg-destructive/10 text-destructive" },
        ].map((stat) => (
          <Card key={stat.label} className="shadow-card">
            <CardContent className={cn("p-4 text-center", stat.color)}>
              <p className="text-3xl font-bold">{stat.count}</p>
              <p className="text-sm font-medium">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
            <TabsTrigger value="graded">Graded</TabsTrigger>
          </TabsList>

          {["all", "pending", "submitted", "graded"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              <div className="space-y-4">
                {filterAssignments(tab).map((assignment, index) => {
                  const status = statusConfig[assignment.status];
                  const StatusIcon = status.icon;

                  return (
                    <motion.div
                      key={assignment.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Card className="shadow-card hover:shadow-card-hover transition-all">
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                              <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center shrink-0", status.color)}>
                                <StatusIcon className="h-6 w-6" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <Badge variant="secondary">{assignment.subject}</Badge>
                                  <Badge className={status.color}>{status.label}</Badge>
                                </div>
                                <h3 className="font-semibold text-lg">{assignment.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">
                                  {assignment.description}
                                </p>
                                <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    Due: {assignment.dueDate}
                                  </span>
                                  {assignment.submittedDate && (
                                    <span className="flex items-center gap-1">
                                      <CheckCircle2 className="h-4 w-4 text-success" />
                                      Submitted: {assignment.submittedDate}
                                    </span>
                                  )}
                                </div>
                                {assignment.grade && (
                                  <div className="mt-3 p-3 bg-success/10 rounded-lg">
                                    <p className="text-sm font-medium text-success">
                                      Grade: {assignment.grade}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {assignment.remarks}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                            {assignment.status === "pending" && (
                              <Button className="shrink-0 gradient-primary">
                                <Upload className="h-4 w-4 mr-2" />
                                Submit
                              </Button>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Homework;