---
layout: post
title: PIGEON — Pilot's Ground Control Station
description: Patent-pending UAV ground control station with real-time telemetry and multi-protocol support
skills:
  - C#
  - .NET / WPF
  - MAVLink
  - TCP/IP networking
  - Real-time data visualization
  - Socket.IO
  - GMap.NET
main-image: https://www.tekat.my.id/wp-content/uploads/2025/10/pigeon-main-on.png.webp
---

## Overview

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/pigeon-main.png.webp" alt="PIGEON" style="max-height: 400px; max-width: 45%"/>
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/pigeon-main-on.png.webp" alt="PIGEON ON" style="max-height: 400px; max-width: 45%"/>
</div>

PIGEON (Pilot Ground Control Station) is a patent-pending ground control station for UAVs, providing real-time telemetry visualization, flight control, and mission planning for fixed-wing and multi-rotor aircraft. Built with WPF, it supports MAVLink protocol communication via Serial, WiFi, and internet connections.

## Features

**Telemetry Displays**
- Artificial horizon (attitude indicator) with real-time pitch/roll
- Barometric altitude and airspeed gauges
- GPS navigation with interactive map (GMap.NET)
- Connection quality, flight time, and battery monitoring
- Live video feed integration

**Flight Control**
- PID tuning interface for Roll, Pitch, Yaw parameters
- Waypoint mission planning and upload
- Flight mode configuration (Manual, Stabilize, Auto)
- Compass calibration with progress monitoring
- Servo output and RC channel monitoring

**Connectivity**
- MAVLink 2.0 protocol for ArduPilot/PX4
- Serial/UART, WiFi/TCP, and internet-based connections
- Socket.IO for remote telemetry streaming
- Multi-aircraft support (quadcopters, planes)
- Additional antenna tracker ([TRITON]({{ site.baseurl }}/projects/3.5-triton/index/)) relay

**Interface**
- Multi-view layout (Flight, Map, Statistics, Tracker views)
- Strategic instrument placement for optimal situational awareness
- Multi-language support (Indonesian/English)
- CSV data logging for post-flight analysis

## Technical Stack

**.NET/WPF** · **MAVLink** · **GMap.NET** · **Socket.IO** · **AForge.NET** · **WebView2**

## Demonstration

<div style="text-align:center">
  <video data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/pigeon-demo-irl.webm" autoplay muted loop style="max-height: 400px; max-width: 100%"></video>
</div>

## Patent Innovation

The UI design features patent-pending ergonomic instrument placement optimized for UAV operations, with the artificial horizon centered and critical indicators (altitude, airspeed, battery) positioned for immediate visibility and operator safety.

Developed by **EFRISA (EEPIS Flying Robot for Indonesia)**, GCS Division.

---

## Links

[EFRISA, GCS Division](https://github.com/gcsefrisa/)  
_Due to the patent-pending status and commercial nature of this project, the source code is not publicly available_
