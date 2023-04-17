export default function Event() {
  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    .top_bar      {position:relative; }\n\n    .top_dropdown-content img , .top_dropdown img {width:20px;margin:9px 2px 0px 2px}\n\n\n    .top_dropbtn { color:#fff; font: 1em \'Barlow Condensed\',"Noto Sans KR",Verdana,Dotum,AppleGothic,sans-serif; \n        font-size:13px; font-weight:400; line-height:33px; letter-spacing:1.0px; background:transparent; outline:none;\n        cursor: pointer;\n    }\n\n\n\n    .top_dropdown { color:#fff; font-size:13px; font-weight:400; line-height:33px; letter-spacing:1.0px; float:left; text-align:left; padding:0 0 0 20px;\n        position: relative;\n        display: inline-block;\n    }\n\n    .top_dropdown-content {\n        display: none;\n        position: absolute;\n        background-color: #fff; margin:1px 0 0 0; \n        min-width: 100px;\n        overflow: auto; \n        box-shadow: 0px 8px 8px 0px rgba(0,0,0,0.1);\n        z-index: 9999;\n    }\n\n    .top_dropdown-content a { color:#000; font-size:13px; font-weight:500; line-height:33px; letter-spacing:1.0px; padding:0 0 0 2px;\n\n        text-decoration: none;\n        display: block;\n    }\n\n    .top_dropdown a:hover { color:#dc3c23}\n\n    .show {display: block;}\n',
        }}
      />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    .right_fixed { position:fixed; right:0; top:45%;text-align:center;padding:7px 0px; background:#111; z-index:888; display:none }\n    .right_fixed a {display:block; width:45px;padding:8px 0px;  color:#fff; font-size:40px}\n    .right_fixed a:hover { color:#e53d2f}\n\n    .quick_view { position:fixed;border:1px solid #111; width:500px;height:92px; right:45px; top:45%;display:none; z-index:888;background: url("/web/upload/img/quick_empty.png") no-repeat  center center}\n',
        }}
      />
      <div className="right_fixed">
        <a href="#none" onClick="quick_view.style.display='block';" title="최근본내역">
          <i className="material-icons"></i>
        </a>
        <a href="/myshop/wish_list.html" title="관심상품">
          <i className="material-icons"></i>
        </a>
        {/*a href="#top"><i class="material-icons">&#xe255;</i></a*/}
      </div>
      <div className="quick_view" id="quick_view">
        <div className="xans-element- xans-layout xans-layout-productrecent" style={{}}>
          <a
            href="#none"
            onClick="$('#quick_view').hide();"
            style={{
              float: 'right',
              position: 'absolute',
              right: '10px',
              top: '10px',
            }}
          >
            <i className="material-icons" style={{ fontSize: '30px' }}>
              
            </i>
          </a>
          <h2>
            <a href="/product/recent_view_product.html">QUICK VIEW</a>
          </h2>
          <ul>
            <li className="xans-record-">
              <a href="/product/detail.html?product_no=2312&cate_no=362&display_group=1">
                <img src="//icebiscuit.com/web/product/tiny/202109/4f31cf2d0c5d4dba08af88a6496989f9.jpg" alt="" />
              </a>
            </li>
          </ul>
          <p className="player">
            <img
              src="/web/upload/img/quck_prev.png"
              alt="이전 제품"
              className="prev"
              style={{ float: 'left', cursor: 'pointer' }}
            />
            <img
              src="/web/upload/img/quck_next.png"
              alt="다음 제품"
              className="next"
              style={{ float: 'right', cursor: 'pointer' }}
            />
          </p>
        </div>
      </div>
      <div className="top_bar">
        <div className="top_dropdown">
          <button onClick="myFunction()" className="top_dropbtn">
            ▾<img src="/web/upload/img/kr.png" /> KOREA
          </button>
          <div id="top_myDropdown" className="top_dropdown-content">
            <a href="https://icebiscuit.nyc/" target="_blank">
              {' '}
              <img src="/web/upload/img/en.png" style={{ padding: '0 0 0 10px' }} /> USA
            </a>
          </div>
        </div>
        <a href data-aos="fade-down" className="aos-init aos-animate">
          {' '}
          <span style={{ fontSize: '11px' }}>신규회원가입시 3천원 &amp; 5천원 쿠폰 증정</span>
        </a>
        {/*a href="" data-aos="fade-down" >Free shipping on orders over <span style="font-size:11px">&#x20a9;</span>50,000</a*/}
      </div>
      <div id="leftBrand" className="leftBrand">
        <a href="http://www.nununu.co.kr/" id="nununu" target="_blank">
          <img src="/web/upload/img/left_nu.png" alt="" />
        </a>
        <a href="http://bebedepino.com/" id="icebisket" target="_blank">
          <img src="/web/upload/img/left_bp.png" alt="" />
        </a>
      </div>
      {/* //header */}
      {/* cre.ma / init 스크립트 (PC) / 스크립트를 수정할 경우 연락주세요 (support@cre.ma) */}
      <hr className="layout" />
      <div id="wrap">
        <div id="container">
          <div id="contents">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n    #container { width:100%;  margin:0 auto; *zoom:1; }\n    #content { margin:0px auto; padding:50px 0; min-width:1200px; width:100%; } \n#contents {\n    width: 100%;\n\n}\n    \n    .look_name {text-align:center; line-height:20px;   width:260px; padding:15px 20px;  position:absolute; transform: translate(-50%, 0%); -ms-transform: translate(-50%, 0%);left:50%; bottom:0; background:#fff; z-index:99999}\n      .look_name span {font-size:15px !important; font-weight:500 !important; letter-spacing:6.0px;}\n    \n    .listImage { width:87% ; margin:0 auto}\n\n    .ec-base-product .prdList .thumbnail { position:relative; margin:10px 20px; text-align:center; }\n    .ec-base-product .prdList li { margin-bottom:30px}\n    a:hover {opacity:0.8;transition: 0.3s;}\n',
              }}
            />
            <div className="title">
              <h2>EVENT</h2>
            </div>
            <div className="xans-element- xans-product xans-product-normalpackage ">
              <div
                style={{ width: '80%', margin: '20px auto 0', maxWidth: '2000px', minWidth: '1000px' }}
                className="xans-element- xans-product xans-product-listnormal ec-base-product"
              >
                {/*
            $count = 18
                ※ 상품진열갯수를 설정하는 변수입니다. 설정하지 않을 경우, 최대 200개의 상품이 진열 됩니다.
                ※ 진열된 상품이 많으면, 쇼핑몰에 부하가 발생할 수 있습니다.
            $basket_result = /product/add_basket.html
            $basket_option = /product/basket_option.html
        */}
                <ul className="prdList grid3">
                  <li id="anchorBoxId_3425" data-aos="fade-up" className="xans-record- aos-init aos-animate">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=3425&cate_no=145&display_group=1" name="anchorBoxName_3425">
                          <img
                            src="//icebiscuit.com/web/product/medium/202302/29fec43ed330f40d89146efd7ec20d4c.jpg"
                            id="eListPrdImage3425_1"
                            alt="아이스비스킷 - 2023 KCAB 아동복 부문 3년 연속 1위 수상"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_3425 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=3425&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            2023 KCAB 아동복 부문 3년 연속 1위 수상
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_3308" data-aos="fade-up" className="xans-record- aos-init aos-animate">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=3308&cate_no=145&display_group=1" name="anchorBoxName_3308">
                          <img
                            src="//icebiscuit.com/web/product/medium/202302/97762d20a22b7373d8b9faefb0b430bf.jpg"
                            id="eListPrdImage3308_1"
                            alt="아이스비스킷 - ICEBISCUITxEASTPAK COLLABORATIVE BAG LAUNCHING WITH NAVER LIVE"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_3308 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=3308&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            ICEBISCUITxEASTPAK COLLABORATIVE BAG LAUNCHING WITH NAVER LIVE
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_3295" data-aos="fade-up" className="xans-record- aos-init aos-animate">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=3295&cate_no=145&display_group=1" name="anchorBoxName_3295">
                          <img
                            src="//icebiscuit.com/web/product/medium/202302/dfcd084c58c2b544088f3dfdb656f20c.jpg"
                            id="eListPrdImage3295_1"
                            alt="아이스비스킷 - ICEBISCUITxEASTPAK POP-UP STORE: ICEBISCUIT SHOP"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_3295 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=3295&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            ICEBISCUITxEASTPAK POP-UP STORE: ICEBISCUIT SHOP
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_3309" data-aos="fade-up" className="xans-record- aos-init aos-animate">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=3309&cate_no=145&display_group=1" name="anchorBoxName_3309">
                          <img
                            src="//icebiscuit.com/web/product/medium/202302/4a5e6e5f9317a65130a75cf2a743fbd8.jpg"
                            id="eListPrdImage3309_1"
                            alt="아이스비스킷 - ICEBISCUIT 2023 SPRING MAIN OPEN EVENT"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_3309 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=3309&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            ICEBISCUIT 2023 SPRING MAIN OPEN EVENT
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_3238" data-aos="fade-up" className="xans-record- aos-init aos-animate">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=3238&cate_no=145&display_group=1" name="anchorBoxName_3238">
                          <img
                            src="//icebiscuit.com/web/product/medium/202212/38862e9d6f074ddc7d5c3dfa027289d8.jpg"
                            id="eListPrdImage3238_1"
                            alt="아이스비스킷 - ICEBISCUIT 2023 MEMBERSHIP GUIDE"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_3238 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=3238&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>ICEBISCUIT 2023 MEMBERSHIP GUIDE</span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_3224" data-aos="fade-up" className="xans-record- aos-init aos-animate">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=3224&cate_no=145&display_group=1" name="anchorBoxName_3224">
                          <img
                            src="//icebiscuit.com/web/product/medium/202212/82fc4e0583a4d69b0d36bfad64a8291f.jpg"
                            id="eListPrdImage3224_1"
                            alt="아이스비스킷 - ICEBISCUIT 2022 SMILE WEEK CLEARANCE SALE EVENT (종료)"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_3224 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=3224&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            ICEBISCUIT 2022 SMILE WEEK CLEARANCE SALE EVENT (종료)
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_3205" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=3205&cate_no=145&display_group=1" name="anchorBoxName_3205">
                          <img
                            src="//icebiscuit.com/web/product/medium/202211/2faebad6646849519afe0266145bfae6.jpg"
                            id="eListPrdImage3205_1"
                            alt="아이스비스킷 - ICEBISCUIT 2022 NEW&amp;BEST BAGS OPEN POUCH GIVEAWAY"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_3205 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=3205&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span
                            style={{
                              fontSize: '18px',
                              color: '#000000',
                            }}
                          >
                            ICEBISCUIT 2022 NEW&amp;BEST BAGS OPEN POUCH GIVEAWAY
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_3011" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=3011&cate_no=145&display_group=1" name="anchorBoxName_3011">
                          <img
                            src="//icebiscuit.com/web/product/medium/202209/bc274f498f815b06050b33e8c6da3cd5.jpg"
                            id="eListPrdImage3011_1"
                            alt="아이스비스킷 - ICEBISCUIT 2022 F/W SPECIAL GIFT EVENT (종료)"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_3011 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=3011&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            ICEBISCUIT 2022 F/W SPECIAL GIFT EVENT (종료)
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_2905" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=2905&cate_no=145&display_group=1" name="anchorBoxName_2905">
                          <img
                            src="//icebiscuit.com/web/product/medium/202208/a33bb35f2b13d7ac345e95ef71a2d32e.jpg"
                            id="eListPrdImage2905_1"
                            alt="아이스비스킷 - ICEBISCUIT UNDERWEAR 1+1 GET ONE FREE (종료)"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_2905 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=2905&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            ICEBISCUIT UNDERWEAR 1+1 GET ONE FREE (종료)
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_2903" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=2903&cate_no=145&display_group=1" name="anchorBoxName_2903">
                          <img
                            src="//icebiscuit.com/web/product/medium/202207/66eea94f5dca957415c9f1e4f340bab6.jpg"
                            id="eListPrdImage2903_1"
                            alt="아이스비스킷 - ICEBISCUIT REVERSE SEASON UP TO 65% OFF (종료)"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_2903 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=2903&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            ICEBISCUIT REVERSE SEASON UP TO 65% OFF (종료)
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_2886" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=2886&cate_no=145&display_group=1" name="anchorBoxName_2886">
                          <img
                            src="//icebiscuit.com/web/product/medium/202206/d0715e0c13a386cd665523314b4bfa6e.jpg"
                            id="eListPrdImage2886_1"
                            alt="아이스비스킷 - JUST ARRIVED! ICEBISCUIT NEW&amp;BEST SCHOOL BAG"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_2886 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=2886&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            JUST ARRIVED! ICEBISCUIT NEW&amp;BEST SCHOOL BAG
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_2739" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=2739&cate_no=145&display_group=1" name="anchorBoxName_2739">
                          <img
                            src="//icebiscuit.com/web/product/medium/202205/f4f154bac4ec9a28de431735d7e4fcff.jpg"
                            id="eListPrdImage2739_1"
                            alt="아이스비스킷 - ICEBISCUIT 2022 SUMMER SPECIAL GIFT EVENT (종료)"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_2739 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=2739&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            ICEBISCUIT 2022 SUMMER SPECIAL GIFT EVENT (종료)
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_2708" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=2708&cate_no=145&display_group=1" name="anchorBoxName_2708">
                          <img
                            src="//icebiscuit.com/web/product/medium/202204/15f2777f391fdff6df2eafdfbfc8e2f2.gif"
                            id="eListPrdImage2708_1"
                            alt="아이스비스킷 - 2022 S/S SMILE GRIPTOK GIVEAWAY ONLINE EXCLUSIVE (종료)"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_2708 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=2708&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            2022 S/S SMILE GRIPTOK GIVEAWAY ONLINE EXCLUSIVE (종료)
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_2664" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=2664&cate_no=145&display_group=1" name="anchorBoxName_2664">
                          <img
                            src="//icebiscuit.com/web/product/medium/202203/7af4d4b39d3744cd1a06371970a17c24.jpg"
                            id="eListPrdImage2664_1"
                            alt="아이스비스킷 - 2022 KCAB 아동복 부문 2년 연속 1위 수상"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_2664 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=2664&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            2022 KCAB 아동복 부문 2년 연속 1위 수상
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_2495" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=2495&cate_no=145&display_group=1" name="anchorBoxName_2495">
                          <img
                            src="//icebiscuit.com/web/product/medium/202112/d62b78ca3ffdd9090a2d9e1a206c526a.jpg"
                            id="eListPrdImage2495_1"
                            alt="아이스비스킷 - ICEBISCUIT 2022 MEMBERSHIP GUIDE"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_2495 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=2495&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>ICEBISCUIT 2022 MEMBERSHIP GUIDE</span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_2490" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=2490&cate_no=145&display_group=1" name="anchorBoxName_2490">
                          <img
                            src="//icebiscuit.com/web/product/medium/202112/92a9892e81f6929a26bceb05a21be418.jpg"
                            id="eListPrdImage2490_1"
                            alt="아이스비스킷 - ICEBISCUIT 2021 SMILE WEEK BEANIE GIVEAWAY EVENT (종료)"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_2490 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=2490&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            ICEBISCUIT 2021 SMILE WEEK BEANIE GIVEAWAY EVENT (종료)
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_2482" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=2482&cate_no=145&display_group=1" name="anchorBoxName_2482">
                          <img
                            src="//icebiscuit.com/web/product/medium/202112/688827faf58b5a22ea51c16772d75be9.jpg"
                            id="eListPrdImage2482_1"
                            alt="아이스비스킷 - ICEBISCUIT 2021 SMILE WEEK GIVEAWAY EVENT (종료)"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_2482 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=2482&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            ICEBISCUIT 2021 SMILE WEEK GIVEAWAY EVENT (종료)
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                  <li id="anchorBoxId_2381" data-aos="fade-up" className="xans-record- aos-init">
                    <div className="thumbnail">
                      <div className="prdImg">
                        <a href="/simple.html?product_no=2381&cate_no=145&display_group=1" name="anchorBoxName_2381">
                          <img
                            src="//icebiscuit.com/web/product/medium/202109/67036059d5c9197b9acffd98320d6631.jpg"
                            id="eListPrdImage2381_1"
                            alt="아이스비스킷 - ICEBISCUIT 2021 WINTER SPECIAL GIFT EVENT (종료)"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="description">
                      <span className="chk">
                        <input type="checkbox" className="ProductCompareClass xECPCNO_2381 displaynone" />
                      </span>
                      <strong className="name">
                        <a href="/simple.html?product_no=2381&cate_no=145&display_group=1" className>
                          <span className="title displaynone">
                            <span style={{ fontSize: '18px', color: '#000000' }}>상품명</span> :
                          </span>{' '}
                          <span style={{ fontSize: '18px', color: '#000000' }}>
                            ICEBISCUIT 2021 WINTER SPECIAL GIFT EVENT (종료)
                          </span>
                        </a>
                      </strong>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xans-element- xans-product xans-product-normalpaging ec-base-paginate">
              <a href="#none" className="first">
                <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_first.gif" alt="첫 페이지" />
              </a>
              <a href="#none">
                <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_prev.gif" alt="이전 페이지" />
              </a>
              <ol>
                <li className="xans-record-">
                  <a href="?cate_no=145&page=1" className="this">
                    1
                  </a>
                </li>
                <li className="xans-record-">
                  <a href="?cate_no=145&page=2" className="other">
                    2
                  </a>
                </li>
                <li className="xans-record-">
                  <a href="?cate_no=145&page=3" className="other">
                    3
                  </a>
                </li>
              </ol>
              <a href="?cate_no=145&page=2">
                <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_next.gif" alt="다음 페이지" />
              </a>
              <a href="?cate_no=145&page=3" className="last">
                <img src="//img.echosting.cafe24.com/skin/base/common/btn_page_last.gif" alt="마지막 페이지" />
              </a>
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  '\n.ec-base-product .prdList .description .name span { letter-spacing:0.3px; font-size: 18px !important;}\n',
              }}
            />
          </div>
          <hr className="layout" />
        </div>
        <hr className="layout" />
        <div id="quick" />
      </div>
      <hr className="layout" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n    \n    \n/* 하단 */\n#footer {margin:100px 0 0; background:#;border:0;border-top:1px solid #ececec;}\n#footer .footer_inner {max-width:1500px; width:80%; min-width:1000px ; margin:0 auto;padding:90px 0 70px 0}\n    #footer .footer_inner div { float:left; display:inline-block; width:20%}\n    .f_logo img { width:200px}\n  .f_menu  a {color:#DC3C23; display:block; padding:0 0 16px 0; font-size:16px; font-weight:600}\n    .f_call  { font-size:14px; font-weight:500; line-height:20px;letter-spacing:0.5px}\n    .f_call span { display:block; font-weight:600;  font-size:18px; letter-spacing:0.7px}\n     .f_call img  { width:28px; padding:20px 0 0 0}\n    .f_company { font-size:13px;letter-spacing:0.3px;  line-height:22px; color:#000}\n    .copyright { background:#DC3C23; width:100% ; clear:both; color:#fff; font-size:13px; font-weight:600; text-align:center; padding:5px 0; }\n    \n    /* 스크롤버튼 */\n#scrolltotop{  z-index:9999999999;position:fixed;bottom:5px;right:0px;  }\n#scrolltotop span{width:48px;height:48px;display:block;margin:0px 5px 0px 0; border-radius:3px;-webkit-transition:all 0.2s ease-out;-moz-transition:all 0.2s ease-out;-o-transition:all 0.2s ease-out;-ms-transition:all 0.2s ease-out;transition:all 0.2s ease-out}\n\n    ',
        }}
      />
      {/* //footer */}
      {/* Enliple Tracker Start */}
      {/* Enliple Tracker End */}
      <div id="scrolltotop" style={{ display: 'none' }}>
        <a href="#top">
          <span>
            <img src="/web/upload/img/m_top_.png" style={{ width: '35px' }} />
          </span>
        </a>
        {/* 결제를 위한 필수 영역 */}
        <div id="progressPaybar" style={{ display: 'none' }}>
          <div id="progressPaybarBackground" className="layerProgress" />
          <div id="progressPaybarView">
            <div className="box">
              <p className="graph">
                <span>
                  <img
                    src="//img.echosting.cafe24.com/skin/base_ko_KR/layout/txt_progress.gif"
                    alt="현재 결제가 진행중입니다."
                  />
                </span>
                <span>
                  <img src="//img.echosting.cafe24.com/skin/base/layout/img_loading.gif" alt="" />
                </span>
              </p>
              <p className="txt">
                본 결제 창은 결제완료 후 자동으로 닫히며,결제 진행 중에 본 결제 창을 닫으시면
                <br />
                주문이 되지 않으니 결제 완료 될 때 까지 닫지 마시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
        {/* //결제를 위한 필수 영역 */}
      </div>
      <meta name="google-site-verification" content="qpWeMBcfpy1gvDJNbH0Esm-K9QPw7VUex3yrm8PmITQ" />
      {/* Google Tag Manager (noscript) */}
      <noscript>
        &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SGRNH3" height="0" width="0"
        style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
      </noscript>
      {/* End Google Tag Manager (noscript) */}
      <span itemScope itemType="https://schema.org/Organization">
        <link itemProp="url" href="https://icebiscuit.com" />
      </span>
      {/* External Script Start */}
      {/* fbe */}
      {/* CMC3 script */}
      <div id="fbe_common_top_script" style={{ display: 'none' }}></div>
      {/* CMC3 script */}
      {/* gcs */}
      {/* Global site tag (gtag.js) - Google Ads: 10955388085 */}
      {/* gfa */}
      {/* kmp */}
      {/* CMC3 script */}
      <div id="kmp_common_top_script" style={{ display: 'none' }}></div>
      {/* CMC3 script */}
      {/* tgg */}
      {/* CMC script */}
      <div id="tgg_common_top_script" style={{ display: 'none' }}></div>
      {/* CMC script */} {/* CMC script */}
      <div id="tgg_common_bottom_script" style={{ display: 'none' }}>
        {/* WIDERPLANET HOME SCRIPT START 2016.8.24 */}
        <div id="wp_tg_cts" style={{ display: 'none' }} />
        {/* // WIDERPLANET HOME SCRIPT END 2016.8.24 */}
      </div>
      {/* CMC script */}
      {/* External Script End */}
      <div id="modalBackpanel" />
      <div id="modalContainer">
        <iframe id="modalContent" scroll={0} scrolling="no" frameBorder={0} />
      </div>
      <iframe
        src="/exec/front/eclog/main/?cate_no=145&rloc=https%3A//icebiscuit.com/event.html%3Fcate_no%3D145&rref=https%3A//icebiscuit.com/lookbook.html%3Fcate_no%3D258&udim=1920*1080&rserv=elg-db-svcm-089.cafe24.com&cid=CID7b2d67549c2828a23445c0d27adff1fa&role_path=ETC&stype=e&shop_no=1&lang=ko_KR&ver=2"
        id="log_realtime"
        style={{ display: 'none' }}
      />
    </div>
  );
}
