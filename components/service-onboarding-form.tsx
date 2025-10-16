"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface ServiceOnboardingFormProps {
  serviceName: string
  serviceDescription: string
}

export function ServiceOnboardingForm({ serviceName, serviceDescription }: ServiceOnboardingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="border-primary">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
            <h3 className="text-2xl font-bold">Thank You!</h3>
            <p className="text-muted-foreground">
              We've received your inquiry for {serviceName}. Our team will contact you within 24 hours to discuss your
              requirements.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get Started with {serviceName}</CardTitle>
        <CardDescription>{serviceDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input id="firstName" name="firstName" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input id="phone" name="phone" type="tel" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" name="company" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Input id="country" name="country" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="requirements">Tell us about your requirements *</Label>
            <Textarea
              id="requirements"
              name="requirements"
              rows={4}
              placeholder="Please describe your needs, transaction details, or any specific questions..."
              required
            />
          </div>

          <Button type="submit" size="lg" className="w-full btn-hover-lift" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit Inquiry"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our terms and privacy policy. We'll only use your information to
            respond to your inquiry.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
