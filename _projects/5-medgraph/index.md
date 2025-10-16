---
layout: post
title: MedGraph — Vital Sign Visualization
description: Multi-sensor biomedical monitoring system with ESP8266/Arduino integration and real-time WPF visualization for ECG, SpO₂, and blood pressure.
skills:
  - C# / .NET / WPF
  - Arduino / ESP8266 (Espressif)
  - TCP/IP networking
  - Serial / UART communication
  - Real-time data visualization
  - Biomedical sensor integration
main-image: https://www.tekat.my.id/wp-content/uploads/2025/10/medgraph-snap.png.webp
---

## Overview

A **biomedical sensor monitoring system** that integrates vital sign sensors with wireless data transmission and real-time visualization. Bridges embedded hardware with a desktop application for medical data analysis.

## System Architecture

### Desktop Application (.NET 5 / WPF)
- **Real-time Biomedical sensors visualization:**
  - Electro-Cardio-Gram signal (Lead I, II, III, aVR, aVL, aVF)
  - Oximeter (Blood Oxygen Level, SpO₂) graph over time
  - Tensimeter (Systolic/diastolic) and blood pressure (BPM)
- **WiFi TCP/IP connection** to ESP8266 (auto-discovery)

### ESP8266 Serial-WiFi Bridge
- **WiFi Access Point**
- **mDNS Service Discovery**

### Sensor Modules (Arduino)

#### 6-Lead ECG Monitor
- Analog signal reading from 6 ECG leads (A0-A5)
- Data format: `*,mode,lead1,lead2,lead3,aVR,aVL,aVF#`

#### SpO₂ Oximeter
- Dual-wavelength pulse oximetry (Red + Infrared LEDs)
- Oxygen saturation calculation using AC/DC ratio algorithm
- Pulse rate detection from PPG waveform
- Data format: `N,ppg_raw,spo2_value,heart_rate#`

#### Blood Pressure Monitor (Tensimeter)
- Systolic/diastolic detection from Oscillometric measurement using MPX5700 pressure sensor
- Automatic inflation/deflation with motor and solenoid valve
- 16x2 I²C LCD showing real-time readings
- Data format: `T,systolic,diastolic#`

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/medgraph-snap.png.webp" alt="Medgraph App" style="max-height: 400px; max-width: 45%"/>
  <video data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/medgraph-run.mp4" autoplay muted loop style="max-height: 400px; max-width: 45%"/>
</div>

---

## Links
- [GitHub Repository](https://github.com/ha-ves/medgraph)
