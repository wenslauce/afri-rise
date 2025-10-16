import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft } from "@/components/icons"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted">
      <div className="text-center space-y-6 px-4">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="btn-hover-lift">
            <Link href="/">
              <Home className="mr-2" size={20} />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="btn-hover-lift bg-transparent">
            <Link href="/services">
              <ArrowLeft className="mr-2" size={20} />
              View Services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
