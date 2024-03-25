import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSnowboardingOutlined24Px = (
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
    <path d="M14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2m7.4 17.09a.75.75 0 0 0-.64.17c-.69.6-1.64.88-2.6.67L17 20.69l-1-6.19-3.32-2.67 1.8-2.89A6.51 6.51 0 0 0 20 12v-2c-1.85 0-3.44-1.12-4.13-2.72l-.52-1.21C15.16 5.64 14.61 5 13.7 5H8L5.5 9l1.7 1.06L9.1 7h2.35l-2.51 3.99c-.28.45-.37 1-.25 1.52L9.5 16 6 18.35l-.47-.1c-.96-.2-1.71-.85-2.1-1.67a.74.74 0 0 0-.51-.42c-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.07-.38-.16-.8-.59-.89M8.73 18.93l3.02-2.03-.44-3.32 2.84 2.02.75 4.64z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSnowboardingOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
