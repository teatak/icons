import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWebAssetRounded24Px = (
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
    <path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2m-1 14H6c-.55 0-1-.45-1-1V8h14v9c0 .55-.45 1-1 1" />
  </svg>
);
const ForwardRef = forwardRef(SvgWebAssetRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
