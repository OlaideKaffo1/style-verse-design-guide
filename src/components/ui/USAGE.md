
# Component Library Usage Guide

This document provides examples of how to use the most common components from our UI library.

## Basic Components

### Button

```jsx
import { Button } from "@/components/ui"

export default function MyComponent() {
  return (
    <>
      <Button>Default Button</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="defaultWithIcon">With Icon</Button>
      <Button variant="secondaryWithIcon">With Icon</Button>
    </>
  )
}
```

### Input

```jsx
import { Input } from "@/components/ui"

export default function MyComponent() {
  return <Input placeholder="Enter your name" />
}
```

## Form Components

### Form with validation

```jsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Input } from "@/components/ui"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export default function MyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>Enter your email address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

## Layout Components

### Card

```jsx
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui"

export default function MyCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
```

### Dialog

```jsx
import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui"

export default function MyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            Dialog Description
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">Dialog content goes here</div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

## Data Display

### Status Badges

```jsx
import { Badge } from "@/components/ui"

export default function MyComponent() {
  return (
    <div className="space-x-2">
      <Badge variant="inProgress">In Progress</Badge>
      <Badge variant="live">Live</Badge>
      <Badge variant="completed">Completed</Badge>
      <Badge variant="cancelled">Cancelled</Badge>
    </div>
  )
}
```

## Feedback Components

### Toast

```jsx
import { Button } from "@/components/ui"
import { useToast } from "@/hooks/use-toast"

export default function MyComponent() {
  const { toast } = useToast()
  
  return (
    <Button
      onClick={() => {
        toast({
          title: "Success",
          description: "Your action was completed successfully.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

## For more examples

Refer to the `ComponentShowcase.tsx` file in the StyleGuide directory for more examples of component usage.
