import { useState, useEffect } from 'react';

type CharacterTraits = {
  accessory: number;
  body: number;
  headgear: number;
  head: number;
};

type CharacterImageProps = {
  characterId: string;
  width?: number | string;
  height?: number | string;
  reflectionBg?: string;
};

/**
 * Parse character ID to extract trait values
 * Format: 99 + accessory (2 digits) + body (2 digits) + headgear (2 digits) + head (2 digits)
 * Based on default config:
 * - Trait 1 (position 1): Accessory (1-26)
 * - Trait 2 (position 2): Body (1-40)
 * - Trait 3 (position 3): Headgear (1-38)
 * - Trait 4 (position 4): Head (1-10)
 */
const parseCharacterId = (characterId: string): CharacterTraits | null => {
  if (!characterId || !characterId.startsWith('99')) {
    return null;
  }

  const traitsString = characterId.slice(2);
  if (traitsString.length < 8) {
    return null;
  }

  const accessory = parseInt(traitsString.slice(0, 2), 10);
  const body = parseInt(traitsString.slice(2, 4), 10);
  const headgear = parseInt(traitsString.slice(4, 6), 10);
  const head = parseInt(traitsString.slice(6, 8), 10);

  if (isNaN(accessory) || isNaN(body) || isNaN(headgear) || isNaN(head)) {
    return null;
  }

  return { accessory, body, headgear, head };
};

/**
 * Get image path for a trait
 */
const getImagePath = (
  type: 'Accessory' | 'Body' | 'Headgear' | 'Head',
  value: number
): string => {
  const rawBase = import.meta.env.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const paddedValue = value.toString().padStart(2, '0');
  return `${base}Otter-Pass/${type}/${paddedValue}-${type}.png`;
};

const toCss = (v: number | string) => typeof v === 'number' ? `${v}px` : v;

export const CharacterImage = ({ characterId, width = 248, height = 318, reflectionBg }: CharacterImageProps) => {
  const [traits, setTraits] = useState<CharacterTraits | null>(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const parsed = parseCharacterId(characterId);
    console.log('[CharacterImage] characterId:', characterId, 'parsed:', parsed, 'BASE_URL:', import.meta.env.BASE_URL);
    setTraits(parsed);
    setImageError(false);
  }, [characterId]);

  if (imageError || !traits) {
    console.log('[CharacterImage] Showing fallback — imageError:', imageError, 'traits:', traits, 'characterId:', characterId);
    return (
      <div
        style={{
          width: toCss(width),
          height: toCss(height),
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000',
          fontSize: '14px',
        }}
      >
        Invalid Character
      </div>
    );
  }

  const bodyPath = getImagePath('Body', traits.body);
  const headPath = getImagePath('Head', traits.head);
  const accessoryPath = getImagePath('Accessory', traits.accessory);
  const headgearPath = getImagePath('Headgear', traits.headgear);

  const imgStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 1,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  return (
    <div
      style={{
        position: 'relative',
        width: toCss(width),
        height: toCss(height),
      }}
    >
      {/* Base layer: Body */}
      <img
        src={bodyPath}
        alt={`Body ${traits.body}`}
        style={{ ...imgStyle, zIndex: 1 }}
        onError={(e) => { console.log('[CharacterImage] Failed to load:', (e.target as HTMLImageElement).src); setImageError(true); }}
      />
      {/* Head */}
      <img
        src={headPath}
        alt={`Head ${traits.head}`}
        style={{ ...imgStyle, zIndex: 2 }}
        onError={(e) => { console.log('[CharacterImage] Failed to load:', (e.target as HTMLImageElement).src); setImageError(true); }}
      />
      {/* Accessory */}
      <img
        src={accessoryPath}
        alt={`Accessory ${traits.accessory}`}
        style={{ ...imgStyle, zIndex: 3 }}
        onError={(e) => { console.log('[CharacterImage] Failed to load:', (e.target as HTMLImageElement).src); setImageError(true); }}
      />
      {/* Headgear */}
      <img
        src={headgearPath}
        alt={`Headgear ${traits.headgear}`}
        style={{ ...imgStyle, zIndex: 4 }}
        onError={(e) => { console.log('[CharacterImage] Failed to load:', (e.target as HTMLImageElement).src); setImageError(true); }}
      />

      {/* Reflection effect */}
      <div
        style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          height: '100%',
          transform: 'scaleY(-1)',
          opacity: 0.15,
          filter: 'blur(4px)',
          overflow: 'hidden',
          background: reflectionBg || 'transparent',
          borderRadius: '24px',
          zIndex: 5,
          pointerEvents: 'none',
        }}
      >
        <img src={bodyPath} alt="" style={imgStyle} />
        <img src={headPath} alt="" style={imgStyle} />
        <img src={accessoryPath} alt="" style={imgStyle} />
        <img src={headgearPath} alt="" style={imgStyle} />
      </div>
    </div>
  );
};

export { parseCharacterId };
