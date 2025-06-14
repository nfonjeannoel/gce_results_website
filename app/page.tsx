"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Search, GraduationCap, School, Hash, Calendar, BookOpen, HelpCircle } from "lucide-react"
import { supabase, levelMapping, type LevelCode } from "@/lib/supabase"

function HomePageContent() {
  const searchParams = useSearchParams()
  const tabParam = searchParams.get('tab')
  
  // Header visibility state
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  
  const [searchType, setSearchType] = useState(() => {
    // Initialize search type based on URL parameter
    if (tabParam === 'name' || tabParam === 'number' || tabParam === 'school') {
      return tabParam
    }
    return "name"
  })
  
  // Watch for URL parameter changes
  useEffect(() => {
    const currentTab = searchParams.get('tab')
    if (currentTab === 'name' || currentTab === 'number' || currentTab === 'school') {
      setSearchType(currentTab)
    }
  }, [searchParams])
  
  // Header scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Show header when at the top
      if (currentScrollY < 10) {
        setIsHeaderVisible(true)
      }
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    studentName: "",
    centerNumber: "",
    centerName: "",
    level: "",
    year: ""
  })
  const [availableYears, setAvailableYears] = useState<number[]>([])
  const [availableLevels, setAvailableLevels] = useState<LevelCode[]>([])
  const [dataLoading, setDataLoading] = useState(true)

  // Fetch available years and levels from database
  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        setDataLoading(true)
        
        // Fetch unique years using efficient database function
        const { data: yearData, error: yearError } = await supabase
          .rpc('get_distinct_years')
        
        if (yearError) throw yearError
        
        // Fetch unique levels using efficient database function
        const { data: levelData, error: levelError } = await supabase
          .rpc('get_distinct_levels')
        
        if (levelError) throw levelError
        
        // Data is already unique and sorted from the database functions
        const uniqueYears = yearData?.map(item => item.year) || []
        const uniqueLevels = levelData?.map(item => item.level) || [] as LevelCode[]
        
        setAvailableYears(uniqueYears)
        setAvailableLevels(uniqueLevels)
        
      } catch (error) {
        console.error('Error fetching metadata:', error)
        setError('Failed to load available years and levels')
      } finally {
        setDataLoading(false)
      }
    }
    
    fetchMetadata()
  }, [])

  const getSearchPlaceholder = () => {
    switch (searchType) {
      case "name": return "Enter any part of the student's name..."
      case "number": return "Enter 5-digit center number..."
      case "school": return "Enter school or center name..."
      default: return ""
    }
  }

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
    if (!availableYears.includes(yearNum)) {
      setError(`Results are only available for years: ${availableYears.join(', ')}`)
      setIsLoading(false)
      return
    }

    // Get the search value based on search type
    let searchValue = ""
    switch (searchType) {
      case "name":
        searchValue = formData.studentName.trim()
        if (!searchValue || searchValue.length < 3) {
          setError("Student name must be at least 3 characters long")
          setIsLoading(false)
          return
        }
        break
      case "number":
        searchValue = formData.centerNumber.trim()
        if (!searchValue || searchValue.length !== 5) {
          setError("Center number must be exactly 5 digits")
          setIsLoading(false)
          return
        }
        break
      case "school":
        searchValue = formData.centerName.trim()
        if (!searchValue || searchValue.length < 4) {
          setError("School/Center name must be at least 4 characters long")
          setIsLoading(false)
          return
        }
        break
      default:
        setError("Invalid search type")
        setIsLoading(false)
        return
    }

    try {
      // Navigate to results page with search parameters
      const searchParams = new URLSearchParams({
        type: searchType,
        value: searchValue,
        level: formData.level,
        year: formData.year
      })
      
      // Use window.location to navigate (alternative to useRouter for form submission)
      window.location.href = `/results?${searchParams.toString()}`
      
    } catch (err) {
      setError("We encountered an error. Please check your network and try again.")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60 transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold tracking-tight">GCE Results</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground" asChild>
              <Link href="/contact">
                <HelpCircle className="h-4 w-4 mr-2" />
                Help
              </Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content - Add top padding to account for fixed header */}
      <main className="container mx-auto px-4 py-12 pt-28">
        <div className="max-w-3xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-3 font-serif">
              GCE Results Search
            </h1>
            <p className="text-lg text-muted-foreground">
              Find your Cameroon GCE O-Level and A-Level examination results quickly and easily
            </p>
          </div>

          {/* Search Form */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl font-serif">Search Your Results</CardTitle>
              <CardDescription className="text-base">
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
                {/* Search Type Tabs - Mobile Friendly */}
                <Tabs value={searchType} onValueChange={setSearchType} className="w-full">
                  <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-6 h-auto p-1">
                    <TabsTrigger 
                      value="name" 
                      className="flex items-center gap-2 py-3 px-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      <GraduationCap className="h-4 w-4" />
                      <span className="hidden sm:inline">Student Name</span>
                      <span className="sm:hidden">Name</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="number" 
                      className="flex items-center gap-2 py-3 px-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      <Hash className="h-4 w-4" />
                      <span className="hidden sm:inline">Center Number</span>
                      <span className="sm:hidden">Number</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="school" 
                      className="flex items-center gap-2 py-3 px-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-200 cursor-pointer"
                    >
                      <School className="h-4 w-4" />
                      <span className="hidden sm:inline">School Name</span>
                      <span className="sm:hidden">School</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* Search Input */}
                  <TabsContent value="name" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-name">Student Name</Label>
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
                        Enter any part of the student's name - first name, last name, or both in order
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
                        {dataLoading ? (
                          <SelectItem value="loading" disabled>Loading levels...</SelectItem>
                        ) : availableLevels.length > 0 ? (
                          availableLevels.map((levelCode) => (
                            <SelectItem key={levelCode} value={levelCode}>
                              {levelMapping[levelCode]}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="no-data" disabled>No levels available</SelectItem>
                        )}
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
                        {dataLoading ? (
                          <SelectItem value="loading" disabled>Loading years...</SelectItem>
                        ) : availableYears.length > 0 ? (
                          availableYears.map((year) => (
                            <SelectItem key={year} value={year.toString()}>
                              {year}
                            </SelectItem>
                          ))
                        ) : (
                          <SelectItem value="no-data" disabled>No years available</SelectItem>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Search Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
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

          {/* Compact Help Section */}
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <GraduationCap className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                <h3 className="font-medium text-sm mb-1">Name Search</h3>
                <p className="text-xs text-muted-foreground">
                  Works with partial names in order
                </p>
              </div>

              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <Hash className="h-6 w-6 mx-auto mb-2 text-indigo-600" />
                <h3 className="font-medium text-sm mb-1">Center Number</h3>
                <p className="text-xs text-muted-foreground">
                  Found on examination slip
                </p>
              </div>

              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                <School className="h-6 w-6 mx-auto mb-2 text-purple-600" />
                <h3 className="font-medium text-sm mb-1">School Search</h3>
                <p className="text-xs text-muted-foreground">
                  Use official school name
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent />
    </Suspense>
  )
}
