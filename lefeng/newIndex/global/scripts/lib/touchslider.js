/**
 * TouchSlider v1.3.1
 * By qiqiboy, http://www.qiqiboy.com, http://weibo.com/qiqiboy, 2013/08/30
 */
eval(function(B,D,A,G,E,F){function C(A){return A<62?String.fromCharCode(A+=A<26?65:A<52?71:-4):A<63?'_':A<64?'$':C(A>>6)+C(A&63)}while(A>0)E[C(G--)]=D[--A];return B.replace(/[\w\$]+/g,function(A){return E[A]==F[A]?A:E[A]})}('(1(J,K){"use strict";a F=("createTouch"W 3)||("ontouchstart"W J),H=3.createElement("div").n,D=(1(){a U={OTransform:["-C0-","otransitionend"],WebkitTransform:["-webkit-","webkitTransitionEnd"],MozTransform:["-moz-","BG"],msTransform:["-BX-","MSTransitionEnd"],transform:["","BG"]},T;d(T W U)V(T W H)s U[T];s l})(),I=[["Bh","k","BJ"],["height","top","bottom"]],L=D&&D[Q],B=1(U){s(U+"").CE(/^-BX-/,"BX-").CE(/-([CB-C2]|[Q-C3])/ig,1(T,U){s(U+"").toUpperCase()})},C=1(U){a T=B(L+U);s(U W H)&&U||(T W H)&&T},G=1(T,U){d(a A W U)V(v T[A]=="6")T[A]=U[A];s T},E=1(U){a A=U.children||U.childNodes,T=[],B=Q;d(;B<A.t;B++)V(A[B].BO===R)T.push(A[B]);s T},M=1(U,T){a B=Q,A=U.t;d(;B<A;B++)V(T.Bs(U[B],B,U[B])===l)BT},U=1(U){U=T.Y.BA(U);U.$()},A=D[R]||"",T=1(U,A){V(!(f instanceof T))s e T(U,A);V(v U!="CH"&&!U.BO){A=U;U=A.Cv}V(!U.BO)U=3.getElementById(U);f.Z=G(A||{},f.Cw);f.y=U;V(f.y){f.8=f.y.CV||3.CK;f.Bw()}};T.Y=T.prototype={Cn:"R.B6.R",Cw:{Cv:"slider",r:Q,BV:j,BD:600,0:5000,5:"k",CR:"center",Cu:j,Bj:l,Cf:j,B$:e CC,CO:e CC},c:1(U,D){V(v D=="CH"){a T=3.Ca&&3.Ca.CX&&CX(U,Bp)||U.currentStyle||U.n||{};s T[B(D)]}h{a A,C;d(A W D){V(A=="B1")C=("Cb"W H)?"Cb":"styleFloat";h C=B(A);U.n[C]=D[A]}}},9:1(T,A,B,U){V(T.Bd){T.Bd(A,B,U);s j}h V(T.Bn){T.Bn("Ce"+A,B);s j}s l},Cy:1(T,A,B,U){V(T.Bd){T.removeEventListener(A,B,U);s j}h V(T.Bn){T.detachEvent("Ce"+A,B);s j}s l},BA:1(B){a T={},C="changedTouches BS Bt w view which B5 B4 fromElement offsetX offsetY o q toElement".split(" ");B=B||J.event;M(C,1(){T[f]=B[f]});T.w=B.w||B.srcElement||3;V(T.w.BO===B6)T.w=T.w.CV;T.$=1(){B.$&&B.$();T.CM=B.CM=l};T.Bu=1(){B.Bu&&B.Bu();T.B8=B.B8=j};V(F&&T.BS.t){T.o=T.BS.Cq(Q).o;T.q=T.BS.Cq(Q).q}h V(v B.o=="6"){a A=3.documentElement,U=3.CK;T.o=B.B5+(A&&A.CI||U&&U.CI||Q)-(A&&A.CG||U&&U.CG||Q);T.q=B.B4+(A&&A.Cx||U&&U.Cx||Q)-(A&&A.B2||U&&U.B2||Q)}T.CA=B;s T},i:1(T,U){s 1(){s T.apply(U,arguments)}},Bw:1(){a C=F||!f.Z.Cf,T=C?"touchstart":"mousedown",B=C?"touchmove":"mousemove",U=C?"touchend":"mouseup";f.u=E(f.y);f.t=f.u.t;f.Z.0=BR(f.Z.0);f.Z.BD=BR(f.Z.BD);f.Z.r=BR(f.Z.r);f.Z.BV=!!f.Z.BV;f.Z.0=g.BP(f.Z.0,f.Z.BD);f.CY=!!F;f.css3transition=!!D;f.m=f.Z.r<Q||f.Z.r>=f.t?Q:f.Z.r;V(f.t<R)s l;f.Ch=3.createComment("\\P Powered by CZ C1"+f.Cn+",\\P author: Bc,\\P email: imqiqiboy@gmail.Be,\\P blog: Cg://www.Bc.Be,\\P Cj: Cg://Cj.Be/Bc\\P");f.8.BY(f.Ch,f.y);Cm(f.Z.5){BB"CD":BB"down":f.5=f.Z.5;f.2=R;BT;BB"BJ":f.5="BJ";Ct:f.5=f.5||"k";f.2=Q;BT}f.9(f.y,T,f.i(f.CS,f),l);f.9(3,B,f.i(f.Cp,f),l);f.9(3,U,f.i(f.Bb,f),l);f.9(3,"touchcancel",f.i(f.Bb,f),l);f.9(f.y,A,f.i(f.BG,f),l);f.9(J,"BH",f.i(1(){_(f.CU);f.CU=BQ(f.i(f.BH,f),Co)},f),l);V(f.Z.Bj){f.9(f.y,"mousewheel",f.i(f.Bv,f),l);f.9(f.y,"DOMMouseScroll",f.i(f.Bv,f),l)}f.z=f.Z.BV;f.BH()},x:1(C,T,D){a A=Q,E=T,U=B("-"+C);d(;E<D;E++)A+=f["Br"+U](f.u[E]);s A},BZ:1(D,A){a T=B("-"+D),U=f.x(D,A,A+R),C=f.x(D,Q,A)+f["Br"+T](f.y)/S-f["Bg"+T](f.y)/S;Cm(f.Z.CR){BB"k":s-C;BB"BJ":s f[D]-U-C;Ct:s(f[D]-U)/S-C}},BH:1(){_(f.BW);a A=f,D,C=I[f.2][Q],U=B("-"+C),T=f.c(f.8,"Bo");f.c(f.8,{CT:"By",B0:"By",listStyle:"Cr",Bo:T=="static"?"Cs":T});f[C]=f["Bg"+U](f.8);D={B1:f.2?"Cr":"k",display:"block"};M(f.u,1(){V(A.Z.Cu)D[C]=A[C]-A["Bm"+U](f)-A["Bf"+U](f)-A["BE"+U](f)+"X";A.c(f,D)});f.Bz=f.x(C,Q,f.t);D={Bo:"Cs",CT:"By"};D[L+"Bx-Cz"]="B9";D[C]=f.Bz+"X";D[I[f.2][R]]=f.t?f.BZ(C,f.m)+"X":Q;f.c(f.y,D);f.c(f.8,{B0:"visible"});f.z&&f.Ba();s f},BN:1(U,A){a B=I[f.2][R],H=I[f.2][Q],F=C("Bx"),M=BC(f.c(f.y,B))||Q,O,BM={},D,J=f.x(H,U,U+R);U=g.Bq(g.BP(Q,U),f.t-R);A=v A=="6"?f.Z.BD:BR(A);O=f.BZ(H,U);D=O-M,A=g.b(D)<J?g.B_(g.b(D)/J*A):A;V(F){BM[F]=B+" ease "+A+"BX";BM[B]=O+"X";f.c(f.y,BM)}h{a N=f,K=Q,L=A/CF,T=1(T,A,B,U){s-B*((T=T/U-R)*T*T*T-R)+A},G=1(){V(K<L){K++;N.y.n[B]=g.B_(T(K,M,D,L))+"X";N.BW=BQ(G,CF)}h{N.y.n[B]=O+"X";N.BG({CP:B})}};_(f.BW);G()}a E=f.u[f.m];f.m=U;f.Z.B$.Bs(f,U,E);s f},Ba:1(){_(f.p);f.z=j;f.p=BQ(f.i(1(){f.5=="k"||f.5=="CD"?f.BL():f.BK()},f),f.Z.0);s f},CN:1(){_(f.p);f.z=l;s f},stop:1(){f.CN();s f.BN(Q)},BK:1(A,T){_(f.p);a U=f.m;A=v A=="6"?A=R:A%f.t;U-=A;V(T===l)U=g.BP(U,Q);h U=U<Q?f.t+U:U;s f.BN(U)},BL:1(A,T){_(f.p);a U=f.m;V(v A=="6")A=R;U+=A;V(T===l)U=g.Bq(U,f.t-R);h U%=f.t;s f.BN(U)},CS:1(A){A=f.BA(A);a T=A.w.nodeName.B7();V(!f.CY&&(T=="CB"||T=="img"))A.$();f.Cy(f.y,"Cl",U);f.4=[A.o,A.q];f.y.n[B(L+"Bx-Cz")]="B9";f.Bl=+e Cc;f.Bi=BC(f.c(f.y,I[f.2][R]))||Q},Cp:1(A){V(!f.4||A.Bt&&A.Bt!==R)s;A=f.BA(A);f.BI=[A.o,A.q];a U,T=I[f.2][R],C=I[f.2][Q],B=f.BI[f.2]-f.4[f.2];V(f.7||v f.7=="6"&&g.b(B)>=g.b(f.BI[R-f.2]-f.4[R-f.2])){A.$();B=B/((!f.m&&B>Q||f.m==f.t-R&&B<Q)?(g.b(B)/f[C]+R):R);f.y.n[T]=f.Bi+B+"X";V(J.CJ!=Bp){U=CJ();V(U.Cd)U.Cd();h V(U.Ci)U.Ci()}V(B&&v f.7=="6"){f.7=j;_(f.p);_(f.BW)}}h f.7=l},Bb:1(E){V(f.4){V(f.7){a K=I[f.2][Q],C=I[f.2][R],J=f.BI[f.2]-f.4[f.2],H=g.b(J),A=H/J,T,G,B,D=f.m,F=Q;f.9(f.y,"Cl",U);V(H>20){G=BC(f.c(f.y,I[f.2][R]));do{V(D>=Q&&D<f.t){B=f.BZ(K,D);T=f.x(K,D,D+R)}h{D+=A;BT}}while(g.b(B-G)>T/S&&(D-=A))F=g.b(D-f.m);V(!F&&+e Cc-f.Bl<250)F=R}J>Q?f.BK(F,l):f.BL(F,l);f.z&&f.Ba()}BF f.Bi;BF f.BI;BF f.4;BF f.7;BF f.Bl}},Bv:1(C){V(f.Z.Bj){C=f.BA(C);a D=f,B=C.CA,T=Q,A=Q,U;V("Bk"W B){T=B.Bk;A=B.wheelDeltaY}h V("B3"W B)A=B.B3;h V("CL"W B)A=-B.CL;h s;V(!f.2&&g.b(T)>g.b(A))U=T;h V(A&&(!B.Bk||f.2&&g.b(T)<g.b(A)))U=A;V(U){C.$();_(f.Ck);f.Ck=BQ(1(){U>Q?D.BK(R,l):D.BL(R,l)},Co)}}},BG:1(U){V(U.CP==I[f.2][R]){f.Z.CO.Bs(f,f.m,f.u[f.m]);f.z&&f.Ba()}},BU:1(){V(f.5==Bp)f.Bw();h{f.u=E(f.y);f.t=f.u.t;f.m=g.BP(g.Bq(f.t-R,f.m),Q);f.BH()}},CQ:1(U){f.y.appendChild(U);f.BU()},prepend:1(U){f.t?f.BY(U,Q):f.CQ(U)},BY:1(U,T){f.y.BY(U,f.u[T]);V(f.m>=T)f.m++;f.BU()},remove:1(U){f.y.removeChild(f.u[U]);V(f.m>=U)f.m--;f.BU()}};M(["Width","Height"],1(B,A){a U=A.B7();M(["Bm","Bf","BE"],1(C,U){T.Y[U+A]=1(T){s(BC(f.c(T,U+"-"+I[B][R]+(U=="BE"?"-Bh":"")))||Q)+(BC(f.c(T,U+"-"+I[B][S]+(U=="BE"?"-Bh":"")))||Q)}});T.Y["Bg"+A]=1(U){s U["CW"+A]-f["Bf"+A](U)-f["BE"+A](U)};T.Y["Br"+A]=1(U){s U["CW"+A]+f["Bm"+A](U)}});J.CZ=T})(window)','n|0|1|2|_|$|if|in|px|fn|cfg|var|abs|styles|for|new|this|Math|else|bind|true|left|false|index|style|pageX|timer|pageY|begin|return|length|slides|typeof|target|getSum|element|playing|timeout|function|vertical|document|startPos|direction|undefined|scrolling|container|addListener|clearTimeout|preventDefault|eventHook|case|parseFloat|speed|border|delete|transitionend|resize|stopPos|right|prev|next|P|slide|nodeType|max|setTimeout|parseInt|touches|break|refresh|auto|aniTimer|ms|insertBefore|getPos|play|_end|qiqiboy|addEventListener|com|padding|get|width|_pos|mouseWheel|wheelDeltaX|startTime|margin|attachEvent|position|null|min|getOuter|call|scale|stopPropagation|mouseScroll|setup|transition|hidden|total|visibility|float|clientTop|wheelDelta|clientY|clientX|3|toLowerCase|cancelBubble|0ms|ceil|before|origEvent|a|Function|up|replace|10|clientLeft|string|scrollLeft|getSelection|body|detail|returnValue|pause|after|propertyName|append|align|_start|overflow|resizeTimer|parentNode|offset|getComputedStyle|touching|TouchSlider|defaultView|cssFloat|Date|empty|on|mouseDrag|http|comment|removeAllRanges|weibo|mouseTimer|click|switch|version|100|_move|item|none|relative|default|fixWidth|id|_default|scrollTop|removeListener|duration|o|v|z|9'.split('|'),169,183,{},{}))