---
layout: project
title:  Snow Data System
permalink: /projects/snow/
images: snow
---

### Project Overview
The Snow Data System is a research effort that provides data management and processing support to ongoing efforts at better quantifying the effect that airborne dust and pollutants are having on the melt rates of the world's major snow packs. Data obtained from remote sensing and in-situ instruments are collected, archived, and processed into products, many near-real-time, which are then used by a broad spectrum of downstream consumers including the U.S. Army, the climate science community, and state and regional water resource planning commissions.

### How I Contributed
My role on this project was to _develop a data collection framework for obtaining hourly
measurements from a scattered network of in-situ weather stations_ in remote locations
in the western Rocky Mountains. COTS software was used for the communication link with
the towers themselves, and I _wrote a series of Python scripts to transform and harmonize
the data from different instruments_ so that it could be stored and analyzed as a single
collection downstream. Next, I _designed a web-based user interface for ad-hoc
investigation of the collected data_, including the ability to plot data from multiple
stations side by side over variable time periods. Finally, I _implemented and documented
a set of RESTful web services_ to allow users to quickly and intuitively subset the data
and retrieve interesting data in various formats.

