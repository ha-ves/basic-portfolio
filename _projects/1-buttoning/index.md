---
layout: post
title: Vision-Guided Robotic Manipulation for Button Fastening
description: Master's degree research developing a dual-arm robot system with LiDAR-based perception for precision fastening tasks using deep learning and path-planning algorithms.
skills:
  - PyTorch
  - Detectron2
  - ROS2
  - Kinova robotic arm
  - LiDAR / depth sensing
  - 3D design (Autodesk Fusion 360)
  - Path planning
main-image: https://www.tekat.my.id/wp-content/uploads/2025/10/dual-arm-config-scaled.png.webp
---

## Overview

Integrated a dual-arm manipulator equipped with a LiDAR camera for precision fastening operations. Used deep-learning–based **instance segmentation** with **Detectron2** for object recognition and developed **path-planning algorithms** for coordinated dual-arm motion under ROS2.

---

## Presented Challenges


<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/challenges-scaled.png.webp" alt="Challenges Overview" style="max-height: 400px; max-width: 100%"/>
</div>

---

## In-place LiDAR-to-Workspace Calibration

Performed direct calibration of the LiDAR sensor to the robot's workspace, ensuring accurate 3D localization of objects.

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/visual_confirm_calib2.png.webp" alt="Calibration Confirmation" style="max-height: 400px; max-width: 100%"/>
</div>

---

## Perception Pipeline

- Instance segmentation using **Detectron2** (Mask R-CNN FPN) trained on a custom dataset of 2,331 annotated images
- Additional instance-tracking module for robust object association across frames

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/dataset.png.webp" alt="Mini Dataset" style="max-height: 400px; max-width: 100%"/>
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/model_accuracy_sys.png.webp" alt="Detectron2 Results" style="max-height: 400px; max-width: 100%"/>
  <video data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/buttons-holes-track.mp4" autoplay muted loop style="max-height: 400px; max-width: 100%"></video>
</div>

---

## Human Interaction: Point and Select

Users can select real-world objects by physically pointing at them. The system interprets the pointing gesture as an instruction to select a specific target object.

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/selection-steps-scaled.png.webp" alt="Point and Select Demo" style="max-height: 400px; max-width: 100%"/>
  <video data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/hand-interaction.mp4" autoplay muted loop style="max-height: 400px; max-width: 100%"></video>
</div>

---

## Full System Demonstration

<div style="text-align:center">
  <img data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/buttoning_sample.png.webp" alt="Close Up" style="max-height: 400px; max-width: 100%"/>
  <video data-src="https://www.tekat.my.id/wp-content/uploads/2025/10/buttoning-motion.m4v" autoplay muted loop style="max-height: 400px; max-width: 100%"></video>
</div>
