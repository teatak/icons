import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyBitcoinRounded24Px = (
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
    <path d="M10 7h4c1.1 0 2 .9 2 2s-.9 2-2 2h-4zm5 10h-5v-4h5c1.1 0 2 .9 2 2s-.9 2-2 2m0-13c0-.55-.45-1-1-1s-1 .45-1 1v1h-2V4c0-.55-.45-1-1-1s-1 .45-1 1v1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v10H7c-.55 0-1 .45-1 1s.45 1 1 1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1c2.21 0 4-1.79 4-4 0-1.45-.78-2.73-1.94-3.43.59-.69.94-1.59.94-2.57 0-1.86-1.27-3.43-3-3.87z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCurrencyBitcoinRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
