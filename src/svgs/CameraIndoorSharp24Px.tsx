import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCameraIndoorSharp24Px = (
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
    <path d="M12 3 4 9v12h16V9zm4 13.06L14 15v2H8v-6h6v2l2-1.06z" />
  </svg>
);
const ForwardRef = forwardRef(SvgCameraIndoorSharp24Px);
const Memo = memo(ForwardRef);
export default Memo;
