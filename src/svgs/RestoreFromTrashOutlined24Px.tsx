import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRestoreFromTrashOutlined24Px = (
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
    <path d="m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zm2-5V9h8v10H8zm2 4h4v-4h2l-4-4-4 4h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRestoreFromTrashOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
