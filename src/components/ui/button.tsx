
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { PlusCircle, Trash2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        secondary: "bg-white text-primary border border-primary hover:bg-accent hover:text-primary",
        ghost: "hover:bg-accent hover:text-accent-foreground", // Adding back the ghost variant to fix errors
        link: "text-primary underline-offset-4 hover:underline",
        cancel: "bg-muted text-muted-foreground hover:bg-muted/80",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        AddNew: "bg-primary text-primary-foreground hover:bg-primary/90",
        AddNewSecondary: "bg-white text-primary border border-primary hover:bg-accent hover:text-primary",
        delete: "bg-[#FEECE8] text-destructive border border-[#FF8989] hover:bg-[#FEECE8]/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const showIcon = variant === 'AddNew' || variant === 'AddNewSecondary'
    const showDeleteIcon = variant === 'delete'
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {showIcon && <PlusCircle className="h-4 w-4" />}
        {showDeleteIcon && <Trash2 className="h-4 w-4" />}
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
