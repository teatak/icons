import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPublishSharp24Px = (
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
    <path d="M5 4v2h14V4zm0 10h4v6h6v-6h4l-7-7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPublishSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
