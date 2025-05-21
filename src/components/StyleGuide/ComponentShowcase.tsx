
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheck, AlertCircle, InfoIcon } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ComponentShowcase() {
  return (
    <Tabs defaultValue="buttons">
      <TabsList className="mb-4">
        <TabsTrigger value="buttons">Buttons</TabsTrigger>
        <TabsTrigger value="cards">Cards</TabsTrigger>
        <TabsTrigger value="forms">Form Inputs</TabsTrigger>
        <TabsTrigger value="feedback">Feedback</TabsTrigger>
        <TabsTrigger value="colors">Color Codes</TabsTrigger>
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
          <div className="mt-2 text-sm">
            <p><span className="font-medium">Default:</span> <code className="bg-muted px-1 py-0.5 rounded">#9b87f5</code> (Primary)</p>
            <p><span className="font-medium">Secondary:</span> Border: <code className="bg-muted px-1 py-0.5 rounded">#9b87f5</code>, BG: <code className="bg-muted px-1 py-0.5 rounded">#FFFFFF</code></p>
            <p><span className="font-medium">Delete:</span> Border: <code className="bg-muted px-1 py-0.5 rounded">#FF8989</code>, BG: <code className="bg-muted px-1 py-0.5 rounded">#FEECE8</code></p>
            <p><span className="font-medium">Cancel:</span> <code className="bg-muted px-1 py-0.5 rounded">#F5F7FA</code> (Muted)</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Buttons with Icon</h3>
          <div className="flex flex-wrap gap-4">
            <Button variant="defaultWithIcon">Add Item</Button>
            <Button variant="secondaryWithIcon">Add Item</Button>
          </div>
          <div className="mt-2 text-sm">
            <p><span className="font-medium">Default with Icon:</span> <code className="bg-muted px-1 py-0.5 rounded">#9b87f5</code> (Primary)</p>
            <p><span className="font-medium">Secondary with Icon:</span> Border: <code className="bg-muted px-1 py-0.5 rounded">#9b87f5</code>, BG: <code className="bg-muted px-1 py-0.5 rounded">#FFFFFF</code></p>
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
            <li>Use <code className="text-xs">defaultWithIcon</code> or <code className="text-xs">secondaryWithIcon</code> for actions that add or create</li>
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
          <div className="mt-2 text-sm">
            <p><span className="font-medium">Card Background:</span> <code className="bg-muted px-1 py-0.5 rounded">#FFFFFF</code></p>
            <p><span className="font-medium">Card Border:</span> <code className="bg-muted px-1 py-0.5 rounded">#E8EDF3</code></p>
            <p><span className="font-medium">Card Title:</span> <code className="bg-muted px-1 py-0.5 rounded">#0F1629</code></p>
            <p><span className="font-medium">Card Description:</span> <code className="bg-muted px-1 py-0.5 rounded">#707F96</code></p>
          </div>
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
              <p className="text-xs text-muted-foreground">Border: <code className="bg-muted px-1 py-0.5 rounded">#E8EDF3</code></p>
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
              <p className="text-xs text-muted-foreground">Border: <code className="bg-muted px-1 py-0.5 rounded">#E8EDF3</code></p>
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
              <p className="text-xs text-muted-foreground">Selected: <code className="bg-muted px-1 py-0.5 rounded">#9b87f5</code></p>
            </div>
            
            <div className="flex items-center space-x-2 pt-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
              <p className="text-xs text-muted-foreground ml-2">Checked: <code className="bg-muted px-1 py-0.5 rounded">#9b87f5</code></p>
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
              <p className="text-xs text-muted-foreground">Background: <code className="bg-muted px-1 py-0.5 rounded">#F5F7FA</code>, Opacity: 50%</p>
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
              <p className="text-xs text-muted-foreground">Border: <code className="bg-muted px-1 py-0.5 rounded">#F43F5E</code> (Destructive)</p>
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
          <p className="text-xs text-muted-foreground mt-1">Border: Default, BG: <code className="bg-muted px-1 py-0.5 rounded">#F5F7FA</code></p>
          
          <Alert variant="error">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Something went wrong. Please try again later.
            </AlertDescription>
          </Alert>
          <p className="text-xs text-muted-foreground mt-1">BG: <code className="bg-muted px-1 py-0.5 rounded">#FEECE8</code>, Text: <code className="bg-muted px-1 py-0.5 rounded">#F43F5E</code></p>
          
          <div className="flex items-center p-4 text-sm rounded-md border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900 text-green-800 dark:text-green-200">
            <CircleCheck className="h-4 w-4 mr-2 flex-shrink-0" />
            <div>Operation completed successfully.</div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">BG: <code className="bg-muted px-1 py-0.5 rounded">#F2FCE2</code>, Border: <code className="bg-muted px-1 py-0.5 rounded">#22C55E</code>, Text: <code className="bg-muted px-1 py-0.5 rounded">#22C55E</code></p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Status Badges</h3>
          
          <div className="flex flex-wrap gap-3">
            <Badge variant="inProgress">In progress</Badge>
            <Badge variant="live">Live</Badge>
            <Badge variant="completed">Completed</Badge>
            <Badge variant="cancelled">Cancelled</Badge>
          </div>
          <div className="mt-2 text-sm space-y-1">
            <p><span className="font-medium">In Progress:</span> BG: <code className="bg-muted px-1 py-0.5 rounded">#FDF6EC</code>, Text: <code className="bg-muted px-1 py-0.5 rounded">#F97316</code></p>
            <p><span className="font-medium">Live:</span> BG: <code className="bg-muted px-1 py-0.5 rounded">#F2FCE2</code>, Text: <code className="bg-muted px-1 py-0.5 rounded">#22C55E</code></p>
            <p><span className="font-medium">Completed:</span> BG: <code className="bg-muted px-1 py-0.5 rounded">#F2FCE2</code>, Text: <code className="bg-muted px-1 py-0.5 rounded">#22C55E</code></p>
            <p><span className="font-medium">Cancelled:</span> BG: <code className="bg-muted px-1 py-0.5 rounded">#FEE2E2</code>, Text: <code className="bg-muted px-1 py-0.5 rounded">#F43F5E</code></p>
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

      {/* Color Codes Tab */}
      <TabsContent value="colors" className="space-y-6">
        <div className="space-y-6">
          <h3 className="text-lg font-medium">UI Element Color Codes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Primary Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="h-10 w-full bg-primary rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Primary</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#9b87f5</code>
                </div>
                <div>
                  <div className="h-10 w-full bg-secondary rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Secondary</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#545659</code>
                </div>
                <div>
                  <div className="h-10 w-full bg-accent rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Accent</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#F4F3FF</code>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Feedback Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="h-10 w-full bg-destructive rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Destructive</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#F43F5E</code>
                </div>
                <div>
                  <div className="h-10 w-full bg-success rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Success</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#22C55E</code>
                </div>
                <div>
                  <div className="h-10 w-full bg-warning rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Warning</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#F97316</code>
                </div>
                <div>
                  <div className="h-10 w-full bg-info rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Info</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#0284C7</code>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">UI Component Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="h-10 w-full bg-background rounded-md border mb-1"></div>
                  <p className="text-sm font-medium">Background</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#FAFCFE</code>
                </div>
                <div>
                  <div className="h-10 w-full bg-foreground rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Foreground</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#0F1629</code>
                </div>
                <div>
                  <div className="h-10 w-full bg-muted rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Muted</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#F5F7FA</code>
                </div>
                <div>
                  <div className="h-10 w-full bg-muted-foreground rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Muted Foreground</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#707F96</code>
                </div>
                <div>
                  <div className="h-10 w-full border rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Border</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#E8EDF3</code>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Form Element Colors</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="h-10 w-full bg-input rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Input</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#E8EDF3</code>
                </div>
                <div>
                  <div className="h-10 w-full bg-ring rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Ring</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#9b87f5</code>
                </div>
                <div>
                  <div className="h-10 w-full bg-card rounded-md border mb-1"></div>
                  <p className="text-sm font-medium">Card</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#FFFFFF</code>
                </div>
                <div>
                  <div className="h-10 w-full bg-card-foreground rounded-md mb-1"></div>
                  <p className="text-sm font-medium">Card Foreground</p>
                  <code className="text-xs bg-muted px-1 py-0.5 rounded">#0F1629</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
