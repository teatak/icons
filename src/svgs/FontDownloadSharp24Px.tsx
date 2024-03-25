import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgFontDownloadSharp24Px = (
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
    <path d="M9.93 13.5h4.14L12 7.98zM22 2H2v20h20zm-6.05 16.5-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13z" />
  </svg>
);
const ForwardRef = forwardRef(SvgFontDownloadSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
