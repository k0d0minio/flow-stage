import { redirect } from 'next/navigation'

export default async function Home({ searchParams }) {
  // Handle email confirmation codes that might come to the root URL
  const params = await searchParams
  const code = params?.code
  const type = params?.type
  
  if (code) {
    // Redirect to the callback route with the code
    const callbackUrl = `/auth/callback?code=${code}${type ? `&type=${type}` : '&type=signup'}`
    redirect(callbackUrl)
  }

  return (
    <div className="min-h-screen gradient-secondary">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-8 animate-bounce-gentle">
              <span className="text-4xl">🎵</span>
            </div>
            <h1 className="text-7xl font-bold bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-6">
              Flow Stage
            </h1>
            <p className="text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
              Revolutionary B2B SaaS platform automating the entire music touring value chain
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Connect artists, venues, and bookers with AI-powered matching and automated contract management
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a href="/auth/signup" className="btn-primary text-lg px-10 py-4">
                Start Your Journey
              </a>
              <a href="/auth/signin" className="btn-secondary text-lg px-10 py-4">
                Sign In
              </a>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-200 rounded-full opacity-60 animate-bounce-gentle"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-secondary-200 rounded-full opacity-60 animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-200 rounded-full opacity-60 animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Every Music Professional
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you&apos;re an artist, venue owner, or booking agent, Flow Stage has the tools you need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:shadow-medium transition-all duration-300 animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎭</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Artists</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Find the perfect venue for your music in 3 clicks. Get matched with venues that fit your style, audience, and budget.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Smart venue matching</li>
                <li>✓ Automated booking requests</li>
                <li>✓ Tour optimization</li>
              </ul>
            </div>
            
            <div className="card p-8 text-center hover:shadow-medium transition-all duration-300 animate-slide-up" style={{animationDelay: '0.1s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Venues</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Fill your calendar with the right artists automatically. Discover talent that matches your venue&apos;s vibe and audience.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Artist discovery</li>
                <li>✓ Calendar management</li>
                <li>✓ Revenue optimization</li>
              </ul>
            </div>
            
            <div className="card p-8 text-center hover:shadow-medium transition-all duration-300 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Bookers</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Manage multiple artists with AI tour optimization. Streamline your booking process and maximize efficiency.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>✓ Multi-artist management</li>
                <li>✓ AI tour planning</li>
                <li>✓ Contract automation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Music Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of music professionals who are already using Flow Stage to grow their careers
          </p>
          <a href="/auth/signup" className="inline-flex items-center bg-white text-primary-600 font-semibold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-strong">
            Get Started Free
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}