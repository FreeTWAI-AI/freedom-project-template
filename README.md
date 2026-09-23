# Freedom Project Template

A working Node 24 starting point for a **new independent project**, with tests, a local preview and a pinned Platform contract bundle. It does not copy the Platform's database or turn a new project into a Platform service.

```sh
npm test
npm run build
npm run dev
```

Open `http://127.0.0.1:4320` on the same machine. `PORT` can change the port; the example binds to loopback. This is not a remote deployment. `dist/server.mjs` is a reproducible source artifact.

## Create your project

After using the template, follow [the initialization checklist](docs/initialize-project.md). The checked-in `freedom.project.yaml` identifies **this template repository**. It must be replaced with the new repository's observed identity before the new project is registered. A template-created repository is not a GitHub fork, and does not inherit the source project's status.

Connect authenticated commands through `vendor/freedom-platform/client.mjs` using the pinned protocol. Session state is runtime input; never paste a Platform cookie, CSRF token, database URL or provider secret into the manifest, source or browser build. Shared identities, Guild memberships and transactions remain in `freedom-platform`.

This starter has no cloud deployment, public signup, payment, official-status verification or production approval. Source licensing is the repository owner's decision; this template does not invent a license grant for inherited code.

## Collaborate through one task record

Use this repository's [GitHub Issues](../../issues) to propose and coordinate work, then open a linked PR for review. [TASKS.md](TASKS.md) is the task entry point, [CONTRIBUTING.md](CONTRIBUTING.md) explains the human workflow, and [AGENTS.md](AGENTS.md) gives coding agents the same scope and validation rules. A fork preserves these instructions; maintainers still control assignment and repository permissions.
