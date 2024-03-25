import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDriveFileMoveSharp24Px = (
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
    <path d="M22 6H12l-2-2H2v16h20zM12 17v-3H8v-2h4V9l4 4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDriveFileMoveSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
