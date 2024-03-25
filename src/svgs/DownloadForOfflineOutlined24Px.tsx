import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgDownloadForOfflineOutlined24Px = (
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
    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m2.59-11.41L16 10l-4 4-4-4 1.41-1.41L11 10.17V6h2v4.17zM17 17H7v-2h10z" />
  </svg>
);
const ForwardRef = forwardRef(SvgDownloadForOfflineOutlined24Px);
const Memo = memo(ForwardRef);
export default Memo;
