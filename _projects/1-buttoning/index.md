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

**Presented Challenges:**  

![Challenges Overview](https://www.tekat.my.id/wp-content/uploads/2025/10/challenges-scaled.png.webp)

**In-place LiDAR-to-Workspace Calibration:**
Performed direct calibration of the LiDAR sensor to the robot's workspace, ensuring accurate 3D localization of objects.

![Calibration Confirmation](https://www.tekat.my.id/wp-content/uploads/2025/10/visual_confirm_calib2.png.webp)

**Perception Pipeline:**  

- Instance segmentation using **Detectron2** (Mask R-CNN FPN) trained on a custom dataset of 2,331 annotated images  
- Additional instance-tracking module for robust object association across frames

![Mini Dataset](https://www.tekat.my.id/wp-content/uploads/2025/10/dataset.png.webp)
![Detectron2 Results](https://www.tekat.my.id/wp-content/uploads/2025/10/model_accuracy_sys.png.webp)

<video src="https://www.tekat.my.id/wp-content/uploads/2025/10/buttons-holes-track.mp4" controls width="640"></video>

**Human Interaction: Point and Select**  

Users can select real-world objects by physically pointing at them. The system interprets the pointing gesture as an instruction to select a specific target object.

![Point and Select Demo](https://www.tekat.my.id/wp-content/uploads/2025/10/selection-steps-scaled.png.webp)

<video src="https://www.tekat.my.id/wp-content/uploads/2025/10/hand-interaction.mp4" controls width="640"></video>

---

**Full System Demonstration:**  

<video src="https://www.tekat.my.id/wp-content/uploads/2025/10/buttoning-motion.m4v" controls width="640"></video>

![Close Up](https://www.tekat.my.id/wp-content/uploads/2025/10/buttoning_sample.png.webp)
