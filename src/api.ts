import Axios from "axios";
import rawQuery from "./rawQuery";
import createRecord from "./createRecord";
import { hashPassword } from "./hashPassword";

export class api {
  static async getSekolah() {
    const host = window.location.hostname;
    const res = await rawQuery(
      `{
        sekolah(where: {ppdb_host: {_eq: "${host}"}}) {
            id
            logo_url
            nama_sekolah
            nama_singkat
        }
    }`,
      { debug: true }
    );

    if (res && res.sekolah && res.sekolah.length > 0) return res.sekolah[0];
  }

  static async cekAkta(akta: string, sekolah_id: number) {
    const res = await rawQuery(`{
      murid(where: {no_akta_kelahiran: {_eq: "${akta}"}, sekolah_id: {_eq: ${sekolah_id}}}) {
        id
        nama_murid
        nisn
        no_akta_kelahiran
        nsa
        sekolah_id
      }
    }
    `);
    return res.murid;
  }

  static async send(data: any) {
    let muridId = await createRecord("murid", {
      nama_murid: data.nama_lengkap,
      nsa: data.nisn,
      sekolah_id: data.sekolah_id,
      nisn: data.nisn,
      password: "123",
      no_akta_kelahiran: data.no_akta_kelahiran,
      data: data
    });

    await hashPassword(muridId);

    let kelas = await rawQuery(`{
      kelas(where: {nama_kelas: {_eq: "PPDB"}, sekolah_id: {_eq: ${
        data.sekolah_id
      }}}) {
        id
      }
    }`);

    let kelasId = 0;
    if (kelas.kelas.length === 0) {
      kelasId = await createRecord("kelas", {
        nama_kelas: "PPDB",
        sekolah_id: data.sekolah_id
      });
    } else {
      kelasId = kelas.kelas[0].id;
    }

    await createRecord("kelas_murid", {
      kelas_id: kelasId,
      murid_id: muridId
    });

    return muridId;
  }
}
