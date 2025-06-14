import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, AlertTriangle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Disclaimer",
  description: "Important disclaimer and terms of use for GCE Results search service."
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              asChild
              className="p-2"
            >
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">GCE Results</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <AlertTriangle className="h-8 w-8 text-amber-600" />
              <h1 className="text-4xl font-bold tracking-tight font-serif">
                Disclaimer
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Important information about the use of this service
            </p>
          </div>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Terms of Use & Disclaimer</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6 text-sm leading-relaxed">
              <section>
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  1. Service Purpose
                </h3>
                <p className="text-muted-foreground">
                  This website provides a search service for GCE (General Certificate of Education) examination results 
                  for informational purposes only. The service is designed to help students and parents access examination 
                  results in a convenient and user-friendly manner.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  2. Data Accuracy
                </h3>
                <p className="text-muted-foreground">
                  While we make every effort to ensure the accuracy and completeness of the information provided, 
                  we cannot guarantee that all data is error-free or up-to-date. Users should verify important 
                  information with official sources when necessary. The official GCE Board remains the authoritative 
                  source for examination results.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  3. Limitation of Liability
                </h3>
                <p className="text-muted-foreground">
                  This service is provided "as is" without any warranties, express or implied. We shall not be 
                  liable for any direct, indirect, incidental, special, or consequential damages arising from 
                  the use of this service, including but not limited to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground ml-4">
                  <li>Inaccurate or incomplete result information</li>
                  <li>Technical issues or service interruptions</li>
                  <li>Decisions made based on information from this service</li>
                  <li>Any losses or damages resulting from reliance on this service</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  4. Privacy & Data Protection
                </h3>
                <p className="text-muted-foreground">
                  We respect user privacy and do not store personal search queries or results. All searches 
                  are processed in real-time and are not logged or tracked for personal identification. 
                  Please refer to our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> for 
                  detailed information about data handling.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  5. Intellectual Property
                </h3>
                <p className="text-muted-foreground">
                  The examination results data remains the property of the GCE Board Cameroon. This service 
                  merely provides access to publicly available information in a more accessible format. 
                  Users may not redistribute, modify, or use the data for commercial purposes without 
                  appropriate authorization.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  6. Service Availability
                </h3>
                <p className="text-muted-foreground">
                  We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                  The service may be temporarily unavailable due to maintenance, technical issues, or other 
                  circumstances beyond our control. We reserve the right to modify or discontinue the service 
                  at any time without prior notice.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  7. User Responsibilities
                </h3>
                <p className="text-muted-foreground">
                  Users are responsible for:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground ml-4">
                  <li>Using the service in accordance with applicable laws and regulations</li>
                  <li>Respecting the privacy of others when searching for results</li>
                  <li>Not attempting to access unauthorized data or compromise service security</li>
                  <li>Verifying critical information with official sources when necessary</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  8. Contact Information
                </h3>
                <p className="text-muted-foreground">
                  For questions, concerns, or issues related to this service, please contact us at{" "}
                  <a href="mailto:nfonjeannoel1@gmail.com" className="text-blue-600 hover:underline">
                    nfonjeannoel1@gmail.com
                  </a>. We will respond to inquiries as promptly as possible.
                </p>
              </section>

              <section className="border-t pt-6">
                <h3 className="text-lg font-semibold mb-3 text-amber-600 dark:text-amber-400">
                  Important Notice
                </h3>
                <p className="text-muted-foreground font-medium">
                  By using this service, you acknowledge that you have read, understood, and agree to be bound 
                  by this disclaimer. If you do not agree with any part of this disclaimer, please discontinue 
                  use of the service immediately.
                </p>
                <p className="text-xs text-muted-foreground mt-4">
                  Last updated: January 2024
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 