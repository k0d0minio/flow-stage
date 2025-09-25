# Local Development Setup Guide

## 🏠 Your Current Configuration

**Environment**: Local development with Docker + Traefik  
**Domain**: `https://flow-stage.localtest.me`  
**Supabase**: Local instance (`http://localhost:54321`)  
**HTTPS**: Handled by Traefik  

## 📋 Required Environment Variables

Create a `.env` file in your project root with these variables:

```bash
# Supabase Configuration (Local)
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_ACJWlzQHlZjBrEguHvfOxg_3BJgxAaH
SUPABASE_SERVICE_ROLE_KEY=sb_secret_N7UND0UgjKTVK-Uodkm0Hg_xSvEMPvz

# NextAuth Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=https://flow-stage.localtest.me

# Application Configuration
NODE_ENV=development
SUPABASE_SITE_URL=https://flow-stage.localtest.me
SUPABASE_REDIRECT_URL=https://flow-stage.localtest.me/auth/callback
```

## 🔄 Authentication Flow

Your authentication flow is now configured as follows:

1. **User visits**: `https://flow-stage.localtest.me/auth/signin`
2. **Sign up**: Redirects to Supabase with `https://flow-stage.localtest.me/auth/callback?type=signup`
3. **Email confirmation**: User clicks link → `https://flow-stage.localtest.me/auth/callback?type=signup`
4. **After confirmation**: Redirects to `https://flow-stage.localtest.me/auth/account-confirmed`
5. **Profile setup**: User goes to `https://flow-stage.localtest.me/auth/profile-setup`
6. **Final redirect**: User lands on `https://flow-stage.localtest.me/dashboard`

## 🧪 Testing Your Setup

1. **Verify configuration**:
   ```bash
   node scripts/verify-config.js
   ```

2. **Start Supabase**:
   ```bash
   supabase start
   ```

3. **Start your application**:
   ```bash
   docker compose up
   ```

4. **Test authentication**:
   - Visit `https://flow-stage.localtest.me/auth/signup`
   - Create a test account
   - Check email for confirmation link
   - Complete the flow

## 🔧 Configuration Details

### Supabase Config (`supabase/config.toml`)
- **Site URL**: `https://flow-stage.localtest.me`
- **Redirect URLs**: All HTTPS localtest.me URLs are whitelisted
- **Local Supabase**: Running on localhost:54321 (external access)

### Next.js Config (`src/lib/config.js`)
- **Centralized URLs**: All redirects use `NEXTAUTH_URL` environment variable
- **Consistent routing**: Same URLs used across all components
- **Environment validation**: Checks required variables on startup

### Docker Compose (`compose.yaml`)
- **Environment variables**: Uses `${VARIABLE}` syntax for security
- **Traefik labels**: Routes HTTPS traffic to Next.js container
- **Network**: Connected to external `config` network

## 🚀 Production Deployment

When deploying to production, simply update your environment variables:

```bash
NEXTAUTH_URL=https://your-production-domain.com
SUPABASE_SITE_URL=https://your-production-domain.com
SUPABASE_REDIRECT_URL=https://your-production-domain.com/auth/callback
```

The configuration will automatically adapt to your production domain.

## ✅ Verification Checklist

- [ ] Environment variables set in `.env` file
- [ ] Supabase running locally (`supabase start`)
- [ ] Docker containers running (`docker compose up`)
- [ ] HTTPS accessible at `https://flow-stage.localtest.me`
- [ ] Authentication flow working end-to-end
- [ ] Profile creation respects user type selection
- [ ] Redirects work correctly for all auth flows

## 🐛 Troubleshooting

**Issue**: "Invalid redirect URL" errors  
**Solution**: Ensure Supabase config.toml has all redirect URLs listed

**Issue**: Environment variables not loading  
**Solution**: Check `.env` file exists and has correct variable names

**Issue**: HTTPS not working  
**Solution**: Verify Traefik is running and `config` network exists

**Issue**: Supabase connection failed  
**Solution**: Check if Supabase is running (`supabase status`)
