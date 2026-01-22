import { motion } from "framer-motion";
import { Download, FileText, CreditCard, GraduationCap, Calendar, File, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface DownloadItem {
  id: string;
  title: string;
  description: string;
  category: "identity" | "academic" | "certificate" | "calendar";
  fileType: string;
  fileSize: string;
  lastUpdated: string;
  available: boolean;
}

const downloads: DownloadItem[] = [
  {
    id: "1",
    title: "Student ID Card",
    description: "Digital copy of your student identity card",
    category: "identity",
    fileType: "PDF",
    fileSize: "245 KB",
    lastUpdated: "Aug 2025",
    available: true,
  },
  {
    id: "2",
    title: "Bonafide Certificate",
    description: "Certificate for official purposes",
    category: "certificate",
    fileType: "PDF",
    fileSize: "180 KB",
    lastUpdated: "Jan 2026",
    available: true,
  },
  {
    id: "3",
    title: "Academic Syllabus 2025-26",
    description: "Complete syllabus for Class 10",
    category: "academic",
    fileType: "PDF",
    fileSize: "2.4 MB",
    lastUpdated: "Jun 2025",
    available: true,
  },
  {
    id: "4",
    title: "School Calendar 2025-26",
    description: "Academic calendar with holidays and events",
    category: "calendar",
    fileType: "PDF",
    fileSize: "1.8 MB",
    lastUpdated: "Jun 2025",
    available: true,
  },
  {
    id: "5",
    title: "Mid-Term Report Card",
    description: "Report card for mid-term examinations",
    category: "academic",
    fileType: "PDF",
    fileSize: "320 KB",
    lastUpdated: "Oct 2025",
    available: true,
  },
  {
    id: "6",
    title: "Fee Receipt - Q3",
    description: "Payment receipt for Quarter 3 fees",
    category: "certificate",
    fileType: "PDF",
    fileSize: "125 KB",
    lastUpdated: "Oct 2025",
    available: true,
  },
  {
    id: "7",
    title: "Transfer Certificate",
    description: "TC for school transfer (if applicable)",
    category: "certificate",
    fileType: "PDF",
    fileSize: "—",
    lastUpdated: "—",
    available: false,
  },
  {
    id: "8",
    title: "Character Certificate",
    description: "Character and conduct certificate",
    category: "certificate",
    fileType: "PDF",
    fileSize: "150 KB",
    lastUpdated: "Jan 2026",
    available: true,
  },
];

const categoryConfig = {
  identity: { icon: CreditCard, color: "bg-primary/10 text-primary", label: "Identity" },
  academic: { icon: GraduationCap, color: "bg-info/10 text-info", label: "Academic" },
  certificate: { icon: FileText, color: "bg-success/10 text-success", label: "Certificate" },
  calendar: { icon: Calendar, color: "bg-accent/10 text-accent", label: "Calendar" },
};

const Downloads = () => {
  const groupedDownloads = downloads.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, DownloadItem[]>);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold tracking-tight">Downloads</h1>
        <p className="text-muted-foreground mt-1">
          Download ID cards, certificates, and academic documents
        </p>
      </motion.div>

      {/* Quick Access Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {Object.entries(categoryConfig).map(([key, config], index) => {
          const CategoryIcon = config.icon;
          const count = groupedDownloads[key]?.length || 0;
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.05 }}
            >
              <Card className={cn("shadow-card hover:shadow-card-hover transition-all cursor-pointer", config.color.replace("text-", "hover:border-"))}>
                <CardContent className="p-5 text-center">
                  <div className={cn("h-12 w-12 rounded-xl mx-auto mb-3 flex items-center justify-center", config.color)}>
                    <CategoryIcon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold">{config.label}</h3>
                  <p className="text-sm text-muted-foreground">{count} files</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Downloads by Category */}
      {Object.entries(groupedDownloads).map(([category, items], categoryIndex) => {
        const config = categoryConfig[category as keyof typeof categoryConfig];
        const CategoryIcon = config.icon;

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + categoryIndex * 0.1 }}
          >
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CategoryIcon className={cn("h-5 w-5", config.color.split(" ")[1])} />
                  {config.label} Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.03 }}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-lg border transition-all",
                        item.available ? "hover:bg-muted/50" : "opacity-50"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn("h-12 w-12 rounded-lg flex items-center justify-center", config.color)}>
                          <File className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                          <div className="flex items-center gap-3 mt-1">
                            <Badge variant="secondary">{item.fileType}</Badge>
                            {item.available && (
                              <>
                                <span className="text-xs text-muted-foreground">{item.fileSize}</span>
                                <span className="text-xs text-muted-foreground">Updated: {item.lastUpdated}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {item.available ? (
                          <>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              View
                            </Button>
                            <Button size="sm" className="gradient-primary">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </>
                        ) : (
                          <Badge variant="outline">Not Available</Badge>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Downloads;