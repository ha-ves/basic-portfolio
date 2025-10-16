---
layout: post
title: Verdansk Game Bot
description: A cross-platform Discord bot for monitoring game server status, utilizing Node.js gamedig library to query servers and Discord.NET for bot interactions. Supports multiple game types with real-time status updates in Discord channels.
skills:
  - C# / .NET
  - Discord.NET (REST & WebSocket)
  - Entity Framework Core / SQL
  - Node.js (gamedig integration)
  - Background services / monitoring
main-image: https://www.tekat.my.id/wp-content/uploads/2025/10/verdanskbot-cmdlist.png.webp
---

## Overview

Verdansk Game Bot is a self-hosted Discord bot designed to monitor game server status and report it directly in Discord text channels. Built with .NET for cross-platform compatibility, it leverages the node-gamedig library to query game servers and Discord.NET for seamless Discord integration. Game servers are stored in an SQL database using Entity Framework Core, enabling persistent watch lists and multi-threaded monitoring.

The bot supports slash commands for adding, listing, changing, and removing game servers from the watch list. It periodically checks server status (online/offline, player count, etc.) and updates the message embed in Discord.

---

## Features

- **Multi-Game Support**: As supported by gamedig (e.g., Project Zomboid, Valve games, etc.)
- **Real-Time Monitoring**: Configurable update intervals for checking game server status
- **Interactive Embeds**: game server details, player counts, join links
- **Persistent Storage**: SQL database for storing game servers list
- **Cross-Platform**: Windows, Linux (Service-mode), and macOS

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/verdanskbot-watch-sample.png.webp" alt="VerdanskGameBot" style="max-height: 600px; max-width: 33%"/>
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/verdanskbot-cmdlist.png.webp" alt="Mini Dataset" style="max-height: 400px; max-width: 33%"/>
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/verdanskbot-srvlist.png.webp" alt="Detectron2 Results" style="max-height: 400px; max-width: 33%"/>
</div>

---

## Technical Implementation

### Architecture

The bot consists of several key components:

- **CommandService**: Slash commands and modal interactions
- **GameServerWatcher**: Periodic game server queries and status updates
- **GameServerModel**: Entity Framework model for database operations
- **EF Core Migrations**: For managing SQL database schema changes

### Key Technologies

- **Discord.NET**: Discord API
- **Entity Framework Core**: ORM for SQL database
- **Node.js gamedig**: Game server querying via NodeJS interop

<div style="text-align:center">
    <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/verdanskbot-sql.png.webp" alt="Detectron2 Results" style="max-height: 400px; max-width: 50%"/>
    <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/verdanskbot-sqlgs.png.webp" alt="Detectron2 Results" style="max-height: 400px; max-width: 50%"/>
</div>

---

## Links

- [GitHub Repository](https://github.com/ha-ves/VerdanskGameBot)

