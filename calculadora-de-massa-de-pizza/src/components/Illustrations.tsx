import React, { useState } from 'react';

// Common visual styles matching the GUSTAVO'S Napoletana design guide:
// Rosso Pizza: #C1121F
// Giallo Napoli: #F2A65A
// Verde Basilico: #386641
// Marrone Legno: #885439
// Bianco Farina: #FAF6F0
// Dark Outline: #1A120B

interface IllustrationProps {
  className?: string;
  width?: number;
  height?: number;
}

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fallback: React.ReactNode;
}

export function FallbackImage({ src, alt, className = '', width, height, fallback }: FallbackImageProps) {
  const [error, setError] = useState(false);
  if (error) {
    return <>{fallback}</>;
  }
  return (
    <img
      src={src}
      className={className}
      style={{ width, height, objectFit: 'contain' }}
      onError={() => setError(true)}
      referrerPolicy="no-referrer"
      alt={alt}
    />
  );
}

// 1. GUSTAVO'S HERO CHARACTER ILLUSTRATION (Pizza Di Nardi Round Logo mascot)
export function PizzaioloGustavo({ className = '', width = 320, height = 320 }: IllustrationProps) {
  const svg = (
    <svg
      viewBox="0 0 450 450"
      width={width}
      height={height}
      className={`mx-auto max-w-full select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Pattern definition for red & white checkered trousers */}
      <defs>
        <pattern id="checkers" width="12" height="12" patternUnits="userSpaceOnUse">
          <rect width="12" height="12" fill="#FAF6F0" />
          <rect width="6" height="6" fill="#C1121F" />
          <rect x="6" y="6" width="6" height="6" fill="#C1121F" />
        </pattern>
      </defs>

      {/* Invisible anchor path for curved branding "PIZZA DI NARDI" at the top */}
      <path id="nardiPath" d="M 65 195 A 185 185 0 0 1 385 195" fill="none" />

      {/* Behind details: 1. Main outer border rings */}
      {/* Outer red ring */}
      <circle cx="225" cy="260" r="145" fill="#B31F1F" stroke="#1A120B" strokeWidth="3" />
      {/* Forest green ring */}
      <circle cx="225" cy="260" r="135" fill="#386641" stroke="#1A120B" strokeWidth="2.5" />
      {/* Golden inner border strip */}
      <circle cx="225" cy="260" r="114" stroke="#F2A65A" strokeWidth="2.5" fill="none" />
      {/* Inner cream circle */}
      <circle cx="225" cy="260" r="110" fill="#FAF0D5" stroke="#1A120B" strokeWidth="2.5" />

      {/* Repeating tomatoes and basil leaves in the green circle band */}
      <g id="tomatoes-and-leaves">
        {/* Tomatoes */}
        <g transform="translate(131, 338)">
          <circle r="9" fill="#C1121F" stroke="#1A120B" strokeWidth="2"/>
          <path d="M-2 -9 C0 -12 2 -12 2 -9 L0 -9 Z" fill="#386641" stroke="#1A120B" strokeWidth="1.5"/>
        </g>
        <g transform="translate(319, 338)">
          <circle r="9" fill="#C1121F" stroke="#1A120B" strokeWidth="2"/>
          <path d="M-2 -9 C0 -12 2 -12 2 -9 L0 -9 Z" fill="#386641" stroke="#1A120B" strokeWidth="1.5"/>
        </g>
        <g transform="translate(348, 260)">
          <circle r="9" fill="#C1121F" stroke="#1A120B" strokeWidth="2"/>
          <path d="M-2 -9 C0 -12 2 -12 2 -9 L0 -9 Z" fill="#386641" stroke="#1A120B" strokeWidth="1.5"/>
        </g>
        <g transform="translate(318, 181)">
          <circle r="9" fill="#C1121F" stroke="#1A120B" strokeWidth="2"/>
          <path d="M-2 -9 C0 -12 2 -12 2 -9 L0 -9 Z" fill="#386641" stroke="#1A120B" strokeWidth="1.5"/>
        </g>
        <g transform="translate(131, 181)">
          <circle r="9" fill="#C1121F" stroke="#1A120B" strokeWidth="2"/>
          <path d="M-2 -9 C0 -12 2 -12 2 -9 L0 -9 Z" fill="#386641" stroke="#1A120B" strokeWidth="1.5"/>
        </g>
        <g transform="translate(102, 260)">
          <circle r="9" fill="#C1121F" stroke="#1A120B" strokeWidth="2"/>
          <path d="M-2 -9 C0 -12 2 -12 2 -9 L0 -9 Z" fill="#386641" stroke="#1A120B" strokeWidth="1.5"/>
        </g>

        {/* Basil Leaves */}
        <path d="M 183 374 C 173 364, 193 360, 195 370 Z" transform="rotate(-30, 183, 374)" fill="#4E8752" stroke="#1A120B" strokeWidth="1.5" />
        <path d="M 335 311 C 325 301, 345 297, 347 307 Z" transform="rotate(30, 335, 311)" fill="#4E8752" stroke="#1A120B" strokeWidth="1.5" />
        <path d="M 339 218 C 329 208, 349 204, 351 214 Z" transform="rotate(80, 339, 218)" fill="#4E8752" stroke="#1A120B" strokeWidth="1.5" />
        <path d="M 225 138 C 215 128, 235 124, 237 134 Z" fill="#4E8752" stroke="#1A120B" strokeWidth="1.5" />
        <path d="M 110 218 C 100 208, 120 204, 122 214 Z" transform="rotate(-80, 110, 218)" fill="#4E8752" stroke="#1A120B" strokeWidth="1.5" />
        <path d="M 110 301 C 100 291, 120 287, 122 297 Z" transform="rotate(-30, 110, 301)" fill="#4E8752" stroke="#1A120B" strokeWidth="1.5" />
      </g>

      {/* CHARACTER - Pizzaiolo Gustavo */}
      {/* 1. Trousers and legs marching */}
      <g id="checkered-trousers">
        {/* Left Leg */}
        <path d="M 195 305 L 175 355 L 180 395 Q 192 395 195 370 L 210 305 Z" fill="url(#checkers)" stroke="#1A120B" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Right Leg */}
        <path d="M 235 305 L 275 355 L 305 385 Q 315 375 292 350 L 250 305 Z" fill="url(#checkers)" stroke="#1A120B" strokeWidth="2.5" strokeLinejoin="round" />
      </g>

      {/* 2. Red sneakers */}
      <g id="red-sneakers">
        {/* Left Sneaker */}
        <path d="M 175 395 Q 160 400 162 420 Q 165 430 185 430 L 200 430 Q 200 415 195 395 Z" fill="#C1121F" stroke="#1A120B" strokeWidth="2.2" />
        <path d="M 160 426 L 202 426 Q 202 431 200 431 L 164 431 Z" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.5" />
        <path d="M 162 412 Q 168 410 174 420 L 160 425 Z" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.5" />
        <path d="M 180 400 L 186 405" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />

        {/* Right Sneaker */}
        <path d="M 305 382 Q 317 392 339 408 Q 349 415 339 422 L 322 415 Q 309 405 303 385 Z" fill="#C1121F" stroke="#1A120B" strokeWidth="2.2" />
        <path d="M 321 413 L 341 421 Q 338 426 335 423 L 316 414 Z" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.5" />
        <path d="M 335 410 Q 339 415 335 420 L 341 415 Z" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.5" />
        <path d="M 312 392 L 319 395" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* 3. White Jacket / Torso */}
      <g id="chef-jacket">
        <path d="M 190 205 L 180 305 L 255 305 L 250 205 Z" fill="#FFFFFF" stroke="#1A120B" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Double-breasted buttons */}
        <circle cx="210" cy="230" r="3" fill="#1A120B" />
        <circle cx="210" cy="255" r="3" fill="#1A120B" />
        <circle cx="210" cy="280" r="3" fill="#1A120B" />
        <circle cx="235" cy="230" r="3" fill="#1A120B" />
        <circle cx="235" cy="255" r="3" fill="#1A120B" />
        <circle cx="235" cy="280" r="3" fill="#1A120B" />
      </g>

      {/* 4. Arms & Hand Gesturing */}
      <g id="arms-and-peel">
        {/* Peel handle stick */}
        <path d="M 110 268 L 190 308" stroke="#885439" strokeWidth="6" strokeLinecap="round" />
        <path d="M 110 268 L 190 308" stroke="#1A120B" strokeWidth="2.2" />
        {/* Scoop paddle */}
        <path d="M 180 302 Q 165 327, 192 352 Q 235 365, 250 327 Q 230 297, 180 302 Z" fill="#F2A65A" stroke="#1A120B" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Brand text: Pizzaiolo Gustavo inside peel */}
        <g transform="translate(178, 328) rotate(22)">
          <text fill="#660708" fontFamily="'Brush Script MT', 'Comic Sans MS', cursive" fontSize="10" fontWeight="900" fontStyle="italic">Pizzaiolo</text>
          <text x="6" y="10" fill="#660708" fontFamily="'Brush Script MT', 'Comic Sans MS', cursive" fontSize="10" fontWeight="900" fontStyle="italic">Gustavo</text>
        </g>

        {/* Right sleeve holding peel stick */}
        <path d="M 190 210 L 155 250 L 165 258 L 195 220" fill="#FFFFFF" stroke="#1A120B" strokeWidth="2.5" />
        {/* Forearm and hand holding stick */}
        <path d="M 160 254 L 168 290" stroke="#FAF0D5" strokeWidth="10" strokeLinecap="round" />
        <path d="M 160 254 L 168 290" stroke="#1A120B" strokeWidth="2.5" fill="none" />
        <circle cx="168" cy="290" r="7.5" fill="#FAF0D5" stroke="#1A120B" strokeWidth="2" />

        {/* Left welded sleeve extending up-right */}
        <path d="M 250 210 L 295 240 L 285 250 L 245 222" fill="#FFFFFF" stroke="#1A120B" strokeWidth="2.5" />
        {/* Left forearm */}
        <path d="M 288 245 L 328 215" stroke="#FAF0D5" strokeWidth="10" strokeLinecap="round" />
        <path d="M 288 245 L 328 215" stroke="#1A120B" strokeWidth="2.5" fill="none" />
        {/* Outstretched open welcoming palm hand */}
        <path d="M 328 215 C 335 210, 345 208, 350 205 C 355 202, 355 212, 345 218 C 338 222, 332 225, 328 220 Z" fill="#FAF0D5" stroke="#1A120B" strokeWidth="2" />
        {/* Dust specks */}
        <circle cx="340" cy="198" r="1.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="355" cy="195" r="1" fill="#FFFFFF" opacity="0.8" />
        <circle cx="348" cy="202" r="1.2" fill="#FFFFFF" opacity="0.8" />

        {/* Italian Flag shoulder patch */}
        <g transform="translate(262, 212) rotate(32)">
          <rect width="14" height="9" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1" />
          <rect width="4.7" height="9" fill="#386641" />
          <rect x="9.3" width="4.7" height="9" fill="#C1121F" />
        </g>
      </g>

      {/* 5. Red Neckerchief (Scarf) */}
      <g id="scarf">
        <path d="M 200 198 Q 220 215 240 198 Q 235 188 220 192 Q 205 188 200 198 Z" fill="#C1121F" stroke="#1A120B" strokeWidth="2.5" />
        {/* Knot Ribbons */}
        <path d="M 220 202 Q 210 220 216 226 L 222 202 Z" fill="#C1121F" stroke="#1A120B" strokeWidth="2" />
        <path d="M 220 202 Q 230 220 224 226 L 218 202 Z" fill="#C1121F" stroke="#1A120B" strokeWidth="2" />
      </g>

      {/* 6. Bald Happy Head & Facial Portrait */}
      <g id="head-and-face">
        <path d="M 195 160 C 180 145, 185 110, 220 105 C 255 110, 260 145, 245 160 C 240 183, 200 183, 195 160 Z" fill="#FAF0D5" stroke="#1A120B" strokeWidth="2.5" strokeLinejoin="round" />
        {/* Ears */}
        <path d="M 190 142 C 183 140, 183 150, 190 152 Z" fill="#FAF0D5" stroke="#1A120B" strokeWidth="2" />
        <path d="M 250 142 C 257 140, 257 150, 250 152 Z" fill="#FAF0D5" stroke="#1A120B" strokeWidth="2" />
        {/* Happy wide cartoon eyes */}
        <ellipse cx="212" cy="140" rx="5" ry="7" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.8" />
        <circle cx="212" cy="140" r="2.5" fill="#1A120B" />
        <ellipse cx="234" cy="140" rx="5" ry="7" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.8" />
        <circle cx="234" cy="140" r="2.5" fill="#1A120B" />
        {/* Eyebrows */}
        <path d="M 204 130 Q 212 125 219 130" stroke="#1A120B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 227 130 Q 235 125 242 130" stroke="#1A120B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Excited wide laugh/smile */}
        <path d="M 206 155 C 206 178, 238 178, 238 155 Z" fill="#660708" stroke="#1A120B" strokeWidth="2.5" />
        <path d="M 207 156 Q 222 163, 237 156" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 215 170 C 222 166, 230 166, 222 170 Z" fill="#C1121F" />
        {/* Nose */}
        <path d="M 221 138 Q 218 145 221 146" stroke="#1A120B" strokeWidth="2" strokeLinecap="round" fill="none" />
      </g>

      {/* CURVED STRAP BANNER (Pizzaria Artesanal Napoletana) */}
      <g id="banner-strap">
        {/* Ribbon swallowtail tails layout */}
        <path d="M 115 198 L 120 185 A 136 136 0 0 1 330 185 L 335 198 L 325 204 A 118 118 0 0 0 125 204 Z" fill="#FFF4D4" stroke="#1A120B" strokeWidth="2.5" strokeLinejoin="round" />
        
        {/* Text path definition for letter curves */}
        <path id="bannerPath" d="M 125 180 A 132 132 0 0 1 325 180" fill="none" />
        <text fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="10.5" fill="#42200F" textAnchor="middle">
          <textPath href="#bannerPath" startOffset="50%">Pizzaria Artesanal Napoletana</textPath>
        </text>
      </g>

      {/* LARGE BRAND ARC TEXT (PIZZA DI NARDI) */}
      <text fontFamily="'Impact', 'Arial Black', sans-serif" fontWeight="900" fontSize="33" fill="#3D1A16" textAnchor="middle" letterSpacing="1.5">
        <textPath href="#nardiPath" startOffset="50%">PIZZA DI NARDI</textPath>
      </text>
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/pizzaiolo_gustavo.png"
      alt="Pizza Di Nardi"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 2. QUANTIDADE DE DISCOS / BOLAS (Dough Balls Resting - Stack of flat circular pizza dough discs)
export function IllusDiscos({ className = '', width = 120, height = 70 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 160 160" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft shadow at the bottom */}
      <ellipse cx="80" cy="132" rx="55" ry="11" fill="#D3DCE5" opacity="0.8" />

      {/* Stack of 11 staggered pizza dough discs (from bottom to top) */}
      {/* Disc 1 (Bottom) */}
      <g>
        <path d="M 28 122 A 52 17 0 0 0 132 122 L 132 128 A 52 17 0 0 1 28 128 Z" fill="#DCCFB9" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="80" cy="122" rx="52" ry="17" fill="#FAF0D5" stroke="#1A120B" strokeWidth="1.5" />
      </g>

      {/* Disc 2 */}
      <g>
        <path d="M 27 116 A 52 17 0 0 0 131 116 L 131 122 A 52 17 0 0 1 27 122 Z" fill="#DCCFB9" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="79" cy="116" rx="52" ry="17" fill="#FAF0D5" stroke="#1A120B" strokeWidth="1.5" />
      </g>

      {/* Disc 3 */}
      <g>
        <path d="M 29 110 A 52 17 0 0 0 133 110 L 133 116 A 52 17 0 0 1 29 116 Z" fill="#DCCFB9" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="81" cy="110" rx="52" ry="17" fill="#FAF0D5" stroke="#1A120B" strokeWidth="1.5" />
      </g>

      {/* Disc 4 */}
      <g>
        <path d="M 26 104 A 52 17 0 0 0 130 104 L 130 110 A 52 17 0 0 1 26 110 Z" fill="#DCCFB9" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="78" cy="104" rx="52" ry="17" fill="#FAF0D5" stroke="#1A120B" strokeWidth="1.5" />
      </g>

      {/* Disc 5 */}
      <g>
        <path d="M 28 98 A 52 17 0 0 0 132 98 L 132 104 A 52 17 0 0 1 28 104 Z" fill="#DCCFB9" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="80" cy="98" rx="52" ry="17" fill="#FAF0D5" stroke="#1A120B" strokeWidth="1.5" />
      </g>

      {/* Disc 6 */}
      <g>
        <path d="M 30 92 A 52 17 0 0 0 134 92 L 134 98 A 52 17 0 0 1 30 98 Z" fill="#DCCFB9" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="82" cy="92" rx="52" ry="17" fill="#FAF0D5" stroke="#1A120B" strokeWidth="1.5" />
      </g>

      {/* Disc 7 */}
      <g>
        <path d="M 27 86 A 52 17 0 0 0 131 86 L 131 92 A 52 17 0 0 1 27 92 Z" fill="#DCCFB9" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="79" cy="86" rx="52" ry="17" fill="#FAF0D5" stroke="#1A120B" strokeWidth="1.5" />
      </g>

      {/* Disc 8 */}
      <g>
        <path d="M 29 80 A 52 17 0 0 0 133 80 L 133 86 A 52 17 0 0 1 29 86 Z" fill="#DCCFB9" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="81" cy="80" rx="52" ry="17" fill="#FAF0D5" stroke="#1A120B" strokeWidth="1.5" />
      </g>

      {/* Disc 9 */}
      <g>
        <path d="M 26 74 A 52 17 0 0 0 130 74 L 130 80 A 52 17 0 0 1 26 80 Z" fill="#DCCFB9" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="78" cy="74" rx="52" ry="17" fill="#FAF0D5" stroke="#1A120B" strokeWidth="1.5" />
      </g>

      {/* Disc 10 */}
      <g>
        <path d="M 28 68 A 52 17 0 0 0 132 68 L 132 74 A 52 17 0 0 1 28 74 Z" fill="#DCCFB9" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="80" cy="68" rx="52" ry="17" fill="#FAF0D5" stroke="#1A120B" strokeWidth="1.5" />
      </g>

      {/* Disc 11 (Top-most with fermentation craters and flour dusting) */}
      <g>
        {/* Shaded vertical edge */}
        <path d="M 28 62 A 52 17 0 0 0 132 62 L 132 68 A 52 17 0 0 1 28 68 Z" fill="#D0C2AB" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        
        {/* Creamy white Top Surface */}
        <ellipse cx="80" cy="62" rx="52" ry="17" fill="#FCEFD8" stroke="#1A120B" strokeWidth="1.5" />

        {/* Fermentation bubbles/spots */}
        <ellipse cx="48" cy="58" rx="2.5" ry="1.5" fill="#CBB696" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="64" cy="53" rx="3.5" ry="2" fill="#CBB696" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="96" cy="55" rx="3" ry="1.8" fill="#CBB696" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="112" cy="61" rx="2.2" ry="1.4" fill="#CBB696" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="86" cy="68" rx="4.2" ry="2.2" fill="#CBB696" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="102" cy="71" rx="2.5" ry="1.5" fill="#CBB696" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="58" cy="67" rx="3.2" ry="1.8" fill="#CBB696" stroke="#1A120B" strokeWidth="1.2" />

        {/* Flour Dust Clouds (Highlighting details) */}
        <path d="M 45 58 C 60 51, 100 51, 115 58 Q 80 62 45 58 Z" fill="#FFFFFF" opacity="0.65" />
        <path d="M 52 64 C 65 59, 95 59, 108 64 Q 80 68 52 64 Z" fill="#FFFFFF" opacity="0.45" />

        {/* Splattered small loose flour specks */}
        <circle cx="75" cy="55" r="1.3" fill="#FFFFFF" opacity="0.9" />
        <circle cx="82" cy="58" r="0.9" fill="#FFFFFF" opacity="0.8" />
        <circle cx="88" cy="52" r="1.1" fill="#FFFFFF" opacity="0.9" />
        <circle cx="92" cy="56" r="0.7" fill="#FFFFFF" opacity="0.7" />
        <circle cx="70" cy="59" r="1.2" fill="#FFFFFF" opacity="0.85" />
        <circle cx="78" cy="62" r="0.9" fill="#FFFFFF" opacity="0.9" />
        <circle cx="85" cy="64" r="1.5" fill="#FFFFFF" opacity="0.8" />
        <circle cx="90" cy="61" r="1.1" fill="#FFFFFF" opacity="0.75" />
        <circle cx="95" cy="63" r="0.9" fill="#FFFFFF" opacity="0.85" />
        <circle cx="62" cy="56" r="1.0" fill="#FFFFFF" opacity="0.75" />
        <circle cx="68" cy="52" r="0.8" fill="#FFFFFF" opacity="0.8" />
        <circle cx="106" cy="59" r="1.2" fill="#FFFFFF" opacity="0.7" />
        <circle cx="101" cy="53" r="0.9" fill="#FFFFFF" opacity="0.85" />
      </g>
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/discos.png"
      alt="Discos de Massa"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 3. PESO DE CADA BOLA (Dough on Scale - Digital Kitchen Scale with exact 250g weight value)
export function IllusPeso({ className = '', width = 120, height = 70 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 160 160" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft floor shadow */}
      <ellipse cx="80" cy="138" rx="55" ry="9" fill="#D3DCE5" opacity="0.75" />

      {/* Main scale base housing */}
      {/* Lower beveled shadow/rim of housing */}
      <path
        d="M 28 118 C 28 136, 132 136, 132 118 L 132 124 C 132 142, 28 142, 28 124 Z"
        fill="#C9D3DC"
        stroke="#1A120B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Front panel & Side housing */}
      <path
        d="M 28 92 C 28 116, 32 122, 34 124 C 42 136, 118 136, 126 124 C 128 122, 132 116, 132 92 Z"
        fill="#F0F4F8"
        stroke="#1A120B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Slanted upper-front platform rim */}
      <ellipse cx="80" cy="85" rx="52" ry="18" fill="#D9E2EC" stroke="#1A120B" strokeWidth="2.2" />
      <ellipse cx="80" cy="81" rx="52" ry="18" fill="#FBFDFF" stroke="#1A120B" strokeWidth="2.2" />

      {/* Weighing round plate (metallic top disk) */}
      <ellipse cx="80" cy="74" rx="44" ry="14" fill="#D8E3ED" stroke="#1A120B" strokeWidth="2" />
      <ellipse cx="80" cy="71" rx="44" ry="14" fill="#F0F4F8" stroke="#1A120B" strokeWidth="2" />

      {/* Plump Round Dough Ball */}
      <g id="scale-dough-ball">
        {/* Shadow base on plate */}
        <ellipse cx="80" cy="68" rx="28" ry="10" fill="#D9C9B4" opacity="0.6" />
        
        {/* main dome of dough ball */}
        <path
          d="M 50 63 C 50 26, 110 26, 110 63 C 110 75, 50 75, 50 63 Z"
          fill="#FAF0D5"
          stroke="#1A120B"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        
        {/* Bottom creem shaded zone */}
        <path
          d="M 51 63 C 51 68, 109 68, 109 63 C 109 72, 51 72, 51 63 Z"
          fill="#E8DCBF"
          opacity="0.8"
        />

        {/* Soft white flour dust cloud highlight */}
        <path
          d="M 64 47 C 72 38, 88 38, 96 47 Q 80 52 64 47 Z"
          fill="#FFFFFF"
          opacity="0.75"
        />
        <path
          d="M 70 51 C 76 46, 84 46, 90 51 Q 80 54 70 51 Z"
          fill="#FFFFFF"
          opacity="0.55"
        />

        {/* Flour details */}
        <circle cx="76" cy="46" r="1" fill="#FFFFFF" opacity="0.9" />
        <circle cx="84" cy="48" r="0.8" fill="#FFFFFF" opacity="0.85" />
        <circle cx="80" cy="44" r="1.2" fill="#FFFFFF" opacity="0.9" />
      </g>

      {/* Front LCD Screen & Panel Details */}
      <g id="scale-lcd">
        {/* LCD outer casing frame */}
        <rect x="52" y="103" width="56" height="18" rx="3" fill="#DFE4EA" stroke="#1A120B" strokeWidth="2" />
        {/* LCD screen inner background */}
        <rect x="54" y="105" width="52" height="14" rx="1.5" fill="#E6EDE7" stroke="#1A120B" strokeWidth="1" />
        
        {/* digital numbers background guides */}
        <text x="70" y="116" fontFamily="'Courier New', Courier, monospace" fontWeight="900" fontSize="13" fill="#D3DAD2" textAnchor="middle" opacity="0.15">8</text>
        <text x="81" y="116" fontFamily="'Courier New', Courier, monospace" fontWeight="900" fontSize="13" fill="#D3DAD2" textAnchor="middle" opacity="0.15">8</text>
        <text x="92" y="116" fontFamily="'Courier New', Courier, monospace" fontWeight="900" fontSize="13" fill="#D3DAD2" textAnchor="middle" opacity="0.15">8</text>
        
        {/* Active digital lit segments */}
        {/* "2" */}
        <text x="70" y="116.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="905" fontSize="12.5" fill="#1C2F15" textAnchor="middle" letterSpacing="0">2</text>
        {/* "5" */}
        <text x="81" y="116.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="905" fontSize="12.5" fill="#1C2F15" textAnchor="middle" letterSpacing="0">5</text>
        {/* "0" */}
        <text x="92" y="116.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="905" fontSize="12.5" fill="#1C2F15" textAnchor="middle" letterSpacing="0">0</text>
        {/* unit "g" */}
        <text x="101" y="116.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="8" fill="#1C2F15" textAnchor="middle" letterSpacing="0">g</text>
      </g>

      {/* Casing Buttons */}
      <g id="scale-buttons">
        {/* Left button */}
        <circle cx="41" cy="112" r="5" fill="#D5DEE6" stroke="#1A120B" strokeWidth="2" />
        <circle cx="41" cy="111" r="3.5" fill="#F1F5F9" />
        {/* Right button */}
        <circle cx="119" cy="112" r="5" fill="#D5DEE6" stroke="#1A120B" strokeWidth="2" />
        <circle cx="119" cy="111" r="3.5" fill="#F1F5F9" />
      </g>
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/peso.png"
      alt="Peso da Bola de Massa"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 4. PORCENTAGEM DE HIDRATAÇÃO (Water Measuring Cup on Scale - Beaker with 700ml water sitting on digital scale)
export function IllusHidratacao({ className = '', width = 120, height = 70 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 160 160" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft floor shadow */}
      <ellipse cx="80" cy="138" rx="55" ry="9" fill="#D3DCE5" opacity="0.75" />

      {/* Main scale base housing */}
      {/* Lower beveled shadow/rim of housing */}
      <path
        d="M 28 118 C 28 136, 132 136, 132 118 L 132 124 C 132 142, 28 142, 28 124 Z"
        fill="#C9D3DC"
        stroke="#1A120B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Front panel & Side housing */}
      <path
        d="M 28 92 C 28 116, 32 122, 34 124 C 42 136, 118 136, 126 124 C 128 122, 132 116, 132 92 Z"
        fill="#F0F4F8"
        stroke="#1A120B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Slanted upper-front platform rim */}
      <ellipse cx="80" cy="85" rx="52" ry="18" fill="#D9E2EC" stroke="#1A120B" strokeWidth="2.2" />
      <ellipse cx="80" cy="81" rx="52" ry="18" fill="#FBFDFF" stroke="#1A120B" strokeWidth="2.2" />

      {/* Weighing round plate (metallic top disk) */}
      <ellipse cx="80" cy="74" rx="44" ry="14" fill="#D8E3ED" stroke="#1A120B" strokeWidth="2" />
      <ellipse cx="80" cy="71" rx="44" ry="14" fill="#F0F4F8" stroke="#1A120B" strokeWidth="2" />

      {/* Measuring Cup Handle (behind front wall but in front of base) */}
      <path
        d="M 97 38 C 111 36, 115 47, 107 58 C 102 66, 95 68, 93 68 C 91.5 68, 91 67, 91 65 C 93 65, 99 63, 101 56 C 105 48, 102 42, 95 43 Z"
        fill="#E6EFF5"
        stroke="#1A120B"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />

      {/* Water body inside Beaker (under top glass layers) */}
      {/* Back/lower of the fluid */}
      <g id="glass-water">
        {/* Liquid block */}
        <path
          d="M 61 70 C 61 74.5, 91 74.5, 91 70 L 94 39 C 94 39, 94 39, 94 39 C 94 39, 77.5 39, 58 39 L 61 70 Z"
          fill="#A2DAF2"
          opacity="0.85"
        />
        {/* Top ellipse surface of water */}
        <ellipse cx="76.5" cy="39" rx="18" ry="5.5" fill="#C4ECFF" stroke="#5EAAD0" strokeWidth="1.2" />
      </g>

      {/* Beaker Glass Body */}
      <path
        d="M 60 70 L 54 28 C 52 28, 51 27, 54 25 C 56.5 23.5, 60 25, 62 25 C 69 20.5, 87 20.5, 94 25 L 96 28 L 90 70 C 90 75, 60 75, 60 70 Z"
        fill="#FFFFFF"
        fillOpacity="0.2"
        stroke="#1A120B"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      
      {/* Beaker opening inner back rim */}
      <ellipse cx="78" cy="25" rx="19.5" ry="6" fill="none" stroke="#1A120B" strokeWidth="1.8" />

      {/* Liquid Surface Highlights */}
      <ellipse cx="76.5" cy="38" rx="15" ry="3.5" fill="#FFFFFF" opacity="0.6" />

      {/* Milliliter & Oz Ticks & Markings */}
      <g id="beaker-markings" opacity="0.8">
        {/* ml text */}
        <text x="73" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="4.5" fill="#587A9A" textAnchor="end">ml</text>
        {/* oz text */}
        <text x="80" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="4.5" fill="#587A9A" textAnchor="start">oz</text>
        
        {/* Center vertical measuring ruler line */}
        <line x1="76.5" y1="32" x2="76.5" y2="68" stroke="#587A9A" strokeWidth="0.8" />

        {/* LEFT TICKS & VALUES (ml) */}
        {/* 400 ml */}
        <line x1="71" y1="37" x2="76.5" y2="37" stroke="#587A9A" strokeWidth="1" />
        <text x="69" y="38" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.5" fill="#587A9A" textAnchor="end">400</text>
        
        {/* 300 ml */}
        <line x1="71.5" y1="44" x2="76.5" y2="44" stroke="#587A9A" strokeWidth="1" />
        <text x="69.5" y="45" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.5" fill="#587A9A" textAnchor="end">300</text>

        {/* 200 ml */}
        <line x1="72" y1="51" x2="76.5" y2="51" stroke="#587A9A" strokeWidth="1" />
        <text x="70" y="52" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.5" fill="#587A9A" textAnchor="end">200</text>

        {/* 100 ml */}
        <line x1="72.5" y1="58" x2="76.5" y2="58" stroke="#587A9A" strokeWidth="1" />
        <text x="70.5" y="59" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.5" fill="#587A9A" textAnchor="end">100</text>

        {/* 0 ml */}
        <line x1="73" y1="65" x2="76.5" y2="65" stroke="#587A9A" strokeWidth="1" />
        <text x="71" y="66" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.5" fill="#587A9A" textAnchor="end">0</text>


        {/* RIGHT TICKS & VALUES (oz / ml specials) */}
        {/* 26 oz */}
        <line x1="76.5" y1="37" x2="82" y2="37" stroke="#587A9A" strokeWidth="1" />
        <text x="84" y="38" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.5" fill="#587A9A" textAnchor="start">26</text>

        {/* 700ml Level Special Value text matching the image */}
        <text x="84" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4" fill="#3A6080" stroke="#C4ECFF" strokeWidth="1.2" paintOrder="stroke fill" textAnchor="start">700ml</text>
        <line x1="76.5" y1="42.5" x2="82" y2="42.5" stroke="#255577" strokeWidth="1.2" />

        {/* 12 oz */}
        <line x1="76.5" y1="48" x2="81.5" y2="48" stroke="#587A9A" strokeWidth="1" />
        <text x="83.5" y="49" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.5" fill="#587A9A" textAnchor="start">12</text>

        {/* 8 oz */}
        <line x1="76.5" y1="54" x2="81" y2="54" stroke="#587A9A" strokeWidth="1" />
        <text x="83" y="55" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.5" fill="#587A9A" textAnchor="start">8</text>

        {/* 6 oz */}
        <line x1="76.5" y1="61" x2="80.5" y2="61" stroke="#587A9A" strokeWidth="1" />
        <text x="82.5" y="62" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.5" fill="#587A9A" textAnchor="start">6</text>
      </g>

      {/* Glass Reflection Highlight overlays */}
      <path
        d="M 58 32 C 58 32, 60 48, 63 68"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path
        d="M 88 30 C 88 30, 86 48, 83 62"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.3"
      />

      {/* Front LCD Screen & Panel Details */}
      <g id="scale-lcd">
        {/* LCD outer casing frame */}
        <rect x="52" y="103" width="56" height="18" rx="3" fill="#DFE4EA" stroke="#1A120B" strokeWidth="2" />
        {/* LCD screen inner background */}
        <rect x="54" y="105" width="52" height="14" rx="1.5" fill="#E6EDE7" stroke="#1A120B" strokeWidth="1" />
        
        {/* digital numbers background guides */}
        <text x="70" y="116" fontFamily="'Courier New', Courier, monospace" fontWeight="900" fontSize="13" fill="#D3DAD2" textAnchor="middle" opacity="0.15">8</text>
        <text x="81" y="116" fontFamily="'Courier New', Courier, monospace" fontWeight="900" fontSize="13" fill="#D3DAD2" textAnchor="middle" opacity="0.15">8</text>
        <text x="92" y="116" fontFamily="'Courier New', Courier, monospace" fontWeight="900" fontSize="13" fill="#D3DAD2" textAnchor="middle" opacity="0.15">8</text>
        
        {/* Active digital lit segments */}
        {/* "7" */}
        <text x="70" y="116.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="905" fontSize="12.5" fill="#1C2F15" textAnchor="middle" letterSpacing="0">7</text>
        {/* "0" */}
        <text x="81" y="116.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="905" fontSize="12.5" fill="#1C2F15" textAnchor="middle" letterSpacing="0">0</text>
        {/* "0" */}
        <text x="92" y="116.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="905" fontSize="12.5" fill="#1C2F15" textAnchor="middle" letterSpacing="0">0</text>
        {/* unit "g" */}
        <text x="101" y="116.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="8" fill="#1C2F15" textAnchor="middle" letterSpacing="0">g</text>
      </g>

      {/* Casing Buttons */}
      <g id="scale-buttons">
        {/* Left button */}
        <circle cx="41" cy="112" r="5" fill="#D5DEE6" stroke="#1A120B" strokeWidth="2" />
        <circle cx="41" cy="111" r="3.5" fill="#F1F5F9" />
        {/* Right button */}
        <circle cx="119" cy="112" r="5" fill="#D5DEE6" stroke="#1A120B" strokeWidth="2" />
        <circle cx="119" cy="111" r="3.5" fill="#F1F5F9" />
      </g>
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/agua.png"
      alt="Hidratação da Massa"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 5. USAR AZEITE DE OLIVA EXTRA VIRGEM? (Olive Oil Pot / Cruet & Olives)
export function IllusAzeitePanel({ className = '', width = 120, height = 70 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 160 160" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Soft floor shadow */}
      <ellipse cx="80" cy="144" rx="24" ry="4" fill="#D3DCE5" opacity="0.6" />

      {/* Bottle Outline & Base Glass Fill */}
      <path
        d="M 72 38 L 88 38 C 88 48, 88 52, 94 56 C 104 65, 104 74, 104 134 C 104 139, 56 139, 56 134 C 56 74, 56 65, 66 56 C 72 52, 72 48, 72 38 Z"
        fill="#83751D"
        stroke="#1A120B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Wax / Foil Capsule with Drips */}
      <path
        d="M 70 14 C 70 11, 90 11, 90 14 L 91 30 C 91 32, 89 32, 88 34 C 86.5 36.5, 85 39, 81.5 35 C 79.5 33, 78.5 35, 78 37 C 77.5 39, 75.5 34, 75 32 C 73 29, 69 31, 69 30 Z"
        fill="#4A341E"
        stroke="#1A120B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      {/* Wax cap shadow curve and highlight detail */}
      <path d="M 72 15 C 75 14, 85 14, 88 15" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.3" fill="none" />

      {/* Glass Bottle specular highlights */}
      <path
        d="M 61 68 C 61 68, 59 86, 59 130 C 59 134, 62 135, 62 135"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.45"
        fill="none"
      />
      <path
        d="M 71 50 C 71 50, 68 54, 63 60"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.35"
        fill="none"
      />
      <ellipse cx="80" cy="134" rx="20" ry="3" fill="#6A5C10" opacity="0.6" />

      {/* Label Base */}
      <path
        d="M 64 74 C 64 71.5, 71 72, 80 72 C 89 72, 96 71.5, 96 74 C 99 78, 100 84, 98 123 Q 80 126 62 123 C 60 84, 61 78, 64 74 Z"
        fill="#FAF3E6"
        stroke="#1A120B"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      
      {/* Internal Fine Border */}
      <path
        d="M 66 76 C 66 74, 71 74.5, 80 74.5 C 89 74.5, 94 74, 94 76 C 96.5 80, 97.5 85, 95.5 120 Q 80 123 64.5 120 C 62.5 85, 63.5 80, 66 76 Z"
        fill="none"
        stroke="#9B8F3D"
        strokeWidth="0.8"
      />

      {/* Label Tree Logo */}
      <g id="label-tree" opacity="0.95">
        {/* Trunk roots/base */}
        <path
          d="M 77 103 C 77 101, 79 101, 80 101 C 81 101, 83 101, 83 103 Q 80 94 80 90"
          stroke="#524335"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Trunk details and primary branch splits */}
        <path
          d="M 79 102 C 79 97, 75 95, 71 93"
          stroke="#524335"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 81 102 C 81 97, 85 95, 89 93"
          stroke="#524335"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Branch extensions */}
        <path d="M 74 94 Q 72 88 67 87" stroke="#524335" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M 86 94 Q 88 88 93 87" stroke="#524335" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M 80 90 Q 80 82 80 81" stroke="#524335" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M 77 92 Q 80 84 84 84" stroke="#524335" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M 83 92 Q 80 84 76 84" stroke="#524335" strokeWidth="1.2" strokeLinecap="round" fill="none" />

        {/* Olive Leaves */}
        {/* Center top bunch */}
        <path d="M 80 81 C 78 77, 82 77, 80 81 Z" fill="#3D5F43" />
        <path d="M 76 84 C 74 80, 78 80, 76 84 Z" fill="#5F8265" />
        <path d="M 84 84 C 82 80, 86 80, 84 84 Z" fill="#5F8265" />
        {/* Left group */}
        <path d="M 67 87 C 62 84, 63 89, 67 87 Z" fill="#3D5F43" />
        <path d="M 71 89 C 67 86, 68 91, 71 89 Z" fill="#5F8265" />
        {/* Right group */}
        <path d="M 93 87 C 98 84, 97 89, 93 87 Z" fill="#3D5F43" />
        <path d="M 89 89 C 93 86, 92 91, 89 89 Z" fill="#5F8265" />
        {/* Other leaves fill */}
        <path d="M 70 93 C 65 91, 66 96, 70 93 Z" fill="#3D5F43" />
        <path d="M 90 93 C 95 91, 94 96, 90 93 Z" fill="#3D5F43" />

        {/* Olives */}
        {/* Dark Blue Olives */}
        <ellipse cx="69" cy="91" rx="1.8" ry="2.5" fill="#1C2E3F" stroke="#1A120B" strokeWidth="0.6" transform="rotate(-15 69 91)" />
        <ellipse cx="80" cy="85" rx="1.8" ry="2.5" fill="#1C2E3F" stroke="#1A120B" strokeWidth="0.6" transform="rotate(20 80 85)" />
        <ellipse cx="91" cy="90" rx="1.8" ry="2.5" fill="#1C2E3F" stroke="#1A120B" strokeWidth="0.6" transform="rotate(10 91 90)" />

        {/* Sage Green Olives */}
        <ellipse cx="75" cy="86" rx="1.8" ry="2.5" fill="#798A3C" stroke="#1A120B" strokeWidth="0.6" transform="rotate(-5 75 86)" />
        <ellipse cx="85" cy="86" rx="1.8" ry="2.5" fill="#798A3C" stroke="#1A120B" strokeWidth="0.6" transform="rotate(35 85 86)" />
        <ellipse cx="65" cy="89" rx="1.8" ry="2.5" fill="#798A3C" stroke="#1A120B" strokeWidth="0.6" transform="rotate(-40 65 89)" />
        <ellipse cx="95" cy="89" rx="1.8" ry="2.5" fill="#798A3C" stroke="#1A120B" strokeWidth="0.6" transform="rotate(30 95 89)" />
      </g>

      {/* Label Text Details */}
      <g id="label-text">
        <text x="80" y="109" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.6" fill="#1A120B" textAnchor="middle" letterSpacing="0.2">AZEITE DE OLIVA</text>
        <text x="80" y="114" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.4" fill="#1A120B" textAnchor="middle" letterSpacing="0.3">EXTRA VIRGEM</text>
        <text x="80" y="118.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="3.1" fill="#4B3D23" textAnchor="middle">Origem: Itália</text>
      </g>

      {/* Decorative leaf twig tail */}
      <g id="label-decor" opacity="0.8">
        <path d="M 72 121.5 Q 80 122.5 88 121.5" stroke="#4B3D23" strokeWidth="0.6" fill="none" />
        <path d="M 75 121 C 73 119.5, 77 119.5, 75 121 Z" fill="#3D5F43" />
        <path d="M 85 121 C 87 119.5, 83 119.5, 85 121 Z" fill="#3D5F43" />
      </g>
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/azeite.png"
      alt="Usar Azeite de Oliva?"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 6. TEMPO DE FERMENTAÇÃO & MATURAÇÃO (Frigoríficos de Maturação e Controle de Tempo)
export function IllusTempo({ className = '', width = 120, height = 70 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 160 160" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Soft floor shadow */}
      <ellipse cx="83" cy="142" rx="46" ry="6" fill="#D3DCE5" opacity="0.65" />

      {/* UPPER AREA: Group of resting dough balls */}
      <g id="upper-doughs" opacity="0.9">
        <ellipse cx="64" cy="28" rx="8" ry="6" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.8" />
        <ellipse cx="80" cy="27" rx="8.5" ry="6.2" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.8" />
        <ellipse cx="72" cy="29" rx="9" ry="6.5" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.8" />
        <ellipse cx="86" cy="32" rx="10" ry="7.5" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.8" />
      </g>

      {/* UPPER AREA: Big Clock hanging next to dough balls */}
      <g id="upper-clock">
        <circle cx="106" cy="28" r="14.5" fill="#FAF6F0" stroke="#1A120B" strokeWidth="2.2" />
        <circle cx="106" cy="28" r="11" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1" />
        {/* clock hands at 4:00 */}
        <line x1="106" y1="28" x2="106" y2="19" stroke="#1A120B" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="106" y1="28" x2="111.5" y2="32.5" stroke="#1A120B" strokeWidth="1.8" strokeLinecap="round" />
        {/* Clock central node */}
        <circle cx="106" cy="28" r="1" fill="#1A120B" />
        {/* Ticks representation */}
        <line x1="106" y1="17.5" x2="106" y2="19" stroke="#1A120B" strokeWidth="0.8" />
        <line x1="116.5" y1="28" x2="115" y2="28" stroke="#1A120B" strokeWidth="0.8" />
        <line x1="106" y1="38.5" x2="106" y2="37" stroke="#1A120B" strokeWidth="0.8" />
        <line x1="95.5" y1="28" x2="97" y2="28" stroke="#1A120B" strokeWidth="0.8" />
      </g>

      {/* REFRIGERATOR CHAMBER FRAME */}
      <g id="fridge-housing">
        {/* External shadow border */}
        <rect x="37" y="45" width="92" height="90" rx="4" fill="#E2E8F0" stroke="#1A120B" strokeWidth="2.2" />
        {/* Inner panel background */}
        <rect x="41" y="49" width="84" height="82" rx="2" fill="#F1F5F9" stroke="#1A120B" strokeWidth="1.6" />
        {/* Inner glass reflections */}
        <path d="M 43 51 L 81 129" stroke="#FFFFFF" strokeWidth="2" opacity="0.32" strokeLinecap="round" />
        <path d="M 52 51 L 90 129" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.2" strokeLinecap="round" />
        {/* Inner Shelf Wirelines */}
        <line x1="41" y1="89" x2="125" y2="89" stroke="#CBD5E0" strokeWidth="1.5" />
        <line x1="41" y1="119" x2="125" y2="119" stroke="#CBD5E0" strokeWidth="1.5" />
      </g>

      {/* TOP INNER CHAMBER: Control/Meta display area */}
      <g id="inner-display-meta">
        {/* Clock on left */}
        <circle cx="56" cy="62" r="9.5" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.6" />
        <line x1="56" y1="62" x2="56" y2="56.5" stroke="#1A120B" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="56" y1="62" x2="60" y2="65" stroke="#1A120B" strokeWidth="1.5" strokeLinecap="round" />
        {/* Clock ticks */}
        <line x1="56" y1="53" x2="56" y2="54" stroke="#1A120B" strokeWidth="0.8" />
        <line x1="65" y1="62" x2="64" y2="62" stroke="#1A120B" strokeWidth="0.8" />

        {/* Display remaining text metadata */}
        <text x="83" y="55" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.2" fill="#4B5E63" textAnchor="middle" letterSpacing="0.1">TEMPO RESTANTE:</text>
        <text x="83" y="65" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="8.2" fill="#1C2F15" textAnchor="middle">22h:14m</text>
        <text x="83" y="70.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.1" fill="#718096" textAnchor="middle">META: 24h</text>

        {/* Blue Thermometer gauge on right */}
        <path
          d="M 106.5 54.5 C 106.5 52.5, 108.5 52.5, 108.5 54.5 L 108.5 68.5 C 109.8 69.5, 110.5 71.5, 109 73.5 C 107.8 75, 105.2 75, 104 73.5 C 102.5 71.5, 103.2 69.5, 104.5 68.5 Z"
          fill="#FFFFFF"
          stroke="#1A120B"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        {/* Thermometer scale juice */}
        <path d="M 106.5 57 L 106.5 70" stroke="#3182CE" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="106.5" cy="71.5" r="2.2" fill="#3182CE" />
        
        {/* Temperature numerical text markings */}
        <text x="111.5" y="60.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="5.2" fill="#1C2F15" textAnchor="start">4°C/</text>
        <text x="111.5" y="66" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="5.2" fill="#1C2F15" textAnchor="start">39°F</text>
      </g>

      {/* TOP CONTAINER BOX */}
      <g id="top-container-box">
        {/* Box outline */}
        <path d="M 46 76 L 102 76 L 99 92 L 49 92 Z" fill="#FFFFFF" fillOpacity="0.45" stroke="#1A120B" strokeWidth="1.8" strokeLinejoin="round" />
        {/* Box lid blueish trim edge */}
        <polygon points="44,74 104,74 102,77 46,77" fill="#E2E8F0" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        
        {/* Container Handle */}
        <rect x="54" y="80" width="10" height="3" rx="1" fill="#E2E8F0" stroke="#1A120B" strokeWidth="1.2" />

        {/* Resting dough balls in box */}
        <ellipse cx="57" cy="86" rx="8" ry="5.8" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="68" cy="87.5" rx="8.5" ry="6.2" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="80" cy="86" rx="8" ry="5.8" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="91" cy="84" rx="8" ry="5.8" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.2" />

        {/* White label overlay tape: "MASSA EM MATURAÇÃO" */}
        <g id="label-tape-top" transform="rotate(-2 73 85)">
          <rect x="65" y="81.5" width="31" height="7" rx="1" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.8" opacity="0.95" />
          <text x="80.5" y="86.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="2.5" fill="#1A120B" textAnchor="middle">MASSA EM MATURAÇÃO</text>
        </g>
      </g>

      {/* BOTTOM CONTAINER BOX */}
      <g id="bottom-container-box">
        {/* Box outline */}
        <path d="M 46 103 L 102 103 L 99 119 L 49 119 Z" fill="#FFFFFF" fillOpacity="0.45" stroke="#1A120B" strokeWidth="1.8" strokeLinejoin="round" />
        {/* Box lid blueish trim edge */}
        <polygon points="44,101 104,101 102,104 46,104" fill="#E2E8F0" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />

        {/* Container Handle */}
        <rect x="54" y="107" width="10" height="3" rx="1" fill="#E2E8F0" stroke="#1A120B" strokeWidth="1.2" />

        {/* Resting dough balls in box */}
        <ellipse cx="57" cy="113" rx="8" ry="5.8" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="68" cy="114.5" rx="8.5" ry="6.2" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="80" cy="113" rx="8" ry="5.8" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="91" cy="111" rx="8" ry="5.8" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.2" />

        {/* White label overlay tape: "MASSA EM MATURAÇÃO" */}
        <g id="label-tape-bottom" transform="rotate(-2 73 112)">
          <rect x="65" y="108.5" width="31" height="7" rx="1" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.8" opacity="0.95" />
          <text x="80.5" y="113.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="2.5" fill="#1A120B" textAnchor="middle">MASSA EM MATURAÇÃO</text>
        </g>
      </g>

      {/* EXTRA LEFT: 48h loop indicator and line connection */}
      <g id="left-loop-indicator">
        {/* Link line to box */}
        <path d="M 45 84 Q 38 84 37 84" stroke="#8A6042" strokeWidth="1.1" strokeDasharray="2 2" />
        {/* Dotted arc */}
        <path d="M 33 91 A 9 9 0 1 1 33 77" stroke="#8A6042" strokeWidth="1" strokeDasharray="3 1.5" />
        {/* Circular arrows tag */}
        <circle cx="26" cy="84" r="7.5" fill="#FFEFE0" stroke="#1A120B" strokeWidth="1.2" />
        <text x="26" y="86.2" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.2" fill="#1A120B" textAnchor="middle">48h</text>
        {/* Little arrow tip */}
        <path d="M 29.5 77 L 33 80 L 33 76 Z" fill="#8A6042" transform="rotate(30 31 78)" />
      </g>

      {/* EXTRA RIGHT: 72h loop indicator and line connection */}
      <g id="right-loop-indicator">
        {/* Link line to box */}
        <path d="M 103 111 Q 120 111 114 102" stroke="#8A6042" strokeWidth="1.1" strokeDasharray="2 2" fill="none" />
        {/* Dotted arc */}
        <path d="M 125 93 A 9 9 0 1 1 125 107" stroke="#8A6042" strokeWidth="1" strokeDasharray="3 1.5" fill="none" />
        {/* Circular arrows tag */}
        <circle cx="132" cy="100" r="7" fill="#FFEFE0" stroke="#1A120B" strokeWidth="1.2" />
        <text x="132" y="102" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="3.8" fill="#1A120B" textAnchor="middle">72h</text>
        {/* Little arrow tip */}
        <path d="M 127 106.5 L 123.5 103.5 L 123.5 107.5 Z" fill="#8A6042" />
      </g>

      {/* EXTRA LEFT BOTTOM: Magnifier lens showing packed 4 balls */}
      <g id="magnifier-bracket">
        {/* Pointer lines to box */}
        <path d="M 66 84 L 46 100" stroke="#524335" strokeWidth="1.1" opacity="0.65" />
        <path d="M 68 88 L 46 114" stroke="#524335" strokeWidth="1.1" opacity="0.65" />
        
        {/* Magnifying lens circular border */}
        <circle cx="28" cy="107" r="18.5" fill="#F8FAFC" stroke="#524335" strokeWidth="2.2" />
        {/* Four compact dough balls sitting in container matrix within glass */}
        <ellipse cx="20" cy="102.5" rx="5" ry="3.8" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1" />
        <ellipse cx="28" cy="101" rx="5.2" ry="4" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1" />
        <ellipse cx="22.5" cy="110" rx="5.6" ry="4.2" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1" />
        <ellipse cx="30.5" cy="108.5" rx="5.2" ry="4" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1" />

        {/* Matrix guide lines of plastic container floor */}
        <path d="M 13 111 L 43 103" stroke="#CBD5E0" strokeWidth="1" opacity="0.45" />
        <path d="M 18 116 L 38 110" stroke="#CBD5E0" strokeWidth="1" opacity="0.45" />
      </g>

      {/* OUTSIDE BOTTOM ELEMENTS: Sauce Bottle, Salt and larger proofing ball with tape */}
      <g id="outside-elements">
        {/* Miniature Extra Olive Oil Bottle on right */}
        <g id="mini-oil" transform="translate(1, 0)" opacity="0.95">
          <ellipse cx="123" cy="118.5" rx="5" ry="9" fill="#798A3C" stroke="#1A120B" strokeWidth="1.5" />
          <path d="M 123 109.5 L 123 105" stroke="#1A120B" strokeWidth="1.5" />
          <path d="M 123 106.5 L 125 105" stroke="#1A120B" strokeWidth="1" />
          {/* Olive outline on mini bottle */}
          <ellipse cx="123" cy="119.5" rx="1.5" ry="2.2" fill="#1C2E3F" />
        </g>

        {/* Salt Cellar / Small pinch bowl on bottom-center */}
        <g id="mini-salt">
          <path d="M 58 131 C 58 135.5, 67 135.5, 67 131 Z" fill="#D3DCE5" stroke="#1A120B" strokeWidth="1.5" />
          <path d="M 59 130 Q 62.5 125 66 130" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1" />
        </g>

        {/* Separate Proofing ball on bottom-right wrapped with measurement band */}
        <g id="outside-dough-measure" opacity="0.95">
          <ellipse cx="111" cy="126" rx="11" ry="8.8" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.8" />
          {/* Yellow measure tape with marks */}
          <path d="M 101.5 127.5 Q 111.5 133 120.5 127.5" stroke="#F1C40F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Tick segments on gauge */}
          <path d="M 104 129.2 L 104 130.5 M 108 130 L 108 131.5 M 112 130.2 L 112 131.8 M 116 129.8 L 116 131.2" stroke="#4A341E" strokeWidth="0.6" />
        </g>
      </g>
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/maturacao.png"
      alt="Tempo de Fermentação"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 7. CÁLCULO DE PROPORÇÃO / PESO LÍQUIDO HEADER (The Balance Scale scale)
export function IllusKitchenScaleHeader({ className = '', width = 140, height = 70 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 180 90" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Retro Balance Scale */}
      <path d="M 90 35 L 90 75" stroke="#1A120B" strokeWidth="3.5" />
      <path d="M 40 75 L 140 75 L 130 82 L 50 82 Z" fill="#885439" stroke="#1A120B" strokeWidth="2" />
      {/* Main beam */}
      <path d="M 30 35 L 150 35" stroke="#1A120B" strokeWidth="4" strokeLinecap="round" />
      {/* Left scale pan */}
      <path d="M 30 35 L 15 55 Q 30 58 45 55 Z" fill="#F2A65A" stroke="#1A120B" strokeWidth="2" />
      <path d="M 30 35 L 30 53" stroke="#1A120B" strokeWidth="1.5" />
      {/* Right scale pan */}
      <path d="M 150 35 L 135 55 Q 150 58 165 55 Z" fill="#F2A65A" stroke="#1A120B" strokeWidth="2" />
      <path d="M 150 35 L 150 53" stroke="#1A120B" strokeWidth="1.5" />
      {/* Indicator needle */}
      <path d="M 90 35 L 90 18" stroke="#C1121F" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/balanca.png"
      alt="Cálculo de Proporção"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 8. PESOS CALCULADOS (Wooden cutting board with list feel)
export function IllusPesosCalculados({ className = '', width = 120, height = 70 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 160 100" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Board shape */}
      <path d="M 30 15 C 30 10, 40 10, 42 15 L 145 15 C 150 15, 155 20, 155 25 L 155 85 C 155 90, 150 95, 145 95 L 30 95 C 15 95, 10 90, 10 85 L 10 25 C 10 20, 15 15, 30 15 Z" fill="#FAF6F0" stroke="#1A120B" strokeWidth="2.2" />
      {/* Handle hole */}
      <circle cx="20" cy="55" r="5" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.8" />
      {/* Wood pattern stripes */}
      <path d="M 40 16 L 40 94" stroke="#D1C5B5" strokeWidth="1" />
      <path d="M 52 16 L 52 94" stroke="#D1C5B5" strokeWidth="1" />
      {/* Hand Drawn Wheat layout */}
      <path d="M 10 25 C 18 20, 22 29, 30 25" stroke="#386641" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/sal.png"
      alt="Pesos Calculados"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 9. FARINHA (Flour Sack)
export function IllusFarinha({ className = '', width = 45, height = 45 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 160 160" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Soft floor shadow */}
      <ellipse cx="80" cy="144" rx="42" ry="5.5" fill="#D3DCE5" opacity="0.65" />

      {/* Sack Body shape */}
      {/* The sack has a bulbous bottom, a neck collar cinched by rope, and a flared/ruffled top collar. */}
      {/* Back and front main shape */}
      <path
        d="M 66 43 
           C 54 43, 40 50, 36 78 
           C 32 106, 32 131, 35 137 
           C 38 141, 46 142, 80 142
           C 114 142, 122 141, 125 137 
           C 128 131, 128 106, 124 78 
           C 120 50, 106 43, 94 43 
           Z"
        fill="#FAF6F0"
        stroke="#1A120B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Ruffled Crown / Opening Collar at the top */}
      {/* Folds and crowns of fabric above the neck line */}
      <path
         d="M 66 43
            C 58 35, 52 28, 56 22
            C 60 16, 68 18, 72 26
            C 75 16, 82 15, 85 24
            C 88 15, 96 16, 100 22
            C 104 28, 98 35, 94 43
            Q 80 44 66 43 Z"
         fill="#FAF6F0"
         stroke="#1A120B"
         strokeWidth="2.2"
         strokeLinejoin="round"
      />

      {/* Shadow inner fold curves inside the upper ruffle collar */}
      <path d="M 63 32 Q 68 25 70 34" stroke="#D1C5B5" strokeWidth="1.2" fill="none" />
      <path d="M 76 30 Q 80 22 83 32" stroke="#D1C5B5" strokeWidth="1.2" fill="none" />
      <path d="M 88 32 Q 92 24 94 34" stroke="#D1C5B5" strokeWidth="1.2" fill="none" />

      {/* Left and right bottom ear folds (the sack bottom corners that stick out slightly) */}
      <path d="M 36 132 C 32 135, 28 138, 30 141 C 33 143, 42 140, 46 137" stroke="#1A120B" strokeWidth="2.2" fill="#FAF6F0" strokeLinejoin="round" />
      <path d="M 124 132 C 128 135, 132 138, 130 141 C 127 143, 118 140, 114 137" stroke="#1A120B" strokeWidth="2.2" fill="#FAF6F0" strokeLinejoin="round" />

      {/* Sack surface light fabric fold highlights to show volume */}
      <path d="M 44 80 Q 40 105 46 128" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <path d="M 52 70 Q 46 95 50 120" stroke="#E6DFD5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 116 80 Q 120 105 114 128" stroke="#E6DFD5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 108 70 Q 114 95 110 120" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.8" />

      {/* Elegant Double border Oval Label */}
      <g id="brand-label">
        {/* Label background outer ellipse */}
        <ellipse cx="80" cy="94" rx="29" ry="36" fill="#FAFBF7" stroke="#1A120B" strokeWidth="1.8" />
        {/* Inner concentric thin ellipse */}
        <ellipse cx="80" cy="94" rx="26" ry="33" fill="none" stroke="#9B8F3D" strokeWidth="0.8" />
        
        {/* Label Content: Fan pattern of 5 Wheat Ears */}
        <g id="label-wheat" opacity="0.95">
          {/* Middle straight wheat spear */}
          {/* Stem */}
          <line x1="80" y1="91" x2="80" y2="56" stroke="#B8945F" strokeWidth="1.2" />
          {/* Grains on sides */}
          <path d="M 77 62 C 77 60, 79 59, 80 62 L 80 62 C 81 59, 83 60, 83 62" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
          <path d="M 76 66 C 76 64, 78 63, 80 66 L 80 66 C 82 63, 84 64, 84 66" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
          <path d="M 76 70 C 76 68, 78 67, 80 70 L 80 70 C 82 67, 84 68, 84 70" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
          <path d="M 77 74 C 77 72, 79 71, 80 74 L 80 74 C 81 71, 83 72, 83 74" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
          {/* Beard lines */}
          <path d="M 80 56 Q 77 48 75 44" stroke="#B8945F" strokeWidth="0.6" strokeLinecap="round" />
          <path d="M 80 56 Q 83 48 85 44" stroke="#B8945F" strokeWidth="0.6" strokeLinecap="round" />
          <path d="M 80 57 Q 80 47 80 43" stroke="#B8945F" strokeWidth="0.6" strokeLinecap="round" />

          {/* Diagonal 30deg Right Wheat spear */}
          <g transform="rotate(22 80 91)">
            <line x1="80" y1="91" x2="80" y2="58" stroke="#B8945F" strokeWidth="1.2" />
            <path d="M 77 64 C 77 62, 79 61, 80 64 L 80 64 C 81 61, 83 62, 83 64" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
            <path d="M 76 68 C 76 66, 78 65, 80 68 L 80 68 C 82 65, 84 66, 84 68" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
            <path d="M 76 72 C 76 70, 78 69, 80 72 L 80 72 C 82 69, 84 70, 84 72" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
            <path d="M 77 76 C 77 74, 79 73, 80 76 L 80 76 C 81 73, 83 74, 83 76" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
            <path d="M 80 58 Q 77 50 75 46" stroke="#B8945F" strokeWidth="0.6" strokeLinecap="round" />
            <path d="M 80 58 Q 83 50 85 46" stroke="#B8945F" strokeWidth="0.6" strokeLinecap="round" />
          </g>

          {/* Diagonal 30deg Left Wheat spear */}
          <g transform="rotate(-22 80 91)">
            <line x1="80" y1="91" x2="80" y2="58" stroke="#B8945F" strokeWidth="1.2" />
            <path d="M 77 64 C 77 62, 79 61, 80 64 L 80 64 C 81 61, 83 62, 83 64" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
            <path d="M 76 68 C 76 66, 78 65, 80 68 L 80 68 C 82 65, 84 66, 84 68" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
            <path d="M 76 72 C 76 70, 78 69, 80 72 L 80 72 C 82 69, 84 70, 84 72" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
            <path d="M 77 76 C 77 74, 79 73, 80 76 L 80 76 C 81 73, 83 74, 83 76" stroke="#1A120B" strokeWidth="0.7" fill="#D2A66D" />
            <path d="M 80 58 Q 77 50 75 46" stroke="#B8945F" strokeWidth="0.6" strokeLinecap="round" />
            <path d="M 80 58 Q 83 50 85 46" stroke="#B8945F" strokeWidth="0.6" strokeLinecap="round" />
          </g>

          {/* Diagonal 60deg Far-Right Wheat spear */}
          <g transform="rotate(44 80 91)">
            <line x1="80" y1="91" x2="80" y2="61" stroke="#B8945F" strokeWidth="1" />
            <path d="M 77 67 C 77 65, 79 64, 80 67 L 80 67 C 81 64, 83 65, 83 67" stroke="#1A120B" strokeWidth="0.6" fill="#D2A66D" />
            <path d="M 76 71 C 76 69, 78 68, 80 71 L 80 71 C 82 68, 84 69, 84 71" stroke="#1A120B" strokeWidth="0.6" fill="#D2A66D" />
            <path d="M 77 75 C 77 73, 79 72, 80 75 L 80 75 C 81 72, 83 73, 83 75" stroke="#1A120B" strokeWidth="0.6" fill="#D2A66D" />
            <path d="M 80 61 Q 77 53 75 49" stroke="#B8945F" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M 80 61 Q 83 53 85 49" stroke="#B8945F" strokeWidth="0.5" strokeLinecap="round" />
          </g>

          {/* Diagonal 60deg Far-Left Wheat spear */}
          <g transform="rotate(-44 80 91)">
            <line x1="80" y1="91" x2="80" y2="61" stroke="#B8945F" strokeWidth="1" />
            <path d="M 77 67 C 77 65, 79 64, 80 67 L 80 67 C 81 64, 83 65, 83 67" stroke="#1A120B" strokeWidth="0.6" fill="#D2A66D" />
            <path d="M 76 71 C 76 69, 78 68, 80 71 L 80 71 C 82 68, 84 69, 84 71" stroke="#1A120B" strokeWidth="0.6" fill="#D2A66D" />
            <path d="M 77 75 C 77 73, 79 72, 80 75 L 80 75 C 81 72, 83 73, 83 75" stroke="#1A120B" strokeWidth="0.6" fill="#D2A66D" />
            <path d="M 80 61 Q 77 53 75 49" stroke="#B8945F" strokeWidth="0.5" strokeLinecap="round" />
            <path d="M 80 61 Q 83 53 85 49" stroke="#B8945F" strokeWidth="0.5" strokeLinecap="round" />
          </g>

          {/* Flared Wheat Stems base curvature outlines */}
          <path d="M 71 89 Q 80 96 89 89" stroke="#B8945F" strokeWidth="0.8" fill="none" />
        </g>

        {/* Text Area */}
        <line x1="63.5" y1="96" x2="96.5" y2="96" stroke="#4A341E" strokeWidth="0.8" />
        <text x="80" y="102" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.6" fill="#1A120B" textAnchor="middle" letterSpacing="0.1">FARINHA DE TRIGO</text>
        <text x="80" y="108" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.4" fill="#1A120B" textAnchor="middle" letterSpacing="0.2">TIPO 00</text>
        
        <line x1="69.5" y1="112" x2="90.5" y2="112" stroke="#4A341E" strokeWidth="0.6" />
        <text x="80" y="116.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="3.6" fill="#4B3D23" textAnchor="middle">Origem: Itália</text>

        {/* Small olive twig detailing below name */}
        <g id="decor-sack-label" opacity="0.8">
          <path d="M 73 120.2 Q 80 121.2 87 120.2" stroke="#4B3D23" strokeWidth="0.5" fill="none" />
          <path d="M 76 119.8 C 74.5 118.5, 78 118.5, 76 119.8 Z" fill="#3D5F43" />
          <path d="M 84 119.8 C 85.5 118.5, 82 118.5, 84 119.8 Z" fill="#3D5F43" />
        </g>
      </g>

      {/* Sack cinched neck TIE ROPE with elegant double-curved knot & tassels */}
      <g id="sack-rope">
        {/* Rope wrapping the neck */}
        <path d="M 66 43 Q 80 46 94 43" stroke="#4A341E" strokeWidth="2.4" fill="none" />
        <path d="M 68 41 Q 80 44 92 41" stroke="#3D5F43" strokeWidth="1.5" fill="none" />
        
        {/* Double-crossing loops of the knot */}
        <ellipse cx="80" cy="43.5" rx="4.5" ry="3.5" fill="#3D5F43" stroke="#1A120B" strokeWidth="1.5" />
        
        {/* Left hanging rope end and tassel */}
        <path
          d="M 78 44 Q 74 52 70 59"
          stroke="#3D5F43"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Fine twist details on left rope */}
        <path d="M 76 46 Q 73.5 51 70.8 56" stroke="#4A341E" strokeWidth="0.5" fill="none" />
        {/* Left Tassel Fray/End */}
        <ellipse cx="70" cy="59" rx="2.5" ry="1.5" fill="#4A341E" />
        
        {/* Right hanging rope end and tassel */}
        <path
          d="M 82 44 Q 85 52 88 59"
          stroke="#3D5F43"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Fine twist details on right rope */}
        <path d="M 83.5 46 Q 86 51 87.2 56" stroke="#4A341E" strokeWidth="0.5" fill="none" />
        {/* Right Tassel Fray/End */}
        <ellipse cx="88" cy="59" rx="2.5" ry="1.5" fill="#4A341E" />
      </g>
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/farinha.png"
      alt="Farinha de Trigo"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 10. ÁGUA (Teardrop-shaped Water Droplet with liquid level and glass reflections)
export function IllusAgua({ className = '', width = 45, height = 45 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 160 160" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Soft aquatic blue gradient for liquid body */}
        <linearGradient id="droplet-water-grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#7ECCE9" stopOpacity="0.8" />
          <stop offset="35%" stopColor="#AEE2F3" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#E4F5FA" stopOpacity="0.4" />
        </linearGradient>
        {/* Transparent glass shading gradient */}
        <linearGradient id="droplet-glass-shading" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#EBF8FD" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#CEE9F2" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Soft floor shadow */}
      <ellipse cx="80" cy="144" rx="34" ry="5.5" fill="#D3DCE5" opacity="0.65" />

      {/* Main glass outer drop background path */}
      <path
        d="M 80 18 
           C 80 18, 120 74, 120 110 
           C 120 131, 102 144, 80 144 
           C 58 144, 40 131, 40 110 
           C 40 74, 80 18, 80 18 
           Z"
        fill="url(#droplet-glass-shading)"
        stroke="#1A120B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Internal Glass depth rim (slightly smaller to mimic refraction/thickness) */}
      <path
        d="M 80 22.5 
           C 80 22.5, 116.5 75.5, 116.5 109 
           C 116.5 128, 100 140.5, 80 140.5 
           C 60 140.5, 43.5 128, 43.5 109 
           C 43.5 75.5, 80 22.5, 80 22.5 
           Z"
        fill="none"
        stroke="#9ACEE2"
        strokeWidth="1.1"
        opacity="0.5"
      />

      {/* Liquid fluid body inside the droplet (fills bottom half up to ~y=73.5) */}
      <path
        d="M 44.2 109
           C 44.2 128, 60 140.5, 80 140.5 
           C 100 140.5, 115.8 128, 115.8 109
           C 115.8 102, 114 91, 110.8 78
           C 110.8 78, 80 84, 49.2 78
           C 46 91, 44.2 102, 44.2 109 
           Z"
        fill="url(#droplet-water-grad)"
      />

      {/* Surface meniscus ellipse of the water level */}
      <ellipse cx="80" cy="78" rx="30.8" ry="6.2" fill="#E4F5FA" stroke="#66BBD4" strokeWidth="1.2" />
      <ellipse cx="80" cy="77" rx="27" ry="3.1" fill="#FFFFFF" opacity="0.5" />

      {/* Glass reflections & highlights */}
      {/* Curved main highlight on left reflecting the teardrop round curvature */}
      <path
        d="M 51 92 
           C 47.5 106, 52 122, 64 133"
        stroke="#FFFFFF"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.7"
        fill="none"
      />
      
      {/* Finer ultra-bright specular glare line over the major highlight */}
      <path
        d="M 52.5 95
           C 49.5 106.5, 53.5 120, 62.5 130"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.9"
        fill="none"
      />

      {/* Symmetrical soft glow on right side */}
      <path
        d="M 109 92 
           C 112.5 106, 108 122, 96 133"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.25"
        fill="none"
      />

      {/* Vertical light glint reflection from the glass neck down to body */}
      <path
        d="M 77.2 26 
           C 77.2 26, 62 64, 55 90"
        stroke="#FFFFFF"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.45"
        fill="none"
      />

      {/* Soft glass highlight at the bottom-inner refraction band */}
      <path
        d="M 64 135 C 72 139, 88 139, 96 135"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.4"
        fill="none"
      />
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/agua.png"
      alt="Água"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 11. SAL MARINHO (Salt Mound & Scoop)
export function IllusSal({ className = '', width = 45, height = 45 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 160 160" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Soft floor shadow */}
      <ellipse cx="80" cy="142" rx="55" ry="6.5" fill="#D3DCE5" opacity="0.65" />
      {/* Shadow under the scoop handle on the right */}
      <ellipse cx="120" cy="136" rx="16" ry="4" fill="#D3DCE5" opacity="0.5" transform="rotate(-15 120 136)" />

      {/* Main salt heap background path (broad mountain) */}
      <path
        d="M 32 134 
           Q 48 85, 80 43 
           Q 112 85, 128 134 
           Q 80 138, 32 134 Z"
        fill="#FAFBFD"
        stroke="#1A120B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Overlay layers of salt to give organic 3D mound structure */}
      <ellipse cx="80" cy="130" rx="44" ry="11" fill="#FFFFFF" />
      <ellipse cx="64" cy="116" rx="28" ry="16" fill="#F8FAFC" />
      <ellipse cx="94" cy="116" rx="26" ry="16" fill="#FFFFFF" />
      <ellipse cx="78" cy="88" rx="22" ry="20" fill="#F4F8FA" />
      <ellipse cx="80" cy="66" rx="14" ry="14" fill="#FFFFFF" />
      <ellipse cx="80" cy="50" rx="7" ry="7" fill="#FFFFFF" />

      {/* Detailed Faceted/Crystalline Texture on the Main Heap */}
      {/* We represent distinct coarse sea salt salt crystals as 3D cubes/rhombuses */}
      {/* Peak Cube */}
      <g id="crystal-peak">
        <polygon points="77,53 80,50 83,53 80,56" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1" />
        <polygon points="77,53 80,56 80,60 77,57" fill="#EBF3F9" stroke="#1A120B" strokeWidth="1" />
        <polygon points="80,56 83,53 83,57 80,60" fill="#D3E5F0" stroke="#1A120B" strokeWidth="1" />
      </g>

      {/* Upper-Center Cube */}
      <g id="crystal-upper-center">
        <polygon points="74,78 79,75 84,78 79,81" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.2" />
        <polygon points="74,78 79,81 79,86 74,83" fill="#F0F5FA" stroke="#1A120B" strokeWidth="1" />
        <polygon points="79,81 84,78 84,83 79,86" fill="#D2E1ED" stroke="#1A120B" strokeWidth="1" />
      </g>

      {/* Upper-Left Cube */}
      <g id="crystal-upper-left">
        <polygon points="58,90 62,87 66,90 62,93" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1" />
        <polygon points="58,90 62,93 62,98 58,95" fill="#EAF1F7" stroke="#1A120B" strokeWidth="1" />
        <polygon points="62,93 66,90 66,95 62,98" fill="#CFDFEC" stroke="#1A120B" strokeWidth="1" />
      </g>

      {/* Center-Right Cube */}
      <g id="crystal-center-right">
        <polygon points="90,95 95,92 100,95 95,98" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.2" />
        <polygon points="90,95 95,98 95,103 90,100" fill="#F3F7FA" stroke="#1A120B" strokeWidth="1" />
        <polygon points="95,98 100,95 100,100 95,103" fill="#D4E4EE" stroke="#1A120B" strokeWidth="1" />
      </g>

      {/* Lower-Left Cube */}
      <g id="crystal-lower-left">
        <polygon points="46,112 51,109 56,112 51,115" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.1" />
        <polygon points="46,112 51,115 51,120 46,117" fill="#EAF0F6" stroke="#1A120B" strokeWidth="1.1" />
        <polygon points="51,115 56,112 56,117 51,120" fill="#CDDCE8" stroke="#1A120B" strokeWidth="1.1" />
      </g>

      {/* Lower-Center Cube */}
      <g id="crystal-lower-center">
        <polygon points="70,118 76,115 82,118 76,121" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.2" />
        <polygon points="70,118 76,121 76,127 70,124" fill="#F3F8FB" stroke="#1A120B" strokeWidth="1.1" />
        <polygon points="76,121 82,118 82,124 76,127" fill="#D3E2EE" stroke="#1A120B" strokeWidth="1.1" />
      </g>

      {/* Additional flat crystals / diamond plates scattered throughout the face of the mound */}
      <polygon points="40,94 43,91 46,94 43,97" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.8" />
      <polygon points="50,78 53,75 56,78 53,81" fill="#F1F5F9" stroke="#1A120B" strokeWidth="0.8" />
      <polygon points="63,68 66,65 69,68 66,71" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.8" />
      <polygon points="88,68 91,65 94,68 91,71" fill="#F1F5F9" stroke="#1A120B" strokeWidth="0.8" />
      <polygon points="102,78 105,75 108,78 105,81" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.8" />
      <polygon points="112,94 115,91 118,94 115,97" fill="#F1F5F9" stroke="#1A120B" strokeWidth="0.8" />
      <polygon points="106,112 109,109 112,112 109,115" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.8" />

      {/* Rough / Jagged silhouette accents along the left and right slope of the pile */}
      <polygon points="33,122 36,119 39,122 36,125" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1" />
      <polygon points="38,108 41,105 44,108 41,111" fill="#F1F5F9" stroke="#1A120B" strokeWidth="1" />
      <polygon points="45,95 48,92 51,95 48,98" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1" />
      <polygon points="55,83 58,80 61,83 58,86" fill="#F1F5F9" stroke="#1A120B" strokeWidth="1" />
      
      <polygon points="121,122 124,119 127,122 124,125" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1" />
      <polygon points="115,108 118,105 121,108 118,111" fill="#F1F5F9" stroke="#1A120B" strokeWidth="1" />
      <polygon points="106,94 109,91 112,94 109,97" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1" />
      <polygon points="98,82 101,79 104,82 101,85" fill="#F1F5F9" stroke="#1A120B" strokeWidth="1" />

      {/* Loose crystals scattered on the LEFT FLOOR */}
      <g id="loose-crystals-left">
        <polygon points="20,131 24,128 28,131 24,134" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1.1" />
        <polygon points="14,136 18,133 22,136 18,139" fill="#F8FAFC" stroke="#1A120B" strokeWidth="1" />
        <polygon points="23,138 26,135 29,138 26,141" fill="#FFFFFF" stroke="#1A120B" strokeWidth="1" />
        <polygon points="30,139 33,137 36,139 33,141" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.8" />
        <circle cx="16" cy="142" r="1.1" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.6" />
        <circle cx="21" cy="140" r="0.9" fill="#FFFFFF" />
      </g>

      {/* Loose crystals scattered on the BOTTOM-CENTER FLOOR */}
      <g id="loose-crystals-center">
        <polygon points="56,139 59,136 62,139 59,142" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.8" />
        <polygon points="63,141 66,139 69,141 66,143" fill="#F3F7FA" stroke="#1A120B" strokeWidth="0.8" />
        <circle cx="51" cy="139" r="1.1" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.6" />
      </g>

      {/* RUSTIC WOODEN SCOOP lying on the RIGHT floor, tilted at ~32 degrees */}
      {/* Filled with some crystals */}
      <g id="wooden-scoop">
        {/* Scoop Handle */}
        <path
          d="M 120 114 
             C 120 114, 137 99, 138 98 
             C 140 96, 143 96, 144 98 
             C 146 100, 146 103, 144 105 
             L 125 120 Z"
          fill="#C68B59"
          stroke="#1A120B"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Handle decorative carved rings and details */}
        <path d="M 130 105 C 131 106, 133 104, 134 105" stroke="#1A120B" strokeWidth="1" fill="none" />
        <path d="M 134 102 C 135 103, 137 101, 138 102" stroke="#1A120B" strokeWidth="1" fill="none" />
        <path d="M 138 98 C 140 97, 142 98, 143 100" stroke="#1A120B" strokeWidth="1.2" fill="none" />

        {/* Scoop Bowl cup body */}
        <path
          d="M 101 124 
             C 96 126, 96 133, 103 135 
             C 112 137, 120 129, 122 121 
             C 123 116, 117 114, 112 117 
             C 107 120, 104, 122, 101 124 Z"
          fill="#C68B59"
          stroke="#1A120B"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Inner hollow cup depth shadow (dark wood tone) */}
        <path
          d="M 100 125 
             C 103 123, 109 119, 112 117 
             C 115 116, 118 118, 118 121 
             C 118 125, 112 131, 104 132 
             C 99 133, 99 128, 100 125 Z"
          fill="#94532B"
          stroke="#1A120B"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />

        {/* Glistening salt crystals loading the inside of the scoop */}
        <g id="crystals-in-scoop">
          <path
            d="M 101 129
               C 103 127, 107 124, 110 124 
               C 113 124, 115 126, 114 128 
               C 112 130, 107 131, 103 131 Z"
            fill="#FFFFFF"
            stroke="#1A120B"
            strokeWidth="0.9"
          />
          {/* Detailed crystal facets in scoop */}
          <polygon points="104,127 106,125 108,127 106,129" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.6" />
          <polygon points="108,126 110,124 112,126 110,128" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.6" />
          <circle cx="102" cy="130" r="0.8" fill="#FFFFFF" />
          <circle cx="111" cy="129" r="0.7" fill="#FFFFFF" />
        </g>
      </g>

      {/* Extra very small spill salt grains immediately outside scoop bowl */}
      <g id="scoop-spill-grains">
        <circle cx="94" cy="132" r="0.8" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.5" />
        <circle cx="97" cy="136" r="1" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.5" />
        <polygon points="90,134 92,132 94,134 92,136" fill="#FFFFFF" stroke="#1A120B" strokeWidth="0.6" />
        <circle cx="91" cy="138" r="0.7" fill="#FFFFFF" />
      </g>
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/sal.png"
      alt="Sal Marinho"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 12. FERMENTO BIOLÓGICO SECO (Baker's Yeast Sachet)
export function IllusFermento({ className = '', width = 45, height = 45 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 160 160" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Soft floor shadows */}
      <ellipse cx="80" cy="144" rx="46" ry="6" fill="#D3DCE5" opacity="0.65" />
      <ellipse cx="120" cy="141" rx="14" ry="4" fill="#D3DCE5" opacity="0.45" />

      {/* Packet 3 (Lying flat/stacked behind on the right bottom) */}
      <g id="packet-stacked" transform="translate(112, 104) rotate(16) scale(0.95)" opacity="0.85">
        <rect x="-24" y="-30" width="48" height="60" rx="3" fill="#FAF6F0" stroke="#1A120B" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M -24 10 L 24 10 L 24 30 L -24 30 Z" fill="#D5AB75" stroke="#1A120B" strokeWidth="1.8" />
        {/* Border corrugated indentations representation */}
        <line x1="-20" y1="-26" x2="20" y2="-26" stroke="#1A120B" strokeWidth="1" strokeDasharray="1.5 1.5" />
        <line x1="-20" y1="26" x2="20" y2="26" stroke="#1A120B" strokeWidth="1" strokeDasharray="1.5 1.5" />
        <line x1="-20" y1="-26" x2="-20" y2="26" stroke="#1A120B" strokeWidth="1" strokeDasharray="1.5 1.5" />
        <line x1="20" y1="-26" x2="20" y2="26" stroke="#1A120B" strokeWidth="1" strokeDasharray="1.5 1.5" />
        
        {/* Subtle branding details inside */}
        <text x="0" y="-12" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.6" fill="#1A120B" textAnchor="middle">FERMENTO</text>
        <text x="0" y="-6" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="3.1" fill="#1A120B" textAnchor="middle">SECO BIOLÓGICO</text>
        
        {/* Mini icons illustration */}
        <ellipse cx="-8" cy="18" rx="7" ry="5" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.2" />
        <path d="M 4 20 Q 12 11 15 20" stroke="#1A120B" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Packet 1 (Standing upright on the left background) */}
      <g id="packet-left-standing" transform="translate(54, 62) scale(1.05)">
        <rect x="-24" y="-30" width="48" height="60" rx="3" fill="#FAF6F0" stroke="#1A120B" strokeWidth="2.2" strokeLinejoin="round" />
        {/* Kraft color bottom sleeve */}
        <path d="M -24 8 L 24 8 L 24 30 L -24 30 Z" fill="#D5AB75" stroke="#1A120B" strokeWidth="1.8" />
        
        {/* Corrugated border details */}
        <line x1="-22.5" y1="-29" x2="-22.5" y2="29" stroke="#8C7A63" strokeWidth="0.8" strokeDasharray="1 1.5" />
        <line x1="22.5" y1="-29" x2="22.5" y2="29" stroke="#8C7A63" strokeWidth="0.8" strokeDasharray="1 1.5" />
        <line x1="-23.5" y1="-27.5" x2="23.5" y2="-27.5" stroke="#8C7A63" strokeWidth="0.8" strokeDasharray="1.5 1" />
        <line x1="-23.5" y1="27.5" x2="23.5" y2="27.5" stroke="#8C7A63" strokeWidth="0.8" strokeDasharray="1.5 1" />
        <rect x="-20" y="-26" width="40" height="52" fill="none" stroke="#1A120B" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Text Label: "FERMENTO SECO BIOLÓGICO" */}
        <text x="0" y="-12" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="6.3" fill="#1A120B" textAnchor="middle">FERMENTO</text>
        <text x="0" y="-6" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.2" fill="#1A120B" textAnchor="middle">SECO BIOLÓGICO</text>

        {/* Yeast bowl on pack */}
        <path d="M -11 16 C -11 23, 11 23, 11 16 Z" fill="#E6C298" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="0" cy="15" rx="10.5" ry="2.2" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.2" />
        <path d="M -9 15 C -9 6, 9 6, 9 15 Z" fill="#EAE2CE" stroke="#1A120B" strokeWidth="1.2" />

        {/* Loaf drawing */}
        <g transform="translate(10, 19) rotate(16)">
          <ellipse cx="0" cy="0" rx="8" ry="4.5" fill="#DFB47B" stroke="#1A120B" strokeWidth="1.2" />
          <line x1="-4" y1="-2" x2="-2" y2="2" stroke="#1A120B" strokeWidth="0.8" />
          <line x1="0" y1="-3" x2="2" y2="1" stroke="#1A120B" strokeWidth="0.8" />
          <line x1="4" y1="-2" x2="6" y2="2" stroke="#1A120B" strokeWidth="0.8" />
        </g>
      </g>

      {/* Packet 2 (Right tilted and torn, spilling yeast) */}
      <g id="packet-right-spilling" transform="translate(102, 63) rotate(-32)">
        {/* Custom path for sachet with torn open bottom-left corner */}
        {/* Standard top-left, top-right, bottom-right are unchanged at: 
            Top-Left: (-24, -30)
            Top-Right: (24, -30)
            Bottom-Right: (24, 30)
            Bottom-Left: is torn: we draw jagged line from (-10, 30) up to (-24, 10). */}
        <path
          d="M -24 -30 L 24 -30 L 24 30 L -8 30 C -12 24, -14 18, -12 12 Q -15 8, -24 8 Z"
          fill="#FAF6F0"
          stroke="#1A120B"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Kraft color bottom zone, respect the tear line */}
        <path
          d="M -24 8 L 24 8 L 24 30 L -8 30 C -12 24, -14 18, -12 12 Q -15 8, -24 8 Z"
          fill="#D5AB75"
          stroke="#1A120B"
          strokeWidth="1.8"
        />
        
        {/* Corrugated border details */}
        <line x1="22.5" y1="-29" x2="22.5" y2="29" stroke="#8C7A63" strokeWidth="0.8" strokeDasharray="1 1.5" />
        <line x1="-23.5" y1="-27.5" x2="23.5" y2="-27.5" stroke="#8C7A63" strokeWidth="0.8" strokeDasharray="1.5 1" />
        
        {/* Inside dashed boundary */}
        <path d="M -20 -26 L 20 -26 L 20 26 M -10 26 C -12 21, -14 16, -11 11" fill="none" stroke="#1A120B" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Text Label */}
        <text x="0" y="-12" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="6.3" fill="#1A120B" textAnchor="middle">FERMENTO</text>
        <text x="0" y="-6" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.2" fill="#1A120B" textAnchor="middle">SECO BIOLÓGICO</text>

        {/* Yeast bowl on pack */}
        <path d="M -11 16 C -11 23, 11 23, 11 16 Z" fill="#E6C298" stroke="#1A120B" strokeWidth="1.5" strokeLinejoin="round" />
        <ellipse cx="0" cy="15" rx="10.5" ry="2.2" fill="#FAF6F0" stroke="#1A120B" strokeWidth="1.2" />
        <path d="M -9 15 C -9 6, 9 6, 9 15 Z" fill="#EAE2CE" stroke="#1A120B" strokeWidth="1.2" />

        {/* Loaf drawing */}
        <g transform="translate(10, 19) rotate(16)">
          <ellipse cx="0" cy="0" rx="8" ry="4.5" fill="#DFB47B" stroke="#1A120B" strokeWidth="1.2" />
          <line x1="-4" y1="-2" x2="-2" y2="2" stroke="#1A120B" strokeWidth="0.8" />
          <line x1="0" y1="-3" x2="2" y2="1" stroke="#1A120B" strokeWidth="0.8" fill="none" />
          <line x1="4" y1="-2" x2="6" y2="2" stroke="#1A120B" strokeWidth="0.8" fill="none" />
        </g>

        {/* Torn paper rough inner jagged edges */}
        <path d="M -24 8 L -20 12 L -23 16 L -16 20 L -18 24 L -8 30" stroke="#3A2C1E" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      </g>

      {/* Yeast Cascade Flow from torn packet to the heap */}
      <g id="yeast-cascade">
        <path
          d="M 94 84 
             C 90 92, 86 98, 80 108 
             L 88 114 
             C 94 104, 98 96, 96 86 
             Z"
          fill="#E6C298"
          stroke="#1A120B"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M 92 88 C 88 95, 85 101, 82 108" stroke="#90734D" strokeWidth="1.5" strokeDasharray="2 3" fill="none" />
        <path d="M 95 86 C 91 94, 89 100, 85 110" stroke="#FAF1E6" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
      </g>

      {/* Main Yeast Heap (Spill Mound) */}
      <g id="yeast-mound">
        {/* Main Heap outline */}
        <path
          d="M 46 138 
             Q 80 94, 114 138 
             Q 80 142, 46 138 
             Z"
          fill="#E6C298"
          stroke="#1A120B"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* Layer 2: lighter inner volume */}
        <path
          d="M 54 136 
             Q 80 102, 106 136 
             Z"
          fill="#F4E2CE"
        />
        {/* Layer 3: center brighter glow */}
        <ellipse cx="80" cy="126" rx="22" ry="12" fill="#FAF1E6" />
        <ellipse cx="80" cy="135" rx="14" ry="4" fill="#FAF1E6" />

        {/* Scattered large physical grain markers on heap */}
        <circle cx="72" cy="118" r="1.5" fill="#C59E74" stroke="#1A120B" strokeWidth="0.6" />
        <circle cx="86" cy="116" r="1.3" fill="#FAF1E6" stroke="#1A120B" strokeWidth="0.6" />
        <circle cx="65" cy="128" r="1.6" fill="#C59E74" stroke="#1A120B" strokeWidth="0.6" />
        <circle cx="95" cy="126" r="1.5" fill="#FAF1E6" stroke="#1A120B" strokeWidth="0.6" />

        {/* Texturing dots/grains on heap */}
        <circle cx="56" cy="132" r="0.8" fill="#1A120B" />
        <circle cx="62" cy="120" r="0.9" fill="#1A120B" />
        <circle cx="78" cy="108" r="1" fill="#1A120B" />
        <circle cx="89" cy="112" r="0.8" fill="#1A120B" />
        <circle cx="98" cy="122" r="0.9" fill="#1A120B" />
        <circle cx="106" cy="132" r="0.7" fill="#1A120B" />
      </g>

      {/* Loose granules scattered on the left and right floor */}
      <g id="loose-granules-floor">
        {/* Left side */}
        <circle cx="36" cy="136" r="1.2" fill="#E6C298" stroke="#1A120B" strokeWidth="0.6" />
        <circle cx="41" cy="138" r="0.8" fill="#E6C298" />
        <circle cx="32" cy="140" r="1.4" fill="#E6C298" stroke="#1A120B" strokeWidth="0.6" />
        <circle cx="44" cy="142" r="0.9" fill="#E6C298" />
        {/* Right side */}
        <circle cx="118" cy="138" r="1.1" fill="#E6C298" stroke="#1A120B" strokeWidth="0.6" />
        <circle cx="123" cy="141" r="0.8" fill="#E6C298" />
      </g>

      {/* Measuring spoon on bottom-right loaded with yeast */}
      <g id="measuring-spoon" transform="translate(118, 134) rotate(-14)">
        {/* Metal Handle */}
        <rect x="0" y="-2" width="28" height="4" rx="2" fill="#E2E8F0" stroke="#1A120B" strokeWidth="1.8" strokeLinejoin="round" />
        <line x1="5" y1="0" x2="22" y2="0" stroke="#CBD5E0" strokeWidth="0.8" />
        <circle cx="24" cy="0" r="1" fill="#1A120B" />

        {/* Scoop/Bowls */}
        <ellipse cx="0" cy="0" rx="12" ry="8" fill="#E2E8F0" stroke="#1A120B" strokeWidth="1.8" />
        <ellipse cx="0" cy="0" rx="9" ry="5.5" fill="#CBD5E0" />

        {/* Yeast heaped inside spoon */}
        <path d="M -9 -1 C -9 -7, 9 -7, 9 -1 Z" fill="#E6C298" stroke="#1A120B" strokeWidth="1.2" />
        <ellipse cx="0" cy="0" rx="8" ry="4.5" fill="#FAF1E6" />
        <circle cx="-3" cy="-3" r="0.9" fill="#C59E74" />
        <circle cx="3" cy="-3.5" r="0.8" fill="#FAF1E6" />
      </g>
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/fermento.png"
      alt="Fermento Biológico Seco"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}

// 13. AZEITE (Premium Extra Virgin Olive Oil Bottle with elegant olive tree brand label)
export function IllusAzeite({ className = '', width = 45, height = 45 }: IllustrationProps) {
  const svg = (
    <svg viewBox="0 0 160 160" width={width} height={height} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Rich golden-green extra virgin olive oil inside bottle */}
        <linearGradient id="oil-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8C7923" />
          <stop offset="40%" stopColor="#A68E2D" />
          <stop offset="85%" stopColor="#695616" />
          <stop offset="100%" stopColor="#3B2F0B" />
        </linearGradient>
      </defs>

      {/* Symmetrical soft floor shadow */}
      <ellipse cx="80" cy="144" rx="25" ry="4.5" fill="#D3DCE5" opacity="0.65" />

      {/* Glass Bottle Body base fill */}
      <path
        d="M 71.5 30
           L 71.5 54
           C 71.5 54, 57 58, 57 78
           L 57 136
           C 57 141, 62 143, 80 143
           C 98 143, 103 141, 103 136
           L 103 78
           C 103 58, 88.5 54, 88.5 54
           L 88.5 30
           Z"
        fill="url(#oil-grad)"
        stroke="#1A120B"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />

      {/* Glossy shoulder and left body reflection curve */}
      <path d="M 59 74 C 59 69, 64 64, 71 63 C 71 64, 62 67, 60 76 Z" fill="#FFFFFF" opacity="0.6" />
      <path d="M 60 82 L 60 134" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.25" />
      <path d="M 61.5 84 L 61.5 130" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.45" />

      {/* Right shoulder reflection curve */}
      <path d="M 101 82 C 102 75, 96 66, 88 64" stroke="#FFFFFF" strokeWidth="1.2" fill="none" opacity="0.3" />
      <path d="M 101.5 84 L 101.5 132" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.2" fill="none" />

      {/* Solid bottom glass refraction ring */}
      <path d="M 64 139 C 74 141.5, 86 141.5, 96 139" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.3" fill="none" />

      {/* Elegant Shield-shaped Brand Label */}
      <g id="bottle-shield-label">
        {/* Label Background */}
        <path
          d="M 80 66
             C 86 66, 91.5 68, 95 72
             C 96.5 74, 98 76.5, 98 80
             L 98 116
             C 98 122.5, 96 127.5, 91 130
             C 87 132, 83 133, 80 133
             C 77 133, 73 132, 69 130
             C 64 127.5, 62 122.5, 62 116
             L 62 80
             C 62 76.5, 63.5 74, 65 72
             C 68.5 68, 74 66, 80 66
             Z"
          fill="#FCFAF2"
          stroke="#1A120B"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Fine inner olive-gold concentric border */}
        <path
          d="M 80 69
             C 85 69, 89.5 70.8, 92.5 74
             C 94 76, 95 78, 95 81
             L 95 115
             C 95 120, 93.5 124, 89.5 127
             C 86 129, 83 129.5, 80 129.5
             C 77 129.5, 74 129, 70.5 127
             C 66.5 124, 65 120, 65 115
             L 65 81
             C 65 78, 66 76, 67.5 74
             C 70.5 70.8, 75 69, 80 69
             Z"
          fill="none"
          stroke="#8A7E35"
          strokeWidth="0.8"
        />

        {/* Hand-sketched Olive Tree Illustration inside Label */}
        <g id="label-olive-tree">
          {/* Main Trunk and Base roots */}
          <path
            d="M 76.5 96
               Q 78 94 78 90
               C 78 88, 75 86, 73 85
               L 73 83.5
               C 75.5 83.5, 78 85, 79 88
               Q 80 84 78.5 81
               C 80 81, 81.5 82.5, 82.5 84.5
               Q 82 89 82 92
               Q 82.5 94 83.5 96
               Z"
            fill="#403328"
            stroke="#1A120B"
            strokeWidth="0.8"
          />
          <path d="M 73.5 95.8 C 76 95, 79 92.5, 79 90" stroke="#1A120B" strokeWidth="0.7" fill="none" />
          <path d="M 86.5 95.8 C 84 95, 81 92.5, 81 90" stroke="#1A120B" strokeWidth="0.7" fill="none" />

          {/* Lush Green Foliage canopy of individual elongated leaves */}
          <g id="tree-leaves">
            {/* Top Leaf Central */}
            <path d="M 80 77.5 C 78.5 72, 81.5 72, 80 77.5 Z" fill="#5C7A52" stroke="#1A120B" strokeWidth="0.8" />
            
            {/* Top Left diagonal leaf */}
            <path d="M 78 79 C 74.5 73.5, 78 73.5, 78 79 Z" fill="#4B663F" stroke="#1A120B" strokeWidth="0.8" transform="rotate(-30 78 79)" />
            
            {/* Top Right diagonal leaf */}
            <path d="M 82 79 C 85.5 73.5, 82 73.5, 82 79 Z" fill="#4B663F" stroke="#1A120B" strokeWidth="0.8" transform="rotate(30 82 79)" />

            {/* Mid Left branch leaves */}
            <path d="M 73 83 C 68.5 78.5, 72.5 78.5, 73 83 Z" fill="#5D7446" stroke="#1A120B" strokeWidth="0.8" transform="rotate(-65 73 83)" />
            <path d="M 75 81 C 70.5 76.5, 74.5 76.5, 75 81 Z" fill="#6A854C" stroke="#1A120B" strokeWidth="0.8" transform="rotate(-40 75 81)" />

            {/* Mid Right branch leaves */}
            <path d="M 87 83 C 91.5 78.5, 87.5 78.5, 87 83 Z" fill="#5D7446" stroke="#1A120B" strokeWidth="0.8" transform="rotate(65 87 83)" />
            <path d="M 85 81 C 89.5 76.5, 85.5 76.5, 85 81 Z" fill="#6A854C" stroke="#1A120B" strokeWidth="0.8" transform="rotate(40 85 81)" />

            {/* Far Left Leaves */}
            <path d="M 68 87 C 62.5 84, 65 81, 68 87 Z" fill="#465E36" stroke="#1A120B" strokeWidth="0.8" transform="rotate(-90 68 87)" />
            <path d="M 69 91 C 63.5 88, 66 85, 69 91 Z" fill="#5C7A52" stroke="#1A120B" strokeWidth="0.8" transform="rotate(-110 69 91)" />

            {/* Far Right Leaves */}
            <path d="M 92 87 C 97.5 84, 95 81, 92 87 Z" fill="#465E36" stroke="#1A120B" strokeWidth="0.8" transform="rotate(90 92 87)" />
            <path d="M 91 91 C 96.5 88, 94 85, 91 91 Z" fill="#5C7A52" stroke="#1A120B" strokeWidth="0.8" transform="rotate(110 91 91)" />
            
            {/* Inside canopy fine branch curves */}
            <path d="M 80 86 Q 78 81 80 77" stroke="#403328" strokeWidth="0.8" fill="none" />
            <path d="M 78.5 84 Q 74 81 70 85" stroke="#403328" strokeWidth="0.8" fill="none" />
            <path d="M 81.5 84 Q 86 81 90 85" stroke="#403328" strokeWidth="0.8" fill="none" />
          </g>

          {/* Tiny details: Organic hanging olives (mixture of black and green olives) */}
          <g id="hanging-olives">
            {/* Black olives */}
            <ellipse cx="71" cy="94" rx="1.8" ry="2.6" fill="#1C2E3F" stroke="#1A120B" strokeWidth="0.8" transform="rotate(15 71 94)" />
            <circle cx="70.5" cy="93" r="0.5" fill="#FFFFFF" opacity="0.6" />

            <ellipse cx="87" cy="88" rx="1.8" ry="2.6" fill="#1C2E3F" stroke="#1A120B" strokeWidth="0.8" transform="rotate(-30 87 88)" />
            <circle cx="86.5" cy="87" r="0.5" fill="#FFFFFF" opacity="0.6" />

            <ellipse cx="74" cy="85" rx="1.8" ry="2.6" fill="#1C2E3F" stroke="#1A120B" strokeWidth="0.8" transform="rotate(-10 74 85)" />

            {/* Green olives */}
            <ellipse cx="89" cy="94" rx="1.8" ry="2.6" fill="#798A3C" stroke="#1A120B" strokeWidth="0.8" transform="rotate(-15 89 94)" />
            <circle cx="88.5" cy="93" r="0.5" fill="#FFFFFF" opacity="0.6" />

            <ellipse cx="80" cy="81" rx="1.6" ry="2.4" fill="#798A3C" stroke="#1A120B" strokeWidth="0.8" />
            <ellipse cx="81" cy="89" rx="1.8" ry="2.8" fill="#798A3C" stroke="#1A120B" strokeWidth="0.8" />
          </g>
        </g>

        {/* Brand Typography Text Details */}
        <text x="80" y="105.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="4.6" fill="#1A120B" textAnchor="middle" letterSpacing="0.05">AZEITE DE OLIVA</text>
        <text x="80" y="112" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="950" fontSize="5" fill="#1A120B" textAnchor="middle" letterSpacing="0.1">EXTRA VIRGEM</text>
        
        {/* Separator line & origin marker */}
        <line x1="72" y1="116" x2="88" y2="116" stroke="#4A341E" strokeWidth="0.5" />
        <text x="80" y="120.5" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="3.3" fill="#4B3D23" textAnchor="middle">Origem: Itália</text>

        {/* Small olive twig decoration */}
        <g id="label-decor" opacity="0.8">
          <path d="M 74 124.5 Q 80 125.5 86 124.5" stroke="#4B3D23" strokeWidth="0.5" fill="none" />
          <path d="M 76.5 124.1 C 75.3 123, 78.5 123, 76.5 124.1 Z" fill="#3D5F43" />
          <path d="M 83.5 124.1 C 84.7 123, 81.5 123, 83.5 124.1 Z" fill="#3D5F43" />
        </g>
      </g>

      {/* Traditional Sealing Wax Cap with drip-down details around bottle neck */}
      <g id="bottle-wax-cap">
        {/* Wax base envelope path */}
        <path
          d="M 69.5 17 
             C 69.5 17, 72 13, 80 13
             C 88 13, 90.5 17, 90.5 17
             L 91 38
             C 91 38, 86 43, 82 43
             C 80 43, 79 36, 79 36
             C 79 36, 78 40, 75 40
             C 71 40, 69 36, 69 36
             Z"
          fill="#4A341E"
          stroke="#1A120B"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />

        {/* Molded neck ridge ring */}
        <path d="M 69.2 26 C 73 28, 87 28, 90.8 26" stroke="#1A120B" strokeWidth="1.6" />

        {/* Prominent dripping wax trail on collar */}
        <path d="M 79 34 C 79 34, 79.5 44, 81.5 44 C 83.5 44, 83.5 34, 83.5 34 Z" fill="#4A341E" stroke="#1A120B" strokeWidth="1.5" />
        <circle cx="81.5" cy="42.5" r="1.5" fill="#4A341E" />

        {/* Top-rim cap seal circle */}
        <ellipse cx="80" cy="18" rx="10.8" ry="4" fill="#6A4D2F" stroke="#1A120B" strokeWidth="1.5" />
        <ellipse cx="80" cy="17" rx="8" ry="2" fill="#FFFFFF" opacity="0.3" />

        {/* Left vertical highlights on wax */}
        <path d="M 72 20 Q 70.5 28 71.5 35" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.25" fill="none" />
      </g>
    </svg>
  );
  return (
    <FallbackImage
      src="/assets/azeite.png"
      alt="Azeite de Oliva"
      className={className}
      width={width}
      height={height}
      fallback={svg}
    />
  );
}
