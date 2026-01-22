import { motion } from "framer-motion";
import { useState } from "react";
import {
  MessageCircle,
  Send,
  Calendar,
  Clock,
  Bell,
  User,
  FileText,
  Video,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ParentCommunication = () => {
  const [message, setMessage] = useState("");

  const teachers = [
    { name: "Mr. Sharma", subject: "Mathematics", avatar: "sharma", unread: 2 },
    { name: "Mrs. Gupta", subject: "Physics", avatar: "gupta", unread: 0 },
    { name: "Ms. Johnson", subject: "English", avatar: "johnson", unread: 1 },
    { name: "Dr. Patel", subject: "Chemistry", avatar: "patel", unread: 0 },
  ];

  const messages = [
    {
      id: 1,
      sender: "Mr. Sharma",
      content: "John has been doing well in mathematics. Keep up the good work!",
      time: "10:30 AM",
      date: "Today",
      isTeacher: true,
    },
    {
      id: 2,
      sender: "You",
      content: "Thank you for the feedback. We'll ensure he continues practicing at home.",
      time: "10:45 AM",
      date: "Today",
      isTeacher: false,
    },
    {
      id: 3,
      sender: "Mr. Sharma",
      content: "Please ensure John completes the extra practice worksheet by Friday.",
      time: "11:00 AM",
      date: "Today",
      isTeacher: true,
    },
  ];

  const circulars = [
    { title: "Annual Day Celebration", date: "Jan 25, 2026", type: "event" },
    { title: "Winter Uniform Guidelines", date: "Jan 20, 2026", type: "general" },
    { title: "PTM Schedule for January", date: "Jan 18, 2026", type: "meeting" },
    { title: "Fee Payment Reminder", date: "Jan 15, 2026", type: "fee" },
  ];

  const ptmSchedule = [
    { date: "Jan 28, 2026", time: "10:00 AM - 12:00 PM", status: "scheduled" },
    { date: "Dec 15, 2025", time: "10:00 AM - 12:00 PM", status: "completed" },
  ];

  const meetingRequests = [
    { teacher: "Mr. Sharma", subject: "Mathematics", reason: "Discuss improvement plan", status: "pending" },
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-2xl font-bold tracking-tight">Communication</h1>
        <p className="text-muted-foreground">Stay connected with teachers and school</p>
      </motion.div>

      <Tabs defaultValue="messages">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="circulars">Circulars</TabsTrigger>
          <TabsTrigger value="ptm">PTM Schedule</TabsTrigger>
          <TabsTrigger value="meetings">Meeting Requests</TabsTrigger>
        </TabsList>

        <TabsContent value="messages" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Teachers List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-[500px]">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Teachers</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <ScrollArea className="h-[420px]">
                    <div className="space-y-2 p-2">
                      {teachers.map((teacher, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer transition-colors"
                        >
                          <Avatar>
                            <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${teacher.avatar}`} />
                            <AvatarFallback>{teacher.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{teacher.name}</p>
                            <p className="text-sm text-muted-foreground">{teacher.subject}</p>
                          </div>
                          {teacher.unread > 0 && (
                            <Badge className="bg-primary">{teacher.unread}</Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </motion.div>

            {/* Chat Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="h-[500px] flex flex-col">
                <CardHeader className="pb-2 border-b">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=sharma" />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Mr. Sharma</CardTitle>
                      <p className="text-sm text-muted-foreground">Mathematics Teacher</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 p-0 flex flex-col">
                  <ScrollArea className="flex-1 p-4">
                    <div className="space-y-4">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex ${msg.isTeacher ? "justify-start" : "justify-end"}`}
                        >
                          <div
                            className={`max-w-[80%] p-3 rounded-lg ${
                              msg.isTeacher
                                ? "bg-muted"
                                : "bg-primary text-primary-foreground"
                            }`}
                          >
                            <p className="text-sm">{msg.content}</p>
                            <p className={`text-xs mt-1 ${
                              msg.isTeacher ? "text-muted-foreground" : "text-primary-foreground/70"
                            }`}>
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                  <div className="p-4 border-t">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1"
                      />
                      <Button size="icon">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="circulars" className="mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  School Circulars
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {circulars.map((circular, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{circular.title}</p>
                          <p className="text-sm text-muted-foreground">{circular.date}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{circular.type}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="ptm" className="mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Parent-Teacher Meeting Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ptmSchedule.map((ptm, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        ptm.status === "scheduled" 
                          ? "border-primary/30 bg-primary/5" 
                          : "bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Video className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-semibold">{ptm.date}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-4 w-4" />
                              {ptm.time}
                            </div>
                          </div>
                        </div>
                        <Badge variant={ptm.status === "scheduled" ? "default" : "secondary"}>
                          {ptm.status === "scheduled" ? "Upcoming" : "Completed"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="meetings" className="mt-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-primary" />
                  Meeting Requests
                </CardTitle>
                <Button>Request New Meeting</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {meetingRequests.map((request, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border bg-amber-50 dark:bg-amber-900/20 border-amber-200"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">{request.teacher}</p>
                          <p className="text-sm text-muted-foreground">{request.subject}</p>
                          <p className="text-sm mt-2">{request.reason}</p>
                        </div>
                        <Badge className="bg-amber-100 text-amber-700">
                          {request.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ParentCommunication;
