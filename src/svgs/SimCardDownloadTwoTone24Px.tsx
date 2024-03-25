import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSimCardDownloadTwoTone24Px = (
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
    <path d="M6 8.83V20h12V4h-7.17zm5 .19L13 9v4h3l-4 4-4-4h3z" opacity={0.3} />
    <path d="M18 2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H6V8.83L10.83 4H18z" />
    <path d="m12 17 4-4h-3V9l-2 .02V13H8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSimCardDownloadTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
