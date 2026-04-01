import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";

// Brand colors
const BLACK = "#000000";
const OLIVE = "#6B654B";
const DEEP_BLUE = "#2E5EAA";
const LIGHT_BLUE = "#2D82B7";

// Deterministic pseudo-random from seed
function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

// Rising particle component
function Particle({
  frame,
  index,
  totalFrames,
}: {
  frame: number;
  index: number;
  totalFrames: number;
}) {
  const seed = index;
  const startX = seededRandom(seed) * 1920;
  const speed = 0.3 + seededRandom(seed + 1) * 0.7;
  const size = 2 + seededRandom(seed + 2) * 4;
  const delay = seededRandom(seed + 3) * 120;
  const colors = [OLIVE, DEEP_BLUE, LIGHT_BLUE, "#FFFFFF"];
  const color = colors[index % colors.length];
  const drift = Math.sin(seededRandom(seed + 4) * Math.PI * 2) * 80;

  const localFrame = frame - delay;
  const cycle = totalFrames - delay;
  const progress = localFrame > 0 ? (localFrame % cycle) / cycle : 0;

  const y = interpolate(progress, [0, 1], [1100, -50]);
  const x = startX + Math.sin(progress * Math.PI * 2) * drift;
  const opacity = localFrame <= 0
    ? 0
    : interpolate(progress, [0, 0.1, 0.8, 1], [0, 0.6 * speed, 0.6 * speed, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        opacity,
      }}
    />
  );
}

// Growing bar chart element
function GrowthBar({
  frame,
  index,
  fps,
}: {
  frame: number;
  index: number;
  fps: number;
}) {
  const colors = [OLIVE, DEEP_BLUE, LIGHT_BLUE, OLIVE, DEEP_BLUE];
  const color = colors[index % colors.length];
  const barWidth = 40;
  const gap = 24;
  const totalBars = 5;
  const totalWidth = totalBars * barWidth + (totalBars - 1) * gap;
  const startX = (1920 - totalWidth) / 2 + index * (barWidth + gap);

  const maxHeight = 120 + index * 60;
  const delay = index * 12;
  const growProgress = interpolate(frame - delay, [0, 2.5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  // Ease out cubic
  const eased = 1 - Math.pow(1 - growProgress, 3);
  const height = eased * maxHeight;

  // Gentle pulse after grown
  const pulsePhase = (frame - delay) / fps;
  const pulse = growProgress >= 1 ? Math.sin(pulsePhase * 1.5) * 4 : 0;

  const opacity = interpolate(frame, [0, 30], [0, 0.25], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: startX,
        bottom: 200,
        width: barWidth,
        height: height + pulse,
        backgroundColor: color,
        opacity,
        borderRadius: "4px 4px 0 0",
      }}
    />
  );
}

// Upward arrow / growth line
function GrowthLine({ frame, fps }: { frame: number; fps: number }) {
  const progress = interpolate(frame, [1 * fps, 5 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const eased = 1 - Math.pow(1 - progress, 3);

  const points: [number, number][] = [
    [300, 800],
    [500, 720],
    [750, 680],
    [1000, 580],
    [1200, 450],
    [1400, 350],
    [1620, 200],
  ];

  const visibleCount = Math.floor(eased * points.length);
  const pathData = points
    .slice(0, Math.max(visibleCount, 2))
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`)
    .join(" ");

  const opacity = interpolate(frame, [1 * fps, 2 * fps], [0, 0.12], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <svg
      width={1920}
      height={1080}
      style={{ position: "absolute", top: 0, left: 0, opacity }}
    >
      <path
        d={pathData}
        fill="none"
        stroke={OLIVE}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Expanding concentric rings
function PulseRing({
  frame,
  fps,
  delay,
  color,
  cx,
  cy,
}: {
  frame: number;
  fps: number;
  delay: number;
  color: string;
  cx: number;
  cy: number;
}) {
  const localFrame = frame - delay;
  const cycleDuration = 4 * fps;
  const cycleFrame = localFrame > 0 ? localFrame % cycleDuration : 0;

  const progress = cycleFrame / cycleDuration;
  const radius = interpolate(progress, [0, 1], [0, 400]);
  const opacity =
    localFrame <= 0
      ? 0
      : interpolate(progress, [0, 0.2, 0.7, 1], [0, 0.15, 0.08, 0]);

  return (
    <div
      style={{
        position: "absolute",
        left: cx - radius,
        top: cy - radius,
        width: radius * 2,
        height: radius * 2,
        borderRadius: "50%",
        border: `1.5px solid ${color}`,
        opacity,
      }}
    />
  );
}

export const HeroBackground: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Slow gradient shift across the video
  const gradientAngle = interpolate(frame, [0, durationInFrames], [135, 180]);
  const blueIntensity = interpolate(
    frame,
    [0, durationInFrames * 0.5, durationInFrames],
    [3, 8, 5]
  );

  const bgGradient = `linear-gradient(${gradientAngle}deg, 
    ${BLACK} 0%, 
    hsl(213, 57%, ${blueIntensity}%) 40%, 
    ${BLACK} 70%, 
    hsl(45, 18%, ${blueIntensity * 0.6}%) 100%)`;

  // Vignette
  const vignetteOpacity = interpolate(frame, [0, 60], [0.7, 0.5], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: bgGradient }}>
      {/* Growth line */}
      <GrowthLine frame={frame} fps={fps} />

      {/* Growth bars */}
      {[0, 1, 2, 3, 4].map((i) => (
        <GrowthBar key={i} frame={frame} index={i} fps={fps} />
      ))}

      {/* Pulse rings */}
      <PulseRing frame={frame} fps={fps} delay={0} color={OLIVE} cx={1500} cy={400} />
      <PulseRing frame={frame} fps={fps} delay={30} color={DEEP_BLUE} cx={400} cy={600} />
      <PulseRing frame={frame} fps={fps} delay={60} color={LIGHT_BLUE} cx={960} cy={540} />

      {/* Particles */}
      {Array.from({ length: 50 }, (_, i) => (
        <Particle key={i} frame={frame} index={i} totalFrames={durationInFrames} />
      ))}

      {/* Vignette overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at center, transparent 30%, ${BLACK} 100%)`,
          opacity: vignetteOpacity,
        }}
      />
    </AbsoluteFill>
  );
};
