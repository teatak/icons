import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCurrencyRubleRounded24Px = (
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
    <path d="M8 21c.55 0 1-.45 1-1v-2h3c.55 0 1-.45 1-1s-.45-1-1-1H9v-2h4.5c3.22 0 5.79-2.76 5.47-6.04C18.7 5.1 16.14 3 13.26 3H8c-.55 0-1 .45-1 1v8H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2H6c-.55 0-1 .45-1 1s.45 1 1 1h1v2c0 .55.45 1 1 1m5.5-9H9V5h4.5C15.43 5 17 6.57 17 8.5S15.43 12 13.5 12" />
  </svg>
);
const ForwardRef = forwardRef(SvgCurrencyRubleRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
