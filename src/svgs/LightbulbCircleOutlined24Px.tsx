import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLightbulbCircleOutlined24Px = (
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8" />
    <path d="M12 19c.83 0 1.5-.67 1.5-1.5h-3c0 .83.67 1.5 1.5 1.5M9 15h6v1.5H9zM12 5c-2.76 0-5 2.24-5 5 0 1.64.8 3.09 2.03 4h5.95A4.99 4.99 0 0 0 17 10c0-2.76-2.24-5-5-5m2.43 7.5H9.57A3.47 3.47 0 0 1 8.5 10c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .95-.39 1.84-1.07 2.5" />
  </svg>
);
const ForwardRef = forwardRef(SvgLightbulbCircleOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
