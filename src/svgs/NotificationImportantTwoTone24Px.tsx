import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNotificationImportantTwoTone24Px = (
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
    <path
      d="M12 6c-2.76 0-5 2.24-5 5v7h10v-7c0-2.76-2.24-5-5-5m1 10h-2v-2h2zm0-4h-2V8h2z"
      opacity={0.3}
    />
    <path d="M12 23c1.1 0 1.99-.89 1.99-1.99h-3.98c0 1.1.89 1.99 1.99 1.99m7-6v-6c0-3.35-2.36-6.15-5.5-6.83V3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.17C7.36 4.85 5 7.65 5 11v6l-2 2v1h18v-1zm-2 1H7v-7c0-2.76 2.24-5 5-5s5 2.24 5 5zM11 8h2v4h-2zm0 6h2v2h-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgNotificationImportantTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
