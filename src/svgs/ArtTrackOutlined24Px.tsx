import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArtTrackOutlined24Px = (
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
    <path d="M22 13h-8v-2h8zm0-6h-8v2h8zm-8 10h8v-2h-8zm-2-8v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2m-1.5 6-2.25-3-1.75 2.26-1.25-1.51L3.5 15z" />
  </svg>
);
const ForwardRef = forwardRef(SvgArtTrackOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
