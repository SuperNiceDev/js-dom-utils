const log = window.debug("log: DomUtils");

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// export function isMobile ()
// {
//   let bool = false
//   if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i))
//   {
//     bool = true
//   }
//   return bool
// }

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/

export const isTouch = () => {
  const bool =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0;
  // browser with either Touch Events of Pointer Events
  // running on touch-capable device
  return bool;
};

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export const getWindowDimensions = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

export const getWindowOrientation = (width, height) => {
  return width < height ? "portrait" : "landscape";
};

export const getPointerMode = () => {
  return isTouch() ? "touch" : "mouse";
};

// const phoneW = 375;
const phoneW = 425;
// const phoneBP = 560;
const phoneBP = 768;

// const tabletW = 768
// const tabletBP = 1024

const desktopW = 1920;

export const getResponsiveData = (pWidth) => {
  // log('getResponsiveData() pWidth:', pWidth)
  const windowDimensions = getWindowDimensions();
  const orientation = getWindowOrientation(
    windowDimensions.width,
    windowDimensions.height
  );
  const pointerMode = getPointerMode();
  const touch = isTouch();
  const cln = ` ${orientation} ${pointerMode}`;

  // if (pWidth <= phoneBP) {
  return {
    ...windowDimensions,
    touch,
    mobile: true,
    phone: true,
    // tablet: false,
    desktop: false,
    scale: pWidth / phoneW,
    classNames: `phone${cln}`,
  };
  // }
  // else if (pWidth <= tabletBP)
  // {
  //   return {
  //     ...windowDimensions,
  //     touch,
  //     mobile: true,
  //     phone: false,
  //     tablet: true,
  //     desktop: false,
  //     scale: pWidth / tabletW,
  //     classNames: `tablet${cln}`,
  //   }
  // }
  // else {
  //   return {
  //     ...windowDimensions,
  //     touch,
  //     mobile: false,
  //     phone: false,
  //     // tablet: false,
  //     desktop: true,
  //     scale: pWidth / desktopW,
  //     classNames: `desktop${cln}`,
  //   };
  // }

  // --- Android viewport sizes ---
  //                                 W     H      H
  // Galaxy S10 Chrome              412 x 722 || 778

  // --- iOS viewport sizes ---
  //                                 W     H      H
  // iPhone SE 2nd Gen. iOS 14.5    375 x 553 || 628
  // iPhone 12 Pro      iOS 14.5    390 x 664 || 778
  // iPhone 12 Pro Max  iOS 14.5    425 x 746 || 860
  // iPad                          1024 x 768 || xxx

  //    Smartphone                                Tablet / Desktop
  //   Layout 375px         Breakpoint 560px        Layout 1440px       Breakpoint 1920px
  // --------|---------------------|---------------------|---------------------|-------------
  //        100%                                        100%                  133%
  //                 scale up            scale down              scale up              scale up
  //                                                                                      or
  //                                                                                 center content

  //    Smartphone                                     Tablet                                     Desktop
  //   Layout 375px         Breakpoint 560px        Layout 1024px       Breakpoint 1200px       Layout 1440px        Breakpoint 2560px
  // --------|---------------------|---------------------|---------------------|---------------------|---------------------|-------------
  //        100%                                        100%                                        100%                  177%
  //                 scale up            scale down              scale up           scale down              scale up                scale up
  //                                                                                                                                    or
  //                                                                                                                               center content                                                                                                                                             scale up
};

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

export const resizeAndGetMediaQueries = (windowWidth) => {
  const App = document.querySelector(".App");
  const html = document.querySelector("html");
  let className = "";
  let scale = 1;
  // log('resizeAndGetMediaQueries() App:', App)

  if (App) {
    // const responsiveData = getResponsiveData(windowWidth)
    const responsiveData = getResponsiveData(App.offsetWidth);
    // scale = responsiveData.scale;
    scale = Math.round(responsiveData.scale * 100) / 100;
    // log("resizeAndGetMediaQueries() scale:", scale);
    if (html) html.style.fontSize = `${scale * 100}%`;
    className = responsiveData.classNames;
  } else {
    if (html) html.style.fontSize = "100%";
  }

  return { className, scale };
};

// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
