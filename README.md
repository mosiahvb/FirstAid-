# FirstAid  
**Empower Yourself With Simple, Life-Saving Skills**

## What It Is
FirstAid is a web application designed to help users learn the fundamentals of first aid through a structured, three-level learning path. Each level covers progressively more advanced topics — from treating everyday cuts and scrapes to responding to trauma with CPR and bleeding control.

Users can explore pre-set learning paths or curate a custom playlist of instructional videos to learn at their own pace.

---

## Why I Built It
I was raised in a household of first responders and medical professionals — including my great-grandfather, grandmother, mother, and father — who passed down real-world medical knowledge and the importance of being prepared.

I created this site to make essential first aid skills accessible to anyone, especially those who didn’t grow up with the same training. An estimated 31,000 people die each year from preventable blood loss after car accidents — often because no one nearby knows how to help. This project is my way of sharing that life-saving knowledge.

---

## How I Built It
This project is built with a minimal HTML structure — almost everything on the page is dynamically generated using JavaScript. Here’s how the app works:

- JavaScript handles all data loading from local `.json` files  
- Videos are embedded from YouTube  
- Users can create a “Watch Later” playlist using `localStorage`  
- Completed videos can be marked off and removed to track progress  

The application is divided into three educational levels:

1. **Level 1** – Everyday first aid (e.g., cuts, scrapes, burns)  
2. **Level 2** – More serious incidents (e.g., CPR, fractures)  
3. **Level 3** – Trauma response (e.g., bleeding control, emergency care)

The CSS styles the interface, but the core functionality — from injecting content to managing state — is powered by JavaScript.

---

## Challenges I Faced
I began with a simple design sketch to stay on track and prioritized core functionality before polishing the user experience. Along the way, I learned valuable lessons:

- **Modular JavaScript:** I had difficulty creating reusable code modules, especially with asynchronous JSON loading.  
- **Video Performance:** YouTube embeds impacted load time. I'm exploring lazy loading and preview thumbnails.  
- **Iterative Development:** Testing features in small pieces helped me catch bugs early and improve the UX incrementally.  

---

## Tools & Tech Used
- HTML  
- CSS  
- JavaScript  
- JSON  
- YouTube  
- `localStorage`  

---

## What I'd Do Differently
If I were to start over, here’s what I’d change:

1. **Modular JavaScript:** Structure my code for better reuse and maintainability from the beginning.  
2. **Scalable Data Design:** Organize JSON and media content to simplify future updates and expansion.  
3. **Mobile-First Development:** Focus on responsiveness early to avoid retrofitting layout changes.  
4. **Video Optimization:** Use lazy loading and preview thumbnails sooner to reduce lag.  
5. **Accessibility Improvements:** Build with inclusive design in mind — better contrast, keyboard navigation, and screen reader support.  

This project was a meaningful learning experience. I’m proud of how far it’s come — and even more excited about where it’s headed.
