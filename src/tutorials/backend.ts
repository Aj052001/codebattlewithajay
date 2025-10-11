import { Tutorial } from '@/types';

export const backendTutorials: Tutorial[] = [

 {
  id: '1',
  title: 'Complete Guide to JWT Authentication',
  description: 'Master JWT (JSON Web Tokens) from basics to advanced implementation — understand authentication, authorization, security best practices, and build a complete auth system.',
  slug: 'complete-guide-jwt-authentication',
  courseId: '5',
  content: `
  <div style="font-family: 'Inter', sans-serif; line-height: 1.8; color: #1c1e21; padding: 40px; max-width: 100%; margin: 0 auto; background-color: #ffffff;">

    <h1 style="font-size: 2.5rem; color: #0073b1; text-align: center; margin-bottom: 30px;">🔐 Complete Guide to JWT Authentication</h1>

    <p style="font-size: 1.15rem; text-align: center; color: #4b4f56; margin-bottom: 40px;">
      Welcome to the comprehensive JWT course! You'll learn everything from <strong style="color:#d93025;">JWT basics</strong> to 
      implementing secure authentication in real-world applications.
    </p>

    <h2 style="color:#0073b1; text-align:center; margin-bottom: 30px;">🚀 What You'll Learn Today</h2>
    <ul style="font-size: 1.1rem; line-height: 1.7; margin-bottom: 50px; background-color:#f9fafb; padding:20px; border-radius:10px;">
      <li>✅ What is JWT and why we need it</li>
      <li>✅ JWT Structure (Header, Payload, Signature)</li>
      <li>✅ How JWT works (Authentication Flow)</li>
      <li>✅ Implementing JWT in Node.js with Express</li>
      <li>✅ Creating Access & Refresh Tokens</li>
      <li>✅ JWT Middleware for Protected Routes</li>
      <li>✅ Security Best Practices</li>
      <li>✅ Common Mistakes & How to Avoid Them</li>
    </ul>

    <hr style="margin: 50px 0; border: 0; height: 1px; background: #d1d5db;" />

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">📘 What is JWT?</h2>
      <p style="margin-bottom: 20px; font-size: 1.1rem;">
        <strong>JWT (JSON Web Token)</strong> is an open standard (RFC 7519) for securely transmitting information between parties as a JSON object. 
        It's commonly used for <strong>authentication</strong> and <strong>authorization</strong> in web applications.
      </p>

      <div style="background-color:#fff3cd; padding:20px; border-radius:8px; border-left:4px solid #ffc107; margin-bottom:20px;">
        <p style="margin:0;"><strong>🤔 Why JWT?</strong></p>
        <ul style="margin:10px 0 0 20px;">
          <li><strong>Stateless:</strong> No need to store session data on the server</li>
          <li><strong>Scalable:</strong> Works great with microservices & distributed systems</li>
          <li><strong>Secure:</strong> Digitally signed to prevent tampering</li>
          <li><strong>Cross-domain:</strong> Can be used across different domains</li>
        </ul>
      </div>

      <p style="margin-bottom: 15px;">Think of JWT as a <strong>digital passport</strong> — once verified, you can access protected resources without re-authenticating.</p>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧩 JWT Structure</h2>
      <p style="margin-bottom: 15px;">A JWT consists of three parts separated by dots (<code>.</code>):</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px; overflow-x:auto; font-size:0.9rem;"><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NSIsImVtYWlsIjoidXNlckBleGFtcGxlLmNvbSJ9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

<span style="color:#16a34a;">Header</span>.<span style="color:#2563eb;">Payload</span>.<span style="color:#dc2626;">Signature</span>
</code></pre>

      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem; margin-top:30px;">
        <tr style="background-color:#0073b1; color:#fff;">
          <th style="padding:12px;">Part</th>
          <th style="padding:12px;">Description</th>
          <th style="padding:12px;">Example</th>
        </tr>
        <tr style="background-color:#eaf4fb;">
          <td style="padding:12px;"><strong>Header</strong></td>
          <td style="padding:12px;">Token type and hashing algorithm</td>
          <td style="padding:12px;"><code>{"alg":"HS256","typ":"JWT"}</code></td>
        </tr>
        <tr style="background-color:#f5fbfe;">
          <td style="padding:12px;"><strong>Payload</strong></td>
          <td style="padding:12px;">User data (claims) like userId, email, role</td>
          <td style="padding:12px;"><code>{"userId":"12345","email":"user@example.com"}</code></td>
        </tr>
        <tr style="background-color:#eaf4fb;">
          <td style="padding:12px;"><strong>Signature</strong></td>
          <td style="padding:12px;">Ensures token hasn't been tampered with</td>
          <td style="padding:12px;"><code>HMACSHA256(base64Url(header) + "." + base64Url(payload), secret)</code></td>
        </tr>
      </table>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔄 How JWT Authentication Works</h2>
      <ol style="font-size: 1.05rem; line-height: 1.8; background-color:#f0f9ff; padding:25px; border-radius:10px;">
        <li><strong>User Login:</strong> User sends credentials (email + password) to server</li>
        <li><strong>Verify Credentials:</strong> Server checks if credentials are valid</li>
        <li><strong>Generate JWT:</strong> Server creates a JWT with user info and signs it</li>
        <li><strong>Send Token:</strong> Server sends JWT back to client</li>
        <li><strong>Store Token:</strong> Client stores JWT (usually in localStorage or cookies)</li>
        <li><strong>Send Token with Requests:</strong> Client includes JWT in Authorization header for protected routes</li>
        <li><strong>Verify Token:</strong> Server verifies JWT signature and extracts user info</li>
        <li><strong>Grant Access:</strong> If valid, server processes the request</li>
      </ol>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">💻 Implementation: Setup & Installation</h2>
      <p style="margin-bottom: 15px;">First, install the required packages:</p>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>npm install express mongoose bcryptjs jsonwebtoken dotenv
npm install --save-dev nodemon
</code></pre>

      <p style="margin-top:20px; margin-bottom: 15px;">Create a <code>.env</code> file:</p>

      <pre style="background-color:#f3f4f6; padding:15px; border-radius:6px;"><code>PORT=5000
MONGODB_URI=mongodb://localhost:27017/jwt-auth
JWT_SECRET=your_super_secret_key_here_min_32_characters
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your_refresh_token_secret_key_here
JWT_REFRESH_EXPIRE=30d
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🗂️ User Model (models/User.js)</h2>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  refreshToken: String
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔑 JWT Utility Functions (utils/jwt.js)</h2>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>const jwt = require('jsonwebtoken');

// Generate Access Token (short-lived)
const generateAccessToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '7d' }
  );
};

// Generate Refresh Token (long-lived)
const generateRefreshToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRE || '30d' }
  );
};

// Verify Access Token
const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

// Verify Refresh Token
const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired refresh token');
  }
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken
};
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🛡️ Auth Middleware (middleware/auth.js)</h2>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>const { verifyAccessToken } = require('../utils/jwt');
const User = require('../models/User');

// Protect routes - Verify JWT
const protect = async (req, res, next) => {
  try {
    // 1. Get token from header
    const token = req.headers.authorization?.startsWith('Bearer')
      ? req.headers.authorization.split(' ')[1]
      : null;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized, no token provided'
      });
    }

    // 2. Verify token
    const decoded = verifyAccessToken(token);

    // 3. Get user from token
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found'
      });
    }

    // 4. Attach user to request
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Not authorized, token failed',
      error: error.message
    });
  }
};

// Role-based authorization
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Role ' + req.user.role + ' is not authorized to access this route'
      });
    }
    next();
  };
};

module.exports = { protect, authorize };
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🎯 Auth Controller (controllers/authController.js)</h2>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>const User = require('../models/User');
const {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken
} = require('../utils/jwt');

// @desc    Register new user
// @route   POST /api/auth/signup
// @access  Public
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email'
      });
    }

    // Create user
    const user = await User.create({ name, email, password });

    // Generate tokens
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Save refresh token to database
    user.refreshToken = refreshToken;
    await user.save();

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error registering user',
      error: error.message
    });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate tokens
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Save refresh token
    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        accessToken,
        refreshToken
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error logging in',
      error: error.message
    });
  }
};

// @desc    Refresh access token
// @route   POST /api/auth/refresh
// @access  Public
exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: 'Refresh token is required'
      });
    }

    // Verify refresh token
    const decoded = verifyRefreshToken(refreshToken);

    // Find user and check if refresh token matches
    const user = await User.findById(decoded.userId);
    if (!user || user.refreshToken !== refreshToken) {
      return res.status(401).json({
        success: false,
        message: 'Invalid refresh token'
      });
    }

    // Generate new access token
    const newAccessToken = generateAccessToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Token refreshed successfully',
      data: {
        accessToken: newAccessToken
      }
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid or expired refresh token',
      error: error.message
    });
  }
};

// @desc    Logout user
// @route   POST /api/auth/logout
// @access  Private
exports.logout = async (req, res) => {
  try {
    // Clear refresh token from database
    req.user.refreshToken = undefined;
    await req.user.save();

    res.status(200).json({
      success: true,
      message: 'Logout successful'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error logging out',
      error: error.message
    });
  }
};

// @desc    Get current user profile
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      user: req.user
    }
  });
};
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🛤️ Auth Routes (routes/authRoutes.js)</h2>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  signup,
  login,
  refreshToken,
  logout,
  getMe
} = require('../controllers/authController');

// Public routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/refresh', refreshToken);

// Protected routes
router.post('/logout', protect, logout);
router.get('/me', protect, getMe);

module.exports = router;
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🚀 Main Server File (server.js)</h2>

      <pre style="background-color:#1e293b; color:#e2e8f0; padding:20px; border-radius:6px; overflow-x:auto;"><code>require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);

// Protected route example
const { protect, authorize } = require('./middleware/auth');

app.get('/api/protected', protect, (req, res) => {
  res.json({
    success: true,
    message: 'This is a protected route',
    user: req.user
  });
});

// Admin only route
app.get('/api/admin', protect, authorize('admin'), (req, res) => {
  res.json({
    success: true,
    message: 'Admin access granted'
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
</code></pre>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🔒 Security Best Practices</h2>
      <div style="background-color:#fff3cd; padding:20px; border-radius:8px; border-left:4px solid #ffc107;">
        <ol style="font-size: 1.05rem; line-height: 1.7; margin:0;">
          <li><strong>Never store JWT in localStorage</strong> — use httpOnly cookies instead (XSS protection)</li>
          <li><strong>Use strong secrets</strong> — minimum 32 characters, randomly generated</li>
          <li><strong>Short expiry for access tokens</strong> — 15 minutes to 1 hour</li>
          <li><strong>Implement refresh token rotation</strong> — generate new refresh token on each use</li>
          <li><strong>Validate tokens on every request</strong> — don't trust client-side validation</li>
          <li><strong>Never include sensitive data in payload</strong> — JWT is encoded, not encrypted</li>
          <li><strong>Use HTTPS in production</strong> — prevent token interception</li>
          <li><strong>Implement token blacklisting</strong> — for logout and security breaches</li>
        </ol>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">❌ Common Mistakes</h2>
      <table style="border-collapse: collapse; width:100%; font-size: 1.05rem;">
        <tr style="background-color:#dc2626; color:#fff;">
          <th style="padding:12px;">Mistake</th>
          <th style="padding:12px;">Solution</th>
        </tr>
        <tr style="background-color:#fee2e2;">
          <td style="padding:12px;">Storing passwords in plain text</td>
          <td style="padding:12px;">Always hash with bcrypt (12+ rounds)</td>
        </tr>
        <tr style="background-color:#fef2f2;">
          <td style="padding:12px;">Using weak JWT secrets</td>
          <td style="padding:12px;">Use strong, random strings (32+ chars)</td>
        </tr>
        <tr style="background-color:#fee2e2;">
          <td style="padding:12px;">Not validating tokens on server</td>
          <td style="padding:12px;">Always verify signature and expiry</td>
        </tr>
        <tr style="background-color:#fef2f2;">
          <td style="padding:12px;">Storing sensitive data in JWT payload</td>
          <td style="padding:12px;">Only store user ID and non-sensitive info</td>
        </tr>
        <tr style="background-color:#fee2e2;">
          <td style="padding:12px;">No token expiration</td>
          <td style="padding:12px;">Set reasonable expiry times</td>
        </tr>
      </table>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧠 Summary</h2>
      <ul style="font-size: 1.05rem; line-height: 1.7; background-color:#f0f9ff; padding:25px; border-radius:10px;">
        <li>✅ JWT consists of Header, Payload, and Signature</li>
        <li>✅ Use access tokens (short-lived) and refresh tokens (long-lived)</li>
        <li>✅ Always verify tokens on the server side</li>
        <li>✅ Implement proper middleware for protected routes</li>
        <li>✅ Follow security best practices (strong secrets, HTTPS, httpOnly cookies)</li>
        <li>✅ Never store sensitive data in JWT payload</li>
        <li>✅ Use role-based authorization for different access levels</li>
      </ul>
    </section>

    <section>
      <h2 style="color:#0073b1; margin-bottom: 20px;">🧪 Practice Tasks</h2>
      <div style="background-color:#f3f4f6; padding:25px; border-radius:10px;">
        <h3 style="color:#0073b1; margin-bottom:15px;">Task 1: Basic Implementation</h3>
        <p>Implement the complete JWT authentication system as shown above. Test all endpoints:</p>
        <ul style="margin-bottom:25px;">
          <li>POST /api/auth/signup</li>
          <li>POST /api/auth/login</li>
          <li>GET /api/auth/me (protected)</li>
          <li>POST /api/auth/logout (protected)</li>
        </ul>

        <h3 style="color:#0073b1; margin-bottom:15px;">Task 2: Advanced Features</h3>
        <p>Add these features to your implementation:</p>
        <ol>
          <li><strong>Password Reset:</strong> Implement forgot password and reset password functionality</li>
          <li><strong>Email Verification:</strong> Send verification email on signup</li>
          <li><strong>Rate Limiting:</strong> Limit login attempts to prevent brute force attacks</li>
          <li><strong>Token Blacklist:</strong> Implement a blacklist for invalidated tokens</li>
        </ol>

        <h3 style="color:#0073b1; margin-bottom:15px; margin-top:25px;">Task 3: Testing with Postman</h3>
        <ol>
          <li>Create a new user via signup endpoint</li>
          <li>Login with the credentials and save the access token</li>
          <li>Access protected routes by adding: <code>Authorization: Bearer YOUR_TOKEN</code></li>
          <li>Test token expiry by waiting or using a short expiry time</li>
          <li>Refresh the token using refresh token endpoint</li>
        </ol>
      </div>
    </section>

    <section style="margin-top:50px; background-color:#0073b1; color:#fff; padding:30px; border-radius:10px; text-align:center;">
      <h2 style="color:#fff; margin-bottom:15px;">🎉 Congratulations!</h2>
      <p style="font-size:1.1rem; margin:0;">
        You've completed the JWT Authentication course! You now understand how to implement secure, 
        scalable authentication in your Node.js applications. Keep practicing and exploring advanced concepts! 🚀
      </p>
    </section>

  </div>
  `,
  duration: '45 min',
  order: 1,
  tags: ['jwt', 'authentication', 'security', 'nodejs', 'express', 'backend', 'tokens', 'authorization']
}
];