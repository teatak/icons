import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSettingsCellOutlined24Px = (
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
    <path d="M7 22h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zM16 .01 8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99M16 18H8v-1h8zm0-3H8V5h8zm0-12H8V2h8z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSettingsCellOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
