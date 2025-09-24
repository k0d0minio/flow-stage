import SignUpForm from '@/components/auth/SignUpForm'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h1 className="text-center text-3xl font-bold text-gray-900">
            Join Flow Stage
          </h1>
          <p className="mt-2 text-center text-sm text-gray-600">
            Start your musical journey today
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}
