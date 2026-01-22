import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ParentHomework = () => {
  const homework = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Chapter 5 - Quadratic Equations Practice",
      assignedDate: "Jan 20, 2026",
      dueDate: "Jan 25, 2026",
      status: "pending",
      remarks: "",
    },
    {
      id: 2,
      subject: "Physics",
      title: "Numerical Problems - Laws of Motion",
      assignedDate: "Jan 19, 2026",
      dueDate: "Jan 24, 2026",
      status: "submitted",
      remarks: "Good work! Well organized solution.",
    },
    {
      id: 3,
      subject: "English",
      title: "Essay Writing - Climate Change",
      assignedDate: "Jan 18, 2026",
      dueDate: "Jan 26, 2026",
      status: "pending",
      remarks: "",
    },
    {
      id: 4,
      subject: "Chemistry",
      title: "Lab Report - Chemical Reactions",
      assignedDate: "Jan 17, 2026",
      dueDate: "Jan 22, 2026",
      status: "late",
      remarks: "Submitted 1 day late",
    },
    {
      id: 5,
      subject: "Hindi",
      title: "Comprehension Passage",
      assignedDate: "Jan 15, 2026",
      dueDate: "Jan 18, 2026",
      status: "missing",
      remarks: "Not submitted",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
      case "pending":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      case "late":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400";
      case "missing":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "submitted":
        return <CheckCircle2 className="h-5 w-5 text-emerald-500" />;
      case "pending":
        return <Clock className="h-5 w-5 text-amber-500" />;
      case "late":
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case "missing":
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const pendingCount = homework.filter((h) => h.status === "pending").length;
  const submittedCount = homework.filter((h) => h.status === "submitted").length;
  const lateCount = homework.filter((h) => h.status === "late").length;
  const missingCount = homework.filter((h) => h.status === "missing").length;

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Homework & Assignments</h1>
        <p className="text-muted-foreground">Track your child's homework submissions</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200">
            <CardContent className="p-4 text-center">
              <Clock className="h-6 w-6 text-amber-600 mx-auto" />
              <p className="text-2xl font-bold mt-2">{pendingCount}</p>
              <p className="text-sm text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200">
            <CardContent className="p-4 text-center">
              <CheckCircle2 className="h-6 w-6 text-emerald-600 mx-auto" />
              <p className="text-2xl font-bold mt-2">{submittedCount}</p>
              <p className="text-sm text-muted-foreground">Submitted</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200">
            <CardContent className="p-4 text-center">
              <AlertCircle className="h-6 w-6 text-orange-600 mx-auto" />
              <p className="text-2xl font-bold mt-2">{lateCount}</p>
              <p className="text-sm text-muted-foreground">Late</p>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-red-50 dark:bg-red-900/20 border-red-200">
            <CardContent className="p-4 text-center">
              <AlertTriangle className="h-6 w-6 text-red-600 mx-auto" />
              <p className="text-2xl font-bold mt-2">{missingCount}</p>
              <p className="text-sm text-muted-foreground">Missing</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Homework List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="submitted">Submitted</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {homework.map((item) => (
                    <div key={item.id} className="p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          {getStatusIcon(item.status)}
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.subject}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                Assigned: {item.assignedDate}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                Due: {item.dueDate}
                              </span>
                            </div>
                            {item.remarks && (
                              <p className="text-sm mt-2 text-muted-foreground italic">
                                Teacher: "{item.remarks}"
                              </p>
                            )}
                          </div>
                        </div>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {homework.filter(h => h.status === "pending").map((item) => (
                    <div key={item.id} className="p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          {getStatusIcon(item.status)}
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.subject}</p>
                            <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                              <span>Due: {item.dueDate}</span>
                            </div>
                          </div>
                        </div>
                        <Badge className={getStatusColor(item.status)}>Pending</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="submitted" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {homework.filter(h => h.status === "submitted").map((item) => (
                    <div key={item.id} className="p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          {getStatusIcon(item.status)}
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.subject}</p>
                            {item.remarks && (
                              <p className="text-sm mt-2 text-emerald-600 italic">
                                "{item.remarks}"
                              </p>
                            )}
                          </div>
                        </div>
                        <Badge className={getStatusColor(item.status)}>Submitted</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {homework.filter(h => h.status === "late" || h.status === "missing").map((item) => (
                    <div key={item.id} className="p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          {getStatusIcon(item.status)}
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">{item.subject}</p>
                            {item.remarks && (
                              <p className="text-sm mt-2 text-red-600 italic">
                                {item.remarks}
                              </p>
                            )}
                          </div>
                        </div>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default ParentHomework;
