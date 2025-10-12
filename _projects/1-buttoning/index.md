---
layout: post
title: Vision-Guided Robotic Manipulation for Button Fastening
description: Master’s degree research developing a dual-arm robot system with LiDAR-based perception for precision fastening tasks using deep learning and path-planning algorithms.
skills:
  - PyTorch
  - Detectron2
  - ROS2 / Kinova Arm
  - LiDAR Camera
  - Path Planning
main-image: https://www.tekat.my.id/wp-content/uploads/2025/10/dual-arm-config-scaled.png.webp
---

Integrated a dual-arm manipulator equipped with a LiDAR camera for precision fastening operations.  
Used deep-learning–based **instance segmentation** with **Detectron2** for object recognition and developed **path-planning algorithms** for coordinated dual-arm motion under ROS2.

<br/><br/><br/>
**Presented Challenges:**  
<br/>
<div style="text-align:center">
  <img src="https://www.tekat.my.id/wp-content/uploads/2025/10/challenges-scaled.png.webp" alt="Challenges Overview" style="max-height: 400px; max-width: 100%"/>
</div>

<br/><br/>
**In-place LiDAR-to-Workspace Calibration:**  
Performed direct calibration of the LiDAR sensor to the robot's workspace, ensuring accurate 3D localization of objects.
<br/>
<div style="text-align:center">
  <img src="https://www.tekat.my.id/wp-content/uploads/2025/10/visual_confirm_calib2.png.webp" alt="Calibration Confirmation" style="max-height: 400px; max-width: 100%"/>
</div>

<br/><br/>
**Perception Pipeline:**  

- Instance segmentation using **Detectron2** (Mask R-CNN FPN) trained on a custom dataset of 2,331 annotated images  
- Additional instance-tracking module for robust object association across frames
<br/>
<div style="text-align:center">
  <img src="https://www.tekat.my.id/wp-content/uploads/2025/10/dataset.png.webp" alt="Mini Dataset" style="max-height: 400px; max-width: 100%"/>
  <img src="https://www.tekat.my.id/wp-content/uploads/2025/10/model_accuracy_sys.png.webp" alt="Detectron2 Results" style="max-height: 400px; max-width: 100%"/>
  <video src="https://www.tekat.my.id/wp-content/uploads/2025/10/buttons-holes-track.mp4" autoplay muted loop style="max-height: 400px; max-width: 100%"></video>
</div>

<br/><br/>
**Human Interaction: Point and Select**  

Users can select real-world objects by physically pointing at them. The system interprets the pointing gesture as an instruction to select a specific target object.
<br/>
<div style="text-align:center">
  <img src="https://www.tekat.my.id/wp-content/uploads/2025/10/selection-steps-scaled.png.webp" alt="Point and Select Demo" style="max-height: 400px; max-width: 100%"/>
  <video src="https://www.tekat.my.id/wp-content/uploads/2025/10/hand-interaction.mp4" autoplay muted loop style="max-height: 400px; max-width: 100%"></video>
</div>

---
<br/><br/>
**Full System Demonstration:**  
<br/>
<div style="text-align:center">
  <img src="https://www.tekat.my.id/wp-content/uploads/2025/10/buttoning_sample.png.webp" alt="Close Up" style="max-height: 400px; max-width: 100%"/>
  <video src="https://www.tekat.my.id/wp-content/uploads/2025/10/buttoning-motion.m4v" autoplay muted loop style="max-height: 400px; max-width: 100%"></video>
</div>
