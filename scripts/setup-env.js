#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up environment files...');

// Create .env.local
const envLocalContent = `# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0

# NextAuth Configuration
NEXTAUTH_SECRET=your-super-secret-jwt-token-with-at-least-32-characters-long
NEXTAUTH_URL=http://localhost:3000

# Supabase Service Role (for server-side operations)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU

# Application URLs
SUPABASE_SITE_URL=http://localhost:3000
SUPABASE_REDIRECT_URL=http://localhost:3000/auth/callback

# Environment
NODE_ENV=development
`;

// Create .env (for reference)
const envContent = `# Environment Variables Template
# Copy this to .env.local and update with your actual values

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here

# NextAuth Configuration
NEXTAUTH_SECRET=your-super-secret-jwt-token-with-at-least-32-characters-long
NEXTAUTH_URL=http://localhost:3000

# Supabase Service Role (for server-side operations)
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key-here

# Application URLs
SUPABASE_SITE_URL=http://localhost:3000
SUPABASE_REDIRECT_URL=http://localhost:3000/auth/callback

# Environment
NODE_ENV=development
`;

try {
  // Write .env.local
  fs.writeFileSync('.env.local', envLocalContent);
  console.log('✅ Created .env.local');

  // Write .env
  fs.writeFileSync('.env', envContent);
  console.log('✅ Created .env');

  console.log('\n🎉 Environment setup complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Make sure Supabase is running: supabase start');
  console.log('2. Start the development server: npm run dev');
  console.log('3. Test authentication at: http://localhost:3000/auth/signup');

} catch (error) {
  console.error('❌ Error setting up environment:', error.message);
  process.exit(1);
}
