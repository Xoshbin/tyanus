# Architect's Journal

## 2026-02-15 - Soft Deletes for Content | Strategy: Data Integrity & Safety | Action: Added Soft Deletes to Lessons, Exercises, and Screens to prevent accidental data loss and allow restoration. Updated Filament resources to include Trash views and Restore actions.

## 2026-02-16 - User Daily Streak System | Strategy: User Engagement | Action: Implemented a modular streak tracking system via `UserStreak` model and `StreakService`. Hooked into `UserProgressService` to automatically update streaks. Exposed streak data via Inertia middleware for frontend consumption. Added frontend indicator in Navbar and Filament resource for admin management.
