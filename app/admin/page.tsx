"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Submission {
  id: string
  idea: string
  email: string
  timestamp: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [submissions, setSubmissions] = useState<Submission[]>([])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would validate the password against a secure backend
    if (password === "your-secure-password") {
      setIsAuthenticated(true)
    } else {
      alert("Invalid password")
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      // In a real application, you would fetch submissions from a secure API
      const mockSubmissions: Submission[] = [
        { id: "1", idea: "Article about DeFi", email: "user1@example.com", timestamp: "2025-01-30T10:00:00Z" },
        { id: "2", idea: "NFT market analysis", email: "user2@example.com", timestamp: "2025-01-30T11:30:00Z" },
      ]
      setSubmissions(mockSubmissions)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-md mx-auto bg-neutral-800/30 border-golden-500/20">
          <CardContent className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-golden-500 text-center">Admin Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full bg-neutral-700 text-white border-golden-500/20 focus:border-golden-500"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-golden-500 to-golden-400 text-neutral-900 font-bold py-2 px-4 rounded-md hover:from-golden-400 hover:to-golden-300 transition-all"
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto bg-neutral-800/30 border-golden-500/20">
        <CardContent className="p-8">
          <h1 className="text-4xl font-bold mb-8 text-golden-500 text-center">Article Idea Submissions</h1>
          {submissions.map((submission) => (
            <div key={submission.id} className="mb-6 p-4 bg-neutral-700/50 rounded-lg">
              <p className="text-white">
                <strong>Idea:</strong> {submission.idea}
              </p>
              <p className="text-golden-300">
                <strong>Email:</strong> {submission.email}
              </p>
              <p className="text-golden-400">
                <strong>Timestamp:</strong> {new Date(submission.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

