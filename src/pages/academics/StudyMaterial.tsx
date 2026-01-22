import { motion } from "framer-motion";
import { FileText, Video, Link2, Download, Play, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const materials = {
  notes: [
    { id: "1", title: "Calculus - Integration", subject: "Mathematics", size: "2.4 MB", date: "Jan 18" },
    { id: "2", title: "Wave Mechanics", subject: "Physics", size: "1.8 MB", date: "Jan 16" },
    { id: "3", title: "Organic Chemistry Basics", subject: "Chemistry", size: "3.1 MB", date: "Jan 14" },
    { id: "4", title: "Shakespeare - Hamlet Analysis", subject: "English", size: "1.2 MB", date: "Jan 12" },
    { id: "5", title: "World War II Timeline", subject: "History", size: "2.8 MB", date: "Jan 10" },
  ],
  videos: [
    { id: "1", title: "Differential Equations Tutorial", subject: "Mathematics", duration: "45 min", views: 234 },
    { id: "2", title: "Newton's Laws Explained", subject: "Physics", duration: "32 min", views: 189 },
    { id: "3", title: "Chemical Bonding Animation", subject: "Chemistry", duration: "28 min", views: 156 },
  ],
  links: [
    { id: "1", title: "Khan Academy - Calculus", subject: "Mathematics", url: "#" },
    { id: "2", title: "PhET Simulations", subject: "Physics", url: "#" },
    { id: "3", title: "Chemistry LibreTexts", subject: "Chemistry", url: "#" },
  ],
};

const StudyMaterial = () => {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Study Material</h1>
        <p className="text-muted-foreground mt-1">
          Access notes, videos, and reference materials
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Tabs defaultValue="notes" className="w-full">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="notes" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Notes & PDFs
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Video Lectures
            </TabsTrigger>
            <TabsTrigger value="links" className="flex items-center gap-2">
              <Link2 className="h-4 w-4" />
              Reference Links
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notes" className="mt-6">
            <div className="grid gap-4">
              {materials.notes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="shadow-card hover:shadow-card-hover transition-all">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                          <FileText className="h-6 w-6 text-destructive" />
                        </div>
                        <div>
                          <h3 className="font-medium">{note.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {note.subject} • {note.size} • {note.date}
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {materials.videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="shadow-card hover:shadow-card-hover transition-all overflow-hidden group cursor-pointer">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center relative">
                      <div className="h-14 w-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-primary-foreground ml-1" />
                      </div>
                      <span className="absolute bottom-2 right-2 px-2 py-1 bg-foreground/80 text-background text-xs rounded">
                        {video.duration}
                      </span>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium">{video.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {video.subject} • {video.views} views
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="links" className="mt-6">
            <div className="grid gap-4">
              {materials.links.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="shadow-card hover:shadow-card-hover transition-all">
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-lg bg-info/10 flex items-center justify-center">
                          <Link2 className="h-6 w-6 text-info" />
                        </div>
                        <div>
                          <h3 className="font-medium">{link.title}</h3>
                          <p className="text-sm text-muted-foreground">{link.subject}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Open
                      </Button>
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

export default StudyMaterial;