# 🚀 Vercel Deployment Checklist

## Pre-Deployment Steps

### 1. Supabase Configuration
- [ ] **Site URL**: Add your Vercel domain to Supabase Auth settings
  - Go to Supabase Dashboard → Authentication → URL Configuration
  - Site URL: `https://your-app-name.vercel.app`
  - Redirect URLs: 
    - `https://your-app-name.vercel.app/auth/callback`
    - `https://your-app-name.vercel.app/auth/reset-password`

### 2. Database Schema
- [ ] **Run SQL Schema**: Execute `supabase-schema.sql` in Supabase SQL Editor
- [ ] **Verify Tables**: Check that `profiles` table and triggers are created
- [ ] **Test RLS**: Ensure Row Level Security policies are active

### 3. Vercel Environment Variables
Set these in Vercel Project Settings → Environment Variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://blpacprmeaafbaibkdfy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJscGFjcHJtZWFhZmJhaWJrZGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MTE1NTIsImV4cCI6MjA3NDI4NzU1Mn0.MaSmGfAks1ODkBvPlwmcxO7Gnj1c78Ym9kcOTJcl7iQ
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJscGFjcHJtZWFhZmJhaWJrZGZ5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1ODcxMTU1MiwiZXhwIjoyMDc0Mjg3NTUyfQ.FRa1vAQ9eJMFKKcZ06yfOisc6JsVUUPYgILyZ1wiTFM
NEXTAUTH_SECRET=your-production-secret-here-generate-random-string
NEXTAUTH_URL=https://your-app-name.vercel.app
NODE_ENV=production
```

### 4. Google OAuth (If Using)
- [ ] **Google Console**: Update OAuth app with production URLs
- [ ] **Authorized Redirect URIs**: Add `https://your-app-name.vercel.app/auth/callback`
- [ ] **Environment Variables**: Add Google credentials to Vercel

### 5. Domain Configuration
- [ ] **Custom Domain**: If using custom domain, update Supabase Site URL
- [ ] **SSL**: Vercel handles SSL automatically
- [ ] **DNS**: Ensure domain points to Vercel

## Post-Deployment Testing

### 1. Authentication Flow
- [ ] **Sign Up**: Test user registration
- [ ] **Email Verification**: Check email confirmation works
- [ ] **Sign In**: Test login functionality
- [ ] **Password Reset**: Test forgot password flow
- [ ] **Google OAuth**: Test social login (if enabled)

### 2. Protected Routes
- [ ] **Dashboard Access**: Verify protected routes work
- [ ] **Redirects**: Test unauthenticated redirects
- [ ] **Session Persistence**: Check sessions persist across page refreshes

### 3. Database Operations
- [ ] **Profile Creation**: Verify automatic profile creation
- [ ] **Profile Updates**: Test profile modification
- [ ] **Data Security**: Ensure RLS policies work

## Troubleshooting

### Common Issues
1. **CORS Errors**: Check Supabase Site URL configuration
2. **Environment Variables**: Verify all variables are set in Vercel
3. **Database Connection**: Ensure schema is deployed
4. **OAuth Redirects**: Check redirect URL configuration

### Debug Steps
1. Check Vercel function logs for errors
2. Verify environment variables in Vercel dashboard
3. Test Supabase connection from production
4. Check browser console for client-side errors

## Security Checklist
- [ ] **Environment Variables**: No secrets in code
- [ ] **RLS Policies**: Database security enabled
- [ ] **HTTPS**: All traffic encrypted
- [ ] **CORS**: Proper origin configuration
- [ ] **Secrets**: Generate new NEXTAUTH_SECRET for production
