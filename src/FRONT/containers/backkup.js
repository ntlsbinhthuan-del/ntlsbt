<div className={"topContainer"}>
<div className={"searchBar"}>
  <div className={"SearchBarLogo"}>
    <div className={"SearchBarLogoWrapper"}>
      <Uheader length={danhSachLietSi.length} />
    </div>
  </div>
  <div className={"SearchBarInput"}>
    <div><strong>CÔNG TRÌNH CHÀO MỪNG 50 NĂM NGÀY GIẢI PHÓNG MIỀN NAM THỐNG NHẤT ĐẤT NƯỚC (30/4/1975 - 30/4/2025)</strong></div>
    <USearchBar onSearchClick={onSearchClick} />
  </div>
</div>
<div className={"detailInfoContainer"}>
  <div className={"sideBar"}>
    <div className={"sideBarWrapper"}>
      <div id="sideBar" className={"sideBarList"}>
        <USideBar
          DanhSachLietSi={danhSachLietSi}
          setLietSiDangHienThi={setLietSiDangHienThi}
          CurrentPage={currentPage}
          lietSiDangHienThi={lietSiDangHienThi}
        />
      </div>
      <div className={"pagination"}>
        <UPagination
          DanhSachLietSi={danhSachLietSi}
          CurrentPage={currentPage}
          OnPageChoose={onPageChoose}
        />
      </div>
    </div>
  </div>
  <div className={"detailAndMap"}>
    <div className={"detailAndMapWrapper"}>
      <div className={"detail"}>
        <div className={"detailPosition"}>
          <UPosition lietSiDangHienThi={lietSiDangHienThi} />
        </div>
        <div className={"UAdditonalInfo"}>
          <UAdditonalInfo lietSiDangHienThi={lietSiDangHienThi} />
        </div>
      </div>
      <div className={"map"}>
        <UMap
          lietSiDangHienThi={lietSiDangHienThi}
          OnSearchClick={onSearchWithLo}
        />
      </div>
    </div>
    <div className={"copyright"}>Được thực hiện bởi Hội sinh viên Trường Đại học Công nghệ Thông tin, ĐHQG-HCM</div>
  </div>
</div>
</div>