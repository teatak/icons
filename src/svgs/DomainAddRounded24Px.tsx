import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDomainAddRounded24Px = (
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
    <path d="M6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm6 12h-4v-2h2v-2h-2v-2h2v-2h-2V9h8v6h2V8c0-.55-.45-1-1-1h-9V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h13zm2-8h-2v2h2zm0 4h-2v2h2zm6 5c0 .55-.45 1-1 1h-1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1h-1c-.55 0-1-.45-1-1s.45-1 1-1h1v-1c0-.55.45-1 1-1s1 .45 1 1v1h1c.55 0 1 .45 1 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgDomainAddRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
