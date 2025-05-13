
import React from 'react';
import { Link } from 'react-router-dom';
import { UILibraryUsage } from '@/components/UILibrary';
import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui';

export default function UILibraryPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">UI Component Library</h1>
        <Link to="/" className="text-primary hover:underline">
          Back to Style Guide
        </Link>
      </div>
      
      <section className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Quick Start Guide</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-4">Installation</h3>
            <div className="bg-slate-100 p-4 rounded-md overflow-x-auto mb-6">
              <pre>{UILibraryUsage.installation}</pre>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Example Usage</h3>
            <div className="bg-slate-100 p-4 rounded-md overflow-x-auto">
              <pre>{UILibraryUsage.example}</pre>
            </div>
            
            <div className="mt-6">
              <Button 
                onClick={() => window.open('/scripts/export-ui-library.js', '_blank')}
                className="mr-4"
              >
                Export Script
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('/src/components/UILibrary.tsx', '_blank')}
              >
                View UILibrary.tsx
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
