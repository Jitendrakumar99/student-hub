import { motion } from "framer-motion";
import { BookOpen, User, FileText, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ParentSubjects = () => {
  const subjects = [
    { name: "Mathematics", teacher: "Mr. Sharma", code: "MATH101", periods: 6, syllabus: true },
    { name: "Physics", teacher: "Mrs. Gupta", code: "PHY101", periods: 5, syllabus: true },
    { name: "Chemistry", teacher: "Dr. Patel", code: "CHEM101", periods: 5, syllabus: true },
    { name: "English", teacher: "Ms. Johnson", code: "ENG101", periods: 5, syllabus: true },
    { name: "Hindi", teacher: "Mrs. Verma", code: "HIN101", periods: 4, syllabus: true },
    { name: "Computer Science", teacher: "Mr. Kumar", code: "CS101", periods: 4, syllabus: true },
    { name: "Social Studies", teacher: "Mrs. Singh", code: "SS101", periods: 4, syllabus: true },
    { name: "Physical Education", teacher: "Mr. Rao", code: "PE101", periods: 3, syllabus: false },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Subjects</h1>
        <p className="text-muted-foreground">View your child's subjects and teachers</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject, index) => (
          <motion.div
            key={subject.code}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline">{subject.code}</Badge>
                </div>
                <CardTitle className="text-lg mt-2">{subject.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{subject.teacher}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{subject.periods} periods/week</span>
                  </div>
                  {subject.syllabus && (
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Download Syllabus
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ParentSubjects;
