import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAnnouncementSharp24Px = (
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
    <path d="M22 2H2v20l4-4h16zm-9 9h-2V5h2zm0 4h-2v-2h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAnnouncementSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
