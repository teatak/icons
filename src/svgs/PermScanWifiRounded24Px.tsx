import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPermScanWifiRounded24Px = (
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
    <path d="M12 3C7.41 3 3.86 4.53.89 6.59c-.49.33-.59 1-.22 1.46l9.78 12.04c.8.98 2.3.99 3.1 0l9.78-12.02a1 1 0 0 0-.22-1.46C20.14 4.54 16.59 3 12 3m0 13c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1m-1-8V6h2v2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPermScanWifiRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
