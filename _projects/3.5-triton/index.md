---
layout: post
title: TRITON — Automatic Antenna Tracker
description: Radio-to-WiFi bridge with auto-tracking biquad antenna for ~5km UAV telemetry range
skills:
  - 3D design (Autodesk Fusion 360)
  - STM32 (Cortex-M4)
  - ESP8266 / Arduino
  - Wi-Fi bridging
  - GPS & IMU integration
  - PID motor control
  - Binary protocols
main-image: https://www.tekat.my.id/wp-content/uploads/2025/10/triton-pic-front-scaled.jpg.webp
---

## Overview

TRITON bridges long-range radio telemetry (~5km) to WiFi with automatic antenna tracking. The STM32F407-based relay station with dual-axis motors and biquad antenna receives tracking commands from PIGEON GCS, while an ESP8266 (ESP-01) module provides transparent serial-to-WiFi bridging.

## Features

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/triton-pic-front-scaled.jpg.webp" alt="Triton Front" style="max-height: 400px; max-width: 45%"/>
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/triton-pic-top-scaled.jpg.webp" alt="Triton Top" style="max-height: 400px; max-width: 45%"/>
</div>

### Auto-Tracking System
- PIGEON GCS calculates bearing/elevation from UAV & tracker GPS (Haversine)
- STM32 receives tracking commands and controls motors via PID
- HMC5883L magnetometer for heading, potentiometer for pitch feedback
- 500ms update rate with continuous position tracking

### WiFi Bridge (ESP-01)
- Creates "TRITON_WIFI" Access Point for ground station
- TCP (reliable) or UDP (low-latency, multi-client) modes
- High-speed UART (up to 1Mbps) for fast telemetry forwarding
- Transparent bidirectional serial-to-WiFi bridge
- mDNS discovery as "esphw.local"
- Supports MAVLink and proprietary protocols

### Hardware
- STM32F407VG with H-bridge motor drivers
- ESP8266 (ESP-01) WiFi module
- Biquad directional antenna (2.4GHz)
- GPS, HMC5883L compass, barometer
- 3× UART interfaces (GPS, bridge, debug)

## System Architecture

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/triton-main.png.webp" alt="Pigeon Tracking View" style="max-height: 400px; max-width: 100%"/>
</div>

```
UAV Radio Telemetry (~5km RF)
    ↕
Ground Radio RX (UART 1Mbps)
    ↕
TRITON Tracker (STM32 + ESP-01 relay)
    ↕ (WiFi AP - bidirectional)
PIGEON GCS
  • Sends UAV control commands
  • Calculates aim angles from GPS
  • Commands tracker to aim biquad antenna
```

**TRITON Binary Protocol** (21 bytes): Header 'T' + Yaw + Pitch + Altitude + Lat + Lon (all float32)

**Bridge Modes**
- **TCP**: Port 61258, single client, reliable
- **UDP**: Multi-client (up to 10), low-latency, 10s timeout

## Technical Stack

**Embedded C** · **STM32 HAL** · **ESP8266/Arduino** · **WiFi AP Mode** · **TCP/UDP Bridge** · **GPS/GNSS** · **HMC5883L Compass** · **PID Control** · **H-Bridge Motor Drivers** · **Binary Protocols**

Developed by **EFRISA (EEPIS Flying Robot for Indonesia)**, GCS Division.

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/triton-pic-one-scaled.jpg.webp" alt="Triton Side 1" style="max-height: 400px; max-width: 33%"/>
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/triton-pic-two-scaled.jpg.webp" alt="Triton Side 2" style="max-height: 400px; max-width: 33%"/>
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/triton-pic-three-scaled.jpg.webp" alt="Triton Side 3" style="max-height: 400px; max-width: 33%"/>
</div>

---

## Links

[EFRISA, GCS Division](https://github.com/gcsefrisa/)  
_Due to the commercial nature of this project, the source code is not publicly available_
