import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMarkEmailUnreadTwoTone24Px = (
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
      d="M4 6h10.1c.22 1.07.79 2 1.57 2.71L12 11zm0 2v10h16V9.9a4.842 4.842 0 0 1-2.7-.22L12 13z"
      opacity={0.3}
    />
    <path d="M20 9.9c.74-.15 1.42-.48 2-.92V18c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10.1c-.06.32-.1.66-.1 1s.04.68.1 1H4l8 5 3.67-2.29c.47.43 1.02.76 1.63.98L12 13 4 8v10h16zM16 5c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3" />
  </svg>
);
const ForwardRef = forwardRef(SvgMarkEmailUnreadTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
