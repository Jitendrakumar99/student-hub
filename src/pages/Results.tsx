import { motion } from "framer-motion";
import { BarChart3, Download, TrendingUp, TrendingDown, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const results = [
  { subject: "Mathematics", marks: 92, total: 100, grade: "A+", trend: "up" },
  { subject: "Physics", marks: 88, total: 100, grade: "A", trend: "up" },
  { subject: "Chemistry", marks: 85, total: 100, grade: "A", trend: "same" },
  { subject: "English", marks: 94, total: 100, grade: "A+", trend: "up" },
  { subject: "Biology", marks: 78, total: 100, grade: "B+", trend: "down" },
  { subject: "History", marks: 82, total: 100, grade: "A", trend: "up" },
  { subject: "Geography", marks: 80, total: 100, grade: "A", trend: "same" },
  { subject: "Computer Science", marks: 96, total: 100, grade: "A+", trend: "up" },
];

const gradeColors: Record<string, string> = {
  "A+": "bg-success text-success-foreground",
  A: "bg-success/80 text-success-foreground",
  "B+": "bg-info text-info-foreground",
  B: "bg-info/80 text-info-foreground",
  C: "bg-warning text-warning-foreground",
  D: "bg-destructive/80 text-destructive-foreground",
  F: "bg-destructive text-destructive-foreground",
};

const Results = () => {
  const totalMarks = results.reduce((acc, r) => acc + r.marks, 0);
  const totalPossible = results.reduce((acc, r) => acc + r.total, 0);
  const percentage = ((totalMarks / totalPossible) * 100).toFixed(1);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Results & Report Card</h1>
          <p className="text-muted-foreground mt-1">
            View your academic performance and download report cards
          </p>
        </div>
        <Button className="gradient-primary">
          <Download className="h-4 w-4 mr-2" />
          Download Report
        </Button>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <Card className="shadow-card bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Marks</p>
                <p className="text-3xl font-bold text-primary">
                  {totalMarks}/{totalPossible}
                </p>
              </div>
              <BarChart3 className="h-10 w-10 text-primary/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-success/10 to-success/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Percentage</p>
                <p className="text-3xl font-bold text-success">{percentage}%</p>
              </div>
              <TrendingUp className="h-10 w-10 text-success/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-accent/10 to-accent/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overall Grade</p>
                <p className="text-3xl font-bold text-accent">A</p>
              </div>
              <Award className="h-10 w-10 text-accent/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-info/10 to-info/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Class Rank</p>
                <p className="text-3xl font-bold text-info">#5</p>
              </div>
              <Award className="h-10 w-10 text-info/50" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Results Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Subject-wise Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead>Marks</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Grade</TableHead>
                  <TableHead>Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result, index) => (
                  <motion.tr
                    key={result.subject}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="group"
                  >
                    <TableCell className="font-medium">{result.subject}</TableCell>
                    <TableCell>
                      {result.marks}/{result.total}
                    </TableCell>
                    <TableCell className="w-40">
                      <Progress value={result.marks} className="h-2" />
                    </TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          gradeColors[result.grade]
                        }`}
                      >
                        {result.grade}
                      </span>
                    </TableCell>
                    <TableCell>
                      {result.trend === "up" && (
                        <TrendingUp className="h-5 w-5 text-success" />
                      )}
                      {result.trend === "down" && (
                        <TrendingDown className="h-5 w-5 text-destructive" />
                      )}
                      {result.trend === "same" && (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Results;