
import { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ColorPalette from "./ColorPalette";
import Typography from "./Typography";
import ComponentShowcase from "./ComponentShowcase";
import UsageGuidelines from "./UsageGuidelines";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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

  return (
    <div className="container py-10 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold gradient-heading mb-2">Lovable Design System</h1>
        <p className="text-muted-foreground text-lg">
          A comprehensive guide to our design tokens, components, and usage guidelines
        </p>
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
