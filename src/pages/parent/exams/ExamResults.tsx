import { motion } from "framer-motion";
import { BarChart3, Download, TrendingUp, TrendingDown, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const ExamResults = () => {
  const overallStats = {
    percentage: 82.5,
    grade: "A",
    rank: 8,
    totalStudents: 45,
    trend: 5.2,
  };

  const subjectResults = [
    { subject: "Mathematics", marks: 85, total: 100, grade: "A", trend: 5 },
    { subject: "Physics", marks: 78, total: 100, grade: "B+", trend: -2 },
    { subject: "Chemistry", marks: 88, total: 100, grade: "A", trend: 8 },
    { subject: "English", marks: 82, total: 100, grade: "A", trend: 3 },
    { subject: "Hindi", marks: 75, total: 100, grade: "B+", trend: -1 },
    { subject: "Computer Science", marks: 92, total: 100, grade: "A+", trend: 10 },
    { subject: "Social Studies", marks: 80, total: 100, grade: "A", trend: 2 },
  ];

  const performanceData = [
    { exam: "UT-1", percentage: 75 },
    { exam: "UT-2", percentage: 78 },
    { exam: "Mid-Term", percentage: 80 },
    { exam: "UT-3", percentage: 82.5 },
  ];

  const subjectChartData = subjectResults.map((s) => ({
    subject: s.subject.substring(0, 4),
    marks: s.marks,
  }));

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "bg-emerald-100 text-emerald-700";
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-700";
    if (grade.startsWith("C")) return "bg-amber-100 text-amber-700";
    return "bg-red-100 text-red-700";
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Exam Results</h1>
          <p className="text-muted-foreground">View your child's academic performance</p>
        </div>
        <Button className="bg-gradient-to-r from-emerald-500 to-teal-600">
          <Download className="h-4 w-4 mr-2" />
          Download Report Card
        </Button>
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-primary">{overallStats.percentage}%</p>
              <p className="text-sm text-muted-foreground">Overall Percentage</p>
              <div className="flex items-center justify-center gap-1 mt-1 text-xs text-emerald-600">
                <TrendingUp className="h-3 w-3" />
                +{overallStats.trend}% improvement
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
              <p className="text-3xl font-bold text-emerald-600">{overallStats.grade}</p>
              <p className="text-sm text-muted-foreground">Overall Grade</p>
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
              <p className="text-3xl font-bold">{overallStats.rank}</p>
              <p className="text-sm text-muted-foreground">Class Rank</p>
              <p className="text-xs text-muted-foreground">out of {overallStats.totalStudents}</p>
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
              <Award className="h-8 w-8 text-amber-500 mx-auto" />
              <p className="text-sm text-muted-foreground mt-2">Top Performer</p>
              <p className="text-xs font-medium text-primary">Computer Science</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="results">
        <TabsList>
          <TabsTrigger value="results">Subject-wise Results</TabsTrigger>
          <TabsTrigger value="analytics">Performance Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="results" className="mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Unit Test 3 Results - January 2026</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject</TableHead>
                      <TableHead className="text-center">Marks</TableHead>
                      <TableHead className="text-center">Grade</TableHead>
                      <TableHead className="text-center">Progress</TableHead>
                      <TableHead className="text-right">Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subjectResults.map((result, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{result.subject}</TableCell>
                        <TableCell className="text-center">
                          {result.marks}/{result.total}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge className={getGradeColor(result.grade)}>
                            {result.grade}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={result.marks} className="h-2 flex-1" />
                            <span className="text-sm text-muted-foreground w-12">
                              {result.marks}%
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className={`flex items-center justify-end gap-1 ${
                            result.trend >= 0 ? "text-emerald-600" : "text-red-600"
                          }`}>
                            {result.trend >= 0 ? (
                              <TrendingUp className="h-4 w-4" />
                            ) : (
                              <TrendingDown className="h-4 w-4" />
                            )}
                            {result.trend >= 0 ? "+" : ""}{result.trend}%
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="analytics" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Performance Trend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={performanceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="exam" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" domain={[60, 100]} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="percentage" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Subject-wise Marks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={subjectChartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="subject" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" domain={[0, 100]} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                      />
                      <Bar 
                        dataKey="marks" 
                        fill="hsl(var(--primary))" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExamResults;
