import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Star,
  Download,
  Calendar,
  GraduationCap,
  Dumbbell,
  Music,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ParentAchievements = () => {
  const stats = {
    total: 12,
    academic: 5,
    sports: 4,
    cultural: 3,
  };

  const achievements = [
    {
      id: 1,
      title: "Mathematics Olympiad",
      description: "Gold Medal in School Mathematics Olympiad",
      date: "Jan 2026",
      category: "academic",
      level: "School",
      certificate: true,
    },
    {
      id: 2,
      title: "100m Sprint",
      description: "2nd Place in Inter-House Athletics",
      date: "Oct 2025",
      category: "sports",
      level: "School",
      certificate: true,
    },
    {
      id: 3,
      title: "Essay Writing Competition",
      description: "1st Prize in English Essay Competition",
      date: "Sep 2025",
      category: "academic",
      level: "Inter-School",
      certificate: true,
    },
    {
      id: 4,
      title: "Science Quiz",
      description: "3rd Place in Science Quiz Competition",
      date: "Aug 2025",
      category: "academic",
      level: "School",
      certificate: true,
    },
    {
      id: 5,
      title: "Solo Singing",
      description: "Best Performance Award",
      date: "Jul 2025",
      category: "cultural",
      level: "School",
      certificate: true,
    },
    {
      id: 6,
      title: "Relay Race",
      description: "1st Place (Team Event)",
      date: "Jun 2025",
      category: "sports",
      level: "Inter-School",
      certificate: true,
    },
  ];

  const teacherAppreciations = [
    {
      teacher: "Mr. Sharma",
      subject: "Mathematics",
      message: "John shows exceptional problem-solving skills and always helps classmates.",
      date: "Jan 2026",
    },
    {
      teacher: "Ms. Johnson",
      subject: "English",
      message: "Excellent creative writing abilities. A pleasure to have in class.",
      date: "Dec 2025",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "academic":
        return <GraduationCap className="h-5 w-5" />;
      case "sports":
        return <Dumbbell className="h-5 w-5" />;
      case "cultural":
        return <Music className="h-5 w-5" />;
      default:
        return <Trophy className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "academic":
        return "bg-blue-100 text-blue-700";
      case "sports":
        return "bg-orange-100 text-orange-700";
      case "cultural":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "National":
        return "bg-amber-100 text-amber-700 border-amber-300";
      case "State":
        return "bg-emerald-100 text-emerald-700 border-emerald-300";
      case "Inter-School":
        return "bg-blue-100 text-blue-700 border-blue-300";
      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Achievements</h1>
        <p className="text-muted-foreground">Your child's awards and recognitions</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <Card className="bg-gradient-to-br from-amber-400/20 to-yellow-400/20 border-amber-200">
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 text-amber-600 mx-auto" />
              <p className="text-3xl font-bold mt-2">{stats.total}</p>
              <p className="text-sm text-muted-foreground">Total Awards</p>
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
              <GraduationCap className="h-8 w-8 text-blue-600 mx-auto" />
              <p className="text-3xl font-bold mt-2">{stats.academic}</p>
              <p className="text-sm text-muted-foreground">Academic</p>
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
              <Dumbbell className="h-8 w-8 text-orange-600 mx-auto" />
              <p className="text-3xl font-bold mt-2">{stats.sports}</p>
              <p className="text-sm text-muted-foreground">Sports</p>
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
              <Music className="h-8 w-8 text-purple-600 mx-auto" />
              <p className="text-3xl font-bold mt-2">{stats.cultural}</p>
              <p className="text-sm text-muted-foreground">Cultural</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Achievements</TabsTrigger>
          <TabsTrigger value="academic">Academic</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="cultural">Cultural</TabsTrigger>
          <TabsTrigger value="appreciations">Appreciations</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`h-12 w-12 rounded-lg ${getCategoryColor(achievement.category)} flex items-center justify-center`}>
                        {getCategoryIcon(achievement.category)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{achievement.title}</h3>
                            <p className="text-sm text-muted-foreground">{achievement.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <Badge variant="outline" className={getLevelBadge(achievement.level)}>
                            {achievement.level}
                          </Badge>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {achievement.date}
                          </span>
                        </div>
                        {achievement.certificate && (
                          <Button variant="outline" size="sm" className="mt-3">
                            <Download className="h-4 w-4 mr-1" />
                            Certificate
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="academic" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.filter(a => a.category === "academic").map((achievement, index) => (
              <Card key={achievement.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">{achievement.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sports" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.filter(a => a.category === "sports").map((achievement, index) => (
              <Card key={achievement.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center">
                      <Dumbbell className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">{achievement.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cultural" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.filter(a => a.category === "cultural").map((achievement, index) => (
              <Card key={achievement.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                      <Music className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground mt-2">{achievement.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="appreciations" className="mt-4">
          <div className="space-y-4">
            {teacherAppreciations.map((appreciation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Star className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="italic text-muted-foreground">"{appreciation.message}"</p>
                        <div className="mt-3 flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{appreciation.teacher}</p>
                            <p className="text-sm text-muted-foreground">{appreciation.subject}</p>
                          </div>
                          <span className="text-xs text-muted-foreground">{appreciation.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ParentAchievements;
