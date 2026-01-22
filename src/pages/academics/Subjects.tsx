import { motion } from "framer-motion";
import { BookOpen, User, FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const subjects = [
  { name: "Mathematics", teacher: "Mr. Johnson", progress: 75, chapters: 12, completed: 9, color: "bg-primary" },
  { name: "Physics", teacher: "Mrs. Smith", progress: 60, chapters: 10, completed: 6, color: "bg-info" },
  { name: "Chemistry", teacher: "Mr. Wilson", progress: 80, chapters: 8, completed: 6, color: "bg-success" },
  { name: "English", teacher: "Ms. Davis", progress: 90, chapters: 15, completed: 14, color: "bg-accent" },
  { name: "Biology", teacher: "Dr. Brown", progress: 55, chapters: 12, completed: 7, color: "bg-destructive" },
  { name: "History", teacher: "Mrs. Taylor", progress: 70, chapters: 10, completed: 7, color: "bg-warning" },
  { name: "Geography", teacher: "Mr. Anderson", progress: 65, chapters: 8, completed: 5, color: "bg-primary" },
  { name: "Computer Science", teacher: "Mr. Lee", progress: 85, chapters: 6, completed: 5, color: "bg-info" },
];

const Subjects = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Subjects</h1>
        <p className="text-muted-foreground mt-1">
          View your enrolled subjects and track your progress
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="shadow-card hover:shadow-card-hover transition-all cursor-pointer group">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className={`h-10 w-10 rounded-lg ${subject.color} flex items-center justify-center`}>
                    <BookOpen className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <CardTitle className="text-lg mt-2">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <User className="h-4 w-4" />
                  <span>{subject.teacher}</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    {subject.completed} of {subject.chapters} chapters completed
                  </p>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <FileText className="h-4 w-4 mr-1" />
                    Syllabus
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Subjects;