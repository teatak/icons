import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPhotoLibraryTwoTone24Px = (
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
      d="M8 16h12V4H8zm3.5-4.33 1.69 2.26 2.48-3.09L19 15H9z"
      opacity={0.3}
    />
    <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2m-2 0H8V4h12zm-4.33-5.17-2.48 3.09-1.69-2.25L9 15h10zM4 22h14v-2H4V6H2v14c0 1.1.9 2 2 2" />
  </svg>
);
const ForwardRef = forwardRef(SvgPhotoLibraryTwoTone24Px);
const Memo = memo(ForwardRef);
export default Memo;
