---
layout: post
title: Sterilization Room UI
description: Multi-sensor dashboard for sterilization room temperature monitoring.
skills:
  - ESP32 firmware
  - C# / .NET / WPF
  - OxyPlot (real-time plotting)
  - TCP/IP networking
  - SQLite (local persistence)
main-image: https://www.tekat.my.id/wp-content/uploads/2025/10/sterile-room-normal.jpg.webp
---

## Overview

Ruang Steril GUI monitors up to 6 DS18B20 sensors (ESP32/ESP8266) over a local TCP/IP link. It shows live charts (OxyPlot), stores readings in SQLite, and notifies when temperatures fall outside the safe range (≈45–55°C).

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/sterile-room-normal.jpg.webp" alt="Sterile Room" style="max-height: 400px; max-width: 49%"/>
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/sterile-room-warn.jpg.webp" alt="Sterile Room" style="max-height: 400px; max-width: 49%"/>
</div>

## Highlights

- Real-time plots (OxyPlot) with per-sensor series and 1s updates
- Supports 6 DS18B20 sensors, average calculation, and alerts
- Connects to ESP32 AP on port 12727 using a small delimiter-based protocol
- Local SQLite persistence with query/export of historical data
- Optional SD logging on the ESP device

## Tech

- Desktop: C#, WPF, OxyPlot, Dapper, SQLite
- Embedded: ESP32/ESP8266, OneWire/DallasTemperature, WiFi, SD

---

## Links

[GitHub Repository](https://github.com/ha-ves/RuangSterilGUI)
