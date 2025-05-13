
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import StyleGuidePage from "@/components/StyleGuide/StyleGuidePage";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="container py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Simple Card Example</h1>
      
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle>All Hands Survey</CardTitle>
          <CardDescription>
            Created 10 Sep 2024
            <div className="mt-1">by andrei.airimiaoie@getfount.com</div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-end">
            <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded text-sm font-medium">
              IN PROGRESS
            </span>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-12">
        <Button 
          variant="secondary" 
          onClick={() => window.location.href = '/style-guide'}
        >
          View Style Guide
        </Button>
      </div>
    </div>
  );
}
