import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTableViewRounded24Px = (
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
    <path d="M19 7H9c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m0 3c0 .55-.45 1-1 1h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1m-6 5v-2h2v2zm2 2v2h-2v-2zm-4-2H9v-2h2zm6-2h2v2h-2zm-8 4h2v2H9zm8 2v-2h2v2zM6 17H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v1h-2V5H5v10h1z" />
  </svg>
);
const ForwardRef = forwardRef(SvgTableViewRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
