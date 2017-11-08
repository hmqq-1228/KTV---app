var app = angular.module("myApp", ['ionic'])
.controller("mainCtrl", ["$scope", "$state", "$ionicHistory", function($scope, $state,  $ionicHistory) {
		$scope.host = "http://www.520mg.com";
		$scope.goState = function(name, data) {
			$state.go(name, data);
			if(name == "syy_tabs.syy_ktv"){
				console.log(1111111)
				setTimeout(function(){
					window.location.reload();
				},10)
			}
		};
		$scope.back = function() {
			$ionicHistory.goBack();
		}

	}])
// 程亮亮 部分
	.controller("loginCon", ["$scope", "$http", function($scope, $http) {
		$scope.toReg = function() {
			$scope.goState("register", null)
		};
		$scope.toresetPwd = function() {
			$scope.goState("reset", null)
		};
		$scope.user = {
			username: "",
			password: ""
		};
		$scope.login = function() {
			$http.post($scope.host + "/member/index_login.php", {
				fmdo: "login",
				dopost: "login",
				userid: $scope.user.username,
				pwd: $scope.user.password
			}).success(function(data) {
				if(data.status) {
					console.log(data)
					$scope.tip = "登陆成功";
					$scope.goState("index_tabs.home", null);

				} else {
					$scope.tip = data.msg;
				}
			})
		}
	}])
	.controller("registerCon", ["$scope", "$http", function($scope, $http) {
		$scope.user = {
			id: "",
			password: "",
			email: ""
		};
		$scope.register = function() {
			$http.post($scope.host + "/member/reg_new2.php", {

				userid: $scope.user.id,
				userpwd: $scope.user.password,
				email: $scope.user.email
			}).success(function(data) {
				if(data.status) {
					console.log(data);
					//          	$scope.tip="注册成功";
					$scope.goState("login", null);
				} else {
					alert(111);
					console.log(data.msg)
					//              $scope.tip=data.msg;
				}
			})
		}
	}])
	.controller("homeCon", ["$scope", "$http", "$ionicModal", "$ionicBackdrop", "$ionicScrollDelegate", function($scope, $http, $ionicModal, $ionicBackdrop, $ionicScrollDelegate) {
		$scope.toSearch = function() {
			$scope.goState("search", null);
		}
		$scope.toMessage = function() {
			$scope.goState("message", null);
		}
		$scope.toShopping = function() {
			$scope.goState("shopping", null);
		}
		$scope.toOrder = function() {
			$scope.goState("order", null);
		}
		

		/**
		 * 初始化数据时，开启模态层
		 */
		$ionicBackdrop.retain();

		$scope.curIndex = 0;

		/**
		 * 导航字母
		 */
		let navABC = $scope.navABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

		/**
		 * 初始化modal
		 */
		$ionicModal.fromTemplateUrl("template/page/cityPage.html", {
			"scope": $scope,
			"animation": "slide-in-up"
		}).then(function(modal) {
			$scope.modal = modal;
		});

		/**
		 * 使用ajax访问数据，得到所有的城市信息
		 */
		$http.get("cityList.json")
			.success(function(data) {
				//取消模态层
				$ionicBackdrop.release();
				setData(data);
			})
			.error(function() {
				//取消模态层
				$ionicBackdrop.release();
			});

		/**
		 * 将ajax访问得到的数据组装成我们想要的数据格式
		 * @param {Object} data ajax得到的数据
		 */
		function setData(data) {
			$scope.address = {};
			$scope.address.citys = [];

			for(let i = 0; i < navABC.length; i++) {
				let temp = new Object();
				temp.names = [];
				temp.key = navABC[i];

				for(let key in data.citys) {
					if(data.citys[key].pinyin.substr(0, 1).toUpperCase() == navABC[i]) {
						temp.names.push(data.citys[key].city);
					}
				}
				$scope.address.citys.push(temp);
			};
		}

		//点击了某个字母
		$scope.setIndex = function(index, content) {
			$(".myNav>div>div").removeClass("actived");
			$(".myNav>div>div:contains(" + content + ")").addClass("actived");
			//		$scope.curIndex = index;
			let top = $(".item-divider:contains(" + content + ")").offset().top;
			$ionicScrollDelegate.$getByHandle('mainScroll').scrollBy(0, top - 43, true);
		};

		/**
		 * 打开选择地址的modal
		 */
		$scope.openModal = function() {
			$scope.modal.show();
		};

		/**
		 * 关闭选择地址的modal
		 */
		$scope.closeModal = function() {
			$scope.modal.hide();
		}

	}])

	.controller("searchCon", ["$scope", function($scope) {
		$scope.cancel = function() {
			$scope.goState("home", null);
		};
		$scope.page = 1;
		$scope.clear = function() {
			$scope.page = 2;
		}
	}])
	.controller("messageCon", ["$scope", "$state", function($scope, $state) {
		$scope.users = [{
			id: 1,
			name: "皇家礼炮",
			time: "2017-02-22",
			value: "您好，有什么可以帮助您的？ ",
			photo: "img/zyy_img1.fw.png"

		}, {
			id: 2,
			name: "周大千  ",
			value: "那个单子还不错，你也来看看吧？  ",
			photo: "img/zyy_img2.fw.png",
			time: "2017-02-21"
		}, {
			id: 3,
			name: "歌歌歌歌歌手  ",
			value: "好的，我会尽快发货的！  ",
			photo: "img/zyy_img3.fw.png",
			time: "2017-02-20"
		}, {
			id: 5,
			name: "约K联系13535545678",
			value: "好的!",
			photo: "img/zyy_img4.fw.png",
			time: "2017-02-19"
		}, {
			id: 6,
			name: "管她有多美  ",
			value: "你说的这俩种都有，价格也是最低了！",
			photo: "img/zyy_img5.fw.png",
			time: "2017-02-18"
		}];

		$scope.goState = function(u) {
			$state.go("detail", u);
		}
	}])
	.controller("detailCon", ["$scope", "$stateParams", function($scope, $stateParams) {
		$scope.id = $stateParams.id;
		$scope.name = $stateParams.name;
		$scope.time = $stateParams.time;
		$scope.value = $stateParams.value;
		$scope.photo = $stateParams.photo;
		console.log($stateParams, $scope.time);

	}])
	.controller("cityCon", ["$scope", "$http", "$ionicModal", "$ionicBackdrop", "$ionicScrollDelegate", function($scope, $http, $ionicModal, $ionicBackdrop, $ionicScrollDelegate) {
		//标注当前组的字母
		let curText = "";
		/**
		 * 检测地址页面的滚动事件
		 */
		$scope.scrollPosition = function() {
			$(".item-divider").each(function() {
				let top = $(this).offset().top;
				if(top < 50) {
					curText = $(this).text();
					return;
				} else {
					return false;
				}
			});
			$(".myNav>div>div").removeClass("actived");
			$(".myNav>div>div:contains(" + curText + ")").addClass("actived");
		}

	}])
	.controller("shoppingCon", ["$scope", function($scope) {

	}])
	.controller("orderCon", ["$scope", function($scope) {
		$scope.toCard = function() {
			$scope.goState("card", null)
		}
	}])
	.controller("enableCon", ["$scope", function($scope) {

	}])
	
//黄振鹏部分
.controller("groupCtrl",["$scope",function($scope){
	
}])
.controller("group_detailCtrl",["$scope",function($scope){
	
}])
.controller("applyCtrl",["$scope",function($scope){
	
}])
.controller("publishCtrl",["$scope",function($scope){
	
}])
.controller("ylMessageCtrl",["$scope",function ($scope) {

}])
.controller("msgDetailCtrl",["$scope","$ionicActionSheet",function ($scope,$ionicActionSheet) {
    $scope.show = function() {
        // 显示操作表
        $ionicActionSheet.show({
            buttons: [
                { text: `<div class="row hzp-icon-show">
                        <div class="col"><img src="img/hzp-QQ.png" alt=""></div>
                        <div class="col"><img src="img/hzp-sina.png" alt=""></div>
                        <div class="col"><img src="img/hzp-wechat-circle.png" alt=""></div>
                        <div class="col"><img src="img/hzp-chrome.fw.png" alt=""></div>
                        </div>` },
            ],
            cancelText: '取消',
            buttonClicked: function(index) {
                return true;
            }
        });
    };
}])
.controller("ticketsListCtrl",["$scope",function ($scope) {
    
}])
.controller("goodsCtrl",["$scope","$ionicActionSheet",function ($scope,$ionicActionSheet) {
    $scope.addCar = function () {
        $ionicActionSheet.show({
            buttons: [
                { text: `<div class="hzp-addCar">
                            <div class="row">
                                <div class="col-33">
                                    <img src="img/hzp-img4-1.fw.png" alt="">
                                </div>
                                <div>
                                    <h4>蔡依林2016PLAY世界巡回演唱会 - 郑州站</h4>
                                    <p class="hzp-addCar-price">￥<span>790</span></p>
                                </div>
                            </div>
                            <p class="hzp-addnum">购买数量</p>
                            <div class="hzp-addCar-opera"><div>-</div><div class="num">1</div><div>+</div></div>
                            <p class="hzp-bottom-btn">加入购物车</p>
                        </div>` },
            ],
            buttonClicked: function(index) {
                return true;
            }
        });
    }
}])
.controller("couponCtrl",["$scope",function ($scope) {

}])
.controller("posterCtrl",["$scope",function ($scope) {

}])
.controller("posterDetailCtrl",["$scope",function ($scope) {

}])
.controller("nextCtrl",["$scope",function ($scope) {

}])
.controller("foodCtrl",["$scope",function ($scope) {

}])
.controller("newsCtrl",["$scope",function ($scope) {
            
}])
.controller("newsEditCtrl",["$scope",function ($scope) {
            
}])
.controller("xyp_personalCtrl",["$scope",function(xyp_personalCtrl){
	
}])
.controller("infoCon",["$scope","$state","$ionicHistory","$ionicModal",function ($scope,$state,$ionicHistory,$ionicModal) {
	$ionicModal.fromTemplateUrl('template/page/xyp-template/modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
}])
.controller("shopCon",["$scope","$ionicModal",function ($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('template/page/xyp-template/xyp-shop-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };
}])

////////////////////////////////////////李艳娇
.controller("lyjsearchCtrl",["$scope",function($scope){
	$scope.searches = [{'sc':'话筒'},{'sc':'啤酒'},{'sc':'爆米花'}];
	$scope.page=1;
	$scope.del=function(){
		$scope.page=2;
	}
}])
.controller("lyjGoodsListCtrl",["$scope",function($scope){
	$scope.items=[
					{'price':555,
					'src':'img/lyj-sing.png',
					'info':'撼森点歌机家庭用KTV高清触摸卡拉OK点歌机一体机套装可配音响',
					'oldPrice':'158'
					},
					{'price':1288,
					'src':'img/lyj-list2.png',
					'info':'InAndon/音王 KB505 1000G高清点歌机 家庭ktv 卡拉ok点唱一体机',
					'oldPrice':'2228'
					},
					{'price':96,
					'src':'img/lyj-list3.png',
					'info':'进口啤酒 德国啤酒 德国唛帝小麦啤酒 白啤酒 500ML*24',
					'oldPrice':'388'
					},
					{'price':79,
					'src':'img/lyj-list4.png',
					'info':'德国啤酒星晖黑啤酒德国进口黑啤酒51桶装 进口啤酒大桶 黑啤酒',
					'oldPrice':'258'
					},
					{'price':199,
						'src':'img/lyj-list5.png',
						'info':'索爱 SA-A12笔记本台式电脑电视k歌音响 多媒体2.1有源低音炮音箱  ',
						'oldPrice':'599'
					}
					];
}])
.controller("lyj-detailCtrl",["$scope","$ionicActionSheet","$ionicModal",function($scope,$ionicActionSheet,$ionicModal){
	$scope.show = function(){
		$ionicActionSheet.show( {
			buttons: [ {
				text:"<img src='img/lyj-qq.png' class='lyj-img'>&nbsp;&nbsp;<img src='img/lyj-weibo.png' class='lyj-img'>&nbsp;&nbsp;<img src='img/lyj-wechat.png' class='lyj-img'>&nbsp;&nbsp;<img src='img/lyj-broswer.png' class='lyj-img'>" 
			},
			
			], cancelText: '取消', buttonClicked: function(index) {
				return true;
			}
		}
		);
	}
	 $ionicModal.fromTemplateUrl('template/page/lyj-modal.html', {
        scope: $scope,
    }).then(function(modal) {
        $scope.modal = modal;
    });
     $ionicModal.fromTemplateUrl('template/page/lyj-modal2.html', {
        scope: $scope,
    }).then(function(modalT) {
        $scope.modalT = modalT;
    });
}])
.controller("syy_selectCtrl",["$scope",function($scope){
	$scope.isShang = true;
}])
.controller("syy_order",["$scope",function($scope){
	
}])
.controller("message",["$scope",function($scope){
	
}])
.controller("xyp_tabsCtrl",["$scope",function($scope){
	$scope.allItems = [
        {id : 1,name : "麦霸量版式KTV6小时欢唱",count : 1,price : 29.9, stateUrlBig : "img/xyp-order_all-assets/big_one.png",stateUrlSm : "img/xyp-order_all-assets/sm_one.png",time : "2016-02-18"},
        {id : 2,name : "麦霸量版式KTV7小时欢唱",count : 2,price : 29.9, stateUrlBig : "img/xyp-order_all-assets/big_two.png",stateUrlSm : "img/xyp-order_all-assets/sm_two.png",time : "2016-02-18"},
        {id : 3,name : "麦霸量版式KTV8小时欢唱",count : 3,price : 29.9, stateUrlBig : "img/xyp-order_all-assets/big_three.png",stateUrlSm : "img/xyp-order_all-assets/sm_three.png",time : "2016-02-18"},
    ]
	$scope.items = [
        {
            id : 1,
            name : "麦霸量版式KTV6小时欢唱",
            count : 2,
            price : 29.9,
            stateUrl : "img/xyp-order_all-assets/big_two.png",
            time : "2016-02-18"
        },
        {
            id : 2,
            name : "麦霸量版式KTV6小时欢唱",
            count : 1,
            price : 29.9,
            stateUrl : "img/xyp-order_all-assets/big_two.png",
            time : "2016-02-18"
        },
        {
            id : 3,
            name : "麦霸量版式KTV6小时欢唱",
            count : 1,
            price : 29.9,
            stateUrl : "img/xyp-order_all-assets/big_two.png",
            time : "2016-02-18"
        }
    ]
}])
.controller("syy_indexCtrl",["$scope",function($scope){
	
}])
