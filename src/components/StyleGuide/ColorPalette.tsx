
import { cn } from "@/lib/utils";

type ColorVariant = {
  name: string;
  variable: string;
  className: string;
  hexCode: string;
};

type ColorShade = {
  shade: string;
  variable: string;
  className: string;
  hexCode: string;
};

// Main colors and their variants
const colorVariants: ColorVariant[] = [
  { name: "Primary", variable: "--primary", className: "bg-primary", hexCode: "#9b87f5" },
  { name: "Secondary", variable: "--secondary", className: "bg-secondary", hexCode: "#545659" },
  { name: "Accent", variable: "--accent", className: "bg-accent", hexCode: "#F4F3FF" },
  { name: "Muted", variable: "--muted", className: "bg-muted", hexCode: "#F5F7FA" },
  { name: "Destructive", variable: "--destructive", className: "bg-destructive", hexCode: "#F43F5E" },
  { name: "Success", variable: "--success", className: "bg-success", hexCode: "#22C55E" },
  { name: "Warning", variable: "--warning", className: "bg-warning", hexCode: "#F97316" },
  { name: "Info", variable: "--info", className: "bg-info", hexCode: "#0284C7" },
];

// Shades for primary and secondary
const primaryShades: ColorShade[] = [
  { shade: "50", variable: "--primary-50", className: "bg-primary-50", hexCode: "#F5F3FF" },
  { shade: "100", variable: "--primary-100", className: "bg-primary-100", hexCode: "#EDE9FE" },
  { shade: "200", variable: "--primary-200", className: "bg-primary-200", hexCode: "#DDD6FE" },
  { shade: "300", variable: "--primary-300", className: "bg-primary-300", hexCode: "#C4B5FD" },
  { shade: "400", variable: "--primary-400", className: "bg-primary-400", hexCode: "#A78BFC" },
  { shade: "500", variable: "--primary-500", className: "bg-primary-500", hexCode: "#9b87f5" },
  { shade: "600", variable: "--primary-600", className: "bg-primary-600", hexCode: "#8B78DD" },
  { shade: "700", variable: "--primary-700", className: "bg-primary-700", hexCode: "#7360C5" },
  { shade: "800", variable: "--primary-800", className: "bg-primary-800", hexCode: "#5B48AD" },
  { shade: "900", variable: "--primary-900", className: "bg-primary-900", hexCode: "#42348D" },
];

const secondaryShades: ColorShade[] = [
  { shade: "50", variable: "--secondary-50", className: "bg-secondary-50", hexCode: "#F9F9FA" },
  { shade: "100", variable: "--secondary-100", className: "bg-secondary-100", hexCode: "#F1F1F2" },
  { shade: "200", variable: "--secondary-200", className: "bg-secondary-200", hexCode: "#E3E4E5" },
  { shade: "300", variable: "--secondary-300", className: "bg-secondary-300", hexCode: "#A5A6A9" },
  { shade: "400", variable: "--secondary-400", className: "bg-secondary-400", hexCode: "#84868A" },
  { shade: "500", variable: "--secondary-500", className: "bg-secondary-500", hexCode: "#545659" },
  { shade: "600", variable: "--secondary-600", className: "bg-secondary-600", hexCode: "#3F4144" },
  { shade: "700", variable: "--secondary-700", className: "bg-secondary-700", hexCode: "#333538" },
  { shade: "800", variable: "--secondary-800", className: "bg-secondary-800", hexCode: "#1B1C1E" },
  { shade: "900", variable: "--secondary-900", className: "bg-secondary-900", hexCode: "#0B0B0C" },
];

// Semantic colors
const semanticColors: ColorVariant[] = [
  { name: "Background", variable: "--background", className: "bg-background", hexCode: "#FAFCFE" },
  { name: "Foreground", variable: "--foreground", className: "bg-foreground text-background", hexCode: "#0F1629" },
  { name: "Card", variable: "--card", className: "bg-card", hexCode: "#FFFFFF" },
  { name: "Card Foreground", variable: "--card-foreground", className: "bg-card-foreground text-background", hexCode: "#0F1629" },
  { name: "Popover", variable: "--popover", className: "bg-popover", hexCode: "#FFFFFF" },
  { name: "Popover Foreground", variable: "--popover-foreground", className: "bg-popover-foreground text-background", hexCode: "#0F1629" },
  { name: "Border", variable: "--border", className: "bg-border", hexCode: "#E8EDF3" },
  { name: "Input", variable: "--input", className: "bg-input", hexCode: "#E8EDF3" },
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
                  <p className="text-xs font-mono text-secondary-600">{color.hexCode}</p>
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
                  <p className="text-xs font-mono text-secondary-600">{shade.hexCode}</p>
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
                  <p className="text-xs font-mono text-secondary-600">{shade.hexCode}</p>
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
                  <p className="text-xs font-mono text-secondary-600">{color.hexCode}</p>
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
