// Temporary global declarations to silence missing type/module errors in the editor.
// Ideally install proper packages/types (react, @types/react, etc.) or add more
// specific declarations later. These are intentionally permissive to remove
// noisy diagnostics while developing.

declare module "motion/react" {
  // Loose declarations for the motion/react entry. Replace with proper
  // library types or install @types if/when available.
  type MotionProps = any;
  export const motion: {
    section: any;
    div: any;
    img: any;
    button: any;
    h1: any;
    p: any;
    [key: string]: any;
  };
  export default motion;
}

// NOTE: we previously declared `lucide-react` here to silence editor errors.
// The package is installed and ships its own types; removing the manual
// declaration allows TypeScript to pick up the real library types.

declare module "react/jsx-runtime" {
  // Minimal jsx-runtime stubs so TS/VSCode won't complain when React types
  // are not installed. Replace by installing `react`/`@types/react`.
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
  export function jsxDEV(type: any, props: any, key?: any): any;
}

// Allow importing common image formats from modules in `src`.
// Support both lowercase and uppercase extensions to accommodate differing
// file naming and OS case sensitivity quirks (e.g. `yadhu11.JPG`).
declare module "*.jpg" {
  const src: string;
  export default src;
}
declare module "*.JPG" {
  const src: string;
  export default src;
}
declare module "*.jpeg" {
  const src: string;
  export default src;
}
declare module "*.JPEG" {
  const src: string;
  export default src;
}
declare module "*.png" {
  const src: string;
  export default src;
}
declare module "*.PNG" {
  const src: string;
  export default src;
}
declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "*.SVG" {
  const src: string;
  export default src;
}

// If React types are missing, provide a minimal JSX namespace so TSX files don't error.
// This intentionally keeps IntrinsicElements permissive. Replace with proper
// `@types/react` when available.
declare namespace JSX {
  interface IntrinsicElements {
    // allow any tag to be used in JSX
    [elemName: string]: any;
  }
}
