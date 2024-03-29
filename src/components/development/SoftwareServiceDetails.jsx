import { useEffect, useRef } from "react";

import Image from "next/image";
import animationCharCome from "@/lib/utils/animationCharCome";
import software from "../../../public/assets/imgs/thumb/softwareservice/thumb.png";

const SoftwareServiceDetails = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="development__area">
        <div className="container g-0 line pt-130 pb-150">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="sec-title-wrapper">
                <h2 className="sec-title animation__char_come" ref={charAnim}>
                  Software Development
                </h2>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
              <div className="development__wrapper">
                <div className="development__content">
                  <p>
                    When developing software, we work to develop solutions that
                    will help you achieve your goals. Building software is a
                    creative process that involves a lot of research and
                    development.
                  </p>
                  <p>
                    We only deliver software solutions that we are proud of and
                    that are up to our standards. To achieve this, we work with
                    the best developers and designers to deliver the best
                    possible product.
                  </p>
                </div>
                <ul>
                  <li>+ Android/IOS Development</li>
                  <li>+ Desktop Applications</li>
                  <li>+ Server Scripts</li>
                  <li>+ System Software </li>
                  <li>+ Middleware</li>
                  <li>+ Driver Software</li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div className="development__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={software}
                  alt="Development Image"
                  data-speed="auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareServiceDetails;
