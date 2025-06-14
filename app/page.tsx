import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  const currentDate = new Date().toLocaleString()
  
  return (
    <div className="min-h-svh">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <div className="flex min-h-svh items-center justify-center p-4">
        <div className="flex flex-col items-center gap-6 max-w-2xl w-full">
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold">GCE Results Website</h1>
            <p className="text-muted-foreground text-lg">Auto-Deployment Test Page</p>
            <div className="flex gap-2 justify-center flex-wrap">
              <Badge variant="secondary" className="text-sm">
                Deployment Test • {currentDate}
              </Badge>
              <Badge variant="outline" className="text-orange-600 border-orange-600">
                🧪 STAGING ENVIRONMENT
              </Badge>
            </div>
          </div>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🚀 Deployment Status
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Active
                </Badge>
              </CardTitle>
              <CardDescription>
                Testing auto-deployment from GitHub to Netlify • Currently viewing STAGING
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">🌐 Production Environment</h3>
                  <p className="text-sm text-muted-foreground">
                    Deploys from <code className="bg-muted px-1 py-0.5 rounded">main</code> branch
                  </p>
                  <p className="text-sm text-muted-foreground">
                    URL: yoursite.netlify.app
                  </p>
                </div>
                <div className="space-y-2 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h3 className="font-semibold text-orange-700 dark:text-orange-300">🧪 Staging Environment (Current)</h3>
                  <p className="text-sm text-orange-600 dark:text-orange-400">
                    Deploys from <code className="bg-orange-100 dark:bg-orange-900 px-1 py-0.5 rounded">develop</code> branch
                  </p>
                  <p className="text-sm text-orange-600 dark:text-orange-400">
                    URL: develop--yoursite.netlify.app
                  </p>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-2">✅ Features Tested:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Next.js 14 with App Router</li>
                  <li>• Tailwind CSS styling</li>
                  <li>• Dark/Light theme switching</li>
                  <li>• shadcn/ui components</li>
                  <li>• Auto-deployment from GitHub</li>
                  <li>• Staging environment indicators</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="min-w-32">
              🎉 Staging Working!
            </Button>
            <Button variant="outline" size="lg" className="min-w-32">
              View Source Code
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>Built with Next.js • Styled with Tailwind CSS • UI by shadcn/ui</p>
            <p className="mt-1">Auto-deployed via Netlify from GitHub</p>
          </div>
        </div>
      </div>
    </div>
  )
}
