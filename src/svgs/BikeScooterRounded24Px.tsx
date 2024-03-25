import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBikeScooterRounded24Px = (
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
    <g fill="none">
      <path d="M0 0h24v24H0z" />
      <path d="M0 0h24v24H0z" />
    </g>
    <path d="M10 14h.74L8.82 5.56A2.01 2.01 0 0 0 6.87 4H4c-.55 0-1 .45-1 1s.45 1 1 1h2.87l1.42 6.25h-.01A6.01 6.01 0 0 0 4.09 17H0v2h6v-1c0-2.21 1.79-4 4-4M18.75 8h-.56l-1.35-3.69A2 2 0 0 0 14.96 3H12c-.55 0-1 .45-1 1s.45 1 1 1h2.96l1.1 3H10.4l.46 2H15c-.43.58-.75 1.25-.9 2h-2.79l.46 2h2.33c.44 2.23 2.31 3.88 4.65 3.99 3.16.15 5.88-2.83 5.12-6.1C23.34 9.57 21.13 8 18.75 8m.13 8c-1.54-.06-2.84-1.37-2.88-2.92-.02-.96.39-1.8 1.05-2.36l.62 1.7c.19.52.76.79 1.28.6s.79-.76.6-1.28l-.63-1.73.01-.01A2.97 2.97 0 0 1 22 13c0 1.72-1.38 3.06-3.12 3" />
    <path d="M10 15c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3m0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgBikeScooterRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
