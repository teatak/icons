import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAnnouncementTwoTone24Px = (
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
      d="M4 4v13.17l.59-.59.58-.58H20V4zm9 11h-2v-2h2zm0-4h-2V5h2z"
      opacity={0.3}
    />
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17l-.59.59-.58.58V4h16zM11 5h2v6h-2zm0 8h2v2h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAnnouncementTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
