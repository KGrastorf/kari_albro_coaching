if (self.CavalryLogger) { CavalryLogger.start_js(["nLgBV"]); }

__d("MercuryJewelCountControl",["Arbiter","Bootloader","CurrentUser","MercuryConfig","MercuryDispatcher","MercuryThreadInformer","MercuryUnseenState","MercuryUnreadState","UserActivity","isInFocusMode"],(function a(b,c,d,e,f,g){function h(i,j){"use strict";this.$MercuryJewelCountControl3=false;this.$MercuryJewelCountControl2={};this.$MercuryJewelCountControl3=false;Object.keys(j).forEach(function(k){this.$MercuryJewelCountControl2[k]=c("MercuryUnseenState").getForFBID(k)}.bind(this));this.$MercuryJewelCountControl4();this.render();Object.keys(j).forEach(function(k){c("MercuryDispatcher").getForFBID(k).subscribe("model-update-completed",function(l,m){this.$MercuryJewelCountControl5(k)}.bind(this));c("MercuryThreadInformer").getForFBID(k).subscribe("unseen-updated",function(){return this.render()}.bind(this))}.bind(this));this.$MercuryJewelCountControl1=i;this.$MercuryJewelCountControl1.subscribe("marked-seen",function(){this.$MercuryJewelCountControl6()}.bind(this))}h.prototype.render=function(){"use strict";var i=0;if(!c("isInFocusMode")())i=Object.keys(this.$MercuryJewelCountControl2).reduce(function(j,k){var l=k==c("CurrentUser").getID()||!!this.$MercuryJewelCountControl3;return l?j+this.$MercuryJewelCountControl2[k].getUnseenCount():j}.bind(this),0);c("Arbiter").inform("jewel/count-updated",{jewel:"mercurymessages",count:i},c("Arbiter").BEHAVIOR_STATE)};h.prototype.$MercuryJewelCountControl4=function(){var i,j=this;"use strict";if(c("MercuryConfig").PagesTabConfig&&c("MercuryConfig").PagesTabConfig.unseenJewelEnabled)(function(){j.$MercuryJewelCountControl3=true;var k=c("MercuryConfig").PagesTabConfig;c("Bootloader").loadModules(["MercurySyncPageEnvironment"],function(l){return l.setUp(k.pageID,k.irisPageSeqID)},"MercuryJewelCountControl")})()};h.prototype.$MercuryJewelCountControl6=function(){"use strict";Object.keys(this.$MercuryJewelCountControl2).forEach(function(i){this.$MercuryJewelCountControl2[i].markAsSeen()}.bind(this))};h.prototype.$MercuryJewelCountControl5=function(i){"use strict";if(this.$MercuryJewelCountControl1.isOpen()&&c("UserActivity").isActive())this.$MercuryJewelCountControl2[i]&&this.$MercuryJewelCountControl2[i].markAsSeen()};h.constructStores=function(i){"use strict";Object.keys(i).forEach(function(j){c("MercuryUnseenState").getForFBID(j);c("MercuryUnreadState").getForFBID(j)})};f.exports=h}),null);
__d("MessagesJewelThreadlistRowContainer.react",["ChatOpenTab","ChatOpenTabEventLogger","FantaTabActions","ImmutableObject","MercuryDelayedRoger","MercuryIDs","MercuryThreadlistRowContainer.react","MessagesJewelThreadListRow.react","MessengerMessageRequestsTypedLogger","ReactComponentWithPureRenderMixin","React","StoreAndPropBasedStateMixin","CurrentUser"],(function a(b,c,d,e,f,g){"use strict";var h=c("MercuryDelayedRoger").get(),i=c("React").PropTypes,j=c("React").createClass({displayName:"MessagesJewelThreadlistRowContainer",mixins:[c("ReactComponentWithPureRenderMixin"),c("StoreAndPropBasedStateMixin")(h)],propTypes:{folder:i.string,thread:i.instanceOf(c("ImmutableObject")).isRequired,viewer:i.string.isRequired},statics:{calculateState:function k(l){return{wasSeenByAll:h.wasSeenByAll(l.thread.thread_id)}}},render:function k(){return c("React").createElement(c("MercuryThreadlistRowContainer.react"),{ChildClass:c("MessagesJewelThreadListRow.react"),onClick:this._handleClick,showPresence:c("ChatOpenTab").canOpenTab(),thread:this.props.thread,viewer:this.props.viewer,wasSeenByAll:this.state.wasSeenByAll})},_handleClick:function k(l){if(l.button===1||l.altKey||l.ctrlKey||l.metaKey||l.shiftKey)return;if(!c("ChatOpenTab").canOpenTab())return;l.preventDefault();var m=this.props.thread.thread_id,n=c("CurrentUser").getID(),o=c("MercuryIDs").getThreadKeyfromThreadIDUserID(m,n);c("FantaTabActions").openTab(m,"jewel_thread");c("ChatOpenTabEventLogger").logClickOpen("jewel",m);var p=void 0;switch(this.props.folder){case"inbox":p="inbox";break;case"pending":p="pending";break;case"other":p="other";break}new(c("MessengerMessageRequestsTypedLogger"))().setAction("message_requests_thread_open").setThreadID(c("MercuryIDs").getUserIDFromThreadID(m)).setSurface(p).setFolderType(this.props.thread.folder).setThreadKey(o).log()}});f.exports=j}),null);
__d("MessagesJewelThreadList.react",["cx","fbt","BootloadedComponent.react","EventProfiler","ImmutableObject","JSResource","Link.react","MercuryConfig","MercuryMessageBlockingNuxContainer.react","MessageBlockNuxState","MessagesJewelThreadlistRowContainer.react","MessagingTag","React","ScrollableArea.react","XUISpinner.react","debounce","getViewportDimensions","requireWeak","throttle"],(function a(b,c,d,e,f,g,h,i){"use strict";var j,k,l=160,m=60,n=10,o=c("React").PropTypes;j=babelHelpers.inherits(p,c("React").Component);k=j&&j.prototype;function p(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=k.constructor).call.apply(q,[this].concat(t)),this.$MessagesJewelThreadList3=function(){if(this.props.isLoaded)return;var v=this.refs.scrollable.getArea();if(v.getScrollTop()+v.getClientHeight()>=v.getScrollHeight()-1)this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest()}.bind(this),this.$MessagesJewelThreadList9=function(v){v.preventDefault();this.props.onLoadMoreRequest&&this.props.onLoadMoreRequest()}.bind(this),this.$MessagesJewelThreadList8=function(v){if(this.props.onFilteredRequestsClick)this.props.onFilteredRequestsClick(v)}.bind(this),this.state={height:this.$MessagesJewelThreadList2()},r}p.prototype.componentDidMount=function(){this.$MessagesJewelThreadList1=Event.listen(window,"resize",c("debounce")(function(){this.setState({height:this.$MessagesJewelThreadList2()})}.bind(this)));c("EventProfiler").informManualInteractionTimestamp(["Messages_Jewel_Button"],true,"click");c("requireWeak")("FantaTabsEagerBootloader",function(q){return q.bootload()})};p.prototype.componentDidUpdate=function(q){if(q.threads.length===0&&this.props.threads.length!==0)this.props.onRenderThreads&&this.props.onRenderThreads();c("EventProfiler").informManualInteractionTimestamp(["Messages_Jewel_Button"],true,"click")};p.prototype.componentWillUnmount=function(){this.$MessagesJewelThreadList1.remove()};p.prototype.render=function(){return c("React").createElement(c("ScrollableArea.react"),{className:"_2q3u",height:this.state.height,onScroll:c("throttle")(this.$MessagesJewelThreadList3,50),ref:"scrollable"},c("React").createElement("ul",{className:"jewelContent"},this.props.p2pJewelBannerContainer?c("React").createElement("li",null,this.props.p2pJewelBannerContainer):null,this.$MessagesJewelThreadList4(),this.$MessagesJewelThreadList5(),c("MessageBlockNuxState").shouldShowMessageBlockingNuxInJewel?c("React").createElement(c("MercuryMessageBlockingNuxContainer.react"),{shouldShowImage:true,location:"jewel"}):null,this.props.threads.map(function(q){return this.$MessagesJewelThreadList6(q)}.bind(this))),this.$MessagesJewelThreadList7())};p.prototype.$MessagesJewelThreadList6=function(q){if(Array.isArray(q))return this.$MessagesJewelThreadList4(q);else return c("React").createElement(c("MessagesJewelThreadlistRowContainer.react"),{folder:this.props.folder,key:q.thread_id,showAggregation:this.props.showAggregation,thread:q,viewer:this.props.viewer})};p.prototype.$MessagesJewelThreadList2=function(){var q=(this.props.maxInitialThreadCount||n)*m;return Math.min(q,c("getViewportDimensions")().height-l)};p.prototype.$MessagesJewelThreadList7=function(){if(this.props.showAggregation)return null;else if(this.props.isLoaded){if(this.props.folder===c("MessagingTag").PENDING)return c("React").createElement("div",{className:"_16bh _16bi"},c("React").createElement(c("Link.react"),{onClick:this.$MessagesJewelThreadList8},i._("See filtered requests")));return null}if(this.props.isLoading)return c("React").createElement(c("XUISpinner.react"),{className:"jewelLoading"});return c("React").createElement("div",{className:"_v8y"},c("React").createElement(c("Link.react"),{href:"#",onClick:this.$MessagesJewelThreadList9},i._("Show Older")))};p.prototype.$MessagesJewelThreadList4=function(q){var r=c("MercuryConfig").MessengerInboxRequests,s=this.props.newMessageRequestThreads;if(r)s=q;if(!this.props.jewelRequestsUI&&!r||this.props.folder===c("MessagingTag").PENDING||!s||s.length===0)return null;return c("React").createElement(c("BootloadedComponent.react"),{key:s[0].thread_id,bootloadPlaceholder:c("React").createElement("li",{style:{height:60}}),bootloadLoader:c("JSResource")("MessagesJewelMessageRequestsRow.react").__setRef("MessagesJewelThreadList.react"),onClick:function(t){return this.$MessagesJewelThreadList10(t,s)}.bind(this),threads:s,viewer:this.props.viewer})};p.prototype.$MessagesJewelThreadList5=function(){if(!this.props.jewelRequestsUI||this.props.folder!==c("MessagingTag").PENDING)return null;return c("React").createElement("li",{className:"_16bh _16bi"},i._("Open a request to get more info about who's messaging you."),c("React").createElement("br",null),i._("They won't know you've seen it until you accept."))};p.prototype.$MessagesJewelThreadList10=function(q,r){this.props.onAggregationClick&&this.props.onAggregationClick(q,r)};p.propTypes={folder:o.string,isLoaded:o.bool,isLoading:o.bool,maxInitialThreadCount:o.number,jewelRequestsUI:o.bool,onFilteredRequestsClick:o.func,onLoadMoreRequest:o.func,onMessageRequestsClick:o.func,onRenderThreads:o.func,onAggregationClick:o.func,p2pJewelBannerContainer:o.element,showAggregation:o.bool,threads:o.arrayOf(o.oneOfType([o.instanceOf(c("ImmutableObject")),o.arrayOf(o.instanceOf(c("ImmutableObject")))])).isRequired,viewer:o.string.isRequired};f.exports=p}),null);
__d("MercuryJewelThreadlistControl",["csx","cx","fbt","ArbiterMixin","BootloadedComponent.react","CurrentUser","CSS","DOM","Event","JSLogger","JSResource","MercuryConfig","MercuryMessengerJewelPerfConfig","MercuryFilters","MercuryThreadlistConstants","MercuryThreadlistContainer.react","MessagesJewelThreadList.react","MessagingTag","MessengerURIConstants","PagesEventObserver","React","ReactDOM","MercuryThreadInformer","MercuryUnreadState","MercuryUnseenState","XUISpinner.react","mixin"],(function a(b,c,d,e,f,g,h,i,j){var k,l,m=c("JSLogger").create("mercury_jewel"),n=c("MessagingTag").PENDING,o="back_to_inbox",p=c("MessagingTag").INBOX,q=j._("See All in Messenger"),r=j._("See All Page Messages");k=babelHelpers.inherits(s,c("mixin")(c("ArbiterMixin")));l=k&&k.prototype;function s(t){"use strict";l.constructor.call(this);this.$JewelThreadlistControl21=function(v,w){v.preventDefault();this.$JewelThreadlistControl1=w;var x=this.$JewelThreadlistControl3;if(this.$JewelThreadlistControl6[x])c("CSS").removeClass(this.$JewelThreadlistControl6[x],"_1sdd");this.$JewelThreadlistControl8=false;this.render();this.$JewelThreadlistControl3="aggregation"}.bind(this);this.$JewelThreadlistControl19=function(v){v.preventDefault();this.$JewelThreadlistControl9(c("MessagingTag").PENDING,c("MercuryFilters").ALL)}.bind(this);this.$JewelThreadlistControl20=function(v){v.preventDefault();this.$JewelThreadlistControl9(c("MessagingTag").OTHER,c("MercuryFilters").ALL)}.bind(this);var u=t.getFlyout();this.$JewelThreadlistControl1=[];this.$JewelThreadlistControl2=c("DOM").find(u,"._3v_l");this.$JewelThreadlistControl3=c("MessagingTag").INBOX;this.$JewelThreadlistControl4=c("MercuryFilters").ALL;this.$JewelThreadlistControl5=c("CurrentUser").getID();this.$JewelThreadlistControl6={};this.$JewelThreadlistControl7={};this.$JewelThreadlistControl6[c("MessagingTag").INBOX]=c("DOM").find(u,"._1sde");this.$JewelThreadlistControl7[c("MessagingTag").INBOX]=c("DOM").find(u,"._1sdg");this.$JewelThreadlistControl8=false;c("Event").listen(this.$JewelThreadlistControl6[c("MessagingTag").INBOX],"click",function(){return this.$JewelThreadlistControl9(c("MessagingTag").INBOX,c("MercuryFilters").ALL)}.bind(this));if(!c("MercuryConfig").JewelRequestsUI){this.$JewelThreadlistControl6[n]=c("DOM").find(u,"._1sdf");this.$JewelThreadlistControl7[n]=c("DOM").find(u,"._1sdh");c("Event").listen(this.$JewelThreadlistControl6[n],"click",function(){return this.$JewelThreadlistControl9(n,c("MercuryFilters").ALL)}.bind(this))}else{this.$JewelThreadlistControl6[o]=c("DOM").find(u,"._34zq");c("Event").listen(this.$JewelThreadlistControl6[o],"click",function(){return this.$JewelThreadlistControl9(c("MessagingTag").INBOX,c("MercuryFilters").ALL)}.bind(this))}this.$JewelThreadlistControl10=c("DOM").find(u,"._1c1m");this.$JewelThreadlistControl11=c("DOM").find(u,"._4djt");this.$JewelThreadlistControl12=c("MercuryUnreadState").get();c("Event").listen(this.$JewelThreadlistControl10,"click",function(v){this.$JewelThreadlistControl13();v.kill()}.bind(this));c("MercuryThreadInformer").get().subscribe("unread-updated",function(){return this.$JewelThreadlistControl14()}.bind(this));this.$JewelThreadlistControl14();this.$JewelThreadlistControl15(u);this.render();m.bump("opened_threadlist_"+this.$JewelThreadlistControl3)}s.prototype.$JewelThreadlistControl15=function(t){"use strict";var u=c("MercuryConfig").PagesTabConfig;if(!u)return;this.$JewelThreadlistControl6[c("MessagingTag").PAGES]=c("DOM").find(t,"._481w");this.$JewelThreadlistControl7[c("MessagingTag").PAGES]=c("DOM").find(t,"._37p3");this.$JewelThreadlistControl16=c("MercuryConfig").PagesTabConfig.pageID;this.$JewelThreadlistControl17=c("MercuryUnreadState").getForFBID(this.$JewelThreadlistControl16);c("Event").listen(this.$JewelThreadlistControl6[c("MessagingTag").PAGES],"click",function(){c("PagesEventObserver").notify("biz_conv_page_tab_click",this.$JewelThreadlistControl16,{"unread-count":this.$JewelThreadlistControl17.getUnreadCount(p)},false);this.$JewelThreadlistControl9(c("MessagingTag").PAGES,c("MercuryFilters").ALL)}.bind(this));c("MercuryThreadInformer").getForFBID(this.$JewelThreadlistControl16).subscribe("unread-updated",function(){return this.$JewelThreadlistControl18()}.bind(this));this.$JewelThreadlistControl18();this.changeTabIfNecessary()};s.prototype.changeTabIfNecessary=function(){"use strict";var t=c("MercuryUnseenState").get().getUnseenCount();if(t>0&&this.$JewelThreadlistControl5===this.$JewelThreadlistControl16)this.$JewelThreadlistControl9(c("MessagingTag").INBOX,c("MercuryFilters").ALL);if(this.$JewelThreadlistControl16){var u=c("MercuryUnseenState").getForFBID(this.$JewelThreadlistControl16).getUnseenCount();if(c("MercuryConfig").PagesTabConfig.unseenJewelEnabled&&u>0&&t===0)this.$JewelThreadlistControl9(c("MessagingTag").PAGES,c("MercuryFilters").ALL)}};s.prototype.render=function(){"use strict";if(this.$JewelThreadlistControl5==c("CurrentUser").getID())c("ReactDOM").render(c("React").createElement(c("MercuryThreadlistContainer.react"),{ChildClass:c("MessagesJewelThreadList.react"),folder:this.$JewelThreadlistControl3,filter:this.$JewelThreadlistControl4,jewelRequestsUI:c("MercuryConfig").JewelRequestsUI,viewer:this.$JewelThreadlistControl5,onMessageRequestsClick:this.$JewelThreadlistControl19,onFilteredRequestsClick:this.$JewelThreadlistControl20,onAggregationClick:this.$JewelThreadlistControl21,resetAggregatedThreads:this.$JewelThreadlistControl8,threadIDs:this.$JewelThreadlistControl1,threadCount:c("MercuryMessengerJewelPerfConfig").initialThreadCount}),this.$JewelThreadlistControl2);else c("ReactDOM").render(c("React").createElement(c("BootloadedComponent.react"),{bootloadLoader:c("JSResource")("PagesMessengerThreadlistContainer.react").__setRef("MercuryJewelThreadlistControl"),bootloadPlaceholder:c("React").createElement(c("XUISpinner.react"),{className:"jewelLoading"}),pageID:this.$JewelThreadlistControl5,config:c("MercuryConfig").PagesTabConfig}),this.$JewelThreadlistControl2)};s.prototype.$JewelThreadlistControl13=function(){"use strict";if(this.$JewelThreadlistControl5==c("CurrentUser").getID())this.$JewelThreadlistControl12.markFolderAsRead(this.$JewelThreadlistControl3);else this.$JewelThreadlistControl17.markFolderAsRead(c("MessagingTag").INBOX)};s.prototype.$JewelThreadlistControl9=function(t,u){"use strict";this.$JewelThreadlistControl8=true;this.$JewelThreadlistControl1=[];if(this.$JewelThreadlistControl3!==t||this.$JewelThreadlistControl4!==u){var v=this.$JewelThreadlistControl3,w=t===c("MessagingTag").INBOX,x=t;m.bump("opened_threadlist_"+t);if(this.$JewelThreadlistControl6[x])c("CSS").addClass(this.$JewelThreadlistControl6[x],"_1sdd");if(this.$JewelThreadlistControl6[v])c("CSS").removeClass(this.$JewelThreadlistControl6[v],"_1sdd");this.$JewelThreadlistControl3=t;this.$JewelThreadlistControl4=u;if(w){this.$JewelThreadlistControl11.href=c("MessengerURIConstants").FACEBOOK_PREFIX;this.$JewelThreadlistControl11.text=q;this.$JewelThreadlistControl5=c("CurrentUser").getID()}else if(t==n){this.$JewelThreadlistControl11.href=c("MessengerURIConstants").FACEBOOK_PREFIX+c("MessengerURIConstants").MESSAGE_REQUESTS_PATH;this.$JewelThreadlistControl11.text=q;this.$JewelThreadlistControl5=c("CurrentUser").getID()}else if(t==c("MessagingTag").PAGES){this.$JewelThreadlistControl5=this.$JewelThreadlistControl16;this.$JewelThreadlistControl11.href=c("MercuryConfig").PagesTabConfig.pageMessageURI;this.$JewelThreadlistControl11.text=r}if(c("MercuryConfig").JewelRequestsUI){c("CSS").conditionShow(this.$JewelThreadlistControl6[c("MessagingTag").INBOX],w);c("CSS").conditionShow(this.$JewelThreadlistControl6[o],!w)}this.render()}};s.prototype.$JewelThreadlistControl14=function(){"use strict";this.$JewelThreadlistControl22(c("MessagingTag").INBOX);if(!c("MercuryConfig").JewelRequestsUI)this.$JewelThreadlistControl22(n)};s.prototype.$JewelThreadlistControl18=function(){"use strict";var t=void 0;if(this.$JewelThreadlistControl17.exceedsMaxCount(p))t=c("MercuryThreadlistConstants").MAX_UNREAD_COUNT;else t=this.$JewelThreadlistControl17.getUnreadCount(p);this.$JewelThreadlistControl23(t,c("MessagingTag").PAGES)};s.prototype.$JewelThreadlistControl22=function(t){"use strict";var u=void 0;if(this.$JewelThreadlistControl12.exceedsMaxCount(t))u=c("MercuryThreadlistConstants").MAX_UNREAD_COUNT;else u=this.$JewelThreadlistControl12.getUnreadCount(t);this.$JewelThreadlistControl23(u,t)};s.prototype.$JewelThreadlistControl23=function(t,u){"use strict";var v=this.$JewelThreadlistControl7[u];if(!v)return;var w=t?t.toString():0;if(t>0){if(t==c("MercuryThreadlistConstants").MAX_UNREAD_COUNT)w+="+";c("DOM").setContent(v,j._("({unread_count})",[j.param("unread_count",w)]))}else c("DOM").setContent(v,"")};f.exports=s}),null);
__d("MercuryJewel",["Arbiter","EventProfiler","MercuryJewelCountControl","MercuryMessengerJewelPerfConfig","MercuryServerPayloadPreprocessor"],(function a(b,c,d,e,f,g){var h=false,i=false,j=null;function k(l,m){"use strict";c("MercuryJewelCountControl").constructStores(m);Object.keys(m).forEach(function(n){c("MercuryServerPayloadPreprocessor").getForFBID(n).handleUpdate(m[n])});this.$MercuryJewel1=new(c("MercuryJewelCountControl"))(l,m);if(c("MercuryMessengerJewelPerfConfig").eagerFlyoutOnAfterLoad)this.$MercuryJewel2(l);l.subscribeOnce("opened",function(){this.$MercuryJewel2(l)}.bind(this));l.subscribe("open",function(){this.$MercuryJewel3(l);this.$MercuryJewel4()}.bind(this));if(c("MercuryMessengerJewelPerfConfig").eagerLoadingOnBadge)l.subscribe("updated",function(n,o){if(o&&o.count>0)this.$MercuryJewel2(l)}.bind(this))}k.prototype.$MercuryJewel2=function(l){"use strict";this.$MercuryJewel3(l);if(!h){h=true;if(!l.isOpen())j=c("EventProfiler").notifyRunningEagerInteraction(l.getRoot(),"click");e(["MercuryJewelThreadlistControl"],function(m){this.$MercuryJewel5=new m(l)}.bind(this));c("Arbiter").inform("mercury-jewel/opened",null,c("Arbiter").BEHAVIOR_STATE)}};k.prototype.$MercuryJewel4=function(){"use strict";this.$MercuryJewel5&&this.$MercuryJewel5.changeTabIfNecessary()};k.prototype.$MercuryJewel3=function(l){"use strict";if(!i&&l.isOpen()){i=true;c("EventProfiler").tagCurrentActiveInteractionsAs("FirstMercuryJewelOpen");if(j)j()}};f.exports=k}),null);