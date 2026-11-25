# Windows development and iPhone testing

1. Install [Git for Windows](https://git-scm.com/download/win) and [Node.js 24 LTS](https://nodejs.org/en/download). Reopen PowerShell after installation.
2. Install or update [Expo Go](https://apps.apple.com/app/expo-go/id982107779) on the iPhone. The starter targets Expo SDK 58. Check the [Expo Go download page](https://expo.dev/go) for the SDK supported by the current iPhone App Store version.
3. Run the commands below in PowerShell. If Git prompts for authentication, sign in with an account that has repository access.

```powershell
git clone https://github.com/HenkvdPol/Personal-apps.git
Set-Location Personal-apps
npm.cmd ci
npm.cmd start
```

4. Put both devices on the same Wi-Fi. Allow Node.js through Windows Firewall on private networks if prompted. Scan the QR code with the iPhone Camera and open the link in Expo Go. Grant Expo Go local network access if prompted.
5. Tap **Test the app** and confirm **Touch input works.** Leave the development server running while testing.

If Wi-Fi blocks device-to-device traffic, stop the server with Ctrl+C and run `npm.cmd run start --workspace @personal-apps/starter -- --tunnel`. Expo may prompt to install its tunnel dependency. If PowerShell blocks the `npm.ps1` shim, use `npm.cmd` as shown above.

Run `npm.cmd run typecheck` before opening a pull request. To start a different app, use `npm.cmd run start --workspace <package-name>` with its package name from `apps/`.
