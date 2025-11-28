# Google OAuth Setup Guide

This guide will walk you through setting up Google Sign-In for your Roam application.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Google OAuth Credentials

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/

2. **Create a New Project (or select existing)**
   - Click on the project dropdown at the top
   - Click "New Project"
   - Name it "Roam App" (or your preferred name)
   - Click "Create"

3. **Enable Google+ API**
   - In the left sidebar, go to "APIs & Services" → "Library"
   - Search for "Google+ API"
   - Click on it and press "Enable"

4. **Configure OAuth Consent Screen**
   - Go to "APIs & Services" → "OAuth consent screen"
   - Select "External" user type
   - Click "Create"
   - Fill in the required fields:
     - **App name**: Roam
     - **User support email**: Your email
     - **Developer contact information**: Your email
   - Click "Save and Continue"
   - Skip the "Scopes" section (click "Save and Continue")
   - Add test users if in testing mode
   - Click "Save and Continue"

5. **Create OAuth 2.0 Credentials**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Select "Web application"
   - Name it "Roam Web Client"
   - Under "Authorized JavaScript origins", add:
     - `http://localhost:3000`
     - `https://yourdomain.com` (add your production domain when ready)
   - Under "Authorized redirect URIs", add:
     - `http://localhost:3000/api/auth/callback/google`
     - `https://yourdomain.com/api/auth/callback/google` (for production)
   - Click "Create"
   - **Copy your Client ID and Client Secret** (you'll need these next!)

### Step 2: Configure Environment Variables

1. **Create `.env.local` file in your project root** (if it doesn't exist)

2. **Add your Google credentials:**

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-here

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your-google-client-id-here.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret-here
```

3. **Generate a NEXTAUTH_SECRET:**
   
   Run this command in your terminal:
   ```bash
   # On Mac/Linux:
   openssl rand -base64 32
   
   # On Windows (PowerShell):
   [Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
   ```
   
   Copy the output and replace `your-super-secret-key-here` with it.

4. **Replace the placeholder values:**
   - Replace `your-google-client-id-here.apps.googleusercontent.com` with your actual Client ID
   - Replace `your-google-client-secret-here` with your actual Client Secret

### Step 3: Run Your Application

```bash
npm run dev
```

Visit `http://localhost:3000` and click the "Sign in with Google" button!

---

## 🎯 What's Been Implemented

### ✅ Features Added:

1. **NextAuth.js Integration**
   - OAuth authentication with Google
   - Session management
   - Secure token handling

2. **UI Components**
   - Sign In/Sign Out buttons in the header
   - Mobile-responsive authentication UI
   - User profile display with avatar
   - Loading states

3. **Protected Routes**
   - `/profile` page (requires authentication)
   - Automatic redirect for unauthenticated users

4. **Profile Page**
   - User information display
   - Account status cards
   - Quick action buttons
   - Beautiful gradient design

---

## 📁 Files Created/Modified

### New Files:
- `app/api/auth/[...nextauth]/route.ts` - NextAuth configuration
- `components/SessionProvider.tsx` - Session context provider
- `app/profile/page.tsx` - Protected profile page

### Modified Files:
- `app/layout.tsx` - Added SessionProvider wrapper
- `components/Header.tsx` - Added authentication UI
- `package.json` - Added next-auth dependency

---

## 🔒 Security Notes

1. **Never commit `.env.local` to version control**
   - It's already in `.gitignore`
   - Contains sensitive credentials

2. **Use different credentials for production**
   - Create separate OAuth credentials for production
   - Update the authorized URIs with your production domain

3. **Keep your NEXTAUTH_SECRET secure**
   - Generate a new one for production
   - Never share it publicly

---

## 🚀 Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. **Add environment variables in your hosting platform:**
   - `NEXTAUTH_URL` → Your production URL (e.g., `https://roam-app.com`)
   - `NEXTAUTH_SECRET` → Generate a new secret for production
   - `GOOGLE_CLIENT_ID` → Your Google Client ID
   - `GOOGLE_CLIENT_SECRET` → Your Google Client Secret

2. **Update Google OAuth Credentials:**
   - Add your production domain to "Authorized JavaScript origins"
   - Add `https://yourdomain.com/api/auth/callback/google` to redirect URIs

3. **Update OAuth Consent Screen:**
   - Change from "Testing" to "In Production" when ready
   - Complete verification if required by Google

---

## 🎨 Customization

### Change Sign-In Button Style
Edit `components/Header.tsx` to customize the button appearance.

### Add More OAuth Providers
Edit `app/api/auth/[...nextauth]/route.ts` and add more providers:
```typescript
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

providers: [
  GoogleProvider({ ... }),
  GitHubProvider({ ... }),
  FacebookProvider({ ... }),
]
```

### Customize Profile Page
Edit `app/profile/page.tsx` to add more features or change the layout.

---

## 🐛 Troubleshooting

### "Error: Invalid callback URL"
- Check that your redirect URI in Google Console matches exactly: `http://localhost:3000/api/auth/callback/google`

### "Error: Client ID not found"
- Verify your `.env.local` file exists and has the correct credentials
- Restart your dev server after changing `.env.local`

### "Error: Access blocked: This app's request is invalid"
- Make sure you've added your email as a test user in Google Console (OAuth consent screen)
- Check that your OAuth consent screen is properly configured

### Session not persisting
- Clear your browser cookies and try again
- Check that NEXTAUTH_SECRET is set

---

## 📚 Additional Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Google OAuth 2.0 Documentation](https://developers.google.com/identity/protocols/oauth2)
- [NextAuth Google Provider](https://next-auth.js.org/providers/google)

---

## 🎉 You're All Set!

Your application now has Google Sign-In fully integrated. Users can:
- ✅ Sign in with their Google account
- ✅ View their profile information
- ✅ Sign out securely
- ✅ Access protected routes

Happy coding! 🚀

