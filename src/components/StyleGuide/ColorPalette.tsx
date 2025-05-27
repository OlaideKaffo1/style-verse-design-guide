
import { cn } from "@/lib/utils";

type ColorVariant = {
  name: string;
  variable: string;
  className: string;
  hslCode: string;
};

type ColorShade = {
  shade: string;
  variable: string;
  className: string;
  hslCode: string;
};

// Main colors and their variants
const colorVariants: ColorVariant[] = [
  { name: "Primary", variable: "--primary", className: "bg-primary", hslCode: "hsl(240, 100%, 75%)" },
  { name: "Secondary", variable: "--secondary", className: "bg-secondary", hslCode: "hsl(240, 5%, 34%)" },
  { name: "Accent", variable: "--accent", className: "bg-accent", hslCode: "hsl(260, 100%, 98%)" },
  { name: "Muted", variable: "--muted", className: "bg-muted", hslCode: "hsl(210, 40%, 96.1%)" },
  { name: "Destructive", variable: "--destructive", className: "bg-destructive", hslCode: "hsl(0, 84%, 60%)" },
  { name: "Success", variable: "--success", className: "bg-success", hslCode: "hsl(142, 76%, 36%)" },
  { name: "Warning", variable: "--warning", className: "bg-warning", hslCode: "hsl(38, 92%, 50%)" },
  { name: "Info", variable: "--info", className: "bg-info", hslCode: "hsl(200, 98%, 39%)" },
];

// Shades for primary and secondary
const primaryShades: ColorShade[] = [
  { shade: "50", variable: "--primary-50", className: "bg-primary-50", hslCode: "hsl(240, 100%, 97%)" },
  { shade: "100", variable: "--primary-100", className: "bg-primary-100", hslCode: "hsl(240, 100%, 94%)" },
  { shade: "200", variable: "--primary-200", className: "bg-primary-200", hslCode: "hsl(240, 100%, 90%)" },
  { shade: "300", variable: "--primary-300", className: "bg-primary-300", hslCode: "hsl(240, 100%, 85%)" },
  { shade: "400", variable: "--primary-400", className: "bg-primary-400", hslCode: "hsl(240, 100%, 80%)" },
  { shade: "500", variable: "--primary-500", className: "bg-primary-500", hslCode: "hsl(240, 100%, 75%)" },
  { shade: "600", variable: "--primary-600", className: "bg-primary-600", hslCode: "hsl(240, 100%, 70%)" },
  { shade: "700", variable: "--primary-700", className: "bg-primary-700", hslCode: "hsl(240, 100%, 65%)" },
  { shade: "800", variable: "--primary-800", className: "bg-primary-800", hslCode: "hsl(240, 100%, 60%)" },
  { shade: "900", variable: "--primary-900", className: "bg-primary-900", hslCode: "hsl(240, 100%, 55%)" },
];

const secondaryShades: ColorShade[] = [
  { shade: "50", variable: "--secondary-50", className: "bg-secondary-50", hslCode: "hsl(240, 5%, 96%)" },
  { shade: "100", variable: "--secondary-100", className: "bg-secondary-100", hslCode: "hsl(240, 5%, 90%)" },
  { shade: "200", variable: "--secondary-200", className: "bg-secondary-200", hslCode: "hsl(240, 4%, 84%)" },
  { shade: "300", variable: "--secondary-300", className: "bg-secondary-300", hslCode: "hsl(240, 5%, 65%)" },
  { shade: "400", variable: "--secondary-400", className: "bg-secondary-400", hslCode: "hsl(240, 5%, 52%)" },
  { shade: "500", variable: "--secondary-500", className: "bg-secondary-500", hslCode: "hsl(240, 5%, 34%)" },
  { shade: "600", variable: "--secondary-600", className: "bg-secondary-600", hslCode: "hsl(240, 5%, 26%)" },
  { shade: "700", variable: "--secondary-700", className: "bg-secondary-700", hslCode: "hsl(240, 4%, 21%)" },
  { shade: "800", variable: "--secondary-800", className: "bg-secondary-800", hslCode: "hsl(240, 6%, 10%)" },
  { shade: "900", variable: "--secondary-900", className: "bg-secondary-900", hslCode: "hsl(240, 10%, 4%)" },
];

// Semantic colors
const semanticColors: ColorVariant[] = [
  { name: "Background", variable: "--background", className: "bg-background", hslCode: "hsl(210, 40%, 98%)" },
  { name: "Foreground", variable: "--foreground", className: "bg-foreground text-background", hslCode: "hsl(222, 47%, 11%)" },
  { name: "Card", variable: "--card", className: "bg-card", hslCode: "hsl(0, 0%, 100%)" },
  { name: "Card Foreground", variable: "--card-foreground", className: "bg-card-foreground text-background", hslCode: "hsl(222, 47%, 11%)" },
  { name: "Popover", variable: "--popover", className: "bg-popover", hslCode: "hsl(0, 0%, 100%)" },
  { name: "Popover Foreground", variable: "--popover-foreground", className: "bg-popover-foreground text-background", hslCode: "hsl(222, 47%, 11%)" },
  { name: "Border", variable: "--border", className: "bg-border", hslCode: "hsl(214, 32%, 91%)" },
  { name: "Input", variable: "--input", className: "bg-input", hslCode: "hsl(214, 32%, 91%)" },
];

export default function ColorPalette() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-lg font-medium mb-4">Main Colors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {colorVariants.map((color) => (
            <div key={color.name} className="border rounded-lg overflow-hidden">
              <div className={cn("h-24", color.className)} />
              <div className="p-3">
                <p className="font-medium">{color.name}</p>
                <code className="text-xs text-muted-foreground">{color.variable}</code>
                <div className="flex flex-col space-y-1 mt-2">
                  <p className="text-xs font-mono">{color.className}</p>
                  <p className="text-xs font-mono text-secondary-600">{color.hslCode}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Primary Shades</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {primaryShades.map((shade) => (
            <div key={shade.shade} className="border rounded-lg overflow-hidden">
              <div className={cn("h-16", shade.className)} />
              <div className="p-3">
                <p className="font-medium">{shade.shade}</p>
                <code className="text-xs text-muted-foreground">{shade.variable}</code>
                <div className="flex flex-col space-y-1 mt-2">
                  <p className="text-xs font-mono">{shade.className}</p>
                  <p className="text-xs font-mono text-secondary-600">{shade.hslCode}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Secondary Shades</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {secondaryShades.map((shade) => (
            <div key={shade.shade} className="border rounded-lg overflow-hidden">
              <div className={cn("h-16", shade.className)} />
              <div className="p-3">
                <p className="font-medium">{shade.shade}</p>
                <code className="text-xs text-muted-foreground">{shade.variable}</code>
                <div className="flex flex-col space-y-1 mt-2">
                  <p className="text-xs font-mono">{shade.className}</p>
                  <p className="text-xs font-mono text-secondary-600">{shade.hslCode}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Semantic Colors</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {semanticColors.map((color) => (
            <div key={color.name} className="border rounded-lg overflow-hidden">
              <div className={cn("h-16 flex items-center justify-center", color.className)}>
                <span className={color.name.includes("Foreground") ? "text-background" : ""}>
                  {color.name}
                </span>
              </div>
              <div className="p-3">
                <p className="font-medium">{color.name}</p>
                <code className="text-xs text-muted-foreground">{color.variable}</code>
                <div className="flex flex-col space-y-1 mt-2">
                  <p className="text-xs font-mono">{color.className}</p>
                  <p className="text-xs font-mono text-secondary-600">{color.hslCode}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-muted rounded-md">
        <h3 className="text-sm font-medium mb-2">Usage Guidelines</h3>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Use <code className="text-xs">primary</code> for main actions, links, and key UI elements</li>
          <li>Use <code className="text-xs">secondary</code> for supporting elements and less emphasized actions</li>
          <li>Use semantic colors for their intended purposes to maintain consistency</li>
          <li>Ensure sufficient contrast between text and background colors</li>
          <li>Use color shades to create visual hierarchy and depth</li>
        </ul>
      </div>
    </div>
  );
}
