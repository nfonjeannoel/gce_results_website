import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, GraduationCap, Mail, MessageCircle, Clock, Send } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the GCE Results team for support, questions, or feedback."
}

export default function ContactPage() {
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
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <h1 className="text-4xl font-bold tracking-tight font-serif">
                Contact Us
              </h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team for support, questions, or feedback
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <Mail className="h-6 w-6 text-blue-600" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                      Primary Contact
                    </h3>
                    <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                      <Mail className="h-4 w-4" />
                      <a 
                        href="mailto:nfonjeannoel1@gmail.com" 
                        className="hover:underline"
                      >
                        nfonjeannoel1@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Response Time
                    </h3>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      We typically respond within 24-48 hours during business days
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-semibold text-foreground">What we can help with:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      Technical issues with search functionality
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      Questions about examination results
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      Data accuracy concerns
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      Privacy and data protection inquiries
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      General feedback and suggestions
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Guidelines */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
              <CardHeader>
                <CardTitle className="text-2xl font-serif flex items-center gap-2">
                  <Send className="h-6 w-6 text-green-600" />
                  Contact Guidelines
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      📧 Email Subject Lines
                    </h3>
                    <div className="space-y-2 text-sm">
                      <p className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <strong>Technical Issue:</strong> "GCE Results - Technical Problem"
                      </p>
                      <p className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <strong>Data Question:</strong> "GCE Results - Data Inquiry"
                      </p>
                      <p className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <strong>Privacy:</strong> "GCE Results - Privacy Inquiry"
                      </p>
                      <p className="p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <strong>Feedback:</strong> "GCE Results - Feedback"
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      📝 Information to Include
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Clear description of your question or issue</li>
                      <li>• Steps you've already tried (for technical issues)</li>
                      <li>• Browser and device information (if relevant)</li>
                      <li>• Screenshots (if applicable)</li>
                    </ul>
                  </div>

                  <div className="p-4 border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                      ⚠️ Important Notes
                    </h3>
                    <ul className="space-y-1 text-sm text-amber-700 dark:text-amber-300">
                      <li>• We cannot modify official examination results</li>
                      <li>• For official result corrections, contact GCE Board directly</li>
                      <li>• Include relevant details to help us assist you better</li>
                      <li>• Be patient - we receive many inquiries daily</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card className="mt-8 border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
            <CardHeader>
              <CardTitle className="text-2xl font-serif">Frequently Asked Questions</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Q: Why can't I find my results?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Check your spelling, try different search methods (name, center number, school), 
                      and ensure you're searching the correct year and level.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Q: Are the results official?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, results are sourced from official databases, but always verify important 
                      information with the GCE Board for official purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Q: How current is the data?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      We update our data regularly to reflect the latest available results from 
                      official sources.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Q: Can I download my results?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Currently, you can view and screenshot results. For official certificates, 
                      contact the GCE Board directly.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Q: Is this service free?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Yes, our search service is completely free to use for all students and parents.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Q: Do you store my search data?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      No, we don't store personal search queries. See our{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>{" "}
                      for details.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
} 