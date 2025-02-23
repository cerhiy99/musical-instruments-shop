// "use client"

// import type React from "react"
// import { useState } from "react"

// interface TextLimiterProps {
//   text: string
//   limit: number
//   suffix?: string
// }

export const limitText = (
  text: string,
  limit: number,
  suffix = "..."
): string => {
  if (text.length <= limit) return text;

  const words = text.split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if ((result + words[i]).length <= limit - suffix.length) {
      result += (i > 0 ? " " : "") + words[i];
    } else {
      return result.trim() + " " + suffix;
    }
  }

  return result; // This line should never be reached, but TypeScript requires it
};

// const TextLimiter: React.FC<TextLimiterProps> = ({ text, limit, suffix = "..." }) => {
//   const [isExpanded, setIsExpanded] = useState(false)

//   const toggleExpand = () => {
//     setIsExpanded(!isExpanded)
//   }

//   const limitedText = limitText(text, limit, suffix)

//   return (
//     <div>
//       {isExpanded ? text : limitedText}
//       {text.length > limit && (
//         <button onClick={toggleExpand} className="ml-2 text-blue-500 hover:underline focus:outline-none">
//           {isExpanded ? "Згорнути" : "Читати далі"}
//         </button>
//       )}
//     </div>
//   )
// }
