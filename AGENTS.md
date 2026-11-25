# Repository instructions

- Use React Native, Expo, and TypeScript. Keep apps under `apps/` and reusable components under `shared/`.
- Manage dependencies from the repository root with npm workspaces. Commit `package-lock.json` when dependencies change.
- Use Expo-compatible dependency versions. Preserve physical iPhone testing with Expo Go and the free development workflow unless the owner approves a change.
- Use a separate branch and pull request for each change. Keep commits focused and leave merging to the repository owner unless explicitly authorized.
- Run `npm ci` and `npm run typecheck`. For runtime changes, verify the affected app when possible and report any physical-device checks still pending.
- Keep credentials, signing files, and local environment files out of Git.
