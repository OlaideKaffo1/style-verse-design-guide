import { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorPalette from "./ColorPalette";
import Typography from "./Typography";
import ComponentShowcase from "./ComponentShowcase";
import UsageGuidelines from "./UsageGuidelines";
import ModalFormExample from "./ModalFormExample";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Document, Paragraph, Packer, TextRun, HeadingLevel } from 'docx';
import { saveAs } from 'file-saver';
import { markdownContent } from '@/utils/cloneRepositoryContent';

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
    const blob = new Blob([markdownContent], { type: 'text/markdown' });
    
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

  // Function to handle the download of the CloneRepository.docx file
  const handleDownloadWordInstructions = () => {
    // Create a new document
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: "How to Clone This Repository",
            heading: HeadingLevel.HEADING_1,
          }),
          new Paragraph({
            text: "This guide provides step-by-step instructions for cloning this repository to your local machine.",
          }),
          new Paragraph({
            text: "Prerequisites",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: "Before you begin, make sure you have:",
          }),
          new Paragraph({
            children: [
              new TextRun("• Git installed on your computer. If not, download and install Git"),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun("• A terminal or command prompt application"),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun("• Node.js and npm installed (for running the project)"),
            ],
          }),
          new Paragraph({
            text: "Cloning Steps",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: "1. Open your terminal or command prompt",
          }),
          new Paragraph({
            text: "2. Navigate to the directory where you want to clone the repository",
          }),
          new Paragraph({
            text: "cd path/to/desired/directory",
          }),
          new Paragraph({
            text: "3. Clone the repository",
          }),
          new Paragraph({
            text: "git clone https://github.com/yourusername/your-repo-name.git",
          }),
          new Paragraph({
            text: "Replace yourusername/your-repo-name with your actual GitHub username and repository name.",
          }),
          new Paragraph({
            text: "4. Navigate into the cloned repository",
          }),
          new Paragraph({
            text: "cd your-repo-name",
          }),
          new Paragraph({
            text: "5. Install dependencies",
          }),
          new Paragraph({
            text: "npm install",
          }),
          new Paragraph({
            text: "6. Start the development server",
          }),
          new Paragraph({
            text: "npm run dev",
          }),
          new Paragraph({
            text: "7. View the project",
          }),
          new Paragraph({
            text: "Open your browser and navigate to http://localhost:5173 (or the port shown in your terminal)",
          }),
          new Paragraph({
            text: "Troubleshooting",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            text: "If you encounter any issues:",
          }),
          new Paragraph({
            children: [
              new TextRun("• Make sure you have the correct repository URL"),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun("• Ensure Git is properly installed and configured"),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun("• Check that you have the necessary permissions to access the repository"),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun("• Verify your internet connection is stable"),
            ],
          }),
          new Paragraph({
            text: "Additional Resources",
            heading: HeadingLevel.HEADING_2,
          }),
          new Paragraph({
            children: [
              new TextRun("• Git documentation: https://git-scm.com/doc"),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun("• GitHub Help: https://help.github.com/en"),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun("• FOUNT Style Guide Documentation: https://your-documentation-url.com"),
            ],
          }),
        ],
      }]
    });

    // Generate the Word document as a blob
    Packer.toBlob(doc).then(blob => {
      // Save the blob as a file using FileSaver.js
      saveAs(blob, "CloneRepository.docx");
    });
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
        <div className="flex gap-3 self-start flex-wrap">
          <Button 
            onClick={handleDownloadCloneInstructions} 
            className="flex items-center gap-2"
          >
            <Download size={16} />
            Download as Markdown
          </Button>
          <Button 
            onClick={handleDownloadWordInstructions} 
            className="flex items-center gap-2"
            variant="secondary"
          >
            <FileText size={16} />
            Download as Word
          </Button>
        </div>
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
