import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgBrowseGallerySharp24Px = (
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
    <path d="M9 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 9 3m2.79 13.21L8 12.41V7h2v4.59l3.21 3.21z" />
    <path d="M17.99 3.52v2.16A6.99 6.99 0 0 1 22 12c0 2.79-1.64 5.2-4.01 6.32v2.16C21.48 19.24 24 15.91 24 12s-2.52-7.24-6.01-8.48" />
  </svg>
);
const ForwardRef = forwardRef(SvgBrowseGallerySharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
