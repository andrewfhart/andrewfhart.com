---
layout: project
title:  CVMeter
permalink: /projects/cvmeter/
images: cvmeter
---

###Project Overview
Motivated by desire to better understand how my resume was being consumed by the Internet at large, I designed CVMeter as a service that would provide real-time notification of "hits" on a resume or CV. Essentially analytics for resumes, the basic premise was that knowing in real-time that someone (or some thing) was looking at your resume at that moment was both more exciting and more motivating than the traditional "black hole" approach. Getting alerts periodically serves as an incentive to keep the resume up-to-date, since you're more frequently reminded of the fact that people and bots are actively consuming possibly out-of-date representations of your work. Finally, the associated analytics collected with each hit (date, time, rough geographic location (using the IP address), and referrer information when available) provide valuable context about such things as

* Which search engines are indexing your resume (and how often)
* Geographic areas of interest in you (e.g.: Northern California, Europe, etc.)
* Which companies are looking at your resume (often available from owner of the IP block)
* Changes in interest over time and/or as a reaction to uploading a new resume

I use my CVMeter link as the primary URL for my resume. It is used on this website, attached to my LinkedIn profile, and embedded in a QR code on my business cards. As a result, CVMeter gives me a geographical and temporal insight into historical interest in me (at least as measured by resume downloads).

Building CVMeter provided an excellent opportunity to get more familiar with IP geolocation APIs, QR codes, email services, and layered client-side mapping tools. As usual, there are a million-and-one things I'd like to add to this service (which is free, by the way) but lately haven't had the time.
