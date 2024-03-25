import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgContactPhoneTwoTone24Px = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="tui-icon"
    ref={ref}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M22 5H2v14h20zM9 6c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m6 12H3v-1.41C3 14.08 6.97 13 9 13s6 1.08 6 3.58zm2.85-4h1.64L21 16l-1.99 1.99A7.5 7.5 0 0 1 16.28 14c-.18-.64-.28-1.31-.28-2s.1-1.36.28-2a7.47 7.47 0 0 1 2.73-3.99L21 8l-1.51 2h-1.64c-.22.63-.35 1.3-.35 2s.13 1.37.35 2"
      opacity={0.3}
    />
    <path d="M2 21h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2M2 5h20v14H2zm17.49 5L21 8l-1.99-1.99A7.47 7.47 0 0 0 16.28 10c-.18.64-.28 1.31-.28 2s.1 1.36.28 2a7.5 7.5 0 0 0 2.73 3.99L21 16l-1.51-2h-1.64c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2zM9 12c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 5c-2.03 0-6 1.08-6 3.58V18h12v-1.41C15 14.08 11.03 13 9 13m-3.52 3c.74-.5 2.22-1 3.52-1s2.77.49 3.52 1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgContactPhoneTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
