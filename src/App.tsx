import React, { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import { TextField as FabricTextField } from "office-ui-fabric-react/lib/TextField";
import {
  CompoundButton,
  MessageBar,
  MessageBarType,
  DatePicker,
  Dropdown as FabricDropdown,
  DefaultButton,
  Spinner,
  SpinnerSize,
  Icon
} from "office-ui-fabric-react";
import { api } from "./api";
import moment from "moment";

const required = [
  "no_ijazah",
  "no_skhun",
  "no_kk",
  "no_akta_kelahiran",
  "nama_lengkap",
  "jenis_kelamin",
  "agama",
  "nisn",
  "no_induk",
  "nik",
  "tempat_lahir",
  "tgl_lahir",
  "tinggi",
  "berat",
  "no_hp",
  "email",
  "nama_ayah",
  "pekerjaan_ayah",
  "pendidikan_ayah",
  "penghasilan_ayah",
  "nama_ibu",
  "pekerjaan_ibu",
  "pendidikan_ibu",
  "jenis_tinggal",
  "alamat",
  "propinsi",
  "no_hp_ortu",
  "jarak_ke_sekolah",
  "alat_transport"
];

export default () => {
  const [sekolah, setSekolah] = useState(false as any);
  const [data, setData] = useState({ berkebutuhan_khusus: "Tidak" } as any);
  const [errors, setErrors] = useState({} as any);
  const [status, setStatus] = useState("draft");
  const [sameAddr, setSameAddr] = useState(true);

  useEffect(() => {
    if (data.no_akta_kelahiran) {
      localStorage.ppdb = JSON.stringify(data);
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      setSekolah(await api.getSekolah());
    })();

    if (localStorage.ppdb) {
      try {
        let ppdb = JSON.parse(localStorage.ppdb);
        if (ppdb.no_akta_kelahiran) {
          setData(ppdb);
          setStatus("loaded");
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  if (sekolah === false || !sekolah.id) {
    return (
      <div className={"wrapper"}>
        <div className="ms-font-su">Pendaftaran PPDB</div>
        <Loader />
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className={"wrapper"}>
        <div className="ms-font-su">Mengirim pendaftaran...</div>
        <Loader />
      </div>
    );
  }

  if (localStorage.ppdbId) {
    return (
      <div className={"wrapper"}>
        <div className="ms-font-su">Pendaftaran diterima</div>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <MessageBar messageBarType={MessageBarType.success}>
            Silakan lanjutkan untuk melakukan pembayaran menggunakan aplikasi
            Edumatis, berikut ini adalah informasi login anda
          </MessageBar>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <pre
            style={{ margin: 50, textAlign: "left", fontWeight: "bold" }}
            className="ms-font-xl"
          >
            Kode Siswa: {sekolah.id.pad(3)}-{localStorage.ppdbId}
            <br />
            Password : 123
          </pre>

          <DefaultButton
            style={{ float: "right" }}
            onClick={() => {
              if (
                confirm("Mohon catat KodeSiswa dan Password, sudah dicatat ?")
              ) {
                localStorage.removeItem("ppdbId");
                setStatus("draft");
              }
            }}
          >
            Kembali ke halaman awal
          </DefaultButton>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img src="/edu0.png" alt="Edumatis Play Store" />
          <br />
          <img src="/edu1.png" alt="Edumatis Login" />
          <br />
        </div>
      </div>
    );
  }

  return (
    <div className={"wrapper"}>
      <h1 className="ms-font-su">PPDB {sekolah.nama_sekolah} </h1>
      {
        ({
          registered: (
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <MessageBar messageBarType={MessageBarType.error}>
                No. Akta Kelahiran ini sudah terdaftar, mohon ubah data anda.
              </MessageBar>
            </div>
          ),
          draft: (
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <MessageBar messageBarType={MessageBarType.info}>
                Isi No. Akta Kelahiran terlebih dahulu untuk memastikan data
                diri Anda belum pernah di-entry sebelumnya.
              </MessageBar>
            </div>
          ),
          loaded: (
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <MessageBar messageBarType={MessageBarType.success}>
                Data anda sebelumnya berhasil dimuat. Silakan melanjutkan
                pengisian form.
                <br />
                <br />
                Atau jika Anda ingin mengulang dari awal, anda dapat
                <a
                  href="#"
                  onClick={() => {
                    if (
                      confirm("Apakah Anda yakin ingin mengulang dari awal ?")
                    ) {
                      setData({ berkebutuhan_khusus: "Tidak" });
                      localStorage.removeItem("ppdb");
                      setStatus("draft");
                    }
                  }}
                >
                  klik disini untuk me-reset
                </a>
                .
              </MessageBar>
            </div>
          )
        } as any)[status]
      }

      <div className="ms-Grid" dir="ltr">
        <h2 className="ms-font-xl">Informasi Pendaftaran</h2>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md6">
            <TextField
              label="No. Akta Kelahiran"
              field="no_akta_kelahiran"
              onBlur={async (e: any) => {
                let res = await api.cekAkta(e.target.value, sekolah.id);
                if (res.length > 0) {
                  setStatus("registered");
                  setErrors({
                    ...errors,
                    no_akta_kelahiran: " ini sudah terdaftar"
                  });
                } else {
                  setStatus("loaded");
                }
              }}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md6">
            <TextField
              label="No. Kartu Keluarga"
              field="no_kk"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm4">
            <TextField
              label="NISN"
              field="nisn"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm4">
            <TextField
              label="No. Induk Siswa"
              field="no_induk"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
          <div className="ms-Grid-col ms-sm4">
            <TextField
              label="NIK"
              field="nik"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md6">
            <TextField
              label="No. Ijazah Sebelumnya"
              field="no_ijazah"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md6 ">
            <TextField
              label="No. SKHUN Sebelumnya"
              field="no_skhun"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <h2 className="ms-font-xl">Data Diri</h2>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm9 ms-md9">
            <TextField
              label="Nama Lengkap"
              field="nama_lengkap"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm3 ms-md3">
            <Dropdown
              field="jenis_kelamin"
              label="Jenis Kelamin"
              items={["Laki-Laki", "Perempuan"]}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md3">
            <TextField
              label="Tempat Lahir"
              field="tempat_lahir"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm6 ms-md3">
            <DatePicker
              value={moment(data.tgl_lahir).toDate()}
              formatDate={(date: Date | undefined): string => {
                return moment(date).format("DD MMM YYYY");
              }}
              onSelectDate={(date: Date | null | undefined) => {
                if (date != null)
                  setData({
                    ...data,
                    tgl_lahir: moment(date).format("YYYY-MM-DD")
                  });
              }}
              showWeekNumbers={false}
              allowTextInput={true}
              firstWeekOfYear={1}
              label="Tanggal Lahir"
            />
          </div>

          <div className="ms-Grid-col ms-sm4 ms-md2">
            <TextField
              label="Tinggi"
              field="tinggi"
              suffix="cm"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm4 ms-md2">
            <TextField
              label="Berat"
              field="berat"
              suffix="kg"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm4 ms-md2">
            <TextField
              label="Jml. Saudara"
              field="jml_saudara"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md6">
            <TextField
              label="No. HP"
              field="no_hp"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm6 ms-md6">
            <TextField
              label="Email"
              field="email"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm3 ms-md3">
            <Dropdown
              field="agama"
              label="Agama"
              items={[
                "Islam",
                "Kristen Prostestan",
                "Kristen Katolik",
                "Hindu",
                "Budha",
                "Kong Hu Chu",
                "Lainnya"
              ]}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
          <div className="ms-Grid-col ms-sm6">
            <TextField
              label="Rombongan Belajar (Rombel)"
              field="rombel"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm3">
            <TextField
              label="Tingkat"
              field="rombel_tingkat"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12">
            <Dropdown
              field="berkebutuhan_khusus"
              label="Berkebutuhan Khusus"
              items={[
                "Tidak",
                "Tuna Netra",
                "Tuna Rungu",
                "Tuna Grahita Ringan",
                "Tuna Grahita Berat",
                "Tuna Daksa Ringan ",
                "Tuna Daksa Berat ",
                "Tuna Laras ",
                "Tuna Wicara",
                "Tuna Ganda",
                "Cerdas Istimewa",
                "Bakat Istimewa",
                "Kesulitan Belajar",
                "Indigo",
                "Down Sindrome",
                "Autis",
                "Terpencil / Terbelakang",
                "Lain lain"
              ]}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <h2 className="ms-font-xl">Data Ayah</h2>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6">
            <TextField
              label="Nama Ayah"
              field="nama_ayah"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm6">
            <Dropdown
              field="pekerjaan_ayah"
              label="Pekerjaan Ayah"
              items={[
                "Tidak Bekerja",
                "Nelayan",
                "Peternak",
                "PNS/TNI/POLRI",
                "Karyawan Swasta",
                "Pedagang Kaki Lima",
                "Pedagang Besar",
                "Wiraswasta",
                "Wirausaha",
                "Buruh",
                "Lain lain"
              ]}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6">
            <TextField
              label="NIK Ayah"
              field="nik_ayah"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm6">
            <TextField
              label="Email Ayah"
              field="email_ayah"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6">
            <Dropdown
              field="pendidikan_ayah"
              label="Pendidikan Ayah"
              items={[
                "Tidak Sekolah",
                "Putus SD",
                "SD Sederajat",
                "SMP Sederajat",
                "SMA Sederajat",
                "D1",
                "D2",
                "D3",
                "D4/S1",
                "S2",
                "S3"
              ]}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm6">
            <Dropdown
              field="penghasilan_ayah"
              label="Penghasilan Ayah"
              items={[
                "Kurang Dari Rp 1.000.000",
                "Rp 1.000.000 - Rp 3.000.000",
                "Lebih Dari Rp 3.000.000"
              ]}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <h2 className="ms-font-xl">Data Ibu</h2>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6">
            <TextField
              label="Nama Ibu"
              field="nama_ibu"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm6">
            <Dropdown
              field="pekerjaan_ibu"
              label="Pekerjaan Ibu"
              items={[
                "Ibu Rumah Tangga",
                "Nelayan",
                "Peternak",
                "PNS/TNI/POLRI",
                "Karyawan Swasta",
                "Pedagang Kaki Lima",
                "Pedagang Besar",
                "Wiraswasta",
                "Wirausaha",
                "Buruh",
                "Lain lain"
              ]}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6">
            <TextField
              label="NIK Ibu"
              field="nik_ibu"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm6">
            <TextField
              label="Email Ibu"
              field="email_ibu"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6">
            <Dropdown
              field="pendidikan_ibu"
              label="Pendidikan Ibu"
              items={[
                "Tidak Sekolah",
                "Putus SD",
                "SD Sederajat",
                "SMP Sederajat",
                "SMA Sederajat",
                "D1",
                "D2",
                "D3",
                "D4/S1",
                "S2",
                "S3"
              ]}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm6">
            <Dropdown
              field="penghasilan_ibu"
              label="Penghasilan Ibu"
              items={[
                "Kurang Dari Rp 1.000.000",
                "Rp 1.000.000 - Rp 3.000.000",
                "Lebih Dari Rp 3.000.000"
              ]}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <h2 className="ms-font-xl">Data Tempat Tinggal</h2>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md6">
            <Dropdown
              field="jenis_tinggal"
              label="Jenis Tinggal"
              items={[
                "Bersama orang tua",
                "Bersama Wali",
                "Kos",
                "Asrama",
                "Panti Asuhan",
                "Lainnya"
              ]}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <h3 className="ms-font-l">Alamat sesuai Kartu Keluarga</h3>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12 ms-md6">
            <TextField
              label="Alamat"
              field="alamat_kk"
              multiline={true}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
          <div className="ms-Grid-col ms-sm3 ms-md2">
            <TextField
              label="RT"
              field="alamat_kk_rt"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm3 ms-md2">
            <TextField
              label="RW"
              field="alamat_kk_rw"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>

          <div className="ms-Grid-col ms-sm3 ms-md2">
            <TextField
              label="Kode Pos"
              field="alamat_kk_kodepos"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md3">
            <TextField
              field="alamat_kk_kelurahan"
              label="Kelurahan/Desa"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md3">
            <TextField
              field="alamat_kk_kecamatan"
              label="Kecamatan"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md3">
            <TextField
              field="alamat_kk_kabupaten"
              label="kabupaten"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md3">
            <TextField
              field="alamat_kk_propinsi"
              label="Propinsi"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <br />
        <br />
        <label>
          <input
            type="checkbox"
            defaultChecked={sameAddr}
            onChange={() => {
              setSameAddr(!sameAddr);
            }}
          />{" "}
          Alamat Domisili sama dengan alamat Kartu Keluarga
        </label>
        {!sameAddr && (
          <div>
            <h3 className="ms-font-l">Alamat Domisili</h3>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm12 ms-md6">
                <TextField
                  label="Alamat"
                  field="alamat_dm_alamat"
                  multiline={true}
                  data={data}
                  setData={setData}
                  errors={errors}
                  setErrors={setErrors}
                />
              </div>
              <div className="ms-Grid-col ms-sm3 ms-md2">
                <TextField
                  label="RT"
                  field="alamat_dm_rt"
                  data={data}
                  setData={setData}
                  errors={errors}
                  setErrors={setErrors}
                />
              </div>

              <div className="ms-Grid-col ms-sm3 ms-md2">
                <TextField
                  label="RW"
                  field="alamat_dm_rw"
                  data={data}
                  setData={setData}
                  errors={errors}
                  setErrors={setErrors}
                />
              </div>

              <div className="ms-Grid-col ms-sm3 ms-md2">
                <TextField
                  label="Kode Pos"
                  field="alamat_dm_kodepos"
                  data={data}
                  setData={setData}
                  errors={errors}
                  setErrors={setErrors}
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-sm6 ms-md3">
                <TextField
                  field="alamat_dm_kelurahan"
                  label="Kelurahan/Desa"
                  data={data}
                  setData={setData}
                  errors={errors}
                  setErrors={setErrors}
                />
              </div>
              <div className="ms-Grid-col ms-sm6 ms-md3">
                <TextField
                  field="alamat_dm_kecamatan"
                  label="Kecamatan"
                  data={data}
                  setData={setData}
                  errors={errors}
                  setErrors={setErrors}
                />
              </div>
              <div className="ms-Grid-col ms-sm6 ms-md3">
                <TextField
                  field="alamat_dm_kabupaten"
                  label="kabupaten"
                  data={data}
                  setData={setData}
                  errors={errors}
                  setErrors={setErrors}
                />
              </div>
              <div className="ms-Grid-col ms-sm6 ms-md3">
                <TextField
                  field="alamat_dm_propinsi"
                  label="Propinsi"
                  data={data}
                  setData={setData}
                  errors={errors}
                  setErrors={setErrors}
                />
              </div>
            </div>
          </div>
        )}
        <br />
        <br />
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md6">
            <TextField
              field="no_hp_ortu"
              label="No. HP Orang Tua / Wali"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md6">
            <TextField
              field="jarak_ke_sekolah"
              label="Jarak Tempat Tinggal ke Sekolah"
              suffix="km"
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm12">
            <Dropdown
              field="alat_transport"
              label="Alat Transportasi Ke Sekolah"
              items={[
                "Jalan Kaki",
                "Kendaraan Pribadi",
                "Kendaraan Umum/Angkot/Pete-Pete",
                "Jemputan Sekolah",
                "Panti Asuhan",
                "Lainnya"
              ]}
              data={data}
              setData={setData}
              errors={errors}
              setErrors={setErrors}
            />
          </div>
        </div>
        {Object.keys(errors).length > 0 && (
          <div style={{ marginTop: 20 }}>
            <MessageBar messageBarType={MessageBarType.blocked}>
              Mohon benahi {Object.keys(errors).length} kesalahan berikut:
              <ul>
                {Object.keys(errors).map((e, i) => (
                  <li key={i}>
                    {e} {errors[e]}
                  </li>
                ))}
              </ul>
            </MessageBar>
          </div>
        )}
        <CompoundButton
          primary={true}
          style={{ marginTop: 20, marginBottom: 200 }}
          onClick={async () => {
            let res = await api.cekAkta(data.no_akta_kelahiran, sekolah.id);
            if (res.length > 0) {
              setStatus("registered");
              setErrors({
                ...errors,
                no_akta_kelahiran: " ini sudah terdaftar"
              });
            } else {
              let err: any = {};
              let isError = false;
              for (let r of required) {
                if (!data[r]) {
                  isError = true;
                  err[r] = "Harus diisi.";
                }
              }
              if (isError) {
                setErrors(err);
              } else {
                setStatus("loading");
                localStorage.ppdbId = await api.send({
                  ...data,
                  sekolah_id: sekolah.id
                });
                setStatus("ready");
              }
            }
          }}
          secondaryText="Dan lanjutkan membayar biaya pendaftaran"
        >
          Simpan Data Diri
        </CompoundButton>
      </div>
    </div>
  );
};

const TextField = ({
  field,
  label,
  data,
  setData,
  errors,
  setErrors,
  suffix,
  multiline = false,
  onRenderSuffix,
  type = "text",
  onBlur
}: any) => {
  return (
    <FabricTextField
      label={label}
      value={data[field]}
      suffix={suffix}
      onBlur={onBlur}
      multiline={multiline}
      onRenderSuffix={onRenderSuffix}
      required={required.indexOf(field) >= 0}
      onChange={(e: any) => {
        let value = e.target.value;
        if (type === "number") {
          value = value.replace(/\D/g, "");
        }
        setData({ ...data, [field]: value });

        if (errors[field]) {
          delete errors[field];
          setErrors(errors);
        }
      }}
      errorMessage={errors[field]}
    />
  );
};

const Dropdown = ({
  field,
  label,
  items,
  data,
  setData,
  errors,
  setErrors
}: any) => {
  const [list, setList] = useState(items);
  if (!!data[field] && list.indexOf(data[field]) < 0) {
    setList([...items, data[field]]);
  }
  return (
    <FabricDropdown
      label={label}
      options={list.map((item: string) => {
        return { key: item, text: item };
      })}
      selectedKey={data[field]}
      required={required.indexOf(field) >= 0}
      onChange={(e: any, o: any, i: any) => {
        const lastItem = items[items.length - 1];
        let value = items[i];
        if (value === lastItem && lastItem.toLowerCase().indexOf("lain") >= 0) {
          value = prompt("Sebutkan " + label + " Lainnya: ");
          if (!value) return;
          setList([...items, value]);
        }
        setData({ ...data, [field]: value });

        if (errors[field]) {
          delete errors[field];
          setErrors(errors);
        }
      }}
      errorMessage={errors[field]}
    />
  );
};

const Loader = (props: any) => (
  <ContentLoader
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    style={{ height: 200, marginTop: 10 }}
    {...props}
  >
    <rect x="0" y="0" rx="3" ry="3" width="250" height="15" />
    <rect x="0" y="25" rx="3" ry="3" width="350" height="15" />
    <rect x="0" y="50" rx="3" ry="3" width="350" height="15" />
  </ContentLoader>
);

(Number.prototype as any).pad = function(size: number) {
  let s = String(this);
  while (s.length < (size || 2)) {
    s = "0" + s;
  }
  return s;
};
