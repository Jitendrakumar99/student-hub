import { motion } from "framer-motion";
import {
  PartyPopper,
  Calendar,
  MapPin,
  Trophy,
  Music,
  Dumbbell,
  Camera,
  CheckCircle2,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ParentEvents = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Sports Day",
      date: "Jan 30, 2026",
      time: "8:00 AM - 4:00 PM",
      venue: "School Sports Ground",
      type: "sports",
      childParticipation: true,
      events: ["100m Race", "Relay Race"],
    },
    {
      id: 2,
      title: "Republic Day Celebration",
      date: "Jan 26, 2026",
      time: "8:00 AM - 10:00 AM",
      venue: "School Auditorium",
      type: "cultural",
      childParticipation: false,
      events: [],
    },
    {
      id: 3,
      title: "Science Exhibition",
      date: "Feb 15, 2026",
      time: "10:00 AM - 3:00 PM",
      venue: "School Exhibition Hall",
      type: "academic",
      childParticipation: true,
      events: ["Physics Project Display"],
    },
    {
      id: 4,
      title: "Inter-House Music Competition",
      date: "Feb 20, 2026",
      time: "2:00 PM - 5:00 PM",
      venue: "School Auditorium",
      type: "cultural",
      childParticipation: true,
      events: ["Solo Singing"],
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Annual Day 2025",
      date: "Dec 15, 2025",
      type: "cultural",
      childParticipation: true,
      photos: 24,
    },
    {
      id: 2,
      title: "Diwali Celebration",
      date: "Nov 10, 2025",
      type: "cultural",
      childParticipation: true,
      photos: 18,
    },
  ];

  const childAchievements = [
    { event: "100m Race", position: "2nd", date: "Oct 2025" },
    { event: "Essay Competition", position: "1st", date: "Sep 2025" },
    { event: "Science Quiz", position: "3rd", date: "Aug 2025" },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "sports":
        return <Dumbbell className="h-5 w-5" />;
      case "cultural":
        return <Music className="h-5 w-5" />;
      case "academic":
        return <Trophy className="h-5 w-5" />;
      default:
        return <PartyPopper className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "sports":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/30";
      case "cultural":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30";
      case "academic":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Events & Activities</h1>
        <p className="text-muted-foreground">School events and your child's participation</p>
      </motion.div>

      {/* Child's Participation Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              John's Achievements This Year
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {childAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/50 dark:bg-black/20 text-center"
                >
                  <Badge className="bg-amber-100 text-amber-700 mb-2">
                    {achievement.position} Place
                  </Badge>
                  <p className="font-semibold">{achievement.event}</p>
                  <p className="text-sm text-muted-foreground">{achievement.date}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`h-12 w-12 rounded-lg ${getTypeColor(event.type)} flex items-center justify-center`}>
                        {getTypeIcon(event.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{event.title}</h3>
                          {event.childParticipation && (
                            <Badge className="bg-emerald-100 text-emerald-700 text-xs">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Participating
                            </Badge>
                          )}
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {event.venue}
                          </div>
                        </div>
                        {event.events.length > 0 && (
                          <div className="mt-3">
                            <p className="text-xs text-muted-foreground mb-1">Events:</p>
                            <div className="flex flex-wrap gap-1">
                              {event.events.map((e, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">
                                  {e}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`h-12 w-12 rounded-lg ${getTypeColor(event.type)} flex items-center justify-center`}>
                          {getTypeIcon(event.type)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                          {event.childParticipation && (
                            <Badge className="mt-2 bg-emerald-100 text-emerald-700 text-xs">
                              Participated
                            </Badge>
                          )}
                        </div>
                      </div>
                      {event.photos > 0 && (
                        <Button variant="outline" size="sm">
                          <Camera className="h-4 w-4 mr-1" />
                          {event.photos} Photos
                        </Button>
                      )}
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

export default ParentEvents;
