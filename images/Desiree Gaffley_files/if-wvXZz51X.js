if (self.CavalryLogger) { CavalryLogger.start_js(["aWKvS"]); }

__d("NotificationEagerLoader",["invariant","Promise","Arbiter","AsyncRequest","JewelLogger","JSResource","NotificationComponentsBootloader","NotificationDataPreloaderConfig","NotificationEndpointState","NotificationListConfig","NotificationsDefaultEndpointURI","Run","performanceAbsoluteNow","performanceNowNoFallback"],(function a(b,c,d,e,f,g,h){"use strict";var i=c("JewelLogger").logDataEagerLoad,j=c("JewelLogger").logJsBootload,k=c("NotificationDataPreloaderConfig").dataPreloader,l=c("NotificationListConfig").dataEagerFetchTrigger,m=c("NotificationListConfig").eagerLoadDelayInMs,n=c("NotificationListConfig").jsBootloadTrigger,o=c("NotificationListConfig").numNotificationsPerPage,p=function(){var B=void 0,C=void 0,D=10,E=l==="page_load"?o:l!=="none"?D:0;return{hasData:E>0,targetNumToLoad:E,endpointState:q(),payloadPromise:new(c("Promise"))(function(F,G){B=F;C=G}),setDependentPromise:function F(G){B||h(0);C||h(0);G.then(B)["catch"](C)}}}();function q(){var B={endpointURI:c("NotificationsDefaultEndpointURI")};return c("NotificationEndpointState").getInstance(B)}function r(B){return c("JSResource")("normalizeNotificationUpdatePayload").__setRef("NotificationEagerLoader").load().then(function(C){return B.then(function(D){return C(D)})})}var s=function(B){return function(){var C=0,D=B.bind(this,C);m===0?D():setTimeout(D,m)}.bind(this)}.bind(this),t=function(B){return function(C,D){var E=D.ts,F=c("performanceAbsoluteNow")()-E,G=m-F,H=B.bind(this,F);G<=0?H():setTimeout(H,G)}.bind(this)}.bind(this),u={browser_dom_content_loaded:function B(C){return document.addEventListener("DOMContentLoaded",s(C))},browser_window_load:function B(C){c("Run").onAfterLoad(s(C))},bigpipe_init:function B(C){return c("Arbiter").subscribeOnce("BigPipe/init",t(C))},bigpipe_tti:function B(C){return c("Arbiter").subscribeOnce("tti_bigpipe",t(C))},bigpipe_pagelets_displayed:function B(C){return c("Arbiter").subscribeOnce("all_pagelets_displayed",t(C))},bigpipe_pagelets_loaded:function B(C){return c("Arbiter").subscribeOnce("all_pagelets_loaded",t(C))}};function v(B){if(!c("performanceNowNoFallback"))c("NotificationComponentsBootloader").load().done();else{j({jewelName:"notifications",eventName:"js_bootload_trigger",trigger:n,timestamp:c("performanceNowNoFallback")()-B,eagerLoadDelayInMs:m});j({jewelName:"notifications",eventName:"js_bootload_start",timestamp:c("performanceNowNoFallback")()});c("NotificationComponentsBootloader").load().done(function(){j({jewelName:"notifications",eventName:"js_bootload_end",timestamp:c("performanceNowNoFallback")()})})}}function w(B){if(c("performanceNowNoFallback")){i({jewelName:"notifications",eventName:"data_eager_load_trigger",trigger:l,timestamp:c("performanceNowNoFallback")()-B,eagerLoadDelayInMs:m});i({jewelName:"notifications",eventName:"data_eager_load_start",timestamp:c("performanceNowNoFallback")()})}}function x(B){w(B);var C=p.targetNumToLoad,D=p.endpointState,E=D.getRequestParams(C),F=new(c("AsyncRequest"))(D.endpointURI).setAllowCrossPageTransition(true).setData(E),G=F.exec().then(function(H){if(c("performanceNowNoFallback"))i({jewelName:"notifications",eventName:"data_eager_load_end",timestamp:c("performanceNowNoFallback")()});return H.getPayload()});p.hasData||h(0);p.setDependentPromise(r(G))}function y(B,C){var D=u[B];D(C)}function z(){A();w(0);k||h(0);var B=new(c("Promise"))(function(C,D){k.onLoaded(function(E){return C(E)});k.onError(D)});if(c("performanceNowNoFallback"))B.done(function(C){i({jewelName:"notifications",eventName:"data_eager_load_end",timestamp:c("performanceNowNoFallback")()})});p.hasData||h(0);p.setDependentPromise(r(B))}function A(){var B=l,C=k,D=B==="none"&&C===null,E=B==="page_load"&&C!=null,F=B!=="page_load"&&B!=="none"&&C===null;D||E||F||h(0)}if(n!=="none")y(n,v);if(l==="page_load")z();else if(l!=="none")y(l,x);f.exports={eagerlyLoadedData:{hasData:p.hasData,targetNumToLoad:p.targetNumToLoad,endpointState:p.endpointState,payloadPromise:p.payloadPromise}}}),null);
__d("legacy:Toggler",["Toggler"],(function a(b,c,d,e,f,g){b.Toggler=c("Toggler")}),3);