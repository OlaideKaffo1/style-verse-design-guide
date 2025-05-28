import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheck, AlertCircle, InfoIcon, Home, Settings, Calendar, Search, Inbox } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

export default function ComponentShowcase() {
  return (
    <Tabs defaultValue="buttons">
      <TabsList className="mb-4">
        <TabsTrigger value="buttons">Buttons</TabsTrigger>
        <TabsTrigger value="cards">Cards</TabsTrigger>
        <TabsTrigger value="forms">Form Inputs</TabsTrigger>
        <TabsTrigger value="feedback">Feedback</TabsTrigger>
        <TabsTrigger value="sidebar">Sidebar</TabsTrigger>
      </TabsList>

      {/* Buttons */}
      <TabsContent value="buttons" className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Button Variants</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="link">Link</Button>
            <Button variant="cancel">Cancel</Button>
            <Button variant="delete">Delete</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Buttons with Icon</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="AddNew">Add Item</Button>
            <Button variant="AddNewSecondary">Add Item</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Button Sizes</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg">Large</Button>
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="icon"><InfoIcon className="h-4 w-4" /></Button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Button States</h3>
          <div className="flex flex-wrap items-center gap-4">
            <Button>Enabled</Button>
            <Button disabled>Disabled</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary" disabled>Disabled Secondary</Button>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-md">
          <h3 className="text-sm font-medium mb-3">Usage Guidelines</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Use <code className="text-xs">default</code> for primary actions (submit, confirm)</li>
            <li>Use <code className="text-xs">secondary</code> for secondary actions</li>
            <li>Use <code className="text-xs">AddNewSecondary</code> or <code className="text-xs">secondaryWithIcon</code> for actions that add or create</li>
            <li>Use <code className="text-xs">cancel</code> for dismissing or canceling actions</li>
            <li>Use <code className="text-xs">delete</code> for delete actions</li>
            <li>Use <code className="text-xs">link</code> for less emphasis</li>
            <li>Maintain consistent button hierarchy on each page</li>
          </ul>
          
          <div className="mt-4">
            <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
{`import { Button } from "@/components/ui/button";

// Examples
<Button>Default Button</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="defaultWithIcon">Add Item</Button>
<Button variant="cancel">Cancel</Button>
<Button variant="delete">Delete</Button>`}
            </pre>
          </div>
        </div>
      </TabsContent>

      {/* Cards */}
      <TabsContent value="cards" className="space-y-6">
        <div className="space-y-6">
          <h3 className="text-lg font-medium">Card Component</h3>
          <Card>
            <CardHeader className="flex flex-row items-start justify-between space-y-0">
              <div>
                <CardTitle>Feature Card</CardTitle>
                <CardDescription>Standard card with badge</CardDescription>
              </div>
              <Badge variant="live">Live</Badge>
            </CardHeader>
            <CardContent>
              <p>Cards group related content and information. Use this standardized card layout throughout your application for consistency.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted p-4 rounded-md">
          <h3 className="text-sm font-medium mb-3">Usage Guidelines</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Use cards to group related content and actions</li>
            <li>Maintain consistent padding and spacing within cards</li>
            <li>Use the card header for titles and descriptions</li>
            <li>Add a badge in the top right to indicate status</li>
            <li>Keep card content focused and concise</li>
          </ul>
          
          <div className="mt-4">
            <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
{`import { Card, CardHeader, CardTitle, CardDescription, 
  CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

<Card>
  <CardHeader className="flex flex-row items-start justify-between space-y-0">
    <div>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card description</CardDescription>
    </div>
    <Badge variant="live">Live</Badge>
  </CardHeader>
  <CardContent>
    {/* Content here */}
  </CardContent>
</Card>`}
            </pre>
          </div>
        </div>
      </TabsContent>

      {/* Form Inputs */}
      <TabsContent value="forms" className="space-y-6">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Inputs</h3>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" type="password" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dropdown">Dropdown</Label>
              <Select>
                <SelectTrigger id="dropdown">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Radio Options</Label>
              <RadioGroup defaultValue="option1" className="mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option1" id="option1" />
                  <Label htmlFor="option1">Option 1</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option2" id="option2" />
                  <Label htmlFor="option2">Option 2</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option3" id="option3" />
                  <Label htmlFor="option3">Option 3</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Input States</h3>
            
            <div className="space-y-2">
              <Label htmlFor="default-input">Default</Label>
              <Input id="default-input" placeholder="Default state" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="disabled-input">Disabled</Label>
              <Input id="disabled-input" placeholder="Disabled input" disabled />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="dropdown-disabled">Disabled Dropdown</Label>
              <Select disabled>
                <SelectTrigger id="dropdown-disabled">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="error-input" className="text-destructive">Error</Label>
              <Input 
                id="error-input" 
                placeholder="Invalid input" 
                className="border-destructive focus-visible:ring-destructive" 
              />
              <p className="text-xs text-destructive">This field has an error.</p>
            </div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-md">
          <h3 className="text-sm font-medium mb-3">Usage Guidelines</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Always use labels with form inputs for accessibility</li>
            <li>Provide clear validation messages for form errors</li>
            <li>Group related form fields together</li>
            <li>Use appropriate input types (email, password, number, etc.)</li>
            <li>Consider using placeholder text to provide additional context</li>
            <li>Use dropdowns when users need to select from a predefined list of options</li>
            <li>Use radio buttons when users need to select exactly one option from a visible list</li>
          </ul>
          
          <div className="mt-4">
            <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
{`// Example of dropdown
import { Select, SelectContent, SelectItem, 
  SelectTrigger, SelectValue } from "@/components/ui/select";

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>

// Example of radio buttons
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">Option 2</Label>
  </div>
</RadioGroup>`}
            </pre>
          </div>
        </div>
      </TabsContent>

      {/* Feedback Components */}
      <TabsContent value="feedback" className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Alerts</h3>
          
          <Alert>
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription>
              This is an informational alert to provide guidance or context.
            </AlertDescription>
          </Alert>
          
          <Alert variant="error">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again later.
            </AlertDescription>
          </Alert>
          
          <div className="flex items-center p-4 text-sm rounded-md border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900 text-green-800 dark:text-green-200">
            <CircleCheck className="h-4 w-4 mr-2 flex-shrink-0" />
            <div>Operation completed successfully.</div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Status Badges</h3>
          
          <div className="flex flex-wrap gap-3">
            <Badge variant="inProgress">In progress</Badge>
            <Badge variant="live">Live</Badge>
            <Badge variant="completed">Completed</Badge>
            <Badge variant="cancelled">Cancelled</Badge>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-md">
          <h3 className="text-sm font-medium mb-3">Usage Guidelines</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Use alerts to provide important feedback or information</li>
            <li>Use badges to highlight status, categories, or counts</li>
            <li>Status badges (In progress, Live, Completed, Cancelled) should be used to indicate the state of an item</li>
            <li>Ensure feedback components are accessible and descriptive</li>
            <li>Use appropriate colors to convey meaning (success, error, warning)</li>
          </ul>
          
          <div className="mt-4">
            <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
{`import { Badge } from "@/components/ui/badge";

// Status badges
<Badge variant="inProgress">In progress</Badge>
<Badge variant="live">Live</Badge>
<Badge variant="completed">Completed</Badge>
<Badge variant="cancelled">Cancelled</Badge>`}
            </pre>
          </div>
        </div>
      </TabsContent>

      {/* Sidebar Components */}
      <TabsContent value="sidebar" className="space-y-6">
        <div className="space-y-6">
          <h3 className="text-lg font-medium">Sidebar Component</h3>
          
          <div className="border rounded-lg p-4 bg-muted/50">
            <h4 className="text-md font-medium mb-4">Mini Sidebar Preview</h4>
            <div className="relative w-full max-w-md h-64 border rounded-md overflow-hidden bg-background">
              <Sidebar 
                className="relative border-r-0 w-64 h-full"
                style={{ 
                  backgroundColor: '#091F42',
                  '--sidebar-background': '#091F42',
                  '--sidebar-foreground': 'white',
                  '--sidebar-accent': 'rgba(255, 255, 255, 0.1)',
                  '--sidebar-accent-foreground': 'white',
                  '--sidebar-border': 'rgba(255, 255, 255, 0.1)'
                } as React.CSSProperties}
              >
                <SidebarHeader className="border-b border-white/10 pb-4 mb-4">
                  <div className="px-2">
                    <h2 className="text-lg font-semibold text-white">FOUNT</h2>
                    <p className="text-sm text-white/70">Design System</p>
                  </div>
                </SidebarHeader>
                <SidebarContent>
                  <SidebarGroup>
                    <SidebarGroupLabel className="text-white/70 text-xs uppercase tracking-wider">
                      Navigation
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                      <SidebarMenu>
                        {[
                          { title: "Home", icon: Home },
                          { title: "Inbox", icon: Inbox },
                          { title: "Calendar", icon: Calendar },
                          { title: "Search", icon: Search },
                          { title: "Settings", icon: Settings },
                        ].map((item) => (
                          <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton 
                              className="text-white/90 hover:bg-white/10 hover:text-white data-[active=true]:bg-white/15 data-[active=true]:text-white"
                            >
                              <item.icon className="w-4 h-4" />
                              <span>{item.title}</span>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </SidebarGroup>
                </SidebarContent>
              </Sidebar>
            </div>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-md">
          <h3 className="text-sm font-medium mb-3">Usage Guidelines</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Use the sidebar for primary navigation in your application</li>
            <li>The sidebar is collapsible and responsive by default</li>
            <li>Use <code className="text-xs">SidebarProvider</code> at the root of your app layout</li>
            <li>Include a <code className="text-xs">SidebarTrigger</code> to allow users to toggle the sidebar</li>
            <li>Group related navigation items using <code className="text-xs">SidebarGroup</code></li>
            <li>Use icons with menu items for better visual hierarchy</li>
            <li>The sidebar supports custom styling through CSS variables</li>
          </ul>
          
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Implementation Example</h4>
            <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
{`// App Layout (App.tsx)
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

<SidebarProvider>
  <div className="min-h-screen flex w-full">
    <AppSidebar />
    <main className="flex-1">
      <div className="sticky top-0 z-10 bg-background border-b p-4">
        <SidebarTrigger className="mb-0" />
      </div>
      <div className="p-6">
        {/* Your content here */}
      </div>
    </main>
  </div>
</SidebarProvider>

// Sidebar Component (AppSidebar.tsx)
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  return (
    <Sidebar 
      style={{ 
        backgroundColor: '#091F42',
        '--sidebar-background': '#091F42',
        '--sidebar-foreground': 'white',
      } as React.CSSProperties}
    >
      <SidebarHeader>
        <h2 className="text-lg font-semibold text-white">App Name</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}`}
            </pre>
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Custom Styling</h4>
            <p className="text-xs text-muted-foreground mb-2">
              The sidebar supports custom styling through CSS variables:
            </p>
            <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
{`// Custom sidebar styling
<Sidebar 
  style={{ 
    backgroundColor: '#091F42',
    '--sidebar-background': '#091F42',
    '--sidebar-foreground': 'white',
    '--sidebar-accent': 'rgba(255, 255, 255, 0.1)',
    '--sidebar-accent-foreground': 'white',
    '--sidebar-border': 'rgba(255, 255, 255, 0.1)'
  } as React.CSSProperties}
>
  {/* Sidebar content */}
</Sidebar>`}
            </pre>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
