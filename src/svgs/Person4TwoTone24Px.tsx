import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPerson4TwoTone24Px = (
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
    <path
      d="M12 10c1.1 0 2-.9 2-2V5.5h-4V8c0 1.1.9 2 2 2M17.48 16.34C16.29 15.73 14.37 15 12 15s-4.29.73-5.48 1.34c-.32.16-.52.5-.52.88V18h12v-.78c0-.38-.2-.72-.52-.88"
      opacity={0.3}
    />
    <path d="M18.39 14.56C16.71 13.7 14.53 13 12 13s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 17.22V20h16v-2.78c0-1.12-.61-2.15-1.61-2.66M18 18H6v-.78c0-.38.2-.72.52-.88C7.71 15.73 9.63 15 12 15s4.29.73 5.48 1.34c.32.16.52.5.52.88zM12 12c2.21 0 4-1.79 4-4V4.5c0-.83-.67-1.5-1.5-1.5-.52 0-.98.27-1.25.67-.27-.4-.73-.67-1.25-.67s-.98.27-1.25.67c-.27-.4-.73-.67-1.25-.67C8.67 3 8 3.67 8 4.5V8c0 2.21 1.79 4 4 4m-2-6.5h4V8c0 1.1-.9 2-2 2s-2-.9-2-2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgPerson4TwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
