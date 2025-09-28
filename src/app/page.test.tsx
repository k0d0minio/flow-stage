import { render, screen } from '@testing-library/react'
import Home from '../app/page'

// Mock Clerk components
jest.mock('@clerk/nextjs', () => ({
  SignedIn: ({ children }: { children: React.ReactNode }) => <div data-testid="signed-in">{children}</div>,
  SignedOut: ({ children }: { children: React.ReactNode }) => <div data-testid="signed-out">{children}</div>
}))

// Mock ProfileSection component
jest.mock('@/components/ProfileSection', () => ({
  ProfileSection: () => <div data-testid="profile-section">Profile Section</div>
}))

describe('Home Page', () => {
  beforeEach(() => {
    // Mock environment variables
    process.env.NEXT_PUBLIC_APP_NAME = 'Test App'
    process.env.NEXT_PUBLIC_APP_DESCRIPTION = 'Test Description'
  })

  it('should render the main content', () => {
    render(<Home />)
    
    expect(screen.getByText('Welcome to')).toBeInTheDocument()
    expect(screen.getByText('Test App')).toBeInTheDocument()
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('should show Linear integration in features', () => {
    render(<Home />)
    
    expect(screen.getByText('Linear Integration')).toBeInTheDocument()
    expect(screen.getByText('Auto error reporting')).toBeInTheDocument()
  })
})
