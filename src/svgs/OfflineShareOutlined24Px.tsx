import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgOfflineShareOutlined24Px = (
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
    <path d="M6 5H4v16c0 1.1.9 2 2 2h10v-2H6z" />
    <path d="M18 1h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 16h-8v-1h8zm0-3h-8V6h8zm0-10h-8V3h8z" />
    <path d="M12.5 10.25h1.63l-.69.69L14.5 12 17 9.5 14.5 7l-1.06 1.06.69.69H12c-.55 0-1 .45-1 1V12h1.5z" />
  </svg>
);
const ForwardRef = forwardRef(SvgOfflineShareOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
