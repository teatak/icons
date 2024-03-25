import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSystemSecurityUpdateGoodOutlined24Px = (
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
    <path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99M17 21H7v-1h10zm0-3H7V6h10zm0-14H7V3h10zm-1 6.05-1.41-1.41-3.54 3.54-1.41-1.41-1.41 1.41L11.05 15z" />
  </svg>
);
const ForwardRef = forwardRef(SvgSystemSecurityUpdateGoodOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
