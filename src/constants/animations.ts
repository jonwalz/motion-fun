interface SpringType {
  type: string;
  mass?: number;
  stiffness?: number;
  damping?: number;
  velocity?: number;
}

export const spring: SpringType = {
  type: "spring",
  mass: 2,
  stiffness: 280,
  damping: 300,
  velocity: 0,
};
