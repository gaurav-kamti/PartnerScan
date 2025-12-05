# MongoDB Setup Guide

You have two options for MongoDB:

## Option 1: MongoDB Atlas (Cloud - Recommended for Quick Start)

1. **Create Free Account**:
   - Go to https://www.mongodb.com/cloud/atlas/register
   - Sign up for a free account

2. **Create Cluster**:
   - Click "Build a Database"
   - Choose "FREE" tier (M0)
   - Select a cloud provider and region close to you
   - Click "Create Cluster"

3. **Setup Database Access**:
   - Go to "Database Access" in left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Create username and password (save these!)
   - Set privileges to "Read and write to any database"
   - Click "Add User"

4. **Setup Network Access**:
   - Go to "Network Access" in left sidebar
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Get Connection String**:
   - Go to "Database" in left sidebar
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string (looks like: `mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/`)
   - Replace `<password>` with your actual password
   - Add database name at the end: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/partnerscan`

6. **Update .env file**:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/partnerscan
   ```

## Option 2: Local MongoDB Installation (Windows)

1. **Download MongoDB**:
   - Go to https://www.mongodb.com/try/download/community
   - Download MongoDB Community Server for Windows
   - Run the installer (.msi file)

2. **Install MongoDB**:
   - Choose "Complete" installation
   - Install MongoDB as a Service (check the box)
   - Install MongoDB Compass (GUI tool - optional but helpful)
   - Complete the installation

3. **Verify Installation**:
   ```bash
   mongod --version
   ```

4. **Start MongoDB Service** (if not auto-started):
   ```bash
   net start MongoDB
   ```

5. **Use Default Connection** in `.env`:
   ```
   MONGODB_URI=mongodb://localhost:27017/partnerscan
   ```

## Testing Connection

After setup, start your server:
```bash
npm start
```

You should see: `✅ Connected to MongoDB`

If you see connection errors, check:
- MongoDB service is running
- Connection string is correct
- Network access is configured (for Atlas)
- Username/password are correct (for Atlas)
