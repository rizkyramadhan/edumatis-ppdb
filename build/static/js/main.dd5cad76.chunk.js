(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,a,t){"use strict";t.r(a);var r=t(0),s=t.n(r),n=t(41),l=t.n(n),m=(t(87),t(54)),i=t(34),c=t(27),d=t(13),o=t.n(d),u=t(24),E=t(31),b=t(73),h=t(155),f=t(156),p=t(6),k=t(158),g=t(148),v=t(157),N=t(147),y=t(67),D=t(68),_=t(47),w=t.n(_),G="https://e.plansys.co/edumatis/index.php?r=ppdb/",j=function(){function e(){Object(y.a)(this,e)}return Object(D.a)(e,null,[{key:"getSekolah",value:function(){var e=Object(u.a)(o.a.mark(function e(){var a,t,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=window.location.hostname,t="".concat("https://edumatis.plansys.co/api/Postgre?p=","sekolah?_fields=[nama_sekolah],[nama_singkat],[id]|_where=(ppdb_host,eq,").concat(a,")|_page=1|_size=25"),e.next=4,w.a.get(t);case 4:if(!((r=e.sent).data.length>0)){e.next=7;break}return e.abrupt("return",r.data[0]);case 7:return e.abrupt("return",r.data);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"cekAkta",value:function(){var e=Object(u.a)(o.a.mark(function e(a,t){var r,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(G,"cek&a=").concat(a,"&s=").concat(t),e.next=3,w.a.get(r);case 3:return s=e.sent,e.abrupt("return",s.data);case 5:case"end":return e.stop()}},e,this)}));return function(a,t){return e.apply(this,arguments)}}()},{key:"send",value:function(){var e=Object(u.a)(o.a.mark(function e(a){var t,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(G,"save&a=").concat(a.no_akta_kelahiran,"&s=").concat(a.sekolah_id),e.next=3,w.a.post(t,a);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}()}]),e}(),S=t(48),x=t.n(S),T=["no_ijazah","no_skhun","no_kk","no_akta_kelahiran","nama_lengkap","jenis_kelamin","agama","nisn","no_induk","nik","tempat_lahir","tgl_lahir","tinggi","berat","no_hp","email","nama_ayah","pekerjaan_ayah","pendidikan_ayah","penghasilan_ayah","nama_ibu","pekerjaan_ibu","pendidikan_ibu","jenis_tinggal","alamat","propinsi","no_hp_ortu","jarak_ke_sekolah","alat_transport"],O=function(e){var a=e.field,t=e.label,r=e.data,n=e.setData,l=e.errors,m=e.setErrors,d=e.suffix,o=e.multiline,u=void 0!==o&&o,E=e.onRenderSuffix,b=e.type,f=void 0===b?"text":b,p=e.onBlur;return s.a.createElement(h.a,{label:t,value:r[a],suffix:d,onBlur:p,multiline:u,onRenderSuffix:E,required:T.indexOf(a)>=0,onChange:function(e){var t=e.target.value;"number"===f&&(t=t.replace(/\D/g,"")),n(Object(c.a)({},r,Object(i.a)({},a,t))),l[a]&&(delete l[a],m(l))},errorMessage:l[a]})},P=function(e){var a=e.field,t=e.label,n=e.items,l=e.data,d=e.setData,o=e.errors,u=e.setErrors,b=Object(r.useState)(n),h=Object(E.a)(b,2),f=h[0],p=h[1];return l[a]&&f.indexOf(l[a])<0&&p([].concat(Object(m.a)(n),[l[a]])),s.a.createElement(N.a,{label:t,options:f.map(function(e){return{key:e,text:e}}),selectedKey:l[a],required:T.indexOf(a)>=0,onChange:function(e,r,s){var E=n[n.length-1],b=n[s];if(b===E&&E.toLowerCase().indexOf("lain")>=0){if(!(b=prompt("Sebutkan "+t+" Lainnya: ")))return;p([].concat(Object(m.a)(n),[b]))}d(Object(c.a)({},l,Object(i.a)({},a,b))),o[a]&&(delete o[a],u(o))},errorMessage:o[a]})},I=function(e){return s.a.createElement(b.a,Object.assign({height:160,width:400,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb",style:{height:200,marginTop:10}},e),s.a.createElement("rect",{x:"0",y:"0",rx:"3",ry:"3",width:"250",height:"15"}),s.a.createElement("rect",{x:"0",y:"25",rx:"3",ry:"3",width:"350",height:"15"}),s.a.createElement("rect",{x:"0",y:"50",rx:"3",ry:"3",width:"350",height:"15"}))};Number.prototype.pad=function(e){for(var a=String(this);a.length<(e||2);)a="0"+a;return a};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=t(74);Object(K.a)(),l.a.render(s.a.createElement(function(){var e=Object(r.useState)(!1),a=Object(E.a)(e,2),t=a[0],n=a[1],l=Object(r.useState)({berkebutuhan_khusus:"Tidak"}),m=Object(E.a)(l,2),i=m[0],d=m[1],b=Object(r.useState)({}),h=Object(E.a)(b,2),N=h[0],y=h[1],D=Object(r.useState)("draft"),_=Object(E.a)(D,2),w=_[0],G=_[1];return Object(r.useEffect)(function(){i.no_akta_kelahiran&&(localStorage.ppdb=JSON.stringify(i))},[i]),Object(r.useEffect)(function(){if(Object(u.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,j.getSekolah();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}},e,this)}))(),localStorage.ppdb)try{var e=JSON.parse(localStorage.ppdb);e.no_akta_kelahiran&&(d(e),G("loaded"))}catch(a){console.log(a)}},[]),!1!==t&&t.id?"loading"===w?s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"ms-font-su"},"Mengirim pendaftaran..."),s.a.createElement(I,null)):localStorage.ppdbId?s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"ms-font-su"},"Pendaftaran diterima"),s.a.createElement("div",{style:{marginTop:20,marginBottom:20}},s.a.createElement(f.a,{messageBarType:p.a.success},"Silakan lanjutkan untuk melakukan pembayaran menggunakan aplikasi Edumatis, berikut ini adalah informasi login anda")),s.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-around"}},s.a.createElement("pre",{style:{margin:50,textAlign:"left",fontWeight:"bold"},className:"ms-font-xl"},"Kode Siswa: ",t.id.pad(3),"-",localStorage.ppdbId,s.a.createElement("br",null),"Password  : 123"),s.a.createElement(k.a,{style:{float:"right"},onClick:function(){confirm("Mohon catat KodeSiswa dan Password, sudah dicatat ?")&&(localStorage.removeItem("ppdbId"),G("draft"))}},"Kembali ke halaman awal")),s.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},s.a.createElement("img",{src:"/edu0.png",alt:"Edumatis Play Store"}),s.a.createElement("br",null),s.a.createElement("img",{src:"/edu1.png",alt:"Edumatis Login"}),s.a.createElement("br",null))):s.a.createElement("div",{className:"wrapper"},s.a.createElement("h1",{className:"ms-font-su"},"PPDB ",t.nama_sekolah," "),{registered:s.a.createElement("div",{style:{marginTop:20,marginBottom:20}},s.a.createElement(f.a,{messageBarType:p.a.error},"No. Akta Kelahiran ini sudah terdaftar, mohon ubah data anda.")),draft:s.a.createElement("div",{style:{marginTop:20,marginBottom:20}},s.a.createElement(f.a,{messageBarType:p.a.info},"Isi No. Akta Kelahiran terlebih dahulu untuk memastikan data diri Anda belum pernah di-entry sebelumnya.")),loaded:s.a.createElement("div",{style:{marginTop:20,marginBottom:20}},s.a.createElement(f.a,{messageBarType:p.a.success},"Data anda sebelumnya berhasil dimuat. Silakan melanjutkan pengisian form.",s.a.createElement("br",null),s.a.createElement("br",null),"Atau jika Anda ingin mengulang dari awal, anda dapat",s.a.createElement("a",{href:"#",onClick:function(){confirm("Apakah Anda yakin ingin mengulang dari awal ?")&&(d({berkebutuhan_khusus:"Tidak"}),localStorage.removeItem("ppdb"),G("draft"))}},"klik disini untuk me-reset"),"."))}[w],s.a.createElement("div",{className:"ms-Grid",dir:"ltr"},s.a.createElement("h2",{className:"ms-font-xl"},"Informasi Pendaftaran"),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md6"},s.a.createElement(O,{label:"No. Akta Kelahiran",field:"no_akta_kelahiran",type:"number",onBlur:function(){var e=Object(u.a)(o.a.mark(function e(a){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cekAkta(a.target.value,t.id);case 2:e.sent.length>0?(G("registered"),y(Object(c.a)({},N,{no_akta_kelahiran:" ini sudah terdaftar"}))):G("loaded");case 4:case"end":return e.stop()}},e,this)}));return function(a){return e.apply(this,arguments)}}(),data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md6"},s.a.createElement(O,{label:"No. Kartu Keluarga",field:"no_kk",type:"number",data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm4"},s.a.createElement(O,{label:"NISN",field:"nisn",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm4"},s.a.createElement(O,{label:"No. Induk Siswa",field:"no_induk",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm4"},s.a.createElement(O,{label:"NIK",field:"nik",data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md6"},s.a.createElement(O,{label:"No. Ijazah Sebelumnya",field:"no_ijazah",type:"number",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md6 "},s.a.createElement(O,{label:"No. SKHUN Sebelumnya",field:"no_skhun",type:"number",data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("h2",{className:"ms-font-xl"},"Data Diri"),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm9 ms-md9"},s.a.createElement(O,{label:"Nama Lengkap",field:"nama_lengkap",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm3 ms-md3"},s.a.createElement(P,{field:"jenis_kelamin",label:"Jenis Kelamin",items:["Laki-Laki","Perempuan"],data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md3"},s.a.createElement(O,{label:"Tempat Lahir",field:"tempat_lahir",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md3"},s.a.createElement(g.a,{value:x()(i.tgl_lahir).toDate(),formatDate:function(e){return x()(e).format("DD MMM YYYY")},onSelectDate:function(e){null!=e&&d(Object(c.a)({},i,{tgl_lahir:x()(e).format("YYYY-MM-DD")}))},showWeekNumbers:!1,allowTextInput:!0,firstWeekOfYear:1,label:"Tanggal Lahir"})),s.a.createElement("div",{className:"ms-Grid-col ms-sm4 ms-md2"},s.a.createElement(O,{label:"Tinggi",field:"tinggi",suffix:"cm",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm4 ms-md2"},s.a.createElement(O,{label:"Berat",field:"berat",suffix:"kg",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm4 ms-md2"},s.a.createElement(O,{label:"Jml. Saudara",field:"jml_saudara",data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md6"},s.a.createElement(O,{label:"No. HP",field:"no_hp",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md6"},s.a.createElement(O,{label:"Email",field:"email",data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm3 ms-md3"},s.a.createElement(P,{field:"agama",label:"Agama",items:["Islam","Kristen Prostestan","Kristen Katolik","Hindu","Budha","Kong Hu Chu","Lainnya"],data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(O,{label:"Rombongan Belajar (Rombel)",field:"rombel",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm3"},s.a.createElement(O,{label:"Tingkat",field:"rombel_tingkat",data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm12"},s.a.createElement(P,{field:"berkebutuhan_khusus",label:"Berkebutuhan Khusus",items:["Tidak","Tuna Netra","Tuna Rungu","Tuna Grahita Ringan","Tuna Grahita Berat","Tuna Daksa Ringan ","Tuna Daksa Berat ","Tuna Laras ","Tuna Wicara","Tuna Ganda","Cerdas Istimewa","Bakat Istimewa","Kesulitan Belajar","Indigo","Down Sindrome","Autis","Terpencil / Terbelakang","Lain lain"],data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("h2",{className:"ms-font-xl"},"Data Ayah"),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(O,{label:"Nama Ayah",field:"nama_ayah",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(P,{field:"pekerjaan_ayah",label:"Pekerjaan Ayah",items:["Tidak Bekerja","Nelayan","Peternak","PNS/TNI/POLRI","Karyawan Swasta","Pedagang Kaki Lima","Pedagang Besar","Wiraswasta","Wirausaha","Buruh","Lain lain"],data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(O,{label:"NIK Ayah",field:"nik_ayah",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(O,{label:"Email Ayah",field:"email_ayah",data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(P,{field:"pendidikan_ayah",label:"Pendidikan Ayah",items:["Tidak Sekolah","Putus SD","SD Sederajat","SMP Sederajat","SMA Sederajat","D1","D2","D3","D4/S1","S2","S3"],data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(P,{field:"penghasilan_ayah",label:"Penghasilan Ayah",items:["Kurang Dari Rp 1.000.000","Rp 1.000.000 - Rp 3.000.000","Lebih Dari Rp 3.000.000"],data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("h2",{className:"ms-font-xl"},"Data Ibu"),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(O,{label:"Nama Ibu",field:"nama_ibu",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(P,{field:"pekerjaan_ibu",label:"Pekerjaan Ibu",items:["Ibu Rumah Tangga","Nelayan","Peternak","PNS/TNI/POLRI","Karyawan Swasta","Pedagang Kaki Lima","Pedagang Besar","Wiraswasta","Wirausaha","Buruh","Lain lain"],data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(O,{label:"NIK Ibu",field:"nik_ibu",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(O,{label:"Email Ibu",field:"email_ibu",data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(P,{field:"pendidikan_ibu",label:"Pendidikan Ibu",items:["Tidak Sekolah","Putus SD","SD Sederajat","SMP Sederajat","SMA Sederajat","D1","D2","D3","D4/S1","S2","S3"],data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6"},s.a.createElement(P,{field:"penghasilan_ibu",label:"Penghasilan Ibu",items:["Kurang Dari Rp 1.000.000","Rp 1.000.000 - Rp 3.000.000","Lebih Dari Rp 3.000.000"],data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("h2",{className:"ms-font-xl"},"Data Tempat Tinggal"),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md4 "},s.a.createElement(P,{field:"jenis_tinggal",label:"Jenis Tinggal",items:["Bersama orang tua","Bersama Wali","Kos","Asrama","Panti Asuhan","Lainnya"],data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm12 ms-md8"},s.a.createElement(O,{label:"Alamat",field:"alamat",multiline:!0,data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm1 ms-md4"}),s.a.createElement("div",{className:"ms-Grid-col ms-sm3 ms-md2"},s.a.createElement(O,{label:"RT",field:"alamat_rt",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm3 ms-md2"},s.a.createElement(O,{label:"RW",field:"alamat_rw",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm4 ms-md2"},s.a.createElement(O,{label:"Kode Pos",field:"alamat_kodepos",data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md3"},s.a.createElement(O,{field:"kelurahan",label:"Kelurahan/Desa",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md3"},s.a.createElement(O,{field:"kecamatan",label:"Kecamatan",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md3"},s.a.createElement(O,{field:"kabupaten",label:"kabupaten",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md3"},s.a.createElement(O,{field:"propinsi",label:"Propinsi",data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md6"},s.a.createElement(O,{field:"no_hp_ortu",label:"No. HP Orang Tua / Wali",data:i,setData:d,errors:N,setErrors:y})),s.a.createElement("div",{className:"ms-Grid-col ms-sm6 ms-md6"},s.a.createElement(O,{field:"jarak_ke_sekolah",label:"Jarak Tempat Tinggal ke Sekolah",suffix:"km",data:i,setData:d,errors:N,setErrors:y}))),s.a.createElement("div",{className:"ms-Grid-row"},s.a.createElement("div",{className:"ms-Grid-col ms-sm12"},s.a.createElement(P,{field:"alat_transport",label:"Alat Transportasi Ke Sekolah",items:["Jalan Kaki","Kendaraan Pribadi","Kendaraan Umum/Angkot/Pete-Pete","Jemputan Sekolah","Panti Asuhan","Lainnya"],data:i,setData:d,errors:N,setErrors:y}))),Object.keys(N).length>0&&s.a.createElement("div",{style:{marginTop:20}},s.a.createElement(f.a,{messageBarType:p.a.blocked},"Mohon benahi ",Object.keys(N).length," kesalahan berikut:",s.a.createElement("ul",null,Object.keys(N).map(function(e,a){return s.a.createElement("li",{key:a},e," ",N[e])})))),s.a.createElement(v.a,{primary:!0,style:{marginTop:20,marginBottom:200},onClick:Object(u.a)(o.a.mark(function e(){var a,r,s,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.cekAkta(i.no_akta_kelahiran,t.id);case 2:if(!(e.sent.length>0)){e.next=8;break}G("registered"),y(Object(c.a)({},N,{no_akta_kelahiran:" ini sudah terdaftar"})),e.next=20;break;case 8:for(a={},r=!1,s=0;s<T.length;s++)n=T[s],i[n]||(r=!0,a[n]="Harus diisi.");if(!r){e.next=15;break}y(a),e.next=20;break;case 15:return G("loading"),e.next=18,j.send(Object(c.a)({},i,{sekolah_id:t.id}));case 18:localStorage.ppdbId=e.sent,G("ready");case 20:case"end":return e.stop()}},e,this)})),secondaryText:"Dan lanjutkan membayar biaya pendaftaran"},"Simpan Data Diri"))):s.a.createElement("div",{className:"wrapper"},s.a.createElement("div",{className:"ms-font-su"},"Pendaftaran PPDB"),s.a.createElement(I,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},82:function(e,a,t){e.exports=t(109)},87:function(e,a,t){}},[[82,1,2]]]);
//# sourceMappingURL=main.dd5cad76.chunk.js.map