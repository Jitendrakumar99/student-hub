import { motion } from "framer-motion";
import {
  Megaphone,
  Calendar,
  AlertTriangle,
  PartyPopper,
  BookOpen,
  Bell,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ParentNotices = () => {
  const notices = [
    {
      id: 1,
      title: "Annual Sports Day 2026",
      content: "The Annual Sports Day will be held on January 30, 2026. All parents are cordially invited to attend.",
      date: "Jan 22, 2026",
      type: "event",
      priority: "normal",
    },
    {
      id: 2,
      title: "PTM Schedule - January",
      content: "Parent-Teacher Meeting scheduled for January 28, 2026. Timings: 10:00 AM to 12:00 PM.",
      date: "Jan 20, 2026",
      type: "meeting",
      priority: "high",
    },
    {
      id: 3,
      title: "Republic Day Holiday",
      content: "School will remain closed on January 26, 2026 on account of Republic Day.",
      date: "Jan 18, 2026",
      type: "holiday",
      priority: "normal",
    },
    {
      id: 4,
      title: "Fee Payment Reminder",
      content: "Kindly clear pending fees by February 15, 2026 to avoid late fee charges.",
      date: "Jan 15, 2026",
      type: "fee",
      priority: "high",
    },
    {
      id: 5,
      title: "Unit Test 3 Schedule",
      content: "Unit Test 3 examinations will commence from February 10, 2026. Detailed schedule attached.",
      date: "Jan 14, 2026",
      type: "exam",
      priority: "high",
    },
    {
      id: 6,
      title: "Winter Uniform Guidelines",
      content: "Students must wear proper winter uniform from December 1st. Detailed guidelines attached.",
      date: "Dec 28, 2025",
      type: "general",
      priority: "normal",
    },
  ];

  const emergencyAlerts = [
    {
      id: 1,
      title: "Early Dismissal - January 25",
      content: "Due to staff training, school will dismiss at 12:00 PM instead of 2:30 PM.",
      date: "Jan 23, 2026",
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "event":
        return <PartyPopper className="h-5 w-5 text-purple-500" />;
      case "meeting":
        return <Calendar className="h-5 w-5 text-blue-500" />;
      case "holiday":
        return <Calendar className="h-5 w-5 text-emerald-500" />;
      case "fee":
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case "exam":
        return <BookOpen className="h-5 w-5 text-red-500" />;
      default:
        return <Bell className="h-5 w-5 text-primary" />;
    }
  };

  const getTypeBadge = (type: string) => {
    const styles: Record<string, string> = {
      event: "bg-purple-100 text-purple-700",
      meeting: "bg-blue-100 text-blue-700",
      holiday: "bg-emerald-100 text-emerald-700",
      fee: "bg-amber-100 text-amber-700",
      exam: "bg-red-100 text-red-700",
      general: "bg-gray-100 text-gray-700",
    };
    return styles[type] || styles.general;
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Notice Board</h1>
        <p className="text-muted-foreground">Stay updated with school announcements</p>
      </motion.div>

      {/* Emergency Alerts */}
      {emergencyAlerts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <Card className="border-red-200 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <AlertTriangle className="h-5 w-5" />
                Emergency Alert
              </CardTitle>
            </CardHeader>
            <CardContent>
              {emergencyAlerts.map((alert) => (
                <div key={alert.id}>
                  <p className="font-semibold">{alert.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{alert.content}</p>
                  <p className="text-xs text-muted-foreground mt-2">{alert.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Notices</TabsTrigger>
            <TabsTrigger value="exam">Exam</TabsTrigger>
            <TabsTrigger value="holiday">Holidays</TabsTrigger>
            <TabsTrigger value="event">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-4">
            <div className="space-y-4">
              {notices.map((notice, index) => (
                <motion.div
                  key={notice.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className={`hover:shadow-md transition-shadow ${
                    notice.priority === "high" ? "border-l-4 border-l-amber-500" : ""
                  }`}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          {getTypeIcon(notice.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{notice.title}</h3>
                            {notice.priority === "high" && (
                              <Badge variant="destructive" className="text-xs">Important</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{notice.content}</p>
                          <div className="flex items-center gap-2 mt-3">
                            <Badge className={getTypeBadge(notice.type)}>
                              {notice.type.charAt(0).toUpperCase() + notice.type.slice(1)}
                            </Badge>
                            <span className="text-xs text-muted-foreground">{notice.date}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="exam" className="mt-4">
            <div className="space-y-4">
              {notices.filter(n => n.type === "exam").map((notice, index) => (
                <Card key={notice.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{notice.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{notice.content}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notice.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="holiday" className="mt-4">
            <div className="space-y-4">
              {notices.filter(n => n.type === "holiday").map((notice, index) => (
                <Card key={notice.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-emerald-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{notice.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{notice.content}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notice.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="event" className="mt-4">
            <div className="space-y-4">
              {notices.filter(n => n.type === "event").map((notice, index) => (
                <Card key={notice.id}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                        <PartyPopper className="h-5 w-5 text-purple-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{notice.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{notice.content}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notice.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default ParentNotices;
