---
layout: project
title:  RCMES
permalink: /projects/rcmes/
images: rcmes
---

###Project Overview
The Regional Climate Model Evaluation System (RCMES) seeks to empower the regional climate modeling community by both making it easier to utilize NASA's vast collection of climate observations and by providing a computational toolkit for performing basic model-to-observational data analysis. What started as an effort to provide water resource managers in Northern California with improved access to timely observational measurements has grown into collaborations with major international climate modeling efforts including the Intergovernmental Panel on Climate Change, CORDEX, NARCCAP, and others.

Prior to RCMES, climate scientists first had to become data management experts before they could utilize NASA observations. The data are collected by different missions with different objectives, are stored in various file formats in disparate repositories, and often require specialized tools to parse. The RCM Evaluation Database (left side, first figure on the right) removes this impediment, replacing the inconsistencies with a single RESTful query interface. The RCM Evaluation Toolkit further enables users by providing a Python library and built in metrics for performing comparisons between model and observational data.

###How I Contributed
My role in this project included the _development of the initial architecture for extracting data and metadata from arbitrary upstream observational sources_. Our goal was to do away with the various limitations imposed by file boundaries and create a repository centered on the idea of a "data point".

By _analyzing the usage patterns of the user community_, we determined that organizing the data by
observational parameter would yield the best performance. (This extraction process is depicted in the second figure on the right). Having created a homogenized multi-mission database of observations, I then _helped design and implement a straightforward query interface_ for retrieving data of interest (depicted in the third figure on the right).
