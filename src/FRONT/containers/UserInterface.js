import React, { useState, useEffect } from "react";
import styles from "./Userinterface.module.css";
import { UPagination } from "../components/UPagination/UPagination";
import "tachyons";
import { fireBaseStore } from "../../STORES/firebase.store.js";
import * as _ from "lodash";
import { USideBar } from "../components/USideBar/USideBar";
import { UMap } from "../components/UMap/Umap";
import { USearchBar } from "../components/USearchBar/USearchBar";
import { UPosition } from "../components/UPosition/UPosition";
import { UAdditonalInfo } from "../components/UAdditonalInfo/UAdditonalInfo";
import { Uheader } from "../components/UHeader/Uheader";
import data from '../components/ntls-binhthuan-default-rtdb-export.json';

export const UserInterface = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [lietSiDangHienThi, setLietSiDangHienThi] = useState({
    id: "Chưa rõ",
    hovaten: "Chưa rõ",
    quequan: "Chưa rõ",
    namsinh: "Chưa rõ",
    chucvu: "Chưa rõ",
    donvi: "Chưa rõ",
    nammat: "Chưa rõ",
    lo: "Chưa rõ",
    hang: "Chưa rõ",
    mo: "Chưa rõ",
  });
  const [danhSachLietSi, setDanhSachLietSi] = useState([]);

  useEffect(() => {
    const danhSachLietSiStream =
      fireBaseStore.danhSachLietSiFullSubject.subscribe(() => {
        setDanhSachLietSi(fireBaseStore.doSearhLietSi());
      });
    return () => {
      danhSachLietSiStream.unsubscribe();
    };
  }, []);

  useEffect(() => {
    setDanhSachLietSi(_.slice(fireBaseStore.danhSachLietSiFull, 0, 200));
    setCurrentPage(0);
  }, []);

  useEffect(() => {
    danhSachLietSi &&
      danhSachLietSi[0] &&
      setLietSiDangHienThi(danhSachLietSi[0]);
  }, [danhSachLietSi]);

  function onSearchClick(ThongTinCanTim) {
    fireBaseStore.searchInforMation = ThongTinCanTim;
    setDanhSachLietSi(fireBaseStore.doSearhLietSi(ThongTinCanTim));
  }

  function onSearchWithLo(lo) {
    setDanhSachLietSi(fireBaseStore.doSearchLietSiWithLo(lo));
  }

  function onPageChoose(event) {
    setCurrentPage(parseInt(event.target.getAttribute("value"), 10));
    if (event.target.getAttribute("value") * 10 < danhSachLietSi.length) {
      setLietSiDangHienThi(
        danhSachLietSi[event.target.getAttribute("value") * 10]
      );
    }
  }
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  const [activeTab, setActiveTab] = useState("home");

  const [activeTabmini, setActiveTabmini] = useState("home_mini");
  const [isIntroVisible, setIsIntroVisible] = useState(true);

  const images = [
    "/home/home1.jpg",
    "/home/home2.jpg",
    "/home/home3.jpg",
    "/home/home4.jpg",
    "/home/home5.jpg",
    "/home/home6.jpg",  
    "/home/home7.jpg",
    "/home/home8.jpg",
    "/home/home9.jpg",
    "/home/home10.jpg",
    "/home/home11.jpg",
    "/home/home12.jpg",
    "/home/home13.jpg",
    "/home/home14.jpg",
    "/home/home15.jpg",
    "/home/home16.jpg",
    "/home/home17.jpg",
    "/home/home18.jpg",
    "/home/home19.jpg",
    "/home/home20.jpg",
    "/home/home21.jpg",
    "/home/home22.jpg",
    "/home/home23.jpg",
    "/home/home24.jpg",
    "/home/home25.jpg",
    "/home/home26.jpg",
    "/home/home27.jpg",
    "/home/home28.jpg",
    "/home/home29.jpg",
    "/home/home30.jpg",
    "/home/home31.jpg",
    "/home/home32.jpg",
    "/home/home33.jpg",
    "/home/home34.jpg",
    "/home/home35.jpg",
    "/home/home36.jpg",
  ];
  
  const handleTabClick = (tab) => {
    setActiveTabmini(tab);
    if (tab === "gioithieu") {
      setIsIntroVisible(false); // Khi bấm vào "Trang Chủ", ẩn giao diện giới thiệu
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleThumbnails = 7; // Số thumbnail tối đa hiển thị
  const halfVisible = Math.floor(visibleThumbnails / 2); // Số thumbnail ở mỗi bên

  // Tự động chuyển hình ảnh mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, [images.length]);

  // Lấy danh sách 7 thumbnail để hiển thị, với hình hiện tại ở giữa
  const getVisibleThumbnails = () => {
    const thumbnails = [];
    for (let i = -halfVisible; i <= halfVisible; i++) {
      const index = (currentIndex + i + images.length) % images.length;
      thumbnails.push({ url: images[index], index });
    }
    return thumbnails;
  };

  // Xử lý khi nhấp vào thumbnail
  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  // Chuyển sang hình ảnh tiếp theo
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Chuyển sang hình ảnh trước đó
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const dataArray = Object.values(data); // Chuyển dữ liệu thành mảng
  const [currentPageds, setCurrentPageds] = useState(1); // Trang hiện tại
  const rowsPerPage = 20; // Số dòng mỗi trang
  const totalPages = Math.ceil(dataArray.length / rowsPerPage); // Tổng số trang

  // Tạo danh sách các trang hiển thị
  const getDisplayedPages = () => {
    const pages = [];
    if (currentPageds > 1) pages.push(currentPageds - 1); // Trang trước
    pages.push(currentPageds); // Trang hiện tại
    if (currentPageds < totalPages) pages.push(currentPageds + 1); // Trang sau
    return pages;
  };

  const displayedPages = getDisplayedPages();

  // Lấy dữ liệu cho trang hiện tại
  const startIndex = (currentPageds - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = dataArray.slice(startIndex, endIndex);

  return (
    <>
      <div className={styles["full-body"]}>
        <Uheader length={danhSachLietSi.length} />
        <nav className={styles["nav-container"]}>
          <button onClick={() => { setActiveTab("home"); setIsIntroVisible(true); }} 
            className={`${styles.button} ${activeTab === "home" ? styles.active : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 3.293l6 6V15h-4v-4H6v4H2v-5.707l6-6z"/>
                    <path fillRule="evenodd" d="M7.293 2.5a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L8 4.414 2.707 9.914A1 1 0 011.293 8.5l6-6z"/>
                </svg> 
                Trang Chủ
          </button>
          <button onClick={() => setActiveTab("search")} className={`${styles.button} ${activeTab === "search" ? styles.active : ""}`}>Tra cứu thông tin Liệt sĩ</button>
          <button onClick={() => setActiveTab("contact")} className={`${styles.button} ${activeTab === "contact" ? styles.active : ""}`}>Thông tin liên hệ</button>
        </nav>


      {/* Nội dung hiển thị */}
      <div className={styles["content"]}>
        {activeTab === "search" && (
          <div className={styles["search-container"]}>
            <div className={styles["search-bar"]}>
              <USearchBar onSearchClick={onSearchClick} />
            </div>

            <div className={styles["list-and-info"]}>
              <div className={styles["list"]}>
                <USideBar
                  DanhSachLietSi={danhSachLietSi}
                  setLietSiDangHienThi={setLietSiDangHienThi}
                  CurrentPage={currentPage}
                  lietSiDangHienThi={lietSiDangHienThi}
                />

                <UPagination
                  DanhSachLietSi={danhSachLietSi}
                  CurrentPage={currentPage}
                  OnPageChoose={onPageChoose}
                />
              </div>

              <div className={styles["info"]}>
                <UPosition lietSiDangHienThi={lietSiDangHienThi} />
                <UAdditonalInfo lietSiDangHienThi={lietSiDangHienThi} />
              </div>
            </div>

            <div className={`${styles["map"]} ${!isListVisible ? styles["map-full-width"] : ""}`}>
              <UMap lietSiDangHienThi={lietSiDangHienThi} OnSearchClick={onSearchWithLo} />
            </div>
          </div>
        )}
        {activeTab === "home" && (
          <>
          <nav className={styles["nav-container-mini"]}>
            <button onClick={() => {handleTabClick("gioithieu"); setIsIntroVisible(false); }} className={`${styles.buttonMini} ${activeTabmini === "gioithieu" ? styles.active : ""}`}>GIỚI THIỆU</button>
            <button onClick={() => {handleTabClick("congtrinh"); setIsIntroVisible(false); }} className={`${styles.buttonMini} ${activeTabmini === "congtrinh" ? styles.active : ""}`}>CÔNG TRÌNH THANH NIÊN</button>
            <button onClick={() => {handleTabClick("danhsach"); setIsIntroVisible(false); }} className={`${styles.buttonMini} ${activeTabmini === "danhsach" ? styles.active : ""}`}>DANH SÁCH ANH HÙNG - LIỆT SĨ</button>
          </nav>
                {/* Nếu isIntroVisible = true, hiển thị giao diện giới thiệu */}
          {isIntroVisible ? (
            <div className={styles["miniChoose"]}>
              <div className={styles["hinhanhgt"]}>
                <img
                  src={"/gioithieu/textNTLS.png"}
                  alt="Hình ảnh hiện tại"
                />
              </div>
              
              {/* Phần 1: Hình ảnh hiện tại */}
              <div className={styles["hinhanhht"]}>
                <img
                  src={images[currentIndex]}
                  alt="Hình ảnh hiện tại"
                />
              </div>

              {/* Phần 2: Danh sách thumbnail */}
              <div className={styles["dsThumbnail"]}>
                {/* Nút chuyển trái */}
                <button onClick={prevImage}>
                  &lt;
                </button>

                {/* Danh sách 7 thumbnail */}
                <div className={styles.dsThumbnailImg}>
                  {getVisibleThumbnails().map((thumbnail) => (
                    <img
                      key={thumbnail.index}
                      src={thumbnail.url}
                      alt={`Thumbnail ${thumbnail.index + 1}`}
                      className={thumbnail.index === currentIndex ? styles.active : ""}
                      onClick={() => handleThumbnailClick(thumbnail.index)}
                    />
                  ))}
                </div>

                {/* Nút chuyển phải */}
                <button onClick={nextImage}>
                  &gt;
                </button>
              </div>
              <div className={styles["hinhanhslogan"]}>
                <img
                  src={"/gioithieu/textSlogan.png"}
                  alt="Hình ảnh hiện tại"
                />
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.8428468185416!2d108.19134971013099!3d11.097861353137954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31769854301fb233%3A0x35580cc304f361cf!2zTmdoxKlhIHRyYW5nIExp4buHdCBz4bu5IFThu4luaCBCw6xuaCBUaHXhuq1u!5e1!3m2!1svi!2s!4v1742651072849!5m2!1svi!2s"
                className={styles["mapContainer"]}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            ) : ( 
                  <>
                    {activeTabmini === "gioithieu" && (
                      <>
                        <div className={styles["text-and-img"]}>
                          <div className={styles["text"]}>
                            <p>Nghĩa trang Liệt sĩ tỉnh Bình Thuận tọa lạc tại xã Hồng Sơn, huyện Hàm Thuận Bắc, là nơi an nghỉ của hàng nghìn anh hùng liệt sĩ đã hy sinh vì độc lập, tự do của Tổ quốc. Đây không chỉ là công trình mang ý nghĩa tâm linh mà còn là biểu tượng thiêng liêng, thể hiện lòng biết ơn sâu sắc của Đảng bộ, chính quyền và nhân dân tỉnh Bình Thuận đối với các thế hệ cha anh đã cống hiến cho đất nước</p>
                          </div>
                          <div className={styles["img"]}>
                            <img src="/gioithieu/gioithieu3.jpg" alt="home1" />
                          </div>
                        </div>
                      <div className={styles["text-and-img"]}>
                        <div className={styles["img"]}>
                          <img src="/gioithieu/gioithieu1.jpg" alt="home1" />
                        </div>
                        <div className={styles["text"]}>
                          <p>Sau ngày giải phóng miền Nam, thống nhất đất nước vào năm 1975, tỉnh Bình Thuận đã triển khai xây dựng nghĩa trang này vào năm 1978 trên diện tích khoảng 8 ha.</p>
                          <p>Đến năm 1983, công trình cơ bản hoàn thành, trở thành nơi quy tập hài cốt các liệt sĩ từ nhiều khu vực trong tỉnh. Kể từ đó, nghĩa trang đã trải qua nhiều đợt tu bổ, nâng cấp để đảm bảo sự trang nghiêm, tôn kính.</p>
                        </div>
                      </div>  
                      <div className={styles["text-and-img"]}>
                        <div className={styles["text"]}>
                          <p>Trải qua nhiều năm, Nghĩa trang Liệt sĩ tỉnh Bình Thuận đã trở thành địa chỉ đỏ, nơi tổ chức các hoạt động tri ân, tưởng niệm các anh hùng liệt sĩ, đồng thời giáo dục truyền thống yêu nước cho thế hệ trẻ. Hằng năm, vào các dịp lễ lớn như Ngày Thương binh - Liệt sĩ (27/7) và Tết Nguyên đán, các đoàn đại biểu từ Trung ương đến địa phương cùng đông đảo nhân dân, đoàn viên, thanh niên đều đến dâng hương, dâng hoa, thắp nến tri ân tại đây</p>
                        </div>
                        <div className={styles["img"]}>
                          <img src="/gioithieu/gioithieu2.jpg" alt="home1" />
                        </div>
                      </div>
                      <div className={styles["map"]}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.8428468185416!2d108.19134971013099!3d11.097861353137954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31769854301fb233%3A0x35580cc304f361cf!2zTmdoxKlhIHRyYW5nIExp4buHdCBz4bu5IFThu4luaCBCw6xuaCBUaHXhuq1u!5e1!3m2!1svi!2s!4v1742651072849!5m2!1svi!2s"
                        className={styles["mapContainer"]}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                      </div>
                    </>                    
                    )}
                    {activeTabmini === "congtrinh" && (
                      <div security="center" style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
                        <div className={styles["congtrinh"]} >
                          <p>Công trình thanh niên “Số hóa Nghĩa trang Liệt sĩ tỉnh Bình Thuận” do Đoàn TNCS Hồ Chí Minh tỉnh Bình Thuận phối hợp với Đoàn TNCS Hồ Chí Minh TP. Hồ Chí Minh và Trường Đại học Công nghệ Thông tin TP. Hồ Chí Minh thực hiện, nhằm ứng dụng công nghệ vào công tác tri ân, tưởng niệm các anh hùng liệt sĩ. Đây không chỉ là hoạt động mang ý nghĩa sâu sắc trong việc bày tỏ lòng biết ơn đối với những người đã hy sinh vì Tổ quốc mà còn là bước đi quan trọng trong việc chuyển đổi số, góp phần nâng cao hiệu quả công tác quản lý, tra cứu và lưu trữ thông tin.</p>
                          <p>Công trình giúp đoàn viên, thanh niên và người dân trong và ngoài tỉnh thuận tiện hơn trong việc tìm kiếm thông tin về các liệt sĩ, vị trí phần mộ, đồng thời hỗ trợ Ban quản trang trong công tác quản lý một cách khoa học và hệ thống. Không chỉ có ý nghĩa trong hiện tại, việc số hóa nghĩa trang còn đảm bảo tính bền vững, giúp lưu giữ và cập nhật thông tin một cách lâu dài, tránh nguy cơ thất lạc dữ liệu, qua đó tiếp tục truyền lại những giá trị lịch sử thiêng liêng cho thế hệ sau. </p>
                          <p>Đây cũng là một dấu mốc quan trọng trong hành trình ứng dụng công nghệ vào các hoạt động đền ơn đáp nghĩa của tuổi trẻ Bình Thuận, mở ra hướng đi mới trong việc số hóa các địa danh, di tích lịch sử của tỉnh trong thời gian tới. Công trình không chỉ thể hiện tinh thần trách nhiệm của thế hệ trẻ đối với lịch sử mà còn là sự khẳng định vai trò tiên phong của đoàn viên, thanh niên trong quá trình chuyển đổi số, đưa công nghệ trở thành cầu nối giữa quá khứ và hiện tại, để sự hy sinh của các thế hệ cha anh luôn được khắc ghi và tri ân bằng những hành động thiết thực nhất.</p>
                        </div>
                      </div>
                    )}
                    {activeTabmini === "danhsach" && (
                      <div className={styles["tableContainer"]}>
                        <table className={styles["table"]}>
                          <thead>
                            <tr>
                              <th>Họ và tên</th>
                              <th>Quê quán</th>
                              <th>Năm sinh</th>
                              <th>Năm mất</th>
                              <th>Vị trí mộ</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentData.map((row, index) => (
                              <tr key={index}>
                                <td>{row.hovaten || ""}</td>
                                <td>{row.quequan || ""}</td>
                                <td>{row.namsinh || ""}</td>
                                <td>{row.nammat || ""}</td>
                                <td>{`Khu: ${row.lo || ""}, Hàng: ${row.hang || ""}, Mộ: ${row.mo || ""}`}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>

                      {/* Phân trang */}
                      <div className={styles["pagination"]}>
                        <button onClick={() => setCurrentPageds(prev => Math.max(prev - 1, 1))} disabled={currentPageds === 1}>
                          Trang trước
                        </button>

                        {displayedPages.map(page => (
                          <button
                            key={page}
                            onClick={() => setCurrentPageds(page)}
                            className={`${styles.pageButton} ${page === currentPageds ? styles.active : ""}`}
                          >
                            {page}
                          </button>
                        ))}

                        <button onClick={() => setCurrentPageds(prev => Math.min(prev + 1, totalPages))} disabled={currentPageds === totalPages}>
                          Trang sau
                        </button>
                      </div>
                    </div>
                    )}
                  </>
                )}
          </> 
        )
        }
        {activeTab === "contact" && (
            <div className={styles["thongtinlh"]}>
              <div className={styles["hinhanhgt"]}>
                <img
                  src={"/gioithieu/textNTLS.png"}
                  alt="Hình ảnh hiện tại"
                />
              </div>
              
              {/* Phần 1: Hình ảnh hiện tại */}
              <div className={styles["hinhanhht"]}>
                <img
                  src={images[currentIndex]}
                  alt="Hình ảnh hiện tại"
                />
              </div>

              {/* Phần 2: Danh sách thumbnail */}
              <div className={styles["dsThumbnail"]}>
                {/* Nút chuyển trái */}
                <button onClick={prevImage}>
                  &lt;
                </button>

                {/* Danh sách 7 thumbnail */}
                <div className={styles.dsThumbnailImg}>
                  {getVisibleThumbnails().map((thumbnail) => (
                    <img
                      key={thumbnail.index}
                      src={thumbnail.url}
                      alt={`Thumbnail ${thumbnail.index + 1}`}
                      className={thumbnail.index === currentIndex ? styles.active : ""}
                      onClick={() => handleThumbnailClick(thumbnail.index)}
                    />
                  ))}
                </div>

                {/* Nút chuyển phải */}
                <button onClick={nextImage}>
                  &gt;
                </button>
              </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.8428468185416!2d108.19134971013099!3d11.097861353137954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31769854301fb233%3A0x35580cc304f361cf!2zTmdoxKlhIHRyYW5nIExp4buHdCBz4bu5IFThu4luaCBCw6xuaCBUaHXhuq1u!5e1!3m2!1svi!2s!4v1742651072849!5m2!1svi!2s"
              className={styles["mapContainer"]}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className={styles["thongtinlhtext"]}>
              <h2>Thông tin liên hệ</h2>
              <h1>NGHĨA TRANG LIỆT SĨ TỈNH BÌNH THUẬN</h1>
              <p>Địa chỉ: Quốc lộ 1A, xã Hồng Sơn, huyện Hàm Thuận Bắc, tỉnh Bình Thuận</p>
              <p>Điện thoại: 0252 3624088</p>
            </div>
          </div>
          )
        }
      </div>
      <footer className={styles["footer"]}>
          <p>© Thực hiện bởi <img src="./img/logo copy.png"/> Hội sinh viên trường Đại học Công nghệ Thông tin, ĐHQG-HCM</p>
        </footer>
    </div>
    </>
  );
}

