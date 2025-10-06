# 🚀 BringID Claim app

This project is a web application that works with BringID extension. Follow the instructions below to run the project in development or production mode.

---

## ⚙️ Requirements

- **Node.js** version **20** or higher
- **Yarn** package manager
- A valid `.env` file (see below)

---

## 📁 Environment Variables

Create a `.env` file in the root directory using the following format:

```
NEXT_PUBLIC_PROJECT_ID=e4...
NEXT_PUBLIC_ENVIRONMENT=dev
NEXT_PUBLIC_ONCHAINKIT_API_KEY=e7...
NEXT_PUBLIC_NETWORK_ID=84532
NEXT_PUBLIC_ZUPLO_KEY=zpka_...
NEXT_PUBLIC_ZUPLO_API_URL=https://api.bringid.org

# JSON RPC URLs
NEXT_PUBLIC_JSON_RPC_URL=https://...
```

> 💡 Make sure your API keys and URLs are valid for your target environment.

---

## 📦 Install Dependencies

Install the required packages using Yarn:

```
yarn
```

---

## 👨‍💻 Development Mode

To start the application in development mode:

```
yarn dev
```

This runs the app locally with hot reloading.

---

## 🏗 Production Build

To build the application for production:

```
yarn build
```

This generates an optimized build in the `.next` or `out` folder (depending on your framework).

---

## 🧪 Running the Production Server (optional)

If you're using Next.js or a similar framework and want to test the production build locally:

```
yarn start
```

---

## ✨ Credits

Built with ❤️ by BringID
