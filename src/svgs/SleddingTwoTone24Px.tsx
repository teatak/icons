import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSleddingTwoTone24Px = (
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
    <path d="M14 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m8.8 15.74a4.003 4.003 0 0 1-5.04 2.57L1 17.36l.46-1.43 3.93 1.28.46-1.43-3.92-1.28.46-1.43L4 13.6V9.5l5.47-2.35c.39-.17.84-.21 1.28-.07.95.31 1.46 1.32 1.16 2.27l-1.05 3.24 2.14-.34c.89-.15 1.76.32 2.14 1.14l2.08 4.51 1.93.63-.46 1.43-3.32-1.08-.47 1.42 3.32 1.08c1.31.43 2.72-.29 3.15-1.61.43-1.31-.29-2.72-1.61-3.15l.46-1.43c2.11.69 3.27 2.95 2.58 5.05M6 14.25l1.01.33c-.22-.42-.28-.92-.12-1.4L7.92 10 6 10.82zm7.94 4.16-6.66-2.16-.46 1.43 6.66 2.16zm.69-1.36-1.18-2.56-3.97.89z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSleddingTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
