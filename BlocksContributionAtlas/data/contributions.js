window.__CONTRIBUTIONS_DATA__ = {
  "meta": {
    "generatedAt": "2026-05-19T17:29:35.364Z",
    "authorHandle": "AhmedMoustafa1",
    "publicName": "Ahmed Moustafa",
    "source": "git log --all --author=AhmedMoustafa1",
    "emailIncluded": false,
    "firstDate": "2026-04-15",
    "lastDate": "2026-05-19",
    "commitCount": 489,
    "branchCoverage": {
      "refsSeen": 15,
      "mainCommits": 485,
      "sideOnlyCommits": 4
    }
  },
  "totals": {
    "commits": 489,
    "insertions": 386071,
    "deletions": 58857,
    "filesChanged": 3339
  },
  "milestones": [
    {
      "title": "Foundation And Controls",
      "startDate": "2026-04-15",
      "endDate": "2026-04-17",
      "summary": "Adapters, approvals, RBAC, onboarding, departments, users, and core schema."
    },
    {
      "title": "World And Execution",
      "startDate": "2026-04-18",
      "endDate": "2026-04-23",
      "summary": "3D campus, realtime presence, task assignment, agent execution, artifacts, and recovery."
    },
    {
      "title": "Mission And Project Platform",
      "startDate": "2026-04-25",
      "endDate": "2026-05-03",
      "summary": "Mission Studio, budgeting, project trees, publishing, LLM transport, and portraits."
    },
    {
      "title": "Unified Chat And Model Control",
      "startDate": "2026-05-04",
      "endDate": "2026-05-11",
      "summary": "Unified chat, Kimi routing, skills harness, direct overrides, and artifact quality."
    },
    {
      "title": "Memory And Portfolio Polish",
      "startDate": "2026-05-13",
      "endDate": "2026-05-19",
      "summary": "Embeddings, RAG, summaries, project knowledge, BLOCKS shell, run outcomes, and final polish."
    }
  ],
  "features": [
    {
      "id": "agent-execution-heartbeat",
      "rank": 1,
      "title": "Agent Execution And Heartbeat Runtime",
      "domain": "Agent Runtime",
      "importance": "Critical",
      "value": 98,
      "summary": "Turned agents into reliable workers with stateful execution, interrupts, telemetry, queues, recovery, and run finalization.",
      "before": "Agents could be configured and triggered, but execution was thinner and less observable.",
      "after": "Runs have lifecycle state, recovery paths, delivery hooks, summaries, and a decomposed heartbeat architecture.",
      "slug": "agent-execution-and-heartbeat-runtime",
      "stats": {
        "commitCount": 42,
        "insertions": 16179,
        "deletions": 6342,
        "filesChanged": 151,
        "firstDate": "2026-04-15",
        "lastDate": "2026-05-14",
        "categoryBreakdown": [
          {
            "name": "Refactor",
            "count": 14
          },
          {
            "name": "Feature",
            "count": 10
          },
          {
            "name": "Fix",
            "count": 8
          },
          {
            "name": "Plan",
            "count": 6
          },
          {
            "name": "Test",
            "count": 2
          },
          {
            "name": "Chore",
            "count": 1
          },
          {
            "name": "Server",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "heartbeat",
            "count": 20
          },
          {
            "name": "unscoped",
            "count": 9
          },
          {
            "name": "server",
            "count": 7
          },
          {
            "name": "ui",
            "count": 2
          },
          {
            "name": "db",
            "count": 2
          },
          {
            "name": "runs",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "server",
            "count": 123
          },
          {
            "name": "ui",
            "count": 26
          },
          {
            "name": "packages",
            "count": 2
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "686d047a",
            "date": "2026-04-15",
            "subject": "feat: implement code_agent adapter for Claude Code integration"
          },
          {
            "shortSha": "8f62fa30",
            "date": "2026-04-15",
            "subject": "feat: improve heartbeat run lifecycle and telemetry"
          },
          {
            "shortSha": "7bd9e720",
            "date": "2026-04-19",
            "subject": "feat(server): implement agent execution pipeline with state machine and Anthropic integration"
          },
          {
            "shortSha": "db81ef05",
            "date": "2026-04-19",
            "subject": "feat(server): add heartbeat trigger, agent interrupt, cost-summary, and department stats routes"
          },
          {
            "shortSha": "1543e871",
            "date": "2026-04-19",
            "subject": "feat(ui): agent panel, interrupt chat, HUD components, and department picker"
          },
          {
            "shortSha": "9eb84c53",
            "date": "2026-04-21",
            "subject": "feat(ui): Agent panel tabs and heartbeat countdown"
          },
          {
            "shortSha": "8bd5542f",
            "date": "2026-04-23",
            "subject": "feat(server): harden heartbeat queue, parent wakeups, and stuck-run recovery"
          },
          {
            "shortSha": "a3250837",
            "date": "2026-04-23",
            "subject": "feat(server): integrate LLM agent execution with artifact delivery and policy"
          }
        ]
      }
    },
    {
      "id": "mission-studio",
      "rank": 2,
      "title": "Mission Studio",
      "domain": "Mission Planning",
      "importance": "Critical",
      "value": 96,
      "summary": "Created a mission intake and discovery experience that turns rough intent into scoped briefs, PRDs, and executable project plans.",
      "before": "Manager intake existed in simpler form without a full mission design surface.",
      "after": "Mission Studio supports discovery, council flow, project binding, freeze paths, structured briefs, PRD editing, and reliability state.",
      "slug": "mission-studio",
      "stats": {
        "commitCount": 65,
        "insertions": 84995,
        "deletions": 4042,
        "filesChanged": 416,
        "firstDate": "2026-04-15",
        "lastDate": "2026-05-19",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 29
          },
          {
            "name": "Plan",
            "count": 10
          },
          {
            "name": "Mission Studio",
            "count": 10
          },
          {
            "name": "Test",
            "count": 4
          },
          {
            "name": "Fix",
            "count": 3
          },
          {
            "name": "Chore",
            "count": 3
          },
          {
            "name": "Docs",
            "count": 2
          },
          {
            "name": "Other",
            "count": 1
          },
          {
            "name": "Style",
            "count": 1
          },
          {
            "name": "UI",
            "count": 1
          },
          {
            "name": "Mission",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "unscoped",
            "count": 30
          },
          {
            "name": "server",
            "count": 10
          },
          {
            "name": "ui",
            "count": 7
          },
          {
            "name": "manager",
            "count": 6
          },
          {
            "name": "issues",
            "count": 2
          },
          {
            "name": "shared",
            "count": 2
          }
        ],
        "topDirectories": [
          {
            "name": "ui",
            "count": 194
          },
          {
            "name": "server",
            "count": 179
          },
          {
            "name": "packages",
            "count": 23
          },
          {
            "name": "artifacts",
            "count": 9
          },
          {
            "name": "docs",
            "count": 6
          },
          {
            "name": "e2e",
            "count": 2
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "a9a2bb34",
            "date": "2026-04-15",
            "subject": "feat: enhance Issue Chat with empty submission and file drop support"
          },
          {
            "shortSha": "027b92f0",
            "date": "2026-04-17",
            "subject": "feat: add mission field to company onboarding"
          },
          {
            "shortSha": "a4fa7129",
            "date": "2026-04-17",
            "subject": "index on Phase0+Phase1: 027b92f feat: add mission field to company onboarding"
          },
          {
            "shortSha": "518c8a14",
            "date": "2026-04-21",
            "subject": "feat(server): Phase 4 tasks API, manager intake, and supporting services"
          },
          {
            "shortSha": "5419ccbf",
            "date": "2026-04-21",
            "subject": "feat(ui): Manager intake panel, world HUD, and navigation"
          },
          {
            "shortSha": "59a00095",
            "date": "2026-04-21",
            "subject": "feat(issues): delete issue subtrees and align DELETE permissions"
          },
          {
            "shortSha": "52c67247",
            "date": "2026-04-23",
            "subject": "feat(server): manager autorun, intake, persisted history, and HTTP routes"
          },
          {
            "shortSha": "2e4e78a5",
            "date": "2026-04-28",
            "subject": "feat(shared): add Mission Studio types, exports, and visual defaults"
          }
        ]
      }
    },
    {
      "id": "memory-chat-rag",
      "rank": 3,
      "title": "Memory Grounded Chat",
      "domain": "AI Memory",
      "importance": "Critical",
      "value": 95,
      "summary": "Made chat project-aware and evidence-grounded with memory retrieval, web research, disambiguation, summaries, and output guards.",
      "before": "Chat was useful, but it could drift away from project context and had less retrieval support.",
      "after": "Agent, project, department, and company chat can retrieve memories, use selected context, cite evidence, and handle ambiguity.",
      "slug": "memory-grounded-chat",
      "stats": {
        "commitCount": 87,
        "insertions": 50773,
        "deletions": 5025,
        "filesChanged": 470,
        "firstDate": "2026-04-21",
        "lastDate": "2026-05-19",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 33
          },
          {
            "name": "Fix",
            "count": 14
          },
          {
            "name": "Refactor",
            "count": 10
          },
          {
            "name": "Test",
            "count": 9
          },
          {
            "name": "Server",
            "count": 7
          },
          {
            "name": "UI",
            "count": 4
          },
          {
            "name": "Other",
            "count": 4
          },
          {
            "name": "Shared",
            "count": 2
          },
          {
            "name": "Docs",
            "count": 2
          },
          {
            "name": "Chat",
            "count": 1
          },
          {
            "name": "Projects",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "chat",
            "count": 39
          },
          {
            "name": "unscoped",
            "count": 21
          },
          {
            "name": "server",
            "count": 5
          },
          {
            "name": "ui",
            "count": 4
          },
          {
            "name": "shared",
            "count": 3
          },
          {
            "name": "chat-server",
            "count": 3
          }
        ],
        "topDirectories": [
          {
            "name": "server",
            "count": 248
          },
          {
            "name": "ui",
            "count": 158
          },
          {
            "name": "packages",
            "count": 58
          },
          {
            "name": "docs",
            "count": 5
          },
          {
            "name": "agent-chat-context-carry.plan.md",
            "count": 1
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "18385085",
            "date": "2026-04-21",
            "subject": "feat(ui): wire live presence state, online HUD signals, and department voice chat"
          },
          {
            "shortSha": "8ce62c56",
            "date": "2026-04-29",
            "subject": "test(skills): align route and service coverage with managed bundles"
          },
          {
            "shortSha": "77edffe0",
            "date": "2026-05-04",
            "subject": "feat(ui): Agents page — sort modes, persisted custom order, drag grid polish"
          },
          {
            "shortSha": "c7925c7b",
            "date": "2026-05-05",
            "subject": "feat(projects): cascading deletion of project issues and storage attachments"
          },
          {
            "shortSha": "4863fafc",
            "date": "2026-05-06",
            "subject": "feat(projects): add project agent chat and memory journal workflow"
          },
          {
            "shortSha": "e422b27a",
            "date": "2026-05-07",
            "subject": "feat(db): add unified chat persistence schema and migration"
          },
          {
            "shortSha": "7c39b13e",
            "date": "2026-05-07",
            "subject": "feat(shared): add unified chat types and validators"
          },
          {
            "shortSha": "fff7eec9",
            "date": "2026-05-07",
            "subject": "feat(shared): add readable memory helpers and agent memory metadata"
          }
        ]
      }
    },
    {
      "id": "project-knowledge-docs",
      "rank": 4,
      "title": "Project Knowledge Documents",
      "domain": "Project Intelligence",
      "importance": "Critical",
      "value": 94,
      "summary": "Added project document import, chunking, vectorization, verification, and agent crew assignment for knowledge-backed work.",
      "before": "Projects had file surfaces, but not a full document-to-RAG workflow.",
      "after": "Markdown and text documents can become searchable project knowledge for agents and project chat.",
      "slug": "project-knowledge-documents",
      "stats": {
        "commitCount": 2,
        "insertions": 2643,
        "deletions": 14,
        "filesChanged": 36,
        "firstDate": "2026-05-19",
        "lastDate": "2026-05-19",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 2
          }
        ],
        "topScopes": [
          {
            "name": "projects",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "ui",
            "count": 15
          },
          {
            "name": "packages",
            "count": 12
          },
          {
            "name": "server",
            "count": 9
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "68c77c75",
            "date": "2026-05-19",
            "subject": "feat(projects): add project knowledge document APIs"
          },
          {
            "shortSha": "e135276b",
            "date": "2026-05-19",
            "subject": "feat(ui): add project knowledge and agents workspace"
          }
        ]
      }
    },
    {
      "id": "work2-company-foundation",
      "rank": 5,
      "title": "Work2 Company Foundation",
      "domain": "Company Platform",
      "importance": "Critical",
      "value": 91,
      "summary": "Built the Work2 company layer on top of existing primitives: RBAC, onboarding, departments, users, team management, and role-aware UI.",
      "before": "Some invite and membership primitives existed, but the Work2 product layer was not complete.",
      "after": "Companies can onboard owners and employees, manage roles, departments, users, and team flows.",
      "slug": "work2-company-foundation",
      "stats": {
        "commitCount": 11,
        "insertions": 6132,
        "deletions": 1772,
        "filesChanged": 70,
        "firstDate": "2026-04-17",
        "lastDate": "2026-05-14",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 6
          },
          {
            "name": "Refactor",
            "count": 2
          },
          {
            "name": "Test",
            "count": 1
          },
          {
            "name": "Fix",
            "count": 1
          },
          {
            "name": "Docs",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "ui",
            "count": 3
          },
          {
            "name": "server",
            "count": 2
          },
          {
            "name": "onboarding",
            "count": 2
          },
          {
            "name": "access",
            "count": 2
          },
          {
            "name": "shared",
            "count": 1
          },
          {
            "name": "phase2",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "ui",
            "count": 35
          },
          {
            "name": "server",
            "count": 28
          },
          {
            "name": "packages",
            "count": 7
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "e2ebdb21",
            "date": "2026-04-17",
            "subject": "feat(shared): add Work2 role constants, invite types, and validation schemas"
          },
          {
            "shortSha": "a05f4464",
            "date": "2026-04-17",
            "subject": "feat(server): implement Work2 RBAC, onboarding, department, and user routes"
          },
          {
            "shortSha": "35a9e45a",
            "date": "2026-04-17",
            "subject": "test(server): add unit tests for Work2 authz, departments, invites, onboarding, and users"
          },
          {
            "shortSha": "a8d141df",
            "date": "2026-04-17",
            "subject": "feat(ui): add Work2 onboarding wizards, team management, and role-aware UI"
          },
          {
            "shortSha": "a63b7c4d",
            "date": "2026-04-18",
            "subject": "feat(phase2): wire /world route and post-onboarding navigation"
          },
          {
            "shortSha": "8c1160ab",
            "date": "2026-04-28",
            "subject": "feat(ui): surface company fetch errors and improve onboarding company pick"
          },
          {
            "shortSha": "64289df8",
            "date": "2026-04-28",
            "subject": "feat(ui): add settings shortcut to onboarding for company switch"
          },
          {
            "shortSha": "5ef36a5c",
            "date": "2026-05-14",
            "subject": "refactor(access): split invite and join routes"
          }
        ]
      }
    },
    {
      "id": "artifact-delivery-publishing",
      "rank": 6,
      "title": "Artifact Delivery And Publishing",
      "domain": "Artifacts",
      "importance": "Critical",
      "value": 90,
      "summary": "Created the path from agent output to previewable, quality-checked, publishable web artifacts.",
      "before": "Generated work products existed in a less structured delivery flow.",
      "after": "Artifacts have delivery intent, previews, quality summaries, HTML bundling, GitHub Pages support, and publishing readiness.",
      "slug": "artifact-delivery-and-publishing",
      "stats": {
        "commitCount": 34,
        "insertions": 23746,
        "deletions": 1931,
        "filesChanged": 262,
        "firstDate": "2026-04-21",
        "lastDate": "2026-05-16",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 22
          },
          {
            "name": "Fix",
            "count": 3
          },
          {
            "name": "Chore",
            "count": 2
          },
          {
            "name": "Docs",
            "count": 2
          },
          {
            "name": "Style",
            "count": 2
          },
          {
            "name": "Plan",
            "count": 1
          },
          {
            "name": "Test",
            "count": 1
          },
          {
            "name": "Ops",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "ui",
            "count": 8
          },
          {
            "name": "unscoped",
            "count": 6
          },
          {
            "name": "server",
            "count": 5
          },
          {
            "name": "artifacts",
            "count": 4
          },
          {
            "name": "shared",
            "count": 2
          },
          {
            "name": "git",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "server",
            "count": 126
          },
          {
            "name": "ui",
            "count": 106
          },
          {
            "name": "packages",
            "count": 15
          },
          {
            "name": "scripts",
            "count": 4
          },
          {
            "name": "artifacts",
            "count": 4
          },
          {
            "name": "docs",
            "count": 3
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "ca583ecf",
            "date": "2026-04-23",
            "subject": "feat(server): add artifact service and wire work products, MIME, and exports"
          },
          {
            "shortSha": "4a19f8b3",
            "date": "2026-04-23",
            "subject": "feat(server): issues API for delivery/preview, health depth, and app wiring"
          },
          {
            "shortSha": "971fe2ef",
            "date": "2026-04-23",
            "subject": "feat(ui): delivery store, HUD panels, preview routes, and issue/manager APIs"
          },
          {
            "shortSha": "330f2d55",
            "date": "2026-04-23",
            "subject": "feat: task web/artifact heuristics, delivery hardening, Artifacts UI"
          },
          {
            "shortSha": "e164800d",
            "date": "2026-04-26",
            "subject": "artifact publish"
          },
          {
            "shortSha": "4d03c3be",
            "date": "2026-04-26",
            "subject": "feat(shared): Blocks env helpers and artifact publish secret names"
          },
          {
            "shortSha": "795b2919",
            "date": "2026-04-26",
            "subject": "feat(server): per-company artifact publish resolve, GitHub Pages, and readiness API"
          },
          {
            "shortSha": "1ff5a74e",
            "date": "2026-04-26",
            "subject": "feat(ui): company settings for artifact publish and related panels"
          }
        ]
      }
    },
    {
      "id": "task-issue-workflow",
      "rank": 7,
      "title": "Task And Issue Workflow",
      "domain": "Execution Management",
      "importance": "Critical",
      "value": 88,
      "summary": "Expanded issues into executable task surfaces with assignment, outcomes, timelines, repair tools, and richer list interactions.",
      "before": "Issues tracked work, but had less execution intelligence and less task-focused UI.",
      "after": "Tasks and issues carry assignment state, output quality, work briefs, run timelines, bulk actions, and rerun tooling.",
      "slug": "task-and-issue-workflow",
      "stats": {
        "commitCount": 35,
        "insertions": 42262,
        "deletions": 6807,
        "filesChanged": 272,
        "firstDate": "2026-04-16",
        "lastDate": "2026-05-19",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 15
          },
          {
            "name": "Fix",
            "count": 6
          },
          {
            "name": "Test",
            "count": 4
          },
          {
            "name": "Ops",
            "count": 2
          },
          {
            "name": "Refactor",
            "count": 2
          },
          {
            "name": "Docs",
            "count": 1
          },
          {
            "name": "Other",
            "count": 1
          },
          {
            "name": "Chore",
            "count": 1
          },
          {
            "name": "Shared",
            "count": 1
          },
          {
            "name": "Server",
            "count": 1
          },
          {
            "name": "Tasks",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "unscoped",
            "count": 8
          },
          {
            "name": "server",
            "count": 5
          },
          {
            "name": "ui",
            "count": 4
          },
          {
            "name": "ui-world",
            "count": 2
          },
          {
            "name": "issues",
            "count": 2
          },
          {
            "name": "shared",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "ui",
            "count": 112
          },
          {
            "name": "server",
            "count": 105
          },
          {
            "name": "packages",
            "count": 34
          },
          {
            "name": "docs",
            "count": 12
          },
          {
            "name": "artifacts",
            "count": 3
          },
          {
            "name": "vitest.config.ts",
            "count": 1
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "aeb06a6c",
            "date": "2026-04-16",
            "subject": "feat(ui): add multi-select and bulk delete to issues list"
          },
          {
            "shortSha": "90d3b9ef",
            "date": "2026-04-21",
            "subject": "feat(ui): World task tray, DnD assignment, and task bubbles"
          },
          {
            "shortSha": "5513d862",
            "date": "2026-04-21",
            "subject": "feat: Phase 4 + Phase 5 — tasks/assignments, XP, coins, leaderboard, world UI"
          },
          {
            "shortSha": "bc6bed29",
            "date": "2026-04-23",
            "subject": "feat(shared): extend issue types, validators, and socket events for delivery"
          },
          {
            "shortSha": "d116f32b",
            "date": "2026-04-23",
            "subject": "feat(ui): world 3D labels, task bubble, back-wall signage, ManagerIntake controls"
          },
          {
            "shortSha": "2babcb40",
            "date": "2026-04-25",
            "subject": "feat(ui-world): agent and employee visuals, task bubbles, canvas and shell"
          },
          {
            "shortSha": "fc039cf3",
            "date": "2026-04-25",
            "subject": "feat(ui-world): wall-mounted live task carousel in department zoom"
          },
          {
            "shortSha": "3256be7b",
            "date": "2026-04-27",
            "subject": "agent working highlight issue fix"
          }
        ]
      }
    },
    {
      "id": "llm-routing-budgeting",
      "rank": 8,
      "title": "LLM Routing, Budgets, And Model Control",
      "domain": "Model Platform",
      "importance": "High",
      "value": 86,
      "summary": "Added model/provider routing, Kimi and OpenAI-compatible transport, per-task overrides, and budget controls.",
      "before": "Model execution was less flexible and less governed.",
      "after": "Tasks and issues can route by profile, provider, model tier, budget, and explicit override.",
      "slug": "llm-routing-budgets-and-model-control",
      "stats": {
        "commitCount": 24,
        "insertions": 13237,
        "deletions": 2071,
        "filesChanged": 181,
        "firstDate": "2026-04-21",
        "lastDate": "2026-05-16",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 13
          },
          {
            "name": "Fix",
            "count": 3
          },
          {
            "name": "Plan",
            "count": 2
          },
          {
            "name": "Refactor",
            "count": 1
          },
          {
            "name": "Docs",
            "count": 1
          },
          {
            "name": "Test",
            "count": 1
          },
          {
            "name": "Chore",
            "count": 1
          },
          {
            "name": "Style",
            "count": 1
          },
          {
            "name": "Theme",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "unscoped",
            "count": 7
          },
          {
            "name": "server",
            "count": 6
          },
          {
            "name": "ui",
            "count": 3
          },
          {
            "name": "llm",
            "count": 2
          },
          {
            "name": "db",
            "count": 1
          },
          {
            "name": "ops",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "server",
            "count": 117
          },
          {
            "name": "ui",
            "count": 39
          },
          {
            "name": "packages",
            "count": 17
          },
          {
            "name": "docs",
            "count": 3
          },
          {
            "name": "IMPLEMENTATION_STATUS.md",
            "count": 1
          },
          {
            "name": ".env.example",
            "count": 1
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "36f2bea7",
            "date": "2026-04-21",
            "subject": "feat(ui): introduce BLOCKS design tokens and theme foundation"
          },
          {
            "shortSha": "a18b2fc7",
            "date": "2026-04-29",
            "subject": "feat(db): add budget policy and incident tables"
          },
          {
            "shortSha": "c75cfbad",
            "date": "2026-04-29",
            "subject": "feat(server): add budgeting domain services"
          },
          {
            "shortSha": "b26f29f5",
            "date": "2026-04-29",
            "subject": "refactor(server): export new budgeting and project services"
          },
          {
            "shortSha": "7f141af8",
            "date": "2026-04-29",
            "subject": "feat(server): expose budgeting and cost routes"
          },
          {
            "shortSha": "6456eeda",
            "date": "2026-04-29",
            "subject": "feat(ops): restore dashboard cost and budget summary signals"
          },
          {
            "shortSha": "5dfc7f58",
            "date": "2026-05-01",
            "subject": "plan G3: shared instance LLM defaults and experimental flags"
          },
          {
            "shortSha": "9dc3dd4b",
            "date": "2026-05-01",
            "subject": "plan G5: LLM Anthropic, execution budget, instance settings merge + UI"
          }
        ]
      }
    },
    {
      "id": "world-realtime-presence",
      "rank": 9,
      "title": "3D World, Presence, And Voice",
      "domain": "Virtual Workplace",
      "importance": "High",
      "value": 84,
      "summary": "Built a 3D campus that turns agents, departments, tasks, presence, and voice into a spatial workplace.",
      "before": "The repo did not have the full R3F virtual workplace experience.",
      "after": "The world includes buildings, characters, HUD, task bubbles, presence, voice, weather, and cinematic polish.",
      "slug": "3d-world-presence-and-voice",
      "stats": {
        "commitCount": 43,
        "insertions": 20105,
        "deletions": 3981,
        "filesChanged": 345,
        "firstDate": "2026-04-18",
        "lastDate": "2026-05-16",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 29
          },
          {
            "name": "Fix",
            "count": 4
          },
          {
            "name": "Chore",
            "count": 2
          },
          {
            "name": "Test",
            "count": 2
          },
          {
            "name": "Style",
            "count": 2
          },
          {
            "name": "Other",
            "count": 1
          },
          {
            "name": "Revert",
            "count": 1
          },
          {
            "name": "Plan",
            "count": 1
          },
          {
            "name": "World",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "ui",
            "count": 11
          },
          {
            "name": "world",
            "count": 8
          },
          {
            "name": "unscoped",
            "count": 6
          },
          {
            "name": "phase2",
            "count": 5
          },
          {
            "name": "ui-world",
            "count": 4
          },
          {
            "name": "server",
            "count": 3
          }
        ],
        "topDirectories": [
          {
            "name": "ui",
            "count": 275
          },
          {
            "name": "server",
            "count": 32
          },
          {
            "name": "packages",
            "count": 26
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 5
          },
          {
            "name": "scripts",
            "count": 3
          },
          {
            "name": "e2e",
            "count": 2
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "75a00f88",
            "date": "2026-04-18",
            "subject": "feat(phase2): add R3F dependencies and type declarations"
          },
          {
            "shortSha": "e77fa9d8",
            "date": "2026-04-18",
            "subject": "feat(phase2): implement world state store with Zustand"
          },
          {
            "shortSha": "292a9875",
            "date": "2026-04-18",
            "subject": "feat(phase2): implement campus scene foundation — layout, canvas, lighting, ground"
          },
          {
            "shortSha": "af133651",
            "date": "2026-04-18",
            "subject": "feat(phase2): implement 3D department buildings, HQ lobby, and camera zoom"
          },
          {
            "shortSha": "417ce21c",
            "date": "2026-04-18",
            "subject": "feat(phase2): implement agent/employee characters, HUD overlay, minimap, and department tabs"
          },
          {
            "shortSha": "ee2cef9f",
            "date": "2026-04-19",
            "subject": "feat(shared): add socket event types and departmentId to agent schema"
          },
          {
            "shortSha": "01b70a6d",
            "date": "2026-04-19",
            "subject": "feat(server): add Socket.io real-time server with company-scoped room auth"
          },
          {
            "shortSha": "c7e283a1",
            "date": "2026-04-19",
            "subject": "feat(ui): wire Socket.io client and live agent behavioral states into world store"
          }
        ]
      }
    },
    {
      "id": "workspace-blocks-ui",
      "rank": 10,
      "title": "BLOCKS Workspace And Visual System",
      "domain": "Product Experience",
      "importance": "High",
      "value": 82,
      "summary": "Transformed the app into a BLOCKS-style command center with refined navigation, panels, tokens, and motion.",
      "before": "The UI was functional but less unified and less portfolio-grade.",
      "after": "The workplace, sidebars, panels, cards, light mode, and high-frequency transitions share a cohesive design language.",
      "slug": "blocks-workspace-and-visual-system",
      "stats": {
        "commitCount": 42,
        "insertions": 20178,
        "deletions": 6115,
        "filesChanged": 389,
        "firstDate": "2026-04-21",
        "lastDate": "2026-05-19",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 11
          },
          {
            "name": "Chore",
            "count": 6
          },
          {
            "name": "UI",
            "count": 5
          },
          {
            "name": "Plan",
            "count": 4
          },
          {
            "name": "Fix",
            "count": 3
          },
          {
            "name": "Refactor",
            "count": 2
          },
          {
            "name": "Style",
            "count": 2
          },
          {
            "name": "Polish",
            "count": 2
          },
          {
            "name": "Theme",
            "count": 2
          },
          {
            "name": "Test",
            "count": 1
          },
          {
            "name": "Other",
            "count": 1
          },
          {
            "name": "Inbox",
            "count": 1
          },
          {
            "name": "Directory",
            "count": 1
          },
          {
            "name": "Docs",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "unscoped",
            "count": 16
          },
          {
            "name": "ui",
            "count": 14
          },
          {
            "name": "db",
            "count": 2
          },
          {
            "name": "scripts",
            "count": 2
          },
          {
            "name": "ui-agent",
            "count": 2
          },
          {
            "name": "platform",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "ui",
            "count": 331
          },
          {
            "name": "server",
            "count": 30
          },
          {
            "name": "packages",
            "count": 11
          },
          {
            "name": "scripts",
            "count": 8
          },
          {
            "name": "e2e",
            "count": 2
          },
          {
            "name": "package.json",
            "count": 1
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "e5d302f0",
            "date": "2026-04-21",
            "subject": "test: Vitest workspace config, Playwright e2e, and db scripts"
          },
          {
            "shortSha": "79c22947",
            "date": "2026-04-21",
            "subject": "feat(platform): support BLOCKS env vars and dual HTML branding markers"
          },
          {
            "shortSha": "e97695f5",
            "date": "2026-04-21",
            "subject": "feat(ui): roll out BLOCKS design system across shell and features"
          },
          {
            "shortSha": "b0a0b334",
            "date": "2026-04-21",
            "subject": "feat(ui): group sidebar agents by department"
          },
          {
            "shortSha": "db50cdc1",
            "date": "2026-04-29",
            "subject": "feat(db): add project workspace node schema"
          },
          {
            "shortSha": "3340b6f2",
            "date": "2026-04-29",
            "subject": "feat(projects): redesign projects index as directory cards"
          },
          {
            "shortSha": "c41d9557",
            "date": "2026-04-29",
            "subject": "feat(workplace-ui): replace dashboard widgets with directory hub sections"
          },
          {
            "shortSha": "a8c96beb",
            "date": "2026-04-29",
            "subject": "feat(ui): refresh board chrome and blocks theme styling"
          }
        ]
      }
    },
    {
      "id": "project-summaries-contributions",
      "rank": 11,
      "title": "Project Summaries And Contribution Dossiers",
      "domain": "Project Intelligence",
      "importance": "High",
      "value": 80,
      "summary": "Added durable project summaries, revisions, freshness metadata, and agent contribution tracking.",
      "before": "Project state was available, but not distilled into reusable dossiers.",
      "after": "Projects can produce human-readable summaries and contribution records that feed chat and review.",
      "slug": "project-summaries-and-contribution-dossiers",
      "stats": {
        "commitCount": 2,
        "insertions": 1915,
        "deletions": 77,
        "filesChanged": 24,
        "firstDate": "2026-05-13",
        "lastDate": "2026-05-14",
        "categoryBreakdown": [
          {
            "name": "UI",
            "count": 1
          },
          {
            "name": "Fix",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "unscoped",
            "count": 1
          },
          {
            "name": "runs",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "server",
            "count": 11
          },
          {
            "name": "ui",
            "count": 9
          },
          {
            "name": "packages",
            "count": 4
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "83258814",
            "date": "2026-05-13",
            "subject": "ui: project summaries API, query keys, and routing tabs"
          }
        ]
      }
    },
    {
      "id": "skills-harness",
      "rank": 12,
      "title": "Skills Harness And Learning Loop",
      "domain": "Agent Learning",
      "importance": "High",
      "value": 78,
      "summary": "Added trajectory capture, skill distillation, retrieval, proposals, health, and configuration surfaces.",
      "before": "Agent skill learning was not a full reviewable workflow.",
      "after": "The system can capture trajectories, distill skills, rank retrieval, and review proposals.",
      "slug": "skills-harness-and-learning-loop",
      "stats": {
        "commitCount": 14,
        "insertions": 6768,
        "deletions": 574,
        "filesChanged": 86,
        "firstDate": "2026-04-29",
        "lastDate": "2026-05-16",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 6
          },
          {
            "name": "Chore",
            "count": 2
          },
          {
            "name": "Fix",
            "count": 2
          },
          {
            "name": "Plan",
            "count": 1
          },
          {
            "name": "Docs",
            "count": 1
          },
          {
            "name": "Other",
            "count": 1
          },
          {
            "name": "UI",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "skills-harness",
            "count": 6
          },
          {
            "name": "skills",
            "count": 3
          },
          {
            "name": "unscoped",
            "count": 3
          },
          {
            "name": "repo",
            "count": 1
          },
          {
            "name": "settings",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "server",
            "count": 31
          },
          {
            "name": "ui",
            "count": 22
          },
          {
            "name": "skills",
            "count": 14
          },
          {
            "name": "packages",
            "count": 12
          },
          {
            "name": "docs",
            "count": 4
          },
          {
            "name": ".gitignore",
            "count": 2
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "2628a0b2",
            "date": "2026-04-29",
            "subject": "feat(skills): persist and materialize company-managed agent skills"
          },
          {
            "shortSha": "81f966e0",
            "date": "2026-05-01",
            "subject": "plan G19: company settings and skills pages"
          },
          {
            "shortSha": "fd5fcb04",
            "date": "2026-05-11",
            "subject": "feat(skills-harness): trajectory capture pipeline"
          },
          {
            "shortSha": "edbd1b9f",
            "date": "2026-05-11",
            "subject": "feat(skills-harness): bundled skills library and build-time copy script"
          },
          {
            "shortSha": "101eade8",
            "date": "2026-05-11",
            "subject": "feat(skills-harness): Skill Proposals Review UI"
          },
          {
            "shortSha": "9011b692",
            "date": "2026-05-11",
            "subject": "script: trigger-and-watch harness smoke driver"
          },
          {
            "shortSha": "0c6fdc45",
            "date": "2026-05-11",
            "subject": "feat(skills-harness): add harness health endpoint"
          },
          {
            "shortSha": "d57666f4",
            "date": "2026-05-11",
            "subject": "feat(settings): expose harness configuration page"
          }
        ]
      }
    },
    {
      "id": "project-workspaces-files",
      "rank": 13,
      "title": "Project Workspaces, Files, And Trees",
      "domain": "Project Platform",
      "importance": "High",
      "value": 76,
      "summary": "Made project spaces more durable with nodes, file browsing, deletion cleanup, memory journals, and project detail surfaces.",
      "before": "Project pages existed, but were less structured and less connected to execution outputs.",
      "after": "Project trees, files, journals, workspaces, and linked artifacts form a stronger project operating model.",
      "slug": "project-workspaces-files-and-trees",
      "stats": {
        "commitCount": 6,
        "insertions": 4931,
        "deletions": 2599,
        "filesChanged": 41,
        "firstDate": "2026-04-29",
        "lastDate": "2026-05-14",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 5
          },
          {
            "name": "Refactor",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "projects",
            "count": 2
          },
          {
            "name": "ui",
            "count": 2
          },
          {
            "name": "server",
            "count": 1
          },
          {
            "name": "ui-projects",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "ui",
            "count": 35
          },
          {
            "name": "server",
            "count": 5
          },
          {
            "name": "e2e",
            "count": 1
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "df7ac4c6",
            "date": "2026-04-29",
            "subject": "feat(server): add project node service and API surface"
          },
          {
            "shortSha": "c14c56f9",
            "date": "2026-04-29",
            "subject": "feat(projects): add project files browser and owner delete actions"
          },
          {
            "shortSha": "72670d44",
            "date": "2026-05-06",
            "subject": "feat(ui): split ticket and project context surfaces"
          },
          {
            "shortSha": "0abded52",
            "date": "2026-05-07",
            "subject": "feat(ui-projects): refresh project hub and project detail surfaces"
          },
          {
            "shortSha": "ae35a04e",
            "date": "2026-05-14",
            "subject": "feat(projects): enrich project context surfaces"
          },
          {
            "shortSha": "10f8fb5e",
            "date": "2026-05-14",
            "subject": "refactor(ui): split project detail page"
          }
        ]
      }
    },
    {
      "id": "department-workspace",
      "rank": 14,
      "title": "Department Workspace",
      "domain": "Company Platform",
      "importance": "Medium High",
      "value": 72,
      "summary": "Expanded departments into hubs with metrics, cards, charts, quick actions, and visual identity.",
      "before": "Departments were more list-like and less operational.",
      "after": "Departments have hub cards, metrics, charts, navigation, and world-aligned visual treatment.",
      "slug": "department-workspace",
      "stats": {
        "commitCount": 3,
        "insertions": 1085,
        "deletions": 650,
        "filesChanged": 11,
        "firstDate": "2026-04-29",
        "lastDate": "2026-05-07",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 3
          }
        ],
        "topScopes": [
          {
            "name": "departments",
            "count": 1
          },
          {
            "name": "departments-ui",
            "count": 1
          },
          {
            "name": "ui-departments",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "ui",
            "count": 10
          },
          {
            "name": "server",
            "count": 1
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "6fac19a7",
            "date": "2026-04-29",
            "subject": "feat(departments): add department metrics endpoint and hub data hook"
          },
          {
            "shortSha": "ec083bd2",
            "date": "2026-04-29",
            "subject": "feat(departments-ui): replace department list with hub cards"
          },
          {
            "shortSha": "7156ba56",
            "date": "2026-05-07",
            "subject": "feat(ui-departments): refresh department list/detail and hub card flow"
          }
        ]
      }
    },
    {
      "id": "agent-ui-portraits",
      "rank": 15,
      "title": "Agent UI, Portraits, And Directory",
      "domain": "Agent Experience",
      "importance": "Medium High",
      "value": 70,
      "summary": "Made agents feel configurable and inspectable with portraits, previews, detail panels, sorting, and directory polish.",
      "before": "Agent management was more utilitarian.",
      "after": "Agents have richer cards, portraits, route-aware panels, run views, peer rails, and creation previews.",
      "slug": "agent-ui-portraits-and-directory",
      "stats": {
        "commitCount": 4,
        "insertions": 6441,
        "deletions": 5206,
        "filesChanged": 36,
        "firstDate": "2026-05-03",
        "lastDate": "2026-05-14",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 3
          },
          {
            "name": "Refactor",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "portraits",
            "count": 1
          },
          {
            "name": "unscoped",
            "count": 1
          },
          {
            "name": "ui-agent",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "ui",
            "count": 34
          },
          {
            "name": "packages",
            "count": 2
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "40a567d1",
            "date": "2026-05-03",
            "subject": "feat(portraits): add agent portrait system with sprite picker"
          },
          {
            "shortSha": "f48b0aa1",
            "date": "2026-05-04",
            "subject": "feat: HiDPI portrait rendering with devicePixelRatio cover math and cache-busting"
          },
          {
            "shortSha": "18e6704d",
            "date": "2026-05-07",
            "subject": "feat(ui-agent): add agent detail route state helpers"
          },
          {
            "shortSha": "63081adc",
            "date": "2026-05-14",
            "subject": "refactor(ui): split agent detail page"
          }
        ]
      }
    },
    {
      "id": "quality-devtools-tests",
      "rank": 16,
      "title": "Quality, Tests, And Developer Tooling",
      "domain": "Engineering System",
      "importance": "Medium",
      "value": 68,
      "summary": "Added smoke tests, E2E coverage, verification scripts, benchmark/eval artifacts, and local QA tools.",
      "before": "Verification existed but did not cover many new execution and UI flows.",
      "after": "The repo has broader tests and practical tooling for checking delivery, routes, memory, mission, and artifacts.",
      "slug": "quality-tests-and-developer-tooling",
      "stats": {
        "commitCount": 18,
        "insertions": 13538,
        "deletions": 639,
        "filesChanged": 103,
        "firstDate": "2026-04-16",
        "lastDate": "2026-05-14",
        "categoryBreakdown": [
          {
            "name": "Chore",
            "count": 5
          },
          {
            "name": "Docs",
            "count": 4
          },
          {
            "name": "Fix",
            "count": 4
          },
          {
            "name": "Plan",
            "count": 2
          },
          {
            "name": "Other",
            "count": 1
          },
          {
            "name": "Database",
            "count": 1
          },
          {
            "name": "Test",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "unscoped",
            "count": 7
          },
          {
            "name": "server",
            "count": 2
          },
          {
            "name": "phase2",
            "count": 1
          },
          {
            "name": "phase3",
            "count": 1
          },
          {
            "name": "phase4",
            "count": 1
          },
          {
            "name": "tooling",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "ui",
            "count": 36
          },
          {
            "name": "docs",
            "count": 15
          },
          {
            "name": "server",
            "count": 14
          },
          {
            "name": "packages",
            "count": 13
          },
          {
            "name": "scripts",
            "count": 10
          },
          {
            "name": ".gitignore",
            "count": 3
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "dc225ebf",
            "date": "2026-04-28",
            "subject": "test"
          },
          {
            "shortSha": "3952fcfd",
            "date": "2026-05-01",
            "subject": "plan G14: DB backup lib test hardening"
          },
          {
            "shortSha": "2fe01949",
            "date": "2026-05-01",
            "subject": "plan G24: prompt-builder test updates (server)"
          },
          {
            "shortSha": "a9dcfc02",
            "date": "2026-05-13",
            "subject": "db: add SQL migrations 0071-0075 and embedded roster query script"
          },
          {
            "shortSha": "a65c8050",
            "date": "2026-05-14",
            "subject": "test(server): allow integration tests more time"
          }
        ]
      }
    },
    {
      "id": "schema-shared-types",
      "rank": 17,
      "title": "Schemas And Shared Contracts",
      "domain": "Architecture",
      "importance": "Medium",
      "value": 66,
      "summary": "Expanded the database and shared type layer to support agents, memory, projects, budgets, chat, documents, and outcomes.",
      "before": "The stripped baseline had fewer bounded contracts.",
      "after": "Core product features are backed by typed schemas, validators, and migrations.",
      "slug": "schemas-and-shared-contracts",
      "stats": {
        "commitCount": 9,
        "insertions": 36788,
        "deletions": 646,
        "filesChanged": 65,
        "firstDate": "2026-04-16",
        "lastDate": "2026-05-13",
        "categoryBreakdown": [
          {
            "name": "Fix",
            "count": 4
          },
          {
            "name": "Feature",
            "count": 3
          },
          {
            "name": "Database",
            "count": 2
          }
        ],
        "topScopes": [
          {
            "name": "db",
            "count": 6
          },
          {
            "name": "unscoped",
            "count": 2
          },
          {
            "name": "db,shared",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "packages",
            "count": 61
          },
          {
            "name": "package.json",
            "count": 2
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 1
          },
          {
            "name": "server",
            "count": 1
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "e857ba55",
            "date": "2026-04-16",
            "subject": "feat(db): implement Phase 0 foundational schema and shared types"
          },
          {
            "shortSha": "bc2d6ab4",
            "date": "2026-04-23",
            "subject": "feat(db): add manager_history table and Drizzle schema (migration 0059)"
          },
          {
            "shortSha": "7284c226",
            "date": "2026-04-28",
            "subject": "feat(db): add restore CLI and wire pnpm db:restore"
          },
          {
            "shortSha": "552274eb",
            "date": "2026-05-13",
            "subject": "db: journal snapshot and new Drizzle schema tables"
          },
          {
            "shortSha": "ba989aed",
            "date": "2026-05-13",
            "subject": "db: wire new tables into schema index and project_memories"
          }
        ]
      }
    },
    {
      "id": "security-runtime-hardening",
      "rank": 18,
      "title": "Security, Runtime, And Deployment Hardening",
      "domain": "Operations",
      "importance": "Medium",
      "value": 64,
      "summary": "Tightened dependencies, auth behavior, config loading, SaaS gates, Docker, and production readiness.",
      "before": "There were more local assumptions and vulnerable transitive dependencies.",
      "after": "The app has safer runtime behavior, pinned dependency overrides, cleaner config, and deployment-oriented gates.",
      "slug": "security-runtime-and-deployment-hardening",
      "stats": {
        "commitCount": 13,
        "insertions": 3532,
        "deletions": 709,
        "filesChanged": 85,
        "firstDate": "2026-04-16",
        "lastDate": "2026-05-14",
        "categoryBreakdown": [
          {
            "name": "Fix",
            "count": 6
          },
          {
            "name": "Chore",
            "count": 3
          },
          {
            "name": "Docs",
            "count": 2
          },
          {
            "name": "Feature",
            "count": 2
          }
        ],
        "topScopes": [
          {
            "name": "unscoped",
            "count": 5
          },
          {
            "name": "ui",
            "count": 2
          },
          {
            "name": "deps",
            "count": 2
          },
          {
            "name": "config",
            "count": 1
          },
          {
            "name": "routing",
            "count": 1
          },
          {
            "name": "capacity",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "server",
            "count": 30
          },
          {
            "name": "ui",
            "count": 26
          },
          {
            "name": "packages",
            "count": 16
          },
          {
            "name": "docs",
            "count": 2
          },
          {
            "name": "package.json",
            "count": 2
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 2
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "eda4885d",
            "date": "2026-05-04",
            "subject": "feat(ui): gate CLI fields by adapter and add gamified runtime labels"
          },
          {
            "shortSha": "042e76da",
            "date": "2026-05-06",
            "subject": "feat(routing): harden execution authority and context persistence"
          }
        ]
      }
    },
    {
      "id": "architecture-refactors",
      "rank": 19,
      "title": "Architecture Refactors",
      "domain": "Maintainability",
      "importance": "Medium",
      "value": 62,
      "summary": "Split oversized services, routes, and pages into maintainable modules without changing the product promise.",
      "before": "Several files had grown into large mixed-responsibility modules.",
      "after": "Heartbeat, chat, issues, agents, access, inbox, and project detail are easier to reason about and test.",
      "slug": "architecture-refactors",
      "stats": {
        "commitCount": 5,
        "insertions": 6957,
        "deletions": 5651,
        "filesChanged": 33,
        "firstDate": "2026-05-03",
        "lastDate": "2026-05-14",
        "categoryBreakdown": [
          {
            "name": "Refactor",
            "count": 5
          }
        ],
        "topScopes": [
          {
            "name": "agents",
            "count": 2
          },
          {
            "name": "settings",
            "count": 1
          },
          {
            "name": "routes",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "server",
            "count": 19
          },
          {
            "name": "ui",
            "count": 14
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "467fc0ec",
            "date": "2026-05-03",
            "subject": "refactor(settings): split CompanySettings into InstanceExperimentalSettings"
          },
          {
            "shortSha": "d0b6df55",
            "date": "2026-05-14",
            "subject": "refactor(routes): move direct mutations behind services"
          },
          {
            "shortSha": "2c8fef4e",
            "date": "2026-05-14",
            "subject": "refactor(agents): split route groups"
          },
          {
            "shortSha": "13ccfc92",
            "date": "2026-05-14",
            "subject": "refactor(agents): move route read models into service"
          },
          {
            "shortSha": "0d646214",
            "date": "2026-05-14",
            "subject": "refactor(ui): split inbox page"
          }
        ]
      }
    },
    {
      "id": "docs-planning-demo",
      "rank": 20,
      "title": "Planning, Documentation, And Demo Assets",
      "domain": "Product Narrative",
      "importance": "Medium Low",
      "value": 56,
      "summary": "Captured product thinking, implementation plans, handoffs, demo kits, and architecture notes.",
      "before": "Less of the product direction was recorded in the repo.",
      "after": "The repo contains supporting PRDs, guides, plans, handoffs, and demo resources.",
      "slug": "planning-documentation-and-demo-assets",
      "stats": {
        "commitCount": 10,
        "insertions": 12799,
        "deletions": 126,
        "filesChanged": 63,
        "firstDate": "2026-04-15",
        "lastDate": "2026-05-13",
        "categoryBreakdown": [
          {
            "name": "Docs",
            "count": 3
          },
          {
            "name": "Plan",
            "count": 3
          },
          {
            "name": "Other",
            "count": 2
          },
          {
            "name": "Chore",
            "count": 1
          },
          {
            "name": "Merge",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "unscoped",
            "count": 9
          },
          {
            "name": "plans",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "docs",
            "count": 27
          },
          {
            "name": "server",
            "count": 12
          },
          {
            "name": "ui",
            "count": 7
          },
          {
            "name": "\"docs",
            "count": 6
          },
          {
            "name": "examples",
            "count": 6
          },
          {
            "name": ".cursor",
            "count": 2
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "23ea480b",
            "date": "2026-04-16",
            "subject": "updating docs"
          },
          {
            "shortSha": "7591753e",
            "date": "2026-04-18",
            "subject": "updating docs, and adding storyboard (included full break down of phase 2)"
          },
          {
            "shortSha": "a29e62e5",
            "date": "2026-05-01",
            "subject": "plan G1: repo hygiene, manager policy doc, Cursor agent rules"
          },
          {
            "shortSha": "5015e450",
            "date": "2026-05-01",
            "subject": "plan G6: Cursor CLI adapter, registry integration, UI parse helpers"
          },
          {
            "shortSha": "9b416c48",
            "date": "2026-05-01",
            "subject": "plan G25: examples static HTML demos"
          },
          {
            "shortSha": "591aa7d1",
            "date": "2026-05-04",
            "subject": "Merge conflict resolution plan and impelmentaiton"
          }
        ]
      }
    },
    {
      "id": "miscellaneous",
      "rank": 99,
      "title": "Supporting Fixes And Miscellaneous Work",
      "domain": "General",
      "importance": "Supporting",
      "value": 35,
      "summary": "Small fixes, merges, cleanup, and glue work that kept the broader program moving.",
      "before": "Normal product churn and integration gaps.",
      "after": "Resolved edge cases, merge conflicts, polish gaps, and miscellaneous project support tasks.",
      "slug": "supporting-fixes-and-miscellaneous-work",
      "stats": {
        "commitCount": 20,
        "insertions": 11067,
        "deletions": 3880,
        "filesChanged": 200,
        "firstDate": "2026-04-15",
        "lastDate": "2026-05-16",
        "categoryBreakdown": [
          {
            "name": "Feature",
            "count": 6
          },
          {
            "name": "Fix",
            "count": 4
          },
          {
            "name": "Chore",
            "count": 4
          },
          {
            "name": "Other",
            "count": 2
          },
          {
            "name": "UI",
            "count": 2
          },
          {
            "name": "Merge",
            "count": 1
          },
          {
            "name": "Server",
            "count": 1
          }
        ],
        "topScopes": [
          {
            "name": "unscoped",
            "count": 11
          },
          {
            "name": "ui",
            "count": 3
          },
          {
            "name": "server",
            "count": 2
          },
          {
            "name": "shared",
            "count": 1
          },
          {
            "name": "cli-adapters",
            "count": 1
          },
          {
            "name": "cursor",
            "count": 1
          }
        ],
        "topDirectories": [
          {
            "name": "server",
            "count": 93
          },
          {
            "name": "ui",
            "count": 59
          },
          {
            "name": "packages",
            "count": 18
          },
          {
            "name": "scripts",
            "count": 8
          },
          {
            "name": "config",
            "count": 6
          },
          {
            "name": ".cursor",
            "count": 3
          }
        ],
        "sampleCommits": [
          {
            "shortSha": "553a6f81",
            "date": "2026-04-15",
            "subject": "feat: implement agent approval workflow and UI"
          },
          {
            "shortSha": "b8a546ee",
            "date": "2026-04-17",
            "subject": "On Phase0+Phase1: Autostash. Switch from 'Phase0+Phase1' to 'feat/f0-f1-office-ui' 4/17/2026 8:40:52 PM"
          },
          {
            "shortSha": "588c2de5",
            "date": "2026-04-19",
            "subject": "feat(ui): capture departmentId on agent creation form"
          },
          {
            "shortSha": "d808f67b",
            "date": "2026-04-29",
            "subject": "feat(shared): extend project and work-product typed boundaries"
          },
          {
            "shortSha": "5c5b7f34",
            "date": "2026-04-29",
            "subject": "feat(server): add project naming and suggestion logic"
          },
          {
            "shortSha": "95c7d827",
            "date": "2026-05-02",
            "subject": "feat(cli-adapters): dependable Cursor and Claude Code CLI flags and model selection"
          },
          {
            "shortSha": "c5f824c7",
            "date": "2026-05-04",
            "subject": "Merge origin/main: resolve all 12 conflicts, fix version-pinning cache bug"
          },
          {
            "shortSha": "1516578b",
            "date": "2026-05-04",
            "subject": "feat: add POST /:companyId/backup endpoint for manual database snapshots"
          }
        ]
      }
    }
  ],
  "charts": {
    "daily": [
      {
        "date": "2026-04-15",
        "commits": 6,
        "insertions": 1093,
        "deletions": 25,
        "cumulative": 6
      },
      {
        "date": "2026-04-16",
        "commits": 9,
        "insertions": 26841,
        "deletions": 652,
        "cumulative": 15
      },
      {
        "date": "2026-04-17",
        "commits": 8,
        "insertions": 4765,
        "deletions": 157,
        "cumulative": 23
      },
      {
        "date": "2026-04-18",
        "commits": 9,
        "insertions": 4191,
        "deletions": 132,
        "cumulative": 32
      },
      {
        "date": "2026-04-19",
        "commits": 10,
        "insertions": 4814,
        "deletions": 136,
        "cumulative": 42
      },
      {
        "date": "2026-04-20",
        "commits": 2,
        "insertions": 1591,
        "deletions": 60,
        "cumulative": 44
      },
      {
        "date": "2026-04-21",
        "commits": 19,
        "insertions": 17343,
        "deletions": 1388,
        "cumulative": 63
      },
      {
        "date": "2026-04-22",
        "commits": 1,
        "insertions": 4,
        "deletions": 2,
        "cumulative": 64
      },
      {
        "date": "2026-04-23",
        "commits": 20,
        "insertions": 20825,
        "deletions": 2367,
        "cumulative": 84
      },
      {
        "date": "2026-04-25",
        "commits": 8,
        "insertions": 3242,
        "deletions": 1799,
        "cumulative": 92
      },
      {
        "date": "2026-04-26",
        "commits": 10,
        "insertions": 4071,
        "deletions": 911,
        "cumulative": 102
      },
      {
        "date": "2026-04-27",
        "commits": 3,
        "insertions": 1437,
        "deletions": 87,
        "cumulative": 105
      },
      {
        "date": "2026-04-28",
        "commits": 16,
        "insertions": 16276,
        "deletions": 979,
        "cumulative": 121
      },
      {
        "date": "2026-04-29",
        "commits": 36,
        "insertions": 64377,
        "deletions": 3814,
        "cumulative": 157
      },
      {
        "date": "2026-05-01",
        "commits": 30,
        "insertions": 22759,
        "deletions": 3171,
        "cumulative": 187
      },
      {
        "date": "2026-05-02",
        "commits": 8,
        "insertions": 9331,
        "deletions": 495,
        "cumulative": 195
      },
      {
        "date": "2026-05-03",
        "commits": 13,
        "insertions": 15201,
        "deletions": 5866,
        "cumulative": 208
      },
      {
        "date": "2026-05-04",
        "commits": 12,
        "insertions": 10808,
        "deletions": 619,
        "cumulative": 220
      },
      {
        "date": "2026-05-05",
        "commits": 6,
        "insertions": 986,
        "deletions": 55,
        "cumulative": 226
      },
      {
        "date": "2026-05-06",
        "commits": 10,
        "insertions": 22300,
        "deletions": 1215,
        "cumulative": 236
      },
      {
        "date": "2026-05-07",
        "commits": 23,
        "insertions": 12286,
        "deletions": 1801,
        "cumulative": 259
      },
      {
        "date": "2026-05-08",
        "commits": 23,
        "insertions": 4823,
        "deletions": 367,
        "cumulative": 282
      },
      {
        "date": "2026-05-10",
        "commits": 1,
        "insertions": 1790,
        "deletions": 51,
        "cumulative": 283
      },
      {
        "date": "2026-05-11",
        "commits": 23,
        "insertions": 9280,
        "deletions": 470,
        "cumulative": 306
      },
      {
        "date": "2026-05-13",
        "commits": 41,
        "insertions": 30932,
        "deletions": 479,
        "cumulative": 347
      },
      {
        "date": "2026-05-14",
        "commits": 76,
        "insertions": 51257,
        "deletions": 27423,
        "cumulative": 423
      },
      {
        "date": "2026-05-15",
        "commits": 29,
        "insertions": 12322,
        "deletions": 1595,
        "cumulative": 452
      },
      {
        "date": "2026-05-16",
        "commits": 28,
        "insertions": 4735,
        "deletions": 1787,
        "cumulative": 480
      },
      {
        "date": "2026-05-19",
        "commits": 9,
        "insertions": 6391,
        "deletions": 954,
        "cumulative": 489
      }
    ],
    "categories": [
      {
        "name": "Feature",
        "count": 198
      },
      {
        "name": "Fix",
        "count": 66
      },
      {
        "name": "Refactor",
        "count": 38
      },
      {
        "name": "Chore",
        "count": 31
      },
      {
        "name": "Plan",
        "count": 30
      },
      {
        "name": "Test",
        "count": 26
      },
      {
        "name": "Docs",
        "count": 20
      },
      {
        "name": "Other",
        "count": 14
      },
      {
        "name": "UI",
        "count": 14
      },
      {
        "name": "Server",
        "count": 10
      },
      {
        "name": "Mission Studio",
        "count": 10
      },
      {
        "name": "Style",
        "count": 8
      },
      {
        "name": "Database",
        "count": 3
      },
      {
        "name": "Shared",
        "count": 3
      },
      {
        "name": "Ops",
        "count": 3
      },
      {
        "name": "Theme",
        "count": 3
      },
      {
        "name": "Merge",
        "count": 2
      },
      {
        "name": "Polish",
        "count": 2
      },
      {
        "name": "Revert",
        "count": 1
      },
      {
        "name": "World",
        "count": 1
      },
      {
        "name": "Tasks",
        "count": 1
      },
      {
        "name": "Inbox",
        "count": 1
      },
      {
        "name": "Directory",
        "count": 1
      },
      {
        "name": "Mission",
        "count": 1
      },
      {
        "name": "Chat",
        "count": 1
      },
      {
        "name": "Projects",
        "count": 1
      }
    ],
    "scopes": [
      {
        "name": "unscoped",
        "count": 142
      },
      {
        "name": "ui",
        "count": 67
      },
      {
        "name": "server",
        "count": 49
      },
      {
        "name": "chat",
        "count": 39
      },
      {
        "name": "heartbeat",
        "count": 20
      },
      {
        "name": "db",
        "count": 13
      },
      {
        "name": "shared",
        "count": 11
      },
      {
        "name": "world",
        "count": 8
      },
      {
        "name": "skills-harness",
        "count": 8
      },
      {
        "name": "phase2",
        "count": 7
      },
      {
        "name": "ui-world",
        "count": 6
      },
      {
        "name": "manager",
        "count": 6
      },
      {
        "name": "projects",
        "count": 6
      },
      {
        "name": "issues",
        "count": 5
      },
      {
        "name": "skills",
        "count": 4
      },
      {
        "name": "artifacts",
        "count": 4
      },
      {
        "name": "agent-ops",
        "count": 3
      },
      {
        "name": "chat-server",
        "count": 3
      },
      {
        "name": "ui-agent",
        "count": 3
      },
      {
        "name": "runs",
        "count": 3
      },
      {
        "name": "scripts",
        "count": 2
      },
      {
        "name": "routes",
        "count": 2
      },
      {
        "name": "departments",
        "count": 2
      },
      {
        "name": "devtools",
        "count": 2
      }
    ],
    "directories": [
      {
        "name": "ui",
        "count": 1543
      },
      {
        "name": "server",
        "count": 1214
      },
      {
        "name": "packages",
        "count": 331
      },
      {
        "name": "docs",
        "count": 79
      },
      {
        "name": "scripts",
        "count": 37
      },
      {
        "name": "artifacts",
        "count": 19
      },
      {
        "name": "skills",
        "count": 14
      },
      {
        "name": ".gitignore",
        "count": 10
      },
      {
        "name": "pnpm-lock.yaml",
        "count": 10
      },
      {
        "name": "e2e",
        "count": 10
      },
      {
        "name": "package.json",
        "count": 8
      },
      {
        "name": "\"docs",
        "count": 6
      },
      {
        "name": ".cursor",
        "count": 6
      },
      {
        "name": "examples",
        "count": 6
      },
      {
        "name": "config",
        "count": 6
      },
      {
        "name": ".env.example",
        "count": 5
      },
      {
        "name": "IMPLEMENTATION_STATUS.md",
        "count": 2
      },
      {
        "name": "Dockerfile",
        "count": 2
      },
      {
        "name": ".codex",
        "count": 1
      },
      {
        "name": "AGENTS.md",
        "count": 1
      },
      {
        "name": "debug-32ca47.log",
        "count": 1
      },
      {
        "name": "vitest.config.ts",
        "count": 1
      },
      {
        "name": ".dockerignore",
        "count": 1
      },
      {
        "name": ".npmrc",
        "count": 1
      },
      {
        "name": "docker-compose.yaml",
        "count": 1
      },
      {
        "name": ".github",
        "count": 1
      },
      {
        "name": "agent-chat-context-carry.plan.md",
        "count": 1
      },
      {
        "name": ".antigravityignore",
        "count": 1
      },
      {
        "name": ".cursorignore",
        "count": 1
      },
      {
        "name": ".agents",
        "count": 1
      }
    ],
    "refs": [
      {
        "name": "main",
        "count": 485
      },
      {
        "name": "origin",
        "count": 301
      },
      {
        "name": "origin/main",
        "count": 286
      },
      {
        "name": "avatar-blinking-animation",
        "count": 280
      },
      {
        "name": "origin/avatar-blinking-animation",
        "count": 280
      },
      {
        "name": "checkpoint/task-llm-routing-freeze-20260508-0017z",
        "count": 244
      },
      {
        "name": "origin/feat/hosted-paperclip-skills",
        "count": 223
      },
      {
        "name": "origin/phase-4-plus-phase-5",
        "count": 192
      },
      {
        "name": "backup/test-commit-before-reset",
        "count": 104
      },
      {
        "name": "origin/Refactor-for-deployment",
        "count": 89
      },
      {
        "name": "origin/Phase2",
        "count": 56
      },
      {
        "name": "Phase0+Phase1",
        "count": 30
      },
      {
        "name": "origin/Phase0+Phase1",
        "count": 23
      },
      {
        "name": "origin/feat/vwork-updates",
        "count": 15
      },
      {
        "name": "stash",
        "count": 2
      }
    ]
  },
  "commits": [
    {
      "sha": "686d047aadbf7be81148c0113d88f4bce8b1c8ce",
      "shortSha": "686d047a",
      "date": "2026-04-15",
      "subject": "feat: implement code_agent adapter for Claude Code integration",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "implement code_agent adapter for Claude Code integration",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 162,
        "deletions": 9,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "b6b16da05efcaf64c1d7d5175229050f0cb33cb6",
      "shortSha": "b6b16da0",
      "date": "2026-04-15",
      "subject": "fix: stub legacy plugin and instance settings routes",
      "kind": "fix",
      "category": "Fix",
      "scope": null,
      "title": "stub legacy plugin and instance settings routes",
      "featureId": "miscellaneous",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 22,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "553a6f81f009096eb7d672ca112ca61ad1e9f888",
      "shortSha": "553a6f81",
      "date": "2026-04-15",
      "subject": "feat: implement agent approval workflow and UI",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "implement agent approval workflow and UI",
      "featureId": "miscellaneous",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 35,
        "deletions": 4,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          },
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "a9a2bb34f992b97acfd5db89977de3c800aa70cb",
      "shortSha": "a9a2bb34",
      "date": "2026-04-15",
      "subject": "feat: enhance Issue Chat with empty submission and file drop support",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "enhance Issue Chat with empty submission and file drop support",
      "featureId": "mission-studio",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 18,
        "deletions": 4,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "8f62fa306c9556dd5ed543938a5f43e97d5c4c0a",
      "shortSha": "8f62fa30",
      "date": "2026-04-15",
      "subject": "feat: improve heartbeat run lifecycle and telemetry",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "improve heartbeat run lifecycle and telemetry",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 218,
        "deletions": 7,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "10f683245bfc1d28e81843537bf81d8ec3e0fccc",
      "shortSha": "10f68324",
      "date": "2026-04-15",
      "subject": "chore: update vite proxy and add implementation status docs",
      "kind": "chore",
      "category": "Chore",
      "scope": null,
      "title": "update vite proxy and add implementation status docs",
      "featureId": "docs-planning-demo",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 638,
        "deletions": 1,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "IMPLEMENTATION_STATUS.md",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "23ea480baa8ab299e3572229d2135c31201907a5",
      "shortSha": "23ea480b",
      "date": "2026-04-16",
      "subject": "updating docs",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "updating docs",
      "featureId": "docs-planning-demo",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2022,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "7aa31829beb3c766f0f85f161a7034715be388a2",
      "shortSha": "7aa31829",
      "date": "2026-04-16",
      "subject": "chore: DX improvements — gitignore AI tooling, add dev script, fix proxy port",
      "kind": "chore",
      "category": "Chore",
      "scope": null,
      "title": "DX improvements — gitignore AI tooling, add dev script, fix proxy port",
      "featureId": "quality-devtools-tests",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 8,
        "deletions": 1,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": ".gitignore",
            "count": 1
          },
          {
            "name": "package.json",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "aeb06a6cf314340ac93d6b92ec6c17a9c1613922",
      "shortSha": "aeb06a6c",
      "date": "2026-04-16",
      "subject": "feat(ui): add multi-select and bulk delete to issues list",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "add multi-select and bulk delete to issues list",
      "featureId": "task-issue-workflow",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 66,
        "deletions": 3,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "07732d01ba20aa802976edb05dbeabbb40d6de7b",
      "shortSha": "07732d01",
      "date": "2026-04-16",
      "subject": "docs: audit and fix Dev Tracker, add MVP Roadmap and PRD v2 docs",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "audit and fix Dev Tracker, add MVP Roadmap and PRD v2 docs",
      "featureId": "mission-studio",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 27,
        "deletions": 19,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "d07baf78d586a715f838e88cc165ba525a0660f2",
      "shortSha": "d07baf78",
      "date": "2026-04-16",
      "subject": "chore: apply strict null checks, ui rendering fixes, and dev config",
      "kind": "chore",
      "category": "Chore",
      "scope": null,
      "title": "apply strict null checks, ui rendering fixes, and dev config",
      "featureId": "security-runtime-hardening",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 181,
        "deletions": 65,
        "filesChanged": 15,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 11
          },
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "e857ba550dbdb16fb6178076c0c059e73d162134",
      "shortSha": "e857ba55",
      "date": "2026-04-16",
      "subject": "feat(db): implement Phase 0 foundational schema and shared types",
      "kind": "feat",
      "category": "Feature",
      "scope": "db",
      "title": "implement Phase 0 foundational schema and shared types",
      "featureId": "schema-shared-types",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 15352,
        "deletions": 530,
        "filesChanged": 33,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 31
          },
          {
            "name": "package.json",
            "count": 1
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "d5e7f2fccebb87e63d7b5538e33281a7f5c05d40",
      "shortSha": "d5e7f2fc",
      "date": "2026-04-16",
      "subject": "docs: establish project tracking and codex configuration",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "establish project tracking and codex configuration",
      "featureId": "security-runtime-hardening",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 626,
        "deletions": 25,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": ".codex",
            "count": 1
          },
          {
            "name": "AGENTS.md",
            "count": 1
          },
          {
            "name": "docs",
            "count": 1
          },
          {
            "name": "scripts",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "e151e80c0cfddb753431e1880379cffe7ffb4043",
      "shortSha": "e151e80c",
      "date": "2026-04-16",
      "subject": "fix(ui): enforce esnext build targets in vite to prevent esbuild crashes",
      "kind": "fix",
      "category": "Fix",
      "scope": "ui",
      "title": "enforce esnext build targets in vite to prevent esbuild crashes",
      "featureId": "miscellaneous",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 8,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "19e9c81c5bd3ffa182eea4f72779f91493a4e623",
      "shortSha": "19e9c81c",
      "date": "2026-04-16",
      "subject": "fix(db,shared): correct three Phase 0 schema bugs found in audit",
      "kind": "fix",
      "category": "Fix",
      "scope": "db,shared",
      "title": "correct three Phase 0 schema bugs found in audit",
      "featureId": "schema-shared-types",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/feat/vwork-updates"
      ],
      "onMain": true,
      "stats": {
        "insertions": 8551,
        "deletions": 9,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "e2ebdb21896caaf97f3e2cfc3412cd80aedd4eb5",
      "shortSha": "e2ebdb21",
      "date": "2026-04-17",
      "subject": "feat(shared): add Work2 role constants, invite types, and validation schemas",
      "kind": "feat",
      "category": "Feature",
      "scope": "shared",
      "title": "add Work2 role constants, invite types, and validation schemas",
      "featureId": "work2-company-foundation",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 155,
        "deletions": 11,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "a05f44645176c84f691a09cafd53116df8c61bc7",
      "shortSha": "a05f4464",
      "date": "2026-04-17",
      "subject": "feat(server): implement Work2 RBAC, onboarding, department, and user routes",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "implement Work2 RBAC, onboarding, department, and user routes",
      "featureId": "work2-company-foundation",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1113,
        "deletions": 54,
        "filesChanged": 12,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 11
          },
          {
            "name": "packages",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "35a9e45a43a7cfb65257fe87b76672f868c3497e",
      "shortSha": "35a9e45a",
      "date": "2026-04-17",
      "subject": "test(server): add unit tests for Work2 authz, departments, invites, onboarding, and users",
      "kind": "test",
      "category": "Test",
      "scope": "server",
      "title": "add unit tests for Work2 authz, departments, invites, onboarding, and users",
      "featureId": "work2-company-foundation",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1203,
        "deletions": 0,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "a8d141df079e7e07a6721f1b9d4074b2adf195db",
      "shortSha": "a8d141df",
      "date": "2026-04-17",
      "subject": "feat(ui): add Work2 onboarding wizards, team management, and role-aware UI",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "add Work2 onboarding wizards, team management, and role-aware UI",
      "featureId": "work2-company-foundation",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1268,
        "deletions": 25,
        "filesChanged": 25,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 25
          }
        ]
      }
    },
    {
      "sha": "f2ad787fb5fbed7c5b9ef4cb25075e1cedd86be4",
      "shortSha": "f2ad787f",
      "date": "2026-04-17",
      "subject": "docs: add Phase 1 implementation guide",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "add Phase 1 implementation guide",
      "featureId": "docs-planning-demo",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 959,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "027b92f0dfc1aea7af97fbd75fa374d948bbd313",
      "shortSha": "027b92f0",
      "date": "2026-04-17",
      "subject": "feat: add mission field to company onboarding",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "add mission field to company onboarding",
      "featureId": "mission-studio",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 35,
        "deletions": 8,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          },
          {
            "name": "packages",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "a4fa7129c7490cd22ec6e3996196553ec901a4b0",
      "shortSha": "a4fa7129",
      "date": "2026-04-17",
      "subject": "index on Phase0+Phase1: 027b92f feat: add mission field to company onboarding",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "index on Phase0+Phase1: 027b92f feat: add mission field to company onboarding",
      "featureId": "mission-studio",
      "refs": [
        "stash"
      ],
      "onMain": false,
      "stats": {
        "insertions": 0,
        "deletions": 0,
        "filesChanged": 0,
        "primaryDirectories": []
      }
    },
    {
      "sha": "b8a546eeb8f7955f2d698f1b8cfb70fae4dd05af",
      "shortSha": "b8a546ee",
      "date": "2026-04-17",
      "subject": "On Phase0+Phase1: Autostash. Switch from 'Phase0+Phase1' to 'feat/f0-f1-office-ui' 4/17/2026 8:40:52 PM",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "On Phase0+Phase1: Autostash. Switch from 'Phase0+Phase1' to 'feat/f0-f1-office-ui' 4/17/2026 8:40:52 PM",
      "featureId": "miscellaneous",
      "refs": [
        "stash"
      ],
      "onMain": false,
      "stats": {
        "insertions": 32,
        "deletions": 59,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "7591753ef2f5e08ca2cdd2a7b8c61f72a06fb5a7",
      "shortSha": "7591753e",
      "date": "2026-04-18",
      "subject": "updating docs, and adding storyboard (included full break down of phase 2)",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "updating docs, and adding storyboard (included full break down of phase 2)",
      "featureId": "docs-planning-demo",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1468,
        "deletions": 120,
        "filesChanged": 20,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 14
          },
          {
            "name": "\"docs",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "c619bb5e107db7e449e64ea2a7d13f94cdc5bc43",
      "shortSha": "c619bb5e",
      "date": "2026-04-18",
      "subject": "chore(phase2-prep): resolve pre-Phase 2 gaps and scaffold world route",
      "kind": "chore",
      "category": "Chore",
      "scope": "phase2-prep",
      "title": "resolve pre-Phase 2 gaps and scaffold world route",
      "featureId": "world-realtime-presence",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase0+Phase1",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 47,
        "deletions": 1,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          },
          {
            "name": "packages",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "75a00f8817638ef76609b9fb15c4402081a06442",
      "shortSha": "75a00f88",
      "date": "2026-04-18",
      "subject": "feat(phase2): add R3F dependencies and type declarations",
      "kind": "feat",
      "category": "Feature",
      "scope": "phase2",
      "title": "add R3F dependencies and type declarations",
      "featureId": "world-realtime-presence",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5"
      ],
      "onMain": true,
      "stats": {
        "insertions": 510,
        "deletions": 1,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "e77fa9d8b3401a80b3fb61bb229c937a4971086d",
      "shortSha": "e77fa9d8",
      "date": "2026-04-18",
      "subject": "feat(phase2): implement world state store with Zustand",
      "kind": "feat",
      "category": "Feature",
      "scope": "phase2",
      "title": "implement world state store with Zustand",
      "featureId": "world-realtime-presence",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5"
      ],
      "onMain": true,
      "stats": {
        "insertions": 47,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "292a98758405d5f8177b0a4d61f03065579a3061",
      "shortSha": "292a9875",
      "date": "2026-04-18",
      "subject": "feat(phase2): implement campus scene foundation — layout, canvas, lighting, ground",
      "kind": "feat",
      "category": "Feature",
      "scope": "phase2",
      "title": "implement campus scene foundation — layout, canvas, lighting, ground",
      "featureId": "world-realtime-presence",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5"
      ],
      "onMain": true,
      "stats": {
        "insertions": 400,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "af133651beeb7d88529c7a30d2065ca81c280fc8",
      "shortSha": "af133651",
      "date": "2026-04-18",
      "subject": "feat(phase2): implement 3D department buildings, HQ lobby, and camera zoom",
      "kind": "feat",
      "category": "Feature",
      "scope": "phase2",
      "title": "implement 3D department buildings, HQ lobby, and camera zoom",
      "featureId": "world-realtime-presence",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5"
      ],
      "onMain": true,
      "stats": {
        "insertions": 413,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "417ce21ce0ab4c3d1664d086887e9c6525c81d29",
      "shortSha": "417ce21c",
      "date": "2026-04-18",
      "subject": "feat(phase2): implement agent/employee characters, HUD overlay, minimap, and department tabs",
      "kind": "feat",
      "category": "Feature",
      "scope": "phase2",
      "title": "implement agent/employee characters, HUD overlay, minimap, and department tabs",
      "featureId": "world-realtime-presence",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5"
      ],
      "onMain": true,
      "stats": {
        "insertions": 442,
        "deletions": 0,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "a63b7c4d9a6b8cba2701e5c221d3fe80d24b5b1d",
      "shortSha": "a63b7c4d",
      "date": "2026-04-18",
      "subject": "feat(phase2): wire /world route and post-onboarding navigation",
      "kind": "feat",
      "category": "Feature",
      "scope": "phase2",
      "title": "wire /world route and post-onboarding navigation",
      "featureId": "work2-company-foundation",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5"
      ],
      "onMain": true,
      "stats": {
        "insertions": 196,
        "deletions": 10,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "d74560d82fda6810a3d8eccc6ebb5d4083dae64c",
      "shortSha": "d74560d8",
      "date": "2026-04-18",
      "subject": "docs(phase2): add art revamp guide and Phase 2 testing plan",
      "kind": "docs",
      "category": "Docs",
      "scope": "phase2",
      "title": "add art revamp guide and Phase 2 testing plan",
      "featureId": "quality-devtools-tests",
      "refs": [
        "Phase0+Phase1",
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5"
      ],
      "onMain": true,
      "stats": {
        "insertions": 668,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "ee2cef9f6b7673880f75b7d94bfbe1f7ce6bb5b3",
      "shortSha": "ee2cef9f",
      "date": "2026-04-19",
      "subject": "feat(shared): add socket event types and departmentId to agent schema",
      "kind": "feat",
      "category": "Feature",
      "scope": "shared",
      "title": "add socket event types and departmentId to agent schema",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 38,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "01b70a6d836865fded62dabf64d09a542905a964",
      "shortSha": "01b70a6d",
      "date": "2026-04-19",
      "subject": "feat(server): add Socket.io real-time server with company-scoped room auth",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "add Socket.io real-time server with company-scoped room auth",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 337,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "7bd9e7208294f8b357c84b1f10d980fe7e57023b",
      "shortSha": "7bd9e720",
      "date": "2026-04-19",
      "subject": "feat(server): implement agent execution pipeline with state machine and Anthropic integration",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "implement agent execution pipeline with state machine and Anthropic integration",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 808,
        "deletions": 0,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "db81ef0501c355f1b91eb74545d75f0dd692a85c",
      "shortSha": "db81ef05",
      "date": "2026-04-19",
      "subject": "feat(server): add heartbeat trigger, agent interrupt, cost-summary, and department stats routes",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "add heartbeat trigger, agent interrupt, cost-summary, and department stats routes",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 219,
        "deletions": 4,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "c7e283a1b4fb8b876e0f72700f70257beef00267",
      "shortSha": "c7e283a1",
      "date": "2026-04-19",
      "subject": "feat(ui): wire Socket.io client and live agent behavioral states into world store",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "wire Socket.io client and live agent behavioral states into world store",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 142,
        "deletions": 20,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "f65b75f84ea0804341284b517347ac28df03f97c",
      "shortSha": "f65b75f8",
      "date": "2026-04-19",
      "subject": "feat(ui): reactive world scene — behavioral positioning, parapet and shadow camera fixes",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "reactive world scene — behavioral positioning, parapet and shadow camera fixes",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 67,
        "deletions": 24,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "1543e8719716735dd1317ea777642517c0da79fa",
      "shortSha": "1543e871",
      "date": "2026-04-19",
      "subject": "feat(ui): agent panel, interrupt chat, HUD components, and department picker",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "agent panel, interrupt chat, HUD components, and department picker",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 646,
        "deletions": 0,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "588c2de54e503bea6342e6415f049ddfd162fad2",
      "shortSha": "588c2de5",
      "date": "2026-04-19",
      "subject": "feat(ui): capture departmentId on agent creation form",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "capture departmentId on agent creation form",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 33,
        "deletions": 1,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "65abc61cffc9058a6f00a22c022c9e0b115ac0dc",
      "shortSha": "65abc61c",
      "date": "2026-04-19",
      "subject": "docs(phase3): add implementation guide, test plan, and update dev tracker",
      "kind": "docs",
      "category": "Docs",
      "scope": "phase3",
      "title": "add implementation guide, test plan, and update dev tracker",
      "featureId": "quality-devtools-tests",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2499,
        "deletions": 86,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 5
          },
          {
            "name": "scripts",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "bf0e0d1989f5cd547fb00b15cb9779f5687ae887",
      "shortSha": "bf0e0d19",
      "date": "2026-04-19",
      "subject": "feat(ui): add 3D Virtual World launch button to dashboard",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "add 3D Virtual World launch button to dashboard",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 25,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "3111dff0650675a190dce8c6dba20140333d2455",
      "shortSha": "3111dff0",
      "date": "2026-04-20",
      "subject": "fix avatar positions",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "fix avatar positions",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 5,
        "deletions": 7,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "fecbbe3b5cb5af8e7752536e32edd6d8bf5a50ce",
      "shortSha": "fecbbe3b",
      "date": "2026-04-20",
      "subject": "docs: align task naming and Phase 4 guide",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "align task naming and Phase 4 guide",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1586,
        "deletions": 53,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "db53ef2282349ab87a9814d1500353a0a2410572",
      "shortSha": "db53ef22",
      "date": "2026-04-21",
      "subject": "chore(git): ignore scratch, test output, codex logs, Playwright artifacts",
      "kind": "chore",
      "category": "Chore",
      "scope": "git",
      "title": "ignore scratch, test output, codex logs, Playwright artifacts",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 8,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": ".gitignore",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "518c8a149f355b670c7981da09d6b44a1208ccfa",
      "shortSha": "518c8a14",
      "date": "2026-04-21",
      "subject": "feat(server): Phase 4 tasks API, manager intake, and supporting services",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "Phase 4 tasks API, manager intake, and supporting services",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1179,
        "deletions": 51,
        "filesChanged": 39,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 39
          }
        ]
      }
    },
    {
      "sha": "e5d302f096ed32a2787bdc09ea1fd509bc8a38d8",
      "shortSha": "e5d302f0",
      "date": "2026-04-21",
      "subject": "test: Vitest workspace config, Playwright e2e, and db scripts",
      "kind": "test",
      "category": "Test",
      "scope": null,
      "title": "Vitest workspace config, Playwright e2e, and db scripts",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 453,
        "deletions": 5,
        "filesChanged": 13,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 5
          },
          {
            "name": "scripts",
            "count": 3
          },
          {
            "name": "e2e",
            "count": 2
          },
          {
            "name": "package.json",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "90d3b9ef10affbcb1c629136c06caee119fd0e14",
      "shortSha": "90d3b9ef",
      "date": "2026-04-21",
      "subject": "feat(ui): World task tray, DnD assignment, and task bubbles",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "World task tray, DnD assignment, and task bubbles",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 568,
        "deletions": 61,
        "filesChanged": 16,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 16
          }
        ]
      }
    },
    {
      "sha": "9eb84c5381cb557dfab865e56eecb09a96f527c4",
      "shortSha": "9eb84c53",
      "date": "2026-04-21",
      "subject": "feat(ui): Agent panel tabs and heartbeat countdown",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "Agent panel tabs and heartbeat countdown",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 457,
        "deletions": 41,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "5419ccbf0731f8d0b400d789f296378a29506028",
      "shortSha": "5419ccbf",
      "date": "2026-04-21",
      "subject": "feat(ui): Manager intake panel, world HUD, and navigation",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "Manager intake panel, world HUD, and navigation",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 438,
        "deletions": 36,
        "filesChanged": 11,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 11
          }
        ]
      }
    },
    {
      "sha": "3a98a8d0d07ec44d4daf0bbfa6e3c0460a0ad42c",
      "shortSha": "3a98a8d0",
      "date": "2026-04-21",
      "subject": "docs: Phase 4 completion, test plans, and env example",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "Phase 4 completion, test plans, and env example",
      "featureId": "quality-devtools-tests",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 476,
        "deletions": 99,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 6
          },
          {
            "name": ".env.example",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "bc156b2aa7d460f6365de7ea8130329ad2b4bc9d",
      "shortSha": "bc156b2a",
      "date": "2026-04-21",
      "subject": "docs(phase4): pin verification snapshot commit in test plan",
      "kind": "docs",
      "category": "Docs",
      "scope": "phase4",
      "title": "pin verification snapshot commit in test plan",
      "featureId": "quality-devtools-tests",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "79c22947006aa3d96298485e93e52c2899538a2c",
      "shortSha": "79c22947",
      "date": "2026-04-21",
      "subject": "feat(platform): support BLOCKS env vars and dual HTML branding markers",
      "kind": "feat",
      "category": "Feature",
      "scope": "platform",
      "title": "support BLOCKS env vars and dual HTML branding markers",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 66,
        "deletions": 33,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          },
          {
            "name": "packages",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "fca6ef6120f234723cd0c02e1585737a364ff9ea",
      "shortSha": "fca6ef61",
      "date": "2026-04-21",
      "subject": "chore(ui): add BLOCKS brand assets and variable webfonts",
      "kind": "chore",
      "category": "Chore",
      "scope": "ui",
      "title": "add BLOCKS brand assets and variable webfonts",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 294,
        "deletions": 16,
        "filesChanged": 23,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 23
          }
        ]
      }
    },
    {
      "sha": "59a000954b5d4aa1187fbd2ba0f782e4f196a3f4",
      "shortSha": "59a00095",
      "date": "2026-04-21",
      "subject": "feat(issues): delete issue subtrees and align DELETE permissions",
      "kind": "feat",
      "category": "Feature",
      "scope": "issues",
      "title": "delete issue subtrees and align DELETE permissions",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 118,
        "deletions": 28,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "36f2bea7ac89d479d7b25994def3fcba2048a3c4",
      "shortSha": "36f2bea7",
      "date": "2026-04-21",
      "subject": "feat(ui): introduce BLOCKS design tokens and theme foundation",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "introduce BLOCKS design tokens and theme foundation",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 616,
        "deletions": 89,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "e97695f5610f9bd28bb4b96187e882f4a67e0932",
      "shortSha": "e97695f5",
      "date": "2026-04-21",
      "subject": "feat(ui): roll out BLOCKS design system across shell and features",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "roll out BLOCKS design system across shell and features",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 878,
        "deletions": 578,
        "filesChanged": 89,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 89
          }
        ]
      }
    },
    {
      "sha": "b0a0b3343a58024a9043dd846d71d8b5e81767ff",
      "shortSha": "b0a0b334",
      "date": "2026-04-21",
      "subject": "feat(ui): group sidebar agents by department",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "group sidebar agents by department",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Phase2",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 184,
        "deletions": 69,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "5513d8622271e4a614847f2abbf0999698e8ddc6",
      "shortSha": "5513d862",
      "date": "2026-04-21",
      "subject": "feat: Phase 4 + Phase 5 — tasks/assignments, XP, coins, leaderboard, world UI",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "Phase 4 + Phase 5 — tasks/assignments, XP, coins, leaderboard, world UI",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 9688,
        "deletions": 180,
        "filesChanged": 36,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 15
          },
          {
            "name": "server",
            "count": 13
          },
          {
            "name": "packages",
            "count": 6
          },
          {
            "name": "docs",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "68af2e3c49e6648eab2884ef12440cada66bfd08",
      "shortSha": "68af2e3c",
      "date": "2026-04-21",
      "subject": "feat(server): add company presence lifecycle and LiveKit voice token APIs",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "add company presence lifecycle and LiveKit voice token APIs",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 551,
        "deletions": 4,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 6
          },
          {
            "name": "packages",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "18385085c2d30785f9feca3e236807406f113c60",
      "shortSha": "18385085",
      "date": "2026-04-21",
      "subject": "feat(ui): wire live presence state, online HUD signals, and department voice chat",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "wire live presence state, online HUD signals, and department voice chat",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 438,
        "deletions": 49,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "f9d911e23fa373693cfbf1d93f8398cca26feb6c",
      "shortSha": "f9d911e2",
      "date": "2026-04-21",
      "subject": "feat(world): refresh environment materials and avatar presence/voice visual cues",
      "kind": "feat",
      "category": "Feature",
      "scope": "world",
      "title": "refresh environment materials and avatar presence/voice visual cues",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 509,
        "deletions": 48,
        "filesChanged": 17,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 17
          }
        ]
      }
    },
    {
      "sha": "844b311d898624a9e214b088c282128c9ea165b8",
      "shortSha": "844b311d",
      "date": "2026-04-21",
      "subject": "test(server): cover presence registry and voice route; chore(deps): add livekit packages",
      "kind": "test",
      "category": "Test",
      "scope": "server",
      "title": "cover presence registry and voice route; chore(deps): add livekit packages",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 421,
        "deletions": 0,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "92e9d66f04767bb0cae3ebbd07bc2e4ff7a91481",
      "shortSha": "92e9d66f",
      "date": "2026-04-22",
      "subject": "fix(world): keep 3D scene visible during async loads",
      "kind": "fix",
      "category": "Fix",
      "scope": "world",
      "title": "keep 3D scene visible during async loads",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 4,
        "deletions": 2,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "bc2d6ab412622eec79b2dcb9db7320f4ea1e3971",
      "shortSha": "bc2d6ab4",
      "date": "2026-04-23",
      "subject": "feat(db): add manager_history table and Drizzle schema (migration 0059)",
      "kind": "feat",
      "category": "Feature",
      "scope": "db",
      "title": "add manager_history table and Drizzle schema (migration 0059)",
      "featureId": "schema-shared-types",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 59,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "bc6bed2909aeda8a723d5f39a2e2424183f8e0a5",
      "shortSha": "bc6bed29",
      "date": "2026-04-23",
      "subject": "feat(shared): extend issue types, validators, and socket events for delivery",
      "kind": "feat",
      "category": "Feature",
      "scope": "shared",
      "title": "extend issue types, validators, and socket events for delivery",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 38,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "ca583ecfe7b05e88bb0bd181af5888bd194526e4",
      "shortSha": "ca583ecf",
      "date": "2026-04-23",
      "subject": "feat(server): add artifact service and wire work products, MIME, and exports",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "add artifact service and wire work products, MIME, and exports",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 958,
        "deletions": 12,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "8bd5542f9c4d1cd3bde243a9d79693888b1a3902",
      "shortSha": "8bd5542f",
      "date": "2026-04-23",
      "subject": "feat(server): harden heartbeat queue, parent wakeups, and stuck-run recovery",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "harden heartbeat queue, parent wakeups, and stuck-run recovery",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 642,
        "deletions": 4,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "a3250837cf8d7212e5f2e5a7335dc5f5a7067130",
      "shortSha": "a3250837",
      "date": "2026-04-23",
      "subject": "feat(server): integrate LLM agent execution with artifact delivery and policy",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "integrate LLM agent execution with artifact delivery and policy",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1675,
        "deletions": 17,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "52c67247f5dff6a3754ea19eaa7f22e14b798edd",
      "shortSha": "52c67247",
      "date": "2026-04-23",
      "subject": "feat(server): manager autorun, intake, persisted history, and HTTP routes",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "manager autorun, intake, persisted history, and HTTP routes",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2060,
        "deletions": 44,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "4a19f8b3ccd1be9833aa695731c3efd51bfa170f",
      "shortSha": "4a19f8b3",
      "date": "2026-04-23",
      "subject": "feat(server): issues API for delivery/preview, health depth, and app wiring",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "issues API for delivery/preview, health depth, and app wiring",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 257,
        "deletions": 11,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "971fe2efdcd1e2dd49fb45ae6ca7531df11cb286",
      "shortSha": "971fe2ef",
      "date": "2026-04-23",
      "subject": "feat(ui): delivery store, HUD panels, preview routes, and issue/manager APIs",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "delivery store, HUD panels, preview routes, and issue/manager APIs",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 3213,
        "deletions": 113,
        "filesChanged": 18,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 18
          }
        ]
      }
    },
    {
      "sha": "7540cb78e9a0792d9462a58e0fcb0072df7c8417",
      "shortSha": "7540cb78",
      "date": "2026-04-23",
      "subject": "feat(ui): wire routes, sidebar, Vite proxy, voice, and client health checks",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "wire routes, sidebar, Vite proxy, voice, and client health checks",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 115,
        "deletions": 26,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "5fd6dfa9a01bc92393d110a730ab4ad399ef0004",
      "shortSha": "5fd6dfa9",
      "date": "2026-04-23",
      "subject": "chore(tooling): dev stack script, smoke helpers, orchestration doc, E2E, gitignore",
      "kind": "chore",
      "category": "Chore",
      "scope": "tooling",
      "title": "dev stack script, smoke helpers, orchestration doc, E2E, gitignore",
      "featureId": "quality-devtools-tests",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1882,
        "deletions": 1,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "scripts",
            "count": 5
          },
          {
            "name": ".gitignore",
            "count": 1
          },
          {
            "name": "docs",
            "count": 1
          },
          {
            "name": "e2e",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "caea7432a16c6d80a244941477de607a47dd78aa",
      "shortSha": "caea7432",
      "date": "2026-04-23",
      "subject": "fix(server): prefer real engineers in selectBestAgentForRole; sync token policy tests",
      "kind": "fix",
      "category": "Fix",
      "scope": "server",
      "title": "prefer real engineers in selectBestAgentForRole; sync token policy tests",
      "featureId": "quality-devtools-tests",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 10,
        "deletions": 5,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "cb9b1fc1beaa330236e908787934489728663058",
      "shortSha": "cb9b1fc1",
      "date": "2026-04-23",
      "subject": "feat(ui): vertical tower campus, 3D world scene, and world store",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "vertical tower campus, 3D world scene, and world store",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2101,
        "deletions": 644,
        "filesChanged": 16,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 16
          }
        ]
      }
    },
    {
      "sha": "f8b5d78925c39e79944f42d869dcc4a841e39439",
      "shortSha": "f8b5d789",
      "date": "2026-04-23",
      "subject": "feat(ui): world shell, department quick-actions, HUD refresh, and e2e",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "world shell, department quick-actions, HUD refresh, and e2e",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1183,
        "deletions": 328,
        "filesChanged": 10,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 9
          },
          {
            "name": "e2e",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "330f2d557cb4f3b05f6db3544365606873296a1d",
      "shortSha": "330f2d55",
      "date": "2026-04-23",
      "subject": "feat: task web/artifact heuristics, delivery hardening, Artifacts UI",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "task web/artifact heuristics, delivery hardening, Artifacts UI",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 646,
        "deletions": 133,
        "filesChanged": 10,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 8
          },
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "5ee2404fa4c274bd5249e232becab5323133aeb3",
      "shortSha": "5ee2404f",
      "date": "2026-04-23",
      "subject": "feat: department workspace (0060), departments hub, authz, and world news dock",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "department workspace (0060), departments hub, authz, and world news dock",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 4283,
        "deletions": 338,
        "filesChanged": 61,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 30
          },
          {
            "name": "packages",
            "count": 19
          },
          {
            "name": "server",
            "count": 11
          },
          {
            "name": "docs",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "103b3fe86b25b006f40cc825764bb470c685e861",
      "shortSha": "103b3fe8",
      "date": "2026-04-23",
      "subject": "feat(ui): department icon marks and 3D floor tile clarity",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "department icon marks and 3D floor tile clarity",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 179,
        "deletions": 142,
        "filesChanged": 12,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 12
          }
        ]
      }
    },
    {
      "sha": "a382061c45cc3d3e7fbc47727d3f157e95388919",
      "shortSha": "a382061c",
      "date": "2026-04-23",
      "subject": "Revert \"feat(ui): department icon marks and 3D floor tile clarity\"",
      "kind": "other",
      "category": "Revert",
      "scope": null,
      "title": "Revert \"feat(ui): department icon marks and 3D floor tile clarity\"",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 142,
        "deletions": 179,
        "filesChanged": 12,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 12
          }
        ]
      }
    },
    {
      "sha": "434a7c9e72bf3c2c3e8b39aaf61e5e20fcecd601",
      "shortSha": "434a7c9e",
      "date": "2026-04-23",
      "subject": "Reapply \"feat(ui): department icon marks and 3D floor tile clarity\"",
      "kind": "other",
      "category": "Feature",
      "scope": null,
      "title": "Reapply \"feat(ui): department icon marks and 3D floor tile clarity\"",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 179,
        "deletions": 142,
        "filesChanged": 12,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 12
          }
        ]
      }
    },
    {
      "sha": "fac52f7431a298dea6ea9ddbb72b4caec8dadf00",
      "shortSha": "fac52f74",
      "date": "2026-04-23",
      "subject": "feat(ui): department analysis charts and 3D world polish",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "department analysis charts and 3D world polish",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 819,
        "deletions": 154,
        "filesChanged": 11,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 10
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "d116f32b27a2b063b67f88783418d14425ae89b9",
      "shortSha": "d116f32b",
      "date": "2026-04-23",
      "subject": "feat(ui): world 3D labels, task bubble, back-wall signage, ManagerIntake controls",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "world 3D labels, task bubble, back-wall signage, ManagerIntake controls",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 384,
        "deletions": 74,
        "filesChanged": 10,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 10
          }
        ]
      }
    },
    {
      "sha": "e546b28d1577baf1507aa51f36fa1e8f0c09526c",
      "shortSha": "e546b28d",
      "date": "2026-04-25",
      "subject": "feat(ui-world): expand materials, theme, lighting, and sky",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-world",
      "title": "expand materials, theme, lighting, and sky",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 376,
        "deletions": 64,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          },
          {
            "name": ".gitignore",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "af204a6207916bb7a0c1054880bae41d88c78eca",
      "shortSha": "af204a62",
      "date": "2026-04-25",
      "subject": "feat(ui-world): add coast layout, shore, mountains, poles, and birds",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-world",
      "title": "add coast layout, shore, mountains, poles, and birds",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 691,
        "deletions": 130,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "e4a9f63314debf2711482db1fd39d54dad8cc2e1",
      "shortSha": "e4a9f633",
      "date": "2026-04-25",
      "subject": "feat(ui-world): helipad roof, department mesh polish, campus layout",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-world",
      "title": "helipad roof, department mesh polish, campus layout",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 652,
        "deletions": 174,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "2babcb40c929579efc4b6892712a0fcf1072267a",
      "shortSha": "2babcb40",
      "date": "2026-04-25",
      "subject": "feat(ui-world): agent and employee visuals, task bubbles, canvas and shell",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-world",
      "title": "agent and employee visuals, task bubbles, canvas and shell",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 712,
        "deletions": 210,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "adecec50395d9720b9ec95b91484b504ed2bfcd6",
      "shortSha": "adecec50",
      "date": "2026-04-25",
      "subject": "test(ui-world): align getDepartmentPaletteColour expectations with DEPT_COLOURS",
      "kind": "test",
      "category": "Test",
      "scope": "ui-world",
      "title": "align getDepartmentPaletteColour expectations with DEPT_COLOURS",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 3,
        "deletions": 3,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "f010f0b0a1fc60df8fa8dd91e3d7b1880b698157",
      "shortSha": "f010f0b0",
      "date": "2026-04-25",
      "subject": "chore: remove local debug ingest and noisy client logs",
      "kind": "chore",
      "category": "Chore",
      "scope": null,
      "title": "remove local debug ingest and noisy client logs",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 3,
        "deletions": 992,
        "filesChanged": 13,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          },
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "fc039cf36b67064e1480849027c06349d9134394",
      "shortSha": "fc039cf3",
      "date": "2026-04-25",
      "subject": "feat(ui-world): wall-mounted live task carousel in department zoom",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-world",
      "title": "wall-mounted live task carousel in department zoom",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/Refactor-for-deployment",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 746,
        "deletions": 214,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "2f2d2013cbe64b5e4e644adca237eb6c9b15cf08",
      "shortSha": "2f2d2013",
      "date": "2026-04-25",
      "subject": "fix(ui/world): lift nameplates and center live-task nav arrows",
      "kind": "fix",
      "category": "Fix",
      "scope": "ui/world",
      "title": "lift nameplates and center live-task nav arrows",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 59,
        "deletions": 12,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "e164800d36ff503e854220f48bb4aed4ea5a63a3",
      "shortSha": "e164800d",
      "date": "2026-04-26",
      "subject": "artifact publish",
      "kind": "other",
      "category": "Feature",
      "scope": null,
      "title": "artifact publish",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2070,
        "deletions": 146,
        "filesChanged": 27,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 16
          },
          {
            "name": "ui",
            "count": 7
          },
          {
            "name": "packages",
            "count": 3
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "c4eb452db700d8c64e6dabecfa3ba973919bf016",
      "shortSha": "c4eb452d",
      "date": "2026-04-26",
      "subject": "docs(commit-notes): document e164800 artifact publish baseline",
      "kind": "docs",
      "category": "Docs",
      "scope": "commit-notes",
      "title": "document e164800 artifact publish baseline",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 27,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "4d03c3be921102ef5aa345a287b94e4c932c57de",
      "shortSha": "4d03c3be",
      "date": "2026-04-26",
      "subject": "feat(shared): Blocks env helpers and artifact publish secret names",
      "kind": "feat",
      "category": "Feature",
      "scope": "shared",
      "title": "Blocks env helpers and artifact publish secret names",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 120,
        "deletions": 7,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "b42bbeb368d35ed2a1b60ce4ca6b002376bd9bf0",
      "shortSha": "b42bbeb3",
      "date": "2026-04-26",
      "subject": "fix(db): Blocks home, instance id, and config path for runtime and backup",
      "kind": "fix",
      "category": "Fix",
      "scope": "db",
      "title": "Blocks home, instance id, and config path for runtime and backup",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 49,
        "deletions": 13,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "bb3f9568b28e58dc7885d0e13106f0f1b8fcb94d",
      "shortSha": "bb3f9568",
      "date": "2026-04-26",
      "subject": "chore(server): remove Paperclip debug telemetry and align tests with Blocks",
      "kind": "chore",
      "category": "Chore",
      "scope": "server",
      "title": "remove Paperclip debug telemetry and align tests with Blocks",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 73,
        "deletions": 295,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "795b29196206f7520e1e58cae5882fc7e3691e7e",
      "shortSha": "795b2919",
      "date": "2026-04-26",
      "subject": "feat(server): per-company artifact publish resolve, GitHub Pages, and readiness API",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "per-company artifact publish resolve, GitHub Pages, and readiness API",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 834,
        "deletions": 189,
        "filesChanged": 13,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 12
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "c1878d4ccab0f5d1bd5208f99861193bc5405d7e",
      "shortSha": "c1878d4c",
      "date": "2026-04-26",
      "subject": "chore(server): wire Blocks env across config, entrypoints, and routes",
      "kind": "chore",
      "category": "Chore",
      "scope": "server",
      "title": "wire Blocks env across config, entrypoints, and routes",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 267,
        "deletions": 165,
        "filesChanged": 27,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 26
          },
          {
            "name": ".env.example",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "1ff5a74e9a543c5f44ecff387cc5865f25b2f178",
      "shortSha": "1ff5a74e",
      "date": "2026-04-26",
      "subject": "feat(ui): company settings for artifact publish and related panels",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "company settings for artifact publish and related panels",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 586,
        "deletions": 3,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "ae96f5ec485f66413d7d7a63e7a3a231b3cfa8f5",
      "shortSha": "ae96f5ec",
      "date": "2026-04-26",
      "subject": "fix(ui): Artifacts page and run transcript presentation",
      "kind": "fix",
      "category": "Fix",
      "scope": "ui",
      "title": "Artifacts page and run transcript presentation",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 36,
        "deletions": 8,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "14969df02a618ebc9aa4798d97168697746c1d85",
      "shortSha": "14969df0",
      "date": "2026-04-26",
      "subject": "chore(scripts): Blocks env in dev/verify, remove smoke debug endpoint",
      "kind": "chore",
      "category": "Chore",
      "scope": "scripts",
      "title": "Blocks env in dev/verify, remove smoke debug endpoint",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 9,
        "deletions": 85,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "scripts",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "3256be7bde6fcad9985d6956709a6de3f85df52a",
      "shortSha": "3256be7b",
      "date": "2026-04-27",
      "subject": "agent working highlight issue fix",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "agent working highlight issue fix",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 29,
        "deletions": 1,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "8ed22078d0b41e60604fd8322224b2c99aa7866c",
      "shortSha": "8ed22078",
      "date": "2026-04-27",
      "subject": "feat(server): LLM execution budgets and LlmTaskProfile on issues",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "LLM execution budgets and LlmTaskProfile on issues",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 857,
        "deletions": 45,
        "filesChanged": 11,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 6
          },
          {
            "name": "packages",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "727915ebffdc613eceefa5accb4737aab22fd26a",
      "shortSha": "727915eb",
      "date": "2026-04-27",
      "subject": "feat: publish HTML artifacts from attachment-backed work products",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "publish HTML artifacts from attachment-backed work products",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "backup/test-commit-before-reset",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 551,
        "deletions": 41,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          },
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "dc225ebf8e8e9ffd07e9b7e752bde0d03a64cb87",
      "shortSha": "dc225ebf",
      "date": "2026-04-28",
      "subject": "test",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "test",
      "featureId": "quality-devtools-tests",
      "refs": [
        "backup/test-commit-before-reset"
      ],
      "onMain": false,
      "stats": {
        "insertions": 6550,
        "deletions": 410,
        "filesChanged": 47,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 32
          },
          {
            "name": "packages",
            "count": 6
          },
          {
            "name": "server",
            "count": 5
          },
          {
            "name": "debug-32ca47.log",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "b4b8906b03815a14f889fd97bc6992be8100a0e8",
      "shortSha": "b4b8906b",
      "date": "2026-04-28",
      "subject": "chore: remove local debug ingest and file logging from agent paths",
      "kind": "chore",
      "category": "Chore",
      "scope": null,
      "title": "remove local debug ingest and file logging from agent paths",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 0,
        "deletions": 116,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "7284c22665ca95a3d311a5776a53138abac4916e",
      "shortSha": "7284c226",
      "date": "2026-04-28",
      "subject": "feat(db): add restore CLI and wire pnpm db:restore",
      "kind": "feat",
      "category": "Feature",
      "scope": "db",
      "title": "add restore CLI and wire pnpm db:restore",
      "featureId": "schema-shared-types",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 285,
        "deletions": 2,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 2
          },
          {
            "name": "package.json",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "a9baf05f83cc82228f7f702729857bf0750e2807",
      "shortSha": "a9baf05f",
      "date": "2026-04-28",
      "subject": "fix(dev-stack): parse API origin from ANSI-colored server output",
      "kind": "fix",
      "category": "Fix",
      "scope": "dev-stack",
      "title": "parse API origin from ANSI-colored server output",
      "featureId": "quality-devtools-tests",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 12,
        "deletions": 2,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "scripts",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "2e4e78a5b16eccc9fdc6d3a9b230f96b676db312",
      "shortSha": "2e4e78a5",
      "date": "2026-04-28",
      "subject": "feat(shared): add Mission Studio types, exports, and visual defaults",
      "kind": "feat",
      "category": "Feature",
      "scope": "shared",
      "title": "add Mission Studio types, exports, and visual defaults",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 446,
        "deletions": 0,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "374ffa471d254eb695023cac94df5ab1683ed587",
      "shortSha": "374ffa47",
      "date": "2026-04-28",
      "subject": "feat(server): add mission studio context, discovery LLM, brief and discover services",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "add mission studio context, discovery LLM, brief and discover services",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1933,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "d1f288464c0a98cf5ebe69868792d82f68a2903e",
      "shortSha": "d1f28846",
      "date": "2026-04-28",
      "subject": "feat(server): pass Mission Studio context through intake, history, and autorun",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "pass Mission Studio context through intake, history, and autorun",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 81,
        "deletions": 6,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "65a6f9faeeae0d01b8b0fd35867a5d4befab1a3f",
      "shortSha": "65a6f9fa",
      "date": "2026-04-28",
      "subject": "feat(server): add manager discover and freeze-brief API routes",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "add manager discover and freeze-brief API routes",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 305,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "2f9ae303446d5daeb397ef85dc5845fd012963d3",
      "shortSha": "2f9ae303",
      "date": "2026-04-28",
      "subject": "test(server): cover mission discovery, sessions, and autorun studio context",
      "kind": "test",
      "category": "Test",
      "scope": "server",
      "title": "cover mission discovery, sessions, and autorun studio context",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 477,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "6388bee29929eb9d7ead1a734aa730c52fd7db62",
      "shortSha": "6388bee2",
      "date": "2026-04-28",
      "subject": "feat(ui): Mission Studio HUD, discovery hook, and manager API methods",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "Mission Studio HUD, discovery hook, and manager API methods",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 3617,
        "deletions": 336,
        "filesChanged": 22,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 22
          }
        ]
      }
    },
    {
      "sha": "9b7b14b9dfef528518eaf5c2d3d5e3df2f08fe20",
      "shortSha": "9b7b14b9",
      "date": "2026-04-28",
      "subject": "style(ui): extend index.css for Mission Studio and world overlays",
      "kind": "style",
      "category": "Style",
      "scope": "ui",
      "title": "extend index.css for Mission Studio and world overlays",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1625,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "57403027b16161b0930393912f26cdd5af38374e",
      "shortSha": "57403027",
      "date": "2026-04-28",
      "subject": "feat(world): WebGL scene updates, department interiors, and world page",
      "kind": "feat",
      "category": "Feature",
      "scope": "world",
      "title": "WebGL scene updates, department interiors, and world page",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 655,
        "deletions": 40,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          },
          {
            "name": "e2e",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "6ab2619a78dfa4561f4f8baea7aac6b9ad006ca2",
      "shortSha": "6ab2619a",
      "date": "2026-04-28",
      "subject": "fix(ui): align coins, XP, level-up overlay, and toast timing",
      "kind": "fix",
      "category": "Fix",
      "scope": "ui",
      "title": "align coins, XP, level-up overlay, and toast timing",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 62,
        "deletions": 60,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "f77c462fab29c2139bc9448178f5fcd2a1a6852c",
      "shortSha": "f77c462f",
      "date": "2026-04-28",
      "subject": "fix(ui): register service worker only in production; unregister in dev",
      "kind": "fix",
      "category": "Fix",
      "scope": "ui",
      "title": "register service worker only in production; unregister in dev",
      "featureId": "security-runtime-hardening",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 7,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "8c1160ab64f3844dc00b3770bcfd9f555810c27c",
      "shortSha": "8c1160ab",
      "date": "2026-04-28",
      "subject": "feat(ui): surface company fetch errors and improve onboarding company pick",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "surface company fetch errors and improve onboarding company pick",
      "featureId": "work2-company-foundation",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 195,
        "deletions": 4,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "64289df8f615d2ceb025963dbfda121e78f64d8d",
      "shortSha": "64289df8",
      "date": "2026-04-28",
      "subject": "feat(ui): add settings shortcut to onboarding for company switch",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "add settings shortcut to onboarding for company switch",
      "featureId": "work2-company-foundation",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 26,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "a18b2fc71d3a71b4fbbbc375cb816179ce941f1f",
      "shortSha": "a18b2fc7",
      "date": "2026-04-29",
      "subject": "feat(db): add budget policy and incident tables",
      "kind": "feat",
      "category": "Feature",
      "scope": "db",
      "title": "add budget policy and incident tables",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 238,
        "deletions": 1,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "db50cdc16cfeda25dec5d3da27be44071feb6367",
      "shortSha": "db50cdc1",
      "date": "2026-04-29",
      "subject": "feat(db): add project workspace node schema",
      "kind": "feat",
      "category": "Feature",
      "scope": "db",
      "title": "add project workspace node schema",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 95,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "43e5cd0efe7500aa801d97aae8f5e89b88c6d3f5",
      "shortSha": "43e5cd0e",
      "date": "2026-04-29",
      "subject": "fix(db): align manager history and work-product schema dependencies",
      "kind": "fix",
      "category": "Fix",
      "scope": "db",
      "title": "align manager history and work-product schema dependencies",
      "featureId": "schema-shared-types",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 10,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "fa50fe87910ba16400e099db176b69a9ab8af954",
      "shortSha": "fa50fe87",
      "date": "2026-04-29",
      "subject": "feat(shared): introduce mission lens and company skill card contracts",
      "kind": "feat",
      "category": "Feature",
      "scope": "shared",
      "title": "introduce mission lens and company skill card contracts",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 132,
        "deletions": 0,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "d808f67b982e9853e40e33239ed35fa5f0c61187",
      "shortSha": "d808f67b",
      "date": "2026-04-29",
      "subject": "feat(shared): extend project and work-product typed boundaries",
      "kind": "feat",
      "category": "Feature",
      "scope": "shared",
      "title": "extend project and work-product typed boundaries",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 188,
        "deletions": 2,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "c75cfbad54e6500252730ad1efd9f71ec77d70ae",
      "shortSha": "c75cfbad",
      "date": "2026-04-29",
      "subject": "feat(server): add budgeting domain services",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "add budgeting domain services",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 870,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "b26f29f59ff6c674d6b033dae3f631be167c1ec6",
      "shortSha": "b26f29f5",
      "date": "2026-04-29",
      "subject": "refactor(server): export new budgeting and project services",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "server",
      "title": "export new budgeting and project services",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 3,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "7f141af847cf93942785a47f6966e5809fc9aa09",
      "shortSha": "7f141af8",
      "date": "2026-04-29",
      "subject": "feat(server): expose budgeting and cost routes",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "expose budgeting and cost routes",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 125,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "25e19a32b7229d8e3b2788e50f1ee6963fd1b43b",
      "shortSha": "25e19a32",
      "date": "2026-04-29",
      "subject": "fix(server): cover budgeting routes and monthly spend edge cases",
      "kind": "fix",
      "category": "Fix",
      "scope": "server",
      "title": "cover budgeting routes and monthly spend edge cases",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 115,
        "deletions": 2,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "df7ac4c68a84ea23cd24f4688a4ee51eb5cc46c1",
      "shortSha": "df7ac4c6",
      "date": "2026-04-29",
      "subject": "feat(server): add project node service and API surface",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "add project node service and API surface",
      "featureId": "project-workspaces-files",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 522,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          },
          {
            "name": "e2e",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "5c5b7f34fc9db815a6a1ed57c527e5eda50a8e21",
      "shortSha": "5c5b7f34",
      "date": "2026-04-29",
      "subject": "feat(server): add project naming and suggestion logic",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "add project naming and suggestion logic",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 51,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "5e2d90fb233b63708539c81befecc29f14ca170e",
      "shortSha": "5e2d90fb",
      "date": "2026-04-29",
      "subject": "feat(server): add brief-aware mission prompt construction",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "add brief-aware mission prompt construction",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 85,
        "deletions": 5,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "9cfbb08f4c29bf89d006b95a957c52cdaa75b6a6",
      "shortSha": "9cfbb08f",
      "date": "2026-04-29",
      "subject": "feat(server): implement mission manager orchestration updates",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "implement mission manager orchestration updates",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 367,
        "deletions": 57,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "b93428f0038eed09c36abcd9b41ca257c92e8758",
      "shortSha": "b93428f0",
      "date": "2026-04-29",
      "subject": "fix(server): harden mission autorun and discovery flow coverage",
      "kind": "fix",
      "category": "Fix",
      "scope": "server",
      "title": "harden mission autorun and discovery flow coverage",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 253,
        "deletions": 1,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "348939aabf6c7c972125786cd88827db0f942e83",
      "shortSha": "348939aa",
      "date": "2026-04-29",
      "subject": "feat(ui): add mission studio shell structure and header rails",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "add mission studio shell structure and header rails",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 639,
        "deletions": 193,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "c3f93b7d829b053d7aa52906f99a8d5143b15dc0",
      "shortSha": "c3f93b7d",
      "date": "2026-04-29",
      "subject": "fix(routes): preserve company-prefixed artifacts navigation",
      "kind": "fix",
      "category": "Fix",
      "scope": "routes",
      "title": "preserve company-prefixed artifacts navigation",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "2628a0b2ae261e0bff9ed848bf8913b41ef6d37f",
      "shortSha": "2628a0b2",
      "date": "2026-04-29",
      "subject": "feat(skills): persist and materialize company-managed agent skills",
      "kind": "feat",
      "category": "Feature",
      "scope": "skills",
      "title": "persist and materialize company-managed agent skills",
      "featureId": "skills-harness",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 940,
        "deletions": 396,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          },
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "8ce62c5636a64c4c0d04c38bd32b5801fa55afe0",
      "shortSha": "8ce62c56",
      "date": "2026-04-29",
      "subject": "test(skills): align route and service coverage with managed bundles",
      "kind": "test",
      "category": "Test",
      "scope": "skills",
      "title": "align route and service coverage with managed bundles",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 188,
        "deletions": 242,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "114e80b8ab8a80ccd0ba47f6aa8848dd9f85b1d0",
      "shortSha": "114e80b8",
      "date": "2026-04-29",
      "subject": "feat(manager): add project-bound Mission Studio flow",
      "kind": "feat",
      "category": "Feature",
      "scope": "manager",
      "title": "add project-bound Mission Studio flow",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2191,
        "deletions": 493,
        "filesChanged": 17,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 15
          },
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "93bf2439621cf9268f524da20064329237d3c7a2",
      "shortSha": "93bf2439",
      "date": "2026-04-29",
      "subject": "feat(manager): add spellcheck-assisted mission input",
      "kind": "feat",
      "category": "Feature",
      "scope": "manager",
      "title": "add spellcheck-assisted mission input",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 50354,
        "deletions": 0,
        "filesChanged": 13,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 12
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "6fac19a71d28c1835b44ba9c6110c6f9d3da1f1a",
      "shortSha": "6fac19a7",
      "date": "2026-04-29",
      "subject": "feat(departments): add department metrics endpoint and hub data hook",
      "kind": "feat",
      "category": "Feature",
      "scope": "departments",
      "title": "add department metrics endpoint and hub data hook",
      "featureId": "department-workspace",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 181,
        "deletions": 4,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          },
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "ec083bd244889e20db0d160e0944a5a8fbe78335",
      "shortSha": "ec083bd2",
      "date": "2026-04-29",
      "subject": "feat(departments-ui): replace department list with hub cards",
      "kind": "feat",
      "category": "Feature",
      "scope": "departments-ui",
      "title": "replace department list with hub cards",
      "featureId": "department-workspace",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 435,
        "deletions": 94,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "3340b6f235db7d8a185d784f894b57e9f4fa1f2d",
      "shortSha": "3340b6f2",
      "date": "2026-04-29",
      "subject": "feat(projects): redesign projects index as directory cards",
      "kind": "feat",
      "category": "Feature",
      "scope": "projects",
      "title": "redesign projects index as directory cards",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 437,
        "deletions": 27,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "c14c56f91ef02a718043ce9b92f7f9f4bdb30a86",
      "shortSha": "c14c56f9",
      "date": "2026-04-29",
      "subject": "feat(projects): add project files browser and owner delete actions",
      "kind": "feat",
      "category": "Feature",
      "scope": "projects",
      "title": "add project files browser and owner delete actions",
      "featureId": "project-workspaces-files",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 237,
        "deletions": 16,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "6456eedab562535fd10d56db2755dea623c95d1a",
      "shortSha": "6456eeda",
      "date": "2026-04-29",
      "subject": "feat(ops): restore dashboard cost and budget summary signals",
      "kind": "feat",
      "category": "Feature",
      "scope": "ops",
      "title": "restore dashboard cost and budget summary signals",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 38,
        "deletions": 22,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "ced2c388a556b1a9e96c7818f0ee4f9d32cbb9f6",
      "shortSha": "ced2c388",
      "date": "2026-04-29",
      "subject": "feat(world): add campus break agent movement",
      "kind": "feat",
      "category": "Feature",
      "scope": "world",
      "title": "add campus break agent movement",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 351,
        "deletions": 118,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "f4c8c22284e3c3516dff7c226025d83d29d7c557",
      "shortSha": "f4c8c222",
      "date": "2026-04-29",
      "subject": "feat(world-ui): polish world viewport chrome and overlays",
      "kind": "feat",
      "category": "Feature",
      "scope": "world-ui",
      "title": "polish world viewport chrome and overlays",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 321,
        "deletions": 182,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "405b119e7f44ccd02cbeffacc4b55b1b6e7feae2",
      "shortSha": "405b119e",
      "date": "2026-04-29",
      "subject": "feat(board): add workplace, Mission Studio, and full-page task routes",
      "kind": "feat",
      "category": "Feature",
      "scope": "board",
      "title": "add workplace, Mission Studio, and full-page task routes",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 832,
        "deletions": 587,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "dde99f39e87bb246e78c6dfa015dac540b7e7a4d",
      "shortSha": "dde99f39",
      "date": "2026-04-29",
      "subject": "feat(tasks-ui): enrich task rows and list surfaces",
      "kind": "feat",
      "category": "Feature",
      "scope": "tasks-ui",
      "title": "enrich task rows and list surfaces",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 422,
        "deletions": 56,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "c41d9557270414321878d828ed23196133fd1d80",
      "shortSha": "c41d9557",
      "date": "2026-04-29",
      "subject": "feat(workplace-ui): replace dashboard widgets with directory hub sections",
      "kind": "feat",
      "category": "Feature",
      "scope": "workplace-ui",
      "title": "replace dashboard widgets with directory hub sections",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 377,
        "deletions": 826,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "9d9e81f61209d24978729d6c6de0676b919e12ec",
      "shortSha": "9d9e81f6",
      "date": "2026-04-29",
      "subject": "feat(server): hydrate company spend and link work products into project trees",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "hydrate company spend and link work products into project trees",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 83,
        "deletions": 4,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "a8c96bebe3efe09a1e0ec286606280c93c76de4b",
      "shortSha": "a8c96beb",
      "date": "2026-04-29",
      "subject": "feat(ui): refresh board chrome and blocks theme styling",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "refresh board chrome and blocks theme styling",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 993,
        "deletions": 109,
        "filesChanged": 10,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 10
          }
        ]
      }
    },
    {
      "sha": "7b567ab2096d7e22103dfc34007c5c9a58fb4ff5",
      "shortSha": "7b567ab2",
      "date": "2026-04-29",
      "subject": "test(manager): cover Mission Studio page and loading behaviors",
      "kind": "test",
      "category": "Test",
      "scope": "manager",
      "title": "cover Mission Studio page and loading behaviors",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 631,
        "deletions": 8,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          },
          {
            "name": "e2e",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "4c0686ae61f0c8b28408510f36308700ebceece8",
      "shortSha": "4c0686ae",
      "date": "2026-04-29",
      "subject": "feat(ui): polish activity, agent, and HUD supporting surfaces",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "polish activity, agent, and HUD supporting surfaces",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 907,
        "deletions": 341,
        "filesChanged": 30,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 30
          }
        ]
      }
    },
    {
      "sha": "254de0c753c5d4994259a9bf7dad555e833a19c9",
      "shortSha": "254de0c7",
      "date": "2026-04-29",
      "subject": "test(misc): align route, department, project, world, and issue tests",
      "kind": "test",
      "category": "Test",
      "scope": "misc",
      "title": "align route, department, project, world, and issue tests",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 99,
        "deletions": 28,
        "filesChanged": 13,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 6
          },
          {
            "name": "ui",
            "count": 5
          },
          {
            "name": "packages",
            "count": 1
          },
          {
            "name": "vitest.config.ts",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "66c0173973d7ae56aeae7109a6116f0acbab9c87",
      "shortSha": "66c01739",
      "date": "2026-04-29",
      "subject": "docs(plans): add supporting design notes",
      "kind": "docs",
      "category": "Docs",
      "scope": "plans",
      "title": "add supporting design notes",
      "featureId": "docs-planning-demo",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 666,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "3952fcfd0c656bc193b714b691b5ca596eb9bcd6",
      "shortSha": "3952fcfd",
      "date": "2026-05-01",
      "subject": "plan G14: DB backup lib test hardening",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G14: DB backup lib test hardening",
      "featureId": "quality-devtools-tests",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2,
        "deletions": 2,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "a29e62e5008380dc5413510dced1d784000cef0f",
      "shortSha": "a29e62e5",
      "date": "2026-05-01",
      "subject": "plan G1: repo hygiene, manager policy doc, Cursor agent rules",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G1: repo hygiene, manager policy doc, Cursor agent rules",
      "featureId": "docs-planning-demo",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 53,
        "deletions": 1,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": ".cursor",
            "count": 2
          },
          {
            "name": ".gitignore",
            "count": 1
          },
          {
            "name": "docs",
            "count": 1
          },
          {
            "name": "scripts",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "f5dfb03a85da4271d1dbbdb42b5f01145b39d9e8",
      "shortSha": "f5dfb03a",
      "date": "2026-05-01",
      "subject": "plan G2: shared agent heartbeat timer audit types",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G2: shared agent heartbeat timer audit types",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 18,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "5dfc7f584c040c499f52147221085ddcc3ae6f35",
      "shortSha": "5dfc7f58",
      "date": "2026-05-01",
      "subject": "plan G3: shared instance LLM defaults and experimental flags",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G3: shared instance LLM defaults and experimental flags",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 33,
        "deletions": 1,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "a23252fd085efef95679b5615ff8b8437d2240b2",
      "shortSha": "a23252fd",
      "date": "2026-05-01",
      "subject": "plan G29: mission studio roles, warm cache, issue delivery intent, shared barrel",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G29: mission studio roles, warm cache, issue delivery intent, shared barrel",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 444,
        "deletions": 7,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "e876c0f900bbd69e68a24d64582d90161dccb205",
      "shortSha": "e876c0f9",
      "date": "2026-05-01",
      "subject": "plan G30: mission discovery warm fingerprint helper",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G30: mission discovery warm fingerprint helper",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 29,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "fbd9d4c9a827d36cb92783bc2ed7f554f9d3ea20",
      "shortSha": "fbd9d4c9",
      "date": "2026-05-01",
      "subject": "plan G13: coordinator parent wakeup service",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G13: coordinator parent wakeup service",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 96,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "575521124cd2f0c9dd52e116d51cf40dce072ba2",
      "shortSha": "57552112",
      "date": "2026-05-01",
      "subject": "plan G4: heartbeat overhaul, activity, session and audit tests",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G4: heartbeat overhaul, activity, session and audit tests",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1314,
        "deletions": 199,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "9dc3dd4b6f748608718cbb5c49f8231a927ccf1e",
      "shortSha": "9dc3dd4b",
      "date": "2026-05-01",
      "subject": "plan G5: LLM Anthropic, execution budget, instance settings merge + UI",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G5: LLM Anthropic, execution budget, instance settings merge + UI",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1471,
        "deletions": 27,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 6
          },
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "5015e450bf876929c9745f2c332490533154c6c9",
      "shortSha": "5015e450",
      "date": "2026-05-01",
      "subject": "plan G6: Cursor CLI adapter, registry integration, UI parse helpers",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G6: Cursor CLI adapter, registry integration, UI parse helpers",
      "featureId": "docs-planning-demo",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2029,
        "deletions": 4,
        "filesChanged": 18,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 12
          },
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "eafdeea658d07fac88ce484440556ed4e5bb3c83",
      "shortSha": "eafdeea6",
      "date": "2026-05-01",
      "subject": "plan G7: manager routes and services, mission plan pack, artifact source builds, prompt blocks",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G7: manager routes and services, mission plan pack, artifact source builds, prompt blocks",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 4692,
        "deletions": 226,
        "filesChanged": 33,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 33
          }
        ]
      }
    },
    {
      "sha": "6120a922973ca8db729b19683e1739379de77b42",
      "shortSha": "6120a922",
      "date": "2026-05-01",
      "subject": "plan G8: mission discovery LLM, studio context, repair tests, debug session log",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G8: mission discovery LLM, studio context, repair tests, debug session log",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 570,
        "deletions": 51,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "5ed05ea13ffc32f69f826b24ea7de97dda9dbef9",
      "shortSha": "5ed05ea1",
      "date": "2026-05-01",
      "subject": "plan G9: issues routes, service, assignment wakeup, UI issues API and tests",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G9: issues routes, service, assignment wakeup, UI issues API and tests",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 452,
        "deletions": 2,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          },
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "bfbd40253561384ca99aabc058dad1583b62ee6c",
      "shortSha": "bfbd4025",
      "date": "2026-05-01",
      "subject": "plan G10: agents routes, execution policy and delivery tests, UI agents and heartbeats",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G10: agents routes, execution policy and delivery tests, UI agents and heartbeats",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 525,
        "deletions": 42,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          },
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "2009818b43ce71ce876375a3ac5ab287e3e54c0d",
      "shortSha": "2009818b",
      "date": "2026-05-01",
      "subject": "plan G12: app bootstrap and blocks env tests",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G12: app bootstrap and blocks env tests",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 72,
        "deletions": 20,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "0eb2b7c4fb545d84ae1896f11a2a9047a9266c80",
      "shortSha": "0eb2b7c4",
      "date": "2026-05-01",
      "subject": "plan G15: Mission Studio shell, steps, discovery hook (core)",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G15: Mission Studio shell, steps, discovery hook (core)",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1419,
        "deletions": 259,
        "filesChanged": 11,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 11
          }
        ]
      }
    },
    {
      "sha": "670a4785144440c3175e6eab76ab92e52cb52b8f",
      "shortSha": "670a4785",
      "date": "2026-05-01",
      "subject": "plan G15b: Mission Studio chrome (header, blocks shell, XP, specialist, copy)",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G15b: Mission Studio chrome (header, blocks shell, XP, specialist, copy)",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 133,
        "deletions": 94,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "e80b4b517285f197282666178d04e1bf1a753e8a",
      "shortSha": "e80b4b51",
      "date": "2026-05-01",
      "subject": "plan G16: manager intake HUD and HUD shell wiring",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G16: manager intake HUD and HUD shell wiring",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1324,
        "deletions": 584,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "3f8ade439c4f28bd74c2fbf27d296c4bd7cf9608",
      "shortSha": "3f8ade43",
      "date": "2026-05-01",
      "subject": "plan G17: app shell, layout, navigation, Vite config",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G17: app shell, layout, navigation, Vite config",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 788,
        "deletions": 656,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "b5220de35798a696566224864a1a8d0f393ae6a3",
      "shortSha": "b5220de3",
      "date": "2026-05-01",
      "subject": "plan G18: agents directory and agent detail",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G18: agents directory and agent detail",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1237,
        "deletions": 726,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "81f966e003db39e196c9a4f6d40741e3d63a1065",
      "shortSha": "81f966e0",
      "date": "2026-05-01",
      "subject": "plan G19: company settings and skills pages",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G19: company settings and skills pages",
      "featureId": "skills-harness",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 315,
        "deletions": 156,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "e9d3a4d806ebfb1d00caa7ade82a7c0da3975f68",
      "shortSha": "e9d3a4d8",
      "date": "2026-05-01",
      "subject": "plan G20: departments/projects directory cards (no local diffs vs upstream)",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G20: departments/projects directory cards (no local diffs vs upstream)",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 0,
        "deletions": 0,
        "filesChanged": 0,
        "primaryDirectories": []
      }
    },
    {
      "sha": "5ef7cae4abc8792d10d90cdb0b2787af911538c0",
      "shortSha": "5ef7cae4",
      "date": "2026-05-01",
      "subject": "plan G21: issue detail, chat, Mission Studio entry",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G21: issue detail, chat, Mission Studio entry",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 138,
        "deletions": 81,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "447309447dddf512bf4b933b9351a91a421231b2",
      "shortSha": "44730944",
      "date": "2026-05-01",
      "subject": "plan G22: misc UI polish - badges, run card, transcript, tabs, live updates, world",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G22: misc UI polish - badges, run card, transcript, tabs, live updates, world",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 202,
        "deletions": 12,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "7609e9a98fd8bd20f3966d64c0270ebc1ed42c45",
      "shortSha": "7609e9a9",
      "date": "2026-05-01",
      "subject": "plan G23: global styles, preview routing, query keys, directory accents",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G23: global styles, preview routing, query keys, directory accents",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 982,
        "deletions": 9,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "2fe0194956fe3445e0b6e53404597f6943398bad",
      "shortSha": "2fe01949",
      "date": "2026-05-01",
      "subject": "plan G24: prompt-builder test updates (server)",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G24: prompt-builder test updates (server)",
      "featureId": "quality-devtools-tests",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 178,
        "deletions": 12,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "9b416c48a4f7000bd3588ffde218b14c8e178cc0",
      "shortSha": "9b416c48",
      "date": "2026-05-01",
      "subject": "plan G25: examples static HTML demos",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G25: examples static HTML demos",
      "featureId": "docs-planning-demo",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 3177,
        "deletions": 0,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "examples",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "5a17732f6f7720a8763267c28be093a471d30961",
      "shortSha": "5a17732f",
      "date": "2026-05-01",
      "subject": "plan G26: onboarding mission example JSON seeds",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G26: onboarding mission example JSON seeds",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 69,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "5c6920156d97828916cdb5f5703f29c065890a8c",
      "shortSha": "5c692015",
      "date": "2026-05-01",
      "subject": "plan G27: mission history and saved chats HUD",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G27: mission history and saved chats HUD",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 634,
        "deletions": 0,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "2709ac135fc1624872068afc685a7f9805049f79",
      "shortSha": "2709ac13",
      "date": "2026-05-01",
      "subject": "plan G28: bulk agent execution, sidebar footer, API client + tests",
      "kind": "other",
      "category": "Plan",
      "scope": null,
      "title": "plan G28: bulk agent execution, sidebar footer, API client + tests",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 363,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "95c7d8275d08cd12ac2c38db864cb6183f76650b",
      "shortSha": "95c7d827",
      "date": "2026-05-02",
      "subject": "feat(cli-adapters): dependable Cursor and Claude Code CLI flags and model selection",
      "kind": "feat",
      "category": "Feature",
      "scope": "cli-adapters",
      "title": "dependable Cursor and Claude Code CLI flags and model selection",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 374,
        "deletions": 17,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          },
          {
            "name": ".gitignore",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "448665ca2aa4c08e93e1484809a78a3f00895af6",
      "shortSha": "448665ca",
      "date": "2026-05-02",
      "subject": "feat(html-artifacts): pipeline from model output to gated playable HTML deliverables",
      "kind": "feat",
      "category": "Feature",
      "scope": "html-artifacts",
      "title": "pipeline from model output to gated playable HTML deliverables",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 3064,
        "deletions": 258,
        "filesChanged": 33,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 33
          }
        ]
      }
    },
    {
      "sha": "754e6fb375cfa9ca0cc7ec58fb7b01ce04cf072a",
      "shortSha": "754e6fb3",
      "date": "2026-05-02",
      "subject": "feat(manager-intake): structured missions from HUD, chat thread, and API",
      "kind": "feat",
      "category": "Feature",
      "scope": "manager-intake",
      "title": "structured missions from HUD, chat thread, and API",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1727,
        "deletions": 148,
        "filesChanged": 15,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 8
          },
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "0bfb93343f524de48c21c99a7d2cc24c0e60996e",
      "shortSha": "0bfb9334",
      "date": "2026-05-02",
      "subject": "feat(heartbeat): richer run summaries aligned with execution outcomes",
      "kind": "feat",
      "category": "Feature",
      "scope": "heartbeat",
      "title": "richer run summaries aligned with execution outcomes",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 151,
        "deletions": 60,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "f8bf5399f81659337fcc1f3a33036a477dc7d895",
      "shortSha": "f8bf5399",
      "date": "2026-05-02",
      "subject": "feat(ui): artifact editor, quality summaries, and clearer agent run context",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "artifact editor, quality summaries, and clearer agent run context",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1214,
        "deletions": 12,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "e0f29e87696281042504177d65667fb9114c4af5",
      "shortSha": "e0f29e87",
      "date": "2026-05-02",
      "subject": "test(e2e): guard HTML artifact pipeline and express task workflows",
      "kind": "test",
      "category": "Test",
      "scope": "e2e",
      "title": "guard HTML artifact pipeline and express task workflows",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 499,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "e2e",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "3bf4f88a1ce860f1cb6cfddd65b3c115838297e5",
      "shortSha": "3bf4f88a",
      "date": "2026-05-02",
      "subject": "docs: artifact external integrations and quality roadmap",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "artifact external integrations and quality roadmap",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 65,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "ec76fbd7d15e26b068a9c7dba7ae7017478eda45",
      "shortSha": "ec76fbd7",
      "date": "2026-05-02",
      "subject": "feat(devtools): local artifact QA runners and task inspection helpers",
      "kind": "feat",
      "category": "Feature",
      "scope": "devtools",
      "title": "local artifact QA runners and task inspection helpers",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2237,
        "deletions": 0,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "scripts",
            "count": 4
          },
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "a73542b0c069702a3ee2d05308191dc47c1944f5",
      "shortSha": "a73542b0",
      "date": "2026-05-03",
      "subject": "docs: sync implementation status, dev tracker, and LLM cost notes",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "sync implementation status, dev tracker, and LLM cost notes",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 658,
        "deletions": 468,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 2
          },
          {
            "name": "IMPLEMENTATION_STATUS.md",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "24461d30d4194ff2bd70260e6c9406692d452f92",
      "shortSha": "24461d30",
      "date": "2026-05-03",
      "subject": "chore(cursor): remove Cursor adapter and related scaffolding",
      "kind": "chore",
      "category": "Chore",
      "scope": "cursor",
      "title": "remove Cursor adapter and related scaffolding",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 58,
        "deletions": 2278,
        "filesChanged": 20,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 12
          },
          {
            "name": "packages",
            "count": 4
          },
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "45ddc000f9b4ab1aece6bb429e3c1ede5017465a",
      "shortSha": "45ddc000",
      "date": "2026-05-03",
      "subject": "feat(llm-transport): introduce OpenAI-compatible transport layer",
      "kind": "feat",
      "category": "Feature",
      "scope": "llm-transport",
      "title": "introduce OpenAI-compatible transport layer",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1245,
        "deletions": 216,
        "filesChanged": 12,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 8
          },
          {
            "name": "packages",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "543412d4a51cda4e986aa15c09d1b25ca7fae0ea",
      "shortSha": "543412d4",
      "date": "2026-05-03",
      "subject": "feat(agent-execution): route LLM calls through profile model resolver",
      "kind": "feat",
      "category": "Feature",
      "scope": "agent-execution",
      "title": "route LLM calls through profile model resolver",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 750,
        "deletions": 170,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          },
          {
            "name": "packages",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "40a567d1b3767949136ac05b8f7ee51a40c3b12c",
      "shortSha": "40a567d1",
      "date": "2026-05-03",
      "subject": "feat(portraits): add agent portrait system with sprite picker",
      "kind": "feat",
      "category": "Feature",
      "scope": "portraits",
      "title": "add agent portrait system with sprite picker",
      "featureId": "agent-ui-portraits",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 730,
        "deletions": 12,
        "filesChanged": 11,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 9
          },
          {
            "name": "packages",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "d2c3355e5a24c9ee3c01a273f25ee7fc235e3870",
      "shortSha": "d2c3355e",
      "date": "2026-05-03",
      "subject": "feat(mission-studio): editable PRD/outline/acceptance markdown tabs",
      "kind": "feat",
      "category": "Feature",
      "scope": "mission-studio",
      "title": "editable PRD/outline/acceptance markdown tabs",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1132,
        "deletions": 55,
        "filesChanged": 13,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 11
          },
          {
            "name": "packages",
            "count": 1
          },
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "467fc0ecdcb7a43815da714c3a3812682e63554d",
      "shortSha": "467fc0ec",
      "date": "2026-05-03",
      "subject": "refactor(settings): split CompanySettings into InstanceExperimentalSettings",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "settings",
      "title": "split CompanySettings into InstanceExperimentalSettings",
      "featureId": "architecture-refactors",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1960,
        "deletions": 1185,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "e2d6d91cf3c48db5aba7229d4d165751b10e647e",
      "shortSha": "e2d6d91c",
      "date": "2026-05-03",
      "subject": "feat(issue-routing): LLM routing panel and artifact delivery UI",
      "kind": "feat",
      "category": "Feature",
      "scope": "issue-routing",
      "title": "LLM routing panel and artifact delivery UI",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 3144,
        "deletions": 343,
        "filesChanged": 18,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 18
          }
        ]
      }
    },
    {
      "sha": "14f42fd56bc5fb7eea8b3c5b72b7eb706cd56b2d",
      "shortSha": "14f42fd5",
      "date": "2026-05-03",
      "subject": "test: update test suite for LLM transport, adapter removal, and routing",
      "kind": "test",
      "category": "Test",
      "scope": null,
      "title": "update test suite for LLM transport, adapter removal, and routing",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 861,
        "deletions": 231,
        "filesChanged": 31,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 24
          },
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "8a60892538552c69bcc26da063f1af6ab785ba5f",
      "shortSha": "8a608925",
      "date": "2026-05-03",
      "subject": "chore: update dependencies, env vars, and CSS tokens",
      "kind": "chore",
      "category": "Chore",
      "scope": null,
      "title": "update dependencies, env vars, and CSS tokens",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 859,
        "deletions": 128,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          },
          {
            "name": ".env.example",
            "count": 1
          },
          {
            "name": "docs",
            "count": 1
          },
          {
            "name": "package.json",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "f730c50904218ae182bee5fa70df2b1223523277",
      "shortSha": "f730c509",
      "date": "2026-05-03",
      "subject": "feat(server): wire LLM transport and new services into server layer",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "wire LLM transport and new services into server layer",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1513,
        "deletions": 266,
        "filesChanged": 24,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 24
          }
        ]
      }
    },
    {
      "sha": "1f9cde1b4e0317e44db984d1c5d63b873e69bfb5",
      "shortSha": "1f9cde1b",
      "date": "2026-05-03",
      "subject": "feat(ui): wire portrait system, routing panels, and API updates into UI",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "wire portrait system, routing panels, and API updates into UI",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1324,
        "deletions": 514,
        "filesChanged": 35,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 35
          }
        ]
      }
    },
    {
      "sha": "faa18b9a855d90e1960456b2975fd9de75cf6fcc",
      "shortSha": "faa18b9a",
      "date": "2026-05-03",
      "subject": "chore(devtools): add smoke test scripts and dev diagnostic helpers",
      "kind": "chore",
      "category": "Chore",
      "scope": "devtools",
      "title": "add smoke test scripts and dev diagnostic helpers",
      "featureId": "quality-devtools-tests",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 967,
        "deletions": 0,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "scripts",
            "count": 3
          },
          {
            "name": "server",
            "count": 2
          },
          {
            "name": ".cursor",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "c5f824c703d597ecf579e26556caf4e5120d48aa",
      "shortSha": "c5f824c7",
      "date": "2026-05-04",
      "subject": "Merge origin/main: resolve all 12 conflicts, fix version-pinning cache bug",
      "kind": "other",
      "category": "Merge",
      "scope": null,
      "title": "Merge origin/main: resolve all 12 conflicts, fix version-pinning cache bug",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 8754,
        "deletions": 251,
        "filesChanged": 93,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 56
          },
          {
            "name": "ui",
            "count": 26
          },
          {
            "name": "packages",
            "count": 4
          },
          {
            "name": ".dockerignore",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "876b664306ee4d1cb800757aff24f1453c233e52",
      "shortSha": "876b6643",
      "date": "2026-05-04",
      "subject": "fix: patch test failures and cacheCredentials version-strip bug from merge",
      "kind": "fix",
      "category": "Fix",
      "scope": null,
      "title": "patch test failures and cacheCredentials version-strip bug from merge",
      "featureId": "quality-devtools-tests",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 21,
        "deletions": 9,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "1516578b813d4c580153b6effabf667df8de0836",
      "shortSha": "1516578b",
      "date": "2026-05-04",
      "subject": "feat: add POST /:companyId/backup endpoint for manual database snapshots",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "add POST /:companyId/backup endpoint for manual database snapshots",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 28,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "f48b0aa133dfec7b85892203ef28410d349cf1d4",
      "shortSha": "f48b0aa1",
      "date": "2026-05-04",
      "subject": "feat: HiDPI portrait rendering with devicePixelRatio cover math and cache-busting",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "HiDPI portrait rendering with devicePixelRatio cover math and cache-busting",
      "featureId": "agent-ui-portraits",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 118,
        "deletions": 2,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "591aa7d1b05cdb4673f5f4666cf3455062cab323",
      "shortSha": "591aa7d1",
      "date": "2026-05-04",
      "subject": "Merge conflict resolution plan and impelmentaiton",
      "kind": "other",
      "category": "Merge",
      "scope": null,
      "title": "Merge conflict resolution plan and impelmentaiton",
      "featureId": "docs-planning-demo",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 604,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "23ac2ad8681a794bdc571661fd54f994a33d8d3d",
      "shortSha": "23ac2ad8",
      "date": "2026-05-04",
      "subject": "fix: security, performance, a11y, and correctness improvements",
      "kind": "fix",
      "category": "Fix",
      "scope": null,
      "title": "security, performance, a11y, and correctness improvements",
      "featureId": "security-runtime-hardening",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 344,
        "deletions": 13,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          },
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "77edffe0cd9e804495b41e0d468c865b75d11436",
      "shortSha": "77edffe0",
      "date": "2026-05-04",
      "subject": "feat(ui): Agents page — sort modes, persisted custom order, drag grid polish",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "Agents page — sort modes, persisted custom order, drag grid polish",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 286,
        "deletions": 89,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "c754bee26ed3cc4f4029e67645e298e9d861d200",
      "shortSha": "c754bee2",
      "date": "2026-05-04",
      "subject": "feat(ui): AgentCharacterCard — department-colored rim, static hover glow",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "AgentCharacterCard — department-colored rim, static hover glow",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 16,
        "deletions": 31,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "eda4885d69d398ec4f7443c6b972c4ad70601ada",
      "shortSha": "eda4885d",
      "date": "2026-05-04",
      "subject": "feat(ui): gate CLI fields by adapter and add gamified runtime labels",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "gate CLI fields by adapter and add gamified runtime labels",
      "featureId": "security-runtime-hardening",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 129,
        "deletions": 75,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "30ea550c1ac7afeb303fbe13c949e1e33424af19",
      "shortSha": "30ea550c",
      "date": "2026-05-04",
      "subject": "feat(ui): add sticky teammate preview and portrait metadata on new agent wizard",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "add sticky teammate preview and portrait metadata on new agent wizard",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "origin/phase-4-plus-phase-5",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 387,
        "deletions": 103,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "63ebfc08d4f163838dca68b07cabd7be44d01add",
      "shortSha": "63ebfc08",
      "date": "2026-05-04",
      "subject": "fix(db): make migrations 0060-0062 idempotent for drifted embedded PG",
      "kind": "fix",
      "category": "Fix",
      "scope": "db",
      "title": "make migrations 0060-0062 idempotent for drifted embedded PG",
      "featureId": "schema-shared-types",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 115,
        "deletions": 45,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 3
          },
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "207d8a3bdaad8029f0b3be2b7f16b251ba731803",
      "shortSha": "207d8a3b",
      "date": "2026-05-04",
      "subject": "fix(config): cache loadConfig result to prevent synchronous disk read loops",
      "kind": "fix",
      "category": "Fix",
      "scope": "config",
      "title": "cache loadConfig result to prevent synchronous disk read loops",
      "featureId": "security-runtime-hardening",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 6,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "b178422c50a4b08a669da036db69db3e8e4d5b58",
      "shortSha": "b178422c",
      "date": "2026-05-05",
      "subject": "dev: align API-origin UI with Vite dev via embedded middleware",
      "kind": "dev",
      "category": "Other",
      "scope": null,
      "title": "align API-origin UI with Vite dev via embedded middleware",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 20,
        "deletions": 4,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "scripts",
            "count": 1
          },
          {
            "name": "server",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "fc8cd2c53cd72f02e00eab58a69211c77a3428b4",
      "shortSha": "fc8cd2c5",
      "date": "2026-05-05",
      "subject": "fix(dev): stop dual-Vite prebundle races breaking R3F World on API origin",
      "kind": "fix",
      "category": "Fix",
      "scope": "dev",
      "title": "stop dual-Vite prebundle races breaking R3F World on API origin",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 27,
        "deletions": 1,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "scripts",
            "count": 1
          },
          {
            "name": "server",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "c7925c7b84ee987d66678b6a45fe6bae94866c16",
      "shortSha": "c7925c7b",
      "date": "2026-05-05",
      "subject": "feat(projects): cascading deletion of project issues and storage attachments",
      "kind": "feat",
      "category": "Feature",
      "scope": "projects",
      "title": "cascading deletion of project issues and storage attachments",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 692,
        "deletions": 28,
        "filesChanged": 10,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          },
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "6a41c35fe47d5900b1e692b5e75699fcf243bd88",
      "shortSha": "6a41c35f",
      "date": "2026-05-05",
      "subject": "chore: optimize docker build and compose configuration",
      "kind": "chore",
      "category": "Chore",
      "scope": null,
      "title": "optimize docker build and compose configuration",
      "featureId": "security-runtime-hardening",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 138,
        "deletions": 15,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": ".npmrc",
            "count": 1
          },
          {
            "name": "Dockerfile",
            "count": 1
          },
          {
            "name": "docker-compose.yaml",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "9e114fe75c481355c7f434a9ba21f548033712f6",
      "shortSha": "9e114fe7",
      "date": "2026-05-05",
      "subject": "fix: resolve authentication and offline routing bugs",
      "kind": "fix",
      "category": "Fix",
      "scope": null,
      "title": "resolve authentication and offline routing bugs",
      "featureId": "security-runtime-hardening",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 36,
        "deletions": 7,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          },
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "d98cb7ce337c34b03b1b87edd5b95b677a3a2980",
      "shortSha": "d98cb7ce",
      "date": "2026-05-05",
      "subject": "chore(scripts): add admin promotion and email verification utilities",
      "kind": "chore",
      "category": "Chore",
      "scope": "scripts",
      "title": "add admin promotion and email verification utilities",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/feat/hosted-paperclip-skills",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 73,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "scripts",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "ee5df644d315f79e2e73117caf9b61432a6cdee1",
      "shortSha": "ee5df644",
      "date": "2026-05-06",
      "subject": "chore(agent-ops): add measurable Cursor workflow framework",
      "kind": "chore",
      "category": "Chore",
      "scope": "agent-ops",
      "title": "add measurable Cursor workflow framework",
      "featureId": "miscellaneous",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1192,
        "deletions": 3,
        "filesChanged": 21,
        "primaryDirectories": [
          {
            "name": "scripts",
            "count": 7
          },
          {
            "name": "config",
            "count": 6
          },
          {
            "name": ".cursor",
            "count": 3
          },
          {
            "name": ".github",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "4863fafc5636b48993727d1b9fa5a1f670520e20",
      "shortSha": "4863fafc",
      "date": "2026-05-06",
      "subject": "feat(projects): add project agent chat and memory journal workflow",
      "kind": "feat",
      "category": "Feature",
      "scope": "projects",
      "title": "add project agent chat and memory journal workflow",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 14228,
        "deletions": 82,
        "filesChanged": 56,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 35
          },
          {
            "name": "packages",
            "count": 11
          },
          {
            "name": "server",
            "count": 10
          }
        ]
      }
    },
    {
      "sha": "68d64c96e974ad379279b405d1866cd6963342a0",
      "shortSha": "68d64c96",
      "date": "2026-05-06",
      "subject": "fix(onboarding): force company list refetch and show refresh state",
      "kind": "fix",
      "category": "Fix",
      "scope": "onboarding",
      "title": "force company list refetch and show refresh state",
      "featureId": "work2-company-foundation",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 15,
        "deletions": 4,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "95eca4082708818733644ec62821a1c2c18cc103",
      "shortSha": "95eca408",
      "date": "2026-05-06",
      "subject": "chore(repo): ignore local Cursor MCP and skill configs",
      "kind": "chore",
      "category": "Chore",
      "scope": "repo",
      "title": "ignore local Cursor MCP and skill configs",
      "featureId": "skills-harness",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 4,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": ".gitignore",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "042e76da8c6ba4a1ddde51cd06413fb30c3c07f4",
      "shortSha": "042e76da",
      "date": "2026-05-06",
      "subject": "feat(routing): harden execution authority and context persistence",
      "kind": "feat",
      "category": "Feature",
      "scope": "routing",
      "title": "harden execution authority and context persistence",
      "featureId": "security-runtime-hardening",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1266,
        "deletions": 306,
        "filesChanged": 26,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 14
          },
          {
            "name": "packages",
            "count": 12
          }
        ]
      }
    },
    {
      "sha": "72670d449a314940e8743194b37d58e17a32ae9b",
      "shortSha": "72670d44",
      "date": "2026-05-06",
      "subject": "feat(ui): split ticket and project context surfaces",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "split ticket and project context surfaces",
      "featureId": "project-workspaces-files",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 446,
        "deletions": 47,
        "filesChanged": 13,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 13
          }
        ]
      }
    },
    {
      "sha": "46c5e25686e8089429d15fcbd444851725e6bee5",
      "shortSha": "46c5e256",
      "date": "2026-05-06",
      "subject": "feat(routing): enforce profile-based provider policy and manual assignee runs",
      "kind": "feat",
      "category": "Feature",
      "scope": "routing",
      "title": "enforce profile-based provider policy and manual assignee runs",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2985,
        "deletions": 209,
        "filesChanged": 42,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 25
          },
          {
            "name": "packages",
            "count": 9
          },
          {
            "name": "ui",
            "count": 6
          },
          {
            "name": ".env.example",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "68b2b225fca7f9b2b060a1c2428055cd9a8e05ab",
      "shortSha": "68b2b225",
      "date": "2026-05-06",
      "subject": "feat(artifacts): dedupe builds and persist canonical project-file outputs",
      "kind": "feat",
      "category": "Feature",
      "scope": "artifacts",
      "title": "dedupe builds and persist canonical project-file outputs",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1271,
        "deletions": 255,
        "filesChanged": 19,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 14
          },
          {
            "name": "ui",
            "count": 4
          },
          {
            "name": "packages",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "25f9cde52a02c9c96d268ba2c5c0e33006e2f54f",
      "shortSha": "25f9cde5",
      "date": "2026-05-06",
      "subject": "feat(discovery): upgrade mission Q&A richness and force OpenAI naming path",
      "kind": "feat",
      "category": "Feature",
      "scope": "discovery",
      "title": "upgrade mission Q&A richness and force OpenAI naming path",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 57,
        "deletions": 22,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "5b701aef23000cb5f50959d140677912bd6c1da1",
      "shortSha": "5b701aef",
      "date": "2026-05-06",
      "subject": "fix(orchestration): recover coordinator parents and stabilize task run presentation",
      "kind": "fix",
      "category": "Fix",
      "scope": "orchestration",
      "title": "recover coordinator parents and stabilize task run presentation",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 836,
        "deletions": 287,
        "filesChanged": 14,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          },
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "b40f62d8d1cef405022d1d234bf15ad2d8c3bc41",
      "shortSha": "b40f62d8",
      "date": "2026-05-07",
      "subject": "docs(capacity): add architecture capacity review for 1000 users",
      "kind": "docs",
      "category": "Docs",
      "scope": "capacity",
      "title": "add architecture capacity review for 1000 users",
      "featureId": "security-runtime-hardening",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 454,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "e422b27a9e77d051b2fb48690d392a8b25667a62",
      "shortSha": "e422b27a",
      "date": "2026-05-07",
      "subject": "feat(db): add unified chat persistence schema and migration",
      "kind": "feat",
      "category": "Feature",
      "scope": "db",
      "title": "add unified chat persistence schema and migration",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 410,
        "deletions": 0,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "7c39b13ea8fd6f039acec354a98dc4b2efc6cf78",
      "shortSha": "7c39b13e",
      "date": "2026-05-07",
      "subject": "feat(shared): add unified chat types and validators",
      "kind": "feat",
      "category": "Feature",
      "scope": "shared",
      "title": "add unified chat types and validators",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 220,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "fff7eec9df21400a23fd691eb405c5325d5fec0e",
      "shortSha": "fff7eec9",
      "date": "2026-05-07",
      "subject": "feat(shared): add readable memory helpers and agent memory metadata",
      "kind": "feat",
      "category": "Feature",
      "scope": "shared",
      "title": "add readable memory helpers and agent memory metadata",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 328,
        "deletions": 0,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "76fc43ddeb2f0c44f5907219acb22112b42f0eca",
      "shortSha": "76fc43dd",
      "date": "2026-05-07",
      "subject": "docs(onboarding): refresh CEO and default agent instructions",
      "kind": "docs",
      "category": "Docs",
      "scope": "onboarding",
      "title": "refresh CEO and default agent instructions",
      "featureId": "work2-company-foundation",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 16,
        "deletions": 12,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "dd05a0430b1f7cb5534dea4a453679c2bc600af7",
      "shortSha": "dd05a043",
      "date": "2026-05-07",
      "subject": "feat(manager): refine autorun and intake flow with tests",
      "kind": "feat",
      "category": "Feature",
      "scope": "manager",
      "title": "refine autorun and intake flow with tests",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 225,
        "deletions": 25,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "a09786c4b3d858db5b63d991127c28fe57432b1d",
      "shortSha": "a09786c4",
      "date": "2026-05-07",
      "subject": "feat(chat-server): add unified chat route and core chat services",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat-server",
      "title": "add unified chat route and core chat services",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1697,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "a5679965905e665f9b664386cab9e772bd5e6c51",
      "shortSha": "a5679965",
      "date": "2026-05-07",
      "subject": "feat(chat-server): wire chat route and service barrels into app",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat-server",
      "title": "wire chat route and service barrels into app",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 6,
        "deletions": 1,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "d4bbd9289272b1e062b9951942e390799ce6e0cc",
      "shortSha": "d4bbd928",
      "date": "2026-05-07",
      "subject": "feat(chat-server): integrate unified chat into department and project flows",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat-server",
      "title": "integrate unified chat into department and project flows",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 204,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "c5f661359ab3649659b6f7f015bdaf6c60a0ee2e",
      "shortSha": "c5f66135",
      "date": "2026-05-07",
      "subject": "feat(agent-memory): add readable project-memory summaries to agent routes",
      "kind": "feat",
      "category": "Feature",
      "scope": "agent-memory",
      "title": "add readable project-memory summaries to agent routes",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 858,
        "deletions": 9,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "104b181df85fa59f2bb4272ce29038432999ac09",
      "shortSha": "104b181d",
      "date": "2026-05-07",
      "subject": "fix(heartbeat): adjust heartbeat service behavior",
      "kind": "fix",
      "category": "Fix",
      "scope": "heartbeat",
      "title": "adjust heartbeat service behavior",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 23,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "2af8dd11b5ee59aae6445b85063c629c76d6c995",
      "shortSha": "2af8dd11",
      "date": "2026-05-07",
      "subject": "feat(ui-api): add chat/departments API clients and query keys",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-api",
      "title": "add chat/departments API clients and query keys",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 173,
        "deletions": 0,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "b28f8ea06c4a3bd123a592fae0a0d335b536e2f7",
      "shortSha": "b28f8ea0",
      "date": "2026-05-07",
      "subject": "feat(ui-chat): add socket integration, chat shell, and scoped hooks",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-chat",
      "title": "add socket integration, chat shell, and scoped hooks",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1502,
        "deletions": 0,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "4bf77ef5c211c806966c3f0c1f20d4d1a3118a76",
      "shortSha": "4bf77ef5",
      "date": "2026-05-07",
      "subject": "feat(ui-chat): add persistent agent chat and department chat panels",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-chat",
      "title": "add persistent agent chat and department chat panels",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 410,
        "deletions": 457,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "18e6704d00b0df6d48130b1566a11cec1bc4ac49",
      "shortSha": "18e6704d",
      "date": "2026-05-07",
      "subject": "feat(ui-agent): add agent detail route state helpers",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-agent",
      "title": "add agent detail route state helpers",
      "featureId": "agent-ui-portraits",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 39,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "41cb64b2f4746a92d5439656402015a656d0233a",
      "shortSha": "41cb64b2",
      "date": "2026-05-07",
      "subject": "feat(ui-agent): split agent detail into modular panel components",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-agent",
      "title": "split agent detail into modular panel components",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1492,
        "deletions": 2,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "4774419858e1622720968b303a05adff01f9a40d",
      "shortSha": "47744198",
      "date": "2026-05-07",
      "subject": "refactor(ui-agent): rewire AgentDetail page to new panel architecture",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "ui-agent",
      "title": "rewire AgentDetail page to new panel architecture",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 566,
        "deletions": 294,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "b3b24e70d9bdf200490a3f2abe32dde9924eacf3",
      "shortSha": "b3b24e70",
      "date": "2026-05-07",
      "subject": "feat(ui-layout): add entity rails and panel-context upgrades",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-layout",
      "title": "add entity rails and panel-context upgrades",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 717,
        "deletions": 5,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "703a9ab63b9bb2f1f5944702a7cbf5064beed5a7",
      "shortSha": "703a9ab6",
      "date": "2026-05-07",
      "subject": "feat(ui-dialogs): update dialog context and issue/creation flows",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-dialogs",
      "title": "update dialog context and issue/creation flows",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 92,
        "deletions": 13,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "7156ba561b083e787e31d5f019674eee0be481b0",
      "shortSha": "7156ba56",
      "date": "2026-05-07",
      "subject": "feat(ui-departments): refresh department list/detail and hub card flow",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-departments",
      "title": "refresh department list/detail and hub card flow",
      "featureId": "department-workspace",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 469,
        "deletions": 552,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "0abded52d8c1302ccb0f6d913410e8af3116e7bd",
      "shortSha": "0abded52",
      "date": "2026-05-07",
      "subject": "feat(ui-projects): refresh project hub and project detail surfaces",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui-projects",
      "title": "refresh project hub and project detail surfaces",
      "featureId": "project-workspaces-files",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 783,
        "deletions": 236,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "32578e99a5ad16843d77e56c1355c8143e4c5dff",
      "shortSha": "32578e99",
      "date": "2026-05-07",
      "subject": "style(ui): add blocks tokens and update shared UI primitives",
      "kind": "style",
      "category": "Style",
      "scope": "ui",
      "title": "add blocks tokens and update shared UI primitives",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1480,
        "deletions": 167,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "170cd6f9badecf0b52d84ba611651d0c0f65b93c",
      "shortSha": "170cd6f9",
      "date": "2026-05-07",
      "subject": "chore(ui): apply misc panel, scroll, routines, and test tweaks",
      "kind": "chore",
      "category": "Chore",
      "scope": "ui",
      "title": "apply misc panel, scroll, routines, and test tweaks",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 122,
        "deletions": 27,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "3e29368a5f1827c9af76be0bba6b284d266a9fab",
      "shortSha": "3e29368a",
      "date": "2026-05-08",
      "subject": "fix(db-routing): allow moonshot transport in issue routing decisions",
      "kind": "fix",
      "category": "Fix",
      "scope": "db-routing",
      "title": "allow moonshot transport in issue routing decisions",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 16,
        "deletions": 1,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "2fb3b6645f8f3a96f746b79ee9805e2d497681bc",
      "shortSha": "2fb3b664",
      "date": "2026-05-08",
      "subject": "feat(routing-defaults): prefer kimi for small/medium task tiers",
      "kind": "feat",
      "category": "Feature",
      "scope": "routing-defaults",
      "title": "prefer kimi for small/medium task tiers",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 61,
        "deletions": 4,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 1
          },
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "63118a0697b8256b62d04d0cb1f7832a8c0fc7d6",
      "shortSha": "63118a06",
      "date": "2026-05-08",
      "subject": "feat(task-routing): add persisted task-level llm provider/model overrides",
      "kind": "feat",
      "category": "Feature",
      "scope": "task-routing",
      "title": "add persisted task-level llm provider/model overrides",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 815,
        "deletions": 33,
        "filesChanged": 11,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          },
          {
            "name": "ui",
            "count": 4
          },
          {
            "name": "packages",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "8f7cbe9dd5074715e7d76c40859e1b0308b788a8",
      "shortSha": "8f7cbe9d",
      "date": "2026-05-08",
      "subject": "feat(moonshot-runtime): wire kimi transport, thinking mode, and model routing",
      "kind": "feat",
      "category": "Feature",
      "scope": "moonshot-runtime",
      "title": "wire kimi transport, thinking mode, and model routing",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 559,
        "deletions": 31,
        "filesChanged": 15,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 13
          },
          {
            "name": "packages",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "1ac769fb74e2d63ffd53e55b5118a4696d0397ce",
      "shortSha": "1ac769fb",
      "date": "2026-05-08",
      "subject": "chore(docker): guard against stale shared issue override schema builds",
      "kind": "chore",
      "category": "Chore",
      "scope": "docker",
      "title": "guard against stale shared issue override schema builds",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 6,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "Dockerfile",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "be5321ce496589d5d72eaebb1471baf92e44a967",
      "shortSha": "be5321ce",
      "date": "2026-05-08",
      "subject": "feat(shared): memory context contracts and web artifact routing helpers",
      "kind": "feat",
      "category": "Feature",
      "scope": "shared",
      "title": "memory context contracts and web artifact routing helpers",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 174,
        "deletions": 4,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "d3b479ec2cbc0d2038ec04a90e873fee6e0ead45",
      "shortSha": "d3b479ec",
      "date": "2026-05-08",
      "subject": "feat(server): build persisted task-spec markdown for project memories",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "build persisted task-spec markdown for project memories",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 55,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "2398b55e158a1e00bed121c7e5c081c4ae12c917",
      "shortSha": "2398b55e",
      "date": "2026-05-08",
      "subject": "feat(server): aggregated memory-context API over agent and project memories",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "aggregated memory-context API over agent and project memories",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 496,
        "deletions": 1,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "2bff277f096996b01eea3afa32ec349cf5cc3d90",
      "shortSha": "2bff277f",
      "date": "2026-05-08",
      "subject": "feat(server): Moonshot Kimi probe and export Moonshot secret constant",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "Moonshot Kimi probe and export Moonshot secret constant",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 80,
        "deletions": 2,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "897b065faee943caf63ed861d167fd5a6f63496f",
      "shortSha": "897b065f",
      "date": "2026-05-08",
      "subject": "feat(server): project memory GET semantics and route tests",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "project memory GET semantics and route tests",
      "featureId": "memory-chat-rag",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 187,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "76920551b03b7b65b891fe81ad2c82aa1582aafc",
      "shortSha": "76920551",
      "date": "2026-05-08",
      "subject": "feat(server): agent execution uses task-spec memories and delivery intent",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "agent execution uses task-spec memories and delivery intent",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 106,
        "deletions": 13,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "8f3c6d28ddb86ae75377a467f1bd66cf7fa9ffee",
      "shortSha": "8f3c6d28",
      "date": "2026-05-08",
      "subject": "feat(server): Mission Studio intake, discovery batches, and local docs ingest",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "Mission Studio intake, discovery batches, and local docs ingest",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 270,
        "deletions": 41,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "7c6674f1e790e1b6c6de7400de5d3f81fe07d89a",
      "shortSha": "7c6674f1",
      "date": "2026-05-08",
      "subject": "chore(env): document Moonshot API keys and mission discovery batching",
      "kind": "chore",
      "category": "Chore",
      "scope": "env",
      "title": "document Moonshot API keys and mission discovery batching",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 7,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": ".env.example",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "f09c5731343abf2a92af6c8c439459a2679d6635",
      "shortSha": "f09c5731",
      "date": "2026-05-08",
      "subject": "feat(ui): Mission Studio discovery batch UX and board review overlay",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "Mission Studio discovery batch UX and board review overlay",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 175,
        "deletions": 32,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "8071733d763a1706a7c68d2c30f1adbf2679f99a",
      "shortSha": "8071733d",
      "date": "2026-05-08",
      "subject": "feat(ui): Moonshot company secret card and experimental LLM controls",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "Moonshot company secret card and experimental LLM controls",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 613,
        "deletions": 26,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "3b43d96239dc4d9b0867e4abb88655a6b8d06449",
      "shortSha": "3b43d962",
      "date": "2026-05-08",
      "subject": "feat(ui): agent context memory inspector and manager intake LLM tweaks",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "agent context memory inspector and manager intake LLM tweaks",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 458,
        "deletions": 81,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "39f980f01f485b8b5df86f3a25081a73aae85389",
      "shortSha": "39f980f0",
      "date": "2026-05-08",
      "subject": "fix(run-assignee): require explicit reopen and preflight active execution guard",
      "kind": "fix",
      "category": "Fix",
      "scope": "run-assignee",
      "title": "require explicit reopen and preflight active execution guard",
      "featureId": "task-issue-workflow",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 56,
        "deletions": 3,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "b1ba3ac860ae2cda9eda4e6f9421cf4e71888bc7",
      "shortSha": "b1ba3ac8",
      "date": "2026-05-08",
      "subject": "feat(moonshot-budget): cap output and extend long-run timeout windows",
      "kind": "feat",
      "category": "Feature",
      "scope": "moonshot-budget",
      "title": "cap output and extend long-run timeout windows",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main",
        "checkpoint/task-llm-routing-freeze-20260508-0017z"
      ],
      "onMain": true,
      "stats": {
        "insertions": 32,
        "deletions": 2,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "c828a5dded11671892d161b5f37a72737a10c598",
      "shortSha": "c828a5dd",
      "date": "2026-05-08",
      "subject": "chore(freeze): capture routing checkpoint snapshot and baseline metadata",
      "kind": "chore",
      "category": "Chore",
      "scope": "freeze",
      "title": "capture routing checkpoint snapshot and baseline metadata",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 38,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "artifacts",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "3fc9510fb6823c22abab7368330069498ca0279e",
      "shortSha": "3fc9510f",
      "date": "2026-05-08",
      "subject": "feat(shared): generationLlm on artifact work-product metadata",
      "kind": "feat",
      "category": "Feature",
      "scope": "shared",
      "title": "generationLlm on artifact work-product metadata",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 36,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "e4439f041b0c83b47972505f818d25fa44092796",
      "shortSha": "e4439f04",
      "date": "2026-05-08",
      "subject": "feat(server): persist generation LLM on artifacts and surface forced transport",
      "kind": "feat",
      "category": "Feature",
      "scope": "server",
      "title": "persist generation LLM on artifacts and surface forced transport",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 97,
        "deletions": 1,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "b3a9683d9e4b30594e057c6646f8868c5cc23e36",
      "shortSha": "b3a9683d",
      "date": "2026-05-08",
      "subject": "feat(ui): Mission Studio council flow and Artifacts generation display",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "Mission Studio council flow and Artifacts generation display",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 190,
        "deletions": 91,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "29ac768075646442e99118cf014c0d71828fc3e3",
      "shortSha": "29ac7680",
      "date": "2026-05-08",
      "subject": "chore: PRD/ticket notes, dev listener script, agent-ops capture",
      "kind": "chore",
      "category": "Chore",
      "scope": null,
      "title": "PRD/ticket notes, dev listener script, agent-ops capture",
      "featureId": "mission-studio",
      "refs": [
        "avatar-blinking-animation",
        "main",
        "origin",
        "origin/avatar-blinking-animation",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 296,
        "deletions": 0,
        "filesChanged": 11,
        "primaryDirectories": [
          {
            "name": "artifacts",
            "count": 8
          },
          {
            "name": "docs",
            "count": 2
          },
          {
            "name": "scripts",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "82ed9afebb7437908ce792dd9a6c5e926cad9dbc",
      "shortSha": "82ed9afe",
      "date": "2026-05-10",
      "subject": "feat(avatar): add blinking portraits and chroma cleanup tool",
      "kind": "feat",
      "category": "Feature",
      "scope": "avatar",
      "title": "add blinking portraits and chroma cleanup tool",
      "featureId": "world-realtime-presence",
      "refs": [
        "avatar-blinking-animation",
        "origin/avatar-blinking-animation"
      ],
      "onMain": false,
      "stats": {
        "insertions": 1790,
        "deletions": 51,
        "filesChanged": 22,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 16
          },
          {
            "name": "packages",
            "count": 2
          },
          {
            "name": "scripts",
            "count": 2
          },
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "b308c643cf336b85935a33f3dbb7e1115a150472",
      "shortSha": "b308c643",
      "date": "2026-05-11",
      "subject": "fix(db): clean up migration 0057 orphaned RLS directives",
      "kind": "fix",
      "category": "Fix",
      "scope": "db",
      "title": "clean up migration 0057 orphaned RLS directives",
      "featureId": "schema-shared-types",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 39,
        "deletions": 59,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "fd5fcb04d6196c646abc08e4bad44a5aa9138acc",
      "shortSha": "fd5fcb04",
      "date": "2026-05-11",
      "subject": "feat(skills-harness): trajectory capture pipeline",
      "kind": "feat",
      "category": "Feature",
      "scope": "skills-harness",
      "title": "trajectory capture pipeline",
      "featureId": "skills-harness",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1004,
        "deletions": 0,
        "filesChanged": 15,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 8
          },
          {
            "name": "server",
            "count": 6
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "bd9c025e02d01ddff923f03c421ef39e0300fa58",
      "shortSha": "bd9c025e",
      "date": "2026-05-11",
      "subject": "feat(skills-harness): skill distillation and relevance-ranked retrieval",
      "kind": "feat",
      "category": "Feature",
      "scope": "skills-harness",
      "title": "skill distillation and relevance-ranked retrieval",
      "featureId": "memory-chat-rag",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1127,
        "deletions": 4,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "edbd1b9f5d74da9b9e469fc8cd1e3e4d2cac8e8e",
      "shortSha": "edbd1b9f",
      "date": "2026-05-11",
      "subject": "feat(skills-harness): bundled skills library and build-time copy script",
      "kind": "feat",
      "category": "Feature",
      "scope": "skills-harness",
      "title": "bundled skills library and build-time copy script",
      "featureId": "skills-harness",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 373,
        "deletions": 1,
        "filesChanged": 17,
        "primaryDirectories": [
          {
            "name": "skills",
            "count": 14
          },
          {
            "name": "server",
            "count": 2
          },
          {
            "name": ".gitignore",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "4bfc7f8039cd9d0e33725a01370d85671b7fcc89",
      "shortSha": "4bfc7f80",
      "date": "2026-05-11",
      "subject": "test(skills-harness): trajectory capture, distillation parse, and retrieval test suite",
      "kind": "test",
      "category": "Test",
      "scope": "skills-harness",
      "title": "trajectory capture, distillation parse, and retrieval test suite",
      "featureId": "memory-chat-rag",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 531,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "101eade8a9c3d05bcc81fd1288ab287af4ce7c1a",
      "shortSha": "101eade8",
      "date": "2026-05-11",
      "subject": "feat(skills-harness): Skill Proposals Review UI",
      "kind": "feat",
      "category": "Feature",
      "scope": "skills-harness",
      "title": "Skill Proposals Review UI",
      "featureId": "skills-harness",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 550,
        "deletions": 0,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "6e302427b53d6fd1825fc311a63112c2cae1573c",
      "shortSha": "6e302427",
      "date": "2026-05-11",
      "subject": "docs(skills-harness): harness tour, deployment plan, integration status, env flags",
      "kind": "docs",
      "category": "Docs",
      "scope": "skills-harness",
      "title": "harness tour, deployment plan, integration status, env flags",
      "featureId": "skills-harness",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2256,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "9011b6922d45002eaea5a1c2d399ccb8e78edbaf",
      "shortSha": "9011b692",
      "date": "2026-05-11",
      "subject": "script: trigger-and-watch harness smoke driver",
      "kind": "script",
      "category": "Other",
      "scope": null,
      "title": "trigger-and-watch harness smoke driver",
      "featureId": "skills-harness",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 108,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "cbda983a8e9f1829e5618cd851905803cf2afe59",
      "shortSha": "cbda983a",
      "date": "2026-05-11",
      "subject": "feat: per-task LLM transport and model override in manager intake",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "per-task LLM transport and model override in manager intake",
      "featureId": "mission-studio",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 244,
        "deletions": 19,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          },
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "43d410fdc139c4dafaee2c9b465c6726bf31f7ef",
      "shortSha": "43d410fd",
      "date": "2026-05-11",
      "subject": "fix: budget service resilience for missing budget tables",
      "kind": "fix",
      "category": "Fix",
      "scope": null,
      "title": "budget service resilience for missing budget tables",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 63,
        "deletions": 15,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "4d1580ba80c07abc12492a926ae74b02aa11f6ec",
      "shortSha": "4d1580ba",
      "date": "2026-05-11",
      "subject": "feat(ui): Delivery Panel layout refactor — top-anchor, dismissal, and sizing",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "Delivery Panel layout refactor — top-anchor, dismissal, and sizing",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 161,
        "deletions": 99,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "ad3f686efbd69c168742ce1d9d3ecf6840ae630f",
      "shortSha": "ad3f686e",
      "date": "2026-05-11",
      "subject": "feat: issue-level LLM direct override in routing authority and UI",
      "kind": "feat",
      "category": "Feature",
      "scope": null,
      "title": "issue-level LLM direct override in routing authority and UI",
      "featureId": "task-issue-workflow",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 103,
        "deletions": 134,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          },
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "ea33d8a3387c6acf62938137217cfb6e1c934aef",
      "shortSha": "ea33d8a3",
      "date": "2026-05-11",
      "subject": "chore(agent-ops): update benchmark result, eval report, and session events",
      "kind": "chore",
      "category": "Chore",
      "scope": "agent-ops",
      "title": "update benchmark result, eval report, and session events",
      "featureId": "quality-devtools-tests",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 19,
        "deletions": 8,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "artifacts",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "71834b4bdabe2a824718b79fc00947619beca457",
      "shortSha": "71834b4b",
      "date": "2026-05-11",
      "subject": "feat(mission-studio): StepFreeze edits, spellcheck polish, and discovery improvements",
      "kind": "feat",
      "category": "Feature",
      "scope": "mission-studio",
      "title": "StepFreeze edits, spellcheck polish, and discovery improvements",
      "featureId": "mission-studio",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 255,
        "deletions": 70,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "4bccdbdf4abf32584e23f42ab7a72966162b0561",
      "shortSha": "4bccdbdf",
      "date": "2026-05-11",
      "subject": "feat(ui): agent UI polish and chat shell improvements",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "agent UI polish and chat shell improvements",
      "featureId": "memory-chat-rag",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 95,
        "deletions": 13,
        "filesChanged": 10,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 9
          },
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "59d6c9a6f875aed1fb6b4c958313180665b27f05",
      "shortSha": "59d6c9a6",
      "date": "2026-05-11",
      "subject": "feat(issues): infer artifact intent for web tasks",
      "kind": "feat",
      "category": "Feature",
      "scope": "issues",
      "title": "infer artifact intent for web tasks",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 87,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "aecb237e7c620213a522cea8ad9acfab5c1d33bd",
      "shortSha": "aecb237e",
      "date": "2026-05-11",
      "subject": "feat(artifacts): harden output budgets and orphan visibility",
      "kind": "feat",
      "category": "Feature",
      "scope": "artifacts",
      "title": "harden output budgets and orphan visibility",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 385,
        "deletions": 11,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "7fe725d5089cad2d1972e70779c4a1a3317424a3",
      "shortSha": "7fe725d5",
      "date": "2026-05-11",
      "subject": "fix(skills-harness): use valid Haiku distillation model",
      "kind": "fix",
      "category": "Fix",
      "scope": "skills-harness",
      "title": "use valid Haiku distillation model",
      "featureId": "skills-harness",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 11,
        "deletions": 11,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 6
          },
          {
            "name": "packages",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "0c6fdc45b50acfc446cc6121f9207b23f9527325",
      "shortSha": "0c6fdc45",
      "date": "2026-05-11",
      "subject": "feat(skills-harness): add harness health endpoint",
      "kind": "feat",
      "category": "Feature",
      "scope": "skills-harness",
      "title": "add harness health endpoint",
      "featureId": "skills-harness",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 340,
        "deletions": 0,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          },
          {
            "name": "packages",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "8c362a48d1ff12bfc1e28dc4815635c68ab6f919",
      "shortSha": "8c362a48",
      "date": "2026-05-11",
      "subject": "feat(ui): show harness health and artifact badges",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "show harness health and artifact badges",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 544,
        "deletions": 4,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "fa9c72377056549e9537717c874ee1a71e1b7046",
      "shortSha": "fa9c7237",
      "date": "2026-05-11",
      "subject": "chore(infra): harden SaaS runtime gates and CI",
      "kind": "chore",
      "category": "Chore",
      "scope": "infra",
      "title": "harden SaaS runtime gates and CI",
      "featureId": "security-runtime-hardening",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 200,
        "deletions": 10,
        "filesChanged": 14,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 8
          },
          {
            "name": "packages",
            "count": 4
          },
          {
            "name": ".gitignore",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "d57666f4ee5a7d05a1a4519d4039ed676fe04d47",
      "shortSha": "d57666f4",
      "date": "2026-05-11",
      "subject": "feat(settings): expose harness configuration page",
      "kind": "feat",
      "category": "Feature",
      "scope": "settings",
      "title": "expose harness configuration page",
      "featureId": "skills-harness",
      "refs": [
        "main",
        "origin",
        "origin/main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 592,
        "deletions": 2,
        "filesChanged": 11,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          },
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "769fe84e3996102072700809df6f5c04a0206d71",
      "shortSha": "769fe84e",
      "date": "2026-05-11",
      "subject": "fix(departments): harden assignment updates",
      "kind": "fix",
      "category": "Fix",
      "scope": "departments",
      "title": "harden assignment updates",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 193,
        "deletions": 10,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          },
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "a9dcfc024119898a4ceea271cd5d3131efeeba79",
      "shortSha": "a9dcfc02",
      "date": "2026-05-13",
      "subject": "db: add SQL migrations 0071-0075 and embedded roster query script",
      "kind": "db",
      "category": "Database",
      "scope": null,
      "title": "add SQL migrations 0071-0075 and embedded roster query script",
      "featureId": "quality-devtools-tests",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 229,
        "deletions": 0,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "552274eb9804151de27b174295815cf1ad3b0c4a",
      "shortSha": "552274eb",
      "date": "2026-05-13",
      "subject": "db: journal snapshot and new Drizzle schema tables",
      "kind": "db",
      "category": "Database",
      "scope": null,
      "title": "journal snapshot and new Drizzle schema tables",
      "featureId": "schema-shared-types",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 12368,
        "deletions": 1,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "ba989aedfc60a193f0769af0cf9bd3a601b7ca23",
      "shortSha": "ba989aed",
      "date": "2026-05-13",
      "subject": "db: wire new tables into schema index and project_memories",
      "kind": "db",
      "category": "Database",
      "scope": null,
      "title": "wire new tables into schema index and project_memories",
      "featureId": "schema-shared-types",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 9,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "1eec460e20f25d983462cd84ba3033345cbb0873",
      "shortSha": "1eec460e",
      "date": "2026-05-13",
      "subject": "shared: add project summary, contribution, and task outcome types",
      "kind": "shared",
      "category": "Shared",
      "scope": null,
      "title": "add project summary, contribution, and task outcome types",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 277,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "65cf07a0dcb756f7666652608ec35b312b090373",
      "shortSha": "65cf07a0",
      "date": "2026-05-13",
      "subject": "shared: extend chat, instance, memory, and socket types",
      "kind": "shared",
      "category": "Shared",
      "scope": null,
      "title": "extend chat, instance, memory, and socket types",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 140,
        "deletions": 1,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "5f1b902b7e57e3042cdfae8b19a172d861d9e946",
      "shortSha": "5f1b902b",
      "date": "2026-05-13",
      "subject": "shared: export new types and tighten chat/instance validators",
      "kind": "shared",
      "category": "Shared",
      "scope": null,
      "title": "export new types and tighten chat/instance validators",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 74,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "d99ec3b8b11e1303d5c945d2af188dd1e8bd8652",
      "shortSha": "d99ec3b8",
      "date": "2026-05-13",
      "subject": "server: memory embedding scheduler and retrieval stack",
      "kind": "server",
      "category": "Server",
      "scope": null,
      "title": "memory embedding scheduler and retrieval stack",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2866,
        "deletions": 0,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "cad282f2da4d45fa2aeeab4530079173d6737e40",
      "shortSha": "cad282f2",
      "date": "2026-05-13",
      "subject": "server: agent chat helpers — web research, sanitize, scope, turn mode",
      "kind": "server",
      "category": "Server",
      "scope": null,
      "title": "agent chat helpers — web research, sanitize, scope, turn mode",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 780,
        "deletions": 0,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "783cb9577e9aed204598bd8843b5f2f67cbd4da9",
      "shortSha": "783cb957",
      "date": "2026-05-13",
      "subject": "server: project summaries, contributions, task mirror, summaries route",
      "kind": "server",
      "category": "Server",
      "scope": null,
      "title": "project summaries, contributions, task mirror, summaries route",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2075,
        "deletions": 0,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "e6334e687cbe3848f96c2290831f0a0064490d0d",
      "shortSha": "e6334e68",
      "date": "2026-05-13",
      "subject": "server: project memory context service and project-memories route",
      "kind": "server",
      "category": "Server",
      "scope": null,
      "title": "project memory context service and project-memories route",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 80,
        "deletions": 6,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "08a22191ff93beb76054ce8180ecb09074970db2",
      "shortSha": "08a22191",
      "date": "2026-05-13",
      "subject": "server: memory env config, monorepo root .env, embedding scheduler",
      "kind": "server",
      "category": "Server",
      "scope": null,
      "title": "memory env config, monorepo root .env, embedding scheduler",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 97,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "181604a8bb5935f4db7f371afdef3268c27d4854",
      "shortSha": "181604a8",
      "date": "2026-05-13",
      "subject": "server: export memory/summary services and wire heartbeat execution",
      "kind": "server",
      "category": "Server",
      "scope": null,
      "title": "export memory/summary services and wire heartbeat execution",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 121,
        "deletions": 6,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "e592546a83b47386af222f2d5cb3eb95994127fd",
      "shortSha": "e592546a",
      "date": "2026-05-13",
      "subject": "server: project chat retrieval and prompt builder updates",
      "kind": "server",
      "category": "Server",
      "scope": null,
      "title": "project chat retrieval and prompt builder updates",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 126,
        "deletions": 34,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "8386bc1d380cef300c278b777882083fa23bf53a",
      "shortSha": "8386bc1d",
      "date": "2026-05-13",
      "subject": "server: agent chat orchestration and direct LLM adapter",
      "kind": "server",
      "category": "Server",
      "scope": null,
      "title": "agent chat orchestration and direct LLM adapter",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1004,
        "deletions": 107,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "2423f644920ff81a4bd680ee42511ce1d098d05e",
      "shortSha": "2423f644",
      "date": "2026-05-13",
      "subject": "server: register routes and health embedding observability",
      "kind": "server",
      "category": "Server",
      "scope": null,
      "title": "register routes and health embedding observability",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 242,
        "deletions": 23,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "fffb87e54a69966ee61328ba160e38e3eb504f96",
      "shortSha": "fffb87e5",
      "date": "2026-05-13",
      "subject": "test(server): memory embedding and retrieval coverage",
      "kind": "test",
      "category": "Test",
      "scope": "server",
      "title": "memory embedding and retrieval coverage",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1151,
        "deletions": 0,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "7a0a2f2ed86abaa35c67b0762c8f7de2126199de",
      "shortSha": "7a0a2f2e",
      "date": "2026-05-13",
      "subject": "test(server): agent chat routing, web research, and assignees",
      "kind": "test",
      "category": "Test",
      "scope": "server",
      "title": "agent chat routing, web research, and assignees",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 774,
        "deletions": 0,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "8c2a34843e29c10a4c36e5d73f7bdaaf12105316",
      "shortSha": "8c2a3484",
      "date": "2026-05-13",
      "subject": "test(server): project summaries and issue context markdown",
      "kind": "test",
      "category": "Test",
      "scope": "server",
      "title": "project summaries and issue context markdown",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 130,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "a8af2835752533b370a6586a61d0c1c09987304f",
      "shortSha": "a8af2835",
      "date": "2026-05-13",
      "subject": "test(server): issue routes harness batch 1",
      "kind": "test",
      "category": "Test",
      "scope": "server",
      "title": "issue routes harness batch 1",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 29,
        "deletions": 0,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "3aaf6c564ece847729dad3daf09667aa3789b330",
      "shortSha": "3aaf6c56",
      "date": "2026-05-13",
      "subject": "test(server): issue routes harness batch 2",
      "kind": "test",
      "category": "Test",
      "scope": "server",
      "title": "issue routes harness batch 2",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 23,
        "deletions": 1,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "a1366494f67188b2e81715437b443b24fae35dbf",
      "shortSha": "a1366494",
      "date": "2026-05-13",
      "subject": "test(server): chat routes, health payloads, instance settings merge",
      "kind": "test",
      "category": "Test",
      "scope": "server",
      "title": "chat routes, health payloads, instance settings merge",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 54,
        "deletions": 4,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "832588149605f392b2eff8c977e3194847dbb63b",
      "shortSha": "83258814",
      "date": "2026-05-13",
      "subject": "ui: project summaries API, query keys, and routing tabs",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "project summaries API, query keys, and routing tabs",
      "featureId": "project-summaries-contributions",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 48,
        "deletions": 1,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "d623362f40b88cf70b58e47c094943f33e00ff85",
      "shortSha": "d623362f",
      "date": "2026-05-13",
      "subject": "ui: chat scopes and ChatShell webResearch wiring",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "chat scopes and ChatShell webResearch wiring",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 382,
        "deletions": 9,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "7e17189cd3da0f91ccf150e8d59deda7d2619a76",
      "shortSha": "7e17189c",
      "date": "2026-05-13",
      "subject": "ui: agent and department chat panels and peer rail",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "agent and department chat panels and peer rail",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 91,
        "deletions": 27,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "129ca40b426b321060bac66244abf07f1a0ce5e5",
      "shortSha": "129ca40b",
      "date": "2026-05-13",
      "subject": "ui: entity roster, taxonomy, and layout shell",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "entity roster, taxonomy, and layout shell",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 129,
        "deletions": 45,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "752fd374dcf71de07244e7aa7e0cbd0c7b9081fa",
      "shortSha": "752fd374",
      "date": "2026-05-13",
      "subject": "ui: project detail, journal, experimental memory settings",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "project detail, journal, experimental memory settings",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 554,
        "deletions": 12,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "149d4b46e3f58ddf78fda9b363f2a25d46aada9c",
      "shortSha": "149d4b46",
      "date": "2026-05-13",
      "subject": "docs: deployment flags cross-links and May 2026 handoffs",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "deployment flags cross-links and May 2026 handoffs",
      "featureId": "docs-planning-demo",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1183,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "bce0e632a47153d2d79727a739d16fe4dfc40308",
      "shortSha": "bce0e632",
      "date": "2026-05-13",
      "subject": "docs: memory pipeline, agent chat reference, RAG notes",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "memory pipeline, agent chat reference, RAG notes",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 415,
        "deletions": 0,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "99aecaaf4de1cb02cf3a1adccdb51ff8eb4424f5",
      "shortSha": "99aecaaf",
      "date": "2026-05-13",
      "subject": "ui: unprefixed redirects for skill-proposals and harness-health",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "unprefixed redirects for skill-proposals and harness-health",
      "featureId": "skills-harness",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "0906aab6b8be65461e6a1d63a9fd21d8063d56d2",
      "shortSha": "0906aab6",
      "date": "2026-05-13",
      "subject": "docs: add agent chat improvement plan from archived worktree",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "add agent chat improvement plan from archived worktree",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 385,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "4cff526b2b477ee3d377a245140ea70b36b95fc6",
      "shortSha": "4cff526b",
      "date": "2026-05-13",
      "subject": "feat(chat): expand turn-mode classifier for production-grade routing",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "expand turn-mode classifier for production-grade routing",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 187,
        "deletions": 11,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "67c6022ff298e8003b63fe85766febd5ac80498d",
      "shortSha": "67c6022f",
      "date": "2026-05-13",
      "subject": "feat(chat): add LLM query rewriter for pronoun resolution before web search",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "add LLM query rewriter for pronoun resolution before web search",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 245,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "f7e418797e90f04d62cbfdc8a9df2b208633b71d",
      "shortSha": "f7e41879",
      "date": "2026-05-13",
      "subject": "feat(chat): add per-turn budget guard and retry helper",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "add per-turn budget guard and retry helper",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 201,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "aff85d854e08f5fab40724ea526b738c68d31cc2",
      "shortSha": "aff85d85",
      "date": "2026-05-13",
      "subject": "feat(chat): add post-generation output guards against hallucinations",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "add post-generation output guards against hallucinations",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 186,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "bff02e41fe97995be805ef9a5205676addc76186",
      "shortSha": "bff02e41",
      "date": "2026-05-13",
      "subject": "feat(chat): replace DuckDuckGo with Tavily web search backend",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "replace DuckDuckGo with Tavily web search backend",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 380,
        "deletions": 123,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "d05548df0fbbadc77c5c1959a3c9a4fba6015579",
      "shortSha": "d05548df",
      "date": "2026-05-13",
      "subject": "feat(chat): add multi-entity disambiguation with clickable cards",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "add multi-entity disambiguation with clickable cards",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 366,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "03aaca09c08bdabd8780097f97a62e4b97e46769",
      "shortSha": "03aaca09",
      "date": "2026-05-13",
      "subject": "feat(chat): add topic drift detection, conversation summarization, and per-turn trace",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "add topic drift detection, conversation summarization, and per-turn trace",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 618,
        "deletions": 0,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "b864334ff74e8303a2042f832e5cc9558a10bbef",
      "shortSha": "b864334f",
      "date": "2026-05-13",
      "subject": "feat(chat): add memory hardening, long-message handler, burst debounce",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "add memory hardening, long-message handler, burst debounce",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 643,
        "deletions": 0,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 6
          }
        ]
      }
    },
    {
      "sha": "256eace00e1f72d7e3c591e86e9c988c2e0ca14a",
      "shortSha": "256eace0",
      "date": "2026-05-13",
      "subject": "feat(chat): orchestrate new services in agent-chat sendMessage pipeline",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "orchestrate new services in agent-chat sendMessage pipeline",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 669,
        "deletions": 68,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "a778d22e1f4a80dc1f3306dcd430b45bf716cf7e",
      "shortSha": "a778d22e",
      "date": "2026-05-13",
      "subject": "test(chat): add production-readiness and aggressive memory drift suites",
      "kind": "test",
      "category": "Test",
      "scope": "chat",
      "title": "add production-readiness and aggressive memory drift suites",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 790,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "9594474015f9fd472f5c554fa8e8b3f2ea8b373a",
      "shortSha": "95944740",
      "date": "2026-05-13",
      "subject": "test(chat): add human-conversational simulation suite and architecture plan",
      "kind": "test",
      "category": "Test",
      "scope": "chat",
      "title": "add human-conversational simulation suite and architecture plan",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 809,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "agent-chat-context-carry.plan.md",
            "count": 1
          },
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "87df17ff6341d790734e57b20fde97eb8fe2ca73",
      "shortSha": "87df17ff",
      "date": "2026-05-14",
      "subject": "chore(gitignore): ignore local dev-stack and ui-project-focus logs",
      "kind": "chore",
      "category": "Chore",
      "scope": "gitignore",
      "title": "ignore local dev-stack and ui-project-focus logs",
      "featureId": "quality-devtools-tests",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 5,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": ".gitignore",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "39d3fa744ec100a65431090e29a1ac0735d8364b",
      "shortSha": "39d3fa74",
      "date": "2026-05-14",
      "subject": "fix(runs): land Tier 0 dossier data-integrity fixes",
      "kind": "fix",
      "category": "Fix",
      "scope": "runs",
      "title": "land Tier 0 dossier data-integrity fixes",
      "featureId": "project-summaries-contributions",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1867,
        "deletions": 76,
        "filesChanged": 17,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 11
          },
          {
            "name": "packages",
            "count": 4
          },
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "2cd9b256d9ac5e96b8780b9ee9da8f6ad8c1d3de",
      "shortSha": "2cd9b256",
      "date": "2026-05-14",
      "subject": "ops(runs): add repair-task-outcomes script and archive May-14 dry-run",
      "kind": "ops",
      "category": "Ops",
      "scope": "runs",
      "title": "add repair-task-outcomes script and archive May-14 dry-run",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 12802,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 2
          },
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "d5f5c03b515ac82f2f12f9878690abdf4bc23870",
      "shortSha": "d5f5c03b",
      "date": "2026-05-14",
      "subject": "chore(editor): ignore generated workspace noise",
      "kind": "chore",
      "category": "Chore",
      "scope": "editor",
      "title": "ignore generated workspace noise",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 42,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": ".antigravityignore",
            "count": 1
          },
          {
            "name": ".cursorignore",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "33c50d2de6d259fff8db58d9f3e20929f2cc9a32",
      "shortSha": "33c50d2d",
      "date": "2026-05-14",
      "subject": "test(runs): cover outcome finalization sanitization",
      "kind": "test",
      "category": "Test",
      "scope": "runs",
      "title": "cover outcome finalization sanitization",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 278,
        "deletions": 0,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "94c2349370c597cb9edbb4740ea65a8c0039afde",
      "shortSha": "94c23493",
      "date": "2026-05-14",
      "subject": "feat(llm): update model routing and budget tiers",
      "kind": "feat",
      "category": "Feature",
      "scope": "llm",
      "title": "update model routing and budget tiers",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 817,
        "deletions": 139,
        "filesChanged": 24,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 19
          },
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "24bdfa59c4066daaab99840eb7f8fcf86b08cc6a",
      "shortSha": "24bdfa59",
      "date": "2026-05-14",
      "subject": "feat(chat): improve memory-grounded project conversations",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "improve memory-grounded project conversations",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1752,
        "deletions": 195,
        "filesChanged": 31,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 27
          },
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "5a23cea17135538fb2981bfb16575f6bdc5b32c0",
      "shortSha": "5a23cea1",
      "date": "2026-05-14",
      "subject": "feat(issues): surface work briefs and richer run outcomes",
      "kind": "feat",
      "category": "Feature",
      "scope": "issues",
      "title": "surface work briefs and richer run outcomes",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 89,
        "deletions": 5,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          },
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "ae35a04ee3b31ae0e80d69cc78b597f3845c8490",
      "shortSha": "ae35a04e",
      "date": "2026-05-14",
      "subject": "feat(projects): enrich project context surfaces",
      "kind": "feat",
      "category": "Feature",
      "scope": "projects",
      "title": "enrich project context surfaces",
      "featureId": "project-workspaces-files",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 700,
        "deletions": 154,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          },
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "b87ed360fad04ebdc71cbba0f043f2ce9b319cbf",
      "shortSha": "b87ed360",
      "date": "2026-05-14",
      "subject": "fix(ui): preserve chat width in agent workspace",
      "kind": "fix",
      "category": "Fix",
      "scope": "ui",
      "title": "preserve chat width in agent workspace",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 267,
        "deletions": 17,
        "filesChanged": 11,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 11
          }
        ]
      }
    },
    {
      "sha": "b110422e69165b141c86208e4bba95122e75fa76",
      "shortSha": "b110422e",
      "date": "2026-05-14",
      "subject": "test(server): harden route and heartbeat fixtures",
      "kind": "test",
      "category": "Test",
      "scope": "server",
      "title": "harden route and heartbeat fixtures",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 17,
        "deletions": 2,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "d79f2e7dcc6a46d67b12c79932ad4694bd517323",
      "shortSha": "d79f2e7d",
      "date": "2026-05-14",
      "subject": "fix(ui): harden agent visuals in test environments",
      "kind": "fix",
      "category": "Fix",
      "scope": "ui",
      "title": "harden agent visuals in test environments",
      "featureId": "quality-devtools-tests",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 10,
        "deletions": 2,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "b810e7e808cac013cf19d7738278392016198ba8",
      "shortSha": "b810e7e8",
      "date": "2026-05-14",
      "subject": "chore(agent-ops): refresh quick verification artifacts",
      "kind": "chore",
      "category": "Chore",
      "scope": "agent-ops",
      "title": "refresh quick verification artifacts",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 8,
        "deletions": 8,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "artifacts",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "d0b6df55fc4178a7cb67b5b87dd99956cd233208",
      "shortSha": "d0b6df55",
      "date": "2026-05-14",
      "subject": "refactor(routes): move direct mutations behind services",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "routes",
      "title": "move direct mutations behind services",
      "featureId": "architecture-refactors",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 48,
        "deletions": 9,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "139db926d2f90d41cc93e78d3b59f44b66438706",
      "shortSha": "139db926",
      "date": "2026-05-14",
      "subject": "fix(heartbeat): prune stale run events",
      "kind": "fix",
      "category": "Fix",
      "scope": "heartbeat",
      "title": "prune stale run events",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 123,
        "deletions": 13,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "877eda76b83ba3d0c2dcaac8d95e2f160ad454c8",
      "shortSha": "877eda76",
      "date": "2026-05-14",
      "subject": "fix(skills): prune resolved skill proposals",
      "kind": "fix",
      "category": "Fix",
      "scope": "skills",
      "title": "prune resolved skill proposals",
      "featureId": "skills-harness",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 173,
        "deletions": 8,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "cc013166895db2628507ce505ec05aead54ffb3b",
      "shortSha": "cc013166",
      "date": "2026-05-14",
      "subject": "fix(heartbeat): cap wake comment snapshot ids",
      "kind": "fix",
      "category": "Fix",
      "scope": "heartbeat",
      "title": "cap wake comment snapshot ids",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 21,
        "deletions": 1,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "d4eee7605176c7536f9137759f445efa3150ef60",
      "shortSha": "d4eee760",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): decompose recovery and maintenance",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "decompose recovery and maintenance",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1241,
        "deletions": 525,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "cdcd69011a78a09d5b54eb6563f1ddbb70d90c2b",
      "shortSha": "cdcd6901",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract event and log plumbing",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract event and log plumbing",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 389,
        "deletions": 182,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "fd50fa8935f738edb465a3ba0572c20da197ce74",
      "shortSha": "fd50fa89",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract cancellation service",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract cancellation service",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 468,
        "deletions": 218,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "73911773bfb7af0a3bd1b8842a2cc516405e8d63",
      "shortSha": "73911773",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract runtime helper modules",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract runtime helper modules",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 989,
        "deletions": 1019,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "8e963a597ca4349a69a099868a78f0e0ff41c7c1",
      "shortSha": "8e963a59",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract run finalization side effects",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract run finalization side effects",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 870,
        "deletions": 762,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "35a8efa335a804a5c9b40d00c28ca1adfb163768",
      "shortSha": "35a8efa3",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract task session bookkeeping",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract task session bookkeeping",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 391,
        "deletions": 367,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "74aac412f6649aa5b51352e0ba374b5894caf6f3",
      "shortSha": "74aac412",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract retry queue handling",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract retry queue handling",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 341,
        "deletions": 309,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "5a8f4e4f10a0d18165e6c6347d519e22747119a7",
      "shortSha": "5a8f4e4f",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract issue execution promotion",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract issue execution promotion",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 263,
        "deletions": 229,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "3efd9e35e4b140f9f46973f9be5ff4c8e932305a",
      "shortSha": "3efd9e35",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract wakeup queue service",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract wakeup queue service",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 583,
        "deletions": 531,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "503846d65b52a3a17094cb398e524676e302d500",
      "shortSha": "503846d6",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract llm direct task selection",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract llm direct task selection",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 164,
        "deletions": 106,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "54c7a2fe989edccbeb2a66b94de4a3f71e7976d1",
      "shortSha": "54c7a2fe",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract llm direct executor",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract llm direct executor",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 476,
        "deletions": 407,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "05f3372ace032e9df08dca17c9ce9df4a993d406",
      "shortSha": "05f3372a",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract run queue orchestration",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract run queue orchestration",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 515,
        "deletions": 219,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "ab00e71aaa50eae76323b3075c2b7d06f56d90a1",
      "shortSha": "ab00e71a",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract process adapter executor",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract process adapter executor",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 461,
        "deletions": 377,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "d070b8d7be7ce6958c1a759eaf2369362fda80b2",
      "shortSha": "d070b8d7",
      "date": "2026-05-14",
      "subject": "refactor(heartbeat): extract delivery and process side effects",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "heartbeat",
      "title": "extract delivery and process side effects",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 137,
        "deletions": 99,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "34920fc194ff92420de9a4c6018675586da0bc46",
      "shortSha": "34920fc1",
      "date": "2026-05-14",
      "subject": "fix(heartbeat): close trajectories before terminal status",
      "kind": "fix",
      "category": "Fix",
      "scope": "heartbeat",
      "title": "close trajectories before terminal status",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 4,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "dad2869233525befb70535ba14161590b38032aa",
      "shortSha": "dad28692",
      "date": "2026-05-14",
      "subject": "refactor(chat): extract direct chat helper modules",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "chat",
      "title": "extract direct chat helper modules",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 713,
        "deletions": 662,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "32885593350e31aa9ce4ff731a3d234ec61c8600",
      "shortSha": "32885593",
      "date": "2026-05-14",
      "subject": "refactor(chat): extract ping diagnostics",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "chat",
      "title": "extract ping diagnostics",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 110,
        "deletions": 96,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "74e7c69841ab588a2e0144634b0d0527baa5b94d",
      "shortSha": "74e7c698",
      "date": "2026-05-14",
      "subject": "refactor(chat): extract proposal execution",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "chat",
      "title": "extract proposal execution",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 121,
        "deletions": 106,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "1574daca94827b4d3758f87321e1fe935447820f",
      "shortSha": "1574daca",
      "date": "2026-05-14",
      "subject": "refactor(chat): extract actionable turn handling",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "chat",
      "title": "extract actionable turn handling",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 321,
        "deletions": 222,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "ab26680db40e8d56c46fec663a4b2078218b0244",
      "shortSha": "ab26680d",
      "date": "2026-05-14",
      "subject": "refactor(chat): extract session context helpers",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "chat",
      "title": "extract session context helpers",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 97,
        "deletions": 85,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "0230f05d8a0ebf9ca8722d471776cea9d1a0f202",
      "shortSha": "0230f05d",
      "date": "2026-05-14",
      "subject": "refactor(chat): extract project note save handling",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "chat",
      "title": "extract project note save handling",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 224,
        "deletions": 118,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "2c74f1613c6b84439c79cbb50684dd55f946eb9d",
      "shortSha": "2c74f161",
      "date": "2026-05-14",
      "subject": "refactor(chat): extract web turn handling",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "chat",
      "title": "extract web turn handling",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 172,
        "deletions": 105,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "2c6df4c0e0bb627720399260a6485861137f68cf",
      "shortSha": "2c6df4c0",
      "date": "2026-05-14",
      "subject": "refactor(chat): extract conversational direct replies",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "chat",
      "title": "extract conversational direct replies",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 354,
        "deletions": 182,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "7a3353eadd66f6fe514b601847669426f9322ff3",
      "shortSha": "7a3353ea",
      "date": "2026-05-14",
      "subject": "refactor(chat): extract grounded reply handling",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "chat",
      "title": "extract grounded reply handling",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 313,
        "deletions": 333,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "6089e2b260cb7fbe87c441f46a6ae6101339c9dc",
      "shortSha": "6089e2b2",
      "date": "2026-05-14",
      "subject": "refactor(chat): extract informational turn preparation",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "chat",
      "title": "extract informational turn preparation",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 417,
        "deletions": 267,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "88234c5071eb3ef2f97fe159b0de244282d24497",
      "shortSha": "88234c50",
      "date": "2026-05-14",
      "subject": "test(chat): avoid heavy service import in evals",
      "kind": "test",
      "category": "Test",
      "scope": "chat",
      "title": "avoid heavy service import in evals",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 4,
        "deletions": 8,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "a65c8050e88e18cd70b08cf55e9b568f3d47c337",
      "shortSha": "a65c8050",
      "date": "2026-05-14",
      "subject": "test(server): allow integration tests more time",
      "kind": "test",
      "category": "Test",
      "scope": "server",
      "title": "allow integration tests more time",
      "featureId": "quality-devtools-tests",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "51c82ef050fc88490a2dda6507a87f5ef45c9bee",
      "shortSha": "51c82ef0",
      "date": "2026-05-14",
      "subject": "refactor(issues): split route groups",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "issues",
      "title": "split route groups",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2827,
        "deletions": 2392,
        "filesChanged": 11,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 11
          }
        ]
      }
    },
    {
      "sha": "2c8fef4e51c2d9ab4990760924cc855f85bdd96d",
      "shortSha": "2c8fef4e",
      "date": "2026-05-14",
      "subject": "refactor(agents): split route groups",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "agents",
      "title": "split route groups",
      "featureId": "architecture-refactors",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2149,
        "deletions": 1842,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "5ef36a5c26e7e899cb02e16a1ead09983fed7ba7",
      "shortSha": "5ef36a5c",
      "date": "2026-05-14",
      "subject": "refactor(access): split invite and join routes",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "access",
      "title": "split invite and join routes",
      "featureId": "work2-company-foundation",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1426,
        "deletions": 1230,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "da8a87147876a618d9400dc6b9b7b7d22652e159",
      "shortSha": "da8a8714",
      "date": "2026-05-14",
      "subject": "refactor(access): move invite persistence into service",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "access",
      "title": "move invite persistence into service",
      "featureId": "work2-company-foundation",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 519,
        "deletions": 421,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "13ccfc9228c4d23126e52a2fc881d05a99ff45a7",
      "shortSha": "13ccfc92",
      "date": "2026-05-14",
      "subject": "refactor(agents): move route read models into service",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "agents",
      "title": "move route read models into service",
      "featureId": "architecture-refactors",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 381,
        "deletions": 271,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "0944b40277420e576bd3d490832b9674b92fca72",
      "shortSha": "0944b402",
      "date": "2026-05-14",
      "subject": "fix(db): reduce heartbeat retention bloat",
      "kind": "fix",
      "category": "Fix",
      "scope": "db",
      "title": "reduce heartbeat retention bloat",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 244,
        "deletions": 9,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "378a0744998d2dd9c362f8ab53c46f50ad697253",
      "shortSha": "378a0744",
      "date": "2026-05-14",
      "subject": "test(db): cover memory embedding vector writes",
      "kind": "test",
      "category": "Test",
      "scope": "db",
      "title": "cover memory embedding vector writes",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 50,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "8d26f8fafee5f88d2640cb438d431282b98af1dc",
      "shortSha": "8d26f8fa",
      "date": "2026-05-14",
      "subject": "fix(db): target heartbeat context compaction",
      "kind": "fix",
      "category": "Fix",
      "scope": "db",
      "title": "target heartbeat context compaction",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 15,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "63081adc51b2763c5bb7ec2b621d3aaa2c912acb",
      "shortSha": "63081adc",
      "date": "2026-05-14",
      "subject": "refactor(ui): split agent detail page",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "ui",
      "title": "split agent detail page",
      "featureId": "agent-ui-portraits",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 5554,
        "deletions": 5192,
        "filesChanged": 17,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 17
          }
        ]
      }
    },
    {
      "sha": "0d646214de3c1a7a40046e369f6eb5a74fe76f84",
      "shortSha": "0d646214",
      "date": "2026-05-14",
      "subject": "refactor(ui): split inbox page",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "ui",
      "title": "split inbox page",
      "featureId": "architecture-refactors",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2419,
        "deletions": 2344,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "21c6723305543d24d851e249dfb8e068e04125f2",
      "shortSha": "21c67233",
      "date": "2026-05-14",
      "subject": "refactor(ui): split issue detail page",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "ui",
      "title": "split issue detail page",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2743,
        "deletions": 2683,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "10f8fb5e4644b17c9003156a890a4fe62f212d0a",
      "shortSha": "10f8fb5e",
      "date": "2026-05-14",
      "subject": "refactor(ui): split project detail page",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "ui",
      "title": "split project detail page",
      "featureId": "project-workspaces-files",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 2243,
        "deletions": 2146,
        "filesChanged": 9,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "87b5e76e2a4a1c1ba6bf974771f371961bd1d690",
      "shortSha": "87b5e76e",
      "date": "2026-05-14",
      "subject": "fix(deps): override vulnerable transitive packages",
      "kind": "fix",
      "category": "Fix",
      "scope": "deps",
      "title": "override vulnerable transitive packages",
      "featureId": "security-runtime-hardening",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 33,
        "deletions": 27,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "package.json",
            "count": 1
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "768fc5bd93d306e3a731a478530d91c096cd45a5",
      "shortSha": "768fc5bd",
      "date": "2026-05-14",
      "subject": "fix(debug): gate session ingest telemetry",
      "kind": "fix",
      "category": "Fix",
      "scope": "debug",
      "title": "gate session ingest telemetry",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 70,
        "deletions": 266,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          },
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "c345797f2411c556531472358d15659d12f0b305",
      "shortSha": "c345797f",
      "date": "2026-05-14",
      "subject": "fix(deps): clear production audit advisories",
      "kind": "fix",
      "category": "Fix",
      "scope": "deps",
      "title": "clear production audit advisories",
      "featureId": "security-runtime-hardening",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 112,
        "deletions": 164,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "package.json",
            "count": 1
          },
          {
            "name": "pnpm-lock.yaml",
            "count": 1
          },
          {
            "name": "server",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "b877057fcd8760d6abf16514578f885a5ddde3a5",
      "shortSha": "b877057f",
      "date": "2026-05-14",
      "subject": "fix(issues): apply execution workflow transitions",
      "kind": "fix",
      "category": "Fix",
      "scope": "issues",
      "title": "apply execution workflow transitions",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 137,
        "deletions": 22,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "ead7ad51c75fe39f43030f35995bbb06014b10e3",
      "shortSha": "ead7ad51",
      "date": "2026-05-14",
      "subject": "fix(memory): report optional ANN status without pgvector",
      "kind": "fix",
      "category": "Fix",
      "scope": "memory",
      "title": "report optional ANN status without pgvector",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 71,
        "deletions": 6,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "2de1ae48bafc482b9206c9940af228c65a5ef0da",
      "shortSha": "2de1ae48",
      "date": "2026-05-14",
      "subject": "fix(heartbeat): skip recovery wakeups for inactive parent assignees",
      "kind": "fix",
      "category": "Fix",
      "scope": "heartbeat",
      "title": "skip recovery wakeups for inactive parent assignees",
      "featureId": "agent-execution-heartbeat",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 50,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "17410e77702d00db86727d961a2c165731fd32c5",
      "shortSha": "17410e77",
      "date": "2026-05-14",
      "subject": "fix(world): stabilize local weather and socket presence",
      "kind": "fix",
      "category": "Fix",
      "scope": "world",
      "title": "stabilize local weather and socket presence",
      "featureId": "world-realtime-presence",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 125,
        "deletions": 7,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "326a4c1dfcb1ead5d65aea260a89f0c0ee35f3a4",
      "shortSha": "326a4c1d",
      "date": "2026-05-14",
      "subject": "fix(realtime): let Socket.IO handle its own upgrades",
      "kind": "fix",
      "category": "Fix",
      "scope": "realtime",
      "title": "let Socket.IO handle its own upgrades",
      "featureId": "world-realtime-presence",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 0,
        "deletions": 1,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "ddf628b0e3687c22f67507e0973d86e4e6302249",
      "shortSha": "ddf628b0",
      "date": "2026-05-14",
      "subject": "fix(chat): resolve pending project selections",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "resolve pending project selections",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 8,
        "deletions": 4,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "2ec0500310fc5ff08b4c3117fa2d0c4c721b8a93",
      "shortSha": "2ec05003",
      "date": "2026-05-14",
      "subject": "fix(chat): avoid negated save intent false positives",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "avoid negated save intent false positives",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 12,
        "deletions": 1,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "a74f071b2c8647b03d641d6ce75ab5cb0cb6391a",
      "shortSha": "a74f071b",
      "date": "2026-05-14",
      "subject": "fix(chat): recap active task proposals before retrieval",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "recap active task proposals before retrieval",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 283,
        "deletions": 182,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "9fa87ed6a5fc4183b0ff30fa3b89e76e1cc33beb",
      "shortSha": "9fa87ed6",
      "date": "2026-05-14",
      "subject": "fix(manager): tolerate discovery payload variants",
      "kind": "fix",
      "category": "Fix",
      "scope": "manager",
      "title": "tolerate discovery payload variants",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 205,
        "deletions": 6,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "0a5268b68f48e4b706de183bb3f27e02c24817b7",
      "shortSha": "0a5268b6",
      "date": "2026-05-14",
      "subject": "fix(manager): keep discovery questions mission-specific",
      "kind": "fix",
      "category": "Fix",
      "scope": "manager",
      "title": "keep discovery questions mission-specific",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 116,
        "deletions": 5,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "81c10a707e938b419c4903233c6616a7f79c30ac",
      "shortSha": "81c10a70",
      "date": "2026-05-14",
      "subject": "fix(artifacts): harden sandboxed previews",
      "kind": "fix",
      "category": "Fix",
      "scope": "artifacts",
      "title": "harden sandboxed previews",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 3,
        "deletions": 3,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "1be6b01c0141af0bd282b01f95a9b26edbe5264e",
      "shortSha": "1be6b01c",
      "date": "2026-05-14",
      "subject": "fix(chat): recap proposals before negated saves",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "recap proposals before negated saves",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 23,
        "deletions": 1,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "685ba9e42ec86e43f8b3c09b9760c54f0c653c04",
      "shortSha": "685ba9e4",
      "date": "2026-05-14",
      "subject": "fix(chat): backfill empty campaign proposals",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "backfill empty campaign proposals",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 118,
        "deletions": 7,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "92f33770d32619c0a4051e26abb72e039a669071",
      "shortSha": "92f33770",
      "date": "2026-05-14",
      "subject": "fix(chat): honor explicit saved-note titles",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "honor explicit saved-note titles",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 35,
        "deletions": 2,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "7b065de3b3cc4ba7de7ca8c467d967d15923bdbb",
      "shortSha": "7b065de3",
      "date": "2026-05-14",
      "subject": "fix(chat): reduce save-note pii false positives",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "reduce save-note pii false positives",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 59,
        "deletions": 13,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "59d18cf86bcd087a663dc22988c237c9a81284a5",
      "shortSha": "59d18cf8",
      "date": "2026-05-14",
      "subject": "fix(chat): keep campaign turns project-scoped",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "keep campaign turns project-scoped",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 43,
        "deletions": 7,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "927d74c62f6dfcbbd34405b5d2fecfc16b490fc1",
      "shortSha": "927d74c6",
      "date": "2026-05-14",
      "subject": "fix(chat): accept natural project selection replies",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "accept natural project selection replies",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 26,
        "deletions": 3,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "6bae0546c476c22465c41163952d94b724eeecd4",
      "shortSha": "6bae0546",
      "date": "2026-05-15",
      "subject": "feat(chat): add company chat sessions",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "add company chat sessions",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 975,
        "deletions": 27,
        "filesChanged": 16,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 8
          },
          {
            "name": "server",
            "count": 5
          },
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "81ac051af1892b71bc033d00a436cdb224fd72dd",
      "shortSha": "81ac051a",
      "date": "2026-05-15",
      "subject": "fix(llm): route project name suggestions through instance transport",
      "kind": "fix",
      "category": "Fix",
      "scope": "llm",
      "title": "route project name suggestions through instance transport",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 111,
        "deletions": 9,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "4f446bbc6e022f3c42266a3ce99ccf92af86637e",
      "shortSha": "4f446bbc",
      "date": "2026-05-15",
      "subject": "feat(ui): add BLOCKS shell primitives",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "add BLOCKS shell primitives",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 5673,
        "deletions": 77,
        "filesChanged": 22,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 22
          }
        ]
      }
    },
    {
      "sha": "2e95f90db6715735b931393344e22cb01f0d7fb0",
      "shortSha": "2e95f90d",
      "date": "2026-05-15",
      "subject": "refactor(ui): converge directory cards",
      "kind": "refactor",
      "category": "Refactor",
      "scope": "ui",
      "title": "converge directory cards",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 581,
        "deletions": 885,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "8ca575a6ea3ea917097379365de74816747b7bdc",
      "shortSha": "8ca575a6",
      "date": "2026-05-15",
      "subject": "style(ui): align task and artifact panels",
      "kind": "style",
      "category": "Style",
      "scope": "ui",
      "title": "align task and artifact panels",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 144,
        "deletions": 130,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "b5d87f1592ea2276b8a80e3e4ccd276aa44a27e4",
      "shortSha": "b5d87f15",
      "date": "2026-05-15",
      "subject": "style(world): align HUD panels with BLOCKS",
      "kind": "style",
      "category": "Style",
      "scope": "world",
      "title": "align HUD panels with BLOCKS",
      "featureId": "world-realtime-presence",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 90,
        "deletions": 89,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "76215da24b6705d015825554c51ad5a2f2bf0f54",
      "shortSha": "76215da2",
      "date": "2026-05-15",
      "subject": "fix(ui): keep workplace carousel cards in one row",
      "kind": "fix",
      "category": "Fix",
      "scope": "ui",
      "title": "keep workplace carousel cards in one row",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 9,
        "deletions": 7,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "bbec81c3ceb7a26626210db751e856ff0ecda970",
      "shortSha": "bbec81c3",
      "date": "2026-05-15",
      "subject": "studio: harden discovery fallback diagnostics",
      "kind": "studio",
      "category": "Mission Studio",
      "scope": null,
      "title": "harden discovery fallback diagnostics",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 255,
        "deletions": 22,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          },
          {
            "name": "packages",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "7b82bab02c49a3d404d49de9218140b44fc7cbb3",
      "shortSha": "7b82bab0",
      "date": "2026-05-15",
      "subject": "studio: return auto-run watch data and seed artifacts",
      "kind": "studio",
      "category": "Mission Studio",
      "scope": null,
      "title": "return auto-run watch data and seed artifacts",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 105,
        "deletions": 5,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "aa1f6b9a61a6e801fbba8038b23876d74f2a8c11",
      "shortSha": "aa1f6b9a",
      "date": "2026-05-15",
      "subject": "studio: surface pending and watch reliability state",
      "kind": "studio",
      "category": "Mission Studio",
      "scope": null,
      "title": "surface pending and watch reliability state",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 103,
        "deletions": 7,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "e27b131029ffff28210b42701e26fb5f0d6ee5c3",
      "shortSha": "e27b1310",
      "date": "2026-05-15",
      "subject": "studio: make council discovery loading recoverable",
      "kind": "studio",
      "category": "Mission Studio",
      "scope": null,
      "title": "make council discovery loading recoverable",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 97,
        "deletions": 5,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "e2f15e6d679068468889ad6baf2154c29b2808a5",
      "shortSha": "e2f15e6d",
      "date": "2026-05-15",
      "subject": "studio: add tasks route aliases",
      "kind": "studio",
      "category": "Mission Studio",
      "scope": null,
      "title": "add tasks route aliases",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 4,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "42974940e4e5b4c5570858754d1c65012610bd88",
      "shortSha": "42974940",
      "date": "2026-05-15",
      "subject": "Fix chat memory context and optimistic sends",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "Fix chat memory context and optimistic sends",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1018,
        "deletions": 57,
        "filesChanged": 18,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 10
          },
          {
            "name": "ui",
            "count": 6
          },
          {
            "name": "packages",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "4c21e8fe2d0a805fbccdf0c0599398185e4d6abe",
      "shortSha": "4c21e8fe",
      "date": "2026-05-15",
      "subject": "feat(chat): add contextual memory contracts",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "add contextual memory contracts",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 115,
        "deletions": 1,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "f84341d344255d42e3a99234f79fc9ad30424a80",
      "shortSha": "f84341d3",
      "date": "2026-05-15",
      "subject": "feat(chat): ground memory recall on server",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "ground memory recall on server",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1037,
        "deletions": 19,
        "filesChanged": 10,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 10
          }
        ]
      }
    },
    {
      "sha": "bac63b5afa1e1edc248f5fdcbede70a376f3fc2a",
      "shortSha": "bac63b5a",
      "date": "2026-05-15",
      "subject": "feat(chat): surface contextual memory in UI",
      "kind": "feat",
      "category": "Feature",
      "scope": "chat",
      "title": "surface contextual memory in UI",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 536,
        "deletions": 8,
        "filesChanged": 10,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 10
          }
        ]
      }
    },
    {
      "sha": "ab543d2abc481ef3341fbba2b90ef4caabadab8f",
      "shortSha": "ab543d2a",
      "date": "2026-05-15",
      "subject": "studio: route discovery LLM through instance transport",
      "kind": "studio",
      "category": "Mission Studio",
      "scope": null,
      "title": "route discovery LLM through instance transport",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 171,
        "deletions": 35,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "0683f4231f328797824529d2b185e8e59a60d9fd",
      "shortSha": "0683f423",
      "date": "2026-05-15",
      "subject": "studio: harden project name suggestions",
      "kind": "studio",
      "category": "Mission Studio",
      "scope": null,
      "title": "harden project name suggestions",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 107,
        "deletions": 24,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "207201522d44e20ebb7d5f87d3a382cd56f19f7a",
      "shortSha": "20720152",
      "date": "2026-05-15",
      "subject": "server: stub legacy plugins index route",
      "kind": "server",
      "category": "Server",
      "scope": null,
      "title": "stub legacy plugins index route",
      "featureId": "miscellaneous",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 3,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "3c131c148b16b94dee825b79b6d64a6fb775ee97",
      "shortSha": "3c131c14",
      "date": "2026-05-15",
      "subject": "studio: require project binding before discovery",
      "kind": "studio",
      "category": "Mission Studio",
      "scope": null,
      "title": "require project binding before discovery",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 91,
        "deletions": 22,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "7f1fe2d3f9b888e992f35c6c9935d4fcab55b96c",
      "shortSha": "7f1fe2d3",
      "date": "2026-05-15",
      "subject": "studio: bound discovery and freeze server paths",
      "kind": "studio",
      "category": "Mission Studio",
      "scope": null,
      "title": "bound discovery and freeze server paths",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 295,
        "deletions": 21,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 4
          },
          {
            "name": "packages",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "d729a5cfd596882ca9cea4d488b6a0d8593c2d0f",
      "shortSha": "d729a5cf",
      "date": "2026-05-15",
      "subject": "studio: prewarm visible question answers",
      "kind": "studio",
      "category": "Mission Studio",
      "scope": null,
      "title": "prewarm visible question answers",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 207,
        "deletions": 8,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "afa630a9607895554d77742152396966bf69caa0",
      "shortSha": "afa630a9",
      "date": "2026-05-15",
      "subject": "test(studio): cover fallback timing guards",
      "kind": "test",
      "category": "Test",
      "scope": "studio",
      "title": "cover fallback timing guards",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 69,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "2fe8cf24baa8fc62912c5eee3a7bc8e9574f27bb",
      "shortSha": "2fe8cf24",
      "date": "2026-05-15",
      "subject": "fix(chat): surface workspace agent project context",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "surface workspace agent project context",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 171,
        "deletions": 23,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 3
          },
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "90d6f5a84afc4774237ddc06b11638924aea2306",
      "shortSha": "90d6f5a8",
      "date": "2026-05-15",
      "subject": "style(ui): add BLOCKS panel adapter layer",
      "kind": "style",
      "category": "Style",
      "scope": "ui",
      "title": "add BLOCKS panel adapter layer",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 218,
        "deletions": 6,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "63b15f1508590fa83da93c4b6ace47a65e881555",
      "shortSha": "63b15f15",
      "date": "2026-05-15",
      "subject": "style(artifacts): align preview panels with BLOCKS",
      "kind": "style",
      "category": "Style",
      "scope": "artifacts",
      "title": "align preview panels with BLOCKS",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 20,
        "deletions": 20,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "9507d605a7605748db4310b35521b472a6a41a3e",
      "shortSha": "9507d605",
      "date": "2026-05-15",
      "subject": "style(ui): retire blue glass utility chrome",
      "kind": "style",
      "category": "Style",
      "scope": "ui",
      "title": "retire blue glass utility chrome",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 50,
        "deletions": 56,
        "filesChanged": 23,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 23
          }
        ]
      }
    },
    {
      "sha": "f34dcb270d8434ff2bb4101ff39d4838a97e66a3",
      "shortSha": "f34dcb27",
      "date": "2026-05-15",
      "subject": "fix(server): allow deleting departments with archived agents",
      "kind": "fix",
      "category": "Fix",
      "scope": "server",
      "title": "allow deleting departments with archived agents",
      "featureId": "miscellaneous",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 32,
        "deletions": 4,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "7e82ab4433b3f257958cf83d37e170aa31b05e22",
      "shortSha": "7e82ab44",
      "date": "2026-05-15",
      "subject": "fix(chat): keep shared drops explicit",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "keep shared drops explicit",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 35,
        "deletions": 28,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "0515080db6d71a3782d75adf9879cacab2b58e1b",
      "shortSha": "0515080d",
      "date": "2026-05-16",
      "subject": "chore(skills): add emil design engineering skill",
      "kind": "chore",
      "category": "Chore",
      "scope": "skills",
      "title": "add emil design engineering skill",
      "featureId": "skills-harness",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 100,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": ".agents",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "874a2afee450952baaa26b0ea3dc2aeb3d8bf90f",
      "shortSha": "874a2afe",
      "date": "2026-05-16",
      "subject": "fix(ui): route unprefixed workspace shortcuts",
      "kind": "fix",
      "category": "Fix",
      "scope": "ui",
      "title": "route unprefixed workspace shortcuts",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 5,
        "deletions": 2,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "9e502e11dde7a437f1f382176933206fea5d10eb",
      "shortSha": "9e502e11",
      "date": "2026-05-16",
      "subject": "polish(ui): tighten shared motion timing",
      "kind": "polish",
      "category": "Polish",
      "scope": "ui",
      "title": "tighten shared motion timing",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 41,
        "deletions": 9,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "20051cb41acb77d29e183389ff6e56d6f505fbe9",
      "shortSha": "20051cb4",
      "date": "2026-05-16",
      "subject": "polish(ui): tune high-frequency transitions",
      "kind": "polish",
      "category": "Polish",
      "scope": "ui",
      "title": "tune high-frequency transitions",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 52,
        "deletions": 30,
        "filesChanged": 15,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 15
          }
        ]
      }
    },
    {
      "sha": "3ffdef722f60f95499ee2ffcff92069603a86612",
      "shortSha": "3ffdef72",
      "date": "2026-05-16",
      "subject": "Polish workspace memory project replies",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "Polish workspace memory project replies",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 353,
        "deletions": 11,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          },
          {
            "name": "server",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "c2d5dd80bed2a2bda05019cd71532115e067c49c",
      "shortSha": "c2d5dd80",
      "date": "2026-05-16",
      "subject": "Add resizable workspace chat panel",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "Add resizable workspace chat panel",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 178,
        "deletions": 6,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "c80c5a8c2a2ca1c9441ab8c006602e8a446053fa",
      "shortSha": "c80c5a8c",
      "date": "2026-05-16",
      "subject": "Make workspace chat resize follow page scroll",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "Make workspace chat resize follow page scroll",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 50,
        "deletions": 17,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "152c3e913c5d22dc8829904c04a23fd869befcf4",
      "shortSha": "152c3e91",
      "date": "2026-05-16",
      "subject": "chore(ui): add 3d rendering dependencies",
      "kind": "chore",
      "category": "Chore",
      "scope": "ui",
      "title": "add 3d rendering dependencies",
      "featureId": "world-realtime-presence",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 259,
        "deletions": 0,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "pnpm-lock.yaml",
            "count": 1
          },
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "15715e7ce268844418f4cbaa3a9405334d4416b5",
      "shortSha": "15715e7c",
      "date": "2026-05-16",
      "subject": "style(world): frame 3d viewport chrome",
      "kind": "style",
      "category": "Style",
      "scope": "world",
      "title": "frame 3d viewport chrome",
      "featureId": "world-realtime-presence",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 8,
        "deletions": 2,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "777603ca44954645c24958e2fe945d5493619099",
      "shortSha": "777603ca",
      "date": "2026-05-16",
      "subject": "feat(world): add cinematic 3d environment pass",
      "kind": "feat",
      "category": "Feature",
      "scope": "world",
      "title": "add cinematic 3d environment pass",
      "featureId": "world-realtime-presence",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 414,
        "deletions": 68,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "92e86e151ca1164be2a9bff4bc8c19d171861b52",
      "shortSha": "92e86e15",
      "date": "2026-05-16",
      "subject": "theme: align light mode tokens with sky brass palette",
      "kind": "theme",
      "category": "Theme",
      "scope": null,
      "title": "align light mode tokens with sky brass palette",
      "featureId": "llm-routing-budgeting",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 87,
        "deletions": 59,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "2efff9abba745ad6b18a1c9325c101837b854133",
      "shortSha": "2efff9ab",
      "date": "2026-05-16",
      "subject": "theme: unify light mode BLOCKS panel surfaces",
      "kind": "theme",
      "category": "Theme",
      "scope": null,
      "title": "unify light mode BLOCKS panel surfaces",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 611,
        "deletions": 65,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "3ea49f867930b2b9c132152dfe76fdfcf10c25e2",
      "shortSha": "3ea49f86",
      "date": "2026-05-16",
      "subject": "theme: quiet shared light mode frames",
      "kind": "theme",
      "category": "Theme",
      "scope": null,
      "title": "quiet shared light mode frames",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 681,
        "deletions": 58,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "a957ac8b6eead8d0bc5512c511cd11ee1f7fcc07",
      "shortSha": "a957ac8b",
      "date": "2026-05-16",
      "subject": "Revamp workspace shell navigation",
      "kind": "other",
      "category": "Other",
      "scope": null,
      "title": "Revamp workspace shell navigation",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 281,
        "deletions": 179,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "bcc6f9f9d59e7d0e206dce77a016b0f5c73b3b8f",
      "shortSha": "bcc6f9f9",
      "date": "2026-05-16",
      "subject": "ui: style sidebar nav badges",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "style sidebar nav badges",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 3,
        "deletions": 3,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "fbd7caf07b9e5026de7993e975a34bb257b1a72b",
      "shortSha": "fbd7caf0",
      "date": "2026-05-16",
      "subject": "world: consolidate hud controls into toolbar",
      "kind": "world",
      "category": "World",
      "scope": null,
      "title": "consolidate hud controls into toolbar",
      "featureId": "world-realtime-presence",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 259,
        "deletions": 606,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "4b37d3fbd30993b9d230f1b921593bb6e8661027",
      "shortSha": "4b37d3fb",
      "date": "2026-05-16",
      "subject": "tasks: polish list toolbar and editor shell",
      "kind": "tasks",
      "category": "Tasks",
      "scope": null,
      "title": "polish list toolbar and editor shell",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 128,
        "deletions": 69,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "d7852231c767dd75b60d850e84edadd3b04bbb85",
      "shortSha": "d7852231",
      "date": "2026-05-16",
      "subject": "inbox: align page and rows with BLOCKS panels",
      "kind": "inbox",
      "category": "Inbox",
      "scope": null,
      "title": "align page and rows with BLOCKS panels",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 124,
        "deletions": 82,
        "filesChanged": 4,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 4
          }
        ]
      }
    },
    {
      "sha": "80cb8d6dcb4ee01c0c0d11e36d99449ba06e5d01",
      "shortSha": "80cb8d6d",
      "date": "2026-05-16",
      "subject": "directory: improve card accent contrast and layout",
      "kind": "directory",
      "category": "Directory",
      "scope": null,
      "title": "improve card accent contrast and layout",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 57,
        "deletions": 54,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "af63c930739a6b1bf443a3f25d16c0c28a2f2036",
      "shortSha": "af63c930",
      "date": "2026-05-16",
      "subject": "ui: clean up artifacts and mission studio surfaces",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "clean up artifacts and mission studio surfaces",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 55,
        "deletions": 19,
        "filesChanged": 5,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 5
          }
        ]
      }
    },
    {
      "sha": "67cfe0a68c0cf24d6a2ad445d025fa9dd24e0b42",
      "shortSha": "67cfe0a6",
      "date": "2026-05-16",
      "subject": "ops: refresh benchmark and eval artifacts",
      "kind": "ops",
      "category": "Ops",
      "scope": null,
      "title": "refresh benchmark and eval artifacts",
      "featureId": "artifact-delivery-publishing",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 8,
        "deletions": 8,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "artifacts",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "d347f91b7aadc1d3f8c1efdd090a12eb1661b095",
      "shortSha": "d347f91b",
      "date": "2026-05-16",
      "subject": "docs: add blocks architecture guide",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "add blocks architecture guide",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 322,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "b63da82780a8b42283a409a9f785e775469e83c7",
      "shortSha": "b63da827",
      "date": "2026-05-16",
      "subject": "docs: add generated mission prd",
      "kind": "docs",
      "category": "Docs",
      "scope": null,
      "title": "add generated mission prd",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 100,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "docs",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "3c653192553ddf13ad959eb8fd16e3a9f0755002",
      "shortSha": "3c653192",
      "date": "2026-05-16",
      "subject": "ui: simplify workspace sidebar chrome",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "simplify workspace sidebar chrome",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 38,
        "deletions": 141,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "cd9b7cf2dccd84c2b492f56069029eacc631056d",
      "shortSha": "cd9b7cf2",
      "date": "2026-05-16",
      "subject": "ui: move admin utilities into experimental settings",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "move admin utilities into experimental settings",
      "featureId": "miscellaneous",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 43,
        "deletions": 25,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "45bd67f45e0b04db367ff5802ef515107e6f8bb9",
      "shortSha": "45bd67f4",
      "date": "2026-05-16",
      "subject": "ui: refine workspace sidebar identity",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "refine workspace sidebar identity",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 220,
        "deletions": 51,
        "filesChanged": 2,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "704ae8e373b9f7d453f01c6ad4befe5133f514f3",
      "shortSha": "704ae8e3",
      "date": "2026-05-16",
      "subject": "ui: keep workspace chat private only",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "keep workspace chat private only",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 129,
        "deletions": 159,
        "filesChanged": 3,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 3
          }
        ]
      }
    },
    {
      "sha": "b9145f9cb96129b62dafe26bc02cf29bc42718f4",
      "shortSha": "b9145f9c",
      "date": "2026-05-16",
      "subject": "ui: nest experimental utility views",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "nest experimental utility views",
      "featureId": "miscellaneous",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 129,
        "deletions": 64,
        "filesChanged": 7,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 7
          }
        ]
      }
    },
    {
      "sha": "48c740109ea7d65a717ef5512df0dfc038ddc16a",
      "shortSha": "48c74010",
      "date": "2026-05-19",
      "subject": "mission: stabilize structured discovery calls",
      "kind": "mission",
      "category": "Mission",
      "scope": null,
      "title": "stabilize structured discovery calls",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 366,
        "deletions": 95,
        "filesChanged": 16,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 12
          },
          {
            "name": "packages",
            "count": 2
          },
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "dc2d8f8c0b0bfd72ace7e91999a5013a78a585cd",
      "shortSha": "dc2d8f8c",
      "date": "2026-05-19",
      "subject": "chat: clean memory-backed agent replies",
      "kind": "chat",
      "category": "Chat",
      "scope": null,
      "title": "clean memory-backed agent replies",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 966,
        "deletions": 255,
        "filesChanged": 10,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          },
          {
            "name": "server",
            "count": 2
          }
        ]
      }
    },
    {
      "sha": "db997a8ec779e6abc56691bb593f480d2764d637",
      "shortSha": "db997a8e",
      "date": "2026-05-19",
      "subject": "projects: add dedicated project chat route",
      "kind": "projects",
      "category": "Projects",
      "scope": null,
      "title": "add dedicated project chat route",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 267,
        "deletions": 327,
        "filesChanged": 8,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 8
          }
        ]
      }
    },
    {
      "sha": "cbcf7bc09fdce0efd5975e33fef4212e4af33576",
      "shortSha": "cbcf7bc0",
      "date": "2026-05-19",
      "subject": "ui: refine workspace command surfaces",
      "kind": "ui",
      "category": "UI",
      "scope": null,
      "title": "refine workspace command surfaces",
      "featureId": "workspace-blocks-ui",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 548,
        "deletions": 195,
        "filesChanged": 15,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 15
          }
        ]
      }
    },
    {
      "sha": "c011b44d9341696c68c34e820a40ff93c3ef3adb",
      "shortSha": "c011b44d",
      "date": "2026-05-19",
      "subject": "test: add gated mission chat live smoke",
      "kind": "test",
      "category": "Test",
      "scope": null,
      "title": "add gated mission chat live smoke",
      "featureId": "mission-studio",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 191,
        "deletions": 0,
        "filesChanged": 1,
        "primaryDirectories": [
          {
            "name": "e2e",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "9654c504472eb4ed663e0d7dc12580ef3a2a4fbf",
      "shortSha": "9654c504",
      "date": "2026-05-19",
      "subject": "ops: add issue rerun tooling and demo kit",
      "kind": "ops",
      "category": "Ops",
      "scope": null,
      "title": "add issue rerun tooling and demo kit",
      "featureId": "task-issue-workflow",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 619,
        "deletions": 8,
        "filesChanged": 6,
        "primaryDirectories": [
          {
            "name": "artifacts",
            "count": 3
          },
          {
            "name": "docs",
            "count": 1
          },
          {
            "name": "package.json",
            "count": 1
          },
          {
            "name": "scripts",
            "count": 1
          }
        ]
      }
    },
    {
      "sha": "68c77c75383d95ef472ecd7dae97ecc414550d4a",
      "shortSha": "68c77c75",
      "date": "2026-05-19",
      "subject": "feat(projects): add project knowledge document APIs",
      "kind": "feat",
      "category": "Feature",
      "scope": "projects",
      "title": "add project knowledge document APIs",
      "featureId": "project-knowledge-docs",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 1645,
        "deletions": 1,
        "filesChanged": 21,
        "primaryDirectories": [
          {
            "name": "packages",
            "count": 12
          },
          {
            "name": "server",
            "count": 9
          }
        ]
      }
    },
    {
      "sha": "e135276b0e38cb3612de2ac8a766cf1cccca6135",
      "shortSha": "e135276b",
      "date": "2026-05-19",
      "subject": "feat(ui): add project knowledge and agents workspace",
      "kind": "feat",
      "category": "Feature",
      "scope": "ui",
      "title": "add project knowledge and agents workspace",
      "featureId": "project-knowledge-docs",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 998,
        "deletions": 13,
        "filesChanged": 15,
        "primaryDirectories": [
          {
            "name": "ui",
            "count": 15
          }
        ]
      }
    },
    {
      "sha": "cd215e2b1a07774ae28aa68d921f915011687c77",
      "shortSha": "cd215e2b",
      "date": "2026-05-19",
      "subject": "fix(chat): ground project answers in selected knowledge",
      "kind": "fix",
      "category": "Fix",
      "scope": "chat",
      "title": "ground project answers in selected knowledge",
      "featureId": "memory-chat-rag",
      "refs": [
        "main"
      ],
      "onMain": true,
      "stats": {
        "insertions": 791,
        "deletions": 60,
        "filesChanged": 10,
        "primaryDirectories": [
          {
            "name": "server",
            "count": 8
          },
          {
            "name": "ui",
            "count": 2
          }
        ]
      }
    }
  ]
};
