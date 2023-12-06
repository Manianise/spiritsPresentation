import { Suspense } from "react";
import { lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../../error_page";
import SpinnerAspect from "./SpinnerAspect.jsx";

export function VideoSpinner({path}) {

    const LazyVideo = lazy(() => import('../video/VideoLoop.jsx'))

    return <ErrorBoundary fallbackComponent={<ErrorPage />}>
        <Suspense fallback={<SpinnerAspect />}>
            <LazyVideo path={path} />
        </Suspense>
    </ErrorBoundary>

}