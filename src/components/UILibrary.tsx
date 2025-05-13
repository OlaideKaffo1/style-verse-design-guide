
import React from 'react';
import * as Components from './ui';

// This file serves as a single export point for the entire UI component library
// It can be copied to other projects to provide immediate access to all UI components

/**
 * UILibrary Component
 * 
 * This component doesn't render anything visible.
 * It's meant to be imported at the root of your application to make all UI components available.
 * 
 * Usage:
 * ```tsx
 * // In your main application file (e.g., main.tsx, App.tsx)
 * import { UILibrary } from './UILibrary';
 * 
 * function App() {
 *   return (
 *     <>
 *       <UILibrary />
 *       {/* Your app content */}
 *     </>
 *   );
 * }
 * ```
 * 
 * After importing UILibrary, you can use any component from the library:
 * ```tsx
 * import { Button, Card, Avatar } from '@/components/ui';
 * ```
 */
export const UILibrary: React.FC = () => {
  // This component doesn't render anything visible
  return null;
};

// Re-export all UI components for easy access
export * from './ui';

// Export a setup function to configure the UI library
export const setupUILibrary = () => {
  // Add any initialization logic here if needed in the future
  console.log('UI Library initialized');
};

// Usage instructions for easy reference
export const UILibraryUsage = {
  installation: `
  # Copy these files to your project:
  - src/components/ui/* (all component files)
  - src/lib/utils.ts
  - src/hooks/use-toast.ts
  - src/hooks/use-mobile.tsx
  
  # Add to your tailwind.config.js:
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
  },
  keyframes: {
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
  },
  `,
  
  example: `
  import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
  
  export default function MyComponent() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>My Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card content goes here</p>
          <Button>Click me</Button>
        </CardContent>
      </Card>
    );
  }
  `
};
