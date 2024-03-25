import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDownloadDoneSharp24Px = (
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
    <path d="M5 18h14v2H5zm4.6-2.7L5 10.7l2-1.9 2.6 2.6L17 4l2 2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDownloadDoneSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
