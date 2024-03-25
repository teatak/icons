import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMicrowaveRounded24Px = (
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
    <path d="M6.15 9.97c-.46-.46-.38-1.24.18-1.57.4-.22.88-.4 1.42-.4.8 0 1.39.39 1.81.67.31.21.51.33.69.33.13 0 .26-.05.39-.12a1 1 0 0 1 1.2.16c.46.46.38 1.24-.18 1.56-.39.23-.87.4-1.41.4-.79 0-1.37-.38-1.79-.66-.33-.22-.52-.34-.71-.34a.84.84 0 0 0-.39.12c-.4.23-.89.16-1.21-.15M7.75 15c.19 0 .38.12.71.34.42.28 1 .66 1.79.66.54 0 1.02-.17 1.41-.4.56-.32.64-1.1.18-1.56a1 1 0 0 0-1.2-.16.84.84 0 0 1-.39.12c-.18 0-.38-.12-.69-.33-.42-.28-1.01-.67-1.81-.67-.54 0-1.02.18-1.42.4-.56.33-.64 1.11-.18 1.56a1 1 0 0 0 1.2.16c.14-.07.27-.12.4-.12M22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2m-8 0H4v12h10zm5 10c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1m0-4c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1m0-5h-2v2h2z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMicrowaveRounded24Px);
const Memo = memo(ForwardRef);
export default Memo;
