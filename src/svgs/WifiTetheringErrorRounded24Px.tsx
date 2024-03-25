import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgWifiTetheringErrorRounded24Px = (
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
    <path d="M10.66 7.14c-2.24.48-4.04 2.3-4.52 4.54-.37 1.75.02 3.38.89 4.66.34.51 1.08.55 1.51.11.35-.35.37-.88.1-1.28-.5-.76-.75-1.71-.61-2.73.23-1.74 1.67-3.17 3.41-3.4A4.003 4.003 0 0 1 16 13c0 .8-.24 1.54-.64 2.16-.27.41-.25.95.1 1.29.43.43 1.17.4 1.51-.11C17.62 15.4 18 14.25 18 13c0-3.75-3.45-6.7-7.34-5.86m-.41-3.99c-4.05.69-7.19 3.69-8.03 7.72-.66 3.17.2 6.16 1.97 8.38.37.46 1.07.49 1.49.07.36-.36.39-.93.07-1.32a8 8 0 0 1-1.66-6.28c.55-3.47 3.42-6.24 6.92-6.65 2.76-.33 5.27.74 6.93 2.59.2.21.47.34.76.34.85 0 1.34-1.01.77-1.65-2.19-2.45-5.56-3.82-9.22-3.2M12 11c-1.1 0-2 .9-2 2 0 .55.23 1.05.59 1.41s.86.59 1.41.59 1.05-.23 1.41-.59.59-.86.59-1.41c0-1.1-.9-2-2-2m9-1c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1m0 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
  </svg>
);
const ForwardRef = forwardRef(SvgWifiTetheringErrorRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
