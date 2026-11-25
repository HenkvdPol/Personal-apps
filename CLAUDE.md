# Collaborating with Claude

Follow [AGENTS.md](AGENTS.md) for repository conventions and checks.

For implementation, start from the latest `main` on your own branch. Open a focused pull request with the change summary, checks performed, and any remaining device testing. Coordinate with Codex through GitHub issues and pull requests when work overlaps.

For an independent review, inspect the pull request diff and report actionable findings with file and line references. Prioritize regressions, Expo Go compatibility, and gaps in verification. Ask before pushing changes to another contributor's branch.

## Merging

The repository owner has authorized Claude to merge its own pull requests into `main` once these checks pass:

1. `npm ci` and `npm run typecheck` from the repository root.
2. For runtime changes, `npx expo export --platform ios` in each affected app under `apps/`, which confirms the iOS bundle builds.

After merging, tell the owner which physical-device checks in Expo Go are still pending. If a merged change breaks an app, fix it in a follow-up pull request or revert it. Leave pull requests from other contributors, such as Codex, for the owner to merge.
