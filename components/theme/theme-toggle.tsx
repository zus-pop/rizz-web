"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {/* Nút sẽ sử dụng màu viền và màu nền của accent */}
        <Button variant="outline" size="icon" className="border-accent bg-accent">
          {/* Icon Mặt trời (chế độ sáng) */}
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-accent-foreground" />
          {/* Icon Mặt trăng (chế độ tối) */}
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-accent-foreground" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      {/* Nội dung dropdown sẽ sử dụng màu của popover */}
      <DropdownMenuContent align="end" className="bg-popover bg-card text-popover-foreground">
        <DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-accent/50 focus:bg-accent/50 cursor-pointer">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-accent/50 focus:bg-accent/50 cursor-pointer">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="hover:bg-accent/50 focus:bg-accent/50 cursor-pointer">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}