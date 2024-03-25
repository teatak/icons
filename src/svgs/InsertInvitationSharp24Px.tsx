import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgInsertInvitationSharp24Px = (
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
    <path d="M17 12h-5v5h5zM16 1v2H8V1H6v2H3.01v18H21V3h-3V1zm3 18H5V8h14z" />
  </svg>
);
const ForwardRef = forwardRef(SvgInsertInvitationSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
