const HTML_M5_1 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">MATERI 1 - Pendahuluan</h1>
      <div className="w-10/12 mx-auto p-2 mt-5 opacity-100">
        <img
          className="rounded-lg mx-auto w-4/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687324570/M5_G1_cykn0n.png"
          alt="MissingIMG"
        />
      </div>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          Salah satu kelebihan dokumen HTML adalah memiliki kemampuan untuk
          saling terkait dengan dokumen lain. Link (sebutan singkat dari
          hyperlink text) adalah suatu metode yang digunakan dalam HTML untuk
          membuat hubungan antar halaman yang terdapat dalam satu situs web.
          Semua halaman web yang ada di internet hampir bisa dipastikan memiliki
          link. Secara umum, fungsi link adalah untuk memudahkan pengunjung web
          dalam menelusuri/menjelajahi seluruh isi atau informasi yang tersimpan
          dalam situs web bersangkutan.
        </p>
        <br />
        <p>
          Dalam keadaan default (normal), suatu link akan ditandai dengan teks
          berwarna biru yang memiliki garis bawah. Meskipun demikian, kita dapat
          mengubah warna dan gaya link sesuai dengan kebutuhan dan keinginan
          kita melalui pembuatan kode CSS.jika kita mengarahkan kursor ke suatu
          link tertentu, maka penunjuk mouse akan berubah menjadi gambar tangan
          dengan satu jari yang sedang menunjuk, seperti yang ditunjukkan oleh
          gambar di bawah ini.
        </p>
        <br />
        <p>
          Konsep atau cara kerja link dalam HTML dapat diilustrasikan melalui
          gambar berikut :
        </p>
      </div>
      <div className="w-10/12 mx-auto p-2 mt-5 opacity-100">
        <img
          className="rounded-lg mx-auto w-6/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687324660/M5_G2_jjmd3k.png"
          alt="MissingIMG"
        />
      </div>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <p>
          Pada gambar diatas, masing-masing halaman memiliki keterkaitan satu
          sama lain. Artinya, masing-masing halaman tersebut dapat dipanggil
          atau ditampilkan dari halaman manapun. Hal ini bisa terjadi jika
          setiap halaman di atas memiliki link.
        </p>
      </div>
    </>
  );
};

export default HTML_M5_1;
