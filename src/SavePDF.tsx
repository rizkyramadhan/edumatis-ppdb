import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';


// Create Document Component
export default ({data}:any) => (
  <Document>
    <Page size="A4">
      <View>
      </View>
      <View style={styles.header}>
        <Text>FORMULIR PENDAFTARAN PESERTA DIDIK BARU</Text>
        <Text>SMA MARYAM SURABAYA</Text>
        <Text>Tahun Pelajaran 2020 - 2021</Text>
      </View>      
      <View>
        <Text style={{fontSize: 12, textAlign: 'center'}}>No. Formulir : .../FPSB/{data.tanggal_daftar}</Text>
      </View>
      <View style={styles.content}>
        {/* <Text>{JSON.stringify(data)}</Text> */}
        <Text style={{fontWeight: 'bold', fontSize: 12, textAlign: 'center'}}>BIODATA CALON SISWA</Text>
        <Text>Nama Calon Siswa : {data.nama_lengkap}</Text>
        <Text>No Induk / NSA: {data.nisn}</Text>
        <Text>No. Akta Kelahiran : {data.no_akta_kelahiran}</Text>
        <Text>No. Induk Kependudukan / NIK : {data.nik}</Text>
        <Text>No. Kartu Keluarga (KK) : {data.no_kk}</Text>
        <Text>Tempat, Tanggal Lahir : {data.tempat_lahir}, {data.tgl_lahir}</Text>
        <Text>Jenis Kelamin : {data.jenis_kelamin}</Text>
        <Text>Agama : {data.agama}</Text>
        <Text>Tinggi : {data.tinggi} cm.</Text>
        <Text>Berat Badan : {data.berat} Kg.</Text>
        <Text>No. HP Siswa : {data.no_hp_siswa}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 12, textAlign: 'center'}}>DATA ORANGTUA / WALI</Text>
        <Text>Nama Lengkap Ayah : {data.nama_ayah}</Text>
        <Text>Tahun Lahir Ayah : {data.tahun_lahir_ayah}</Text>
        <Text>NIK Ayah : {data.nik_ayah}</Text>
        <Text>Pendidikan Terakhir Ayah : {data.pendidikan_ayah}</Text>
        <Text>Pekerjaan Ayah : {data.pekerjaan_ayah}</Text>
        <Text>Penghasilan Ayah per Bulan : {data.penghasilan_ayah}</Text>
        <Text>Nama Lengkap Ibu : {data.nama_ibu}</Text>
        <Text>Tahun Lahir Ibu : {data.tahun_lahir_ibu}</Text>
        <Text>NIK Ibu : {data.nik_ibu}</Text>
        <Text>Pendidikan Terakhir Ibu : {data.pendidikan_ibu}</Text>
        <Text>Pekerjaan Ibu : {data.pekerjaan_ibu}</Text>
        <Text>Penghasilan Ibu per Bulan : {data.penghasilan_ibu}</Text>
        <Text>Nama Lengkap Wali : {data.nama_wali}</Text>
        <Text>Tahun Lahir Wali : {data.tahun_lahir_wali}</Text>
        <Text>NIK wali : {data.nik_wali}</Text>
        <Text>Pendidikan Terakhir Wali : {data.pendidikan_wali}</Text>
        <Text>Pekerjaan Wali : {data.pekerjaan_wali}</Text>
        <Text>Penghasilan Wali per Bulan : {data.penghasilan_wali}</Text>
        <Text>No. Handphone Orangtua / Wali : {data.no_hp_ortu}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 12, textAlign: 'center'}}>DATA TEMPAT TINGGAL</Text>
        <Text>Jenis Tinggal : {data.jenis_tinggal}</Text>
        <Text>Alamat Tempat Tinggal : {data.alamat_kk}</Text>
        <Text>RT. {data.alamat_kk_rt_} / RW. {data.alamat_kk_rw}</Text>
        <Text>Kelurahan : {data.alamat_kk_kelurahan}</Text>  
        <Text>Kecamatan : {data.alamat_kk_kecamatan}</Text>  
        <Text>Kabupaten/Kota : {data.alamat_kk_kabupaten}</Text>  
        <Text>Kode Pos : {data.alamat_kk_kodepos}</Text>  
        <Text>Provinsi : {data.alamat_kk_provinsi}</Text>
        <Text>Jarak Tempat Tinggal Ke Sekolah : {data.jarak_ke_sekolah} Km</Text> 
        <Text>Alat Transportasi : {data.alat_transport}</Text>
        <Text>Jumlah Saudara : {data.jml_saudara}</Text>
        <Text>E-Mail Pribadi : {data.email}</Text> 
        <Text style={{fontWeight: 'bold', fontSize: 12, textAlign: 'center'}}>REGISTRASI PESERTA DIDIK</Text>
        <Text>Jenis Sekolah : {data.jenis_sekolah}</Text>
        <Text>Nama SMP/MTs : {data.nama_sekolah_sebelumnya}</Text>
        <Text>No. Ijazah SMP/MTs :  {data.no_ijazah}</Text>
        <Text>No. SKHUN SMP/MTs : {data.no_skhun}</Text>
        <Text style={{marginTop:15}}>Surabaya, {data.tanggal_daftar}</Text>
        <Text>TTD,</Text>
        <Text style={{fontWeight: 'bold'}}>Panitia PPDB SMA Maryam Surabaya</Text>
      </View>
      <View style={styles.content}>
        <Text style={{
          fontWeight: 'bold', 
          fontStyle: 'italic', 
          fontSize: 8,
          textAlign: 'center',
          marginTop: 10,
          }}>
            ppdb2020/copyright@edumatis_/https://ppdb.smamaryam.sch.id/</Text>
      </View>
    </Page>
  </Document>  
);

// Create styles
const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 15,
    paddingBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
  },
  content: {
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    fontSize: 11
  },

  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});