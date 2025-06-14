import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      searchType, 
      searchValue, 
      level, 
      year
    } = body

    // Validation
    if (!searchType || !searchValue || !level || !year) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Use optimized database functions for better performance
    let functionName = ''

    switch (searchType) {
      case 'name':
        functionName = 'search_by_student_name'
        break
      case 'number':
        functionName = 'search_by_center_number'
        break
      case 'school':
        functionName = 'search_by_center_name'
        break
      default:
        return NextResponse.json(
          { error: 'Invalid search type' },
          { status: 400 }
        )
    }

    let rpcParams: any = {}
    
    if (searchType === 'number') {
      rpcParams = {
        center_num: searchValue,
        level_filter: level,
        year_filter: parseInt(year)
      }
    } else {
      rpcParams = {
        search_term: searchValue,
        level_filter: level,
        year_filter: parseInt(year)
      }
    }

    const { data, error } = await supabase.rpc(functionName, rpcParams)

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Database query failed' },
        { status: 500 }
      )
    }

    // Return all results - pagination will be handled client-side
    return NextResponse.json({
      results: data || [],
      totalResults: data?.length || 0
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 