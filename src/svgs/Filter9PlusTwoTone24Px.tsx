import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFilter9PlusTwoTone24Px = (
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
      d="M7 17h14v-6h-2v2h-2v-2h-2V9h2V7h2v2h2V3H7zm2-5h3v-1h-1a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9z"
      opacity={0.3}
    />
    <path d="M19 21H3V5H1v16c0 1.1.9 2 2 2h16z" />
    <path d="M11 8h1v1h-1z" opacity={0.3} />
    <path d="M12 6h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v1H9v2h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 3h-1V8h1zm9-8H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 8h-2V7h-2v2h-2v2h2v2h2v-2h2v6H7V3h14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFilter9PlusTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
