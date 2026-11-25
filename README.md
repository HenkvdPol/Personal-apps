# Personal Apps

A React Native, Expo SDK 58, and TypeScript workspace for building personal iPhone apps with Claude and ChatGPT Codex.

- [apps/](apps/) contains each app as a separate npm workspace. The starter app verifies that an iPhone can load the bundle and respond to touch.
- [shared/](shared/) contains reusable React Native components.
- [docs/](docs/) contains the [Windows and iPhone setup guide](docs/windows-development.md).

## Run the starter

Install Node.js 24 LTS and Expo Go on your iPhone. From the repository root:

```sh
npm ci
npm start
```

Connect the computer and iPhone to the same Wi-Fi. Scan the terminal QR code with the iPhone Camera, open it in Expo Go, and tap **Test the app**. The app should show **Touch input works.**

Run `npm run typecheck` from the root to check TypeScript. Run `npm run start --workspace @personal-apps/starter` to target the starter explicitly.

Development and device testing use free tools and require no paid Apple Developer membership or cloud build service. GitHub hosts the source and pull requests. The development computer runs Expo's Metro server.

## Contribute

Create a branch from `main`, commit your changes, and open a pull request for review. See [AGENTS.md](AGENTS.md) for repository instructions and [CLAUDE.md](CLAUDE.md) for Claude's workflow.
