import { motion } from "framer-motion";
import { FileText, Video, BookOpen, Download, ExternalLink, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ParentStudyMaterial = () => {
  const notes = [
    { subject: "Mathematics", title: "Quadratic Equations - Notes", date: "Jan 18, 2026", size: "2.4 MB" },
    { subject: "Physics", title: "Laws of Motion", date: "Jan 17, 2026", size: "1.8 MB" },
    { subject: "Chemistry", title: "Chemical Bonding", date: "Jan 16, 2026", size: "3.1 MB" },
    { subject: "English", title: "Shakespeare's Sonnets Analysis", date: "Jan 15, 2026", size: "1.2 MB" },
  ];

  const videos = [
    { subject: "Physics", title: "Newton's Laws Explained", duration: "25 min", views: 156 },
    { subject: "Chemistry", title: "Periodic Table Trends", duration: "18 min", views: 89 },
    { subject: "Mathematics", title: "Solving Quadratic Equations", duration: "32 min", views: 234 },
  ];

  const assignments = [
    { subject: "Mathematics", title: "Practice Set - Chapter 5", dueDate: "Jan 25, 2026", status: "pending" },
    { subject: "Physics", title: "Numerical Problems", dueDate: "Jan 24, 2026", status: "submitted" },
    { subject: "English", title: "Essay Writing", dueDate: "Jan 26, 2026", status: "pending" },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Study Material</h1>
        <p className="text-muted-foreground">Access notes, videos, and assignments shared by teachers</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Tabs defaultValue="notes">
          <TabsList>
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Notes
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="assignments" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Assignments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notes" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {notes.map((note, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{note.title}</p>
                          <p className="text-sm text-muted-foreground">{note.subject}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {note.date} • {note.size}
                          </p>
                        </div>
                      </div>
                      <Button size="icon" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map((video, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow overflow-hidden">
                  <div className="relative h-32 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-primary ml-1" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="font-medium">{video.title}</p>
                    <p className="text-sm text-muted-foreground">{video.subject}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span>{video.duration}</span>
                      <span>•</span>
                      <span>{video.views} views</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assignments" className="mt-4">
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {assignments.map((assignment, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <BookOpen className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{assignment.title}</p>
                          <p className="text-sm text-muted-foreground">{assignment.subject}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <Badge variant={assignment.status === "submitted" ? "default" : "secondary"}>
                            {assignment.status === "submitted" ? "Submitted" : "Pending"}
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">Due: {assignment.dueDate}</p>
                        </div>
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

export default ParentStudyMaterial;
