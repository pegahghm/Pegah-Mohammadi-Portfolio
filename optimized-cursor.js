// ===== OPTIMIZED SIMPLE CURSOR =====
function initializeCustomCursor() {
    // Skip on mobile devices
    if (window.innerWidth <= 768 || 'ontouchstart' in window) {
        return;
    }
    
    // Remove any existing cursors
    const existingCursors = document.querySelectorAll('.modern-cursor, .cursor-trail, .custom-cursor, .custom-cursor-inner, .cursor-bubble, .cursor-shine-dot, .magical-cursor-main, .magical-cursor-glow, .magic-bubble, .simple-cursor, .simple-cursor-glow');
    existingCursors.forEach(cursor => cursor.remove());
    
    // Create simple main cursor
    const cursor = document.createElement('div');
    const cursorGlow = document.createElement('div');
    
    cursor.className = 'simple-cursor';
    cursorGlow.className = 'simple-cursor-glow';
    
    // Optimized cursor with minimal styles
    cursor.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 12px;
        height: 12px;
        background: #f472b6;
        border-radius: 50%;
        pointer-events: none;
        z-index: 2147483647;
        transform: translate(-50%, -50%);
        transition: transform 0.15s ease-out;
        box-shadow: 0 0 15px rgba(244, 114, 182, 0.5);
        will-change: transform;
        mix-blend-mode: difference;
    `;
    
    // Simplified glow effect
    cursorGlow.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        background: radial-gradient(circle, rgba(244, 114, 182, 0.1) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 2147483646;
        transform: translate(-50%, -50%);
        transition: transform 0.2s ease-out;
        will-change: transform;
    `;
    
    document.body.appendChild(cursorGlow);
    document.body.appendChild(cursor);
    
    // Simple bubble trail with limited bubbles
    const bubbles = [];
    const maxBubbles = 8; // Reduced from 20
    let lastBubbleTime = 0;
    
    // Create simple bubble pool
    for (let i = 0; i < maxBubbles; i++) {
        const bubble = document.createElement('div');
        bubble.className = `simple-bubble-${i}`;
        
        bubble.style.cssText = `
            position: fixed;
            width: 6px;
            height: 6px;
            background: rgba(244, 114, 182, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: ${2147483640 - i};
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
            will-change: transform, opacity;
        `;
        
        document.body.appendChild(bubble);
        bubbles.push({
            element: bubble,
            active: false,
            timer: 0
        });
    }
    
    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;
    
    // Optimized mouse tracking with requestAnimationFrame
    let rafId;
    
    function updateCursor() {
        // Direct positioning for main cursor (no smoothing for better responsiveness)
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
        
        // Slight delay for glow (subtle smoothing)
        cursorGlow.style.left = mouseX + 'px';
        cursorGlow.style.top = mouseY + 'px';
        
        rafId = requestAnimationFrame(updateCursor);
    }
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Throttled bubble spawning
        const now = Date.now();
        if (now - lastBubbleTime > 150) { // Spawn every 150ms max
            spawnBubble();
            lastBubbleTime = now;
        }
        
        if (!rafId) {
            updateCursor();
        }
    });
    
    // Simple bubble spawn function
    function spawnBubble() {
        const inactiveBubble = bubbles.find(b => !b.active);
        if (!inactiveBubble) return;
        
        inactiveBubble.active = true;
        inactiveBubble.element.style.left = mouseX + 'px';
        inactiveBubble.element.style.top = mouseY + 'px';
        inactiveBubble.element.style.transform = 'translate(-50%, -50%) scale(0)';
        inactiveBubble.element.style.opacity = '1';
        inactiveBubble.element.style.animation = 'bubbleFloat 1s ease-out forwards';
        
        // Reset after animation
        setTimeout(() => {
            inactiveBubble.active = false;
            inactiveBubble.element.style.opacity = '0';
            inactiveBubble.element.style.animation = 'none';
        }, 1000);
    }
    
    // Simplified hover effects
    const interactiveElements = document.querySelectorAll('a, button, .btn, .nav-link, .project-link, .social-link, input, textarea, [role="button"], .card, .project-card, .service-card, .honor-btn');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            isHovering = true;
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.background = '#ec4899';
            cursorGlow.style.transform = 'translate(-50%, -50%) scale(1.3)';
        });
        
        el.addEventListener('mouseleave', () => {
            isHovering = false;
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = '#f472b6';
            cursorGlow.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
    
    // Simple click effect
    document.addEventListener('mousedown', () => {
        cursor.style.transform = `translate(-50%, -50%) scale(${isHovering ? '1.2' : '0.8'})`;
    });
    
    document.addEventListener('mouseup', () => {
        cursor.style.transform = `translate(-50%, -50%) scale(${isHovering ? '1.5' : '1'})`;
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        cursorGlow.style.opacity = '0';
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    });
    
    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        cursorGlow.style.opacity = '1';
        if (!rafId) {
            updateCursor();
        }
    });
}
