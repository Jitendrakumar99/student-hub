import { motion } from "framer-motion";
import { CreditCard, Download, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Fee {
  id: string;
  type: string;
  amount: number;
  dueDate: string;
  status: "paid" | "pending" | "overdue";
  paidDate?: string;
  receiptNo?: string;
}

const fees: Fee[] = [
  { id: "1", type: "Tuition Fee - Q1", amount: 25000, dueDate: "Apr 15, 2025", status: "paid", paidDate: "Apr 10, 2025", receiptNo: "REC-2025-001" },
  { id: "2", type: "Tuition Fee - Q2", amount: 25000, dueDate: "Jul 15, 2025", status: "paid", paidDate: "Jul 12, 2025", receiptNo: "REC-2025-002" },
  { id: "3", type: "Tuition Fee - Q3", amount: 25000, dueDate: "Oct 15, 2025", status: "paid", paidDate: "Oct 14, 2025", receiptNo: "REC-2025-003" },
  { id: "4", type: "Tuition Fee - Q4", amount: 25000, dueDate: "Jan 15, 2026", status: "pending" },
  { id: "5", type: "Lab Fee", amount: 5000, dueDate: "Jan 31, 2026", status: "pending" },
  { id: "6", type: "Sports Fee", amount: 3000, dueDate: "Dec 31, 2025", status: "overdue" },
];

const statusConfig = {
  paid: { icon: CheckCircle2, color: "bg-success/10 text-success", label: "Paid" },
  pending: { icon: Clock, color: "bg-warning/10 text-warning", label: "Pending" },
  overdue: { icon: AlertCircle, color: "bg-destructive/10 text-destructive", label: "Overdue" },
};

const Fees = () => {
  const totalPaid = fees.filter(f => f.status === "paid").reduce((acc, f) => acc + f.amount, 0);
  const totalPending = fees.filter(f => f.status === "pending").reduce((acc, f) => acc + f.amount, 0);
  const totalOverdue = fees.filter(f => f.status === "overdue").reduce((acc, f) => acc + f.amount, 0);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fees & Payments</h1>
          <p className="text-muted-foreground mt-1">
            View fee structure and make payments
          </p>
        </div>
        <Button className="gradient-primary">
          <CreditCard className="h-4 w-4 mr-2" />
          Pay Now
        </Button>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <Card className="shadow-card bg-gradient-to-br from-success/10 to-success/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Paid</p>
                <p className="text-3xl font-bold text-success">₹{totalPaid.toLocaleString()}</p>
              </div>
              <CheckCircle2 className="h-10 w-10 text-success/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-warning/10 to-warning/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-3xl font-bold text-warning">₹{totalPending.toLocaleString()}</p>
              </div>
              <Clock className="h-10 w-10 text-warning/50" />
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-to-br from-destructive/10 to-destructive/5">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overdue</p>
                <p className="text-3xl font-bold text-destructive">₹{totalOverdue.toLocaleString()}</p>
              </div>
              <AlertCircle className="h-10 w-10 text-destructive/50" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Fees Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Fee Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Fee Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fees.map((fee, index) => {
                  const status = statusConfig[fee.status];
                  const StatusIcon = status.icon;

                  return (
                    <motion.tr
                      key={fee.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                    >
                      <TableCell className="font-medium">{fee.type}</TableCell>
                      <TableCell>₹{fee.amount.toLocaleString()}</TableCell>
                      <TableCell>{fee.dueDate}</TableCell>
                      <TableCell>
                        <Badge className={cn("gap-1", status.color)}>
                          <StatusIcon className="h-3.5 w-3.5" />
                          {status.label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {fee.status === "paid" ? (
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-1" />
                            Receipt
                          </Button>
                        ) : (
                          <Button size="sm" className="gradient-primary">
                            Pay Now
                          </Button>
                        )}
                      </TableCell>
                    </motion.tr>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Fees;