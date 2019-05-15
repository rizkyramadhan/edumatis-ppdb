import Axios from "axios";
import rawQuery from "./rawQuery";
import createRecord from "./createRecord";

export class api {
  static async getSekolah() {
    const host = window.location.hostname;
    const res = await rawQuery(`{
        sekolah(where: {ppdb_host: {_eq: "${host}"}}) {
            id
            logo_url
            nama_sekolah
            nama_singkat
        }
    }`);

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
    return await createRecord("murid", data);
  }
}
