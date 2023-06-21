const HTML_M4_2 = () => {
  return (
    <>
      <h1 className="font-semibold text-2xl">MATERI 3 - List Kombinasi</h1>
      <div className="w-10/12 mx-auto p-2 mt-5 opacity-100">
        <img
          className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687323540/M4_G8_imdc3r.png"
          alt="MissingIMG"
        />
      </div>
      <div className="py-5 text-black opacity-70 flex flex-col gap-y-4 font-normal">
        <br />
        <p>
          Dapat dilihat bahwa daftar di atas adalah gabungan daftar berurutan
          dan daftar tidak berurutan.
        </p>
        <br />
        <p>{`
            Untuk membuat daftar diatas pada dokumen HTML maka cukup menggabungkan <ol> dangan <ul>. 
            Ketika kita menggabungkan tag tidak berurutan <ul> tipe bullet dengan tag tidak berurutan 
            <ul> pada daftar berikutnya, maka daftar yang kedua oleh browser akan ditampilkan secara 
            otomatis menjadi daftar bullet. Tidak demikian dengan daftar berurutan <ol>, maka agar tipenya 
            sama dengan daftar berurutan sebelumnya, kita harus memberikan atribut tipe yang sama dengan
            daftar berurutan sebelumnya.
        `}</p>
        <br />
        <p>Contoh penulisannya adalah berikut:</p>
      </div>
      <div className="w-10/12 mx-auto p-2 opacity-100">
        <img
          className="rounded-lg mx-auto w-8/12 drop-shadow-[0px_8px_10px_rgba(0,0,0,0.4)]"
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1687323675/M4_G9_pmd5n6.png"
          alt="MissingIMG"
        />
      </div>
    </>
  );
};

export default HTML_M4_2;
