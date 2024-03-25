import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPictureInPictureTwoTone24Px = (
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
    <path d="M19 7h-8v6h8zm-2 4h-4V9h4z" />
    <path d="M13 9h4v2h-4z" opacity={0.3} />
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2m0 16.01H3V4.98h18z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPictureInPictureTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
