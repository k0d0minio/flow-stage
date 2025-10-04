import '@testing-library/jest-dom';

// Polyfills for next-test-api-route-handler
const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Suppress console.error during tests to reduce noise
console.error = () => {
  // Suppress all console.error during tests
  // This prevents API route error logs and React act warnings from cluttering test output
  return;
};

// Mock Clerk authentication (client-side only)
jest.mock('@clerk/nextjs', () => ({
  useUser: () => ({
    user: { id: 'test-user-123', email: 'test@example.com' },
    isLoaded: true,
  }),
  SignedIn: ({ children }) => children,
  SignedOut: ({ children }) => children,
}));

// Mock Supabase client
jest.mock('@/lib/supabase/client', () => ({
  createClient: () => ({
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn(() =>
            Promise.resolve({
              data: { id: 'test-profile-123', email: 'test@example.com' },
              error: null,
            })
          ),
        })),
      })),
      insert: jest.fn(() => ({
        select: jest.fn(() => ({
          single: jest.fn(() =>
            Promise.resolve({
              data: { id: 'test-profile-123', email: 'test@example.com' },
              error: null,
            })
          ),
        })),
      })),
      update: jest.fn(() => ({
        eq: jest.fn(() => ({
          select: jest.fn(() => ({
            single: jest.fn(() =>
              Promise.resolve({
                data: { id: 'test-profile-123', email: 'test@example.com' },
                error: null,
              })
            ),
          })),
        })),
      })),
    })),
  }),
}));

// Mock Supabase server functions
jest.mock('@/lib/supabase/server', () => ({
  createServerClient: jest.fn(() => ({
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn(() =>
            Promise.resolve({
              data: { id: 'test-profile-123', email: 'test@example.com' },
              error: null,
            })
          ),
        })),
      })),
      insert: jest.fn(() => ({
        select: jest.fn(() => ({
          single: jest.fn(() =>
            Promise.resolve({
              data: { id: 'test-profile-123', email: 'test@example.com' },
              error: null,
            })
          ),
        })),
      })),
    })),
  })),
}));

// Mock Supabase admin functions
jest.mock('@/lib/supabase/admin', () => ({
  createAdminClient: jest.fn(() => ({
    from: jest.fn(() => ({
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn(() =>
            Promise.resolve({
              data: { id: 'test-profile-123', email: 'test@example.com' },
              error: null,
            })
          ),
        })),
      })),
    })),
  })),
}));

// Mock Next.js server functions
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data, init) => ({
      json: () => Promise.resolve(data),
      status: init?.status || 200,
      statusText: init?.statusText || 'OK',
    })),
  },
}));

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () =>
      Promise.resolve({ id: 'test-profile-123', email: 'test@example.com' }),
  })
);
