import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRestoreFromTrash24Px = (
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
    <path d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14zM6 7v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7zm8 7v4h-4v-4H8l4-4 4 4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgRestoreFromTrash24Px);
const Memo = memo(ForwardRef);
export default Memo;
