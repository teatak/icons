import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFlipToFrontRounded24Px = (
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
    <path d="M3 13h2v-2H3zm0 4h2v-2H3zm2 4v-2H3a2 2 0 0 0 2 2M3 9h2V7H3zm12 12h2v-2h-2zm4-18H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 12h-8c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1m-7 6h2v-2h-2zm-4 0h2v-2H7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFlipToFrontRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
