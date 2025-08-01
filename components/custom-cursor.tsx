"use client"

import { useState, useEffect } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleClick = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 300)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <>
      <div
        className={`custom-cursor ${clicked ? "cursor-click" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cursor-magnifier"
        >
          {/* Glass circle */}
          <circle
            cx="13"
            cy="13"
            r="8"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Handle */}
          <path
            d="M19 19L26 26"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Plus sign inside for zoom */}
          <path
            d="M13 10V16M10 13H16"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <style jsx>{`
        .custom-cursor {
          position: fixed;
          width: 32px;
          height: 32px;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: transform 0.2s ease;
          animation: cursor-glow 2s ease-in-out infinite;
        }
        
        .cursor-magnifier {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))
                  drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))
                  drop-shadow(0 0 30px rgba(255, 255, 255, 0.3));
        }
        
        .custom-cursor.cursor-click {
          transform: translate(-50%, -50%) scale(1.5);
        }
        
        .custom-cursor.cursor-click .cursor-magnifier {
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 1))
                  drop-shadow(0 0 40px rgba(255, 255, 255, 0.8))
                  drop-shadow(0 0 60px rgba(255, 255, 255, 0.6));
        }
        
        @keyframes cursor-glow {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.2);
          }
        }
      `}</style>
    </>
  )
}
