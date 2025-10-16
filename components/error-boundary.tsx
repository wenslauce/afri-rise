"use client"

import type React from "react"

import { Component, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "@/components/icons"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("[v0] Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-muted">
          <Card className="max-w-md w-full">
            <CardHeader>
              <div className="flex items-center gap-2 text-destructive">
                <AlertTriangle size={24} />
                <CardTitle>Something went wrong</CardTitle>
              </div>
              <CardDescription>We encountered an unexpected error. Please try refreshing the page.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {this.state.error && (
                <div className="p-3 bg-muted rounded-md">
                  <p className="text-sm font-mono text-muted-foreground">{this.state.error.message}</p>
                </div>
              )}
              <Button onClick={() => window.location.reload()} className="w-full btn-hover-lift">
                Refresh Page
              </Button>
            </CardContent>
          </Card>
        </div>
      )
    }

    return this.props.children
  }
}
