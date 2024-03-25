import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHelpCenterRounded24Px = (
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
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6.99 15c-.7 0-1.26-.56-1.26-1.26 0-.71.56-1.25 1.26-1.25.71 0 1.25.54 1.25 1.25-.01.69-.54 1.26-1.25 1.26m3.01-7.4c-.76 1.11-1.48 1.46-1.87 2.17-.1.18-.16.32-.19.63-.05.45-.45.78-.9.78H12c-.52 0-.93-.44-.88-.96.03-.34.11-.69.3-1.03.49-.87 1.42-1.39 1.96-2.16.57-.81.25-2.33-1.37-2.33-.71 0-1.18.36-1.47.79-.25.36-.69.53-1.1.36a.872.872 0 0 1-.4-1.31C9.65 6.65 10.67 6 11.99 6c1.48 0 2.49.67 3.01 1.52.44.72.7 2.07.02 3.08" />
  </svg>
);
const ForwardRef = forwardRef(SvgHelpCenterRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
