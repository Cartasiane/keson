# Keson

Keson is a minimal static site with two parts:

- **3D viewer** (`index.html`) showcasing a rotating GLTF model with custom materials and lighting built on [Three.js](https://threejs.org/).
- **Calendar** (`cal.html`) providing a dark-themed page to access the public Keson calendar using an Open Web Calendar configuration (`owc.json`).

## 3D Viewer
- Loads `model.glb` with `GLTFLoader` and optimised meshes via `MeshoptDecoder`.
- Applies dynamic color cycling across simple materials.
- Uses `OrbitControls` for interaction and auto-rotates the model.
- Includes a floating button linking to the calendar page.

To view it locally, open `index.html` in a modern browser.

## Calendar Page
- Responsive interface with dark styling and copy-to-clipboard helpers for CalDAV/WebCal URLs.
- The embedded calendar is styled and configured through `owc.json` for the Open Web Calendar service.

Open `cal.html` in a browser to access the calendar or copy integration links for Android, iOS, or other CalDAV clients.

## Repository Structure
```
index.html   # 3D model viewer
cal.html     # Calendar landing page with instructions
owc.json     # Open Web Calendar configuration
model.glb    # GLTF model used by the viewer
```

No build process is required; all assets are served statically from the repository.

