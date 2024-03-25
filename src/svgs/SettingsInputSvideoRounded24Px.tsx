import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSettingsInputSvideoRounded24Px = (
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8" />
    <circle cx={7.5} cy={11.5} r={1.5} />
    <circle cx={16.5} cy={11.5} r={1.5} />
    <circle cx={9} cy={16} r={1.5} />
    <circle cx={15} cy={16} r={1.5} />
    <path d="M15 7.5c0-.83-.67-1.5-1.5-1.5h-3C9.67 6 9 6.67 9 7.5S9.67 9 10.5 9h3c.83 0 1.5-.67 1.5-1.5" />
  </svg>
);
const ForwardRef = forwardRef(SvgSettingsInputSvideoRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
