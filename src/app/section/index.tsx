import React, { Suspense } from "react";
import Loader from "./_loader";

const I = React.lazy(() => import("./introduction"));
export function Introduction() {
  return (
    <Suspense fallback={<Loader />}>
      <I />
    </Suspense>
  );
}

const Car = React.lazy(() => import("./carousel"));
export function Carousel() {
  return (
    <Suspense fallback={<Loader />}>
      <Car />
    </Suspense>
  );
}

const Edu = React.lazy(() => import("./education"));
export function Education() {
  return (
    <Suspense fallback={<Loader />}>
      <Edu />
    </Suspense>
  );
}

const Exp = React.lazy(() => import("./experience"));
export function Experience() {
  return (
    <Suspense fallback={<Loader />}>
      <Exp />
    </Suspense>
  );
}

const C = React.lazy(() => import("./contact"));
export function Contact() {
  return (
    <Suspense fallback={<Loader />}>
      <C />
    </Suspense>
  );
}

const P = React.lazy(() => import("./projects"));
export function Projects() {
  return (
    <Suspense fallback={<Loader />}>
      <P />
    </Suspense>
  );
}

const Abt = React.lazy(() => import("./about"));
export function About() {
  return (
    <Suspense fallback={<Loader />}>
      <Abt />
    </Suspense>
  );
}

const Sk = React.lazy(() => import("./skills"));
export function Skills() {
  return (
    <Suspense fallback={<Loader />}>
      <Sk />
    </Suspense>
  );
}
