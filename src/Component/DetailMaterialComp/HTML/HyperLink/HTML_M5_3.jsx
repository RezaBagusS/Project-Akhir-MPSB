const HTML_M5_3 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">MATERI 3 - Jenis Link dalam HTML</h1>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          Dalam HTML, link dibedakan menjadi 3 jenis, yaitu link absolut, link
          relatif, link ke bagian dokumen tertentu. HTML membedakan ketiga jenis
          link diatas berdasarkan lokasi atau alamat dokumen yang akan diakses.
          Dengan demikian, perbedaannya hanya terletak pada nilai atribut
          HREF-nya saja.
        </p>
        <p className="font-semibold">- Link Absolute</p>
        <p>
          Link Absolut adalah link yang akan menunjuk ke halaman dari situs web
          lain. Penulisan alamatnya pun harus ditulis secara lengkap. Sebagai
          contoh, jika tema atau isi dari situs web yang kita buat adalah
          pemrograman HTML, maka kita dapat membuat link ke situs web lain yang
          memiliki tema yang sama atau relevan. Tujuannya adalah agar pengunjung
          bisa memperoleh informasi lebih tentang tema tersebut yang 'mungkin'
          tidak/belum kita bahas pada situs web kita.
        </p>
        <p>Contoh : </p>
      </div>
      <div className="w-10/12 mx-auto p-2 opacity-100">
        <img
          className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687325326/M6_G1_jeaqjh.png"
          alt="MissingIMG"
        />
      </div>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p className="font-semibold">- Link Relative</p>
        <p>
          Link Relatif adalah link yang tujuannya mengarah ke dokumen-dokumen
          lain yang masih berada di dalam satu situs web yang sama (komputer
          yang sama). Penulisan alamat tujuannya pun tidak perlu ditulis secara
          lengkap, cukup nama dokumennya saja, dan nama direktorinya (jika ada).
        </p>
        <p>Perhatikan contoh kode berikut : </p>
      </div>
      <div className="grid grid-cols-12 w-full p-2">
        <div className="col-span-8">
          <div className="w-full mx-auto p-2 opacity-100">
            <img
              className="rounded-lg mx-auto w-full drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687325326/M6_G1_jeaqjh.png"
              alt="MissingIMG"
            />
          </div>
        </div>
        <div className="col-span-4 flex justify-center items-center text-gray-900 px-2 font-medium">
          link yang dituju masih berada dalam satu direktori
        </div>
      </div>
      <div className="grid grid-cols-12 w-full p-2">
        <div className="col-span-8">
          <div className="w-full mx-auto p-2 opacity-100">
            <img
              className="rounded-lg mx-auto w-full drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687325835/M6_G3_txn73t.png"
              alt="MissingIMG"
            />
          </div>
        </div>
        <div className="col-span-4 flex justify-center items-center text-gray-900 px-2 font-medium">
          link yang dituju berada dalam direktori yang berbeda
        </div>
      </div>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          Kita tidak perlu menulis alamat secara lengkap karena server web akan
          mencari file kontak.html dan sahara.png di komputer yang sama. Jika
          halaman utama dari situs web yang akan kita buat adalah index.html,
          maka file kontak.html harus di tempatkan di dalam direktori yang sama
          dengan file index.html; Sedangkan sahara.jpg harus berada di dalam
          direktori images.
        </p>
        <p className="font-semibold">- Link ke Bagian Dokumen tertentu</p>
        <p>
          Link dapat berperan untuk mengarahkan ke bagian teks atau gambar
          tertentu yang masih berada dalam satu dokumen yang sama. Link seperti
          ini biasanya pada halaman web yang memiliki informasi yang panjang
          atau pada dokumen yang memiliki daftar isi di bagian atasnya.
          Tujuannya adalah agar para pengunjung tidak perlu melakukan scrolling
          pada halaman tersebut untuk menuju/kembali tertentu dalam dokumen
          bersangkutan.
        </p>
        <p>
          Dapat juga membuat link internal dalam suatu halaman - misalnya daftar
          isi di atas dengan link ke setiap bab . Yang perlu digunakan adalah
          atribut yang disebut id (identifikasi) dan simbol “#”.
        </p>
        <p>
          Gunakan atribut id untuk menandai elemen yang ingin ditautkan/link.
          Sebagai contoh:
        </p>
        <p className="p-2 bg-blue-gray-200">
          {`
            <h1 id="heading1">heading 1</h1>
          `}
        </p>
        <p>
          Sekarang kita dapat membuat link ke elemen dengan menggunakan ”#” di
          atribut link. Tanda “#” harus diikuti dengan id dari tag yang ingin
          ditautkan/link. Sebagai contoh:
        </p>
        <p className="p-2 bg-blue-gray-200">
          {`
            <a href="#heading1">Menuju ke heading 1</h1>
          `}
        </p>
        <p>Berikut ini contoh bila ada beberapa link internal :</p>
      </div>
      <div className="w-full mx-auto p-2 opacity-100">
            <img
              className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687326325/M6_G4_oqkchw.png"
              alt="MissingIMG"
            />
          </div>
    </>
  );
};

export default HTML_M5_3;
