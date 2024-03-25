import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMarkAsUnreadOutlined24Px = (
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
    <path d="M16.23 7h2.6c-.06-.47-.36-.94-.79-1.17L10.5 2 2.8 5.83c-.48.26-.8.81-.8 1.34V15c0 1.1.9 2 2 2V7.4L10.5 4z" />
    <path d="M20 8H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2m0 11H7v-7l6.5 3.33L20 12zm-6.5-5.67L7 10h13z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMarkAsUnreadOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
