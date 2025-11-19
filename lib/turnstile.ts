/**
 * Cloudflare Turnstile Verification Utility
 * Verifies Turnstile tokens server-side
 */

export interface TurnstileVerificationResponse {
  success: boolean
  'error-codes'?: string[]
  challenge_ts?: string
  hostname?: string
}

/**
 * Verify a Turnstile token with Cloudflare
 * @param token - The Turnstile token from the client
 * @returns Promise with verification result
 */
export async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY

  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY is not configured')
    // In development, you might want to skip verification
    if (process.env.NODE_ENV === 'development') {
      console.warn('Skipping Turnstile verification in development mode')
      return true
    }
    return false
  }

  if (!token) {
    console.error('No Turnstile token provided')
    return false
  }

  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        secret: secretKey,
        response: token,
      }),
    })

    const data: TurnstileVerificationResponse = await response.json()

    if (!data.success) {
      console.error('Turnstile verification failed:', data['error-codes'])
      return false
    }

    return true
  } catch (error) {
    console.error('Error verifying Turnstile token:', error)
    return false
  }
}
