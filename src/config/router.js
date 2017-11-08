app.config(["$stateProvider","$urlRouterProvider","$ionicConfigProvider",function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
	
    $ionicConfigProvider.platform.ios.tabs.style('standard'); 
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');
    
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center'); 
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        
    
    $ionicConfigProvider.platform.ios.views.transition('ios'); 
    $ionicConfigProvider.platform.android.views.transition('android');
    
    $stateProvider
    //	程亮亮
    	.state({name: "index_tabs",url:"/index_tabs",templateUrl:"template/page/index_tabs.html"})
        .state({name:"login",url:"/login",templateUrl:"template/page/loginPage.html"})
        .state({name:"index_tabs.home",url:"/home", views:{"home":{templateUrl:"template/page/homePage.html"}}})
       	.state({name:"shopping",url:"/shopping",templateUrl:"template/page/shoppingPage.html"})
       	.state({name:"reset",url:"/reset",templateUrl:"template/page/resetpwdPage.html"})
        .state({name:"register",url:"/register",templateUrl:"template/page/registerPage.html"})
        .state({name:"search",url:"/search",templateUrl:"template/page/searchPage.html"})
        .state({name:"message",url:"/message",templateUrl:"template/page/messagePage.html"})
        .state({name:"order",url:"/order",templateUrl:"template/page/orderPage.html"})
        .state({name:"card",url:"/card",templateUrl:"template/page/cardPage.html"})
    	.state({name:"detail",url:"/detail/{id:[0-9]{1,10}}/{name:.{1,15}}/{time:.{1,30}}/{value:.{1,100}}/{photo:.{1,100000}}",templateUrl:"template/page/detailPage.html",controller:"detailCon"})
    	.state("card.enable",{url:"/enable",view:{"enable":{templateUrl:"template/page/enablePage.html"}}})
    	.state("card.disable",{url:"/disable",view:{"disable":{templateUrl:"template/page/disablePage.html"}}})
    	
    // 黄振鹏
    	.state({name : "groupK",url : "/groupK",templateUrl : "template/page/groupK.html"})
    	.state({name : "group_detail",url : "/group_detail",templateUrl : "template/page/group_detail.html"})
    	.state({name : "apply",url : "/apply",templateUrl : "template/page/apply.html"})
    	.state({name : "publish",url : "/publish",templateUrl : "template/page/publish.html"})
    	.state({name : "yl_message",url : "/yl_message",templateUrl : "template/page/yl_message.html"})
    	.state({name : "msg_details",url : "/msg_details",templateUrl : "template/page/msg_details.html"})
    	.state({name : "ticketsList",url : "/ticketsList",templateUrl : "template/page/ticketsList.html"})
    	.state({name : "goods_details",url : "/goods_details",templateUrl : "template/page/goods_details.html"})
    
    	.state({
                name : "goods_details.tabs",
                url : "/tabs",
                templateUrl : "template/page/tabs.html"
            }).state("goods_details.tabs.parameter",{
                url : "/parameter",
                views : {"parameter":{templateUrl:"template/page/parameter.html"}}
            }).state("goods_details.tabs.detail",{
                url : "/detail",
                views : {"detail":{templateUrl:"template/page/detail.html"}}
            }).state("goods_details.tabs.appraise",{
                url : "/appraise",
                views : {"appraise":{templateUrl:"template/page/appraise.html"}}
            })
            
            
            .state({name : "coupon",url : "/coupon",templateUrl : "template/page/coupon.html"})
            
            .state({
                name : "coupon.subcoupon",
                url : "/subcoupon",
                templateUrl : "template/page/subcoupon.html"
            }).state({
                name : "coupon.subcoupon.no_used",
                url : "/no_used",
                views : {"no_used":{templateUrl : "template/page/no_used.html"}}
            }).state({
                name : "coupon.subcoupon.used",
                url : "/used",
                views : {"used":{templateUrl : "template/page/used.html"}}
            }).state({
                name : "coupon.subcoupon.outtime",
                url : "/outtime",
                views : {"outtime":{templateUrl : "template/page/outtime.html"}}
            })
            .state({name : "poster",url : "/poster",templateUrl : "template/page/poster.html"})
            .state({name : "poster_detail",url : "/poster_detail",templateUrl : "template/page/poster_detail.html"})
            .state({name : "next",url : "/next",templateUrl : "template/page/next.html"})
            .state({name : "food",url : "/food",templateUrl : "template/page/food.html"})
            .state({name : "news",url : "/news",templateUrl : "template/page/news.html"})
            .state({name : "news_edit",url : "/news_edit",templateUrl : "template/page/news_edit.html"})
    
    //	谢亚平部分
    		.state({name : "index_tabs.xyp_personal",url : "/xyp_personal", views : {xyp_personal : {templateUrl:"template/page/xyp_personal.html"}}})
    		.state({name : "xyp_message",url : "/xyp_message", templateUrl : "template/page/xyp_message.html"})
    		.state({name : "xyp_data_info",url : "/xyp_data_info", templateUrl : "template/page/xyp_data_info.html"})
    		.state({name : "xyp_shop",url : "/xyp_shop", templateUrl : "template/page/xyp_shop.html"})
   			
   			.state({name : "group_order",url : "/group_order",templateUrl : "template/page/xyp-orderList-index.html"})
	        .state({name : "xyp_tabs",url: "/xyp_tabs",templateUrl : "template/page/xyp-template/tabsPage.html",
	        })
	        .state('xyp_tabs.allOrderList', {
	            url: "/allOrderList",
	            views: {
	                'allOrderList': {
	                templateUrl: "template/page/xyp-allOrder.html",
	            }
	             }
	        })
	        .state('xyp_tabs.waitPay', {
	            url: "/waitPay",
	            views: {
	                'waitPay': {
	                    templateUrl: "template/page/xyp-waitPay.html",
	                }
	            }
	        })
	        .state('xyp_tabs.waitUse', {
	            url: "/waitUse",
	            views: {
	                'waitUse': {
	                    templateUrl: "template/page/xyp-waitUse.html",
	                }
	            }
	        })
	        .state('xyp_tabs.waitComm', {
	            url: "/waitComm",
	            views: {
	                'waitComm': {
	                    templateUrl: "template/page/xyp-waitComm.html",
	                }
	            }
	        })
   
   	// 李燕娇	
   			.state({name : "lyj_index",url : "/lyj_index",templateUrl : "template/page/lyj-indexPage.html"})
   			.state({name : "lyj_search",url : "/lyj_search",templateUrl : "template/page/lyj-search.html"})
   			.state({name : "lyj_goodsList",url : "/lyj_goodsList",templateUrl : "template/page/lyj-goodsList.html"})
   			
   			.state("details",{
				url:"/details",
				templateUrl:"template/page/lyj-detail.html"
			})
			.state("details.lyj_tabs",{
				url : "/lyj_tabs",
				templateUrl : "template/page/lyj_tabs.html"
			})
			.state("details.lyj_tabs.param",{
				url:"/param",
				views:{"param":{
					templateUrl:"template/page/lyj-paramPage.html"
				}}
			})
			.state("details.lyj_tabs.detail",{
				url:"/detail",
				views:{"detail":{
					templateUrl:"template/page/lyj-detailPage.html"
				}}
			})
			.state("details.lyj_tabs.comment",{
				url:"/comment",
				views:{"comment":{
					templateUrl:"template/page/lyj-commentPage.html"
				}}
			})
			.state({
				name : "manager",
				url : "/manager",
				templateUrl : "template/page/lyj-manager.html"
			})
			.state({
				name : "company",
				url : "/company",
				templateUrl : "template/page/lyj-company.html"
			})
			.state({
				name : "info",
				url : "/info",
				templateUrl : "template/page/lyj-info.html"
			})
   			.state({
				name : "lyj_person",
				url : "/lyj_person",
				templateUrl : "template/page/lyj-person.html"
			})
   			
   	// 宋炎炎
   			.state({
   				name : "syy_tabs",
   				url : "/syy_tabs",
   				templateUrl : "template/page/syy_tabs.html"
   			})
   			.state({
   				name : "syy_tabs.syy_ktv",
   				url : "/syy_ktv",
   				views:{"syy_ktv":{templateUrl : "template/page/syy_ktvPage.html"}}
   			})
   			.state({
   				name : "syy_tabs.syy_message",
   				url : "/syy_message",
   				views:{"syy_message":{templateUrl : "template/page/syy_message.html"}}
   			})
   			.state("syy_verify",{url:"/syy_verify",templateUrl:"template/page/syy_verifyOrder.html"})
			.state({
				name : "syy_verify.syy_tabs1",
				url : "/syy_tabs1",
				templateUrl : "template/page/syy_verifyPage.html"
			})
			.state("syy_verify.syy_tabs1.seq",{
				url:"/seq",
				views:{"seq":{templateUrl:"template/page/syy_seqPage.html"}}
			})
			.state("syy_verify.syy_tabs1.sao",{
				url:"/sao",
				views:{"sao":{templateUrl:"template/page/syy_saoPage.html"}}
			})
			.state({
				name : "syy_result",
				url : "/syy_result",
				templateUrl : "template/page/syy_result.html"
			})
			.state({
				name : "syy_count",
				url : "/syy_count",
				templateUrl : "template/page/syy_countPage.html"
			})
			.state({
				name : "syy_tx",
				url : "/syy_tx",
				templateUrl : "template/page/syy_txPage.html"
			})
			.state({
				name : "syy_select",
				url : "/syy_select",
				templateUrl : "template/page/syy_selectPage.html"
			})
			.state({
				name : "syy_addCard",
				url : "/syy_addCard",
				templateUrl : "template/page/syy_addCard.html"
			})
			.state({
				name : "syy_myCard",
				url : "/syy_myCard",
				templateUrl : "template/page/syy_myCard.html"
			})
			.state({
				name : "syy_myAddress",
				url : "/syy_myAddress",
				templateUrl : "template/page/syy_myAddress.html"
			})
			.state({
				name : "syy_order",
				url : "/syy_order",
				templateUrl : "template/page/syy_order.html"
			})
			.state({
				name : "syy_order.syy_all",
				url : "/syy_all",
				views : {"syy_all" : {templateUrl : "template/page/syy_allPage.html"}}
			})
			.state({
				name : "syy_order.syy_wait",
				url : "/syy_wait",
				views : {"syy_wait" : {templateUrl : "template/page/syy_waitPage.html"}}
			})
			.state({
				name : "syy_order.syy_waitV",
				url : "/syy_waitV",
				views : {"syy_waitV" : {templateUrl : "template/page/syy_waitVPage.html"}}
			})
			.state({
				name : "syy_order.syy_over",
				url : "/syy_over",
				views : {"syy_over" : {templateUrl : "template/page/syy_overPage.html"}}
			})
			.state({
				name : "syy_msgDetail",
				url : "/syy_msgDetail",
				templateUrl : "template/page/syy_msgDetail.html"
			})
   $urlRouterProvider.otherwise("/login");
//  /{id:[0-9]{1,10}}/{name:.{1,15}}/{time:.{1,30}}/{value:.{1,100}}/{photo:.{1,100000}}
}])