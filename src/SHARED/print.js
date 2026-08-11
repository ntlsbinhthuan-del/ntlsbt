export const InThongTin = (LietSiDangHienThi) => {
  const win = window.open();
  win.focus();
  win.document.open();
  win.document.write(
    "<p><!DOCTYPE html>\n" +
      "<html>\n" +
      "<head>\n" +
      "    <title>Print</title>\n" +
      '    <meta charset="utf-8">\n' +
      "\n" +
      '    <style type="text/css">\n' +
      `        #${LietSiDangHienThi.lo}\n` +
      "\n" +
      "         {\n" +
      "            fill: #A9ADAA !important;\n" +
      "        }\n" +
      "\n" +
      "        #content {\n" +
      "\n" +
      "            width: 400px;\n" +
      "            height: 320px;\n" +
      "            border-style: solid;\n" +
      "\n" +
      "        }\n" +
      "\n" +
      "        #map {\n" +
      "            align-self: left;\n" +
      "        }\n" +
      "\n" +
      "    </style>\n" +
      "\n" +
      "\n" +
      "</head>\n" +
      "<body>\n" +
      '<div id="content">\n' +
      '    <h3 style="text-align: center;">PHIẾU THÔNG TIN LIỆT SĨ</h3>\n' +
      '    <h3 style="text-align: center;">Nghĩa trang liệt sĩ Rừng Sác</h3>\n' +
      "    <hr/>\n" +
      '    <div class="thongtin" align="left" style="margin-left: 25px ">\n' +
      `        <p>Liệt sĩ: <strong>  ${LietSiDangHienThi.hovaten} </strong></p>\n` +
      `        <p>Năm sinh: <strong> ${LietSiDangHienThi.namsinh} </strong></p>\n` +
      `        <p>Năm hy sinh: <strong>${LietSiDangHienThi.nammat}</strong></p>\n` +
      `        <p>Quê quán: <strong>${LietSiDangHienThi.quequan}</strong></p>\n` +
      "    </div>\n" +
      "    <hr/>\n" +
      '    <div class="vitri" style="margin-left: 25px">\n' +
      `        <p>Lô: ${LietSiDangHienThi.lo} - Hàng: ${LietSiDangHienThi.hang} - Mộ: ${LietSiDangHienThi.mo} </p>\n` +
      "    </div>\n" +
      "</div>\n" +
      "\n" +
      "\n" +
      '<svg id="map" version="1.0" xmlns="http://www.w3.org/2000/svg" width="400px" height="500px" viewBox="0 0 692.000000 807.000000" preserveAspectRatio="xMidYMid meet">\n' +
      '<g transform="translate(0.000000,807.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">\n' +
      '<path d="M60 4050 l0 -3970 3375 0 3375 0 0 3970 0 3970 -3375 0 -3375 0 0\n' +
      "-3970z m3220 3665 l0 -285 -22 -5 c-13 -2 -144 -21 -293 -40 -718 -95 -1092\n" +
      "-177 -1460 -322 -338 -134 -731 -340 -1246 -653 l-179 -109 0 849 0 850 1600\n" +
      "0 1600 0 0 -285z m162 -7 l3 -292 330 -47 c658 -93 1030 -169 1402 -289 342\n" +
      "-110 698 -280 1358 -648 l250 -139 3 -1836 2 -1837 -440 0 -440 0 0 -1260 0\n" +
      "-1260 -2475 0 -2475 0 0 1260 0 1260 -440 0 -440 0 0 1830 0 1829 260 156\n" +
      "c1068 639 1435 769 2624 930 175 24 322 47 326 52 5 4 10 137 11 296 l2 287\n" +
      "68 0 69 0 2 -292z m3348 -549 c0 -669 -3 -840 -12 -836 -7 3 -143 78 -303 166\n" +
      "-336 188 -739 393 -946 482 -348 149 -796 269 -1349 359 -182 30 -678 100\n" +
      "-706 100 -12 0 -14 44 -14 285 l0 285 1665 0 1665 0 0 -841z m-5850 -5809 l0\n" +
      "-1250 -430 0 -430 0 0 1250 0 1250 430 0 430 0 0 -1250z m5850 0 l0 -1250\n" +
      '-430 0 -430 0 0 1250 0 1250 430 0 430 0 0 -1250z"></path>\n' +
      '<path id="24" onclick="{TimTheoLo}" classname="L24 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M3245 7320 c-27 -5 -84 -9 -126 -9 -111 -1 -376 -28 -509 -51 -63\n' +
      "  -11 -199 -41 -302 -66 -165 -40 -186 -48 -177 -62 10 -18 159 -586 159 -608 0\n" +
      "  -7 3 -15 8 -17 4 -3 93 12 197 33 235 47 380 66 615 80 129 8 187 15 196 25\n" +
      "  11 10 14 48 14 153 0 197 -12 532 -19 531 -3 -1 -28 -5 -56 -9z m48 -192 c4\n" +
      "  -95 7 -241 7 -325 l0 -151 -107 -6 c-315 -18 -438 -33 -710 -88 -89 -18 -164\n" +
      "  -30 -167 -28 -6 6 -156 578 -156 595 0 15 256 80 447 114 116 21 389 49 528\n" +
      '  54 44 2 96 4 116 5 l36 2 6 -172z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(2600, 6800) scale(1,-1)" id="24" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  24\n" +
      "</text>\n" +
      '<path id="25" onclick="{TimTheoLo}" classname="L25 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M3453 7314 c-10 -4 -13 -83 -13 -345 0 -316 1 -339 18 -339 37 0 313\n' +
      "  -20 412 -30 133 -13 318 -44 485 -80 71 -16 130 -28 132 -27 6 6 183 640 183\n" +
      "  656 0 23 8 20 -195 65 -279 62 -502 88 -865 100 -80 3 -151 3 -157 0z m447\n" +
      "  -35 c185 -13 360 -39 575 -85 94 -21 172 -39 174 -41 3 -2 -35 -145 -85 -318\n" +
      "  -66 -235 -93 -315 -104 -315 -8 0 -76 13 -150 30 -171 37 -375 66 -560 80 -80\n" +
      '  5 -178 13 -217 16 l-73 6 0 325 0 325 148 -7 c81 -3 212 -10 292 -16z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(3800, 6800) scale(1,-1)" id="25" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  25\n" +
      "</text>\n" +
      '<path id="23" onclick="{TimTheoLo}" classname="L23 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M1835 7088 c-303 -89 -495 -169 -776 -324 -93 -52 -136 -81 -130 -88\n' +
      "  17 -21 293 -549 296 -565 4 -21 3 -22 215 74 272 123 459 193 748 281 6 2 12\n" +
      "  11 12 20 0 23 -159 614 -171 637 -6 9 -13 17 -17 16 -4 0 -83 -23 -177 -51z\n" +
      "  m264 -283 c44 -165 81 -305 81 -311 0 -5 -69 -31 -152 -58 -184 -57 -366 -129\n" +
      "  -590 -230 -92 -42 -172 -77 -179 -78 -7 -2 -75 115 -159 272 -144 268 -147\n" +
      "  275 -127 290 39 29 293 163 400 211 173 78 622 225 638 210 4 -3 43 -141 88\n" +
      '  -306z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(1400, 6500) scale(1,-1)" id="23" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  23\n" +
      "</text>\n" +
      '<path id="26" onclick="{TimTheoLo}" classname="L26 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M4763 7118 c-6 -7 -49 -143 -97 -303 -47 -159 -91 -297 -96 -306 -8\n' +
      "  -15 13 -24 153 -69 246 -79 403 -143 614 -251 175 -89 193 -96 206 -81 30 36\n" +
      "  328 575 324 586 -7 17 -366 185 -538 252 -75 29 -227 81 -336 115 -109 34\n" +
      "  -203 64 -209 66 -6 2 -15 -2 -21 -9z m314 -107 c246 -81 415 -151 676 -276 53\n" +
      "  -25 96 -49 93 -53 -2 -4 -72 -128 -156 -277 -84 -148 -156 -274 -160 -279 -5\n" +
      "  -5 -44 10 -92 35 -243 128 -412 200 -684 289 l-160 53 90 299 c74 246 93 298\n" +
      '  108 298 10 0 138 -40 285 -89z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(5000, 6500) scale(1,-1)" id="26" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  26\n" +
      "</text>\n" +
      '<path id="22" onclick="{TimTheoLo}" classname="L22 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M598 6497 c-114 -72 -207 -135 -208 -139 -1 -18 30 -1 212 117 166\n' +
      "  107 195 122 205 109 23 -31 303 -522 303 -532 0 -6 -51 -45 -112 -88 -141 -97\n" +
      "  -273 -196 -449 -336 -75 -59 -139 -108 -143 -108 -3 0 -6 185 -6 410 0 267 -3\n" +
      "  410 -10 410 -12 0 -14 -846 -2 -854 4 -2 61 39 127 91 163 130 410 314 528\n" +
      '  393 63 42 96 70 93 80 -3 12 -291 518 -323 567 -6 9 -67 -25 -215 -120z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(500, 6000) scale(1,-1)" id="22" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  22\n" +
      "</text>\n" +
      '<path id="27" onclick="{TimTheoLo}" classname="L27 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M5796 6329 c-91 -161 -165 -293 -164 -295 2 -1 48 -28 103 -59 203\n' +
      "  -117 325 -206 533 -389 57 -50 109 -91 115 -91 14 0 23 822 9 841 -8 13 -402\n" +
      "  278 -419 282 -6 2 -86 -128 -177 -289z m584 -407 c0 -261 -3 -401 -10 -397 -5\n" +
      "  3 -58 49 -117 101 -177 156 -314 254 -521 374 -40 23 -72 45 -70 49 2 4 72\n" +
      '  129 157 278 l154 271 204 -136 203 -136 0 -404z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(5900, 6000) scale(1,-1)" id="27" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  27\n" +
      "</text>\n" +
      '<path id="17" onclick="{TimTheoLo}" classname="L17 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M3010 6530 c-182 -10 -332 -33 -533 -82 -154 -37 -167 -41 -154 -57\n' +
      "  8 -9 54 -158 103 -331 48 -173 88 -316 89 -317 1 -1 68 10 151 26 201 39 484\n" +
      "  70 637 71 l27 0 -2 348 -3 347 -90 1 c-49 1 -151 -2 -225 -6z m300 -340 c0\n" +
      "  -308 -1 -330 -17 -330 -47 0 -317 -22 -388 -31 -44 -5 -144 -22 -222 -36 -79\n" +
      "  -15 -146 -24 -149 -20 -4 3 -44 137 -90 297 -45 159 -85 299 -89 309 -5 17 7\n" +
      '  22 122 50 267 63 415 81 751 89 l82 2 0 -330z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(2650, 6000) scale(1,-1)" id="17" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  17\n" +
      "</text>\n" +
      '<path id="18" onclick="{TimTheoLo}" classname="L18 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M3442 6187 l3 -352 182 -6 c203 -7 289 -18 512 -60 84 -17 155 -28\n' +
      "  158 -26 5 6 152 567 162 625 5 23 7 42 5 42 -2 0 -67 14 -145 30 -227 49 -362\n" +
      "  68 -559 79 -102 6 -215 13 -253 15 l-67 5 2 -352z m313 312 c187 -10 379 -37\n" +
      "  585 -83 58 -13 104 -27 103 -32 -7 -41 -157 -610 -162 -615 -3 -4 -60 4 -126\n" +
      '  17 -211 42 -316 54 -507 61 l-188 6 0 332 0 332 53 -4 c28 -1 138 -8 242 -14z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(3700, 6000) scale(1,-1)" id="18" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  18\n" +
      "</text>\n" +
      '<path id="19" onclick="{TimTheoLo}" classname="L19 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M4562 6377 c-5 -7 -46 -149 -92 -317 -45 -168 -86 -312 -91 -321 -7\n' +
      "  -14 5 -22 74 -50 367 -146 653 -280 885 -413 l130 -75 59 38 c85 56 149 74\n" +
      "  242 69 75 -5 110 -18 202 -75 25 -16 33 -14 215 49 104 36 189 70 189 76 0 25\n" +
      "  -432 372 -625 501 -249 167 -400 239 -871 414 -140 53 -266 100 -281 106 -19\n" +
      "  7 -29 7 -36 -2z m285 -113 c470 -175 641 -255 865 -403 218 -144 648 -490 625\n" +
      "  -502 -7 -4 -86 -32 -177 -64 -128 -44 -168 -55 -180 -46 -88 65 -155 85 -260\n" +
      "  79 -75 -4 -145 -30 -231 -85 -25 -16 -28 -15 -160 61 -183 106 -371 197 -644\n" +
      "  310 -126 53 -242 102 -256 109 l-26 12 85 313 c47 171 89 312 94 312 4 0 124\n" +
      '  -43 265 -96z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(5000, 5600) scale(1,-1)" id="19" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  19\n" +
      "</text>\n" +
      '<path id="16" onclick="{TimTheoLo}" classname="L16 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M2160 6364 c-19 -7 -125 -47 -235 -87 -597 -221 -851 -366 -1288\n' +
      "  -736 -236 -199 -221 -185 -206 -197 8 -6 91 -41 185 -79 l170 -67 49 31 c75\n" +
      "  47 147 71 219 71 91 0 150 -21 229 -83 24 -18 41 -26 45 -20 8 11 181 123 307\n" +
      "  198 172 102 376 194 643 290 72 26 132 52 132 56 0 14 -179 602 -188 618 -11\n" +
      "  20 -22 21 -62 5z m134 -306 c49 -161 89 -297 90 -302 1 -5 -84 -41 -189 -81\n" +
      "  -313 -118 -442 -182 -720 -355 -77 -48 -145 -90 -151 -93 -7 -4 -28 7 -49 23\n" +
      "  -65 51 -138 73 -235 68 -89 -5 -150 -25 -221 -74 l-36 -24 -167 66 c-134 53\n" +
      "  -165 69 -154 78 543 481 799 640 1389 863 277 105 323 122 339 122 12 1 38\n" +
      '  -71 104 -291z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(1300, 5600) scale(1,-1)" id="16" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  16\n" +
      "</text>\n" +
      '<path id="11" onclick="{TimTheoLo}" classname="L11 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M3045 5743 c-164 -15 -538 -80 -531 -92 3 -4 39 -139 82 -301 42\n' +
      "  -162 78 -296 79 -298 1 -1 65 11 141 27 156 33 259 47 417 57 l107 6 -2 302\n" +
      "  -3 301 -125 1 c-69 0 -143 -1 -165 -3z m275 -297 l0 -284 -97 -7 c-137 -9\n" +
      "  -299 -31 -425 -59 l-108 -23 -11 41 c-75 273 -136 522 -131 527 9 8 270 55\n" +
      '  382 69 135 16 148 17 273 18 l117 2 0 -284z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(2800, 5300) scale(1,-1)" id="11" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  11\n" +
      "</text>\n" +
      '<path id="12" onclick="{TimTheoLo}" classname="L12 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M3454 5736 c-4 -9 -3 -151 2 -314 l9 -297 155 -6 c154 -6 256 -21\n' +
      "  400 -59 41 -10 75 -18 75 -17 15 25 164 585 160 597 -7 23 -8 23 -180 54 -171\n" +
      "  31 -275 43 -467 52 -133 6 -148 5 -154 -10z m393 -27 c105 -11 379 -61 389\n" +
      "  -72 6 -6 -145 -547 -157 -561 -4 -4 -56 3 -116 18 -137 32 -250 46 -379 46\n" +
      '  l-101 0 -6 218 c-4 119 -7 252 -7 296 l0 79 138 -7 c75 -4 183 -11 239 -17z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(3590, 5300) scale(1,-1)" id="12" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  12\n" +
      "</text>\n" +
      '<path id="10" onclick="{TimTheoLo}" classname="L10 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M2225 5561 c-296 -107 -415 -163 -716 -338 l-146 -85 10 -44 c7 -29\n' +
      "  7 -62 0 -99 -5 -30 -7 -58 -4 -62 3 -5 98 -68 210 -141 l203 -133 112 65 c159\n" +
      "  92 295 155 491 226 94 34 174 65 178 69 5 5 -30 140 -77 300 -47 160 -86 294\n" +
      "  -86 296 0 9 -14 5 -175 -54z m242 -248 c45 -153 80 -279 78 -281 -2 -2 -86\n" +
      "  -34 -187 -71 -191 -71 -319 -129 -476 -220 -78 -45 -96 -52 -115 -44 -12 6\n" +
      "  -101 62 -198 125 l-175 115 2 99 1 98 124 73 c137 81 378 206 479 249 73 31\n" +
      '  359 133 375 133 6 1 47 -124 92 -276z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(1800, 5000) scale(1,-1)" id="10" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  10\n" +
      "</text>\n" +
      '<path id="13" onclick="{TimTheoLo}" classname="L13 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M4363 5608 c-6 -7 -41 -132 -77 -278 -37 -146 -70 -274 -75 -286 -9\n' +
      "  -19 1 -24 162 -78 210 -69 335 -129 492 -235 66 -45 126 -81 134 -81 8 0 107\n" +
      "  61 221 135 l207 135 -3 97 c-3 113 14 93 -172 204 -233 139 -422 228 -728 343\n" +
      "  -65 24 -126 47 -135 51 -9 3 -21 0 -26 -7z m302 -120 c176 -68 422 -189 585\n" +
      "  -288 74 -45 138 -85 142 -88 3 -4 8 -46 10 -93 l3 -86 -198 -132 c-108 -72\n" +
      "  -202 -131 -207 -131 -5 0 -60 35 -122 77 -147 99 -310 178 -497 238 -87 29\n" +
      '  -150 54 -147 60 2 6 35 133 72 282 l69 271 80 -30 c44 -16 139 -52 210 -80z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(4550, 5000) scale(1,-1)" id="13" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  13\n" +
      "</text>\n" +
      '<path d="M975 5234 c-93 -33 -165 -131 -165 -224 0 -95 73 -192 169 -225 121\n' +
      "  -41 254 15 307 129 89 190 -108 392 -311 320z m180 -28 c143 -67 180 -230 77\n" +
      "  -340 -38 -40 -118 -76 -172 -76 -54 0 -134 36 -172 76 -76 82 -76 206 0 288\n" +
      '  38 40 118 76 172 76 27 0 66 -10 95 -24z"></path>\n' +
      '<path d="M5655 5234 c-93 -33 -165 -131 -165 -224 0 -95 73 -192 169 -225 121\n' +
      "  -41 254 15 307 129 89 190 -108 392 -311 320z m180 -28 c86 -40 135 -112 135\n" +
      "  -196 0 -84 -49 -156 -135 -196 -65 -31 -125 -31 -190 0 -143 67 -180 230 -77\n" +
      '  340 38 40 118 76 172 76 27 0 66 -10 95 -24z"></path>\n' +
      '<path id="15" onclick="{TimTheoLo}" classname="L15 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M375 5198 c-3 -7 -4 -332 -3 -723 l3 -710 293 -3 292 -2 0 474 0 473\n' +
      "  -39 26 c-105 70 -169 175 -178 293 -4 55 -3 74 6 74 7 0 11 5 9 12 -2 6 -77\n" +
      "  28 -166 49 -90 20 -174 40 -188 43 -15 4 -26 2 -29 -6z m175 -48 c69 -17 135\n" +
      "  -32 146 -35 19 -4 22 -13 26 -84 4 -63 11 -93 36 -143 33 -67 105 -149 154\n" +
      "  -174 l28 -15 0 -459 0 -460 -275 0 -275 0 0 700 c0 664 1 700 18 700 10 0 74\n" +
      '  -14 142 -30z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(450, 4200) scale(1,-1)" id="15" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  15\n" +
      "</text>\n" +
      '<path id="21" onclick="{TimTheoLo}" classname="L21 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M6390 5181 c-18 -11 -285 -71 -312 -71 -16 0 -19 -5 -14 -23 9 -37\n' +
      "  -10 -130 -40 -193 -33 -69 -93 -132 -155 -162 l-46 -22 -7 -465 c-4 -255 -5\n" +
      "  -469 -1 -475 4 -6 107 -10 294 -10 l288 0 6 223 c13 448 20 1207 11 1207 -5 0\n" +
      "  -16 -4 -24 -9z m6 -468 c-3 -247 -9 -557 -13 -690 l-6 -243 -275 0 -275 0 6\n" +
      "  263 c4 144 7 350 7 458 l0 195 38 17 c98 43 184 171 204 306 l11 68 151 36\n" +
      '  c83 19 153 35 155 36 2 1 1 -200 -3 -446z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(5950, 4200) scale(1,-1)" id="21" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  21\n" +
      "</text>\n" +
      '<path id="7" onclick="{TimTheoLo}" classname="L7 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M3457 5034 c-10 -10 -9 -552 1 -558 5 -3 71 -12 147 -21 76 -9 180\n' +
      "  -25 229 -35 50 -10 93 -16 95 -14 3 3 6 14 8 26 3 17 111 437 129 500 6 19\n" +
      "  -16 27 -166 58 -136 28 -430 57 -443 44z m288 -40 c147 -18 295 -52 295 -67 0\n" +
      "  -21 -122 -482 -130 -491 -5 -5 -58 1 -122 12 -62 12 -142 24 -178 27 -36 3\n" +
      "  -82 8 -102 11 l-38 6 0 226 c0 125 3 244 6 264 l7 38 71 -6 c39 -3 125 -12\n" +
      '  191 -20z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(3630, 4600) scale(1,-1)" id="7" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  7\n" +
      "</text>\n" +
      '<path id="6" onclick="{TimTheoLo}" classname="L6 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M3030 5019 c-76 -9 -320 -56 -327 -63 -7 -7 138 -530 151 -543 9 -10\n' +
      "  34 -8 121 12 61 14 164 32 230 41 66 9 121 17 122 18 1 1 3 124 5 274 l3 272\n" +
      "  -115 -1 c-63 -1 -149 -5 -190 -10z m280 -264 c0 -140 -3 -255 -7 -255 -30 0\n" +
      "  -284 -42 -353 -59 -47 -11 -85 -19 -86 -18 0 1 -32 118 -71 260 l-70 257 36\n" +
      '  10 c47 12 254 48 306 53 22 2 86 4 143 5 l102 2 0 -255z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(2950, 4600) scale(1,-1)" id="6" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  6\n" +
      "</text>\n" +
      '<path id="5" onclick="{TimTheoLo}" classname="L5 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M2455 4876 c-168 -60 -268 -105 -435 -197 l-145 -79 205 -209 205\n' +
      "  -208 50 22 c177 81 411 188 414 191 5 5 -123 441 -145 492 -7 17 -17 32 -21\n" +
      "  31 -4 0 -62 -19 -128 -43z m204 -227 c39 -133 71 -242 69 -243 -2 -1 -55 -25\n" +
      "  -118 -53 -63 -28 -162 -73 -219 -99 l-103 -48 -188 194 -187 195 66 39 c164\n" +
      '  96 527 253 592 255 11 1 33 -58 88 -240z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(2300, 4400) scale(1,-1)" id="5" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  5\n" +
      "</text>\n" +
      '<path id="8" onclick="{TimTheoLo}" classname="L8 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M4184 4896 c-6 -7 -45 -120 -87 -251 -56 -175 -73 -241 -64 -247 7\n' +
      "  -4 114 -53 240 -109 l227 -101 43 38 c85 77 377 358 377 363 0 9 -208 131\n" +
      "  -295 174 -103 51 -205 86 -415 142 -8 2 -20 -2 -26 -9z m161 -50 c67 -19 162\n" +
      "  -52 212 -74 88 -37 317 -165 328 -181 2 -5 -83 -92 -190 -194 l-195 -186 -43\n" +
      "  18 c-40 18 -274 122 -365 163 -37 16 -43 23 -38 41 3 12 36 120 73 239 53 169\n" +
      '  71 216 83 213 8 -2 69 -20 135 -39z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(4300, 4400) scale(1,-1)" id="8" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  8\n" +
      "</text>\n" +
      '<path id="4" onclick="{TimTheoLo}" classname="L4 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M1267 4778 c-13 -18 -43 -44 -66 -58 l-40 -25 -1 -467 c0 -368 3\n' +
      "  -468 13 -469 6 0 135 0 286 1 l273 2 150 131 c82 73 172 147 199 165 27 18 49\n" +
      "  39 49 46 0 14 -230 243 -330 328 -85 72 -238 186 -373 278 -60 40 -111 79\n" +
      "  -114 87 -8 20 -18 16 -46 -19z m161 -94 c255 -174 400 -293 590 -486 l93 -95\n" +
      "  -28 -18 c-33 -21 -155 -123 -273 -229 l-85 -76 -272 0 -273 0 0 448 0 448 50\n" +
      '  37 c28 21 50 42 50 47 0 21 26 7 148 -76z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(1500, 4000) scale(1,-1)" id="4" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  4\n" +
      "</text>\n" +
      '<path id="9" onclick="{TimTheoLo}" classname="L9 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M5484 4790 c-5 -5 -74 -50 -153 -100 -150 -94 -244 -160 -346 -243\n' +
      "  -77 -63 -345 -309 -345 -317 0 -3 26 -28 58 -55 31 -28 118 -109 192 -181\n" +
      "  l135 -132 295 -6 c162 -4 301 -3 307 1 10 7 13 116 13 468 0 253 0 466 0 473\n" +
      "  0 6 -9 12 -20 12 -11 0 -41 20 -67 45 -50 48 -54 50 -69 35z m37 -36 c7 -9 32\n" +
      "  -29 56 -45 l43 -30 0 -456 0 -455 -292 7 -293 7 -115 112 c-63 62 -146 140\n" +
      "  -185 175 l-70 62 90 85 c130 122 296 261 398 333 94 66 338 221 348 221 4 0\n" +
      '  12 -7 20 -16z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(5100, 4000) scale(1,-1)" id="9" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  9\n" +
      "</text>\n" +
      '<path id="2" onclick="{TimTheoLo}" classname="L2 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M3190 4365 c-186 -25 -358 -76 -648 -190 -163 -65 -172 -70 -154 -84\n' +
      "  11 -9 90 -117 177 -239 87 -123 163 -226 170 -228 7 -3 36 4 66 16 80 30 273\n" +
      "  86 361 104 230 47 443 24 783 -84 52 -17 99 -28 104 -25 7 4 172 211 353 441\n" +
      "  19 25 -9 43 -145 94 -505 189 -766 236 -1067 195z m379 -20 c192 -27 362 -75\n" +
      "  635 -177 88 -32 166 -63 173 -67 10 -5 -31 -64 -147 -212 -89 -112 -169 -212\n" +
      "  -178 -221 -16 -16 -22 -15 -92 8 -227 73 -430 114 -570 114 -138 0 -332 -41\n" +
      "  -563 -119 -79 -27 -87 -28 -100 -13 -31 37 -307 432 -307 440 0 9 213 94 374\n" +
      '  148 302 103 538 133 775 99z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(3300, 3900) scale(1,-1)" id="2" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  2\n" +
      "</text>\n" +
      '<path id="1" onclick="{TimTheoLo}" classname="L1 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M2144 3989 c-71 -50 -129 -99 -265 -224 l-104 -95 -305 -2 -305 -3\n' +
      "  -8 -278 c-6 -246 -5 -280 9 -294 14 -14 65 -15 477 -8 267 4 463 11 465 16 5\n" +
      "  14 86 113 161 198 66 75 184 176 265 227 25 16 46 35 46 42 0 10 -288 365\n" +
      "  -365 450 -9 10 -23 4 -71 -29z m227 -190 c90 -107 170 -203 177 -212 12 -14 8\n" +
      "  -20 -34 -49 -115 -79 -225 -182 -323 -300 l-104 -126 -454 -7 c-250 -4 -456\n" +
      "  -6 -458 -3 -2 2 -1 123 2 270 l6 266 36 6 c20 3 155 6 301 6 l265 1 125 115\n" +
      '  c129 119 277 237 290 232 4 -2 82 -91 171 -199z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(1700, 3250) scale(1,-1)" id="1" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  1\n" +
      "</text>\n" +
      '<path id="3" onclick="{TimTheoLo}" classname="L3 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M4552 4021 c-24 -14 -362 -436 -362 -451 0 -8 43 -48 96 -89 142\n' +
      "  -111 224 -191 299 -291 39 -53 76 -92 89 -95 11 -2 229 -6 483 -8 358 -3 463\n" +
      "  -1 467 8 6 16 11 543 5 549 -2 3 -144 10 -314 16 l-309 11 -85 88 c-107 109\n" +
      "  -198 178 -351 267 -3 1 -11 -1 -18 -5z m134 -93 c73 -47 143 -105 211 -174\n" +
      "  l102 -102 168 -6 c92 -4 230 -9 306 -12 l137 -6 0 -266 0 -265 -137 6 c-75 4\n" +
      "  -286 7 -469 7 l-333 0 -74 98 c-84 109 -127 152 -277 272 -58 46 -105 89 -104\n" +
      '  95 2 17 337 425 350 425 6 0 60 -32 120 -72z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(4850, 3250) scale(1,-1)" id="3" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  3\n" +
      "</text>\n" +
      '<path id="14" onclick="{TimTheoLo}" classname="L14 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M382 3652 c-10 -7 -12 -101 -10 -438 l3 -429 288 -3 287 -2 0 440 0\n' +
      "  440 -277 0 c-153 0 -284 -4 -291 -8z m548 -432 l0 -420 -270 0 -270 0 0 420 0\n" +
      '  420 270 0 270 0 0 -420z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(450, 3150) scale(1,-1)" id="14" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  14\n" +
      "</text>\n" +
      '<path id="20" onclick="{TimTheoLo}" classname="L20 hover-bg-gray" fill="#E0E0E0" stroke="#000000" strokewidth="2" d="M5827 3348 c-4 -166 -7 -355 -7 -420 l0 -118 250 -2 c138 -1 262 -2\n' +
      "  278 -2 l27 -1 7 170 c3 94 8 284 10 423 l4 252 -281 0 -282 0 -6 -302z m544\n" +
      "  97 c0 -99 -4 -279 -7 -400 l-7 -220 -256 3 c-141 2 -257 5 -259 7 -2 2 -1 182\n" +
      '  3 399 l8 396 260 -2 260 -3 -2 -180z"></path>\n' +
      '<text fontfamily="\'MyriadPro-Semibold\'" fontsize="400px" style="font-size: 400px;" transform="translate(5900, 3150) scale(1,-1)" id="20" classname="hover-bg-gray" onclick="{TimTheoLo}">\n' +
      "  20\n" +
      "</text>\n" +
      '<path d="M3215 3605 c-179 -31 -424 -135 -603 -254 -90 -61 -267 -226 -368\n' +
      "  -343 l-49 -57 -527 -3 -528 -3 0 -122 c0 -67 3 -128 6 -137 5 -14 32 -16 195\n" +
      "  -16 l189 0 0 -189 c0 -105 4 -192 8 -195 5 -3 216 -2 469 1 l460 6 12 83 c88\n" +
      "  632 897 937 1464 552 126 -86 244 -231 300 -370 28 -70 57 -198 57 -250 l0\n" +
      "  -33 469 3 469 2 7 200 8 200 182 0 182 0 6 122 c4 78 3 125 -4 129 -12 7\n" +
      "  -1000 21 -1007 14 -3 -3 -3 -7 0 -10 2 -3 226 -8 497 -12 270 -3 493 -9 494\n" +
      "  -12 2 -3 1 -52 -1 -108 l-4 -103 -183 0 -182 0 -8 -200 -7 -200 -447 0 -448 0\n" +
      "  -12 81 c-28 184 -100 320 -240 459 -135 134 -279 212 -467 257 -118 27 -340\n" +
      "  25 -456 -6 -193 -49 -313 -117 -449 -251 -138 -137 -211 -274 -238 -450 -7\n" +
      "  -41 -13 -75 -14 -76 -1 -1 -204 -4 -450 -6 l-448 -5 1 181 c1 100 1 187 1 194\n" +
      "  -1 9 -47 12 -196 12 l-195 0 0 114 0 113 522 7 523 8 44 51 c95 112 289 295\n" +
      "  371 349 199 132 458 235 648 259 282 35 712 -80 952 -254 72 -53 201 -184 297\n" +
      "  -303 42 -53 79 -91 81 -85 9 26 -223 289 -333 378 -251 201 -744 332 -1050\n" +
      '  278z"></path>\n' +
      '<path d="M3240 2774 c-196 -42 -361 -190 -438 -392 -22 -58 -26 -82 -26 -187\n' +
      "  0 -105 4 -129 26 -187 77 -205 242 -351 443 -393 304 -64 591 97 703 393 22\n" +
      "  58 26 82 26 187 0 105 -4 129 -26 187 -38 101 -85 173 -160 243 -144 137 -348\n" +
      "  192 -548 149z m246 -15 c32 -6 97 -28 143 -50 67 -31 98 -54 160 -116 42 -43\n" +
      "  89 -101 104 -130 36 -68 67 -191 67 -268 0 -77 -31 -200 -67 -268 -15 -29 -62\n" +
      "  -87 -104 -130 -182 -184 -430 -227 -668 -116 -67 31 -98 54 -160 116 -88 90\n" +
      "  -123 150 -151 259 -25 98 -25 180 0 278 28 109 63 169 151 259 62 62 93 85\n" +
      '  161 117 123 57 235 73 364 49z"></path>\n' +
      '<path d="M1170 1610 l0 -460 690 0 690 0 0 460 0 460 -690 0 -690 0 0 -460z\n' +
      '  m1360 0 l0 -440 -670 0 -670 0 0 440 0 440 670 0 670 0 0 -440z"></path>\n' +
      '<path d="M4270 1591 l0 -458 31 -7 c41 -8 1277 -8 1318 0 l31 7 0 458 0 459\n' +
      "  -690 0 -690 0 0 -459z m1360 -1 l0 -440 -670 0 -670 0 0 440 0 440 670 0 670\n" +
      '  0 0 -440z"></path>\n' +
      '<path d="M3680 585 l0 -395 990 0 990 0 0 395 0 395 -990 0 -990 0 0 -395z\n' +
      '  m1960 0 l0 -375 -970 0 -970 0 0 375 0 375 970 0 970 0 0 -375z"></path>\n' +
      '<path d="M1150 575 l0 -395 990 0 990 0 0 395 0 395 -990 0 -990 0 0 -395z\n' +
      '  m1960 0 l0 -375 -970 0 -970 0 0 375 0 375 970 0 970 0 0 -375z"></path>\n' +
      "</g>\n" +
      "</svg>" +
      "\n" +
      "<script>window.print() </script>\n" +
      "\n" +
      "</body>\n" +
      "</html></p>"
  );
  win.document.close();
  win.print();
  win.close();
};
