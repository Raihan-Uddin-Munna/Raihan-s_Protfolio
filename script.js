// /* =========================================
//    RAIHAN NETWORK LAB
//    File: script10.js
//    ========================================= */

// "use strict";

// /* =========================================
//    1. PERSONAL SETTINGS
//    Replace placeholders with your real details.
//    ========================================= */

// const SITE_CONFIG = {
//   github: "https://github.com/Raihan-Uddin-Munna",
//   github2 : "https://github.com/Raihan-Uddin-Munna?tab=repositories",

//   // Replace these before publishing.
//   email: "raihanuddin1289@gmail.com",
//   whatsapp: "https://call.whatsapp.com/voice/tQmAvFk8rbBENqd3PQ9Oq4",
//   linkedin: "https://www.linkedin.com/",

//   resume: "resume.pdf"
// };

// /* =========================================
//    2. ELEMENT HELPERS
//    ========================================= */

// const $ = (selector, parent = document) =>
//   parent.querySelector(selector);

// const $$ = (selector, parent = document) =>
//   Array.from(parent.querySelectorAll(selector));

// /* =========================================
//    3. APPLY PERSONAL LINKS
//    ========================================= */

// function setupPersonalLinks() {
//   const githubLinks = [
//     ...$$('a[href*="github.com/Raihan-Uddin-Munna"]')
//   ];

//   githubLinks.forEach((link) => {
//     link.href = SITE_CONFIG.github;
//   });

//   const emailLink = $("#emailLink");
//   const emailDisplay = $("#emailDisplay");
//   const footerEmail = $("#footerEmail");
//   const whatsappLink = $("#whatsappLink");
//   const linkedinLink = $("#linkedinLink");
//   const footerLinkedIn = $("#footerLinkedIn");

//   const emailIsPlaceholder =
//     !SITE_CONFIG.email ||
//     SITE_CONFIG.email === "your-email@example.com";

//   if (emailLink) {
//     emailLink.href = emailIsPlaceholder
//       ? "#contact"
//       : `mailto:${SITE_CONFIG.email}`;
//   }

//   if (emailDisplay) {
//     emailDisplay.textContent = SITE_CONFIG.email;
//   }

//   if (footerEmail) {
//     footerEmail.href = emailIsPlaceholder
//       ? "#contact"
//       : `mailto:${SITE_CONFIG.email}`;
//   }

//   const whatsappNumber = SITE_CONFIG.whatsapp.replace(/\D/g, "");
//   const whatsappIsPlaceholder =
//     !whatsappNumber || whatsappNumber.includes("XXXXXXXXXXX");

//   if (whatsappLink) {
//     whatsappLink.href = whatsappIsPlaceholder
//       ? "#contact"
//       : `https://wa.me/${whatsappNumber}`;
//   }

//   if (linkedinLink) {
//     linkedinLink.href = SITE_CONFIG.linkedin;
//   }

//   if (footerLinkedIn) {
//     footerLinkedIn.href = SITE_CONFIG.linkedin;
//   }

//   const resumeButton = $(".resume-button");

//   if (resumeButton) {
//     resumeButton.href = SITE_CONFIG.resume;
//   }
// }

// setupPersonalLinks();

// /* =========================================
//    4. PROFILE PHOTO FALLBACK
//    ========================================= */

// const profileImage = $("#profileImage");
// const portraitPlaceholder = $("#portraitPlaceholder");

// if (profileImage && portraitPlaceholder) {
//   function showPortraitFallback() {
//     profileImage.style.display = "none";
//     portraitPlaceholder.style.display = "flex";
//   }

//   profileImage.addEventListener("error", showPortraitFallback);

//   // Handles a missing image that failed before this listener was attached.
//   if (profileImage.complete && profileImage.naturalWidth === 0) {
//     showPortraitFallback();
//   }
// }

// /* =========================================
//    5. MOBILE NAVIGATION
//    ========================================= */

// const menuToggle = $("#menuToggle");
// const navLinks = $("#navLinks");

// function closeMobileMenu() {
//   if (!menuToggle || !navLinks) return;

//   navLinks.classList.remove("open");
//   menuToggle.setAttribute("aria-expanded", "false");
//   menuToggle.setAttribute("aria-label", "Open navigation");
// }

// function toggleMobileMenu() {
//   if (!menuToggle || !navLinks) return;

//   const currentlyOpen = navLinks.classList.contains("open");
//   const shouldOpen = !currentlyOpen;

//   navLinks.classList.toggle("open", shouldOpen);
//   menuToggle.setAttribute("aria-expanded", String(shouldOpen));
//   menuToggle.setAttribute(
//     "aria-label",
//     shouldOpen ? "Close navigation" : "Open navigation"
//   );
// }

// if (menuToggle && navLinks) {
//   menuToggle.addEventListener("click", toggleMobileMenu);

//   $$(".nav-links a").forEach((link) => {
//     link.addEventListener("click", closeMobileMenu);
//   });

//   document.addEventListener("click", (event) => {
//     const clickedInsideNav =
//       navLinks.contains(event.target) ||
//       menuToggle.contains(event.target);

//     if (!clickedInsideNav) {
//       closeMobileMenu();
//     }
//   });

//   document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//       closeMobileMenu();
//     }
//   });

//   window.addEventListener("resize", () => {
//     if (window.innerWidth > 820) {
//       closeMobileMenu();
//     }
//   });
// }

// /* =========================================
//    6. SCROLL PROGRESS + ACTIVE NAVIGATION
//    ========================================= */

// const scrollProgress = $("#scrollProgress");
// const mainSections = $$("main section[id]");
// const navAnchors = $$(".nav-links a");
// const dotLinks = $$(".dot-link");

// let scrollUpdatePending = false;

// function updateScrollUI() {
//   const scrollableHeight =
//     document.documentElement.scrollHeight - window.innerHeight;

//   const scrollPercentage =
//     scrollableHeight > 0
//       ? (window.scrollY / scrollableHeight) * 100
//       : 0;

//   if (scrollProgress) {
//     scrollProgress.style.width =
//       `${Math.min(100, Math.max(0, scrollPercentage))}%`;
//   }

//   scrollUpdatePending = false;
// }

// window.addEventListener(
//   "scroll",
//   () => {
//     if (scrollUpdatePending) return;

//     scrollUpdatePending = true;
//     window.requestAnimationFrame(updateScrollUI);
//   },
//   { passive: true }
// );

// window.addEventListener("resize", updateScrollUI);
// updateScrollUI();

// function setActiveSection(sectionId) {
//   navAnchors.forEach((link) => {
//     const isActive = link.getAttribute("href") === `#${sectionId}`;

//     link.classList.toggle("active", isActive);
//   });

//   dotLinks.forEach((link) => {
//     const isActive = link.getAttribute("href") === `#${sectionId}`;

//     link.classList.toggle("active", isActive);

//     if (isActive) {
//       link.setAttribute("aria-current", "location");
//     } else {
//       link.removeAttribute("aria-current");
//     }
//   });
// }

// if ("IntersectionObserver" in window) {
//   const sectionObserver = new IntersectionObserver(
//     (entries) => {
//       const visibleSections = entries
//         .filter((entry) => entry.isIntersecting)
//         .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

//       if (visibleSections.length > 0) {
//         setActiveSection(visibleSections[0].target.id);
//       }
//     },
//     {
//       rootMargin: "-20% 0px -55% 0px",
//       threshold: [0, 0.1, 0.25, 0.5]
//     }
//   );

//   mainSections.forEach((section) => {
//     sectionObserver.observe(section);
//   });
// }

// /* =========================================
//    7. SCROLL REVEAL ANIMATIONS
//    ========================================= */

// const revealElements = $$(".reveal");
// const reduceMotion = window.matchMedia(
//   "(prefers-reduced-motion: reduce)"
// ).matches;

// if ("IntersectionObserver" in window && !reduceMotion) {
//   const revealObserver = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       threshold: 0.08,
//       rootMargin: "0px 0px -25px 0px"
//     }
//   );

//   revealElements.forEach((element) => {
//     revealObserver.observe(element);
//   });
// } else {
//   revealElements.forEach((element) => {
//     element.classList.add("visible");
//   });
// }

// /* =========================================
//    8. PROJECT DATA
//    Update repository URLs when your project
//    repositories are ready.
//    ========================================= */

// // const projects = {
// //   eigrp: {
// //     number: "01",
// //     category: "NETWORK ENGINEERING",
// //     title: "Enterprise EIGRP Routing Lab",
// //     description:
// //       "A multi-router Cisco lab focused on dynamic routing, " +
// //       "neighbour relationships, route selection, metric behaviour, " +
// //       "successor and feasible successor concepts, and troubleshooting. " +
// //       "The documentation should include topology, configurations, " +
// //       "verification commands, and failure-test results.",
// //     features: [
// //       "Configure EIGRP across multiple routers",
// //       "Verify neighbours and routing tables",
// //       "Inspect route selection and metrics",
// //       "Test connectivity after a link failure"
// //     ],
// //     tags: ["EIGRP", "Cisco IOS", "Packet Tracer", "Routing"],
// //     url: "https://github.com/Raihan-Uddin-Munna"
// //   },

// //   vlan: {
// //     number: "02",
// //     category: "SWITCHING & NETWORK DESIGN",
// //     title: "Enterprise Office VLAN Network",
// //     description:
// //       "An office network design that separates departments using VLANs. " +
// //       "The lab covers access ports, 802.1Q trunks, inter-VLAN routing, " +
// //       "management separation, and verification of expected connectivity.",
// //     features: [
// //       "Design department-based VLAN segmentation",
// //       "Configure access and trunk ports",
// //       "Enable and verify inter-VLAN routing",
// //       "Test isolation and end-to-end connectivity"
// //     ],
// //     tags: ["VLAN", "802.1Q", "STP", "Inter-VLAN Routing"],
// //     url: "https://github.com/Raihan-Uddin-Munna"
// //   },

// //   vlsm: {
// //     number: "03",
// //     category: "IP ADDRESSING & DESIGN",
// //     title: "VLSM Office Network Design",
// //     description:
// //       "A subnet-planning lab that allocates IPv4 address space to " +
// //       "office departments of different sizes. The project demonstrates " +
// //       "subnet calculations, gateway planning, address documentation, " +
// //       "and connectivity verification.",
// //     features: [
// //       "Calculate appropriate subnet sizes",
// //       "Allocate non-overlapping IPv4 networks",
// //       "Document gateways and host ranges",
// //       "Verify addressing and connectivity"
// //     ],
// //     tags: ["IPv4", "VLSM", "Subnetting", "Packet Tracer"],
// //     url: "https://github.com/Raihan-Uddin-Munna/vlsm-office-network-cisco"
// //   },

// //   linux: {
// //     number: "04",
// //     category: "SYSTEMS & SECURITY",
// //     title: "Linux & Security Fundamentals",
// //     description:
// //       "A developing learning project for practicing basic Linux " +
// //       "commands, file permissions, user and process inspection, " +
// //       "networking utilities, and security fundamentals in an " +
// //       "authorized lab environment.",
// //     features: [
// //       "Practice command-line navigation",
// //       "Inspect users and file permissions",
// //       "Review processes and network settings",
// //       "Document commands and their expected output"
// //     ],
// //     tags: ["Linux", "CLI", "Networking", "Security Basics"],
// //     url: "https://github.com/Raihan-Uddin-Munna"
// //   },

// //   portfolio: {
// //     number: "05",
// //     category: "WEB DEVELOPMENT",
// //     title: "Network Engineering Portfolio",
// //     description:
// //       "A responsive portfolio created to present networking projects, " +
// //       "technical skills, training, and future security interests. " +
// //       "It includes a modal project viewer, mobile navigation, dot " +
// //       "navigation, and an interactive demonstration terminal.",
// //     features: [
// //       "Responsive layout for phones and desktops",
// //       "Filterable project rows and detail modal",
// //       "Keyboard-friendly navigation",
// //       "Interactive demo terminal"
// //     ],
// //     tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
// //     url: "https://github.com/Raihan-Uddin-Munna"
// //   }
// // };




// /* ==========================================
//    PROJECT MODAL — INTERACTION CONTROLLER
// ========================================== */

// (() => {
//     "use strict";

//     const modal = document.getElementById("projectModal");
//     if (!modal || modal.dataset.controllerReady === "true") return;
//     modal.dataset.controllerReady = "true";

//     const $ = (id) => document.getElementById(id);

//     const el = {
//         header: $("modalHeader"),
//         scroll: $("modalScroll"),
//         progress: $("modalProgressBar"),
//         number: $("modalNumber"),
//         category: $("modalCategory"),
//         status: $("modalStatus"),
//         title: $("modalTitle"),
//         description: $("modalDescription"),
//         facts: $("modalQuickFacts"),
//         image: $("modalImage"),
//         imageButton: $("modalImageButton"),
//         caption: $("modalImageCaption"),
//         implementation: $("modalImplementation"),
//         features: $("modalFeatures"),
//         verification: $("modalVerification"),
//         tests: $("modalTests"),
//         specs: $("modalSpecs"),
//         tags: $("modalTags"),
//         resources: $("modalResources"),
//         backTop: $("modalBackTop"),
//         previous: $("modalPrevious"),
//         next: $("modalNext")
//     };

//     const lightbox = $("modalLightbox");
//     const lightboxImage = $("modalLightboxImage");
//     const lightboxCaption = $("modalLightboxCaption");

//     let activeIndex = -1;
//     let projects = [];
//     let previousFocus = null;
//     let previousBodyOverflow = "";
//     let scrollFrame = 0;

//     const reducedMotion = window.matchMedia(
//         "(prefers-reduced-motion: reduce)"
//     );

//     const safeUrl = (value) => {
//         if (typeof value !== "string" || !value.trim()) return "";

//         try {
//             const url = new URL(value, window.location.href);

//             if (!["http:", "https:"].includes(url.protocol)) return "";

//             // Keep local relative URLs, HTTP(S) URLs and GitHub URLs.
//             return url.href;
//         } catch {
//             return "";
//         }
//     };

//     const makeIcon = (name) => {
//         const icon = document.createElement("i");
//         icon.className = name;
//         icon.setAttribute("aria-hidden", "true");
//         return icon;
//     };

//     const setText = (element, value) => {
//         if (!element) return;
//         element.textContent = value == null ? "" : String(value);
//     };

//     const clear = (element) => {
//         if (element) element.replaceChildren();
//     };

//     const addListItem = (container, value, iconClass) => {
//         if (value == null || value === "") return;

//         const li = document.createElement("li");
//         li.append(makeIcon(iconClass || "fa-solid fa-check"));
//         li.append(document.createTextNode(String(value)));
//         container.append(li);
//     };

//     const addFact = (icon, value) => {
//         if (value == null || value === "") return;

//         const fact = document.createElement("span");
//         fact.className = "modal-fact";
//         fact.append(makeIcon(icon));
//         fact.append(document.createTextNode(String(value)));
//         el.facts.append(fact);
//     };

//     const addSpec = (label, value) => {
//         if (value == null || value === "") return;

//         const row = document.createElement("div");
//         row.className = "modal-spec-row";

//         const dt = document.createElement("dt");
//         dt.textContent = label;

//         const dd = document.createElement("dd");
//         dd.textContent = Array.isArray(value)
//             ? value.join(", ")
//             : String(value);

//         row.append(dt, dd);
//         el.specs.append(row);
//     };

//     const addTag = (tag) => {
//         if (!tag) return;

//         const span = document.createElement("span");
//         span.textContent = String(tag);
//         el.tags.append(span);
//     };

//     const addResource = (label, detail, url, icon, download = false) => {
//         const href = safeUrl(url);
//         const a = document.createElement("a");

//         a.className = "modal-resource";
//         a.append(makeIcon(icon));

//         const copy = document.createElement("span");
//         copy.className = "modal-resource-copy";

//         const title = document.createElement("strong");
//         title.textContent = label;

//         const subtitle = document.createElement("small");
//         subtitle.textContent = detail;

//         copy.append(title, subtitle);
//         a.append(copy);

//         if (!href) {
//             a.classList.add("is-disabled");
//             a.setAttribute("aria-disabled", "true");
//             a.removeAttribute("href");
//             a.addEventListener("click", (event) => {
//                 event.preventDefault();
//             });
//         } else {
//             a.href = href;

//             if (download) {
//                 // The download attribute works best for same-origin files.
//                 a.download = "";
//             } else {
//                 a.target = "_blank";
//                 a.rel = "noopener noreferrer";
//             }

//             a.append(makeIcon(
//                 download
//                     ? "fa-solid fa-download"
//                     : "fa-solid fa-arrow-up-right-from-square"
//             ));
//         }

//         el.resources.append(a);
//     };

//     const setSectionVisibility = (id, visible) => {
//         const section = $(id);
//         if (section) section.hidden = !visible;
//     };

//     function renderProject(project, index) {
//         setText(el.number, String(index + 1).padStart(2, "0"));
//         setText(el.category, project.category || "TECHNICAL PROJECT");
//         setText(el.title, project.title || "Untitled Project");
//         setText(el.description, project.description || "");
//         setText(el.status, project.status || "LAB PROJECT");
//         setText(el.caption, project.imageCaption || "Project overview");
//         setText(el.implementation, project.implementation || "");
//         setText(el.verification, project.verification || "");

//         // Summary facts.
//         clear(el.facts);

//         addFact("fa-solid fa-layer-group", project.deviceCount);
//         addFact("fa-solid fa-network-wired", project.networkType);
//         addFact("fa-regular fa-clock", project.duration);

//         // Image preview.
//         const imageUrl = safeUrl(project.image);

//         if (imageUrl) {
//             el.image.src = imageUrl;
//             el.image.alt = project.imageAlt || project.title || "Project preview";
//             el.imageButton.hidden = false;
//             setSectionVisibility("modalVisualSection", true);
//         } else {
//             el.image.removeAttribute("src");
//             el.image.alt = "";
//             el.imageButton.hidden = true;
//             setSectionVisibility("modalVisualSection", false);
//         }

//         // Implementation features.
//         clear(el.features);
//         (project.features || []).forEach(item => {
//             addListItem(el.features, item);
//         });

//         setSectionVisibility(
//             "modalImplementationSection",
//             Boolean(project.implementation || (project.features || []).length)
//         );

//         // Verification and testing.
//         clear(el.tests);
//         (project.tests || []).forEach(item => {
//             addListItem(el.tests, item, "fa-solid fa-circle-check");
//         });

//         setSectionVisibility(
//             "modalVerificationSection",
//             Boolean(project.verification || (project.tests || []).length)
//         );

//         // Technical specifications.
//         clear(el.specs);
//         const specs = project.specs || {};

//         Object.entries(specs).forEach(([key, value]) => {
//             addSpec(key, value);
//         });

//         setSectionVisibility(
//             "modalSpecsSection",
//             Object.keys(specs).length > 0
//         );

//         // Technology tags.
//         clear(el.tags);
//         (project.tags || []).forEach(addTag);

//         setSectionVisibility(
//             "modalTechSection",
//             (project.tags || []).length > 0
//         );

//         // Actionable resources.
//         clear(el.resources);

//         addResource(
//             "Download topology",
//             project.pkt ? "Cisco Packet Tracer .pkt file" : "Topology file unavailable",
//             project.pkt,
//             "fa-solid fa-file-arrow-down",
//             true
//         );

//         addResource(
//             "GitHub repository",
//             project.github ? "Source files and documentation" : "Repository unavailable",
//             project.github,
//             "fa-brands fa-github"
//         );

//         if (project.liveDemo) {
//             addResource(
//                 "Live demonstration",
//                 "Open the deployed project",
//                 project.liveDemo,
//                 "fa-solid fa-arrow-up-right-from-square"
//             );
//         }

//         if (project.readme) {
//             addResource(
//                 "Project documentation",
//                 "README and technical notes",
//                 project.readme,
//                 "fa-solid fa-file-lines"
//             );
//         }

//         setSectionVisibility(
//             "modalResourcesSection",
//             true
//         );

//         // Previous and next project controls.
//         el.previous.disabled = index <= 0;
//         el.next.disabled = index >= projects.length - 1;

//         el.previous.setAttribute("aria-label", "Previous project");
//         el.next.setAttribute("aria-label", "Next project");

//         // Reset scroll state when switching projects.
//         el.scroll.scrollTop = 0;
//         updateScrollState();
//     }

//     function updateScrollState() {
//         const scrollTop = el.scroll.scrollTop;
//         const maxScroll = el.scroll.scrollHeight - el.scroll.clientHeight;
//         const progress = maxScroll > 0
//             ? Math.min(100, (scrollTop / maxScroll) * 100)
//             : 0;

//         modal.classList.toggle("is-scrolled", scrollTop > 30);
//         el.progress.style.width = `${progress}%`;

//         el.backTop.classList.toggle("is-visible", scrollTop > 350);
//     }

//     function openProject(projectList, index) {
//         if (!Array.isArray(projectList) || !projectList.length) return;
//         if (!Number.isInteger(index) || !projectList[index]) return;

//         projects = projectList;
//         activeIndex = index;

//         previousFocus = document.activeElement;
//         previousBodyOverflow = document.body.style.overflow;

//         renderProject(projects[activeIndex], activeIndex);

//         if (!modal.open) {
//             document.body.style.overflow = "hidden";
//             modal.showModal();
//         }

//         $("modalClose").focus({ preventScroll: true });
//     }

//     function closeProject() {
//         if (lightbox?.open) lightbox.close();
//         if (modal.open) modal.close();
//     }

//     function switchProject(direction) {
//         const nextIndex = activeIndex + direction;

//         if (nextIndex < 0 || nextIndex >= projects.length) return;

//         activeIndex = nextIndex;
//         renderProject(projects[activeIndex], activeIndex);
//         el.scroll.focus({ preventScroll: true });
//     }

//     // Public API for existing project cards.
//     window.openProjectModal = openProject;

//     $("modalClose").addEventListener("click", closeProject);
//     $("modalDone")?.addEventListener("click", closeProject);
//     $("modalBack").addEventListener("click", closeProject);
//     $("modalFooterBack").addEventListener("click", closeProject);

//     el.previous.addEventListener("click", () => switchProject(-1));
//     el.next.addEventListener("click", () => switchProject(1));

//     el.scroll.addEventListener("scroll", () => {
//         if (scrollFrame) return;

//         scrollFrame = requestAnimationFrame(() => {
//             updateScrollState();
//             scrollFrame = 0;
//         });
//     }, { passive: true });

//     el.backTop.addEventListener("click", () => {
//         el.scroll.scrollTo({
//             top: 0,
//             behavior: reducedMotion.matches ? "auto" : "smooth"
//         });
//     });

//     // Image lightbox.
//     el.imageButton.addEventListener("click", () => {
//         if (!el.image.src || !lightbox) return;

//         lightboxImage.src = el.image.src;
//         lightboxImage.alt = el.image.alt;
//         setText(lightboxCaption, el.caption.textContent);

//         if (!lightbox.open) lightbox.showModal();
//         $("lightboxClose").focus({ preventScroll: true });
//     });

//     $("lightboxClose")?.addEventListener("click", () => {
//         lightbox.close();
//     });

//     lightbox?.addEventListener("click", (event) => {
//         if (event.target === lightbox) lightbox.close();
//     });

//     lightbox?.addEventListener("close", () => {
//         el.imageButton.focus({ preventScroll: true });
//     });

//     // Restore page scroll and keyboard focus.
//     modal.addEventListener("close", () => {
//         document.body.style.overflow = previousBodyOverflow;
//         modal.classList.remove("is-scrolled");
//         el.backTop.classList.remove("is-visible");
//         el.progress.style.width = "0%";

//         if (previousFocus?.isConnected) {
//             previousFocus.focus({ preventScroll: true });
//         }
//     });

//     // Focus stays inside the dialog.
//     modal.addEventListener("keydown", (event) => {
//         if (event.key !== "Tab") return;

//         const focusable = [...modal.querySelectorAll(
//             'button:not(:disabled):not([hidden]), a[href], [tabindex="0"]'
//         )].filter(node => {
//             return !node.closest("[hidden]") &&
//                    node.getClientRects().length > 0;
//         });

//         if (!focusable.length) return;

//         const first = focusable[0];
//         const last = focusable[focusable.length - 1];

//         if (event.shiftKey && document.activeElement === first) {
//             event.preventDefault();
//             last.focus();
//         } else if (!event.shiftKey && document.activeElement === last) {
//             event.preventDefault();
//             first.focus();
//         }
//     });

//     // Close on backdrop click.
//     modal.addEventListener("click", (event) => {
//         if (event.target === modal) closeProject();
//     });

//     // Bind cards only when they have a valid project index.
//     document.addEventListener("click", (event) => {
//         const trigger = event.target.closest("[data-project-index]");
//         if (!trigger) return;

//         const list = window.projectModalData;
//         if (!Array.isArray(list)) return;

//         const index = Number(trigger.dataset.projectIndex);
//         if (!Number.isInteger(index) || !list[index]) return;

//         event.preventDefault();
//         openProject(list, index);
//     });

//     updateScrollState();
// })();





// /*
//   Add this data in script10.js BEFORE the modal controller,
//   or adapt your existing project array to the same field names.
// */

// window.projectModalData = [
//     {
//         title: "Enterprise VLAN & Inter-VLAN Routing",
//         category: "NETWORK ENGINEERING",
//         status: "LAB PROJECT",
//         description:
//             "A segmented office network built to study VLAN isolation, trunking, inter-VLAN routing, and connectivity verification.",

//         image: "assets/images/vlan-topology.png",
//         imageAlt: "Enterprise VLAN topology preview",
//         imageCaption: "Office network topology — replace with your actual screenshot",

//         deviceCount: "Routers & switches",
//         networkType: "VLAN / Routing",
//         duration: "Packet Tracer lab",

//         implementation:
//             "Designed the network segmentation, assigned IP subnets, configured VLAN membership and trunks, and implemented routing between permitted networks.",

//         features: [
//             "VLAN segmentation and access-port assignment",
//             "802.1Q trunk configuration",
//             "Inter-VLAN routing",
//             "Subnet allocation and gateway configuration"
//         ],

//         verification:
//             "Document the actual connectivity and configuration checks completed in your lab.",

//         tests: [
//             "VLAN and trunk verification",
//             "Gateway reachability tests",
//             "Inter-VLAN connectivity checks"
//         ],

//         specs: {
//             "Environment": "Cisco Packet Tracer",
//             "Network": "Replace with actual subnets",
//             "Segmentation": "Replace with actual VLAN IDs",
//             "Routing": "Replace with actual routing method"
//         },

//         tags: [
//             "Cisco IOS",
//             "VLANs",
//             "802.1Q",
//             "Inter-VLAN Routing",
//             "Subnetting",
//             "Packet Tracer"
//         ],

//         // Use real, direct URLs for this specific project.
//         github: "",
//         pkt: "",
//         readme: "",
//         liveDemo: ""
//     }
// ];








// /* =========================================
//    9. PROJECT FILTERING
//    ========================================= */

// const projectRows = $$(".project-row");
// const filterButtons = $$(".filter-button");
// const projectCount = $("#projectCount");

// function applyProjectFilter(filter) {
//   let visibleCount = 0;

//   filterButtons.forEach((button) => {
//     const active = button.dataset.filter === filter;

//     button.classList.toggle("active", active);
//     button.setAttribute("aria-pressed", String(active));
//   });

//   projectRows.forEach((row) => {
//     const matches =
//       filter === "all" || row.dataset.category === filter;

//     row.hidden = !matches;

//     if (matches) visibleCount += 1;
//   });

//   if (projectCount) {
//     projectCount.textContent =
//       `${String(visibleCount).padStart(2, "0")} PROJECTS`;
//   }
// }

// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     applyProjectFilter(button.dataset.filter);
//   });
// });

// applyProjectFilter("all");

// /* =========================================
//    10. RESPONSIVE PROJECT MODAL
//    Uses the native HTML dialog element.
//    Supports row click, Enter, Space, Escape,
//    close button, and outside-click closing.
//    ========================================= */

// const projectModal = $("#projectModal");
// const modalClose = $("#modalClose");
// const modalDone = $("#modalDone");

// const modalNumber = $("#modalNumber");
// const modalCategory = $("#modalCategory");
// const modalTitle = $("#modalTitle");
// const modalDescription = $("#modalDescription");
// const modalFeatures = $("#modalFeatures");
// const modalTags = $("#modalTags");
// const modalGithub = $("#modalGithub");

// function fillModal(project) {
//   if (!project) return;

//   modalNumber.textContent = project.number;
//   modalCategory.textContent = project.category;
//   modalTitle.textContent = project.title;
//   modalDescription.textContent = project.description;
//   modalGithub.href = project.url;

//   modalFeatures.replaceChildren();
//   modalTags.replaceChildren();

//   project.features.forEach((feature) => {
//     const item = document.createElement("li");
//     const icon = document.createElement("i");

//     icon.className = "fa-solid fa-check";
//     icon.setAttribute("aria-hidden", "true");

//     item.append(icon, document.createTextNode(feature));
//     modalFeatures.appendChild(item);
//   });

//   project.tags.forEach((tag) => {
//     const element = document.createElement("span");
//     element.textContent = tag;
//     modalTags.appendChild(element);
//   });
// }

// function openProjectModal(projectId, triggerElement) {
//   const project = projects[projectId];

//   if (!project || !projectModal) return;

//   fillModal(project);

//   // Use native modal support when available.
//   if (typeof projectModal.showModal === "function") {
//     projectModal.showModal();
//   } else {
//     projectModal.setAttribute("open", "");
//   }

//   document.body.classList.add("modal-open");

//   if (modalClose) {
//     modalClose.focus();
//   }

//   projectModal.dataset.triggerId = triggerElement
//     ? projectId
//     : "";
// }

// function closeProjectModal() {
//   if (!projectModal) return;

//   if (typeof projectModal.close === "function" && projectModal.open) {
//     projectModal.close();
//   } else {
//     projectModal.removeAttribute("open");
//     document.body.classList.remove("modal-open");
//   }
// }

// projectRows.forEach((row) => {
//   const open = () => {
//     openProjectModal(row.dataset.project, row);
//   };

//   row.addEventListener("click", open);

//   row.addEventListener("keydown", (event) => {
//     if (event.key === "Enter" || event.key === " ") {
//       event.preventDefault();
//       open();
//     }
//   });
// });

// if (modalClose) {
//   modalClose.addEventListener("click", closeProjectModal);
// }

// if (modalDone) {
//   modalDone.addEventListener("click", closeProjectModal);
// }

// if (projectModal) {
//   projectModal.addEventListener("close", () => {
//     document.body.classList.remove("modal-open");
//   });

//   // Click on the backdrop closes the dialog, but clicking
//   // the content inside the dialog does not.
//   projectModal.addEventListener("click", (event) => {
//     if (event.target === projectModal) {
//       closeProjectModal();
//     }
//   });

//   projectModal.addEventListener("cancel", () => {
//     document.body.classList.remove("modal-open");
//   });
// }

// /* =========================================
//    11. DEMO TERMINAL
//    Only predefined commands are supported.
//    It does not execute operating-system commands.
//    ========================================= */

// const terminalForm = $("#terminalForm");
// const terminalInput = $("#terminalInput");
// const terminalScreen = $("#terminalScreen");
// const terminalClear = $("#terminalClear");

// const terminalCommands = {
//   help: [
//     "Available commands:",
//     "  help      - show this command list",
//     "  whoami    - show profile information",
//     "  skills    - list technical focus areas",
//     "  projects  - list portfolio projects",
//     "  contact   - show contact options",
//     "  clear     - clear terminal output"
//   ],

//   whoami: [
//     "Raihan Uddin Munna",
//     "Computer Science & Engineering student",
//     "Focus: Networking, infrastructure, security fundamentals"
//   ],

//   skills: [
//     "Networking: IPv4, subnetting, VLANs, STP",
//     "Routing: Static routes, RIP, EIGRP, OSPF (learning/labs)",
//     "Tools: Cisco Packet Tracer, Wireshark (learning)",
//     "Systems: Linux CLI fundamentals",
//     "Development: HTML, CSS, JavaScript, React, Node.js"
//   ],

//   projects: [
//     "01  Enterprise EIGRP Routing Lab",
//     "02  Enterprise Office VLAN Network",
//     "03  VLSM Office Network Design",
//     "04  Linux & Security Fundamentals",
//     "05  Network Engineering Portfolio",
//     "",
//     "Open the Projects section for more details."
//   ],

//   contact: [
//     `GitHub: ${SITE_CONFIG.github}`,
//     `Email: ${SITE_CONFIG.email}`,
//     "Use the Contact section for links and the email form."
//   ]
// };

// function addTerminalLine(text, className = "") {
//   const paragraph = document.createElement("p");

//   if (className) {
//     paragraph.className = className;
//   }

//   paragraph.textContent = text;
//   terminalScreen.appendChild(paragraph);

//   return paragraph;
// }

// function clearTerminal() {
//   if (terminalScreen) {
//     terminalScreen.replaceChildren();
//   }
// }

// function runTerminalCommand(rawCommand) {
//   const command = rawCommand.trim().toLowerCase();

//   if (!command) return;

//   addTerminalLine(
//     `raihan@lab ~ $ ${rawCommand}`,
//     "terminal-command-line"
//   );

//   if (command === "clear") {
//     clearTerminal();
//     return;
//   }

//   const output = terminalCommands[command];

//   if (!output) {
//     addTerminalLine(
//       `Command not found: ${rawCommand}. Type "help" to see available commands.`,
//       "terminal-output"
//     );
//   } else {
//     output.forEach((line) => {
//       addTerminalLine(line, "terminal-output");
//     });
//   }

//   terminalScreen.scrollTop = terminalScreen.scrollHeight;
// }

// if (terminalForm && terminalInput && terminalScreen) {
//   terminalForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const command = terminalInput.value;
//     terminalInput.value = "";

//     runTerminalCommand(command);
//   });
// }

// if (terminalClear && terminalScreen) {
//   terminalClear.addEventListener("click", () => {
//     clearTerminal();
//     addTerminalLine("Terminal cleared. Type help to continue.");
//   });
// }

// /* =========================================
//    12. CONTACT FORM
//    Uses mailto: to open the user's email app.
//    This does not send messages from a server.
//    ========================================= */

// const contactForm = $("#contactForm");
// const formNote = $("#formNote");

// if (contactForm) {
//   contactForm.addEventListener("submit", (event) => {
//     event.preventDefault();

//     if (!contactForm.reportValidity()) {
//       return;
//     }

//     if (
//       !SITE_CONFIG.email ||
//       SITE_CONFIG.email === "your-email@example.com"
//     ) {
//       formNote.textContent =
//         "Setup needed: add your real email address in SITE_CONFIG at the top of script10.js.";
//       return;
//     }

//     const senderName = $("#senderName").value.trim();
//     const senderEmail = $("#senderEmail").value.trim();
//     const senderMessage = $("#senderMessage").value.trim();

//     const subject = `Portfolio enquiry from ${senderName}`;

//     const body = [
//       `Name: ${senderName}`,
//       `Email: ${senderEmail}`,
//       "",
//       "Message:",
//       senderMessage
//     ].join("\n");

//     const mailtoUrl =
//       `mailto:${SITE_CONFIG.email}` +
//       `?subject=${encodeURIComponent(subject)}` +
//       `&body=${encodeURIComponent(body)}`;

//     formNote.textContent =
//       "Opening your email application. Review the message and press Send there.";

//     window.location.href = mailtoUrl;
//   });
// }

// /* =========================================
//    13. FOOTER YEAR
//    ========================================= */

// const yearElement = $("#year");

// if (yearElement) {
//   yearElement.textContent = new Date().getFullYear();
// }

// /* =========================================
//    14. FINAL INITIALIZATION
//    ========================================= */

// document.documentElement.classList.add("js-ready");

// console.info("Raihan Network Lab portfolio initialized.");










































// // document.addEventListener("DOMContentLoaded", () => {
// //     const journey = document.querySelector("#journey");
// //     if (!journey) return;

// //     const cards = journey.querySelectorAll(".journey-item");
// //     const reduceMotion = window.matchMedia(
// //         "(prefers-reduced-motion: reduce)"
// //     ).matches;

// //     cards.forEach((card, index) => {
// //         const content = card.querySelector(".journey-content");

// //         if (!content) return;

// //         // Add light sweep layer.
// //         if (!content.querySelector(".journey-light")) {
// //             const light = document.createElement("span");
// //             light.className = "journey-light";
// //             light.setAttribute("aria-hidden", "true");
// //             content.prepend(light);
// //         }

// //         // Stagger the entrance animation.
// //         if (!reduceMotion) {
// //             card.classList.add("journey-reveal");
// //             card.style.transitionDelay = `${index * 100}ms`;
// //         } else {
// //             card.classList.add("is-visible");
// //         }
// //     });

// //     if (reduceMotion) return;

// //     // Reveal on scroll.
// //     const revealObserver = new IntersectionObserver((entries, observer) => {
// //         entries.forEach(entry => {
// //             if (!entry.isIntersecting) return;

// //             entry.target.classList.add("is-visible");
// //             observer.unobserve(entry.target);
// //         });
// //     }, {
// //         threshold: 0.08,
// //         rootMargin: "0px 0px -20px 0px"
// //     });

// //     cards.forEach(card => revealObserver.observe(card));

// //     // Highlight the card nearest the viewport centre.
// //     const activeObserver = new IntersectionObserver(entries => {
// //         entries.forEach(entry => {
// //             if (!entry.isIntersecting) return;

// //             cards.forEach(card => card.classList.remove("is-current"));
// //             entry.target.classList.add("is-current");
// //         });
// //     }, {
// //         rootMargin: "-40% 0px -40% 0px",
// //         threshold: 0
// //     });

// //     cards.forEach(card => activeObserver.observe(card));
// // });



























// /* ==========================================
//    JOURNEY — SCROLL REVEAL
// ========================================== */

// document.addEventListener("DOMContentLoaded", () => {
//     const journey = document.querySelector("#journey");

//     if (!journey) return;

//     const cards = journey.querySelectorAll(".journey-item");
//     const reduceMotion = window.matchMedia(
//         "(prefers-reduced-motion: reduce)"
//     ).matches;

//     // Respect accessibility preferences.
//     if (reduceMotion || !("IntersectionObserver" in window)) {
//         cards.forEach(card => {
//             card.classList.add("is-visible");
//         });
//         return;
//     }

//     // Prepare staggered entrance.
//     cards.forEach((card, index) => {
//         card.classList.add("journey-reveal");
//         card.style.transitionDelay = `${(index % 2) * 100}ms`;
//     });

//     // Reveal each card when it enters the viewport.
//     const observer = new IntersectionObserver(
//         (entries, currentObserver) => {
//             entries.forEach(entry => {
//                 if (!entry.isIntersecting) return;

//                 entry.target.classList.add("is-visible");
//                 currentObserver.unobserve(entry.target);
//             });
//         },
//         {
//             threshold: 0.08,
//             rootMargin: "0px 0px -25px 0px"
//         }
//     );

//     cards.forEach(card => observer.observe(card));
// });

















// /* =========================================
//    RAIHAN NETWORK LAB
//    File: script.js
//    Complete Portfolio JavaScript
// ========================================= */

// "use strict";

// /* =========================================
//    1. PERSONAL SETTINGS
// ========================================= */

// const SITE_CONFIG = {
//   github: "https://github.com/Raihan-Uddin-Munna",
//   github2: "https://github.com/Raihan-Uddin-Munna?tab=repositories",

//   email: "raihanuddin1289@gmail.com",
//   whatsapp: "https://call.whatsapp.com/voice/tQmAvFk8rbBENqd3PQ9Oq4",
//   linkedin: "https://www.linkedin.com/",

//   resume: "resume.pdf"
// };


// /* =========================================
//    2. ELEMENT HELPERS
// ========================================= */

// const $ = (selector, parent = document) =>
//   parent.querySelector(selector);

// const $$ = (selector, parent = document) =>
//   Array.from(parent.querySelectorAll(selector));


// /* =========================================
//    3. APPLY PERSONAL LINKS
// ========================================= */

// function setupPersonalLinks() {
//   const githubLinks = $$('a[href*="github.com/Raihan-Uddin-Munna"]');

//   githubLinks.forEach((link) => {
//     // Keep project-specific repository links unchanged.
//     const currentHref = link.getAttribute("href") || "";

//     if (
//       currentHref === "#" ||
//       currentHref === SITE_CONFIG.github ||
//       currentHref === SITE_CONFIG.github2
//     ) {
//       link.href = SITE_CONFIG.github;
//     }
//   });

//   const emailLink = $("#emailLink");
//   const emailDisplay = $("#emailDisplay");
//   const footerEmail = $("#footerEmail");
//   const whatsappLink = $("#whatsappLink");
//   const linkedinLink = $("#linkedinLink");
//   const footerLinkedIn = $("#footerLinkedIn");
//   const resumeButton = $(".resume-button");

//   const emailIsValid =
//     SITE_CONFIG.email &&
//     SITE_CONFIG.email !== "your-email@example.com";

//   if (emailLink) {
//     emailLink.href = emailIsValid
//       ? `mailto:${SITE_CONFIG.email}`
//       : "#contact";
//   }

//   if (emailDisplay) {
//     emailDisplay.textContent = SITE_CONFIG.email;
//   }

//   if (footerEmail) {
//     footerEmail.href = emailIsValid
//       ? `mailto:${SITE_CONFIG.email}`
//       : "#contact";
//   }

//   if (whatsappLink) {
//     whatsappLink.href = SITE_CONFIG.whatsapp || "#contact";
//   }

//   if (linkedinLink) {
//     linkedinLink.href = SITE_CONFIG.linkedin;
//   }

//   if (footerLinkedIn) {
//     footerLinkedIn.href = SITE_CONFIG.linkedin;
//   }

//   if (resumeButton) {
//     resumeButton.href = SITE_CONFIG.resume;
//   }
// }

// setupPersonalLinks();


// /* =========================================
//    4. PROFILE PHOTO FALLBACK
// ========================================= */

// const profileImage = $("#profileImage");
// const portraitPlaceholder = $("#portraitPlaceholder");

// if (profileImage && portraitPlaceholder) {
//   function showPortraitFallback() {
//     profileImage.style.display = "none";
//     portraitPlaceholder.style.display = "flex";
//   }

//   profileImage.addEventListener("error", showPortraitFallback);

//   if (profileImage.complete && profileImage.naturalWidth === 0) {
//     showPortraitFallback();
//   }
// }


// /* =========================================
//    5. MOBILE NAVIGATION
// ========================================= */

// const menuToggle = $("#menuToggle");
// const navLinks = $("#navLinks");

// function closeMobileMenu() {
//   if (!menuToggle || !navLinks) return;

//   navLinks.classList.remove("open");

//   menuToggle.setAttribute("aria-expanded", "false");
//   menuToggle.setAttribute("aria-label", "Open navigation");
// }

// function toggleMobileMenu() {
//   if (!menuToggle || !navLinks) return;

//   const shouldOpen = !navLinks.classList.contains("open");

//   navLinks.classList.toggle("open", shouldOpen);

//   menuToggle.setAttribute("aria-expanded", String(shouldOpen));
//   menuToggle.setAttribute(
//     "aria-label",
//     shouldOpen ? "Close navigation" : "Open navigation"
//   );
// }

// if (menuToggle && navLinks) {
//   menuToggle.addEventListener("click", toggleMobileMenu);

//   $$(".nav-links a").forEach((link) => {
//     link.addEventListener("click", closeMobileMenu);
//   });

//   document.addEventListener("click", (event) => {
//     const clickedInsideNav =
//       navLinks.contains(event.target) ||
//       menuToggle.contains(event.target);

//     if (!clickedInsideNav) {
//       closeMobileMenu();
//     }
//   });

//   document.addEventListener("keydown", (event) => {
//     if (event.key === "Escape") {
//       closeMobileMenu();
//     }
//   });

//   window.addEventListener("resize", () => {
//     if (window.innerWidth > 820) {
//       closeMobileMenu();
//     }
//   });
// }


// /* =========================================
//    6. SCROLL PROGRESS + ACTIVE NAVIGATION
// ========================================= */

// const scrollProgress = $("#scrollProgress");
// const mainSections = $$("main section[id]");
// const navAnchors = $$(".nav-links a");
// const dotLinks = $$(".dot-link");

// let scrollUpdatePending = false;

// function updateScrollUI() {
//   const scrollableHeight =
//     document.documentElement.scrollHeight - window.innerHeight;

//   const percentage =
//     scrollableHeight > 0
//       ? (window.scrollY / scrollableHeight) * 100
//       : 0;

//   if (scrollProgress) {
//     scrollProgress.style.width =
//       `${Math.min(100, Math.max(0, percentage))}%`;
//   }

//   scrollUpdatePending = false;
// }

// window.addEventListener(
//   "scroll",
//   () => {
//     if (scrollUpdatePending) return;

//     scrollUpdatePending = true;
//     window.requestAnimationFrame(updateScrollUI);
//   },
//   { passive: true }
// );

// window.addEventListener("resize", updateScrollUI);

// updateScrollUI();

// function setActiveSection(sectionId) {
//   navAnchors.forEach((link) => {
//     const active =
//       link.getAttribute("href") === `#${sectionId}`;

//     link.classList.toggle("active", active);
//   });

//   dotLinks.forEach((link) => {
//     const active =
//       link.getAttribute("href") === `#${sectionId}`;

//     link.classList.toggle("active", active);

//     if (active) {
//       link.setAttribute("aria-current", "location");
//     } else {
//       link.removeAttribute("aria-current");
//     }
//   });
// }

// if ("IntersectionObserver" in window) {
//   const sectionObserver = new IntersectionObserver(
//     (entries) => {
//       const visibleSections = entries
//         .filter((entry) => entry.isIntersecting)
//         .sort(
//           (a, b) => b.intersectionRatio - a.intersectionRatio
//         );

//       if (visibleSections.length > 0) {
//         setActiveSection(visibleSections[0].target.id);
//       }
//     },
//     {
//       rootMargin: "-20% 0px -55% 0px",
//       threshold: [0, 0.1, 0.25, 0.5]
//     }
//   );

//   mainSections.forEach((section) => {
//     sectionObserver.observe(section);
//   });
// }


// /* =========================================
//    7. SCROLL REVEAL ANIMATIONS
// ========================================= */

// const revealElements = $$(".reveal");

// const reduceMotion = window.matchMedia(
//   "(prefers-reduced-motion: reduce)"
// ).matches;

// if ("IntersectionObserver" in window && !reduceMotion) {
//   const revealObserver = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (!entry.isIntersecting) return;

//         entry.target.classList.add("visible");
//         observer.unobserve(entry.target);
//       });
//     },
//     {
//       threshold: 0.08,
//       rootMargin: "0px 0px -25px 0px"
//     }
//   );

//   revealElements.forEach((element) => {
//     revealObserver.observe(element);
//   });
// } else {
//   revealElements.forEach((element) => {
//     element.classList.add("visible");
//   });
// }


// /* =========================================
//    8. PROJECT DATA
//    Keep project IDs aligned with HTML:
//    data-project="eigrp"
//    data-project="vlan"
//    data-project="vlsm"
//    data-project="linux"
//    data-project="portfolio"
// ========================================= */

// const projectData = {
//   eigrp: {
//     number: "01",
//     title: "Enterprise EIGRP Routing Lab",
//     category: "NETWORK ENGINEERING",
//     status: "LAB PROJECT",

//     description:
//       "A multi-router Cisco routing lab focused on EIGRP neighbour relationships, route selection, routing-table analysis, and connectivity troubleshooting.",

//     image: "./Image/Profile.jpeg",
//     imageAlt: "Enterprise EIGRP routing topology",
//     imageCaption: "EIGRP multi-router topology",

//     deviceCount: "Multiple routers",
//     networkType: "Dynamic routing",
//     duration: "Cisco Packet Tracer",

//     implementation:
//       "The lab focuses on configuring and examining EIGRP across multiple routers. The documentation can be used to present the topology, addressing plan, routing configuration, and verification results.",

//     features: [
//       "EIGRP routing configuration",
//       "Neighbour relationship verification",
//       "Routing-table inspection",
//       "Route selection and metric analysis",
//       "Connectivity troubleshooting"
//     ],

//     verification:
//       "Use the verification section to document the actual command outputs and connectivity results from the completed lab.",

//     tests: [
//       "show ip eigrp neighbors",
//       "show ip route",
//       "show ip protocols",
//       "End-to-end connectivity tests"
//     ],

//     specs: {
//       "Environment": "Cisco Packet Tracer",
//       "Routing": "EIGRP",
//       "Devices": "Multiple Cisco routers",
//       "Focus": "Dynamic routing and troubleshooting"
//     },

//     tags: [
//       "EIGRP",
//       "Cisco IOS",
//       "Dynamic Routing",
//       "Routing Table",
//       "Packet Tracer"
//     ],

//     github: "",
//     pkt: "",
//     readme: "",
//     liveDemo: ""
//   },


//   vlan: {
//     number: "02",
//     title: "Enterprise Office VLAN Network",
//     category: "SWITCHING & NETWORK DESIGN",
//     status: "LAB PROJECT",

//     description:
//       "A department-based office network design using VLAN segmentation, trunk links, inter-VLAN routing, and network isolation concepts.",

//     image: "",
//     imageAlt: "Enterprise office VLAN topology",
//     imageCaption: "Department-based VLAN network topology",

//     deviceCount: "Routers & switches",
//     networkType: "VLAN / Inter-VLAN",
//     duration: "Cisco Packet Tracer",

//     implementation:
//       "The design separates office departments into individual VLANs. It covers access-port assignment, trunk configuration, inter-VLAN communication, management separation, and guest-network isolation.",

//     features: [
//       "Department-based VLAN segmentation",
//       "Access-port configuration",
//       "802.1Q trunk configuration",
//       "Inter-VLAN routing",
//       "Guest network isolation",
//       "Network management separation"
//     ],

//     verification:
//       "Verify VLAN membership, trunk operation, gateway reachability, and permitted or restricted communication between departments.",

//     tests: [
//       "show vlan brief",
//       "show interfaces trunk",
//       "show ip interface brief",
//       "Inter-VLAN connectivity tests",
//       "Guest network isolation tests"
//     ],

//     specs: {
//       "Environment": "Cisco Packet Tracer",
//       "VLANs": "10, 20, 30, 40, 50, 60, 70, 80, 90",
//       "Additional VLANs": "110 Voice, 999 Native / Blackhole",
//       "Network Design": "Department-based segmentation",
//       "Routing": "Inter-VLAN routing"
//     },

//     tags: [
//       "VLAN",
//       "802.1Q",
//       "Inter-VLAN Routing",
//       "STP",
//       "Cisco IOS",
//       "Packet Tracer"
//     ],

//     github: "",
//     pkt: "",
//     readme: "",
//     liveDemo: ""
//   },


//   vlsm: {
//     number: "03",
//     title: "VLSM Office Network Design",
//     category: "IP ADDRESSING & NETWORK DESIGN",
//     status: "DOCUMENTED PROJECT",

//     description:
//       "An IPv4 subnet-planning project that uses Variable Length Subnet Masking to allocate address space according to the host requirements of different office departments.",

//     image: "",
//     imageAlt: "VLSM office network topology",
//     imageCaption: "Office network design and subnet allocation",

//     deviceCount: "Office network devices",
//     networkType: "IPv4 / VLSM",
//     duration: "Cisco Packet Tracer",

//     implementation:
//       "The project uses the 192.168.10.0/24 network and allocates address space according to the requirements of IT, HR, Accounts, and Management departments.",

//     features: [
//       "Host requirement analysis",
//       "VLSM subnet calculation",
//       "Non-overlapping subnet allocation",
//       "Network and broadcast address identification",
//       "Default gateway planning",
//       "Addressing documentation"
//     ],

//     verification:
//       "Check the configured IP addresses, subnet masks, default gateways, and connectivity between the required network segments.",

//     tests: [
//       "IP addressing verification",
//       "Subnet mask verification",
//       "Gateway reachability",
//       "End-to-end ping tests"
//     ],

//     specs: {
//       "Base Network": "192.168.10.0/24",
//       "IT Department": "50 Hosts",
//       "HR Department": "25 Hosts",
//       "Accounts": "12 Hosts",
//       "Management": "5 Hosts",
//       "Method": "Variable Length Subnet Masking"
//     },

//     tags: [
//       "IPv4",
//       "VLSM",
//       "Subnetting",
//       "CIDR",
//       "Cisco Packet Tracer",
//       "Network Design"
//     ],

//     github:
//       "https://github.com/Raihan-Uddin-Munna/vlsm-office-network-cisco",

//     pkt: "",
//     readme:
//       "https://github.com/Raihan-Uddin-Munna/vlsm-office-network-cisco",
//     liveDemo: ""
//   },


//   linux: {
//     number: "04",
//     title: "Linux & Security Fundamentals",
//     category: "SYSTEMS & SECURITY",
//     status: "LEARNING PROJECT",

//     description:
//       "A developing Linux practice project covering command-line operations, file permissions, user management, process inspection, and basic networking utilities.",

//     image: "",
//     imageAlt: "Linux command-line practice",
//     imageCaption: "Linux terminal and system administration practice",

//     deviceCount: "Linux environment",
//     networkType: "Linux / CLI",
//     duration: "Ongoing learning",

//     implementation:
//       "The project is intended to document practical Linux commands and explain how they are used for basic system administration and security-related tasks.",

//     features: [
//       "Command-line navigation",
//       "File and directory management",
//       "User and group management",
//       "File permissions",
//       "Process inspection",
//       "Basic networking commands"
//     ],

//     verification:
//       "Document command usage, expected output, and the practical purpose of each command in the lab environment.",

//     tests: [
//       "User and group inspection",
//       "Permission verification",
//       "Process inspection",
//       "Network configuration inspection"
//     ],

//     specs: {
//       "Environment": "Linux",
//       "Interface": "Command Line",
//       "Focus": "System administration",
//       "Security": "Fundamental concepts"
//     },

//     tags: [
//       "Linux",
//       "Bash",
//       "CLI",
//       "Permissions",
//       "Networking",
//       "Security Fundamentals"
//     ],

//     github: "",
//     pkt: "",
//     readme: "",
//     liveDemo: ""
//   },


//   portfolio: {
//     number: "05",
//     title: "Network Engineering Portfolio",
//     category: "WEB DEVELOPMENT",
//     status: "PERSONAL PROJECT",

//     description:
//       "A personal portfolio designed to present networking knowledge, technical projects, practical lab work, training, and professional development.",

//     image: "",
//     imageAlt: "Network engineering portfolio website",
//     imageCaption: "RAIHAN NETWORK LAB portfolio",

//     deviceCount: "Responsive website",
//     networkType: "Frontend development",
//     duration: "Personal project",

//     implementation:
//       "The website uses a responsive layout and custom interface components to organise profile information, technical skills, project documentation, and contact details.",

//     features: [
//       "Responsive page layout",
//       "Mobile navigation",
//       "Project filtering",
//       "Project details modal",
//       "Interactive demonstration terminal",
//       "Contact section"
//     ],

//     verification:
//       "Test the layout and interactions across desktop, tablet, and mobile screen sizes.",

//     tests: [
//       "Responsive layout checks",
//       "Navigation and anchor testing",
//       "Project filter testing",
//       "Modal open and close testing",
//       "Form validation"
//     ],

//     specs: {
//       "Structure": "HTML",
//       "Styling": "CSS",
//       "Interaction": "JavaScript",
//       "Design": "Responsive interface"
//     },

//     tags: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Responsive Design",
//       "Frontend"
//     ],

//     github: "https://github.com/Raihan-Uddin-Munna",
//     pkt: "",
//     readme: "",
//     liveDemo: ""
//   }
// };


// /* =========================================
//    9. PROJECT FILTERING
// ========================================= */

// const projectRows = $$(".project-card");
// const filterButtons = $$(".filter-button");
// const projectCount = $("#projectCount");

// function applyProjectFilter(filter = "all") {
//   let visibleCount = 0;

//   filterButtons.forEach((button) => {
//     const active = button.dataset.filter === filter;

//     button.classList.toggle("active", active);
//     button.setAttribute("aria-pressed", String(active));
//   });

//   projectRows.forEach((row) => {
//     const category = row.dataset.category || "all";

//     const matches =
//       filter === "all" || category === filter;

//     row.hidden = !matches;

//     if (matches) {
//       visibleCount += 1;
//     }
//   });

//   if (projectCount) {
//     projectCount.textContent =
//       `${String(visibleCount).padStart(2, "0")} PROJECTS`;
//   }
// }

// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     applyProjectFilter(button.dataset.filter || "all");
//   });
// });

// applyProjectFilter("all");


// /* =========================================
//    10. PROJECT MODAL CONTROLLER
//    Uses the existing HTML modal structure.
// ========================================= */

// (() => {
//   const modal = $("#projectModal");

//   if (!modal) {
//     console.warn("Project modal element was not found.");
//     return;
//   }

//   const get = (id) => document.getElementById(id);

//   const el = {
//     number: get("modalNumber"),
//     category: get("modalCategory"),
//     status: get("modalStatus"),
//     title: get("modalTitle"),
//     description: get("modalDescription"),
//     facts: get("modalQuickFacts"),

//     image: get("modalImage"),
//     imageButton: get("modalImageButton"),
//     imageCaption: get("modalImageCaption"),

//     implementation: get("modalImplementation"),
//     features: get("modalFeatures"),

//     verification: get("modalVerification"),
//     tests: get("modalTests"),

//     specs: get("modalSpecs"),
//     tags: get("modalTags"),
//     resources: get("modalResources"),

//     scroll: get("modalScroll"),
//     progress: get("modalProgressBar"),
//     backTop: get("modalBackTop"),

//     previous: get("modalPrevious"),
//     next: get("modalNext"),

//     close: get("modalClose"),
//     back: get("modalBack"),
//     footerBack: get("modalFooterBack")
//   };

//   const lightbox = get("modalLightbox");
//   const lightboxImage = get("modalLightboxImage");
//   const lightboxCaption = get("modalLightboxCaption");

//   const projectKeys = Object.keys(projectData);

//   let activeProjectKey = null;
//   let previousFocus = null;
//   let previousBodyOverflow = "";

//   let scrollFrame = 0;

//   const motionPreference = window.matchMedia(
//     "(prefers-reduced-motion: reduce)"
//   );


//   /* -----------------------------------------
//      Helper functions
//   ----------------------------------------- */

//   function setText(element, value) {
//     if (!element) return;

//     element.textContent =
//       value == null ? "" : String(value);
//   }

//   function clearElement(element) {
//     if (!element) return;

//     element.replaceChildren();
//   }

//   function createIcon(className) {
//     const icon = document.createElement("i");

//     icon.className = className;
//     icon.setAttribute("aria-hidden", "true");

//     return icon;
//   }

//   function safeUrl(value) {
//     if (typeof value !== "string" || !value.trim()) {
//       return "";
//     }

//     try {
//       const url = new URL(value, window.location.href);

//       if (!["http:", "https:"].includes(url.protocol)) {
//         return "";
//       }

//       return url.href;
//     } catch {
//       return "";
//     }
//   }

//   function showSection(id, visible) {
//     const section = get(id);

//     if (section) {
//       section.hidden = !visible;
//     }
//   }

//   function setStatus(value) {
//     if (!el.status) return;

//     const dot = document.createElement("span");

//     dot.className = "modal-status-dot";
//     dot.setAttribute("aria-hidden", "true");

//     // Keep the existing status dot in the HTML.
//     el.status.replaceChildren(
//       dot,
//       document.createTextNode(` ${value || "LAB PROJECT"}`)
//     );

//     /* -----------------------------------------
//        CASE STUDY TAB CONTROLLER
//     ----------------------------------------- */

//     const caseTabs = $$(".case-tab", modal);
//     const caseContent = $("#caseContent", modal);

//     const tabNames = [
//       "overview",
//       "topology",
//       "configuration",
//       "verification",
//       "troubleshooting",
//       "evidence"
//     ];

//     function createCaseHeading(text) {
//       const heading = document.createElement("h3");
//       heading.textContent = text;
//       return heading;
//     }

//     function createCaseParagraph(text) {
//       const paragraph = document.createElement("p");
//       paragraph.textContent = text || "";
//       return paragraph;
//     }

//     function createCaseSection(title, description) {
//       const section = document.createElement("section");
//       section.className = "case-content-section";

//       section.append(createCaseHeading(title));

//       if (description) {
//         section.append(createCaseParagraph(description));
//       }

//       return section;
//     }

//     function createCaseList(items) {
//       const list = document.createElement("ul");
//       list.className = "case-content-list";

//       (items || []).forEach((value) => {
//         const item = document.createElement("li");
//         item.textContent = value;
//         list.append(item);
//       });

//       return list;
//     }

//     function createCaseSpecifications(specs) {
//       const list = document.createElement("dl");
//       list.className = "case-specifications";

//       Object.entries(specs || {}).forEach(([key, value]) => {
//         const wrapper = document.createElement("div");

//         const term = document.createElement("dt");
//         term.textContent = key;

//         const detail = document.createElement("dd");
//         detail.textContent = Array.isArray(value)
//           ? value.join(", ")
//           : String(value);

//         wrapper.append(term, detail);
//         list.append(wrapper);
//       });

//       return list;
//     }

//     function createCaseLink(label, url) {
//       const href = safeUrl(url);

//       if (!href) return null;

//       const link = document.createElement("a");
//       link.href = href;
//       link.target = "_blank";
//       link.rel = "noopener noreferrer";
//       link.textContent = label;

//       return link;
//     }

//     function renderCaseTab(tabName) {
//       const project = projectData[activeProjectKey];

//       if (!project || !caseContent) return;

//       caseContent.replaceChildren();

//       switch (tabName) {

//         /* ---------------------------------
//            01. OVERVIEW
//         --------------------------------- */

//         case "overview": {
//           const section = createCaseSection(
//             "Project Overview",
//             project.description
//           );

//           section.append(
//             createCaseParagraph(project.implementation)
//           );

//           caseContent.append(section);

//           const features = createCaseSection(
//             "Key Features",
//             "The main technical areas covered by this project."
//           );

//           features.append(
//             createCaseList(project.features)
//           );

//           caseContent.append(features);

//           const specifications = createCaseSection(
//             "Project Specifications",
//             "Environment and technical scope."
//           );

//           specifications.append(
//             createCaseSpecifications(project.specs)
//           );

//           caseContent.append(specifications);

//           break;
//         }


//         /* ---------------------------------
//            02. TOPOLOGY
//         --------------------------------- */

//         case "topology": {
//           const section = createCaseSection(
//             "Network Topology",
//             "The topology and device arrangement for this project."
//           );

//           section.append(
//             createCaseSpecifications({
//               "Environment": project.duration,
//               "Device Count": project.deviceCount,
//               "Network Type": project.networkType
//             })
//           );

//           section.append(
//             createCaseParagraph(
//               "Add the actual topology diagram, device connections, " +
//               "IP addressing plan and network layout to this project " +
//               "when the lab documentation is ready."
//             )
//           );

//           caseContent.append(section);

//           break;
//         }


//         /* ---------------------------------
//            03. CONFIGURATION
//         --------------------------------- */

//         case "configuration": {
//           const section = createCaseSection(
//             "Configuration & Implementation",
//             project.implementation
//           );

//           section.append(
//             createCaseHeading("Implementation Areas")
//           );

//           section.append(
//             createCaseList(project.features)
//           );

//           caseContent.append(section);

//           const technologies = createCaseSection(
//             "Technologies Used",
//             "Tools and technologies associated with this project."
//           );

//           technologies.append(
//             createCaseList(project.tags)
//           );

//           caseContent.append(technologies);

//           break;
//         }


//         /* ---------------------------------
//            04. VERIFICATION
//         --------------------------------- */

//         case "verification": {
//           const section = createCaseSection(
//             "Verification Results",
//             project.verification
//           );

//           section.append(
//             createCaseHeading("Verification Commands & Tests")
//           );

//           section.append(
//             createCaseList(project.tests)
//           );

//           caseContent.append(section);

//           break;
//         }


//         /* ---------------------------------
//            05. TROUBLESHOOTING
//         --------------------------------- */

//         case "troubleshooting": {
//           const section = createCaseSection(
//             "Troubleshooting Notes",
//             project.troubleshooting ||
//             "Project-specific troubleshooting notes have not been added yet."
//           );

//           section.append(
//             createCaseParagraph(
//               "Document the issue, the commands used to investigate it, " +
//               "the root cause, the corrective action and the final verification."
//             )
//           );

//           caseContent.append(section);

//           break;
//         }


//         /* ---------------------------------
//            06. EVIDENCE
//         --------------------------------- */

//         case "evidence": {
//           const section = createCaseSection(
//             "Project Evidence",
//             "Repository links and supporting project documentation."
//           );

//           const links = [
//             ["GitHub Repository", project.github],
//             ["Project Documentation", project.readme],
//             ["Live Demonstration", project.liveDemo],
//             ["Packet Tracer File", project.pkt]
//           ];

//           let linkCount = 0;

//           links.forEach(([label, url]) => {
//             const link = createCaseLink(label, url);

//             if (link) {
//               section.append(link);
//               linkCount++;
//             }
//           });

//           if (linkCount === 0) {
//             section.append(
//               createCaseParagraph(
//                 "No project evidence or external resources have been added yet."
//               )
//             );
//           }

//           caseContent.append(section);

//           break;
//         }
//       }
//     }


//     /* -----------------------------------------
//        Tab activation
//     ----------------------------------------- */

//     function activateCaseTab(tabName) {
//       if (!tabNames.includes(tabName)) return;

//       caseTabs.forEach((tab) => {
//         const isActive = tab.dataset.tab === tabName;

//         tab.classList.toggle("active", isActive);
//         tab.setAttribute("aria-selected", String(isActive));
//         tab.setAttribute("tabindex", isActive ? "0" : "-1");
//       });

//       renderCaseTab(tabName);
//     }


//     /* -----------------------------------------
//        Tab click events
//     ----------------------------------------- */

//     caseTabs.forEach((tab, index) => {

//       tab.addEventListener("click", () => {
//         activateCaseTab(tab.dataset.tab);
//       });

//       tab.addEventListener("keydown", (event) => {
//         let nextIndex = index;

//         if (event.key === "ArrowRight") {
//           nextIndex = (index + 1) % caseTabs.length;
//         } else if (event.key === "ArrowLeft") {
//           nextIndex = (index - 1 + caseTabs.length) % caseTabs.length;
//         } else if (event.key === "Home") {
//           nextIndex = 0;
//         } else if (event.key === "End") {
//           nextIndex = caseTabs.length - 1;
//         } else {
//           return;
//         }

//         event.preventDefault();

//         const nextTab = caseTabs[nextIndex];

//         activateCaseTab(nextTab.dataset.tab);
//         nextTab.focus();
//       });

//     });

//   }


//   /* -----------------------------------------
//      Modal content builders
//   ----------------------------------------- */

//   function addFact(iconClass, value) {
//     if (!el.facts || !value) return;

//     const fact = document.createElement("span");

//     fact.className = "modal-fact";

//     fact.append(createIcon(iconClass));
//     fact.append(document.createTextNode(String(value)));

//     el.facts.append(fact);
//   }

//   function addListItem(container, value, iconClass) {
//     if (!container || !value) return;

//     const item = document.createElement("li");

//     item.append(
//       createIcon(iconClass || "fa-solid fa-check")
//     );

//     item.append(
//       document.createTextNode(String(value))
//     );

//     container.append(item);
//   }

//   function addSpecification(label, value) {
//     if (!el.specs || value == null || value === "") {
//       return;
//     }

//     const row = document.createElement("div");
//     row.className = "modal-spec-row";

//     const term = document.createElement("dt");
//     term.textContent = label;

//     const description = document.createElement("dd");

//     description.textContent = Array.isArray(value)
//       ? value.join(", ")
//       : String(value);

//     row.append(term, description);
//     el.specs.append(row);
//   }

//   function addTag(value) {
//     if (!el.tags || !value) return;

//     const tag = document.createElement("span");

//     tag.textContent = String(value);

//     el.tags.append(tag);
//   }

//   function addResource(label, detail, url, iconClass, download = false) {
//     if (!el.resources) return;

//     const href = safeUrl(url);

//     const link = document.createElement("a");
//     link.className = "modal-resource";

//     const icon = createIcon(iconClass);

//     const copy = document.createElement("span");
//     copy.className = "modal-resource-copy";

//     const title = document.createElement("strong");
//     title.textContent = label;

//     const subtitle = document.createElement("small");
//     subtitle.textContent = detail;

//     copy.append(title, subtitle);

//     link.append(icon, copy);

//     if (!href) {
//       link.classList.add("is-disabled");
//       link.setAttribute("aria-disabled", "true");

//       link.addEventListener("click", (event) => {
//         event.preventDefault();
//       });
//     } else {
//       link.href = href;

//       if (download) {
//         link.download = "";
//       } else {
//         link.target = "_blank";
//         link.rel = "noopener noreferrer";
//       }

//       link.append(
//         createIcon(
//           download
//             ? "fa-solid fa-download"
//             : "fa-solid fa-arrow-up-right-from-square"
//         )
//       );
//     }

//     el.resources.append(link);
//   }


//   /* -----------------------------------------
//      Render selected project
//   ----------------------------------------- */

//   function renderProject(project, projectKey) {
//     if (!project) return;

//     activeProjectKey = projectKey;

//     setText(el.number, project.number);
//     setText(el.category, project.category);
//     setText(el.title, project.title);
//     setText(el.description, project.description);

//     setStatus(project.status);

//     setText(
//       el.imageCaption,
//       project.imageCaption || "Project overview"
//     );

//     setText(
//       el.implementation,
//       project.implementation
//     );

//     setText(
//       el.verification,
//       project.verification
//     );


//     // Quick facts.

//     clearElement(el.facts);

//     addFact(
//       "fa-solid fa-layer-group",
//       project.deviceCount
//     );

//     addFact(
//       "fa-solid fa-network-wired",
//       project.networkType
//     );

//     addFact(
//       "fa-regular fa-clock",
//       project.duration
//     );


//     // Project preview image.

//     const imageUrl = safeUrl(project.image);

//     if (imageUrl && el.image && el.imageButton) {
//       el.image.src = imageUrl;

//       el.image.alt =
//         project.imageAlt || project.title || "Project preview";

//       el.imageButton.hidden = false;

//       showSection("modalVisualSection", true);
//     } else {
//       if (el.image) {
//         el.image.removeAttribute("src");
//         el.image.alt = "";
//       }

//       if (el.imageButton) {
//         el.imageButton.hidden = true;
//       }

//       showSection("modalVisualSection", false);
//     }


//     // Implementation features.

//     clearElement(el.features);

//     (project.features || []).forEach((feature) => {
//       addListItem(
//         el.features,
//         feature,
//         "fa-solid fa-check"
//       );
//     });

//     showSection(
//       "modalImplementationSection",
//       Boolean(
//         project.implementation ||
//         (project.features || []).length
//       )
//     );


//     // Testing and verification.

//     clearElement(el.tests);

//     (project.tests || []).forEach((test) => {
//       addListItem(
//         el.tests,
//         test,
//         "fa-solid fa-circle-check"
//       );
//     });

//     showSection(
//       "modalVerificationSection",
//       Boolean(
//         project.verification ||
//         (project.tests || []).length
//       )
//     );


//     // Technical specifications.

//     clearElement(el.specs);

//     const specifications = project.specs || {};

//     Object.entries(specifications).forEach(([label, value]) => {
//       addSpecification(label, value);
//     });

//     showSection(
//       "modalSpecsSection",
//       Object.keys(specifications).length > 0
//     );


//     // Technology tags.

//     clearElement(el.tags);

//     (project.tags || []).forEach(addTag);

//     showSection(
//       "modalTechSection",
//       Boolean((project.tags || []).length)
//     );


//     // Project resources.

//     clearElement(el.resources);

//     if (project.github) {
//       addResource(
//         "GitHub repository",
//         "Source files and project documentation",
//         project.github,
//         "fa-brands fa-github"
//       );
//     }

//     if (project.pkt) {
//       addResource(
//         "Download Packet Tracer file",
//         "Cisco Packet Tracer .pkt file",
//         project.pkt,
//         "fa-solid fa-file-arrow-down",
//         true
//       );
//     }

//     if (project.readme) {
//       addResource(
//         "Project documentation",
//         "README and technical notes",
//         project.readme,
//         "fa-solid fa-file-lines"
//       );
//     }

//     if (project.liveDemo) {
//       addResource(
//         "Live demonstration",
//         "Open the deployed project",
//         project.liveDemo,
//         "fa-solid fa-arrow-up-right-from-square"
//       );
//     }

//     showSection(
//       "modalResourcesSection",
//       Boolean(
//         project.github ||
//         project.pkt ||
//         project.readme ||
//         project.liveDemo
//       )
//     );


//     // Previous and next navigation.

//     const currentIndex = projectKeys.indexOf(projectKey);

//     if (el.previous) {
//       el.previous.disabled = currentIndex <= 0;
//     }

//     if (el.next) {
//       el.next.disabled =
//         currentIndex < 0 ||
//         currentIndex >= projectKeys.length - 1;
//     }


//     // Reset modal scroll.

//     if (el.scroll) {
//       el.scroll.scrollTop = 0;
//     }

//     // Open the Overview tab whenever a project opens.
//     activateCaseTab("overview");

//     updateModalScroll();


//     /* -----------------------------------------
//        Modal scroll progress
//     ----------------------------------------- */

//     function updateModalScroll() {
//       if (!el.scroll) return;

//       const currentScroll = el.scroll.scrollTop;

//       const maximumScroll =
//         el.scroll.scrollHeight - el.scroll.clientHeight;

//       const percentage =
//         maximumScroll > 0
//           ? Math.min(
//             100,
//             (currentScroll / maximumScroll) * 100
//           )
//           : 0;

//       modal.classList.toggle(
//         "is-scrolled",
//         currentScroll > 30
//       );

//       if (el.progress) {
//         el.progress.style.width = `${percentage}%`;
//       }

//       if (el.backTop) {
//         el.backTop.classList.toggle(
//           "is-visible",
//           currentScroll > 350
//         );
//       }
//     }


//     /* -----------------------------------------
//        Open project
//     ----------------------------------------- */

//     function openProject(projectKey, triggerElement) {
//       const project = projectData[projectKey];

//       if (!project) {
//         console.warn(`Project not found: ${projectKey}`);
//         return;
//       }

//       previousFocus =
//         triggerElement || document.activeElement;

//       previousBodyOverflow = document.body.style.overflow;

//       renderProject(project, projectKey);

//       if (!modal.open) {
//         document.body.style.overflow = "hidden";

//         if (typeof modal.showModal === "function") {
//           modal.showModal();
//         } else {
//           modal.setAttribute("open", "");
//         }
//       }

//       if (el.close) {
//         el.close.focus({ preventScroll: true });
//       }
//     }


//     /* -----------------------------------------
//        Close project
//     ----------------------------------------- */

//     function closeProject() {
//       if (lightbox && lightbox.open) {
//         lightbox.close();
//       }

//       if (typeof modal.close === "function" && modal.open) {
//         modal.close();
//       } else {
//         modal.removeAttribute("open");

//         document.body.style.overflow =
//           previousBodyOverflow;
//       }
//     }


//     /* -----------------------------------------
//        Previous / Next project
//     ----------------------------------------- */

//     function switchProject(direction) {
//       const currentIndex =
//         projectKeys.indexOf(activeProjectKey);

//       const nextIndex = currentIndex + direction;

//       if (
//         nextIndex < 0 ||
//         nextIndex >= projectKeys.length
//       ) {
//         return;
//       }

//       const nextKey = projectKeys[nextIndex];

//       renderProject(projectData[nextKey], nextKey);

//       if (el.scroll) {
//         el.scroll.focus({ preventScroll: true });
//       }
//     }


//     /* -----------------------------------------
//        Project card click

//   /* -----------------------------------------
//      Project card click
//   ----------------------------------------- */

//     projectRows.forEach((row) => {
//       const projectKey = row.dataset.project;

//       if (!projectKey || !projectData[projectKey]) {
//         console.warn(
//           "Invalid project ID:",
//           projectKey,
//           row
//         );
//         return;
//       }

//       // Make the complete card keyboard accessible.
//       row.setAttribute("role", "button");
//       row.setAttribute("tabindex", "0");

//       row.addEventListener("click", () => {
//         openProject(projectKey, row);
//       });

//       row.addEventListener("keydown", (event) => {
//         if (event.key === "Enter" || event.key === " ") {
//           event.preventDefault();
//           openProject(projectKey, row);
//         }
//       });
//     });


//     /* -----------------------------------------
//        Modal buttons
//     ----------------------------------------- */

//     if (el.close) {
//       el.close.addEventListener("click", closeProject);
//     }

//     if (el.back) {
//       el.back.addEventListener("click", closeProject);
//     }

//     if (el.footerBack) {
//       el.footerBack.addEventListener("click", closeProject);
//     }

//     if (el.previous) {
//       el.previous.addEventListener("click", () => {
//         switchProject(-1);
//       });
//     }

//     if (el.next) {
//       el.next.addEventListener("click", () => {
//         switchProject(1);
//       });
//     }


//     /* -----------------------------------------
//        Modal scroll listener
//     ----------------------------------------- */

//     if (el.scroll) {
//       el.scroll.addEventListener(
//         "scroll",
//         () => {
//           if (scrollFrame) return;

//           scrollFrame = requestAnimationFrame(() => {
//             updateModalScroll();
//             scrollFrame = 0;
//           });
//         },
//         { passive: true }
//       );
//     }


//     /* -----------------------------------------
//        Back to top
//     ----------------------------------------- */

//     if (el.backTop && el.scroll) {
//       el.backTop.addEventListener("click", () => {
//         el.scroll.scrollTo({
//           top: 0,
//           behavior: motionPreference.matches
//             ? "auto"
//             : "smooth"
//         });
//       });
//     }


//     /* -----------------------------------------
//        Image lightbox
//     ----------------------------------------- */

//     if (
//       el.imageButton &&
//       lightbox &&
//       lightboxImage &&
//       lightboxCaption
//     ) {
//       el.imageButton.addEventListener("click", () => {
//         if (!el.image || !el.image.src) return;

//         lightboxImage.src = el.image.src;
//         lightboxImage.alt = el.image.alt;

//         setText(
//           lightboxCaption,
//           el.imageCaption
//             ? el.imageCaption.textContent
//             : ""
//         );

//         if (!lightbox.open) {
//           lightbox.showModal();
//         }

//         const lightboxClose = get("lightboxClose");

//         if (lightboxClose) {
//           lightboxClose.focus({ preventScroll: true });
//         }
//       });

//       const lightboxClose = get("lightboxClose");

//       if (lightboxClose) {
//         lightboxClose.addEventListener("click", () => {
//           lightbox.close();
//         });
//       }

//       lightbox.addEventListener("click", (event) => {
//         if (event.target === lightbox) {
//           lightbox.close();
//         }
//       });

//       lightbox.addEventListener("close", () => {
//         if (el.imageButton && !el.imageButton.hidden) {
//           el.imageButton.focus({ preventScroll: true });
//         }
//       });
//     }


//     /* -----------------------------------------
//        Image loading error
//     ----------------------------------------- */

//     if (el.image) {
//       el.image.addEventListener("error", () => {
//         showSection("modalVisualSection", false);

//         if (el.imageButton) {
//           el.imageButton.hidden = true;
//         }
//       });
//     }


//     /* -----------------------------------------
//        Restore focus and page scroll
//     ----------------------------------------- */

//     modal.addEventListener("close", () => {
//       document.body.style.overflow =
//         previousBodyOverflow;

//       modal.classList.remove("is-scrolled");

//       if (el.backTop) {
//         el.backTop.classList.remove("is-visible");
//       }

//       if (el.progress) {
//         el.progress.style.width = "0%";
//       }

//       if (previousFocus && previousFocus.isConnected) {
//         previousFocus.focus({ preventScroll: true });
//       }
//     });


//     /* -----------------------------------------
//        Backdrop click
//     ----------------------------------------- */

//     modal.addEventListener("click", (event) => {
//       if (event.target === modal) {
//         closeProject();
//       }
//     });


//     /* -----------------------------------------
//        Keyboard support
//        Escape is handled by native dialog.
//        Tab focus is kept inside the modal.
//     ----------------------------------------- */

//     modal.addEventListener("keydown", (event) => {
//       if (event.key !== "Tab") return;

//       const focusableElements = Array.from(
//         modal.querySelectorAll(
//           'button:not(:disabled):not([hidden]), a[href], [tabindex="0"]'
//         )
//       ).filter((element) => {
//         return (
//           !element.closest("[hidden]") &&
//           element.getClientRects().length > 0
//         );
//       });

//       if (!focusableElements.length) return;

//       const first = focusableElements[0];
//       const last =
//         focusableElements[focusableElements.length - 1];

//       if (
//         event.shiftKey &&
//         document.activeElement === first
//       ) {
//         event.preventDefault();
//         last.focus();
//       } else if (
//         !event.shiftKey &&
//         document.activeElement === last
//       ) {
//         event.preventDefault();
//         first.focus();
//       }
//     });


//     /* -----------------------------------------
//        Public modal function
//        Can also be called from HTML if needed.
//     ----------------------------------------- */

//     window.openProjectModal = function (projectKey) {
//       openProject(projectKey);
//     };

//     window.closeProjectModal = closeProject;

//     updateModalScroll();




//   /* =========================================
//      11. DEMO TERMINAL
//      Predefined commands only.
//      No operating-system commands are executed.
//   ========================================= */

//   const terminalForm = $("#terminalForm");
//   const terminalInput = $("#terminalInput");
//   const terminalScreen = $("#terminalScreen");
//   const terminalClear = $("#terminalClear");

//   const terminalCommands = {
//     help: [
//       "Available commands:",
//       "  help      - show this command list",
//       "  whoami    - show profile information",
//       "  skills    - list technical focus areas",
//       "  projects  - list portfolio projects",
//       "  contact   - show contact options",
//       "  clear     - clear terminal output"
//     ],

//     whoami: [
//       "Raihan Uddin Munna",
//       "Computer Science & Engineering student",
//       "Focus: Networking, infrastructure, security fundamentals"
//     ],

//     skills: [
//       "Networking: IPv4, subnetting, VLANs, STP",
//       "Routing: Static routes, RIP, EIGRP, OSPF (learning/labs)",
//       "Tools: Cisco Packet Tracer, Wireshark (learning)",
//       "Systems: Linux CLI fundamentals",
//       "Development: HTML, CSS, JavaScript, React, Node.js"
//     ],

//     projects: [
//       "01  Enterprise EIGRP Routing Lab",
//       "02  Enterprise Office VLAN Network",
//       "03  VLSM Office Network Design",
//       "04  Linux & Security Fundamentals",
//       "05  Network Engineering Portfolio",
//       "",
//       "Open the Projects section for more details."
//     ],

//     contact: [
//       `GitHub: ${SITE_CONFIG.github}`,
//       `Email: ${SITE_CONFIG.email}`,
//       "Use the Contact section for contact options."
//     ]
//   };

//   function addTerminalLine(text, className = "") {
//     if (!terminalScreen) return;

//     const paragraph = document.createElement("p");

//     if (className) {
//       paragraph.className = className;
//     }

//     paragraph.textContent = text;

//     terminalScreen.appendChild(paragraph);

//     return paragraph;
//   }

//   function clearTerminal() {
//     if (terminalScreen) {
//       terminalScreen.replaceChildren();
//     }
//   }

//   function runTerminalCommand(rawCommand) {
//     const command = rawCommand.trim().toLowerCase();

//     if (!command) return;

//     addTerminalLine(
//       `raihan@lab ~ $ ${rawCommand}`,
//       "terminal-command-line"
//     );

//     if (command === "clear") {
//       clearTerminal();
//       return;
//     }

//     const output = terminalCommands[command];

//     if (!output) {
//       addTerminalLine(
//         `Command not found: ${rawCommand}. Type "help" to see available commands.`,
//         "terminal-output"
//       );
//     } else {
//       output.forEach((line) => {
//         addTerminalLine(line, "terminal-output");
//       });
//     }

//     terminalScreen.scrollTop =
//       terminalScreen.scrollHeight;
//   }

//   if (terminalForm && terminalInput && terminalScreen) {
//     terminalForm.addEventListener("submit", (event) => {
//       event.preventDefault();

//       const command = terminalInput.value;

//       terminalInput.value = "";

//       runTerminalCommand(command);
//     });
//   }

//   if (terminalClear && terminalScreen) {
//     terminalClear.addEventListener("click", () => {
//       clearTerminal();

//       addTerminalLine(
//         "Terminal cleared. Type help to continue."
//       );
//     });
//   }


//   /* =========================================
//      12. CONTACT FORM
//      Uses mailto:
//      It does not send messages through a server.
//   ========================================= */

//   const contactForm = $("#contactForm");
//   const formNote = $("#formNote");

//   if (contactForm) {
//     contactForm.addEventListener("submit", (event) => {
//       event.preventDefault();

//       if (!contactForm.reportValidity()) {
//         return;
//       }

//       if (
//         !SITE_CONFIG.email ||
//         SITE_CONFIG.email === "your-email@example.com"
//       ) {
//         if (formNote) {
//           formNote.textContent =
//             "Setup needed: add your real email address in SITE_CONFIG.";
//         }

//         return;
//       }

//       const senderName = $("#senderName")?.value.trim() || "";
//       const senderEmail = $("#senderEmail")?.value.trim() || "";
//       const senderMessage = $("#senderMessage")?.value.trim() || "";

//       const subject =
//         `Portfolio enquiry from ${senderName}`;

//       const body = [
//         `Name: ${senderName}`,
//         `Email: ${senderEmail}`,
//         "",
//         "Message:",
//         senderMessage
//       ].join("\n");

//       const mailtoUrl =
//         `mailto:${SITE_CONFIG.email}` +
//         `?subject=${encodeURIComponent(subject)}` +
//         `&body=${encodeURIComponent(body)}`;

//       if (formNote) {
//         formNote.textContent =
//           "Opening your email application. Review the message and press Send there.";
//       }

//       window.location.href = mailtoUrl;
//     });
//   }


//   /* =========================================
//      13. FOOTER YEAR
//   ========================================= */

//   const yearElement = $("#year");

//   if (yearElement) {
//     yearElement.textContent =
//       new Date().getFullYear();
//   }


//   /* =========================================
//      14. JOURNEY SCROLL REVEAL
//   ========================================= */

//   document.addEventListener("DOMContentLoaded", () => {
//     const journey = $("#journey");

//     if (!journey) return;

//     const journeyCards =
//       journey.querySelectorAll(".journey-item");

//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (
//       prefersReducedMotion ||
//       !("IntersectionObserver" in window)
//     ) {
//       journeyCards.forEach((card) => {
//         card.classList.add("is-visible");
//       });

//       return;
//     }

//     journeyCards.forEach((card, index) => {
//       card.classList.add("journey-reveal");

//       card.style.transitionDelay =
//         `${(index % 2) * 100}ms`;
//     });

//     const journeyObserver = new IntersectionObserver(
//       (entries, observer) => {
//         entries.forEach((entry) => {
//           if (!entry.isIntersecting) return;

//           entry.target.classList.add("is-visible");

//           observer.unobserve(entry.target);
//         });
//       },
//       {
//         threshold: 0.08,
//         rootMargin: "0px 0px -25px 0px"
//       }
//     );

//     journeyCards.forEach((card) => {
//       journeyObserver.observe(card);
//     });
//   });


//   /* =========================================
//      15. FINAL INITIALIZATION
//   ========================================= */

//   document.documentElement.classList.add("js-ready");

//   console.info(
//     "Raihan Network Lab portfolio initialized successfully."
//   )}































/* =========================================
   RAIHAN NETWORK LAB
   File: script.js
   Complete Portfolio JavaScript
========================================= */

"use strict";

/* =========================================
   1. PERSONAL SETTINGS
========================================= */

const SITE_CONFIG = {
  github: "https://github.com/Raihan-Uddin-Munna",
  github2: "https://github.com/Raihan-Uddin-Munna?tab=repositories",

  email: "raihanuddin1289@gmail.com",
  whatsapp: "https://call.whatsapp.com/voice/tQmAvFk8rbBENqd3PQ9Oq4",
  linkedin: "https://www.linkedin.com/",

  resume: "resume.pdf"
};


/* =========================================
   2. ELEMENT HELPERS
========================================= */

const $ = (selector, parent = document) =>
  parent.querySelector(selector);

const $$ = (selector, parent = document) =>
  Array.from(parent.querySelectorAll(selector));


/* =========================================
   3. APPLY PERSONAL LINKS
========================================= */

function setupPersonalLinks() {
  const githubLinks = $$('a[href*="github.com/Raihan-Uddin-Munna"]');

  githubLinks.forEach((link) => {
    const currentHref = link.getAttribute("href") || "";

    if (
      currentHref === "#" ||
      currentHref === SITE_CONFIG.github ||
      currentHref === SITE_CONFIG.github2
    ) {
      link.href = SITE_CONFIG.github;
    }
  });

  const emailLink = $("#emailLink");
  const emailDisplay = $("#emailDisplay");
  const footerEmail = $("#footerEmail");
  const whatsappLink = $("#whatsappLink");
  const linkedinLink = $("#linkedinLink");
  const footerLinkedIn = $("#footerLinkedIn");
  const resumeButton = $(".resume-button");

  const emailIsValid =
    SITE_CONFIG.email &&
    SITE_CONFIG.email !== "your-email@example.com";

  if (emailLink) {
    emailLink.href = emailIsValid
      ? `mailto:${SITE_CONFIG.email}`
      : "#contact";
  }

  if (emailDisplay) {
    emailDisplay.textContent = SITE_CONFIG.email;
  }

  if (footerEmail) {
    footerEmail.href = emailIsValid
      ? `mailto:${SITE_CONFIG.email}`
      : "#contact";
  }

  if (whatsappLink) {
    whatsappLink.href = SITE_CONFIG.whatsapp || "#contact";
  }

  if (linkedinLink) {
    linkedinLink.href = SITE_CONFIG.linkedin;
  }

  if (footerLinkedIn) {
    footerLinkedIn.href = SITE_CONFIG.linkedin;
  }

  if (resumeButton) {
    resumeButton.href = SITE_CONFIG.resume;
  }
}

setupPersonalLinks();


/* =========================================
   4. PROFILE PHOTO FALLBACK
========================================= */

const profileImage = $("#profileImage");
const portraitPlaceholder = $("#portraitPlaceholder");

if (profileImage && portraitPlaceholder) {
  function showPortraitFallback() {
    profileImage.style.display = "none";
    portraitPlaceholder.style.display = "flex";
  }

  profileImage.addEventListener("error", showPortraitFallback);

  if (profileImage.complete && profileImage.naturalWidth === 0) {
    showPortraitFallback();
  }
}


/* =========================================
   5. MOBILE NAVIGATION
========================================= */

const menuToggle = $("#menuToggle");
const navLinks = $("#navLinks");

function closeMobileMenu() {
  if (!menuToggle || !navLinks) return;

  navLinks.classList.remove("open");

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
}

function toggleMobileMenu() {
  if (!menuToggle || !navLinks) return;

  const shouldOpen = !navLinks.classList.contains("open");

  navLinks.classList.toggle("open", shouldOpen);

  menuToggle.setAttribute("aria-expanded", String(shouldOpen));

  menuToggle.setAttribute(
    "aria-label",
    shouldOpen ? "Close navigation" : "Open navigation"
  );
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", toggleMobileMenu);

  $$(".nav-links a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", (event) => {
    const clickedInsideNav =
      navLinks.contains(event.target) ||
      menuToggle.contains(event.target);

    if (!clickedInsideNav) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      closeMobileMenu();
    }
  });
}


/* =========================================
   6. SCROLL PROGRESS + ACTIVE NAVIGATION
========================================= */

const scrollProgress = $("#scrollProgress");
const mainSections = $$("main section[id]");
const navAnchors = $$(".nav-links a");
const dotLinks = $$(".dot-link");

let scrollUpdatePending = false;

function updateScrollUI() {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const percentage =
    scrollableHeight > 0
      ? (window.scrollY / scrollableHeight) * 100
      : 0;

  if (scrollProgress) {
    scrollProgress.style.width =
      `${Math.min(100, Math.max(0, percentage))}%`;
  }

  scrollUpdatePending = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (scrollUpdatePending) return;

    scrollUpdatePending = true;

    window.requestAnimationFrame(updateScrollUI);
  },
  { passive: true }
);

window.addEventListener("resize", updateScrollUI);

updateScrollUI();

function setActiveSection(sectionId) {
  navAnchors.forEach((link) => {
    const active =
      link.getAttribute("href") === `#${sectionId}`;

    link.classList.toggle("active", active);
  });

  dotLinks.forEach((link) => {
    const active =
      link.getAttribute("href") === `#${sectionId}`;

    link.classList.toggle("active", active);

    if (active) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio
        );

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].target.id);
      }
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0, 0.1, 0.25, 0.5]
    }
  );

  mainSections.forEach((section) => {
    sectionObserver.observe(section);
  });
}


/* =========================================
   7. SCROLL REVEAL ANIMATIONS
========================================= */

const revealElements = $$(".reveal");

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !reduceMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -25px 0px"
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}


/* =========================================
   8. PROJECT DATA
========================================= */

const projectData = {

  eigrp: {
    number: "01",
    title: "Enterprise EIGRP Routing Lab",
    category: "NETWORK ENGINEERING",
    status: "LAB PROJECT",

    description:
      "A multi-router Cisco routing lab focused on EIGRP neighbour relationships, route selection, routing-table analysis, and connectivity troubleshooting.",

    image: "./Image/Profile.jpeg",
    imageAlt: "Enterprise EIGRP routing topology",
    imageCaption: "EIGRP multi-router topology",

    deviceCount: "Multiple routers",
    networkType: "Dynamic routing",
    duration: "Cisco Packet Tracer",

    implementation:
      "The lab focuses on configuring and examining EIGRP across multiple routers. The documentation can be used to present the topology, addressing plan, routing configuration, and verification results.",

    features: [
      "EIGRP routing configuration",
      "Neighbour relationship verification",
      "Routing-table inspection",
      "Route selection and metric analysis",
      "Connectivity troubleshooting"
    ],

    verification:
      "Use the verification section to document the actual command outputs and connectivity results from the completed lab.",

    tests: [
      "show ip eigrp neighbors",
      "show ip route",
      "show ip protocols",
      "End-to-end connectivity tests"
    ],

    specs: {
      "Environment": "Cisco Packet Tracer",
      "Routing": "EIGRP",
      "Devices": "Multiple Cisco routers",
      "Focus": "Dynamic routing and troubleshooting"
    },

    tags: [
      "EIGRP",
      "Cisco IOS",
      "Dynamic Routing",
      "Routing Table",
      "Packet Tracer"
    ],

    github: "",
    pkt: "",
    readme: "",
    liveDemo: ""
  },


  vlan: {
    number: "02",
    title: "Enterprise Office VLAN Network",
    category: "SWITCHING & NETWORK DESIGN",
    status: "LAB PROJECT",

    description:
      "A department-based office network design using VLAN segmentation, trunk links, inter-VLAN routing, and network isolation concepts.",

    image: "",
    imageAlt: "Enterprise office VLAN topology",
    imageCaption: "Department-based VLAN network topology",

    deviceCount: "Routers & switches",
    networkType: "VLAN / Inter-VLAN",
    duration: "Cisco Packet Tracer",

    implementation:
      "The design separates office departments into individual VLANs. It covers access-port assignment, trunk configuration, inter-VLAN communication, management separation, and guest-network isolation.",

    features: [
      "Department-based VLAN segmentation",
      "Access-port configuration",
      "802.1Q trunk configuration",
      "Inter-VLAN routing",
      "Guest network isolation",
      "Network management separation"
    ],

    verification:
      "Verify VLAN membership, trunk operation, gateway reachability, and permitted or restricted communication between departments.",

    tests: [
      "show vlan brief",
      "show interfaces trunk",
      "show ip interface brief",
      "Inter-VLAN connectivity tests",
      "Guest network isolation tests"
    ],

    specs: {
      "Environment": "Cisco Packet Tracer",
      "VLANs": "10, 20, 30, 40, 50, 60, 70, 80, 90",
      "Additional VLANs": "110 Voice, 999 Native / Blackhole",
      "Network Design": "Department-based segmentation",
      "Routing": "Inter-VLAN routing"
    },

    tags: [
      "VLAN",
      "802.1Q",
      "Inter-VLAN Routing",
      "STP",
      "Cisco IOS",
      "Packet Tracer"
    ],

    github: "",
    pkt: "",
    readme: "",
    liveDemo: ""
  },


  vlsm: {
    number: "03",
    title: "VLSM Office Network Design",
    category: "IP ADDRESSING & NETWORK DESIGN",
    status: "DOCUMENTED PROJECT",

    description:
      "An IPv4 subnet-planning project that uses Variable Length Subnet Masking to allocate address space according to the host requirements of different office departments.",

    image: "",
    imageAlt: "VLSM office network topology",
    imageCaption: "Office network design and subnet allocation",

    deviceCount: "Office network devices",
    networkType: "IPv4 / VLSM",
    duration: "Cisco Packet Tracer",

    implementation:
      "The project uses the 192.168.10.0/24 network and allocates address space according to the requirements of IT, HR, Accounts, and Management departments.",

    features: [
      "Host requirement analysis",
      "VLSM subnet calculation",
      "Non-overlapping subnet allocation",
      "Network and broadcast address identification",
      "Default gateway planning",
      "Addressing documentation"
    ],

    verification:
      "Check the configured IP addresses, subnet masks, default gateways, and connectivity between the required network segments.",

    tests: [
      "IP addressing verification",
      "Subnet mask verification",
      "Gateway reachability",
      "End-to-end ping tests"
    ],

    specs: {
      "Base Network": "192.168.10.0/24",
      "IT Department": "50 Hosts",
      "HR Department": "25 Hosts",
      "Accounts": "12 Hosts",
      "Management": "5 Hosts",
      "Method": "Variable Length Subnet Masking"
    },

    tags: [
      "IPv4",
      "VLSM",
      "Subnetting",
      "CIDR",
      "Cisco Packet Tracer",
      "Network Design"
    ],

    github:
      "https://github.com/Raihan-Uddin-Munna/vlsm-office-network-cisco",

    pkt: "",

    readme:
      "https://github.com/Raihan-Uddin-Munna/vlsm-office-network-cisco",

    liveDemo: ""
  },


  linux: {
    number: "04",
    title: "Linux & Security Fundamentals",
    category: "SYSTEMS & SECURITY",
    status: "LEARNING PROJECT",

    description:
      "A developing Linux practice project covering command-line operations, file permissions, user management, process inspection, and basic networking utilities.",

    image: "",
    imageAlt: "Linux command-line practice",
    imageCaption: "Linux terminal and system administration practice",

    deviceCount: "Linux environment",
    networkType: "Linux / CLI",
    duration: "Ongoing learning",

    implementation:
      "The project is intended to document practical Linux commands and explain how they are used for basic system administration and security-related tasks.",

    features: [
      "Command-line navigation",
      "File and directory management",
      "User and group management",
      "File permissions",
      "Process inspection",
      "Basic networking commands"
    ],

    verification:
      "Document command usage, expected output, and the practical purpose of each command in the lab environment.",

    tests: [
      "User and group inspection",
      "Permission verification",
      "Process inspection",
      "Network configuration inspection"
    ],

    specs: {
      "Environment": "Linux",
      "Interface": "Command Line",
      "Focus": "System administration",
      "Security": "Fundamental concepts"
    },

    tags: [
      "Linux",
      "Bash",
      "CLI",
      "Permissions",
      "Networking",
      "Security Fundamentals"
    ],

    github: "",
    pkt: "",
    readme: "",
    liveDemo: ""
  },


  portfolio: {
    number: "05",
    title: "Network Engineering Portfolio",
    category: "WEB DEVELOPMENT",
    status: "PERSONAL PROJECT",

    description:
      "A personal portfolio designed to present networking knowledge, technical projects, practical lab work, training, and professional development.",

    image: "",
    imageAlt: "Network engineering portfolio website",
    imageCaption: "RAIHAN NETWORK LAB portfolio",

    deviceCount: "Responsive website",
    networkType: "Frontend development",
    duration: "Personal project",

    implementation:
      "The website uses a responsive layout and custom interface components to organise profile information, technical skills, project documentation, and contact details.",

    features: [
      "Responsive page layout",
      "Mobile navigation",
      "Project filtering",
      "Project details modal",
      "Interactive demonstration terminal",
      "Contact section"
    ],

    verification:
      "Test the layout and interactions across desktop, tablet, and mobile screen sizes.",

    tests: [
      "Responsive layout checks",
      "Navigation and anchor testing",
      "Project filter testing",
      "Modal open and close testing",
      "Form validation"
    ],

    specs: {
      "Structure": "HTML",
      "Styling": "CSS",
      "Interaction": "JavaScript",
      "Design": "Responsive interface"
    },

    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "Frontend"
    ],

    github: "https://github.com/Raihan-Uddin-Munna",
    pkt: "",
    readme: "",
    liveDemo: ""
  }

};


/* =========================================
   9. PROJECT FILTERING
========================================= */

const projectRows = $$(".project-card");
const filterButtons = $$(".filter-button");
const projectCount = $("#projectCount");

function applyProjectFilter(filter = "all") {
  let visibleCount = 0;

  filterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;

    button.classList.toggle("active", active);

    button.setAttribute("aria-pressed", String(active));
  });

  projectRows.forEach((row) => {
    const category = row.dataset.category || "all";

    const matches =
      filter === "all" || category === filter;

    row.hidden = !matches;

    if (matches) {
      visibleCount++;
    }
  });

  if (projectCount) {
    projectCount.textContent =
      `${String(visibleCount).padStart(2, "0")} PROJECTS`;
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyProjectFilter(button.dataset.filter || "all");
  });
});

applyProjectFilter("all");


/* =========================================
   10. PROJECT MODAL CONTROLLER
========================================= */

(() => {

  const modal = $("#projectModal");

  if (!modal) {
    console.warn("Project modal element was not found.");
    return;
  }

  const get = (id) => document.getElementById(id);

  const el = {
    number: get("modalNumber"),
    category: get("modalCategory"),
    status: get("modalStatus"),
    title: get("modalTitle"),
    description: get("modalDescription"),
    facts: get("modalQuickFacts"),

    image: get("modalImage"),
    imageButton: get("modalImageButton"),
    imageCaption: get("modalImageCaption"),

    implementation: get("modalImplementation"),
    features: get("modalFeatures"),

    verification: get("modalVerification"),
    tests: get("modalTests"),

    specs: get("modalSpecs"),
    tags: get("modalTags"),
    resources: get("modalResources"),

    scroll: get("modalScroll"),
    progress: get("modalProgressBar"),
    backTop: get("modalBackTop"),

    previous: get("modalPrevious"),
    next: get("modalNext"),

    close: get("modalClose"),
    back: get("modalBack"),
    footerBack: get("modalFooterBack")
  };

  const lightbox = get("modalLightbox");
  const lightboxImage = get("modalLightboxImage");
  const lightboxCaption = get("modalLightboxCaption");
  const lightboxClose = get("lightboxClose");

  const projectKeys = Object.keys(projectData);

  let activeProjectKey = null;
  let previousFocus = null;
  let previousBodyOverflow = "";

  let scrollFrame = 0;

  const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );


  /* -----------------------------------------
     HELPER FUNCTIONS
  ----------------------------------------- */

  function setText(element, value) {
    if (!element) return;

    element.textContent =
      value == null ? "" : String(value);
  }

  function clearElement(element) {
    if (!element) return;

    element.replaceChildren();
  }

  function createIcon(className) {
    const icon = document.createElement("i");

    icon.className = className;

    icon.setAttribute("aria-hidden", "true");

    return icon;
  }

  function safeUrl(value) {
    if (typeof value !== "string" || !value.trim()) {
      return "";
    }

    try {
      const url = new URL(value, window.location.href);

      if (!["http:", "https:"].includes(url.protocol)) {
        return "";
      }

      return url.href;

    } catch {
      return "";
    }
  }

  function showSection(id, visible) {
    const section = get(id);

    if (section) {
      section.hidden = !visible;
    }
  }


  /* -----------------------------------------
     STATUS
  ----------------------------------------- */

  function setStatus(value) {
    if (!el.status) return;

    const dot = document.createElement("span");

    dot.className = "modal-status-dot";

    dot.setAttribute("aria-hidden", "true");

    el.status.replaceChildren(
      dot,
      document.createTextNode(` ${value || "LAB PROJECT"}`)
    );
  }


  /* =========================================
     CASE STUDY TAB CONTROLLER
  ========================================= */

  const caseTabs = $$(".case-tab", modal);
  const caseContent = $("#caseContent", modal);

  const tabNames = [
    "overview",
    "topology",
    "configuration",
    "verification",
    "troubleshooting",
    "evidence"
  ];


  /* -----------------------------------------
     CASE STUDY CONTENT BUILDERS
  ----------------------------------------- */

  function createCaseHeading(text) {
    const heading = document.createElement("h3");

    heading.textContent = text;

    return heading;
  }

  function createCaseParagraph(text) {
    const paragraph = document.createElement("p");

    paragraph.textContent = text || "";

    return paragraph;
  }

  function createCaseSection(title, description) {
    const section = document.createElement("section");

    section.className = "case-content-section";

    section.append(createCaseHeading(title));

    if (description) {
      section.append(createCaseParagraph(description));
    }

    return section;
  }

  function createCaseList(items) {
    const list = document.createElement("ul");

    list.className = "case-content-list";

    (items || []).forEach((value) => {
      const item = document.createElement("li");

      item.textContent = value;

      list.append(item);
    });

    return list;
  }

  function createCaseSpecifications(specs) {
    const list = document.createElement("dl");

    list.className = "case-specifications";

    Object.entries(specs || {}).forEach(([key, value]) => {
      const wrapper = document.createElement("div");

      const term = document.createElement("dt");

      term.textContent = key;

      const detail = document.createElement("dd");

      detail.textContent = Array.isArray(value)
        ? value.join(", ")
        : String(value);

      wrapper.append(term, detail);

      list.append(wrapper);
    });

    return list;
  }

  function createCaseLink(label, url) {
    const href = safeUrl(url);

    if (!href) return null;

    const link = document.createElement("a");

    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = label;

    return link;
  }


  /* -----------------------------------------
     RENDER CASE STUDY TAB
  ----------------------------------------- */

  function renderCaseTab(tabName) {
    const project = projectData[activeProjectKey];

    if (!project || !caseContent) return;

    caseContent.replaceChildren();

    switch (tabName) {

      /* 01. OVERVIEW */

      case "overview": {

        const section = createCaseSection(
          "Project Overview",
          project.description
        );

        section.append(
          createCaseParagraph(project.implementation)
        );

        caseContent.append(section);

        const features = createCaseSection(
          "Key Features",
          "The main technical areas covered by this project."
        );

        features.append(
          createCaseList(project.features)
        );

        caseContent.append(features);

        const specifications = createCaseSection(
          "Project Specifications",
          "Environment and technical scope."
        );

        specifications.append(
          createCaseSpecifications(project.specs)
        );

        caseContent.append(specifications);

        break;
      }


      /* 02. TOPOLOGY */

      case "topology": {

        const section = createCaseSection(
          "Network Topology",
          "The topology and device arrangement for this project."
        );

        section.append(
          createCaseSpecifications({
            "Environment": project.duration,
            "Device Count": project.deviceCount,
            "Network Type": project.networkType
          })
        );

        section.append(
          createCaseParagraph(
            "Add the actual topology diagram, device connections, " +
            "IP addressing plan and network layout to this project " +
            "when the lab documentation is ready."
          )
        );

        caseContent.append(section);

        break;
      }


      /* 03. CONFIGURATION */

      case "configuration": {

        const section = createCaseSection(
          "Configuration & Implementation",
          project.implementation
        );

        section.append(
          createCaseHeading("Implementation Areas")
        );

        section.append(
          createCaseList(project.features)
        );

        caseContent.append(section);

        const technologies = createCaseSection(
          "Technologies Used",
          "Tools and technologies associated with this project."
        );

        technologies.append(
          createCaseList(project.tags)
        );

        caseContent.append(technologies);

        break;
      }


      /* 04. VERIFICATION */

      case "verification": {

        const section = createCaseSection(
          "Verification Results",
          project.verification
        );

        section.append(
          createCaseHeading("Verification Commands & Tests")
        );

        section.append(
          createCaseList(project.tests)
        );

        caseContent.append(section);

        break;
      }


      /* 05. TROUBLESHOOTING */

      case "troubleshooting": {

        const section = createCaseSection(
          "Troubleshooting Notes",
          project.troubleshooting ||
          "Project-specific troubleshooting notes have not been added yet."
        );

        section.append(
          createCaseParagraph(
            "Document the issue, the commands used to investigate it, " +
            "the root cause, the corrective action and the final verification."
          )
        );

        caseContent.append(section);

        break;
      }


      /* 06. EVIDENCE */

      case "evidence": {

        const section = createCaseSection(
          "Project Evidence",
          "Repository links and supporting project documentation."
        );

        const links = [
          ["GitHub Repository", project.github],
          ["Project Documentation", project.readme],
          ["Live Demonstration", project.liveDemo],
          ["Packet Tracer File", project.pkt]
        ];

        let linkCount = 0;

        links.forEach(([label, url]) => {
          const link = createCaseLink(label, url);

          if (link) {
            section.append(link);
            linkCount++;
          }
        });

        if (linkCount === 0) {
          section.append(
            createCaseParagraph(
              "No project evidence or external resources have been added yet."
            )
          );
        }

        caseContent.append(section);

        break;
      }

    }
  }


  /* -----------------------------------------
     ACTIVATE CASE STUDY TAB
  ----------------------------------------- */

  function activateCaseTab(tabName) {
    if (!tabNames.includes(tabName)) return;

    caseTabs.forEach((tab) => {
      const isActive = tab.dataset.tab === tabName;

      tab.classList.toggle("active", isActive);

      tab.setAttribute("aria-selected", String(isActive));

      tab.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    renderCaseTab(tabName);
  }


  /* -----------------------------------------
     TAB CLICK + KEYBOARD EVENTS
  ----------------------------------------- */

  caseTabs.forEach((tab, index) => {

    tab.addEventListener("click", () => {
      activateCaseTab(tab.dataset.tab);
    });

    tab.addEventListener("keydown", (event) => {
      let nextIndex = index;

      if (event.key === "ArrowRight") {
        nextIndex = (index + 1) % caseTabs.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex =
          (index - 1 + caseTabs.length) % caseTabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = caseTabs.length - 1;
      } else {
        return;
      }

      event.preventDefault();

      const nextTab = caseTabs[nextIndex];

      activateCaseTab(nextTab.dataset.tab);

      nextTab.focus();
    });

  });


  /* =========================================
     MODAL CONTENT BUILDERS
  ========================================= */

  function addFact(iconClass, value) {
    if (!el.facts || !value) return;

    const fact = document.createElement("span");

    fact.className = "modal-fact";

    fact.append(createIcon(iconClass));

    fact.append(document.createTextNode(String(value)));

    el.facts.append(fact);
  }

  function addListItem(container, value, iconClass) {
    if (!container || !value) return;

    const item = document.createElement("li");

    item.append(
      createIcon(iconClass || "fa-solid fa-check")
    );

    item.append(
      document.createTextNode(String(value))
    );

    container.append(item);
  }

  function addSpecification(label, value) {
    if (!el.specs || value == null || value === "") {
      return;
    }

    const row = document.createElement("div");

    row.className = "modal-spec-row";

    const term = document.createElement("dt");

    term.textContent = label;

    const description = document.createElement("dd");

    description.textContent = Array.isArray(value)
      ? value.join(", ")
      : String(value);

    row.append(term, description);

    el.specs.append(row);
  }

  function addTag(value) {
    if (!el.tags || !value) return;

    const tag = document.createElement("span");

    tag.textContent = String(value);

    el.tags.append(tag);
  }

  function addResource(
    label,
    detail,
    url,
    iconClass,
    download = false
  ) {
    if (!el.resources) return;

    const href = safeUrl(url);

    const link = document.createElement("a");

    link.className = "modal-resource";

    const icon = createIcon(iconClass);

    const copy = document.createElement("span");

    copy.className = "modal-resource-copy";

    const title = document.createElement("strong");

    title.textContent = label;

    const subtitle = document.createElement("small");

    subtitle.textContent = detail;

    copy.append(title, subtitle);

    link.append(icon, copy);

    if (!href) {

      link.classList.add("is-disabled");

      link.setAttribute("aria-disabled", "true");

      link.addEventListener("click", (event) => {
        event.preventDefault();
      });

    } else {

      link.href = href;

      if (download) {
        link.download = "";
      } else {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }

      link.append(
        createIcon(
          download
            ? "fa-solid fa-download"
            : "fa-solid fa-arrow-up-right-from-square"
        )
      );
    }

    el.resources.append(link);
  }


  /* =========================================
     MODAL SCROLL PROGRESS
  ========================================= */

  function updateModalScroll() {
    if (!el.scroll) return;

    const currentScroll = el.scroll.scrollTop;

    const maximumScroll =
      el.scroll.scrollHeight - el.scroll.clientHeight;

    const percentage =
      maximumScroll > 0
        ? Math.min(100, (currentScroll / maximumScroll) * 100)
        : 0;

    modal.classList.toggle(
      "is-scrolled",
      currentScroll > 30
    );

    if (el.progress) {
      el.progress.style.width = `${percentage}%`;
    }

    if (el.backTop) {
      el.backTop.classList.toggle(
        "is-visible",
        currentScroll > 350
      );
    }
  }


  /* =========================================
     RENDER SELECTED PROJECT
  ========================================= */

  function renderProject(project, projectKey) {
    if (!project) return;

    activeProjectKey = projectKey;

    setText(el.number, project.number);
    setText(el.category, project.category);
    setText(el.title, project.title);
    setText(el.description, project.description);

    setStatus(project.status);

    setText(
      el.imageCaption,
      project.imageCaption || "Project overview"
    );

    setText(
      el.implementation,
      project.implementation
    );

    setText(
      el.verification,
      project.verification
    );


    /* QUICK FACTS */

    clearElement(el.facts);

    addFact(
      "fa-solid fa-layer-group",
      project.deviceCount
    );

    addFact(
      "fa-solid fa-network-wired",
      project.networkType
    );

    addFact(
      "fa-regular fa-clock",
      project.duration
    );


    /* PROJECT PREVIEW IMAGE */

    const imageUrl = safeUrl(project.image);

    if (imageUrl && el.image && el.imageButton) {

      el.image.src = imageUrl;

      el.image.alt =
        project.imageAlt || project.title || "Project preview";

      el.imageButton.hidden = false;

      showSection("modalVisualSection", true);

    } else {

      if (el.image) {
        el.image.removeAttribute("src");
        el.image.alt = "";
      }

      if (el.imageButton) {
        el.imageButton.hidden = true;
      }

      showSection("modalVisualSection", false);
    }


    /* IMPLEMENTATION FEATURES */

    clearElement(el.features);

    (project.features || []).forEach((feature) => {
      addListItem(
        el.features,
        feature,
        "fa-solid fa-check"
      );
    });

    showSection(
      "modalImplementationSection",
      Boolean(
        project.implementation ||
        (project.features || []).length
      )
    );


    /* TESTING AND VERIFICATION */

    clearElement(el.tests);

    (project.tests || []).forEach((test) => {
      addListItem(
        el.tests,
        test,
        "fa-solid fa-circle-check"
      );
    });

    showSection(
      "modalVerificationSection",
      Boolean(
        project.verification ||
        (project.tests || []).length
      )
    );


    /* TECHNICAL SPECIFICATIONS */

    clearElement(el.specs);

    const specifications = project.specs || {};

    Object.entries(specifications).forEach(([label, value]) => {
      addSpecification(label, value);
    });

    showSection(
      "modalSpecsSection",
      Object.keys(specifications).length > 0
    );


    /* TECHNOLOGY TAGS */

    clearElement(el.tags);

    (project.tags || []).forEach(addTag);

    showSection(
      "modalTechSection",
      Boolean((project.tags || []).length)
    );


    /* PROJECT RESOURCES */

    clearElement(el.resources);

    if (project.github) {
      addResource(
        "GitHub repository",
        "Source files and project documentation",
        project.github,
        "fa-brands fa-github"
      );
    }

    if (project.pkt) {
      addResource(
        "Download Packet Tracer file",
        "Cisco Packet Tracer .pkt file",
        project.pkt,
        "fa-solid fa-file-arrow-down",
        true
      );
    }

    if (project.readme) {
      addResource(
        "Project documentation",
        "README and technical notes",
        project.readme,
        "fa-solid fa-file-lines"
      );
    }

    if (project.liveDemo) {
      addResource(
        "Live demonstration",
        "Open the deployed project",
        project.liveDemo,
        "fa-solid fa-arrow-up-right-from-square"
      );
    }

    showSection(
      "modalResourcesSection",
      Boolean(
        project.github ||
        project.pkt ||
        project.readme ||
        project.liveDemo
      )
    );


    /* PREVIOUS / NEXT NAVIGATION */

    const currentIndex = projectKeys.indexOf(projectKey);

    if (el.previous) {
      el.previous.disabled = currentIndex <= 0;
    }

    if (el.next) {
      el.next.disabled =
        currentIndex < 0 ||
        currentIndex >= projectKeys.length - 1;
    }


    /* RESET MODAL SCROLL */

    if (el.scroll) {
      el.scroll.scrollTop = 0;
    }

    activateCaseTab("overview");

    updateModalScroll();
  }


  /* =========================================
     OPEN PROJECT
  ========================================= */

  function openProject(projectKey, triggerElement) {
    const project = projectData[projectKey];

    if (!project) {
      console.warn(`Project not found: ${projectKey}`);
      return;
    }

    previousFocus =
      triggerElement || document.activeElement;

    previousBodyOverflow = document.body.style.overflow;

    renderProject(project, projectKey);

    if (!modal.open) {

      document.body.style.overflow = "hidden";

      if (typeof modal.showModal === "function") {
        modal.showModal();
      } else {
        modal.setAttribute("open", "");
      }
    }

    if (el.close) {
      el.close.focus({ preventScroll: true });
    }
  }


  /* =========================================
     CLOSE PROJECT
  ========================================= */

  function closeProject() {

    if (lightbox && lightbox.open) {
      lightbox.close();
    }

    if (typeof modal.close === "function" && modal.open) {
      modal.close();
    } else {
      modal.removeAttribute("open");

      document.body.style.overflow =
        previousBodyOverflow;

      restoreModalFocus();
    }
  }


  /* =========================================
     RESTORE FOCUS AND PAGE SCROLL
  ========================================= */

  function restoreModalFocus() {
    document.body.style.overflow =
      previousBodyOverflow;

    modal.classList.remove("is-scrolled");

    if (el.backTop) {
      el.backTop.classList.remove("is-visible");
    }

    if (el.progress) {
      el.progress.style.width = "0%";
    }

    if (previousFocus && previousFocus.isConnected) {
      previousFocus.focus({ preventScroll: true });
    }
  }


  modal.addEventListener("close", restoreModalFocus);


  /* =========================================
     PREVIOUS / NEXT PROJECT
  ========================================= */

  function switchProject(direction) {
    const currentIndex =
      projectKeys.indexOf(activeProjectKey);

    const nextIndex = currentIndex + direction;

    if (
      nextIndex < 0 ||
      nextIndex >= projectKeys.length
    ) {
      return;
    }

    const nextKey = projectKeys[nextIndex];

    renderProject(projectData[nextKey], nextKey);

    if (el.scroll) {
      el.scroll.focus({ preventScroll: true });
    }
  }


  /* =========================================
     PROJECT CARD EVENTS
  ========================================= */

  projectRows.forEach((row) => {

    const projectKey = row.dataset.project;

    if (!projectKey || !projectData[projectKey]) {
      console.warn(
        "Invalid project ID:",
        projectKey,
        row
      );

      return;
    }

    row.setAttribute("role", "button");

    row.setAttribute("tabindex", "0");

    row.addEventListener("click", () => {
      openProject(projectKey, row);
    });

    row.addEventListener("keydown", (event) => {
      if (
        event.key === "Enter" ||
        event.key === " "
      ) {
        event.preventDefault();

        openProject(projectKey, row);
      }
    });

  });


  /* =========================================
     MODAL BUTTONS
  ========================================= */

  if (el.close) {
    el.close.addEventListener("click", closeProject);
  }

  if (el.back) {
    el.back.addEventListener("click", closeProject);
  }

  if (el.footerBack) {
    el.footerBack.addEventListener("click", closeProject);
  }

  if (el.previous) {
    el.previous.addEventListener("click", () => {
      switchProject(-1);
    });
  }

  if (el.next) {
    el.next.addEventListener("click", () => {
      switchProject(1);
    });
  }


  /* =========================================
     MODAL SCROLL LISTENER
  ========================================= */

  if (el.scroll) {
    el.scroll.addEventListener(
      "scroll",
      () => {
        if (scrollFrame) return;

        scrollFrame = requestAnimationFrame(() => {
          updateModalScroll();

          scrollFrame = 0;
        });
      },
      { passive: true }
    );
  }


  /* =========================================
     BACK TO TOP
  ========================================= */

  if (el.backTop && el.scroll) {
    el.backTop.addEventListener("click", () => {
      el.scroll.scrollTo({
        top: 0,

        behavior: motionPreference.matches
          ? "auto"
          : "smooth"
      });
    });
  }


  /* =========================================
     IMAGE LIGHTBOX
  ========================================= */

  if (
    el.imageButton &&
    lightbox &&
    lightboxImage &&
    lightboxCaption
  ) {

    el.imageButton.addEventListener("click", () => {

      if (!el.image || !el.image.src) return;

      lightboxImage.src = el.image.src;

      lightboxImage.alt = el.image.alt;

      setText(
        lightboxCaption,
        el.imageCaption
          ? el.imageCaption.textContent
          : ""
      );

      if (!lightbox.open) {
        lightbox.showModal();
      }

      if (lightboxClose) {
        lightboxClose.focus({ preventScroll: true });
      }

    });


    if (lightboxClose) {
      lightboxClose.addEventListener("click", () => {
        lightbox.close();
      });
    }


    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.close();
      }
    });


    lightbox.addEventListener("close", () => {
      if (el.imageButton && !el.imageButton.hidden) {
        el.imageButton.focus({ preventScroll: true });
      }
    });

  }


  /* =========================================
     IMAGE LOADING ERROR
  ========================================= */

  if (el.image) {
    el.image.addEventListener("error", () => {

      showSection("modalVisualSection", false);

      if (el.imageButton) {
        el.imageButton.hidden = true;
      }

    });
  }


  /* =========================================
     MODAL BACKDROP CLICK
  ========================================= */

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeProject();
    }
  });


  /* =========================================
     KEYBOARD FOCUS MANAGEMENT
  ========================================= */

  modal.addEventListener("keydown", (event) => {

    if (event.key !== "Tab") return;

    const focusableElements = Array.from(
      modal.querySelectorAll(
        'button:not(:disabled):not([hidden]), a[href], [tabindex="0"]'
      )
    ).filter((element) => {
      return (
        !element.closest("[hidden]") &&
        element.getClientRects().length > 0
      );
    });

    if (!focusableElements.length) return;

    const first = focusableElements[0];

    const last =
      focusableElements[focusableElements.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === first
    ) {

      event.preventDefault();

      last.focus();

    } else if (
      !event.shiftKey &&
      document.activeElement === last
    ) {

      event.preventDefault();

      first.focus();
    }

  });


  /* =========================================
     PUBLIC MODAL FUNCTIONS
  ========================================= */

  window.openProjectModal = function (projectKey) {
    openProject(projectKey);
  };

  window.closeProjectModal = closeProject;

  updateModalScroll();

})();


/* =========================================
   11. DEMO TERMINAL
   Predefined commands only.
   No operating-system commands are executed.
========================================= */

const terminalForm = $("#terminalForm");
const terminalInput = $("#terminalInput");
const terminalScreen = $("#terminalScreen");
const terminalClear = $("#terminalClear");

const terminalCommands = {

  help: [
    "Available commands:",
    "  help      - show this command list",
    "  whoami    - show profile information",
    "  skills    - list technical focus areas",
    "  projects  - list portfolio projects",
    "  contact   - show contact options",
    "  clear     - clear terminal output"
  ],

  whoami: [
    "Mohammed Raihan",
    "Computer Science & Engineering student",
    "Focus: Networking, infrastructure, security fundamentals"
  ],


  skills: [
    "Networking: OSI & TCP/IP, IPv4/IPv6, Subnetting, VLSM, CIDR, VLANs, Trunking, STP/RSTP, EtherChannel",
    "Routing: Static Routing, RIPv2, EIGRP, OSPF, OSPF Areas, DR/BDR (learning/labs)",
    "Network Services: DHCP, DNS Fundamentals, NAT/PAT, Inter-VLAN Routing",
    "Network Operations: Cisco IOS CLI, MikroTik RouterOS, WinBox, Interface Management, Routing & MAC Table Analysis",
    "Troubleshooting: Ping, Traceroute, Connectivity Testing, Configuration Verification",
    "Tools: Cisco Packet Tracer, Wireshark (learning), SSH, Git, GitHub",
    "MikroTik: RouterOS, DHCP, Static Routing, Firewall, NAT, Bridge, Simple Queues",
    "Systems: Linux CLI, Files & Permissions, Process Management, Windows Fundamentals",
    "Development: HTML5, CSS3, Tailwind CSS, DaisyUI, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, REST APIs"
  ],


  projects: [
    "01  Enterprise EIGRP Routing Lab",
    "02  Enterprise Office VLAN Network",
    "03  VLSM Office Network Design",
    "04  Linux & Security Fundamentals",
    "05  Network Engineering Portfolio",
    "",
    "Open the Projects section for more details."
  ],

  contact: [
     `Mobile : 01882826691`,
    `GitHub : ${SITE_CONFIG.github}`,
    `Email : ${SITE_CONFIG.email}`,
    "Use the Contact section for contact options."
  ]

};


function addTerminalLine(text, className = "") {
  if (!terminalScreen) return;

  const paragraph = document.createElement("p");

  if (className) {
    paragraph.className = className;
  }

  paragraph.textContent = text;

  terminalScreen.appendChild(paragraph);

  return paragraph;
}


function clearTerminal() {
  if (terminalScreen) {
    terminalScreen.replaceChildren();
  }
}


function runTerminalCommand(rawCommand) {
  const command = rawCommand.trim().toLowerCase();

  if (!command) return;

  addTerminalLine(
    `raihan@lab ~ $ ${rawCommand}`,
    "terminal-command-line"
  );

  if (command === "clear") {
    clearTerminal();
    return;
  }

  const output = terminalCommands[command];

  if (!output) {

    addTerminalLine(
      `Command not found: ${rawCommand}. Type "help" to see available commands.`,
      "terminal-output"
    );

  } else {

    output.forEach((line) => {
      addTerminalLine(line, "terminal-output");
    });

  }

  terminalScreen.scrollTop =
    terminalScreen.scrollHeight;
}


if (terminalForm && terminalInput && terminalScreen) {

  terminalForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const command = terminalInput.value;

    terminalInput.value = "";

    runTerminalCommand(command);

  });

}


if (terminalClear && terminalScreen) {

  terminalClear.addEventListener("click", () => {

    clearTerminal();

    addTerminalLine(
      "Terminal cleared. Type help to continue."
    );

  });

}


/* =========================================
   12. CONTACT FORM
   Uses mailto:
   It does not send messages through a server.
========================================= */

const contactForm = $("#contactForm");
const formNote = $("#formNote");

if (contactForm) {

  contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    if (
      !SITE_CONFIG.email ||
      SITE_CONFIG.email === "your-email@example.com"
    ) {

      if (formNote) {
        formNote.textContent =
          "Setup needed: add your real email address in SITE_CONFIG.";
      }

      return;
    }

    const senderName =
      $("#senderName")?.value.trim() || "";

    const senderEmail =
      $("#senderEmail")?.value.trim() || "";

    const senderMessage =
      $("#senderMessage")?.value.trim() || "";

    const subject =
      `Portfolio enquiry from ${senderName}`;

    const body = [
      `Name: ${senderName}`,
      `Email: ${senderEmail}`,
      "",
      "Message:",
      senderMessage
    ].join("\n");

    const mailtoUrl =
      `mailto:${SITE_CONFIG.email}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    if (formNote) {
      formNote.textContent =
        "Opening your email application. Review the message and press Send there.";
    }

    window.location.href = mailtoUrl;

  });

}


/* =========================================
   13. FOOTER YEAR
========================================= */

const yearElement = $("#year");

if (yearElement) {
  yearElement.textContent =
    new Date().getFullYear();
}


/* =========================================
   14. JOURNEY SCROLL REVEAL
========================================= */

function initializeJourney() {

  const journey = $("#journey");

  if (!journey) return;

  const journeyCards =
    journey.querySelectorAll(".journey-item");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (
    prefersReducedMotion ||
    !("IntersectionObserver" in window)
  ) {

    journeyCards.forEach((card) => {
      card.classList.add("is-visible");
    });

    return;
  }


  journeyCards.forEach((card, index) => {

    card.classList.add("journey-reveal");

    card.style.transitionDelay =
      `${(index % 2) * 100}ms`;

  });


  const journeyObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");

        observer.unobserve(entry.target);

      });

    },
    {
      threshold: 0.08,
      rootMargin: "0px 0px -25px 0px"
    }
  );


  journeyCards.forEach((card) => {
    journeyObserver.observe(card);
  });

}


if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initializeJourney,
    { once: true }
  );
} else {
  initializeJourney();
}


/* =========================================
   15. FINAL INITIALIZATION
========================================= */

document.documentElement.classList.add("js-ready");

console.info(
  "Raihan Network Lab portfolio initialized successfully."
);
