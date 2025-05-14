
import { cn } from "@/lib/utils";

const textStyles = [
  {
    name: "Display",
    className: "text-5xl md:text-6xl font-bold tracking-tight",
    element: "h1",
    sample: "Display Heading",
    usage: "Hero sections, main page titles"
  },
  {
    name: "Heading 1",
    className: "text-4xl font-bold tracking-tight",
    element: "h1",
    sample: "Heading One",
    usage: "Page titles, major section headers"
  },
  {
    name: "Heading 2",
    className: "text-3xl font-bold",
    element: "h2",
    sample: "Heading Two",
    usage: "Section headers, important content"
  },
  {
    name: "Heading 3",
    className: "text-2xl font-semibold",
    element: "h3",
    sample: "Heading Three",
    usage: "Sub-section headers, card titles"
  },
  {
    name: "Heading 4",
    className: "text-xl font-semibold",
    element: "h4",
    sample: "Heading Four",
    usage: "Minor section headers"
  },
  {
    name: "Large Text",
    className: "text-lg",
    element: "p",
    sample: "Large text is used for important paragraphs that need emphasis.",
    usage: "Featured content, introduction paragraphs"
  },
  {
    name: "Body",
    className: "text-base",
    element: "p",
    sample: "This is regular body text used for the main content of the page. It should be easy to read and have good contrast.",
    usage: "Main content text"
  },
  {
    name: "Small",
    className: "text-sm",
    element: "p",
    sample: "Small text is used for less important information that doesn't need to stand out.",
    usage: "Secondary information, metadata"
  },
  {
    name: "Muted",
    className: "text-sm text-muted-foreground",
    element: "p",
    sample: "Muted text is used for helper text and less important information.",
    usage: "Helper text, captions, secondary information"
  },
  {
    name: "Link",
    className: "text-primary hover:underline cursor-pointer",
    element: "a",
    sample: "Click here to learn more",
    usage: "Hyperlinks, clickable text"
  },
  {
    name: "Code",
    className: "text-sm bg-muted p-2 rounded",
    element: "code",
    sample: 'const greeting = "Hello, world!";',
    usage: "Code snippets, technical content"
  }
];

const fontWeights = [
  { name: "Light", weight: 300, className: "font-light" },
  { name: "Regular", weight: 400, className: "font-normal" },
  { name: "Medium", weight: 500, className: "font-medium" },
  { name: "Semibold", weight: 600, className: "font-semibold" },
  { name: "Bold", weight: 700, className: "font-bold" }
];

export default function Typography() {
  return (
    <div className="space-y-10">
      {/* Text Styles */}
      <div>
        <h3 className="text-lg font-medium mb-4">Text Styles</h3>
        <div className="border rounded-lg overflow-hidden divide-y">
          {textStyles.map((style, index) => {
            const Element = style.element as keyof JSX.IntrinsicElements;
            
            return (
              <div key={index} className="p-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="md:w-2/3">
                    <Element className={style.className}>
                      {style.sample}
                    </Element>
                  </div>
                  <div className="md:w-1/3">
                    <p className="font-medium">{style.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{style.usage}</p>
                    <code className="text-xs bg-muted p-1 rounded mt-1 block">{style.className}</code>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Font Weights */}
      <div>
        <h3 className="text-lg font-medium mb-4">Font Weights</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {fontWeights.map((weight) => (
            <div key={weight.name} className="border rounded-lg p-4">
              <p className={cn("text-2xl", weight.className)}>Aa Bb Cc</p>
              <div className="mt-3">
                <p className="font-medium">{weight.name}</p>
                <p className="text-xs text-muted-foreground">{weight.weight}</p>
                <code className="text-xs bg-muted p-1 rounded mt-1 block">{weight.className}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Font Families */}
      <div>
        <h3 className="text-lg font-medium mb-4">Font Families</h3>
        <div className="grid grid-cols-1 gap-4">
          <div className="border rounded-lg p-6">
            <h4 className="font-sans text-2xl mb-2">DM Sans (Sans-serif)</h4>
            <p className="font-sans mb-4">
              ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
              abcdefghijklmnopqrstuvwxyz<br />
              0123456789
            </p>
            <code className="text-xs bg-muted p-1 rounded">font-sans</code>
            <p className="text-sm text-muted-foreground mt-3">Used for all general UI text, headings, and content.</p>
          </div>
        </div>
      </div>

      {/* Typography Guidelines */}
      <div className="p-4 bg-muted rounded-md">
        <h3 className="text-sm font-medium mb-2">Typography Guidelines</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Maintain a clear visual hierarchy with appropriate heading levels</li>
          <li>Use proper semantic HTML elements (h1, h2, p, etc.) for accessibility</li>
          <li>Limit line length to 80 characters or less for optimal readability</li>
          <li>Ensure sufficient color contrast between text and background</li>
          <li>Use consistent font sizes and weights throughout the application</li>
        </ul>
      </div>
    </div>
  );
}
