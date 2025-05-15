
import { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorPalette from "./ColorPalette";
import Typography from "./Typography";
import ComponentShowcase from "./ComponentShowcase";
import UsageGuidelines from "./UsageGuidelines";
import ModalFormExample from "./ModalFormExample";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function StyleGuidePage() {
  // Scroll to anchor links
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  // Function to handle the download of the CloneRepository.md file
  const handleDownloadCloneInstructions = () => {
    // Create a blob from the markdown content
    const fileContent = `# How to Clone This Repository

This guide provides step-by-step instructions for cloning this repository to your local machine.

## Prerequisites

Before you begin, make sure you have:

- Git installed on your computer. If not, [download and install Git](https://git-scm.com/downloads)
- A terminal or command prompt application
- Node.js and npm installed (for running the project). You can [install Node.js using nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

## Cloning Steps

1. **Open your terminal or command prompt**

2. **Navigate to the directory where you want to clone the repository**
   \`\`\`sh
   cd path/to/desired/directory
   \`\`\`

3. **Clone the repository**
   \`\`\`sh
   git clone https://github.com/yourusername/your-repo-name.git
   \`\`\`
   Replace \`yourusername/your-repo-name\` with your actual GitHub username and repository name.

4. **Navigate into the cloned repository**
   \`\`\`sh
   cd your-repo-name
   \`\`\`

5. **Install dependencies**
   \`\`\`sh
   npm install
   \`\`\`

6. **Start the development server**
   \`\`\`sh
   npm run dev
   \`\`\`

7. **View the project**
   Open your browser and navigate to \`http://localhost:5173\` (or the port shown in your terminal)

## Troubleshooting

If you encounter any issues:

- Make sure you have the correct repository URL
- Ensure Git is properly installed and configured
- Check that you have the necessary permissions to access the repository
- Verify your internet connection is stable

## Additional Resources

- [Git documentation](https://git-scm.com/doc)
- [GitHub Help](https://help.github.com/en)
- [FOUNT Style Guide Documentation](https://your-documentation-url.com)`;

    const blob = new Blob([fileContent], { type: 'text/markdown' });
    
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CloneRepository.md';
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container py-10 max-w-7xl mx-auto">
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold gradient-heading mb-2">FOUNT Style Guide</h1>
          <p className="text-muted-foreground text-lg">
            A comprehensive guide to our design tokens, components, and usage guidelines
          </p>
        </div>
        <Button 
          onClick={handleDownloadCloneInstructions} 
          className="flex items-center gap-2 self-start"
        >
          <Download size={16} />
          Download Clone Instructions
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
        {/* Sidebar navigation */}
        <div className="hidden lg:block">
          <div className="sticky top-10">
            <Card>
              <CardContent className="p-4">
                <nav className="space-y-1">
                  <a href="#introduction" className="block py-2 px-3 hover:bg-muted rounded-md">Introduction</a>
                  <a href="#colors" className="block py-2 px-3 hover:bg-muted rounded-md">Colors</a>
                  <a href="#typography" className="block py-2 px-3 hover:bg-muted rounded-md">Typography</a>
                  <a href="#components" className="block py-2 px-3 hover:bg-muted rounded-md">Components</a>
                  <a href="#modals" className="block py-2 px-3 hover:bg-muted rounded-md">Modals</a>
                  <a href="#usage" className="block py-2 px-3 hover:bg-muted rounded-md">Usage Guidelines</a>
                </nav>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <section id="introduction">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Introduction</CardTitle>
                <CardDescription>
                  An overview of our design system and its principles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-foreground">
                  This design system provides a single source of truth for our team's design decisions, 
                  helping us build consistent, accessible, and visually cohesive applications with Lovable.
                  Use these components, colors, typography styles, and guidelines to create user interfaces 
                  that align with our brand and design principles.
                </p>
                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <h3 className="font-medium mb-2">Design Principles</h3>
                  <ul className="space-y-2 list-disc pl-4">
                    <li>Consistency across all touchpoints</li>
                    <li>Accessibility for all users</li>
                    <li>Responsive design for all devices</li>
                    <li>Clear visual hierarchy and user flows</li>
                    <li>Scalability as applications grow</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Colors */}
          <section id="colors" className="scroll-mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Colors</CardTitle>
                <CardDescription>
                  Color palette and usage guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ColorPalette />
              </CardContent>
            </Card>
          </section>

          {/* Typography */}
          <section id="typography" className="scroll-mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Typography</CardTitle>
                <CardDescription>
                  Font families, sizes, and text styles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Typography />
              </CardContent>
            </Card>
          </section>

          {/* Components */}
          <section id="components" className="scroll-mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Components</CardTitle>
                <CardDescription>
                  UI components and variations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ComponentShowcase />
              </CardContent>
            </Card>
          </section>

          {/* Modals */}
          <section id="modals" className="scroll-mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Modals & Dialogs</CardTitle>
                <CardDescription>
                  Dialog and modal components with form integration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Form Modal</h3>
                    <ModalFormExample />
                    
                    <div className="mt-6 bg-muted p-4 rounded-md">
                      <h3 className="text-sm font-medium mb-3">Usage Guidelines</h3>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Use modals for focused tasks that require immediate attention</li>
                        <li>Keep modal forms simple and focused on a single task</li>
                        <li>Provide clear submit and cancel actions</li>
                        <li>Validate form inputs in real-time when possible</li>
                        <li>Show descriptive error messages for invalid inputs</li>
                      </ul>
                      
                      <div className="mt-4">
                        <pre className="text-xs bg-background p-3 rounded overflow-x-auto">
{`import { Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Modal Title</DialogTitle>
    </DialogHeader>
    {/* Form content here */}
  </DialogContent>
</Dialog>`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Usage Guidelines */}
          <section id="usage" className="scroll-mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Usage Guidelines</CardTitle>
                <CardDescription>
                  Best practices and implementation guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <UsageGuidelines />
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
