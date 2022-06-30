 #mic .mic,#muteall{
        background-color: #2B3E52;
      }
      .typingIndicatorBubbleDot {
    width: 4px;
    height: 4px;
    margin-right: 4px;
    background-color: #57585a;
    border-radius: 50%;
    animation-name: bounce;
    animation-duration: 1.3s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .mic{
    width:53px;height:50px;margin:1px;border-radius:4px;background-image: url(imgs/mic.png);background-size: cover;background-repeat: no-repeat;background-position: center;
  }
  .typingIndicatorBubbleDot:first-of-type {
    margin: 0px 4px;
  }
  
  .typingIndicatorBubbleDot:nth-of-type(2) {
    animation-delay: 0.15s;
  }
  
  .typingIndicatorBubbleDot:nth-of-type(3) {
    animation-delay: 0.3s;
  }
  .flex-grow-1 {
    flex-grow: 1 !important;
  }
  .c-flex {
    display: flex;
      flex-direction: column;
  }
  .d-flex{
    display: flex; 
  }
  .flex-fill {
    flex: 1 1 auto !important;
  }
  @supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    .bgf {
      background-color: rgba(0, 0, 0, .5);
    }
  }
  .nav-pills li a{border-radius: 0px!important;}
      @keyframes bounce {
    0%,
    60%,
    100% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-4px);
    }
  } 
  td {
    border: 1px solid grey;
    font-weight: bold;
  }  
  th {
    background-color: cornflowerblue;
    color: white;
    padding: 5px;
  }
  .tab-pane{
    padding: 0px;
    width: 100%;
  }
   .pgr{
    -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
   }
  html {
      overflow: hidden;
  } 
  .tc{
    border-radius: 3px!important;
  } 
 
.bgf{
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .bgf {
    background-color: rgba(0, 0, 0, .5);
  }
}td{overflow-y: hidden!important;}
.uzr .fitimg {
    background-size: cover;
}
.room .fitimg {
    background-size: cover;
}
    </style> 

$("<div class='fr borderg minix' style='padding:2px;background-color:white;margin-top: 5px;'><a href='https://1des.net/'></a></div>").insertAfter($(".loginstat"));

$(`<style>
span.flex-grow-1.dots {text-align: center;}
.dots {white-space: normal!important;}
.mini.u-msg {max-height: 100%!important;}
span.btn.fr.fa.fa-eye {transform: matrix(1,0,0,1,-40,-3);}
.fa.fa-user.label.badgex.label-success {transform: matrix(1,0,0,1,-55,0);}
div#l1 input#u1,div#l3 button{width:98%!important;margin-left:3px}
div#l2 button,div#l3 button{margin-left: 3px;border:1px solid #ccc!important;border-radius:2px!important;height:27px!important;padding:0 5px}
div#l1 input#u1{height: 25px!important;border-radius:2px;border:1px solid #e1e0e0;margin-top:3px!important;text-align:center}
div#l2 input#pass1,div#l2 input#u2,div#l3 input#pass2,div#l3 input#u3{height: 23px!important;width:49%!important;padding:0!important;float:right;margin:2px 5px 2px 0}
div#l2 input#u2,div#l3 input#u3{margin-left:-6px;border-radius:15px;border:1px solid #e1e0e0;text-align:center}
div#l2 input#pass1,div#l3 input#pass2{border-radius:15px;border:1px solid #e1e0e0;text-align:center}
div#l2,div#l3{padding:4px!important}
div#l1{margin:0 1px -18px;padding: 4px!important;}
div#l1,div#l2,div#l3{border-bottom:2px solid;margin-bottom:2px;border-top:2px solid;margin-top:2px;border-color:#bababa;border-radius:15px;height:69px}
div#l1 button{border:1px solid #ccc!important;border-radius:2px!important;width:98%;height:27px;margin-left: 3px;padding:0 5px}
div#l2 button{width:70%}

ul.nav.nav-tabs>li>a{border:none;text-align:center;border-radius:3px;display:initial;width:80%;float:left;padding:0!important}

ul.nav.nav-tabs>li.active>a{border:none;border-radius:3px}ul.nav.nav-tabs>li{width:32%;margin:0 5px 0 0}
ul.nav.nav-tabs>li>.fa-user-plus:before,ul.nav.nav-tabs>li>.fa-user:before,ul.nav.nav-tabs>li>.fa-user:before{float:right;margin-right:-26%;padding:0 2px 1px;border-radius:3px;width:23px;text-align:center}
.nav>li>a:focus,.nav>li>a:hover{color:#9abff9}
ul.nav.nav-tabs{margin-top:2px;float:right;width:100%;padding:3px 1px}

div#tlogins::-webkit-scrollbar{width:0px;height:10px}

div#tlogins .fl.mini.u-msg{margin-top:3px!important;border-radius:3px!important}
a.label.label-primary.fl img.fl,button.btn.fr.btn-success.fa.fa-refresh,div#l2 br,div#l3 br{display:none}


a.label.label-primary.fl {
    border-radius: 3px!important;
    margin: 2px -155px;
    padding: 2px!important;
    margin-bottom: 2px;
    text-align: right!important;
}

button.btn.fr.btn-success.fa.fa-refresh{display:none}
a.label.label-primary.fl img.fl{display:none}
#des22{text-align:center!important;font-size:100%!important}
.fr.borderg,.fr.borderg a{font-size:10px!important;padding:0 5px!important;position:relative;color:#ffffff}
.fr.borderg{border:0;margin-top:0;height:0}
span.s1.fa.fa-user.label.badgex.label-as-badge.label-success{padding:0 3px 2px;margin-right:5px}
label.label.label-primary.mini.fl{padding:1px;border-radius:3px!important}

a.label.bg.d-flex.fl {border-radius: 3px!important;margin: 1px 2px;padding: 0px!important;margin-bottom: 2px;text-align: right!important;width: 59%!important;}
ul.nav.nav-tabs {margin-top: 2px;float: right;width: 100%;padding: 3px 1px;height: 30px!important;}
span.btn.fr.btn-success.fa.fa-refresh {display: none;}
.des{position:absolute;transform:matrix(1,0,0,1,86,-197);margin-top:2px;width:300px;height:25px;float:left;background:transparent url(https://www.te3b.com/sico/z1e1qdfn1f10.png) no-repeat scroll right top;text-align:left}
div#tlogins::-webkit-scrollbar{width:0;height:10px}
div#tlogins .fl.mini.u-msg{margin-top:3px!important;border-radius:3px!important}
a.label.label-primary.fl img.fl,button.btn.fr.btn-success.fa.fa-refresh,div#l2 br,div#l3 br{display:none}
a.label.label-primary.fl{height: 26px;border-radius:3px!important;margin:2px -155px;padding:2px!important;margin-bottom:2px;text-align:right!important}button.btn.fr.btn-success.fa.fa-refresh{display:none}
a.label.label-primary.fl img.fl{display:none}
#des22{text-align:center!important;font-size:100%!important}
.fr.borderg,.fr.borderg a{font-size:10px!important;padding:0 5px!important;position:relative;color:#fff}
.fr.borderg{border:0;margin-top:0;height:0}span.s1.fa.fa-user.label.badgex.label-as-badge.label-success{padding:0 3px 2px;margin-right:5px}
label.label.label-primary.mini.fl{padding:1px;border-radius:3px!important}</style>`).insertBefore('body');
