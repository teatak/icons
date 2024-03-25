import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgAutoAwesomeMosaicOutlined24Px = (
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
    <path d="M3 5v14a2 2 0 0 0 2 2h6V3H5a2 2 0 0 0-2 2m6 14H5V5h4zM19 3h-6v8h8V5c0-1.1-.9-2-2-2m0 6h-4V5h4zM13 21h6c1.1 0 2-.9 2-2v-6h-8zm2-6h4v4h-4z" />
  </svg>
);
const ForwardRef = forwardRef(SvgAutoAwesomeMosaicOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
