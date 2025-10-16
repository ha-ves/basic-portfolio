---
layout: post
title: Cross-Platform Secure & Intelligent UAV Ground Control Station (GCS)
description: Bachelor's research project on a patent-pending UAV control system featuring secure AES-128 communication and intelligent stability assessment, published in IEEE IES 2022.
skills:
  - STM32 (C / C++)
  - C# / Xamarin.Forms (cross-platform)
  - AES-128 encryption
  - Fuzzy inference system
  - UART / serial communication
  - UDP networking
  - MAVLink
main-image: https://www.tekat.my.id/wp-content/uploads/2025/10/gcs-cross-scaled.jpg.webp
---

## Overview

Developed as part of my bachelor's thesis research, later published in **IEEE International Electronics Symposium (IES) 2022**.

**Publication:** [DOI: 10.1109/IES55876.2022.9888714](https://doi.org/10.1109/IES55876.2022.9888714)

---

## User Empathy Map
This shows what the User of a GCS Thinks & Feels, Hears, Sees, and Says & Does. Serves as the challenges to be addressed.

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/gcs-empathy-map.jpg.webp" alt="Empathy Map" style="max-height: 400px; max-width: 100%"/>
</div>

## Key Features

### Security & Communication
- **AES-128 Encryption**: Hardware-accelerated
- **Dual Communication Modes**:
  - **Radio Telemetry**: Long-distance
  - **Wi-Fi/UDP**: Low-latency short-range
- **MAVLink**: Industry-standard UAV communication protocol

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/gcs-comm-scaled.png.webp" alt="Empathy Map" style="max-height: 400px; max-width: 100%"/>
</div>

### Intelligent Flight Management

#### Real-Time Stability Assessment
A **Flight Stability Detection** using linear regression analysis
- Monitors attitude changes over sliding window
- Visual stability indicators:
  - **Critical (Red)**: Very tilted
  - **Warning (Yellow)**: Tilted
  - **Stable**: No warning

#### Return-Time Prediction
A **Fuzzy Inference System (FIS)** with input variables:
  - Battery percentage
  - Distance from 'home'
  - Altitude
- **Output**: Visualization of estimated remaining return time window.

### User Interface

#### Cross-Platform Support
With **Xamarin.Forms** to run on Windows (UWP) and Android.

#### Real-time Avionic Displays
- **Artificial Horizon**: pitch and roll
- **Altimeter**: Current altitude
- **Compass**: Magnetic-pole bearing/heading
- **GPS Map**: Live position tracking
- **Signal Strength**: Communication quality

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/gcs-flow-scaled.png.webp" alt="Empathy Map" style="max-height: 400px; max-width: 100%"/>
</div>

---

## Technical Implementation

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/gcs-system-scaled.png.webp" alt="Empathy Map" style="max-height: 400px; max-width: 80%"/>
</div>

### Architecture

**Embedded System (STM32)**:
- Hardware AES-128 crypto acceleration
- UART communication with radio telemetry or ESP Serial-WiFi bridge
- Real-time sensor data processing

**GCS UI App**:
- **Language**: C#/.NET
- **Framework**: Xamarin.Forms
- **Platform Services**:
  - Serial port (USB/UART)
  - UDP socket
- **Libraries**:
  - FLS (Fuzzy Logic Sharp) for fuzzy inference
  - MAVLink.NET for protocol

### Fuzzy Logic Implementation

The FIS uses Center of Gravity (CoG) defuzzification with:
- **Battery membership**: Kritikal, Low, Medium, High
- **Distance membership**: Dekat, Sedang, Jauh
- **Altitude membership**: Rendah, Sedang, Tinggi
- **Output function**: S-shaped curve for smooth transitions

**Rule Example**:
```
IF Battery IS Critical THEN Return Time IS Immediate
IF Battery IS Low AND Distance IS Far AND Altitude IS High THEN Return Time IS High Priority
```

## Full Demonstration

<div style="text-align:center">
  <video data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/gcs-demo.webm" autoplay muted loop style="max-height: 400px; max-width: 100%"/>
</div>

---

## Links

[GitHub Repository](https://github.com/ha-ves/Final-Project-GCS)
