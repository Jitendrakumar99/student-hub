import { motion } from "framer-motion";
import { PartyPopper, Calendar, MapPin, Clock, Users, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  category: "sports" | "cultural" | "academic" | "competition";
  participants?: number;
  registered?: boolean;
  status: "upcoming" | "ongoing" | "completed";
}

const events: Event[] = [
  {
    id: "1",
    title: "Annual Sports Day 2026",
    description: "Join us for the annual sports day with track events, team sports, and more. All students are encouraged to participate.",
    date: "Feb 15, 2026",
    time: "8:00 AM - 5:00 PM",
    venue: "School Ground",
    category: "sports",
    participants: 450,
    registered: true,
    status: "upcoming",
  },
  {
    id: "2",
    title: "Science Exhibition",
    description: "Showcase your innovative science projects at the inter-school science exhibition.",
    date: "Feb 5, 2026",
    time: "9:00 AM - 3:00 PM",
    venue: "Exhibition Hall",
    category: "academic",
    participants: 120,
    registered: true,
    status: "upcoming",
  },
  {
    id: "3",
    title: "Republic Day Celebration",
    description: "Flag hoisting ceremony followed by cultural performances and patriotic songs.",
    date: "Jan 26, 2026",
    time: "8:00 AM - 12:00 PM",
    venue: "School Auditorium",
    category: "cultural",
    participants: 800,
    status: "upcoming",
  },
  {
    id: "4",
    title: "Inter-School Debate Competition",
    description: "Participate in the annual debate competition on current affairs topics.",
    date: "Feb 20, 2026",
    time: "10:00 AM - 4:00 PM",
    venue: "Conference Hall",
    category: "competition",
    participants: 60,
    status: "upcoming",
  },
  {
    id: "5",
    title: "Annual Day Function",
    description: "Grand celebration with performances, awards ceremony, and cultural programs.",
    date: "Mar 15, 2026",
    time: "4:00 PM - 9:00 PM",
    venue: "School Auditorium",
    category: "cultural",
    participants: 1000,
    status: "upcoming",
  },
  {
    id: "6",
    title: "Math Olympiad",
    description: "District level mathematics olympiad for Class 9-12 students.",
    date: "Jan 10, 2026",
    time: "9:00 AM - 12:00 PM",
    venue: "Exam Hall",
    category: "academic",
    participants: 200,
    registered: true,
    status: "completed",
  },
];

const categoryConfig = {
  sports: { color: "bg-success/10 text-success border-success/20", label: "Sports" },
  cultural: { color: "bg-accent/10 text-accent border-accent/20", label: "Cultural" },
  academic: { color: "bg-primary/10 text-primary border-primary/20", label: "Academic" },
  competition: { color: "bg-info/10 text-info border-info/20", label: "Competition" },
};

const Events = () => {
  const upcomingEvents = events.filter(e => e.status === "upcoming");
  const completedEvents = events.filter(e => e.status === "completed");

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Events & Activities</h1>
        <p className="text-muted-foreground mt-1">
          Discover and participate in school events
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="registered">My Registrations</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {upcomingEvents.map((event, index) => {
                const category = categoryConfig[event.category];
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Card className={cn(
                      "shadow-card hover:shadow-card-hover transition-all overflow-hidden",
                      event.registered && "border-l-4 border-l-success"
                    )}>
                      <div className={cn("h-2", category.color.split(" ")[0])} />
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between mb-3">
                          <Badge className={category.color}>{category.label}</Badge>
                          {event.registered && (
                            <Badge className="bg-success/10 text-success gap-1">
                              <CheckCircle2 className="h-3.5 w-3.5" />
                              Registered
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                          {event.description}
                        </p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span>{event.venue}</span>
                          </div>
                          {event.participants && (
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4" />
                              <span>{event.participants} participants</span>
                            </div>
                          )}
                        </div>
                        <div className="mt-4">
                          {event.registered ? (
                            <Button variant="outline" className="w-full">View Details</Button>
                          ) : (
                            <Button className="w-full gradient-primary">Register Now</Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="registered" className="mt-6">
            <div className="grid gap-4">
              {events.filter(e => e.registered).map((event, index) => {
                const category = categoryConfig[event.category];
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Card className="shadow-card border-l-4 border-l-success">
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="h-14 w-14 rounded-xl bg-success/10 flex items-center justify-center">
                              <PartyPopper className="h-7 w-7 text-success" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className={category.color}>{category.label}</Badge>
                                <Badge variant="secondary">{event.date}</Badge>
                              </div>
                              <h3 className="font-semibold">{event.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {event.time} • {event.venue}
                              </p>
                            </div>
                          </div>
                          <Button variant="outline">View Details</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="past" className="mt-6">
            <div className="grid gap-4">
              {completedEvents.map((event, index) => {
                const category = categoryConfig[event.category];
                return (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Card className="shadow-card opacity-80">
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className={category.color}>{category.label}</Badge>
                              <Badge variant="secondary">{event.date}</Badge>
                              <Badge variant="outline">Completed</Badge>
                            </div>
                            <h3 className="font-semibold">{event.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {event.participants} participants
                            </p>
                          </div>
                          <Button variant="outline">View Gallery</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Events;