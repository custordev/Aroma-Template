"use client";
import React from "react";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  ExternalLink,
  Home,
  LayoutGrid,
  LineChart,
  Menu,
  Package,
  Package2,
  Package2Icon,
  PackageCheck,
  Search,
  ShoppingCart,
  ShoppingCartIcon,
  User,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function SlideBar() {
  const sliderLinks = [
    { title: "Dashboard", href: "/dashboard", icon: <Home /> },
    {
      title: "Orders",
      href: "/dashboard/orders",
      icon: <ShoppingCartIcon />,
      count: 6,
    },
    { title: "Products", href: "/dashboard/products", icon: <Package2Icon /> },
    {
      title: "Categories",
      href: "/dashboard/categories",
      icon: <LayoutGrid />,
    },
    { title: "Customers", href: "/dashboard/customers", icon: <Users /> },
    { title: "Analytics", href: "/dashboard/analytics", icon: <LineChart /> },
  ];
  const pathName = usePathname();

  return (
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <PackageCheck className="h-6 w-6" />
          <span className="font-bold">Aroma</span>
        </Link>
        <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Toggle notifications</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {sliderLinks.map((item, i) => {
            const isActive = item.href === pathName;
            return (
              <Link
                key={i}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  isActive && " bg-muted  text-primary  hover:text-primary"
                )}
              >
                {item.icon}
                {item.title}
                {item.count && (
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    {item.count}
                  </Badge>
                )}
              </Link>
            );
          })}
        </nav>
        <Link
          href="/"
          className="flex items-center ml-4 gap-2 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
        >
          <ExternalLink />
          Live Website
        </Link>
      </div>
      <div className="mt-auto p-4">
        <Card x-chunk="dashboard-02-chunk-0">
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
