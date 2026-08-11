import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import { BehaviorSubject } from "rxjs";
import { XoaDauVaSpace } from "../SHARED/functions";
import * as _ from "lodash";
import { firebaseConfig } from "../firebaseConfig";

class FireBase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this._db = firebase.database();
  }
  _danhSachLietSiFullSubject = new BehaviorSubject([]);

  _danhSachLietSiFull = [];

  _searchInforMation = {};

  _authUserSubject = new BehaviorSubject({});

  _authUser = null;

  _db = null;

  get searchInforMation() {
    return this._searchInforMation;
  }

  set searchInforMation(value) {
    this._searchInforMation = value;
  }

  get danhSachLietSiFullSubject() {
    return this._danhSachLietSiFullSubject;
  }

  get danhSachLietSiFull() {
    return this._danhSachLietSiFull;
  }

  set danhSachLietSiFull(value) {
    this._danhSachLietSiFull = value;
  }

  get db() {
    return this._db;
  }

  set db(value) {
    this._db = value;
  }

  get authUserSubject() {
    return this._authUserSubject;
  }

  get authUser() {
    return this._authUser;
  }

  set authUser(value) {
    this._authUser = value;
    this._authUserSubject.next(value);
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        alert("Tạo tài khoản thành công!");
      })
      .catch((err) => {
        alert(
          "Tạo tài khoản thất bại, cần nhập email hợp lệ và mật khẩu ít nhất 6 kí tự!"
        );
      });
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();

  doSearchLietSiWithLo = (lo) =>
    this._danhSachLietSiFull.filter(
      (lietSi) => XoaDauVaSpace(lietSi.lo) === XoaDauVaSpace(lo)
    );

  doSearhLietSi = () =>
    this._danhSachLietSiFull.filter((lietSi) => {
      return (
        XoaDauVaSpace(lietSi.hovaten).includes(
          XoaDauVaSpace(this._searchInforMation.hovaten)
        ) &&
        XoaDauVaSpace(lietSi.ten).includes(
          XoaDauVaSpace(this._searchInforMation.ten)
        ) &&
        XoaDauVaSpace(lietSi.quequan).includes(
          XoaDauVaSpace(this._searchInforMation.quequan)
        ) &&
        XoaDauVaSpace(lietSi.namsinh).includes(
          XoaDauVaSpace(this._searchInforMation.namsinh)
        ) &&
        XoaDauVaSpace(lietSi.nammat).includes(
          XoaDauVaSpace(this._searchInforMation.nammat)
        ) &&
        (!this._searchInforMation.lo ||
          XoaDauVaSpace(lietSi.lo) ===
            XoaDauVaSpace(this._searchInforMation.lo)) &&
        (!this._searchInforMation.hang ||
          XoaDauVaSpace(lietSi.hang) ===
            XoaDauVaSpace(this._searchInforMation.hang)) &&
        (!this._searchInforMation.mo ||
          XoaDauVaSpace(lietSi.mo) ===
            XoaDauVaSpace(this._searchInforMation.mo))
      );
    });
  doCreateLietsi = (ThongTin) => {
    this._db
      .ref()
      .child(this._danhSachLietSiFull.length + 1)
      .set(ThongTin)
      .then(() => {
        alert("Tạo thành công!");
      })
      .catch((e) => {
        alert("Đã xảy ra lỗi, vui lòng thử lại!");
      });
  };
  doEditLietsi = (LietSi, newLietSi) => {
    const index = _.findIndex(this._danhSachLietSiFull, function (lietsi) {
      return lietsi === LietSi;
    });
    this._db
      .ref()
      .child(index)
      .set(newLietSi)
      .then(() => {
        alert("Cập nhật thành công!");
      })
      .catch((e) => {
        alert("Đã xảy ra lỗi, vui lòng thử lại!");
      });
  };
  doDeleteLietsi = (LietSi) => {
    const index = _.findIndex(this._danhSachLietSiFull, function (lietsi) {
      return lietsi === LietSi;
    });
    this._db
      .ref()
      .child(index)
      .remove()
      .then(() => {
        alert("Xóa thành công!");
      })
      .catch((e) => {
        alert("Đã xảy ra lỗi, vui lòng thử lại!");
      });
  };
}

export const fireBaseStore = new FireBase();
