import type { NextConfig } from 'next';

// Environment variable validation and fallbacks
const requiredEnvVars = {
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Flow Stage',
  NEXT_PUBLIC_APP_DESCRIPTION:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'A modern web application',
  NEXT_PUBLIC_SUPABASE_URL:
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
  NEXT_PUBLIC_SUPABASE_ANON_KEY:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key',
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || 'pk_test_placeholder',
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || 'sk_test_placeholder',
};

// Validate critical environment variables in development
if (process.env.NODE_ENV === 'development') {
  const missingVars = Object.entries(requiredEnvVars)
    .filter(([, value]) => value.includes('placeholder'))
    .map(([key]) => key);

  if (missingVars.length > 0) {
    console.warn('⚠️  Missing environment variables detected:');
    missingVars.forEach(key => console.warn(`   - ${key}`));
    console.warn(
      '   Using placeholder values. Create .env.local with proper values for full functionality.'
    );
  }
}

const nextConfig: NextConfig = {
  env: requiredEnvVars,
  serverExternalPackages: [],
  experimental: {
    optimizePackageImports: [
      '@supabase/supabase-js',
      '@supabase/ssr',
      '@supabase/auth-ui-react',
      '@supabase/auth-ui-shared',
      '@clerk/nextjs',
      '@linear/sdk',
    ],
  },
};

export default nextConfig;
