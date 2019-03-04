import Axios from "axios";

const base = `https://edumatis.plansys.co/api/Postgre?p=`;
const plansys = `https://e.plansys.co/edumatis/index.php?r=ppdb/`;

export class api {

    static async getSekolah() {
        const host = window.location.hostname;
        const url = `${base}sekolah?_fields=[nama_sekolah],[nama_singkat],[id]|_where=(ppdb_host,eq,${host})|_page=1|_size=25`;
        const res = await Axios.get(url);

        if (res.data.length > 0) return res.data[0];
        return res.data;
    }

    static async cekAkta(akta: string, sekolah_id: number) {
        const url = `${plansys}cek&a=${akta}&s=${sekolah_id}`;
        const res = await Axios.get(url);

        if (res.data.length > 0) return res.data[0];
        return res.data;
    }

    static async send(data: any) {
        const url = `${plansys}save&a=${data.no_akta_kelahiran}&s=${data.sekolah_id}`;
        const res = await Axios.post(url, data);
        return res.data;
    }
}