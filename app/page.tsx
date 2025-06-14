"use client"

import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { Search, GraduationCap, School, Hash, Calendar, BookOpen, HelpCircle, Sparkles } from "lucide-react"

export default function HomePage() {
  const [searchType, setSearchType] = useState("name")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    studentName: "",
    centerNumber: "",
    centerName: "",
    level: "",
    year: ""
  })

  const currentYear = new Date().getFullYear()
  const availableYears = Array.from({ length: 6 }, (_, i) => currentYear - i)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (error) setError("")
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validation
    if (!formData.level || !formData.year) {
      setError("Please select both level and year")
      setIsLoading(false)
      return
    }

    const yearNum = parseInt(formData.year)
    if (yearNum < 2019 || yearNum > currentYear) {
      setError(`Results are only available for years 2019-${currentYear}`)
      setIsLoading(false)
      return
    }

    // Simulate API call
    try {
      // This would be your actual API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For now, just show success
      console.log("Searching with:", { searchType, ...formData })
      
    } catch (err) {
      setError("We encountered an error. Please check your network and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const getSearchPlaceholder = () => {
    switch (searchType) {
      case "name": return "Enter student's full name..."
      case "number": return "Enter 5-digit center number..."
      case "school": return "Enter school/center name..."
      default: return ""
    }
  }

  const getSearchIcon = () => {
    switch (searchType) {
      case "name": return <GraduationCap className="h-4 w-4" />
      case "number": return <Hash className="h-4 w-4" />
      case "school": return <School className="h-4 w-4" />
      default: return <Search className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-green-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">GCE Results</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:text-blue-300 dark:bg-blue-900/30">
            <Sparkles className="h-4 w-4" />
            Fast & Reliable Results Search
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Find Your GCE Results
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Search for your General Certificate of Education results quickly and securely. 
            Available for O-Level and A-Level examinations from 2019 onwards.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Badge variant="outline">2019-{currentYear}</Badge>
              <span>Available Years</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Badge variant="outline">O & A Level</Badge>
              <span>All Levels</span>
            </div>
            <Separator orientation="vertical" className="h-4" />
            <div className="flex items-center gap-2">
              <Badge variant="outline">Instant</Badge>
              <span>Fast Search</span>
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-xl bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl">Search Your Results</CardTitle>
              <CardDescription>
                Choose your search method and enter the required information
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Error Alert */}
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSearch} className="space-y-6">
                {/* Search Type Tabs */}
                <Tabs value={searchType} onValueChange={setSearchType} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="name" className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Student Name
                    </TabsTrigger>
                    <TabsTrigger value="number" className="flex items-center gap-2">
                      <Hash className="h-4 w-4" />
                      Center Number
                    </TabsTrigger>
                    <TabsTrigger value="school" className="flex items-center gap-2">
                      <School className="h-4 w-4" />
                      School Name
                    </TabsTrigger>
                  </TabsList>

                  {/* Search Input */}
                  <TabsContent value="name" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-name">Student Full Name</Label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="student-name"
                          placeholder={getSearchPlaceholder()}
                          value={formData.studentName}
                          onChange={(e) => handleInputChange("studentName", e.target.value)}
                          className="pl-10"
                          required
                          minLength={3}
                          maxLength={50}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Enter the name exactly as it appears on the examination registration
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="number" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="center-number">Center Number</Label>
                      <div className="relative">
                        <Hash className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="center-number"
                          placeholder={getSearchPlaceholder()}
                          value={formData.centerNumber}
                          onChange={(e) => handleInputChange("centerNumber", e.target.value)}
                          className="pl-10"
                          required
                          minLength={5}
                          maxLength={5}
                          pattern="[0-9]{5}"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        5-digit center number where the examination was taken
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="school" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="center-name">School/Center Name</Label>
                      <div className="relative">
                        <School className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="center-name"
                          placeholder={getSearchPlaceholder()}
                          value={formData.centerName}
                          onChange={(e) => handleInputChange("centerName", e.target.value)}
                          className="pl-10"
                          required
                          minLength={4}
                          maxLength={100}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Full name of the school or examination center
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Level and Year Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="level">Examination Level</Label>
                    <Select value={formData.level} onValueChange={(value) => handleInputChange("level", value)}>
                      <SelectTrigger>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          <SelectValue placeholder="Select level" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="OLG">O-Level General</SelectItem>
                        <SelectItem value="OLT">O-Level Technical</SelectItem>
                        <SelectItem value="ALG">A-Level General</SelectItem>
                        <SelectItem value="ALT">A-Level Technical</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year">Examination Year</Label>
                    <Select value={formData.year} onValueChange={(value) => handleInputChange("year", value)}>
                      <SelectTrigger>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <SelectValue placeholder="Select year" />
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        {availableYears.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Search Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
                      Searching...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Search Results
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Help Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6 text-center">
                <GraduationCap className="h-8 w-8 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Can't Find Your Name?</h3>
                <p className="text-sm text-muted-foreground">
                  Try different variations of your name or check for spelling differences
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6 text-center">
                <Hash className="h-8 w-8 mx-auto mb-4 text-green-600" />
                <h3 className="font-semibold mb-2">Center Number</h3>
                <p className="text-sm text-muted-foreground">
                  Your 5-digit center number is on your examination slip
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="pt-6 text-center">
                <School className="h-8 w-8 mx-auto mb-4 text-purple-600" />
                <h3 className="font-semibold mb-2">School Search</h3>
                <p className="text-sm text-muted-foreground">
                  Use the full official name of your school or examination center
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
