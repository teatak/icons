import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMusicNoteTwoTone24Px = (
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
    <circle cx={10.01} cy={17} r={2} opacity={0.3} />
    <path d="m12 3 .01 10.55c-.59-.34-1.27-.55-2-.55a4.001 4.001 0 1 0 0 8c2.22 0 3.99-1.79 3.99-4V7h4V3zm-1.99 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgMusicNoteTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
