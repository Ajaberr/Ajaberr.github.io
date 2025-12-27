# 🔥 Portfolio Animations Guide

## Implemented Effects

### 1. Neural Network Background
**File**: `src/components/NeuralBackground.jsx`

**What it does**:
- Animated canvas with nodes and edges that pulse and glow
- Nodes react to mouse cursor (repel on hover)
- Lines randomly "activate" with blue glow (simulating neural firing)
- More particles and brighter than before for maximum impact

**How to see it**:
- Background is visible on ALL pages
- Move your mouse around to see nodes react
- Watch for random line activations (blue flashes)

### 2. Glitch Text Effect
**File**: `src/components/GlitchText.jsx`

**What it does**:
- RGB color split effect on hover
- Creates cyberpunk aesthetic
- 200ms micro-glitch burst

**Where it's used**:
- Your name "Ahmed Jaber" on homepage
- Hover over it to trigger the glitch

### 3. Magnetic Buttons
**File**: `src/components/MagneticButton.jsx`

**What it does**:
- Buttons move toward your cursor like magnets
- Spring physics for smooth motion
- Extremely satisfying interaction

**Where it's used**:
- "View My Work" button
- "Contact Me" button

### 4. Terminal Boot-Up Overlay
**File**: `src/components/TerminalOverlay.jsx`

**What it does**:
- Hover over any project/experience card
- Black terminal overlay appears
- Logs type out with green text and glow:
  ```
  > Initializing experience module...
  > Loading organization...
  > Status: ✓ Ready
  ```

**Where it's used**:
- ALL project cards
- ALL experience cards

## How to Test

1. **Neural Background**:
   - Open any page
   - Move mouse around
   - Watch nodes repel from cursor
   - See random line activations

2. **Glitch Effect**:
   - Go to homepage
   - Hover over "Ahmed Jaber"
   - See RGB split glitch

3. **Magnetic Buttons**:
   - Homepage CTA buttons
   - Move cursor near them
   - Watch them pull toward cursor

4. **Terminal Overlay**:
   - Go to Projects page
   - Hover over ANY card
   - Terminal appears with boot logs

## Performance

All effects are optimized:
- Canvas uses requestAnimationFrame
- Effects only trigger on interaction
- No performance impact when idle

## Customization

To adjust intensity:

**Neural Background**: Edit `NeuralBackground.jsx`
- Line 79: Change node density
- Line 102: Change connection distance
- Line 70: Change opacity

**Glitch**: Edit `GlitchText.css`
- Adjust animation duration (currently 0.2s)

**Magnetic**: Edit `MagneticButton.jsx`
- Change `strength` prop (0.1-0.5)

## Stack

- Canvas API for neural network
- Framer Motion for UI animations
- Custom spring physics
- Terminal aesthetics with glow effects
