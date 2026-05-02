# Design Patterns — Singleton

## How did using a design pattern improve the code?

The original `Cart` class was functional but uncontrolled — any part of the app could call `new Cart()` and get a separate, isolated cart instance, leading to inconsistent state. Applying the Singleton pattern enforced a single shared instance across the entire application. Now, no matter where `Cart.getInstance()` is called, every caller works with the same cart. The logic inside the class didn't change; the pattern simply added a controlled access point and a guarantee about how many instances can exist.

## When would you choose a design pattern over procedural code?

Use a design pattern when your code has a recurring structural problem that procedural code can't reliably enforce. For example:

- **Singleton** — when a resource (config, cart, database connection) must be shared and consistent globally.
- **Observer** — when multiple parts of the app need to react to the same state change.
- **Factory** — when object creation logic is complex or needs to vary by context.

Procedural code is fine for simple, linear tasks. Reach for a pattern when you need guarantees — about structure, access, or behavior — that procedural code leaves to convention.
