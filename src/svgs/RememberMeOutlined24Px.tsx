import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgRememberMeOutlined24Px = (
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
    <path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 20H7v-1h10zm0-3H7v-.48c1.47-.99 3.22-1.52 5-1.52s3.53.53 5 1.52zm0-2.79c-1.5-.77-3.2-1.21-5-1.21s-3.5.44-5 1.21V6h10zM17 4H7V3h10z" />
    <path d="M12 13c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
  </svg>
);
const ForwardRef = forwardRef(SvgRememberMeOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
