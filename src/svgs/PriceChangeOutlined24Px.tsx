import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPriceChangeOutlined24Px = (
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
    <path d="M8 17h2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H8v-1h4V8h-2V7H8v1H7c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h3v1H6v2h2zM20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4V6h16zm-6-8 2-2 2 2m0 4.25-2 2-2-2" />
  </svg>
);
const ForwardRef = forwardRef(SvgPriceChangeOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
