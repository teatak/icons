import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLabelImportantSharp24Px = (
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
    <path d="M4 18.99h12.04L21 12l-4.97-7H4l5 7z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLabelImportantSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
