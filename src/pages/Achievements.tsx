import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Upload, Download, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "academic" | "sports" | "cultural" | "competition";
  level: "school" | "district" | "state" | "national";
  position?: string;
  certificate?: boolean;
}

const achievements: Achievement[] = [
  {
    id: "1",
    title: "Math Olympiad Gold Medal",
    description: "First position in District Level Mathematics Olympiad 2025",
    date: "Dec 2025",
    category: "academic",
    level: "district",
    position: "1st",
    certificate: true,
  },
  {
    id: "2",
    title: "Science Project Winner",
    description: "Best project award at Inter-School Science Exhibition",
    date: "Nov 2025",
    category: "academic",
    level: "district",
    position: "1st",
    certificate: true,
  },
  {
    id: "3",
    title: "100m Sprint Champion",
    description: "Won gold medal in 100m sprint at Annual Sports Day",
    date: "Oct 2025",
    category: "sports",
    level: "school",
    position: "1st",
    certificate: true,
  },
  {
    id: "4",
    title: "Debate Competition",
    description: "Second runner-up at State Level Debate Competition",
    date: "Sep 2025",
    category: "competition",
    level: "state",
    position: "3rd",
    certificate: true,
  },
  {
    id: "5",
    title: "Classical Dance Performance",
    description: "Special recognition for Bharatanatyam performance at Annual Day",
    date: "Mar 2025",
    category: "cultural",
    level: "school",
    certificate: true,
  },
  {
    id: "6",
    title: "Perfect Attendance Award",
    description: "100% attendance throughout the academic year 2024-25",
    date: "Mar 2025",
    category: "academic",
    level: "school",
    certificate: true,
  },
];

const categoryConfig = {
  academic: { icon: Award, color: "bg-primary/10 text-primary", label: "Academic" },
  sports: { icon: Medal, color: "bg-success/10 text-success", label: "Sports" },
  cultural: { icon: Star, color: "bg-accent/10 text-accent", label: "Cultural" },
  competition: { icon: Trophy, color: "bg-info/10 text-info", label: "Competition" },
};

const levelColors = {
  school: "bg-muted text-muted-foreground",
  district: "bg-info/10 text-info",
  state: "bg-warning/10 text-warning",
  national: "bg-destructive/10 text-destructive",
};

const positionColors: Record<string, string> = {
  "1st": "bg-gradient-to-r from-amber-400 to-amber-600 text-white",
  "2nd": "bg-gradient-to-r from-slate-300 to-slate-400 text-slate-800",
  "3rd": "bg-gradient-to-r from-amber-600 to-amber-800 text-white",
};

const Achievements = () => {
  const stats = {
    total: achievements.length,
    gold: achievements.filter(a => a.position === "1st").length,
    certificates: achievements.filter(a => a.certificate).length,
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Achievements</h1>
          <p className="text-muted-foreground mt-1">
            View your awards, certificates, and accomplishments
          </p>
        </div>
        <Button variant="outline">
          <Upload className="h-4 w-4 mr-2" />
          Upload Certificate
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card className="shadow-card bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Achievements</p>
                <p className="text-3xl font-bold text-primary">{stats.total}</p>
              </div>
              <Trophy className="h-10 w-10 text-primary/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-amber-400/10 to-amber-500/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Gold Medals</p>
                <p className="text-3xl font-bold text-amber-500">{stats.gold}</p>
              </div>
              <Medal className="h-10 w-10 text-amber-500/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-success/10 to-success/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Certificates</p>
                <p className="text-3xl font-bold text-success">{stats.certificates}</p>
              </div>
              <Award className="h-10 w-10 text-success/50" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Achievements List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="sports">Sports</TabsTrigger>
            <TabsTrigger value="cultural">Cultural</TabsTrigger>
            <TabsTrigger value="competition">Competition</TabsTrigger>
          </TabsList>

          {["all", "academic", "sports", "cultural", "competition"].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-6">
              <div className="grid gap-4 md:grid-cols-2">
                {(tab === "all" ? achievements : achievements.filter(a => a.category === tab)).map((achievement, index) => {
                  const category = categoryConfig[achievement.category];
                  const CategoryIcon = category.icon;

                  return (
                    <motion.div
                      key={achievement.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                    >
                      <Card className="shadow-card hover:shadow-card-hover transition-all overflow-hidden group">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-4">
                            <div className={cn("h-14 w-14 rounded-xl flex items-center justify-center shrink-0", category.color)}>
                              <CategoryIcon className="h-7 w-7" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap mb-1">
                                {achievement.position && (
                                  <span className={cn("px-2 py-0.5 rounded-full text-xs font-bold", positionColors[achievement.position] || "bg-muted")}>
                                    {achievement.position}
                                  </span>
                                )}
                                <Badge className={levelColors[achievement.level]}>
                                  {achievement.level.charAt(0).toUpperCase() + achievement.level.slice(1)} Level
                                </Badge>
                              </div>
                              <h3 className="font-semibold text-lg">{achievement.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {achievement.description}
                              </p>
                              <div className="flex items-center justify-between mt-3">
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Calendar className="h-3.5 w-3.5" />
                                  {achievement.date}
                                </span>
                                {achievement.certificate && (
                                  <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Download className="h-4 w-4 mr-1" />
                                    Certificate
                                  </Button>
                                )}
                              </div>
                            </div>
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

export default Achievements;