import SignInForm from '@/components/auth/SignInForm'

export default function SignInPage() {
  return (
    <div className="min-h-screen gradient-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <SignInForm />
      </div>
    </div>
  )
}
