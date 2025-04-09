"use client"

import { useState } from "react"
import {
  ArrowLeftRight,
  Bell,
  ChevronDown,
  Copy,
  CreditCard,
  DollarSign,
  Eye,
  EyeOff,
  Home,
  LogOut,
  Package,
  Settings,
  User,
  Users,
} from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Separator } from "@/components/ui/separator"

export default function Dashboard() {
  const { toast } = useToast()
  const [withdrawAmount, setWithdrawAmount] = useState("")
  const [depositAmount, setDepositAmount] = useState("")
  const [walletVisible, setWalletVisible] = useState(false)

  const walletAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"
  const maskedWallet = "••••••••••••••••••••••••••••••••••••••••"

  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied!",
      description: message,
    })
  }

  const toggleWalletVisibility = () => {
    setWalletVisible(!walletVisible)
  }

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-card border-r">
        <div className="flex h-14 items-center border-b px-4">
          <h2 className="text-lg font-semibold">Finance Portal</h2>
        </div>
        <div className="px-4 py-2">
          <nav className="flex flex-col gap-1">
            <Button variant="ghost" className="justify-start" asChild>
              <a href="#" className="flex items-center gap-2">
                <Home size={16} />
                Dashboard
              </a>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="/transactions" className="flex items-center gap-2">
                <DollarSign size={16} />
                Transactions
              </a>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="/packages" className="flex items-center gap-2">
                <Package size={16} />
                Packages
              </a>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="/referrals" className="flex items-center gap-2">
                <Users size={16} />
                Referrals
              </a>
            </Button>
            <Button variant="ghost" className="justify-start" asChild>
              <a href="/settings" className="flex items-center gap-2">
                <Settings size={16} />
                Settings
              </a>
            </Button>
          </nav>
        </div>
        <div className="absolute bottom-4 left-4 right-4 md:fixed md:bottom-4 md:left-4 md:w-56">
          <div className="flex items-center gap-2 p-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium leading-none">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john.doe@example.com</p>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="icon">
              <Bell size={16} />
            </Button>
          </div>
        </div>

        {/* Balance and Package Info */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Current Balance</CardDescription>
              <CardTitle className="text-3xl">$2,450.50</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">Last updated: April 9, 2025</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Next Withdrawal</CardDescription>
              <CardTitle>April 15, 2025</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-950 dark:text-green-400 dark:hover:bg-green-950"
              >
                Available in 6 days
              </Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Current Package</CardDescription>
              <CardTitle>Premium Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge>Active</Badge>
              <p className="text-xs text-muted-foreground mt-1">Renews on May 10, 2025</p>
            </CardContent>
          </Card>
        </div>

        {/* Wallet and Referral */}
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Wallet Address</CardTitle>
              <CardDescription>Your cryptocurrency wallet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
                <code className="text-xs md:text-sm font-mono truncate">
                  {walletVisible ? walletAddress : maskedWallet}
                </code>
                <div className="flex gap-1 ml-auto">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleWalletVisibility}
                    title={walletVisible ? "Hide wallet address" : "Show wallet address"}
                  >
                    {walletVisible ? <EyeOff size={14} /> : <Eye size={14} />}
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => copyToClipboard(walletAddress, "Wallet address copied to clipboard")}
                    title="Copy wallet address"
                  >
                    <Copy size={14} />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Referral Code</CardTitle>
              <CardDescription>Share with friends to earn rewards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
                <code className="text-sm font-mono">JOHN25</code>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard("JOHN25", "Referral code copied to clipboard")}
                >
                  <Copy size={14} />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">You've referred 3 users so far</p>
            </CardContent>
          </Card>
        </div>

        {/* Deposit and Withdraw */}
        <Tabs defaultValue="deposit" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="deposit">Deposit</TabsTrigger>
            <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
          </TabsList>

          <TabsContent value="deposit">
            <Card>
              <CardHeader>
                <CardTitle>Deposit Funds</CardTitle>
                <CardDescription>Add money to your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="deposit-amount">Amount</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="deposit-amount"
                      placeholder="0.00"
                      className="pl-9"
                      value={depositAmount}
                      onChange={(e) => setDepositAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-method">Payment Method</Label>
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <CreditCard size={16} />
                    <span className="text-sm">Credit Card ending in 4242</span>
                    <ChevronDown size={16} className="ml-auto" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Deposit Funds</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="withdraw">
            <Card>
              <CardHeader>
                <CardTitle>Withdraw Funds</CardTitle>
                <CardDescription>Transfer money to your bank account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="withdraw-amount">Amount</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="withdraw-amount"
                      placeholder="0.00"
                      className="pl-9"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="withdraw-method">Withdraw To</Label>
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <ArrowLeftRight size={16} />
                    <span className="text-sm">Bank Account (****6789)</span>
                    <ChevronDown size={16} className="ml-auto" />
                  </div>
                </div>
                <Separator />
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Available for withdrawal:</span>
                  <span className="font-medium">$2,450.50</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Withdraw Funds</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
