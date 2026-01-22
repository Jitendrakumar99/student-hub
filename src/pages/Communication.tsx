import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Send, Search, User, Clock, Check, CheckCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "student" | "teacher";
  time: string;
  read: boolean;
}

interface Conversation {
  id: string;
  teacher: string;
  subject: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  messages: Message[];
}

const conversations: Conversation[] = [
  {
    id: "1",
    teacher: "Mr. Johnson",
    subject: "Mathematics",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=johnson",
    lastMessage: "Great work on your calculus assignment!",
    time: "10:30 AM",
    unread: 2,
    messages: [
      { id: "1", text: "Hello Mr. Johnson, I have a doubt about integration.", sender: "student", time: "10:15 AM", read: true },
      { id: "2", text: "Sure, what's your question?", sender: "teacher", time: "10:20 AM", read: true },
      { id: "3", text: "I'm confused about integration by parts.", sender: "student", time: "10:25 AM", read: true },
      { id: "4", text: "I'll explain it in tomorrow's class. Meanwhile, review chapter 5.", sender: "teacher", time: "10:28 AM", read: true },
      { id: "5", text: "Great work on your calculus assignment!", sender: "teacher", time: "10:30 AM", read: false },
    ],
  },
  {
    id: "2",
    teacher: "Mrs. Smith",
    subject: "Physics",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=smith",
    lastMessage: "Don't forget to submit your lab report.",
    time: "Yesterday",
    unread: 0,
    messages: [
      { id: "1", text: "Mrs. Smith, when is the lab report due?", sender: "student", time: "Yesterday", read: true },
      { id: "2", text: "Don't forget to submit your lab report.", sender: "teacher", time: "Yesterday", read: true },
    ],
  },
  {
    id: "3",
    teacher: "Ms. Davis",
    subject: "English",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=davis",
    lastMessage: "Your essay was excellent!",
    time: "Jan 20",
    unread: 0,
    messages: [
      { id: "1", text: "Your essay was excellent!", sender: "teacher", time: "Jan 20", read: true },
    ],
  },
  {
    id: "4",
    teacher: "Mr. Wilson",
    subject: "Chemistry",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=wilson",
    lastMessage: "See you in the lab tomorrow.",
    time: "Jan 19",
    unread: 0,
    messages: [
      { id: "1", text: "See you in the lab tomorrow.", sender: "teacher", time: "Jan 19", read: true },
    ],
  },
];

const Communication = () => {
  const [selectedConvo, setSelectedConvo] = useState<Conversation | null>(conversations[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Communication</h1>
        <p className="text-muted-foreground mt-1">
          Chat with teachers and clear your doubts
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]"
      >
        {/* Conversations List */}
        <Card className="shadow-card lg:col-span-1">
          <CardHeader className="pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-9" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[500px]">
              {conversations.map((convo) => (
                <button
                  key={convo.id}
                  onClick={() => setSelectedConvo(convo)}
                  className={cn(
                    "w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors text-left border-b",
                    selectedConvo?.id === convo.id && "bg-muted"
                  )}
                >
                  <div className="relative">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={convo.avatar} />
                      <AvatarFallback>{convo.teacher[0]}</AvatarFallback>
                    </Avatar>
                    {convo.unread > 0 && (
                      <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                        {convo.unread}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium truncate">{convo.teacher}</h4>
                      <span className="text-xs text-muted-foreground">{convo.time}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{convo.subject}</p>
                    <p className="text-sm text-muted-foreground truncate mt-1">
                      {convo.lastMessage}
                    </p>
                  </div>
                </button>
              ))}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="shadow-card lg:col-span-2 flex flex-col">
          {selectedConvo ? (
            <>
              <CardHeader className="border-b">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedConvo.avatar} />
                    <AvatarFallback>{selectedConvo.teacher[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{selectedConvo.teacher}</CardTitle>
                    <p className="text-sm text-muted-foreground">{selectedConvo.subject}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0 flex flex-col">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {selectedConvo.messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={cn(
                          "flex",
                          msg.sender === "student" ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[70%] rounded-2xl px-4 py-2",
                            msg.sender === "student"
                              ? "bg-primary text-primary-foreground rounded-br-md"
                              : "bg-muted rounded-bl-md"
                          )}
                        >
                          <p className="text-sm">{msg.text}</p>
                          <div className={cn(
                            "flex items-center gap-1 mt-1",
                            msg.sender === "student" ? "justify-end" : "justify-start"
                          )}>
                            <span className="text-xs opacity-70">{msg.time}</span>
                            {msg.sender === "student" && (
                              msg.read ? (
                                <CheckCheck className="h-3.5 w-3.5 opacity-70" />
                              ) : (
                                <Check className="h-3.5 w-3.5 opacity-70" />
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="flex-1"
                    />
                    <Button className="gradient-primary">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <MessageCircle className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Select a conversation to start chatting</p>
              </div>
            </CardContent>
          )}
        </Card>
      </motion.div>
    </div>
  );
};

export default Communication;