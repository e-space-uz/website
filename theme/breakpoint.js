export const deviceSizes = {
    ms: 375, // mobile small
    mm: 425, // mobile medium
    ml: 576, // mobile large
    ts: 768, // tablet small
    tm: 846, // tablet medium
    tl: 1024, // tablet large
    ls: 1200, // laptop small
    lm: 1250, // latop medium
    md: 1330, // laptop middle
    ds: 1440, // laptop small
    lb: 1800, // laptop big
}
export const breakpoints = {
    mm: `(max-width: ${deviceSizes.mm}px)`,
    ml: `(max-width: ${deviceSizes.ml}px)`,
    ts: `(max-width: ${deviceSizes.ts}px)`,
    tm: `(max-width: ${deviceSizes.tm}px)`,
    tl: `(max-width: ${deviceSizes.tl}px)`,
    ls: `(max-width: ${deviceSizes.ls}px)`,
    lm: `(max-width: ${deviceSizes.lm}px)`,
    ds: `(max-width: ${deviceSizes.ds}px)`,
    md: `(max-width: ${deviceSizes.md}px)`,
    lb: `(max-width: ${deviceSizes.lb}px)`,
}
