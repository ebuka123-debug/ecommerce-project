<script setup>
</script>
<template>
  <div class="body">
    <div class="card">
        <div class="logo">
            <span class="logo-text">Specs</span>
            <div class="logo-dot"></div>
        </div>
        <p class="tagline">Welcome back — sign in to continue</p>
        <div class="divider"></div>

        <form>
            <div class="field">
                <label for="email">Email address</label>
                <input type="email" id="email" placeholder="you@example.com" autocomplete="email">
            </div>

            <div class="field">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="••••••••" autocomplete="current-password">
            </div>

            <a href="#" class="forgot">Forgot password?</a>

            <button type="submit" class="btn-signin">Sign in</button>

            <p class="footer-text">
                Don't have an account? <a href="./signUp.html">Sign up</a>
            </p>
        </form>
  </div>
  </div>
</template>
<style scoped>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
            --primary: #C51D36;
            --primary-dark: #a2182d;
            --primary-light: rgba(34, 164, 241, 0.5);
            /* --primary-light: rgba(13, 110, 253, 0.65); */
            --secondary: #305C9B;
            --text: #1A1A1A;
            --text-muted: #6b7280;
            --border: #e5e7eb;
            --bg: #f0f0f0;
            --card-bg: #ffffff;
            --input-bg: #fafafa;
            --other-color: #22A4F1;
        }

        .body {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: var(--bg);
            background-image:
                radial-gradient(ellipse at 20% 20%, rgba(197, 29, 54, 0.06) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 80%, rgba(48, 92, 155, 0.05) 0%, transparent 50%);
            font-family: 'DM Sans', sans-serif;
            padding: 24px;
        }

        .card {
            width: 100%;
            max-width: 420px;
            background: var(--card-bg);
            border-radius: 20px;
            padding: 48px 40px 40px;
            box-shadow:
                0 1px 2px rgba(0,0,0,0.04),
                0 4px 12px rgba(0,0,0,0.06),
                0 20px 40px rgba(0,0,0,0.08);
            animation: fadeUp 0.5s ease both;
        }

        @keyframes fadeUp {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
        }

        /* Logo */
        .logo {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            margin-bottom: 2px;
        }
        .logo-text {
            font-size: 32px;
            font-weight: 700;
            color: var(--text);
            letter-spacing: -1px;
        }
        .logo-dot {
            width: 9px;
            height: 9px;
            background: var(--primary);
            border-radius: 50%;
            margin-top: -14px;
        }
        .tagline {
            text-align: center;
            color: var(--text-muted);
            font-size: 14px;
            margin-bottom: 30px;
        }

        /* Divider */
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, var(--border), transparent);
            margin-bottom: 28px;
        }

        /* Form fields */
        .field {
            position: relative;
            margin-bottom: 16px;
        }
        .field label {
            display: block;
            font-size: 12px;
            font-weight: 600;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.6px;
            margin-bottom: 6px;
        }
        .field input {
            width: 100%;
            padding: 13px 16px;
            border: 1.5px solid var(--border);
            border-radius: 10px;
            background: var(--input-bg);
            font-family: inherit;
            font-size: 15px;
            color: var(--text);
            outline: none;
            transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .field input::placeholder { color: #bbb; }
        .field input:focus {
            border-color: var(--primary-light);
            background: #fff;
            box-shadow: 0 0 0 3px var(--primary-light);
        }

        /* Forgot password */
        .forgot {
            display: block;
            text-align: right;
            font-size: 13px;
            color: var(--secondary);
            text-decoration: none;
            margin-top: -8px;
            margin-bottom: 24px;
            font-weight: 500;
            transition: color 0.2s;
        }
        .forgot:hover { color: var(--primary); }

        /* Submit button */
        .btn-signin {
            width: 100%;
            padding: 14px;
            background: var(--primary);
            color: #fff;
            border: none;
            border-radius: 10px;
            font-family: inherit;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            letter-spacing: 0.2px;
            transition: background 0.2s, transform 0.1s, box-shadow 0.2s;
            box-shadow: 0 4px 14px rgba(197, 29, 54, 0.3);
            margin-bottom: 24px;
        }
        .btn-signin:hover {
            background: var(--primary-dark);
            box-shadow: 0 6px 18px rgba(197, 29, 54, 0.38);
        }
        .btn-signin:active { transform: scale(0.99); }

        /* Footer */
        .footer-text {
            text-align: center;
            font-size: 14px;
            color: var(--text-muted);
        }
        .footer-text a {
            color: var(--secondary);
            text-decoration: none;
            font-weight: 600;
            transition: color 0.2s;
        }
        .footer-text a:hover { color: var(--primary); }
</style>
