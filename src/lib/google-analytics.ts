import ReactGA from "react-ga4";

export const initGA = (trackingId: string) => {
  ReactGA.initialize(trackingId);
};

export const trackPageViewWithUTM = (
  page: string,
  utmParams: Record<string, string | null>
) => {
  ReactGA.send({
    hitType: "pageview",
    page,
    campaign: {
      source: utmParams.utm_source || "",
      medium: utmParams.utm_medium || "",
      name: utmParams.utm_campaign || "",
      content: utmParams.utm_content || "",
      term: utmParams.utm_term || "",
    },
  });
};
