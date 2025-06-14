"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  GraduationCap, 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  FileText,
  Calendar,
  Building,
  Hash,
  User,
  Award
} from "lucide-react"
import { levelMapping, type LevelCode } from "@/lib/supabase"

interface SearchResult {
  record_id: string
  student_name: string
  center_name: string
  center_number: string
  level: LevelCode
  year: number
  papers_passed: string
  student_grades: string
  entry_date: string
}

interface SearchResponse {
  results: SearchResult[]
  totalResults: number
}

function ResultsContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [allResults, setAllResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [localSearchQuery, setLocalSearchQuery] = useState("")
  
  // Filter results based on local search query
  const filteredResults = allResults.filter(result => {
    if (!localSearchQuery.trim()) return true
    
    const query = localSearchQuery.toLowerCase().trim()
    return (
      result.student_name.toLowerCase().includes(query) ||
      result.center_name.toLowerCase().includes(query) ||
      result.center_number.toLowerCase().includes(query) ||
      result.level.toLowerCase().includes(query) ||
      result.year.toString().includes(query) ||
      (result.papers_passed && result.papers_passed.toLowerCase().includes(query)) ||
      (result.student_grades && result.student_grades.toLowerCase().includes(query))
    )
  })
  
  // Pagination settings
  const pageSize = 40
  const totalPages = Math.ceil(filteredResults.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = startIndex + pageSize
  const currentResults = filteredResults.slice(startIndex, endIndex)

  // Get search parameters
  const searchType = searchParams.get('type')
  const searchValue = searchParams.get('value')
  const level = searchParams.get('level')
  const year = searchParams.get('year')

  const fetchResults = async () => {
    if (!searchType || !searchValue || !level || !year) {
      setError("Missing search parameters")
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)
      setError("")

      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          searchType,
          searchValue,
          level,
          year
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Search failed')
      }

      const data: SearchResponse = await response.json()
      setAllResults(data.results)
      setCurrentPage(1) // Reset to first page with new results
      setExpandedItems(new Set()) // Reset expanded items
      setLocalSearchQuery("") // Reset local search when new data is loaded

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setAllResults([])
      setCurrentPage(1)
      setExpandedItems(new Set())
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchResults()
  }, [searchType, searchValue, level, year])

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage)
    setExpandedItems(new Set()) // Reset expanded items when changing page
    window.scrollTo(0, 0)
  }

  const handleLocalSearch = (query: string) => {
    setLocalSearchQuery(query)
    setCurrentPage(1) // Reset to first page when searching
    setExpandedItems(new Set()) // Reset expanded items when searching
  }

  const toggleExpand = (recordId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(recordId)) {
      newExpanded.delete(recordId)
    } else {
      newExpanded.add(recordId)
    }
    setExpandedItems(newExpanded)
  }

  const getSearchTypeDisplay = () => {
    switch (searchType) {
      case 'name': return 'Student Name'
      case 'number': return 'Center Number'
      case 'school': return 'School/Center'
      default: return 'Search'
    }
  }

  const formatGrades = (grades: string) => {
    if (!grades) return []
    return grades.split(',').map(grade => grade.trim()).filter(Boolean)
  }

  const formatPapers = (papers: string) => {
    if (!papers) return []
    return papers.split(',').map(paper => paper.trim()).filter(Boolean)
  }

  if (!searchType || !searchValue || !level || !year) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <Alert variant="destructive">
              <AlertDescription>
                Invalid search parameters. Please go back to the search page.
              </AlertDescription>
            </Alert>
            <Button 
              onClick={() => router.push('/')} 
              className="mt-4"
              variant="outline"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Search
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              onClick={() => router.push('/')}
              className="p-2"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">Search Results</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search Summary */}
          <div className="mb-6">
            <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">Search Results</CardTitle>
                    <CardDescription className="flex flex-wrap items-center gap-2 mt-2">
                      <Badge variant="secondary">
                        {getSearchTypeDisplay()}: {searchValue}
                      </Badge>
                      <Badge variant="outline">
                        {levelMapping[level as LevelCode]} {year}
                      </Badge>
                    </CardDescription>
                  </div>
                  {allResults.length > 0 && (
                    <div className="text-sm text-muted-foreground">
                      {localSearchQuery.trim() ? (
                        <>
                          {filteredResults.length} of {allResults.length} result{allResults.length !== 1 ? 's' : ''}
                          {totalPages > 1 && (
                            <span className="ml-2">
                              (showing {startIndex + 1}-{Math.min(endIndex, filteredResults.length)})
                            </span>
                          )}
                        </>
                      ) : (
                        <>
                          {allResults.length} result{allResults.length !== 1 ? 's' : ''} found
                          {totalPages > 1 && (
                            <span className="ml-2">
                              (showing {startIndex + 1}-{Math.min(endIndex, allResults.length)})
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Top Controls - Search and Pagination */}
          {!isLoading && allResults.length > 0 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              {/* Search Bar */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-none">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                  <Input
                    placeholder="Search within results..."
                    value={localSearchQuery}
                    onChange={(e) => handleLocalSearch(e.target.value)}
                    className="pl-9 h-8 w-full sm:w-64 text-sm"
                  />
                </div>
                {localSearchQuery.trim() && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleLocalSearch("")}
                    className="h-8 px-2 text-xs"
                  >
                    Clear
                  </Button>
                )}
              </div>

              {/* Compact Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="h-8 px-2"
                  >
                    <ChevronLeft className="h-3 w-3" />
                  </Button>
                  
                  <div className="flex items-center gap-1 mx-2">
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {currentPage} / {totalPages}
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="h-8 px-2"
                  >
                    <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Error Alert */}
          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Loading State */}
          {isLoading && (
            <>
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-white/50 dark:bg-gray-900/50 px-4 py-2 rounded-full">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
                  Loading all results...
                </div>
              </div>
              <div className="space-y-2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-lg border">
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-2 flex-1">
                          <Skeleton className="h-5 w-1/3" />
                          <Skeleton className="h-4 w-1/4" />
                        </div>
                        <Skeleton className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Results - Expandable List */}
          {!isLoading && currentResults.length > 0 && (
            <>
              <div className="space-y-2 mb-8">
                {currentResults.map((result) => {
                  const isExpanded = expandedItems.has(result.record_id)
                  return (
                    <div key={result.record_id} className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-lg border hover:bg-white/90 dark:hover:bg-gray-900/90 transition-colors">
                      {/* Collapsed State - Always visible */}
                      <div 
                        className="p-4 cursor-pointer select-none"
                        onClick={() => toggleExpand(result.record_id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3">
                              <User className="h-4 w-4 text-blue-600 flex-shrink-0" />
                              <div className="min-w-0 flex-1">
                                <h3 className="font-semibold text-base truncate">{result.student_name}</h3>
                                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                                  <Hash className="h-3 w-3" />
                                  <span>Center: {result.center_number}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0 ml-4">
                            {isExpanded ? (
                              <ChevronUp className="h-4 w-4 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="h-4 w-4 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Expanded State - Detailed information */}
                      {isExpanded && (
                        <div className="px-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="pt-4 space-y-4">
                            {/* Center Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Building className="h-4 w-4" />
                                <span>{result.center_name}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>{levelMapping[result.level]} - {result.year}</span>
                              </div>
                            </div>

                            {/* Grades */}
                            {result.student_grades && (
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                  <Award className="h-4 w-4 text-green-600" />
                                  <span>Grades:</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {formatGrades(result.student_grades).map((grade, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {grade}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Papers Passed */}
                            {result.papers_passed && (
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                  <FileText className="h-4 w-4 text-purple-600" />
                                  <span>Papers Passed:</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {formatPapers(result.papers_passed).map((paper, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                      {paper}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  
                  <div className="flex items-center gap-2 mx-4">
                    <span className="text-sm text-muted-foreground">
                      Page {currentPage} of {totalPages}
                    </span>
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </>
          )}

          {/* No Results */}
          {!isLoading && allResults.length === 0 && !error && (
            <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
              <CardContent className="p-12 text-center">
                <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No Results Found</h3>
                <p className="text-muted-foreground mb-6">
                  No results were found for your search criteria. Try adjusting your search terms.
                </p>
                <Button onClick={() => router.push('/')} variant="outline">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Search
                </Button>
              </CardContent>
            </Card>
          )}

          {/* No Filtered Results */}
          {!isLoading && allResults.length > 0 && filteredResults.length === 0 && localSearchQuery.trim() && (
            <Card className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
              <CardContent className="p-12 text-center">
                <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No Matching Results</h3>
                <p className="text-muted-foreground mb-6">
                  No results match your search query "{localSearchQuery}". Try using different keywords.
                </p>
                <Button onClick={() => handleLocalSearch("")} variant="outline">
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-2">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 rounded-lg border">
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2 flex-1">
                        <Skeleton className="h-5 w-1/3" />
                        <Skeleton className="h-4 w-1/4" />
                      </div>
                      <Skeleton className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  )
} 