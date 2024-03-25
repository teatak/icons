import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLibraryAddCheckOutlined24Px = (
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
    <path d="M20 4v12H8V4zm0-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4z" />
    <path fill="none" d="M0 0h24v24H0z" />
  </svg>
);
const ForwardRef = forwardRef(SvgLibraryAddCheckOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
