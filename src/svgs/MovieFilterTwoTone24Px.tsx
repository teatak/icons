import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMovieFilterTwoTone24Px = (
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
      d="M16.63 11.37 18 12l-1.37.63L16 14l-.63-1.37L14 12l1.37-.63L16 10H5.77L4.01 6.47V18h16v-8H16zm-5.69 3.57L10 17l-.94-2.06L7 14l2.06-.94L10 11l.94 2.06L13 14z"
      opacity={0.3}
    />
    <path d="m10 11-.94 2.06L7 14l2.06.94L10 17l.94-2.06L13 14l-2.06-.94zm8.01-7 2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4h-1c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 1.99-.9 1.99-2V4zm2 14h-16V6.47L5.77 10H16l-.63 1.37L14 12l1.37.63L16 14l.63-1.37L18 12l-1.37-.63L16 10h4.01z" />
  </svg>
);
const ForwardRef = forwardRef(SvgMovieFilterTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
