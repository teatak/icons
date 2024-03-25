import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDownload24Px = (
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
    <path d="M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDownload24Px);
const Memo = memo(ForwardRef);
export default Memo;
